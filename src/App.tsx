/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import { APP_CONFIG, AppScreenshot } from './appConfig';
import { TRANSLATIONS, Language } from './translations';
import { downloadApkWithProgress, DownloadProgress } from './utils/apkDownloader';

// Subcomponents replicating movieboxdownload.com layout & polish
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TechSpecSection } from './components/TechSpecSection';
import { AboutSection } from './components/AboutSection';
import { InstallationGuide } from './components/InstallationGuide';
import { FeaturesSection } from './components/FeaturesSection';
import { SmartTvSection } from './components/SmartTvSection';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { SafetyCard } from './components/SafetyCard';
import { FaqSection } from './components/FaqSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { DownloadModal } from './components/DownloadModal';
import { ShareModal } from './components/ShareModal';
import { QrModal } from './components/QrModal';
import { LightboxModal } from './components/LightboxModal';
import { LegalModal } from './components/LegalModals';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';

export default function App() {
  // Bilingual Language State (sw / en)
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('movieroom_lang');
      if (saved === 'en' || saved === 'sw') return saved;
    }
    return 'sw';
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const next: Language = prev === 'sw' ? 'en' : 'sw';
      if (typeof window !== 'undefined') {
        localStorage.setItem('movieroom_lang', next);
      }
      return next;
    });
  };

  const t = TRANSLATIONS[lang];

  // Modals
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Download Progress State
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress>({
    percent: 0,
    loadedBytes: 0,
    totalBytes: APP_CONFIG.fileSizeBytes,
    status: 'idle',
  });

  // Lightbox state for screenshots
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number | null>(null);

  // Sticky mobile bar & back to top button state
  const [stickyVisible, setStickyVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-red-100 selection:text-red-950 pb-14 sm:pb-0">
      
      {/* 1. Header with Language Toggle & Gradient Download CTA */}
      <Header
        lang={lang}
        t={t}
        onToggleLang={toggleLanguage}
        onDownloadClick={handleDownload}
      />

      {/* Main Content Sections matching movieboxdownload.com */}
      <main className="flex-1">
        
        {/* 2. Hero Section: Dark Cinematic Background, App Icon Badge, Big Download Button & 4 Frosted Badges (Screenshot 1 & 2) */}
        <HeroSection
          lang={lang}
          t={t}
          heroRef={heroRef}
          onDownloadClick={handleDownload}
        />

        {/* 3. TechSpecSection: "Download MovieRoom Latest Version" + "App Info Card" Table (Screenshot 3 & 4) */}
        <TechSpecSection
          lang={lang}
          t={t}
          onDownloadClick={handleDownload}
        />

        {/* 4. AboutSection: "What is MovieRoom?" + Community Illustration Banner (Screenshot 5) */}
        <AboutSection
          lang={lang}
          t={t}
        />

        {/* 5. InstallationGuide: Step 1, Step 2, and Step 3 with Realistic Mockup Cards & Pointer Hand (Screenshot 6 & 7) */}
        <InstallationGuide
          lang={lang}
          t={t}
          onDownloadClick={handleDownload}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* 6. FeaturesSection: "Why Choose MovieRoom?" with Smartphone Mockup in Circular Halo & Bullets (Screenshot 8) */}
        <FeaturesSection
          lang={lang}
          t={t}
        />

        {/* 7. SmartTvSection: "MovieRoom TV - Now on Smart TV" (Screenshot 9) */}
        <SmartTvSection
          lang={lang}
          t={t}
          onDownloadClick={handleDownload}
        />

        {/* 8. Official Screenshots Gallery with Lightbox */}
        <ScreenshotGallery
          lang={lang}
          t={t}
          onScreenshotClick={handleScreenshotClick}
        />

        {/* 9. Safety & Antivirus Verification Card */}
        <SafetyCard
          lang={lang}
          t={t}
        />

        {/* 10. Frequently Asked Questions Accordion */}
        <FaqSection
          lang={lang}
          t={t}
        />

      </main>

      {/* 11. Footer with Disclaimer, DMCA & Support */}
      <Footer
        lang={lang}
        t={t}
        onPrivacyClick={() => setLegalModalType('privacy')}
        onTermsClick={() => setLegalModalType('terms')}
      />

      {/* Floating Back to Top Button (matching bottom-left chevron in screenshots) */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-5 left-5 z-40 w-11 h-11 rounded-xl bg-white border border-slate-300 shadow-lg text-slate-700 hover:text-red-600 hover:border-red-400 hover:bg-slate-50 flex items-center justify-center transition-all animate-in fade-in"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* 12. Sticky Mobile Download Bar */}
      <StickyMobileBar
        visible={stickyVisible}
        lang={lang}
        t={t}
        onDownloadClick={handleDownload}
      />

      {/* 13. Download Modal with Real-Time Percentage Tracking */}
      <DownloadModal
        isOpen={downloadModalOpen}
        lang={lang}
        t={t}
        progress={downloadProgress}
        onClose={() => setDownloadModalOpen(false)}
        onRetryDownload={handleDownload}
      />

      {/* 14. Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      {/* 15. QR Code Modal */}
      <QrModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />

      {/* 16. Lightbox Modal for Screenshots */}
      <LightboxModal
        screenshot={activeScreenshotIndex !== null ? APP_CONFIG.screenshots[activeScreenshotIndex] : null}
        screenshots={APP_CONFIG.screenshots}
        currentIndex={activeScreenshotIndex ?? 0}
        onClose={() => setActiveScreenshotIndex(null)}
        onNavigate={(idx) => setActiveScreenshotIndex(idx)}
      />

      {/* 17. Legal Policy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* 18. Video Tutorial Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        lang={lang}
        t={t}
        onClose={() => setVideoModalOpen(false)}
        onDownloadClick={handleDownload}
      />

    </div>
  );
}
