function toggleTheme() {
    document.body.classList.toggle('dark-mode');
     const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

 const translations = {
  en: {
    title: "My Portfolio",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",

    aboutTitle: "About Me",
    aboutText: "Hi! I'm Kapil Choudhary. I'm a web developer who loves building websites and web applications...",

    skillsTitle: "Skills",
    skillHTML: "HTML",
    skillCSS: "CSS",
    skillJS: "JavaScript",
    skillTailwind: "Tailwind CSS",
    skillBootstrap: "Bootstrap",
    skillGit: "Git, GitHub",

    projectsTitle: "Projects",
    proj1Title: "Stopwatch App",
    proj1Desc: "A simple app that allows users to start, pause, and reset a stopwatch timer.",
    proj2Title: "Portfolio Website",
    proj2Desc: "My own portfolio containing my knowledge and projects.",
    proj3Title: "Todo List App",
    proj3Desc: "Allows users to add, delete, and update tasks.",
    technologies: "Technologies:",
    viewProject: "View Project",

    contactTitle: "Contact Me",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    msgPlaceholder: "Message",
    send: "Send (Demo)"
  },
  hi: {
    title: "मेरा पोर्टफोलियो",
    navAbout: "मेरे बारे में",
    navSkills: "कौशल",
    navProjects: "प्रोजेक्ट्स",
    navContact: "संपर्क करें",

    aboutTitle: "मेरे बारे में",
    aboutText: "नमस्ते! मैं कपिल चौधरी हूँ। मैं एक वेब डेवलपर हूँ जिसे वेबसाइट और वेब ऐप बनाना पसंद है...",

    skillsTitle: "कौशल",
    skillHTML: "एचटीएमएल",
    skillCSS: "सीएसएस",
    skillJS: "जावास्क्रिप्ट",
    skillTailwind: "टेलविंड सीएसएस",
    skillBootstrap: "बूटस्ट्रैप",
    skillGit: "गिट, गिटहब",

    projectsTitle: "प्रोजेक्ट्स",
    proj1Title: "स्टॉपवॉच ऐप",
    proj1Desc: "एक सरल ऐप जो उपयोगकर्ताओं को स्टॉपवॉच टाइमर शुरू करने, रोकने और रीसेट करने की अनुमति देता है।",
    proj2Title: "पोर्टफोलियो वेबसाइट",
    proj2Desc: "मेरा स्वयं का पोर्टफोलियो जिसमें मेरा ज्ञान और प्रोजेक्ट्स शामिल हैं।",
    proj3Title: "टू-डू सूची ऐप",
    proj3Desc: "उपयोगकर्ताओं को कार्य जोड़ने, हटाने और अपडेट करने की सुविधा देता है।",
    technologies: "प्रयुक्त तकनीक:",
    viewProject: "प्रोजेक्ट देखें",

    contactTitle: "संपर्क करें",
    namePlaceholder: "नाम",
    emailPlaceholder: "ईमेल",
    msgPlaceholder: "संदेश",
    send: "भेजें (डेमो)"
  }
};

  function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    const translation = translations[lang][key];

    if (el.placeholder !== undefined && el.placeholder !== "") {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });
}

  function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'hi' : 'en';
    setLanguage(newLang);
  }

  // On page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  function revealElements() {
    const reveals = document.querySelectorAll('[data-reveal]');
    for (const el of reveals) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('revealed');
      }
    }
  }
  window.addEventListener('scroll', revealElements);
  window.addEventListener('load', revealElements);