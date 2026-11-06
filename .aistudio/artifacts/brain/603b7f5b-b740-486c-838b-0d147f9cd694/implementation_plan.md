# Social Media In-App Browser Detection & Seamless Chrome Launcher

Provide an automated detection mechanism and user-friendly "Open in Chrome" guidance for visitors arriving via social media bio links (Instagram, TikTok, Facebook, Twitter, WhatsApp) so they can download and install the MovieRoom APK without in-app browser download restrictions.

## User Review & Critical Decisions

> [!IMPORTANT]
> Social media in-app browsers (WebViews) intentionally restrict direct `.apk` downloads and cannot trigger the Android Package Installer. To solve this, we implement a two-step solution:
> 1. Automatic detection of in-app browsers with a 1-tap Android Chrome Intent launcher (`intent://...#Intent;scheme=https;package=com.android.chrome;end`).
> 2. A visual 3-dots guidance banner showing users how to tap the top-right menu and choose "Open in external browser / Chrome".

- **Confirmed Decision**: Automatic detection of social media in-app browsers (Instagram, TikTok, Facebook, WhatsApp, etc.).
- **Confirmed Mechanism**: One-tap "Open in Chrome" button leveraging Android's native Chrome Intent protocol, paired with animated 3-dots visual instructions.
- **Language & Tone**: Fully bilingual in Kiswahili and English matching the existing landing page theme.

---

## 1. Overview & Core Concept

- **What It Does**: Detects when a visitor opens the landing page inside a social media in-app browser (e.g., from an Instagram or TikTok bio). Displays an elegant, non-intrusive top banner and download modal assistance that lets the user escape the in-app browser directly into Google Chrome with one click.
- **Target Audience / Persona**: Mobile users browsing Instagram, TikTok, Facebook, or Twitter on Android who click the bio link to download MovieRoom.
- **Key Value**: Eliminates download failures, blocked APK warnings, and inability to open the package installer caused by in-app WebViews.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Detection on Load**: When the page loads, the detector checks `navigator.userAgent` for in-app browser signatures (`FBAN`, `FBAV`, `Instagram`, `musical_ly`, `TikTok`, `Twitter`, `WhatsApp`, etc.).
2. **Top Guidance Banner**:
   - If an in-app browser is detected, a sleek red-accented floating banner appears at the top.
   - Shows a prominent **"Fungua kwenye Chrome (Open in Chrome)"** button that fires the Chrome intent.
   - Includes a discreet dropdown/tooltip with clear visual guidance: *"Gusa nukta 3 (⋮) juu kulia kisha chagua 'Open in Chrome'"*.
   - Can be easily dismissed with an `(X)` close button.
3. **Download Modal Fallback**:
   - When the user taps the primary "Pakua MovieRoom APK" button while inside an in-app browser, the download modal prioritizes an **"Open in Chrome to Install"** button that directly triggers the intent, alongside a 1-tap **"Copy Link"** button.

### Visual Identity & Theme
- **Theme Consistency**: Seamlessly matches MovieRoom's dark cinematic palette (`#070d18`, `#0a0f1d`) and vibrant red gradient accents (`from-red-600 via-rose-600 to-red-700`).
- **Typography & Icons**: Uses the established Plus Jakarta Sans display and DM Sans body typography, with Lucide icons (`ExternalLink`, `Compass`, `MoreVertical`, `Copy`).
- **Mobile Height Constraint**: The banner is compact and strictly stays within the 15% mobile sticky budget.

---

## 3. Key Product Decisions & Trade-Offs

- **Android Chrome Intent Protocol**:
  - *Chosen Approach*: `intent://${window.location.host}${window.location.pathname}${window.location.search}#Intent;scheme=https;package=com.android.chrome;end`
  - *Why*: Provides the highest conversion rate by directly launching the standalone Chrome app without requiring manual copy-pasting.
  - *Fallback*: For in-app browsers that block intent schemes, the visual 3-dot overlay guidance and 1-tap copy link ensure 100% of users can reach Chrome.
- **Non-Blocking Experience**:
  - *Chosen Approach*: A dismissible top banner rather than a full-page barrier.
  - *Why*: Allows visitors to read about features, screenshots, and FAQs freely while keeping the Chrome escape route immediately available.

---

## 4. Technical Architecture & Data Strategy

```
┌──────────────────────────────────────────────────────────────┐
│                    Visitor Opens Bio Link                    │
│           (Instagram, TikTok, Facebook, WhatsApp)            │
└──────────────────────────────┬───────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────┐
│       In-App Browser Detector (utils/inAppBrowser.ts)        │
│          Checks User Agent for IAB signatures                │
└──────────────┬───────────────────────────────┬───────────────┘
               │ Detected                      │ Normal Browser
               ▼                               ▼
┌──────────────────────────────┐ ┌─────────────────────────────┐
│  InAppBrowserBanner.tsx      │ │ Standard Landing Page       │
│  - One-tap Chrome Intent     │ │ (Normal download flow)      │
│  - 3-Dots Visual Guide       │ └─────────────────────────────┘
│  - Copy Link fallback        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────────────────────────────────────┐
│           DownloadModal.tsx (In-App Aware)                   │
│   - Provides "Open in Chrome" prominent CTA                  │
│   - Directs user to Package Installer seamlessly             │
└──────────────────────────────────────────────────────────────┘
```

### Components & Handlers

1. **`src/utils/inAppBrowser.ts`**:
   - `isInAppBrowser(): boolean`: User agent parser identifying Instagram, Facebook, TikTok, Twitter, Snapchat, Line, WeChat, and Android WebViews.
   - `getChromeIntentUrl(targetUrl?: string): string`: Builds the standard Android Chrome intent URL.
   - `openInChrome(url?: string): void`: Attempts the intent redirect with graceful fallback.

2. **`src/components/InAppBrowserBanner.tsx`**:
   - Sleek dismissible top bar with bilingual messages.
   - "Fungua Kwenye Chrome" primary action button.
   - Visual 3-dots guidance indicator.

3. **`src/components/DownloadModal.tsx`**:
   - Enhanced with an in-app browser alert card if opened inside social media WebViews.
