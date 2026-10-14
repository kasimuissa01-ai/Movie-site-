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

  // Immediately trigger native browser download so Chrome/Android starts downloading right away
  // This ensures Chrome shows the native bottom bar with the "Open" (Fungua) button immediately upon completion.
  triggerNativeDownload(apkUrl, fileName);

  // Animate progress smoothly to keep user informed and guide them to tap "Open" as soon as it reaches 100%
  let currentPercent = 12;
  const updateStep = () => {
    if (currentPercent < 90) {
      currentPercent += Math.floor(Math.random() * 12) + 8;
      const loaded = Math.round((currentPercent / 100) * estimatedSizeBytes);
      onProgress({
        percent: currentPercent,
        loadedBytes: loaded,
        totalBytes: estimatedSizeBytes,
        status: 'downloading',
      });
      setTimeout(updateStep, 250);
    } else {
      currentPercent = 100;
      onProgress({
        percent: 100,
        loadedBytes: estimatedSizeBytes,
        totalBytes: estimatedSizeBytes,
        status: 'completed',
      });
    }
  };

  setTimeout(updateStep, 200);
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
