/**
 * ==============================================================================
 * MOVIEROOM - ANDROID APK DISTRIBUTION CONFIGURATION
 * ==============================================================================
 * 
 * Jukwaa nambari moja la kutazama na kupakua filamu na tamthilia zilizotafsiriwa
 * kwa Kiswahili na ma-DJ maarufu.
 */

export interface AppFeature {
  id: string;
  title: string;
  description: string;
  iconName: 'Zap' | 'ShieldCheck' | 'RefreshCw' | 'Smartphone' | 'BarChart3' | 'CloudOff' | 'Lock' | 'Layers';
}

export interface AppScreenshot {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
}

export interface AppFaq {
  question: string;
  answer: string;
}

export interface AppConfiguration {
  name: string;
  tagline: string;
  shortDescription: string;
  publisher: string;
  publisherUrl?: string;
  publisherEmail: string;
  category: string;
  androidBadgeText: string;

  version: string;
  versionCode: number;
  apkSize: string;
  fileSizeBytes: number;
  minAndroid: string;
  targetAndroid: string;
  packageName: string;
  lastUpdated: string;
  architecture: string;

  apkDownloadUrl: string;
  apkFileName: string;

  appIconSrc: string;
  screenshots: AppScreenshot[];

  about: {
    summary: string;
    intro: string;
    sifaKuu: { title: string; desc: string }[];
    closing: string;
    problemSolved: string;
    targetAudience: string[];
    keyBenefits: string[];
  };

  features: AppFeature[];
  faqs: AppFaq[];

  privacyPolicyUrl: string;
  termsUrl: string;
  sourceCodeUrl?: string;
  supportEmail: string;
  shareText: string;
}

