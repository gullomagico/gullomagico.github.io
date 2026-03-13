export const languages = {
	en: 'English',
	it: 'Italiano',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
	en: {
		// Meta
		'meta.description':
			'Federico Cafagna - Software Engineer who loves solving problems and building things that work.',

		// Navbar
		'nav.about': 'About',
		'nav.skills': 'Skills',
		'nav.experience': 'Experience',
		'nav.contact': 'Contact',

		// Hero
		'hero.subtitle': 'Software Engineer who loves solving problems and building things that work.',
		'hero.cta': 'Get in touch',
		'hero.learn': 'Learn more',

		// About
		'about.label': '// about',
		'about.title': 'About Me',
		'about.bio1':
			"I'm Cafa, a Software Engineer based in Milan with 5+ years of experience in backend, infrastructure, DevOps, and blockchain. I currently lead projects at",
		'about.bio1.link': 'Efebia',
		'about.bio1.end':
			", where I've grown from backend developer to project lead, tackling everything from CI/CD pipelines to Web3 solutions.",
		'about.bio2':
			"I studied Computer Science with a focus on Music Information Science at Università degli Studi di Milano, and I have a background in audio engineering. When I'm not coding, you'll probably find me playing guitar.",
		'about.location': 'location',
		'about.location.value': 'Milan, Italy',
		'about.experience': 'experience',
		'about.experience.value': '5+ years',
		'about.company': 'company',
		'about.status': 'status',
		'about.status.value': 'Coding',

		// Skills
		'skills.label': '// what-i-do',
		'skills.title': 'I Solve Problems',
		'skills.subtitle':
			"What I enjoy most is figuring things out. The tools change all the time, the curiosity doesn't.",
		'skills.card1.label': 'System Design',
		'skills.card1.desc':
			"I love when a complex problem starts making sense. Breaking it down, finding the connections, sketching the architecture. That's where the fun starts.",
		'skills.card2.label': 'Full-Stack Development',
		'skills.card2.desc':
			"Backend, frontend, whatever sits in between. There's something satisfying about building end-to-end and seeing all the pieces come together.",
		'skills.card3.label': 'Infrastructure',
		'skills.card3.desc':
			"CI/CD pipelines, Docker, cloud vs self-hosted, debugging a deploy at midnight. It's a puzzle, and I genuinely enjoy it.",
		'skills.card4.label': 'The Why, Not Just The How',
		'skills.card4.desc':
			"I'm curious about the reason behind what I build. Understanding the 'why' makes me a better problem solver, and keeps the work meaningful.",
		'skills.card5.label': 'Blockchain & Web3',
		'skills.card5.desc':
			"Smart contracts, decentralized logic, a whole different set of rules. It's a fascinating space and a different way to think about problems.",
		'skills.mindset.label': '// mindset',
		'skills.mindset.desc': "Give me a problem and let me figure it out. It's where I do my best work.",

		// Experience
		'experience.label': '// experience',
		'experience.title': 'Work History',
		'experience.current': 'current',
		'experience.job1.period': 'Jun 2024 - Present',
		'experience.job1.role': 'Software Engineer / Project Lead',
		'experience.job1.company': 'Efebia',
		'experience.job1.location': 'Milan, Italy',
		'experience.job1.desc':
			'Leading projects end-to-end, from architecture decisions to delivery. Managing technical direction, coordinating with teams, and building solutions across backend, infrastructure, and blockchain.',
		'experience.job2.period': 'Jan 2023 - May 2024',
		'experience.job2.role': 'Software Engineer, Infrastructure & DevOps',
		'experience.job2.company': 'Efebia',
		'experience.job2.location': 'Milan, Italy',
		'experience.job2.desc':
			'Focused on infrastructure, CI/CD pipelines, cloud services, and DevOps practices. Built and maintained the systems that keep everything running in production.',
		'experience.job3.period': 'Mar 2022 - Dec 2022',
		'experience.job3.role': 'Back-end Developer',
		'experience.job3.company': 'Efebia',
		'experience.job3.location': 'Milan, Italy',
		'experience.job3.desc':
			'Started at Efebia as an intern building backend services and APIs. Learned production-grade development and grew into a full-time role.',
		'experience.job4.period': 'Mar 2021 - Dec 2021',
		'experience.job4.role': 'Frontend Developer',
		'experience.job4.company': 'Università degli Studi di Milano',
		'experience.job4.location': 'Milan, Italy',
		'experience.job4.desc':
			'Internship focused on frontend development during my Computer Science degree. First hands-on experience building real-world web interfaces.',

		// Contact
		'contact.label': '// contact',
		'contact.title': 'Get In Touch',
		'contact.subtitle': "Have a project in mind or want to collaborate? Drop me a message and let's talk.",
		'contact.email': 'Email',
		'contact.company': 'Company',
		'contact.based': 'Based in',
		'contact.based.value': 'Milan, Italy',

		// Footer
		'footer.desc': 'Software Engineer based in Milan, Italy. Building things that solve real problems.',
		'footer.nav': 'Navigation',
		'footer.connect': 'Connect',
		'footer.nav.about': 'About',
		'footer.nav.skills': 'What I Do',
		'footer.nav.experience': 'Experience',
		'footer.nav.contact': 'Contact',
		'footer.built': 'Built with Astro & Tailwind CSS',
		'footer.legal': 'Legal',
		'footer.privacy': 'Privacy Policy',

		// Privacy Policy
		'privacy.title': 'Privacy Policy',
		'privacy.lastUpdated': 'Last updated: March 2026',
		'privacy.intro':
			'This page explains how your data is handled when you visit this website. The site does not directly collect or store any personal data — all processing is performed by third-party infrastructure providers as described below.',
		'privacy.operator.title': 'Site Operator',
		'privacy.operator.text':
			'This website is operated by Federico Cafagna, who acts as the data controller pursuant to GDPR Art. 13(1)(a).',
		'privacy.operator.contact': 'For any privacy-related inquiries, you can reach the controller at:',
		'privacy.hosting.title': 'Hosting — GitHub Pages',
		'privacy.hosting.text':
			'This website is hosted on GitHub Pages (GitHub Inc.). GitHub may log visitor IP addresses, browser information, and access timestamps as part of its standard infrastructure operations. The legal basis for this processing is GDPR Art. 6(1)(f) — legitimate interest, as it is technically necessary to serve the website. Data may be transferred to the United States under the EU-US Data Privacy Framework.',
		'privacy.hosting.link': 'GitHub Privacy Statement',
		'privacy.cdn.title': 'CDN & Security — Cloudflare',
		'privacy.cdn.text':
			'The site uses Cloudflare Inc. as a reverse proxy and CDN. Cloudflare may set the following cookies for security purposes:',
		'privacy.cdn.cookie1': '— bot management',
		'privacy.cdn.cookie2': '— security challenge verification',
		'privacy.cdn.exemption':
			'These cookies are strictly necessary for the security of the website and are exempt from consent requirements under ePrivacy Directive Art. 5(3). Data may be transferred to the United States under the EU-US Data Privacy Framework.',
		'privacy.cdn.link': 'Cloudflare Privacy Policy',
		'privacy.session.title': 'Session Storage',
		'privacy.session.text':
			'The site uses sessionStorage to remember your language redirect preference during a browsing session. This data is session-scoped, not persistent, and strictly necessary for site functionality. No consent is required.',
		'privacy.noTracking.title': 'No Analytics or Tracking',
		'privacy.noTracking.text':
			'This website does not use any analytics services, tracking pixels, or advertising technologies.',
		'privacy.externalLinks.title': 'External Links',
		'privacy.externalLinks.text':
			'This site contains outbound links to third-party websites (GitHub, LinkedIn, CodePen). These sites have their own privacy policies, and the site operator is not responsible for their data processing practices.',
		'privacy.rights.title': 'Your Rights',
		'privacy.rights.text':
			'Under GDPR Articles 15–21, you have the right to access, rectify, erase, restrict processing of, and port your personal data, as well as the right to object to processing. You can exercise these rights by contacting the controller. Since the data is operationally held by third-party providers, the controller will assist you and forward requests as needed. You may also contact the providers directly:',
		'privacy.rights.complaint':
			'You also have the right to lodge a complaint with a supervisory authority. For Italy, this is the Garante per la protezione dei dati personali.',
		'privacy.rights.garante': 'Garante per la protezione dei dati personali',
		'privacy.rights.github': 'GitHub Privacy Contact',
		'privacy.rights.cloudflare': 'Cloudflare Privacy Contact',
		'privacy.noCollection.title': 'No Direct Data Collection',
		'privacy.noCollection.text':
			'The site operator does not directly collect or store any personal data. All data processing described on this page is performed by third-party infrastructure providers on behalf of the controller.',
		'privacy.backLink': '← Back to homepage',
	},
	it: {
		// Meta
		'meta.description':
			'Federico Cafagna - Software Engineer che ama risolvere problemi e costruire cose che funzionano.',

		// Navbar
		'nav.about': 'Chi sono',
		'nav.skills': 'Competenze',
		'nav.experience': 'Esperienza',
		'nav.contact': 'Contatti',

		// Hero
		'hero.subtitle': 'Software Engineer che ama risolvere problemi e costruire cose che funzionano.',
		'hero.cta': 'Contattami',
		'hero.learn': 'Scopri di più',

		// About
		'about.label': '// chi-sono',
		'about.title': 'Chi Sono',
		'about.bio1':
			'Sono Cafa, un Software Engineer con sede a Milano con oltre 5 anni di esperienza in backend, infrastruttura, DevOps e blockchain. Attualmente guido i progetti presso',
		'about.bio1.link': 'Efebia',
		'about.bio1.end':
			', dove sono cresciuto da sviluppatore backend a project lead, affrontando tutto, dalle pipeline CI/CD alle soluzioni Web3.',
		'about.bio2':
			"Ho studiato Informatica con specializzazione in Informatica Musicale all'Università degli Studi di Milano, e ho un background in ingegneria audio. Quando non programmo, probabilmente mi trovi a suonare la chitarra.",
		'about.location': 'posizione',
		'about.location.value': 'Milano, Italia',
		'about.experience': 'esperienza',
		'about.experience.value': '5+ anni',
		'about.company': 'azienda',
		'about.status': 'stato',
		'about.status.value': 'Coding',

		// Skills
		'skills.label': '// cosa-faccio',
		'skills.title': 'Risolvo Problemi',
		'skills.subtitle':
			'Quello che mi piace di più è capire come funzionano le cose. Gli strumenti cambiano continuamente, la curiosità no.',
		'skills.card1.label': 'System Design',
		'skills.card1.desc':
			"Adoro quando un problema complesso inizia ad avere senso. Scomporlo, trovare le connessioni, disegnare l'architettura. È lì che inizia il divertimento.",
		'skills.card2.label': 'Sviluppo Full-Stack',
		'skills.card2.desc':
			"Backend, frontend, qualsiasi cosa ci sia nel mezzo. C'è qualcosa di appagante nel costruire end-to-end e vedere tutti i pezzi combaciare.",
		'skills.card3.label': 'Infrastruttura',
		'skills.card3.desc':
			'Pipeline CI/CD, Docker, cloud vs self-hosted, debug di un deploy a mezzanotte. È un puzzle, e mi piace davvero.',
		'skills.card4.label': 'Il Perché, Non Solo Il Come',
		'skills.card4.desc':
			"Sono curioso del motivo dietro a ciò che costruisco. Capire il 'perché' mi rende un problem solver migliore e mantiene il lavoro significativo.",
		'skills.card5.label': 'Blockchain & Web3',
		'skills.card5.desc':
			'Smart contract, logica decentralizzata, un set di regole completamente diverso. È uno spazio affascinante e un modo diverso di pensare ai problemi.',
		'skills.mindset.label': '// mentalità',
		'skills.mindset.desc': 'Dammi un problema e lasciami risolverlo. È lì che do il meglio di me.',

		// Experience
		'experience.label': '// esperienza',
		'experience.title': 'Esperienza Lavorativa',
		'experience.current': 'attuale',
		'experience.job1.period': 'Giu 2024 - Presente',
		'experience.job1.role': 'Software Engineer / Project Lead',
		'experience.job1.company': 'Efebia',
		'experience.job1.location': 'Milano, Italia',
		'experience.job1.desc':
			'Guida di progetti end-to-end, dalle decisioni architetturali alla delivery. Gestione della direzione tecnica, coordinamento con i team e sviluppo di soluzioni su backend, infrastruttura e blockchain.',
		'experience.job2.period': 'Gen 2023 - Mag 2024',
		'experience.job2.role': 'Software Engineer, Infrastruttura & DevOps',
		'experience.job2.company': 'Efebia',
		'experience.job2.location': 'Milano, Italia',
		'experience.job2.desc':
			'Focus su infrastruttura, pipeline CI/CD, servizi cloud e pratiche DevOps. Costruzione e manutenzione dei sistemi che mantengono tutto in funzione in produzione.',
		'experience.job3.period': 'Mar 2022 - Dic 2022',
		'experience.job3.role': 'Sviluppatore Back-end',
		'experience.job3.company': 'Efebia',
		'experience.job3.location': 'Milano, Italia',
		'experience.job3.desc':
			'Inizio in Efebia come stagista sviluppando servizi backend e API. Apprendimento dello sviluppo production-grade e crescita in un ruolo a tempo pieno.',
		'experience.job4.period': 'Mar 2021 - Dic 2021',
		'experience.job4.role': 'Sviluppatore Frontend',
		'experience.job4.company': 'Università degli Studi di Milano',
		'experience.job4.location': 'Milano, Italia',
		'experience.job4.desc':
			'Stage focalizzato sullo sviluppo frontend durante la laurea in Informatica. Prima esperienza pratica nella costruzione di interfacce web reali.',

		// Contact
		'contact.label': '// contatti',
		'contact.title': 'Contattami',
		'contact.subtitle': 'Hai un progetto in mente o vuoi collaborare? Scrivimi un messaggio e parliamone.',
		'contact.email': 'Email',
		'contact.company': 'Azienda',
		'contact.based': 'Sede',
		'contact.based.value': 'Milano, Italia',

		// Footer
		'footer.desc': 'Software Engineer con sede a Milano, Italia. Costruisco cose che risolvono problemi reali.',
		'footer.nav': 'Navigazione',
		'footer.connect': 'Social',
		'footer.nav.about': 'Chi Sono',
		'footer.nav.skills': 'Cosa Faccio',
		'footer.nav.experience': 'Esperienza',
		'footer.nav.contact': 'Contatti',
		'footer.built': 'Costruito con Astro e Tailwind CSS',
		'footer.legal': 'Legale',
		'footer.privacy': 'Informativa Privacy',

		// Privacy Policy
		'privacy.title': 'Informativa sulla Privacy',
		'privacy.lastUpdated': 'Ultimo aggiornamento: marzo 2026',
		'privacy.intro':
			'Questa pagina spiega come vengono gestiti i tuoi dati quando visiti questo sito web. Il sito non raccoglie né archivia direttamente alcun dato personale — tutto il trattamento è effettuato da fornitori di infrastruttura terzi come descritto di seguito.',
		'privacy.operator.title': 'Titolare del Sito',
		'privacy.operator.text':
			"Questo sito web è gestito da Federico Cafagna, che agisce come titolare del trattamento ai sensi dell'Art. 13(1)(a) del GDPR.",
		'privacy.operator.contact': 'Per qualsiasi richiesta relativa alla privacy, puoi contattare il titolare a:',
		'privacy.hosting.title': 'Hosting — GitHub Pages',
		'privacy.hosting.text':
			"Questo sito web è ospitato su GitHub Pages (GitHub Inc.). GitHub potrebbe registrare gli indirizzi IP dei visitatori, le informazioni del browser e i timestamp di accesso come parte delle normali operazioni infrastrutturali. La base giuridica per questo trattamento è l'Art. 6(1)(f) del GDPR — interesse legittimo, in quanto tecnicamente necessario per servire il sito web. I dati potrebbero essere trasferiti negli Stati Uniti nell'ambito del EU-US Data Privacy Framework.",
		'privacy.hosting.link': 'Informativa sulla Privacy di GitHub',
		'privacy.cdn.title': 'CDN e Sicurezza — Cloudflare',
		'privacy.cdn.text':
			'Il sito utilizza Cloudflare Inc. come reverse proxy e CDN. Cloudflare potrebbe impostare i seguenti cookie per scopi di sicurezza:',
		'privacy.cdn.cookie1': '— gestione bot',
		'privacy.cdn.cookie2': '— verifica challenge di sicurezza',
		'privacy.cdn.exemption':
			"Questi cookie sono strettamente necessari per la sicurezza del sito web e sono esenti dal requisito di consenso ai sensi dell'Art. 5(3) della Direttiva ePrivacy. I dati potrebbero essere trasferiti negli Stati Uniti nell'ambito del EU-US Data Privacy Framework.",
		'privacy.cdn.link': 'Informativa sulla Privacy di Cloudflare',
		'privacy.session.title': 'Session Storage',
		'privacy.session.text':
			'Il sito utilizza sessionStorage per ricordare la tua preferenza di reindirizzamento linguistico durante una sessione di navigazione. Questi dati hanno durata di sessione, non sono persistenti e sono strettamente necessari per il funzionamento del sito. Non è richiesto alcun consenso.',
		'privacy.noTracking.title': 'Nessuna Analisi o Tracciamento',
		'privacy.noTracking.text':
			'Questo sito web non utilizza alcun servizio di analisi, pixel di tracciamento o tecnologie pubblicitarie.',
		'privacy.externalLinks.title': 'Link Esterni',
		'privacy.externalLinks.text':
			'Questo sito contiene link in uscita verso siti web di terze parti (GitHub, LinkedIn, CodePen). Questi siti hanno le proprie informative sulla privacy e il titolare del sito non è responsabile delle loro pratiche di trattamento dei dati.',
		'privacy.rights.title': 'I Tuoi Diritti',
		'privacy.rights.text':
			'Ai sensi degli Articoli 15–21 del GDPR, hai il diritto di accedere, rettificare, cancellare, limitare il trattamento e portare i tuoi dati personali, nonché il diritto di opporti al trattamento. Puoi esercitare questi diritti contattando il titolare. Poiché i dati sono operativamente detenuti da fornitori terzi, il titolare ti assisterà e inoltrerà le richieste secondo necessità. Puoi anche contattare direttamente i fornitori:',
		'privacy.rights.complaint':
			"Hai inoltre il diritto di proporre reclamo a un'autorità di controllo. Per l'Italia, si tratta del Garante per la protezione dei dati personali.",
		'privacy.rights.garante': 'Garante per la protezione dei dati personali',
		'privacy.rights.github': 'Contatto Privacy di GitHub',
		'privacy.rights.cloudflare': 'Contatto Privacy di Cloudflare',
		'privacy.noCollection.title': 'Nessuna Raccolta Diretta di Dati',
		'privacy.noCollection.text':
			'Il titolare del sito non raccoglie né archivia direttamente alcun dato personale. Tutto il trattamento dei dati descritto in questa pagina è effettuato da fornitori di infrastruttura terzi per conto del titolare.',
		'privacy.backLink': '← Torna alla homepage',
	},
} as const;
