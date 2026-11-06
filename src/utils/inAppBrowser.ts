/**
 * In-App Browser Detector & Android Chrome Intent Helper
 * Solves the issue where social media apps (Instagram, TikTok, Facebook, etc.)
 * open links in restricted WebViews that block .apk downloads and installation.
 */

export interface InAppBrowserInfo {
  isInApp: boolean;
  appName?: 'Instagram' | 'TikTok' | 'Facebook' | 'Twitter' | 'WhatsApp' | 'Telegram' | 'Snapchat' | 'WebView' | 'Other';
  isAndroid: boolean;
}

export function detectInAppBrowser(): InAppBrowserInfo {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return { isInApp: false, isAndroid: false };
  }

  const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
  const isAndroid = /android/i.test(ua);

  let appName: InAppBrowserInfo['appName'] | undefined;

  if (/Instagram/i.test(ua)) {
    appName = 'Instagram';
  } else if (/musical_ly|ByteLocale|TikTok|Bytedance/i.test(ua)) {
    appName = 'TikTok';
  } else if (/FBAN|FBAV|FB_IAB/i.test(ua)) {
    appName = 'Facebook';
  } else if (/Twitter|X-App/i.test(ua)) {
    appName = 'Twitter';
  } else if (/WhatsApp/i.test(ua)) {
    appName = 'WhatsApp';
  } else if (/Telegram/i.test(ua)) {
    appName = 'Telegram';
  } else if (/Snapchat/i.test(ua)) {
    appName = 'Snapchat';
  } else if (/wv|Version\/[0-9.]+/i.test(ua) && isAndroid && !/Chrome\/[.0-9]+ Mobile/i.test(ua)) {
    appName = 'WebView';
  }

  const isInApp = Boolean(appName);

  return {
    isInApp,
    appName,
    isAndroid,
  };
}

/**
 * Builds an Android intent URL that forces Google Chrome to open the target URL.
 */
export function getChromeIntentUrl(targetUrl?: string): string {
  if (typeof window === 'undefined') return '';
  const url = targetUrl || window.location.href;
  const noProtocol = url.replace(/^https?:\/\//i, '');
  return `intent://${noProtocol}#Intent;scheme=https;package=com.android.chrome;end`;
}

/**
 * Directs the user to open the URL in Chrome using Android Intent,
 * falling back to window.open.
 */
export function openInChrome(targetUrl?: string): void {
  if (typeof window === 'undefined') return;

  const intentUrl = getChromeIntentUrl(targetUrl);
  try {
    window.location.href = intentUrl;
  } catch (err) {
    console.error('Failed to launch Chrome intent', err);
    if (targetUrl) {
      window.open(targetUrl, '_blank');
    }
  }
}
