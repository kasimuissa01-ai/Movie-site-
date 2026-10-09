/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { APP_CONFIG, AppScreenshot } from './appConfig';
import { downloadApkWithProgress, DownloadProgress } from './utils/apkDownloader';

// Subcomponents
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TechSpecSection } from './components/TechSpecSection';
import { InstallationGuide } from './components/InstallationGuide';
import { FaqSection } from './components/FaqSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { DownloadModal } from './components/DownloadModal';
import { ShareModal } from './components/ShareModal';
import { QrModal } from './components/QrModal';
import { LightboxModal } from './components/LightboxModal';
import { LegalModal } from './components/LegalModals';
import { Footer } from './components/Footer';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Download Progress State (percentage, bytes, status)
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress>({
    percent: 0,
    loadedBytes: 0,
    totalBytes: APP_CONFIG.fileSizeBytes,
    status: 'idle',
  });

  // Lightbox state for screenshots
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number | null>(null);

  // Sticky mobile bar intersection observer state
  const [stickyVisible, setStickyVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is NOT intersecting (scrolled away), show sticky bar
        setStickyVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Primary Download Trigger with Real-Time Percentage Tracking
  const handleDownload = async () => {
    setDownloadModalOpen(true);
    await downloadApkWithProgress(
      APP_CONFIG.apkDownloadUrl,
      APP_CONFIG.apkFileName,
      APP_CONFIG.fileSizeBytes,
      (progress) => {
        setDownloadProgress(progress);
      }
    );
  };

  const handleScreenshotClick = (_screen: AppScreenshot, index: number) => {
    setActiveScreenshotIndex(index);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900 pb-14 sm:pb-0">
      
      {/* 1. Header (Strict Top Bar Contract: Brand - 4-5 Links - 1 CTA) */}
      <Header
        onDownloadClick={handleDownload}
        onShareClick={() => setShareModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section with App Icon, Spec strip, and Download Button */}
        <HeroSection
          heroRef={heroRef}
          onDownloadClick={handleDownload}
          onShareClick={() => setShareModalOpen(true)}
          onQrClick={() => setQrModalOpen(true)}
        />

        {/* 3. Screenshot Gallery with Mobile Touch-Snap & Desktop Carousel */}
        <ScreenshotGallery
          onScreenshotClick={handleScreenshotClick}
        />

        {/* 4. About This App & Editorial Narrative */}
        <AboutSection />

        {/* 5. Key Features Bento Grid */}
        <FeaturesSection />

        {/* 6. Step-by-Step Android Installation Guide */}
        <InstallationGuide
          onDownloadClick={handleDownload}
        />

        {/* 7. Technical Specifications */}
        <TechSpecSection
          onPrivacyClick={() => setLegalModalType('privacy')}
          onTermsClick={() => setLegalModalType('terms')}
        />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

      </main>

      {/* 9. Professional Developer Footer */}
      <Footer
        onPrivacyClick={() => setLegalModalType('privacy')}
        onTermsClick={() => setLegalModalType('terms')}
      />

      {/* 10. Mobile Sticky Download Bar (Appears when hero is scrolled past, strictly <= 15% viewport) */}
      <StickyMobileBar
        visible={stickyVisible}
        onDownloadClick={handleDownload}
      />

      {/* --- Interactive Modals --- */}

      {/* Download Next Steps Modal with Live Percentage Progress */}
      <DownloadModal
        isOpen={downloadModalOpen}
        progress={downloadProgress}
        onClose={() => setDownloadModalOpen(false)}
        onRetryDownload={handleDownload}
      />

      {/* Social Sharing Modal (WhatsApp, Telegram, X, Facebook, Web Share) */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      {/* Desktop to Mobile Phone QR Code Modal */}
      <QrModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />

      {/* Screenshot Fullscreen Lightbox Modal */}
      {activeScreenshotIndex !== null && (
        <LightboxModal
          screenshot={APP_CONFIG.screenshots[activeScreenshotIndex]}
          screenshots={APP_CONFIG.screenshots}
          currentIndex={activeScreenshotIndex}
          onClose={() => setActiveScreenshotIndex(null)}
          onNavigate={(newIdx) => setActiveScreenshotIndex(newIdx)}
        />
      )}

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
