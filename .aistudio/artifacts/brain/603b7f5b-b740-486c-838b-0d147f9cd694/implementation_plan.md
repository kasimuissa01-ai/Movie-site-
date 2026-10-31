# Implementation Plan - Add "How to Install" Video Player in Installation Guide

## User Goal
Add a clear, visible embedded video player for the "How to Install MovieRoom APK" tutorial right inside the **Installation Guide** section between Step 1 and Step 2, featuring a tutorial preview thumbnail, interactive play button, and modal playback support.

## Proposed Changes

### 1. Translations (`src/translations.ts`)
- Add translation strings for the installation video card ("Tazama Video ya Kusakinisha - How to Install Video Guide", "Jifunze jinsi ya kupakua na kusakinisha MovieRoom APK hatua kwa hatua", "Play Video", etc.) in both Swahili and English.

### 2. Installation Guide Component (`src/components/InstallationGuide.tsx`)
- Insert a dedicated video preview card between Step 1 and Step 2.
- The card will feature:
  - A cinematic thumbnail preview with Play button overlay.
  - Bilingual titles and descriptions.
  - Click-to-play functionality that opens an interactive video modal (or inline video player simulation with realistic playback controls).

### 3. Video Modal Component (`src/components/VideoModal.tsx` or similar)
- Create a clean modal component for playing the installation tutorial video (supporting simulated playback, close button, time scrubber, and full screen experience).

## Verification Plan
- Verify compilation (`compile_applet`) and type safety (`lint_applet`).
- Test responsiveness across mobile viewports.
