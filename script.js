const translations = {
    en: {
        nav_about: "About",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_education: "Education",
        nav_contact: "Contact",
        greeting: "Hi, I'm",
        title: "Junior Software Engineer",
        bio: "Passionate Software Engineer specialized in designing, building, and optimizing data pipelines and scalable software systems using modern technologies.",
        btn_touch: "Get In Touch",
        btn_download: "<i class='fas fa-download'></i> Download CV",
        section_internships: "Internships",

        // Internship 1
        role_1: "Final Year Internship – TalentExpo",
        desc_1_1: "Requirements gathering and system architecture design",
        desc_1_2: "Development of data integration and ETL processes",
        desc_1_3: "Design and testing of interactive dashboards",
        desc_1_4: "Implementation of an intelligent system to extract key information from CVs and automatically recommend relevant job offers",
        desc_1_5: "Evaluation and auditing of results, followed by deployment of dashboards on a web platform",

        // Internship 2
        role_2: "Engineering Internship - Luxury car data analysis",
        desc_2_1: "Business requirements analysis and system component design",
        desc_2_2: "Development of data integration and ETL workflows",
        desc_2_3: "Design and validation of dashboards",
        desc_2_4: "Integration of Machine Learning algorithms",
        desc_2_5: "Evaluation and auditing of results, followed by deployment of dashboards on a web platform",

        // Internship 3
        role_3: "Work-study contract - Luxury car data analysis",
        desc_3_1: "Data collection and exploration through web scraping",
        desc_3_2: "Development of data integration and ETL processes",
        desc_3_3: "Design and testing of dashboards",
        desc_3_4: "Integration of Machine Learning algorithms",
        desc_3_5: "Evaluation and auditing of results, followed by deployment of dashboards on a web platform",

        section_skills: "Technical Skills",
        cat_db: "Databases",
        cat_web: "Web Frameworks",
        cat_devops: "DevOps & Testing",
        cat_data: "Data & BI",
        cat_ai: "AI & Machine Learning",

        section_education: "Education",
        edu_desc: "Private Higher School of Engineering and Technology",
        edu_degree: "Engineering Degree in Computer Science",

        section_contact: "Get In Touch",
        contact_subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        connect_title: "Connect With Me",
        lang_btn: "<i class='fas fa-globe'></i> FR"
    },
    fr: {
        nav_about: "À propos",
        nav_experience: "Expérience",
        nav_skills: "Compétences",
        nav_education: "Éducation",
        nav_contact: "Contact",
        greeting: "Bonjour, je suis",
        title: "Ingénieur Logiciel Junior",
        bio: "Ingénieur logiciel passionné, spécialisé dans la conception, la construction et l'optimisation de pipelines de données et de systèmes logiciels évolutifs utilisant des technologies modernes.",
        btn_touch: "Me Contacter",
        btn_download: "<i class='fas fa-download'></i> Télécharger CV",
        section_internships: "Stages",

        // Internship 1
        role_1: "Stage de Fin d'Études – TalentExpo",
        desc_1_1: "Recueil des besoins et conception de l'architecture système",
        desc_1_2: "Développement des processus d'intégration de données et ETL",
        desc_1_3: "Conception et test de tableaux de bord interactifs",
        desc_1_4: "Mise en œuvre d'un système intelligent pour extraire les informations clés des CV et recommander automatiquement des offres d'emploi pertinentes",
        desc_1_5: "Évaluation et audit des résultats, suivis du déploiement des tableaux de bord sur une plateforme web",

        // Internship 2
        role_2: "Stage Ingénieur - Analyse de données de voitures de luxe",
        desc_2_1: "Analyse des besoins métier et conception des composants système",
        desc_2_2: "Développement des flux d'intégration de données et ETL",
        desc_2_3: "Conception et validation des tableaux de bord",
        desc_2_4: "Intégration d'algorithmes de Machine Learning",
        desc_2_5: "Évaluation et audit des résultats, suivis du déploiement des tableaux de bord sur une plateforme web",

        // Internship 3
        role_3: "Contrat d'alternance - Analyse de données de voitures de luxe",
        desc_3_1: "Collecte et exploration de données via web scraping",
        desc_3_2: "Développement des processus d'intégration de données et ETL",
        desc_3_3: "Conception et test des tableaux de bord",
        desc_3_4: "Intégration d'algorithmes de Machine Learning",
        desc_3_5: "Évaluation et audit des résultats, suivis du déploiement des tableaux de bord sur une plateforme web",

        section_skills: "Compétences Techniques",
        cat_db: "Bases de Données",
        cat_web: "Frameworks Web",
        cat_devops: "DevOps & Testing",
        cat_data: "Data & BI",
        cat_ai: "IA & Machine Learning",

        section_education: "Éducation",
        edu_desc: "École Supérieure Privée d'Ingénierie et de Technologies",
        edu_degree: "Diplôme National d'Ingénieur en Informatique",

        section_contact: "Me Contacter",
        contact_subtitle: "Je suis toujours ouvert à la discussion de nouveaux projets, d'idées créatives ou d'opportunités de faire partie de votre vision.",
        connect_title: "Connectez-vous avec moi",
        lang_btn: "<i class='fas fa-globe'></i> EN"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    let currentLang = 'en'; // Default language

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Optional: Toggle icon between bars and times (X)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (menuToggle) {
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Handle button with HTML content (icon)
                if (element.tagName === 'BUTTON' || (element.tagName === 'A' && element.classList.contains('btn'))) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update button text to show the *other* language option
        // Actually, let's make the button show the SWITCH TO language or current?
        // Usually buttons show what you will switch TO.
        // If current is EN, button should say "FR".
        // If current is FR, button should say "EN".

        if (lang === 'en') {
            langBtn.innerHTML = '<i class="fas fa-globe"></i> FR';
        } else {
            langBtn.innerHTML = '<i class="fas fa-globe"></i> EN';
        }
    }
});
