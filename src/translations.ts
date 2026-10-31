export type Language = 'sw' | 'en';

export interface TranslationDictionary {
  nav: {
    home: string;
    appInfo: string;
    features: string;
    screenshots: string;
    howToInstall: string;
    faq: string;
    downloadApk: string;
    share: string;
    switchLang: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    downloadBtn: string;
    freeSecure: string;
    downloadsWorldwide: string;
    starRating: string;
    updatedDaily: string;
  };
  appInfoSection: {
    heading: string;
    description: string;
    ratingText: string;
    sizeText: string;
    downloadsText: string;
    downloadBtn: string;
    freeSecure: string;
    cardHeading: string;
    rows: {
      appName: string;
      latestVersion: string;
      fileSize: string;
      supportedOs: string;
      pricing: string;
      category: string;
      languages: string;
      developer: string;
      totalDownloads: string;
    };
  };
  whatIs: {
    title: string;
    p1: string;
    p2: string;
  };
  installGuide: {
    title: string;
    subtitle: string;
    videoPrompt: string;
    watchBtn: string;
    step1: {
      stepLabel: string;
      title: string;
      desc: string;
      mockupTitle: string;
      mockupSubtitle: string;
      mockupBtn: string;
    };
    step2: {
      stepLabel: string;
      title: string;
      desc: string;
      dialogPrompt: string;
      cancelBtn: string;
      installBtn: string;
    };
    step3: {
      stepLabel: string;
      title: string;
      desc: string;
    };
  };
  whyChoose: {
    title: string;
    desc: string;
    bullets: string[];
  };
  smartTv: {
    title: string;
    desc: string;
    ratingText: string;
    platformText: string;
    downloadBtn: string;
    freeSecure: string;
  };
  screenshots: {
    title: string;
    subtitle: string;
    clickToZoom: string;
  };
  safetyCard: {
    title: string;
    subtitle: string;
    scanResult: string;
    scanDetail: string;
    check1: string;
    check2: string;
    check3: string;
    check4: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  footer: {
    disclaimerTitle: string;
    disclaimerText: string;
    rights: string;
    privacy: string;
    terms: string;
    dmca: string;
    support: string;
  };
  stickyBar: {
    version: string;
    freeBadge: string;
    downloadBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  sw: {
    nav: {
      home: "Mwanzo",
      appInfo: "Taarifa za App",
      features: "Sifa Kuu",
      screenshots: "Picha za Ndani",
      howToInstall: "Jinsi ya Kusakinisha",
      faq: "Maswali",
      downloadApk: "Pakua App",
      share: "Sambaza",
      switchLang: "English",
    },
    hero: {
      title: "Pakua MovieRoom APK — Filamu, Tamthilia & Live TV (Kiswahili & International)",
      subtitle: "Mchanganyiko wa Filamu za Kiswahili, Hollywood, K-Drama & Michezo",
      description: "Tazama zaidi ya filamu 100,000+, tamthilia za mfululizo, katuni, na michezo bila kulipa senti yoyote. MovieRoom inakuletea mchanganyiko mzuri wa filamu zilizotafsiriwa kwa Kiswahili na ma-DJ maarufu pamoja na filamu za kimataifa (Hollywood, Bollywood, K-Drama, Nollywood n.k.) zenye ubora wa HD na 4K. Furahia seva zenye kasi ya umeme, upakuaji wa kutazama bila intaneti, na bila malipo ya usajili. Iwe kwenye simu, tablet, au Smart TV, MovieRoom inakupa uzoefu wa sinema popote ulipo.",
      downloadBtn: "Pakua MovieRoom APK",
      freeSecure: "100% Bure & Salama",
      downloadsWorldwide: "Wapakuzi 500,000+ Duniani",
      starRating: "Kiwango cha Nyota 4.8",
      updatedDaily: "Inasasishwa Kila Siku",
    },
    appInfoSection: {
      heading: "Pakua Toleo Jipya Zaidi la MovieRoom",
      description: "MovieRoom ni jukwaa la bure la kutazama na kupakua filamu na tamthilia kutoka nchi mbalimbali. Ina mchanganyiko wa filamu zilizotafsiriwa kwa Kiswahili, pamoja na filamu za Hollywood, Bollywood, K-dramas, Nollywood, na michezo ya moja kwa moja. Ukiwa na MovieRoom, unaweza kutazama maudhui yote unayoyapenda mahali pamoja bila kulipia chochote. Pakua app ya MovieRoom leo upate burudani isiyo na mwisho.",
      ratingText: "4.8 Nyota",
      sizeText: "24.8 MB",
      downloadsText: "500K+ Wapakuzi",
      downloadBtn: "Pakua App Sasa",
      freeSecure: "100% Bure & Salama",
      cardHeading: "App Info Card",
      rows: {
        appName: "Jina la App",
        latestVersion: "Toleo la Sasa",
        fileSize: "Ukubwa wa Faili",
        supportedOs: "Mifumo Inayotumika",
        pricing: "Bei / Gharama",
        category: "Kategoria",
        languages: "Lugha",
        developer: "Watengenezaji",
        totalDownloads: "Jumla ya Wapakuzi",
      },
    },
    whatIs: {
      title: "MovieRoom ni Nini?",
      p1: "MovieRoom ni huduma ya bure inayokuruhusu kutazama filamu na tamthilia mtandaoni moja kwa moja kwenye simu yako. Pia unaweza kupakua filamu na tamthilia uzipendazo ili uzitazame wakati wowote hata ukiwa nje ya mtandao (offline). MovieRoom inamiliki maktaba kubwa yenye mchanganyiko wa filamu zilizotafsiriwa kwa Kiswahili na filamu za kimataifa (Hollywood, K-Drama, Bollywood n.k.).",
      p2: "Muundo wa MovieRoom ni safi, wa kisasa na mwepesi sana kutumia. Ina vichujio vya hali ya juu vinavyokuruhusu kutafuta filamu kwa jina, mwaka, aina ya filamu au nchi. Pia mfumo wake unajifunza mapendekezo yako ya filamu ili kukupa mambo unayopenda zaidi. Kama ungependa kutazama baadaye safarini, mfumo wa upakuaji unahifadhi filamu moja kwa moja kwenye simu yako kwa usalama wa hali ya juu.",
    },
    installGuide: {
      title: "Jinsi ya Kupakua na Kusakinisha MovieRoom APK",
      subtitle: "Fuata hatua 3 rahisi hapa chini kusakinisha MovieRoom kwenye simu yako ya Android kwa sekunde chache.",
      videoPrompt: "Tazama Video ya Hatua kwa Hatua ya Kusakinisha APK",
      watchBtn: "Tazama Video",
      step1: {
        stepLabel: "Hatua ya 1",
        title: "Pakua MovieRoom APK",
        desc: "Bofya kitufe cha 'Pakua MovieRoom' kwenye ukurasa huu. Upakuaji ukikamilika, faili ya APK itapatikana kwenye folda ya 'Downloads' ya simu yako.",
        mockupTitle: "MovieRoom App Download",
        mockupSubtitle: "Pakua App ya MovieRoom utazame filamu, tamthilia na anime zote BURE!",
        mockupBtn: "Pakua MovieRoom",
      },
      step2: {
        stepLabel: "Hatua ya 2",
        title: "Ruhusu 'Vyanzo Visivyojulikana'",
        desc: "Kabla ya kusakinisha, nenda kwenye mipangilio ya usalama ya simu yako ya Android na uwashe chaguo la 'Sakinisha programu kutoka vyanzo visivyojulikana' (Install Unknown Apps).",
        dialogPrompt: "Unataka kusakinisha programu hii?",
        cancelBtn: "Ghairi",
        installBtn: "Sakinisha",
      },
      step3: {
        stepLabel: "Hatua ya 3",
        title: "Sakinisha MovieRoom APK",
        desc: "Gusa faili ya MovieRoom APK uliyopakua ili kuanza kusakinisha. Ikikamilika, utaona nembo ya MovieRoom kwenye skrini kuu ya simu yako. Sasa fungua app na uanze kufurahia filamu unazozipenda!",
      },
    },
    whyChoose: {
      title: "Kwa Nini Uchague MovieRoom?",
      desc: "Moja ya faida kubwa za MovieRoom ni wingi na upekee wa maktaba yake ya maudhui. Ikiwa na zaidi ya filamu 100,000+ katika aina zaidi ya 25, daima kuna kitu kipya na cha kusisimua cha kutazama kila siku. MovieRoom inakuletea mchanganyiko mzuri wa filamu za Kiswahili na za Kimataifa zenye ubora wa HD/4K.",
      bullets: [
        "Bure kabisa kutumia bila ada wala usajili",
        "Mchanganyiko wa filamu za Kiswahili na za Kimataifa",
        "Inasasishwa kila siku na filamu mpya",
        "Utafutaji wa haraka na makundi yaliyopangika",
        "Pakua bure utazame bila intaneti (Offline)",
        "Ubora wa juu wa HD na 4K Ultra HD",
        "Kichujio cha aina ya sinema na miaka",
        "Inafunguka haraka bila kukwama au kuchelewa (No buffering)",
      ],
    },
    smartTv: {
      title: "MovieRoom TV - Sasa Kwenye Smart TV",
      desc: "Peleka uzoefu wako wa kutazama kwenye skrini kubwa na MovieRoom TV! Toleo la MovieRoom la Smart TV linaleta filamu, tamthilia na michezo yote unayopenda moja kwa moja kwenye runinga yako. Furahia uzoefu wa sinema wenye muundo maalum wa TV unaotumia rimoti kwa urahisi kabisa.",
      ratingText: "Nyota 4.8",
      platformText: "Smart TV & Android TV",
      downloadBtn: "Pakua MovieRoom TV",
      freeSecure: "100% Bure & Salama",
    },
    screenshots: {
      title: "Muonekano Halisi wa MovieRoom",
      subtitle: "Gusa picha yoyote ili kuona muundo wa kisasa na video player yenye nguvu ndani ya app.",
      clickToZoom: "Gusa ili kukuza picha",
    },
    safetyCard: {
      title: "Imehakikiwa na Salama 100%",
      subtitle: "Faili ya Movieroom.apk inakaguliwa kiotomatiki kabla ya kila toleo.",
      scanResult: "Matokeo ya VirusTotal: 0/72 Vitisho",
      scanDetail: "Imethibitishwa na injini zote kuu za kiusalama kuwa haina virusi wala programu hasidi.",
      check1: "Haina Virus au Malware yoyote",
      check2: "Haihitaji Root ya simu",
      check3: "Ruhusa salama za kawaida za Android",
      check4: "Inalindwa na Google Play Protect",
    },
    faq: {
      title: "Maswali Yanayoulizwa Mara kwa Mara",
      subtitle: "Majibu ya haraka kuhusu kupakua, kusakinisha na kutumia MovieRoom.",
      items: [
        {
          question: "Je, MovieRoom APK ni bure kabisa kutumia?",
          answer: "Ndio, MovieRoom ni bure kwa asilimia 100. Huhitaji kadi ya benki, ada ya kila mwezi wala usajili wowote ili kutazama filamu na tamthilia.",
        },
        {
          question: "Je, ni salama kupakua na kusakinisha MovieRoom kwenye simu yangu?",
          answer: "Ndio, ni salama kabisa. Faili ya Movieroom.apk inakaguliwa na kuthibitishwa kuwa haina virusi wala trojan yoyote. Onyo la 'Unknown Sources' au 'File might be harmful' ni ujumbe wa kawaida wa Android unaoonekana unapopakua app yoyote nje ya Play Store.",
        },
        {
          question: "Ninawezaje kupakua filamu ili nitazame bila bando la intaneti?",
          answer: "Ndani ya app ya MovieRoom, fungua filamu au tamthilia yoyote, kisha bofya alama ya 'Pakua' (Download). Filamu itahifadhiwa kwenye kumbukumbu ya simu yako na unaweza kuitazama wakati wowote hata ukiwa huna intaneti.",
        },
        {
          question: "Je, MovieRoom inafanya kazi kwenye Smart TV au Android TV Box?",
          answer: "Ndio! MovieRoom inasaidia vifaa vyote vya Android TV, TV Box, na Chromecast kwa ajili ya kutazama kwenye skrini kubwa.",
        },
      ],
    },
    footer: {
      disclaimerTitle: "Taarifa ya Kisheria na Haki Miliki",
      disclaimerText: "MovieRoom ni jukwaa huru la usambazaji wa programu ya Android kwa ajili ya burudani. Alama zote za biashara na hakimiliki ni mali ya wamiliki wao halali.",
      rights: "Haki zote zimehifadhiwa.",
      privacy: "Sera ya Faragha",
      terms: "Masharti ya Huduma",
      dmca: "Sera ya DMCA",
      support: "Msaada na Mawasiliano",
    },
    stickyBar: {
      version: "MovieRoom APK v1.0.0",
      freeBadge: "Bure Kabisa",
      downloadBtn: "Pakua APK (24.8 MB)",
    },
  },
  en: {
    nav: {
      home: "Home",
      appInfo: "App Info",
      features: "Features",
      screenshots: "Screenshots",
      howToInstall: "How to Install",
      faq: "FAQ",
      downloadApk: "Download App",
      share: "Share",
      switchLang: "Kiswahili",
    },
    hero: {
      title: "Download MovieRoom APK — Free Movies, TV Shows & Live Sports",
      subtitle: "Free Movies, TV Shows & Live Sports",
      description: "Stream over 100,000+ movies, TV series, anime episodes, and live sports events without paying a single cent. MovieRoom brings Hollywood blockbusters, Bollywood hits, K-dramas, C-dramas, Turkish series, Nollywood films, and Swahili-dubbed cinema into one powerful app. Enjoy HD and 4K Ultra HD quality, lightning-fast servers, built-in subtitles, and offline downloads — all with no account required and zero subscription fees. Whether you are on your phone, tablet, TV box, or Smart TV, MovieRoom delivers a cinema-quality experience wherever you are.",
      downloadBtn: "Download MovieRoom APK",
      freeSecure: "100% Free & Secure",
      downloadsWorldwide: "500K+ Downloads Worldwide",
      starRating: "4.8 Star Rating",
      updatedDaily: "Updated Daily",
    },
    appInfoSection: {
      heading: "Download MovieRoom Latest Version",
      description: "MovieRoom is a free streaming platform where you can watch a huge selection of movies and TV shows from different countries and genres, which includes Swahili-translated hits, Hollywood blockbusters, Bollywood films, K-dramas, Nollywood, and live sports. With MovieRoom, you can watch all your favorite content in one place, completely free. Download the MovieRoom app today to get instant access to endless entertainment.",
      ratingText: "4.8 Rating",
      sizeText: "24.8 MB",
      downloadsText: "500K+ Downloads",
      downloadBtn: "Download App",
      freeSecure: "100% Free & Secure",
      cardHeading: "App Info Card",
      rows: {
        appName: "App Name",
        latestVersion: "Latest Version",
        fileSize: "File Size",
        supportedOs: "Supported OS",
        pricing: "Pricing",
        category: "Category",
        languages: "Languages",
        developer: "Developer",
        totalDownloads: "Total Downloads",
      },
    },
    whatIs: {
      title: "What is MovieRoom?",
      p1: "MovieRoom is a free service that allows you to watch movies and TV series online directly on your mobile device. You can also download movies and TV shows to watch offline without an internet connection. MovieRoom offers a vast and diverse content library that includes the latest movies, popular TV series, live sports, and regional content including Swahili-translated cinema. You will also find an extensive selection of K-dramas, anime, and Nollywood hits with zero subscription fees.",
      p2: "The interface is clean and intuitive, making content discovery effortless. Advanced search filters let you sort by genre, release year, country of origin, and language. A personalized recommendation engine learns from your viewing history to suggest titles you are likely to enjoy. And if you want to watch later on the go without an internet connection, the built-in download manager lets you save content directly to your device.",
    },
    installGuide: {
      title: "How to Download & Install MovieRoom APK",
      subtitle: "Follow these 3 quick and easy steps to install MovieRoom APK on your Android device.",
      videoPrompt: "Watch Step-by-Step APK Installation Video Guide",
      watchBtn: "Watch Video",
      step1: {
        stepLabel: "Step 1",
        title: "Download MovieRoom APK",
        desc: "Click the 'Download MovieRoom' button on this page. Once the download is complete, you can find the APK file in your browser's 'Downloads' folder.",
        mockupTitle: "MovieRoom App Download",
        mockupSubtitle: "Download MovieRoom App to stream and download movies, TV series, and anime for FREE!",
        mockupBtn: "Download MovieRoom",
      },
      step2: {
        stepLabel: "Step 2",
        title: "Enable 'Unknown Sources'",
        desc: "Before installing, you must go to your Android device's security settings and turn on 'Install apps from unknown sources.'",
        dialogPrompt: "Do you want to install this app?",
        cancelBtn: "Cancel",
        installBtn: "Install",
      },
      step3: {
        stepLabel: "Step 3",
        title: "Install the MovieRoom APK",
        desc: "Tap the downloaded MovieRoom APK file to start the installation. After it's finished, you will see the MovieRoom icon on your home screen. Now you can open the app to search and download your favorite movies and TV shows.",
      },
    },
    whyChoose: {
      title: "Why Choose MovieRoom?",
      desc: "One of the biggest advantages of MovieRoom is the sheer size and diversity of its content library. With over 100,000+ titles across more than 25 genres, there is always something new to watch. MovieRoom is packed with features including HD/4K streaming, offline downloads, built-in subtitles, smart recommendations, resume playback, quick search and advanced filters, Chromecast support, mini player, and dark/light mode.",
      bullets: [
        "Completely free to use with zero subscriptions",
        "Huge Swahili & international content library",
        "Updated daily with new movies and series",
        "Quick search & advanced genre filters",
        "Free downloads for offline viewing",
        "HD and 4K Ultra HD streaming quality",
        "Genre and release year filters",
        "Fast loading and zero buffering",
      ],
    },
    smartTv: {
      title: "MovieRoom TV - Now on Smart TV",
      desc: "Take your streaming experience to the big screen with MovieRoom TV! The Smart TV version of MovieRoom brings all the movies, TV shows, anime, and live sports you love directly to your television. Enjoy a cinematic experience with a TV-optimized interface, remote-friendly navigation, and full HD & 4K streaming.",
      ratingText: "4.8 Rating",
      platformText: "Smart TV & Android TV",
      downloadBtn: "Download MovieRoom TV",
      freeSecure: "100% Free & Secure",
    },
    screenshots: {
      title: "Official App Screenshots",
      subtitle: "Click any preview to inspect the modern UI, player controls, and offline manager in full resolution.",
      clickToZoom: "Click image to expand",
    },
    safetyCard: {
      title: "100% Safe & Verified",
      subtitle: "Movieroom.apk is checked automatically on every build release.",
      scanResult: "VirusTotal Result: 0/72 Detections",
      scanDetail: "Confirmed clean by all major antivirus vendors. No adware, spyware, or malicious code.",
      check1: "Completely Clean & Malware-Free",
      check2: "No Root Access Required",
      check3: "Standard Safe Android Permissions",
      check4: "Google Play Protect Compatible",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about downloading, installing, and streaming on MovieRoom.",
      items: [
        {
          question: "Is MovieRoom APK completely free?",
          answer: "Yes, MovieRoom is 100% free forever. There are no subscription fees, credit card requirements, or locked content.",
        },
        {
          question: "Is it safe to download and install MovieRoom APK?",
          answer: "Yes, it is completely safe. The official Movieroom.apk is scanned by VirusTotal and verified to be 100% malware-free. The 'File might be harmful' or 'Unknown Sources' warning is standard on Android whenever installing an app outside the Google Play Store.",
        },
        {
          question: "Can I download movies to watch offline?",
          answer: "Yes! MovieRoom includes a built-in high-speed download manager. Simply tap the Download button on any title to save it directly to your device for offline viewing without using your internet data.",
        },
        {
          question: "Does MovieRoom work on Smart TV and Android TV Box?",
          answer: "Yes! MovieRoom supports Android TV, Fire TV sticks, TV boxes, and Chromecast casting so you can watch your favorite movies on the big screen.",
        },
      ],
    },
    footer: {
      disclaimerTitle: "Disclaimer & Legal Information",
      disclaimerText: "MovieRoom is an independent media application portal for Android. All trademarks, movie titles, and copyrights belong to their respective creators.",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      dmca: "DMCA Policy",
      support: "Support & Contact",
    },
    stickyBar: {
      version: "MovieRoom APK v1.0.0",
      freeBadge: "100% Free",
      downloadBtn: "Download APK (24.8 MB)",
    },
  },
};