export const APP_CONFIG: AppConfiguration = {
  // 1. BRAND & IDENTITY
  name: "MovieRoom",
  tagline: "Tazama na pakua filamu na tamthilia zilizotafsiriwa kwa Kiswahili na ma-DJ maarufu",
  shortDescription: "Karibu MovieRoom, jukwaa lako nambari moja la kutazama na kupakua filamu na tamthilia zilizotafsiriwa kwa Kiswahili na ma-DJ maarufu.",
  publisher: "MovieRoom Media",
  publisherUrl: "https://movieroom.app",
  publisherEmail: "support@movieroom.app",
  category: "Burudani & Sinema (Entertainment)",
  androidBadgeText: "Android APK · Toleo Rasmi",

  // 2. TECHNICAL SPECIFICATIONS
  version: "1.0.0",
  versionCode: 10,
  apkSize: "24.8 MB",
  fileSizeBytes: 26062053,
  minAndroid: "Android 7.0 (Nougat / API 24)+",
  targetAndroid: "Android 14.0 (API 34)",
  packageName: "com.movieroom.app",
  lastUpdated: "Oktoba 2026",
  architecture: "Universal (arm64-v8a, armeabi-v7a)",

  // 3. LIVE CLOUDFLARE R2 APK DOWNLOAD URL
  apkDownloadUrl: "https://pub-5399f62037f94260b0f54c88a9297134.r2.dev/Movieroom.apk",
  apkFileName: "Movieroom.apk",

  // 4. VISUAL ASSETS
  appIconSrc: "/images/movieroom_icon.jpg",
  screenshots: [
    {
      id: "screen-1",
      title: "Filamu & Tamthilia Zilizotafsiriwa",
      caption: "Mkusanyiko mkubwa wa movies zikiwa na sauti na tafsiri ya Kiswahili safi na ma-DJ maarufu.",
      src: "/images/screenshot_1.jpg",
      alt: "MovieRoom Swahili movies home feed and categories"
    },
    {
      id: "screen-2",
      title: "Video Player ya Kisasa yenye Vidhibiti",
      caption: "Vidhibiti vya sauti na mwanga kwa kutelezesha kidole, kusogeza mbele/nyuma kwa kugusa mara mbili, na kufunga skrini.",
      src: "/images/screenshot_2.jpg",
      alt: "MovieRoom modern video player with gesture controls and screen lock"
    },
    {
      id: "screen-3",
      title: "Pakua na Utazame Bila Mtandao (Offline)",
      caption: "Pakua movie na episode uzipendazo na utazame popote hata bila bando la intaneti.",
      src: "/images/screenshot_3.jpg",
      alt: "MovieRoom offline downloads and storage management"
    }
  ],

  // 5. ABOUT THE APP
  about: {
    summary: "Karibu MovieRoom, jukwaa lako nambari moja la kutazama na kupakua filamu na tamthilia zilizotafsiriwa kwa Kiswahili na ma-DJ maarufu.",
    intro: "Karibu MovieRoom, jukwaa lako nambari moja la kutazama na kupakua filamu na tamthilia zilizotafsiriwa kwa Kiswahili na ma-DJ maarufu.",
    sifaKuu: [
      {
        title: "Filamu Zilizotafsiriwa Kiswahili",
        desc: "Tazama movies za kusisimua zikiwa na sauti na tafsiri ya Kiswahili safi."
      },
      {
        title: "Pakua na Utazame Bila Mtandao (Offline Downloads)",
        desc: "Pakua movie na episode uzipendazo na utazame popote hata bila bando la intaneti."
      },
      {
        title: "Video Player ya Kisasa",
        desc: "Vidhibiti vya sauti na mwanga kwa kutelezesha kidole, kusogeza mbele/nyuma kwa kugusa mara mbili, na kufunga skrini (screen lock)."
      },
      {
        title: "Ubora wa Juu na Kasi",
        desc: "Video zinafunguka haraka bila kukwamakwama."
      },
      {
        title: "Muundo wa Kisasa",
        desc: "Muonekano maridadi wa giza (dark mode) unaolinda macho yako."
      }
    ],
    closing: "Pakua MovieRoom sasa na ufurahie burudani popote ulipo!",
    problemSolved: "Wapenzi wengi wa filamu za Kiswahili na tafsiri za ma-DJ hupata shida kupata links za uhakika mtandaoni; tovuti nyingi zimejaa matangazo hatarishi, video zinagoma au kukwama (buffering), na hakuna namna rahisi ya kupakua kwa ajili ya kutazama nje ya mtandao. MovieRoom inamaliza changamoto hii kwa kuweka filamu zote zilizotafsiriwa mahali pamoja, zenye ubora wa juu, upakuaji wa haraka wa kutazama bila intaneti, na player ya kisasa.",
    targetAudience: [
      "Wapenzi wa sinema za kusisimua zilizotafsiriwa kwa lugha adhimu ya Kiswahili (Action, Series, Horror, Comedy)",
      "Mashabiki wa ma-DJ maarufu wa tafsiri wanaopenda ufafanuzi wa filamu wenye burudani ya kipekee",
      "Watazamaji wanaotaka kupakua movies wanapokuwa na Wi-Fi na kutazama baadaye safarini au nyumbani bila kutumia bando",
      "Watumiaji wa simu za Android wanaothamini programu nyepesi, salama na yenye muundo wa giza (dark mode)"
    ],
    keyBenefits: [
      "Burudani kamili ya filamu zilizotafsiriwa Kiswahili fasaha na ma-DJ maarufu",
      "Kutazama nje ya mtandao (Offline Downloads) bila kutumia bando la intaneti",
      "Video player ya kipekee yenye swipe controls, double-tap skip na screen lock",
      "Kasi ya hali ya juu bila kukwama na muundo wa giza unaolinda macho"
    ]
  },

  // 6. FEATURES
  features: [
    {
      id: "feat-1",
      title: "Filamu Zilizotafsiriwa Kiswahili",
      description: "Tazama movies za kusisimua zikiwa na sauti na tafsiri ya Kiswahili safi kutoka kwa ma-DJ maarufu.",
      iconName: "Zap"
    },
    {
      id: "feat-2",
      title: "Pakua na Utazame Bila Mtandao",
      description: "Pakua movie na episode uzipendazo na utazame popote hata bila bando la intaneti (Offline Downloads).",
      iconName: "CloudOff"
    },
    {
      id: "feat-3",
      title: "Video Player ya Kisasa",
      description: "Vidhibiti vya sauti na mwanga kwa kutelezesha kidole, kusogeza mbele/nyuma kwa kugusa mara mbili, na kufunga skrini (screen lock).",
      iconName: "Smartphone"
    },
    {
      id: "feat-4",
      title: "Ubora wa Juu na Kasi",
      description: "Video zinafunguka haraka bila kukwamakwama na picha zenye ung'avu mkubwa (HD resolution).",
      iconName: "RefreshCw"
    },
    {
      id: "feat-5",
      title: "Muundo wa Kisasa (Dark Mode)",
      description: "Muonekano maridadi wa giza unaovutia, unaorahisisha matumizi na unaolinda macho yako wakati unatazama usiku.",
      iconName: "Layers"
    },
    {
      id: "feat-6",
      title: "Nyepesi & Salama Kwenye Simu",
      description: "Faili ya APK ya 24.8 MB pekee, haimalizi betri, na haina matangazo yanayokera au ruhusa zisizo za lazima.",
      iconName: "ShieldCheck"
    }
  ],

  // 7. FREQUENTLY ASKED QUESTIONS
  faqs: [
    {
      question: "Je, MovieRoom ni bure kupakua na kutumia?",
      answer: "Ndiyo! MovieRoom ni bure kabisa kupakua na kuitumia. Unaweza kutazama na kupakua filamu na tamthilia zilizotafsiriwa Kiswahili bila malipo yoyote ya usajili."
    },
    {
      question: "Je, filamu zote zimetafsiriwa kwa Kiswahili?",
      answer: "Ndiyo! Ndani ya MovieRoom utapata mkusanyiko mkubwa wa filamu na tamthilia zilizotafsiriwa na ma-DJ maarufu zenye sauti safi na simulizi za kusisimua."
    },
    {
      question: "Inakuwaje nikitaka kutazama bila bando (Offline)?",
      answer: "Bofya kitufe cha Pakua (Download) chini ya movie au tamthilia yoyote. Mara tu inapokamilika kupakua, unaweza kuzima intaneti yako na kuitazama popote ulipo bila kutumia bando."
    },
    {
      question: "Video player inafanyaje kazi kwa kutelezesha kidole (gestures)?",
      answer: "Unapotazama video: telezesha kidole kushoto kurekebisha mwanga (brightness), telezesha kulia kurekebisha sauti (volume), gusa skrini mara mbili (double-tap) kusogeza mbele au kurudi nyuma sekunde 10, na bofya alama ya kufuli kufunga skrini isibonyezwe kwa bahati mbaya."
    },
    {
      question: "Kwa nini simu inaonyesha 'File might be harmful' wakati wa kupakua?",
      answer: "Hili ni onyo la kawaida la kiusalama linalotolewa na simu zote za Android unapopakua programu (APK) moja kwa moja kutoka kwenye kivinjari badala ya Play Store. MovieRoom ni salama 100%, haina virusi wala programu hatarishi. Bofya 'Download anyway' kisha usakinishe kwa amani."
    },
    {
      question: "Jinsi ya kusakinisha (install) faili ya APK ya MovieRoom?",
      answer: "Baada ya kupakua kumalizika: 1) Gusa 'OPEN' (Fungua) chini ya kivinjari au kwenye notification ya simu yako. 2) Simu ikikuuliza ruhusa ya 'Install unknown apps', weka 'Allow from this source'. 3) Bofya 'Install'. 4) Fungua MovieRoom na uanze kufurahia filamu."
    },
    {
      question: "Je, inawezekana kisakinishi cha Android (Package Installer) kikaanza chenyewe bila kubofya?",
      answer: "Kwenye mifumo ya Android na vivinjari (kama Google Chrome), kwa sababu za kiusalama (kuzuia virusi visijisakinishie vyenyewe kisiri), Android inahitaji uguso wako mara moja tu. Mara baada ya upakuaji kumalizika, Chrome inaweka kitufe cha 'OPEN' (Fungua) chini kabisa mwa skrini na kwenye notification. Ukigusa 'OPEN', Android inafungua kisakinishi moja kwa moja bila haja ya kutafuta kwenye folda la My Files!"
    },
    {
      question: "Nifanye nini nikipata hitilafu ya 'App not installed'?",
      answer: "Hakikisha simu yako ina nafasi ya kutosha ya memory (angalau 100 MB). Pia hakikisha una Android toleo la 7.0 au zaidi. Iwapo ulikuwa na toleo la awali la MovieRoom, lifute kwanza kisha usakinishe toleo hili jipya."
    }
  ],

  // 8. LEGAL & CONTACT
  privacyPolicyUrl: "#privacy-policy",
  termsUrl: "#terms",
  supportEmail: "support@movieroom.app",
  shareText: "Pakua MovieRoom sasa: Jukwaa nambari moja la kutazama na kupakua filamu na tamthilia zilizotafsiriwa kwa Kiswahili na ma-DJ maarufu: "
};
