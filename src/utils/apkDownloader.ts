/**
 * Utility function to stream or trigger APK download with real-time percentage progress
 */

export interface DownloadProgress {
  percent: number;
  loadedBytes: number;
  totalBytes: number;
  status: 'idle' | 'starting' | 'downloading' | 'completed' | 'error';
  errorMessage?: string;
}

export type ProgressCallback = (progress: DownloadProgress) => void;

/**
 * Initiates APK download with progress tracking.
 * Attempts stream fetch for exact byte percentage; falls back to simulated progress + anchor trigger if CORS blocked.
 */
export async function downloadApkWithProgress(
  apkUrl: string,
  fileName: string,
  estimatedSizeBytes: number,
  onProgress: ProgressCallback
): Promise<void> {
  onProgress({
    percent: 0,
    loadedBytes: 0,
    totalBytes: estimatedSizeBytes,
    status: 'starting',
  });

  try {
    const response = await fetch(apkUrl, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    const contentLengthHeader = response.headers.get('content-length');
    const totalBytes = contentLengthHeader
      ? parseInt(contentLengthHeader, 10)
      : estimatedSizeBytes;

    if (!response.body) {
      throw new Error('ReadableStream not supported by browser');
    }

    const reader = response.body.getReader();
    const chunks: Uint8Array[] = [];
    let receivedBytes = 0;

    onProgress({
      percent: 5,
      loadedBytes: 0,
      totalBytes,
      status: 'downloading',
    });

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      if (value) {
        chunks.push(value);
        receivedBytes += value.length;
        const percent = Math.min(
          99,
          Math.max(5, Math.round((receivedBytes / totalBytes) * 100))
        );

        onProgress({
          percent,
          loadedBytes: receivedBytes,
          totalBytes,
          status: 'downloading',
        });
      }
    }

    // Finished streaming - create blob and trigger save
    const blob = new Blob(chunks as unknown as BlobPart[], {
      type: 'application/vnd.android.package-archive',
    });
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => URL.revokeObjectURL(blobUrl), 30000);

    onProgress({
      percent: 100,
      loadedBytes: receivedBytes || totalBytes,
      totalBytes,
      status: 'completed',
    });
  } catch (err) {
    // If CORS or stream fails (e.g. cross-origin GitHub releases without CORS headers),
    // trigger native browser download directly via anchor tag and show smooth progress feedback.
    console.warn('Direct stream fetch failed, falling back to browser native download:', err);

    triggerNativeDownload(apkUrl, fileName);

    // Simulate progress animation over 2.5s for seamless user feedback
    let currentPercent = 10;
    const interval = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 15) + 10;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(interval);
        onProgress({
          percent: 100,
          loadedBytes: estimatedSizeBytes,
          totalBytes: estimatedSizeBytes,
          status: 'completed',
        });
      } else {
        const loaded = Math.round((currentPercent / 100) * estimatedSizeBytes);
        onProgress({
          percent: currentPercent,
          loadedBytes: loaded,
          totalBytes: estimatedSizeBytes,
          status: 'downloading',
        });
      }
    }, 250);
  }
}

/**
 * Native anchor click trigger for direct browser downloads
 */
export function triggerNativeDownload(apkUrl: string, fileName: string): void {
  const link = document.createElement('a');
  link.href = apkUrl;
  link.download = fileName;
  link.target = '_self';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
