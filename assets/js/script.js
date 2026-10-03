const profileLinks = {
  tryhackme: "",
  medium: "https://medium.com/@youssefelkahkyy"
};

const projects = [
  {
    id: "jave",
    title: "JAVE",
    category: "Software Engineering",
    kind: "01-Talent project",
    description: "A modular local AI assistant built in Go, combining local AI models, Arabic language processing, speech recognition and synthesis, browser integration, and extensible system automation.",
    url: "https://github.com/YoussefElkahky/Jave_Engine",
    image: "assets/images/jave.svg",
    tags: ["Go", "Local AI", "Linux", "Automation", "Browser Integration"],
    details: [
      "Developed the core engine in Go as a modular foundation for a local AI assistant.",
      "Integrated local AI models with Arabic and English language interaction.",
      "Worked with speech recognition, Piper text-to-speech, browser integration, and extensible system automation.",
      "Designed the project around local-first operation, keeping assistant data and interactions on the user's machine."
    ]
  },
  {
    id: "ascii-art",
    title: "ascii-art",
    category: "Software Engineering",
    kind: "01-Talent project",
    description: "A Go command-line application that converts text into stylized ASCII-art banners using multiple font styles and supports multi-line input.",
    url: "https://github.com/YoussefElkahky/ASCII-ART",
    image: "assets/images/ascii-art.svg",
    tags: ["Go", "CLI", "Text Processing", "01-Talent"],
    details: [
      "Implemented a command-line application in Go for converting printable ASCII text into banner-style output.",
      "Added support for standard, shadow, and thinkertoy banner styles.",
      "Handled multi-line input, invalid characters, missing files, and unsupported banner styles.",
      "Practised input handling, file processing, error handling, and structured Go development."
    ]
  },
  {
    id: "go-reloaded",
    title: "go-reloaded",
    category: "Software Engineering",
    kind: "01-Talent project",
    description: "A Go command-line text-processing tool that applies formatting, capitalization, number-base conversion, punctuation, quotation, and article-correction rules to text files.",
    url: "https://github.com/YoussefElkahky/Go-Reloaded-Project",
    image: "assets/images/go-reloaded.svg",
    tags: ["Go", "CLI", "Text Processing", "Algorithms"],
    details: [
      "Built a text-processing pipeline that reads an input file, transforms its content, and writes the result to an output file.",
      "Implemented modifiers for capitalization, hexadecimal and binary conversion, and bulk transformations.",
      "Added processing for punctuation spacing, quotation marks, and English article correction.",
      "Practised string manipulation, scanning, modular functions, file I/O, and automated testing."
    ]
  },
  {
    id: "ascii-art-web",
    title: "ascii-art-web",
    category: "Software Engineering",
    kind: "01-Talent project",
    description: "A Go web application that brings the ascii-art CLI project to the browser through an HTTP server, HTML templates, and a form-based interface.",
    url: "https://github.com/YoussefElkahky/ASCII-ART-WEB",
    image: "assets/images/ascii-art-web.svg",
    tags: ["Go", "net/http", "html/template", "Web Development", "01-Talent"],
    details: [
      "Extended the ascii-art CLI project into a browser-based web application.",
      "Built an HTTP server using Go's net/http package and rendered pages with html/template.",
      "Implemented form handling for text input and banner selection using standard, shadow, and thinkertoy styles.",
      "Applied input validation, HTTP status handling, structured error handling, and HTML escaping."
    ]
  },
  {
    id: "local-ai-assistant",
    title: "Local AI assistant",
    category: "Software Engineering",
    kind: "Personal project",
    description: "A local-first AI assistant designed to run on a user's own machine, combining Go with local AI tooling and system-level integrations.",
    url: "https://github.com/YoussefElkahky/Jave_Engine",
    image: "assets/images/jave-local-ai-assistant.svg",
    tags: ["Go", "Local AI", "Ollama", "Automation", "Privacy"],
    details: [
      "Designed around running AI models locally rather than relying on cloud-based processing.",
      "Integrated local AI capabilities with speech, browser interaction, and system automation.",
      "Explored modular architecture so individual assistant capabilities can be extended or replaced.",
      "Focused on privacy, local processing, and practical interaction with the Linux environment."
    ]
  },
  {
    id: "mr-robot-ctf",
    title: "Mr Robot CTF",
    category: "Cybersecurity",
    kind: "TryHackMe CTF",
    description: "A TryHackMe CTF based on the Mr. Robot theme, involving a Linux target and three hidden keys that must be discovered through enumeration and exploitation.",
    url: "https://tryhackme.com/room/mrrobot",
    tags: ["Web Security", "Linux", "Enumeration", "Exploitation", "CTF"],
    details: [
      "Practised reconnaissance and enumeration against a deliberately vulnerable Linux machine.",
      "Investigated web-accessible services and potential attack paths to obtain an initial foothold.",
      "Worked through the machine to locate the three hidden keys required by the challenge.",
      "Applied practical penetration-testing concepts in a controlled TryHackMe lab environment."
    ]
  },
  {
    id: "Management-Wants-a-Word",
    title: "Management Wants a Word",
    category: "Cybersecurity",
    kind: "Hacker Holidays challenge",
    description: "A TryHackMe Windows forensics challenge focused on investigating a forensic artifact collection and following a chain of credentials, browser data, Windows DPAPI, and encrypted data.",
    url: "https://tryhackme.com/room/hh-managementwantsaword-6bf3cc41",
    tags: ["Digital Forensics", "Windows", "DPAPI", "Chrome Forensics", "Cryptography"],
    details: [
      "Investigated a Windows forensic artifact collection rather than attacking a live target.",
      "Worked with Windows registry artifacts, local credentials, and DPAPI-protected data.",
      "Analysed Chromium browser artifacts and encrypted credentials as part of the investigation chain.",
      "Practised following forensic evidence across multiple artifacts to recover the information required by the challenge."
    ]
  },
  {
    id: "recruit",
    title: "Recruit",
    category: "Cybersecurity",
    kind: "TryHackMe web challenge",
    description: "A TryHackMe web security challenge involving a recruitment portal where the objective is to identify application weaknesses and progress from a normal user to administrative access.",
    url: "https://tryhackme.com/room/recruitwebchallenge",
    tags: ["Web Security", "Web Enumeration", "LFI", "SQL Injection", "Authentication"],
    details: [
      "Mapped the web application and investigated its exposed functionality and attack surface.",
      "Practised identifying and exploiting web application vulnerabilities in a controlled environment.",
      "Worked with Local File Inclusion and SQL injection as part of the challenge's attack path.",
      "Explored authentication and access-control weaknesses while progressing through the application."
    ]
  },
  {
    id: "windows-jump",
    title: "Windows Jump",
    category: "Cybersecurity",
    kind: "TryHackMe CTF",
    description: "A TryHackMe Windows privilege-escalation challenge focused on moving from guest access to SYSTEM through a chain of Windows misconfigurations.",
    url: "https://tryhackme.com/room/windowsjump",
    tags: ["Windows", "Privilege Escalation", "SMB", "Registry", "Service Hijacking", "Scheduled Tasks"],
    details: [
      "Practised enumeration of a Windows environment starting from low-privileged guest access.",
      "Investigated exposed credentials and Windows registry configuration as potential escalation paths.",
      "Worked with service configuration and binary hijacking concepts to obtain higher privileges.",
      "Explored scheduled-task abuse as part of the final privilege-escalation path to SYSTEM."
    ]
  },
  {
    id: "The-Hollow-Shell",
    title: "The Hollow Shell",
    category: "Cybersecurity",
    kind: "Hacker Holidays 2026 challenge",
    description: "A TryHackMe web security challenge involving a file-upload feature in the Byte Lotus Shoreline Display portal, where the objective is to bypass the application's validation and gain command execution.",
    url: "https://tryhackme.com/room/hh-thehollowshell-ddb582ac",
    tags: ["Web Security", "File Upload", "Command Injection", "Linux", "CTF"],
    details: [
      "Practised web application enumeration and investigation of an upload-based attack surface.",
      "Analysed how uploaded shell packages were validated and processed by the application.",
      "Explored weaknesses in file-upload validation and server-side processing.",
      "Applied exploitation techniques in a controlled TryHackMe web security lab."
    ]
  },
  {
    id: "CryptoCabana",
    title: "CryptoCabana",
    category: "Cybersecurity",
    kind: "Hacker Holidays 2026 challenge",
    description: "A TryHackMe cloud security challenge involving an Azure-hosted application, exposed trust relationships, Azure Storage, and Key Vault access.",
    url: "https://tryhackme.com/room/hh-cryptocabana-f81cac95",
    tags: ["Cloud Security", "Azure", "Azure CLI", "Key Vault", "Storage"],
    details: [
      "Worked with an Azure-hosted target and used the Azure CLI during the investigation.",
      "Investigated what information and access the public-facing application exposed.",
      "Explored trust relationships between Azure services, storage, and Key Vault.",
      "Practised identifying excessive or unintended cloud permissions in a controlled security lab."
    ]
  },
  {
    id: "support",
    title: "Support",
    category: "Cybersecurity",
    kind: "CTF",
    description: "A TryHackMe challenge involving an internal support platform with user management, APIs, and system-level functionality where weak trust boundaries create opportunities for exploitation.",
    url: "https://tryhackme.com/room/support",
    tags: ["Web Security", "API Security", "Linux", "Enumeration", "Privilege Escalation"],
    details: [
      "Practised reconnaissance and service enumeration against a deliberately vulnerable environment.",
      "Investigated a web-based support platform and its exposed application functionality.",
      "Analysed user-controlled input and trust boundaries between application components.",
      "Worked through the attack path in a controlled TryHackMe environment."
    ]
  },
  {
    id: "checkmate",
    title: "Checkmate",
    category: "Cybersecurity",
    kind: "CTF",
    description: "A TryHackMe password-security challenge focused on identifying predictable password patterns and exploiting weak credentials across multiple internal services.",
    url: "https://tryhackme.com/room/checkmate",
    tags: ["Password Attacks", "OSINT", "Hydra", "CeWL", "Hashcat", "SSH"],
    details: [
      "Enumerated multiple services and investigated authentication mechanisms.",
      "Used OSINT and contextual information to understand predictable password-generation patterns.",
      "Practised targeted wordlist generation and online password attacks with tools such as Hydra and CeWL.",
      "Worked with password hashes and Hashcat before using recovered credentials to access SSH."
    ]
  },
  {
    id: "vulnerability-capstone",
    title: "Vulnerability Capstone",
    category: "Cybersecurity",
    kind: "TryHackMe vulnerability assessment challenge",
    description: "A TryHackMe capstone challenge focused on applying vulnerability research and exploitation techniques to assess a deliberately vulnerable web application before publication.",
    url: "https://tryhackme.com/room/vulnerabilitycapstone",
    tags: ["Vulnerability Assessment", "Web Security", "Vulnerability Research", "Exploitation", "Web Application Security"],
    details: [
      "Applied concepts from the TryHackMe Vulnerability Research module to an end-to-end security assessment.",
      "Investigated a deliberately vulnerable web application and identified weaknesses in its attack surface.",
      "Practised researching vulnerabilities and connecting identified weaknesses to practical exploitation paths.",
      "Used the challenge to consolidate vulnerability discovery, validation, and exploitation skills."
    ]
  },
  {
    id: "jump",
    title: "Jump",
    category: "Cybersecurity",
    kind: "CTF",
    description: "A Linux privilege-escalation challenge involving a chain of users and misconfigured scripts, services, PATH handling, sudo permissions, and writable files.",
    url: "https://tryhackme.com/room/jump",
    tags: ["Linux", "Privilege Escalation", "PATH Hijacking", "Sudo", "Systemd", "CTF"],
    details: [
      "Enumerated the Linux environment and identified a chain of privilege-escalation opportunities.",
      "Moved through multiple user accounts by exploiting writable scripts and group permissions.",
      "Investigated PATH-based execution and systemd service behaviour as escalation vectors.",
      "Abused sudo permissions and writable deployment components to progress through the environment and reach root."
    ]
  },
  {
    id: "the-game",
    title: "The Game",
    category: "Cybersecurity",
    kind: "CTF",
    description: "A TryHackMe game-hacking and reverse-engineering challenge involving a Tetris executable containing hidden encrypted information.",
    url: "https://tryhackme.com/room/hfb1thegame",
    tags: ["Reverse Engineering", "Binary Analysis", "Game Hacking", "Windows", "CTF"],
    details: [
      "Analysed a supplied Tetris executable as part of a controlled game-hacking challenge.",
      "Inspected the binary and its embedded data to identify where the hidden information was stored.",
      "Practised basic reverse-engineering and static binary-analysis techniques.",
      "Extracted and decoded the hidden data to complete the challenge."
    ]
  },
  {
    id: "the-guestbook",
    title: "The Guestbook",
    category: "Cybersecurity",
    kind: "Hacker Holidays 2026 challenge",
    description: "An AI security challenge where the Byte Lotus guestbook is processed by an AI concierge that treats guest entries as instructions, creating an indirect prompt-injection and command-execution attack path.",
    url: "https://tryhackme.com/room/hh-theguestbook-0130ffaf",
    tags: ["AI Security", "Prompt Injection", "Web Security", "Command Injection", "CTF"],
    details: [
      "Investigated an AI-powered web application where user-supplied guestbook content influenced downstream actions.",
      "Explored indirect prompt injection through content processed by the VERA concierge system.",
      "Analysed the application's tool and authorization flow to identify an unsafe trust boundary.",
      "Demonstrated how untrusted input could influence command execution within the controlled TryHackMe environment."
    ]
  },
  {
    id: "aziz-website",
    title: "Aziz Agency Website",
    category: "Website Developments",
    kind: "Freelance web development project",
    description: "A website design and development project created for Aziz Agency, presenting its services, company information, portfolio, and contact details.",
    url: "https://youssefelkahky.github.io/Aziz-Marketing-Agency/",
    image: "assets/P Pics/Aziz Website.png",
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "Web Design"],
    details: [
      "Designed and developed a multi-section agency website.",
      "Implemented sections for company information, services, portfolio, testimonials, and contact details.",
      "Built the interface as a responsive front-end web project.",
      "Applied practical web-development and UI implementation skills to a real agency project."
    ]
  },
  {
    id: "orca-website",
    title: "Orca Marketing Agency",
    category: "Website Developments",
    kind: "Freelance web development project",
    description: "A website design and development project for Orca Marketing Agency, presenting its services, portfolio, team, and business positioning.",
    url: "https://youssefelkahky.github.io/ORCA-BMA/",
    image: "assets/P Pics/Orca Marketing Agency.png",
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "Web Design"],
    details: [
      "Designed and developed the front-end website for Orca Marketing Agency.",
      "Implemented sections covering agency services, projects, team members, and contact information.",
      "Built the site as a static web experience using front-end technologies.",
      "Worked on translating the agency's business positioning and services into a structured website interface."
    ]
  },
  {
    id: "Game-Console-Website",
    title: "Game Console Project",
    category: "Website Developments",
    kind: "University project",
    description: "A front-end website project built around a fictional game console, presenting the console concept, features, controllers, and games through a product-focused interface.",
    url: "https://youssefelkahky.github.io/Game-Console/",
    image: "assets/P Pics/Game console project.png",
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "UI Design"],
    details: [
      "Designed and developed a product-focused game console website.",
      "Created sections for the console concept, features, controllers, and games.",
      "Implemented a visual product interface with navigation and interactive front-end elements.",
      "Practised translating a fictional product concept into a complete web presentation."
    ]
  },
  {
    id: "eldeep-website",
    title: "Eldeep Website",
    category: "Website Developments",
    kind: "Freelance web development project",
    description: "A website design and development project created for Eldeep, presenting the business through a structured and responsive web interface.",
    url: "https://youssefelkahky.github.io/ElDeeb-/",
    image: "assets/P Pics/Eldeep website.png",
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "Web Design"],
    details: [
      "Designed and developed a complete website interface for the Eldeep project.",
      "Structured the site to present business information and content through a clear navigation experience.",
      "Implemented the front-end using standard web technologies.",
      "Applied practical web design and development skills to a real project."
    ]
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "Website Developments",
    kind: "Web development project",
    description: "A restaurant website concept designed to showcase food offerings through a visual interface with navigation and an online ordering call to action.",
    url: "https://youssefelkahky.github.io/Restaurant-Website/",
    image: "assets/P Pics/Restorant Website.png",
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "UI Design"],
    details: [
      "Designed and developed a restaurant-focused landing page.",
      "Created a visual presentation for food and restaurant offerings.",
      "Implemented navigation and an online ordering call to action.",
      "Practised building a user-focused interface around a food-service concept."
    ]
  },
  {
    id: "travel-agency-website",
    title: "Travel Agency Website",
    category: "Website Developments",
    kind: "Web development project",
    description: "A travel agency website project designed to present travel services and destinations through a structured and visually focused web interface.",
    url: "https://youssefelkahky.github.io/Travel-Website/",
    image: "assets/P Pics/Travel agancy.png",
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "Travel"],
    details: [
      "Designed and developed a travel agency website interface.",
      "Structured the website around travel-related services and destination content.",
      "Implemented the front-end using standard web technologies.",
      "Practised creating a visually engaging interface for a travel-focused business."
    ]
  },
  {
    id: "orca-business-plan",
    title: "Orca Business Plan",
    category: "Marketing",
    kind: "College marketing project",
    description: "A product marketing campaign and go-to-market strategy developed as a college project for the Orca brand.",
    url: "assets/Marketing/Orca Business Plan.pdf",
    image: "assets/Marketing/Pics/Orca.png",
    tags: ["Product Marketing", "Go-to-Market Strategy", "Market Analysis"],
    details: [
      "Developed a product marketing campaign and go-to-market strategy.",
      "Worked on positioning the product within its target market.",
      "Applied marketing analysis and strategic planning to the project.",
      "Presented the proposed strategy as a structured business plan."
    ]
  },
  {
    id: "amoun-agro-presentation",
    title: "Amoun Agro Presentation",
    category: "Marketing",
    kind: "College marketing project",
    description: "A product marketing presentation developed for Amoun Agro, a specialty fertilizers brand.",
    url: "assets/Marketing/Amoun Agro - Presentation.pdf",
    image: "assets/Marketing/Pics/Amoun Agro.jpg",
    tags: ["Product Marketing", "Go-to-Market Strategy", "Presentation"],
    details: [
      "Developed a product marketing campaign for a specialty fertilizers brand.",
      "Worked on product positioning and go-to-market considerations.",
      "Organized the marketing strategy into a structured presentation.",
      "Applied practical marketing planning and presentation skills."
    ]
  },
  {
    id: "kiwi-marketing-package",
    title: "Kiwi Marketing Package",
    category: "Marketing",
    kind: "College marketing project",
    description: "A product marketing campaign and go-to-market strategy developed as a college project for Kiwi.",
    url: "assets/Marketing/kiwi market Package .pdf",
    image: "assets/Marketing/Pics/kiwi.jpg",
    tags: ["Product Marketing", "Go-to-Market Strategy", "Marketing Strategy"],
    details: [
      "Developed a product marketing campaign and go-to-market strategy.",
      "Worked on product positioning and market considerations.",
      "Structured the campaign around marketing objectives and target customers.",
      "Presented the proposed strategy as a complete marketing package."
    ]
  },
  {
    id: "Drahmed-mabrouk-marketing-plan",
    title: "DrAhmed Mabrouk Marketing Plan",
    category: "Marketing",
    kind: "College marketing project",
    description: "A marketing plan developed for DrAhmed Mabrouk, covering market analysis, competitors, positioning, and strategic marketing activities.",
    url: "assets/Marketing/DrAhmed Mabrouk (Full Marketing Plan) .pdf",
    image: "assets/Marketing/Pics/Marketing Competitors Analysis .png",
    tags: ["Marketing Strategy", "Market Research", "Competitor Analysis", "Go-to-Market Strategy"],
    details: [
      "Developed a complete marketing plan for the project.",
      "Conducted market and competitor analysis to understand the competitive landscape.",
      "Worked on positioning, target customers, and marketing strategy.",
      "Translated the research and analysis into an actionable marketing plan."
    ]
  },
  {
    id: "Pavona-marketing-plan",
    title: "Pavona Marketing Plan",
    category: "Marketing",
    kind: "College marketing project",
    description: "A marketing plan developed for Pavona Furniture, focusing on market positioning, product marketing, and go-to-market strategy.",
    url: "assets/Marketing/Pavona furniture (Marketing Plan).pdf",
    image: "assets/Marketing/Pics/Pavona .jpg",
    tags: ["Marketing Strategy", "Product Marketing", "Market Research", "Go-to-Market Strategy"],
    details: [
      "Developed a marketing plan for a furniture brand.",
      "Worked on product positioning and target-market considerations.",
      "Applied market research and strategic marketing planning.",
      "Developed a go-to-market strategy for the proposed campaign."
    ]
  },
  {
    id: "English-Tutor-Business-Model",
    title: "English Tutor Business Model",
    category: "Marketing",
    kind: "Business model project",
    description: "A business model and marketing strategy project developed for an English Tutor Academy.",
    url: "assets/Marketing/Business Model for English Tutor Academy.pdf",
    image: "assets/Marketing/Pics/English Tutor.jpg",
    tags: ["Business Model", "Marketing", "Market Research", "Strategy"],
    details: [
      "Developed a business model for an English Tutor Academy.",
      "Worked on the structure of the business and its value proposition.",
      "Applied marketing and strategic planning concepts to the business model.",
      "Presented the proposed model as a structured business presentation."
    ]
  },
  {
    id: "DrAhmed-Mabrouk-Market-Research",
    title: "DrAhmed Mabrouk Market Research",
    category: "Marketing",
    kind: "Market research project",
    description: "A market research project developed for DrAhmed Mabrouk, focusing on market conditions, competitors, and customer-related insights.",
    url: "assets/Marketing/DrAhmed Mabrouk Market Research.pdf",
    image: "assets/Marketing/Pics/Marketing Competitors Analysis .png",
    tags: ["Market Research", "Competitor Analysis", "Marketing", "Data Analysis"],
    details: [
      "Conducted market research for the DrAhmed Mabrouk project.",
      "Investigated competitors and the surrounding market landscape.",
      "Collected and organized information to support marketing decisions.",
      "Used the research findings to inform positioning and marketing strategy."
    ]
  },
  {
    id: "GazzarTestingHub-Content-Scripting",
    title: "GazzarTestingHub Content Scripting",
    category: "Marketing",
    kind: "Content strategy project",
    description: "A content scripting and marketing project developed for Gazzar Testing Hub, focused on planning and structuring marketing content.",
    url: "assets/Marketing/Gazzar Testing Hub Content Scripting.pdf",
    image: "assets/Marketing/Pics/GazzarTestingHub.jpg",
    tags: ["Content Strategy", "Content Scripting", "Marketing", "Social Media"],
    details: [
      "Developed a content scripting project for Gazzar Testing Hub.",
      "Planned and structured marketing content around the target audience.",
      "Applied content strategy principles to communicate the brand and its services.",
      "Organized the proposed content into a structured marketing presentation."
    ]
  },
  {
    id: "Apple-Console-Product-Marketing-Campaign",
    title: "Apple Console product marketing campaign",
    category: "Marketing",
    kind: "College marketing project",
    description: "A college project developing a product marketing campaign and go-to-market strategy for a fictional Apple game console.",
    url: "assets/Marketing/Apple Console (product marketing campaign and a go-to-market strategy) (College Project).pdf",
    image: "assets/Marketing/Pics/Console Main.png",
    tags: ["Product Marketing", "Go-to-Market Strategy", "Market Research", "Brand Strategy"],
    details: [
      "Developed a product marketing campaign for a fictional Apple game console.",
      "Worked on product positioning, target customers, and competitive considerations.",
      "Developed a go-to-market strategy for the proposed product.",
      "Combined market research and strategic marketing concepts into a complete campaign."
    ]
  },
  {
    id: "Kiwi Presentation",
    title: "Kiwi Presentation",
    category: "Marketing",
    kind: "College marketing presentation",
    description: "A marketing presentation developed for the Kiwi project, presenting the proposed product marketing strategy and campaign.",
    url: "assets/Marketing/KIWI Presentation .pdf",
    image: "assets/Marketing/Pics/kiwi.jpg",
    tags: ["Product Marketing", "Marketing Strategy", "Presentation"],
    details: [
      "Prepared a marketing presentation for the Kiwi project.",
      "Presented the proposed product marketing strategy and campaign.",
      "Covered key marketing considerations and go-to-market planning.",
      "Applied presentation and strategic communication skills to the project."
    ]
  },
  {
    id: "Mayaseen-Influncer-Recommendation",
    title: "Myaseen Influncer Recommendation",
    category: "Marketing",
    kind: "Influencer marketing project",
    description: "An influencer recommendation project developed for Myaseen, focusing on selecting suitable influencers to support the brand's marketing activities.",
    url: "assets/Marketing/Influencer Recommendation .pdf",
    image: "assets/Marketing/Pics/myaseen.png",
    tags: ["Influencer Marketing", "Marketing Strategy", "Audience Analysis"],
    details: [
      "Developed an influencer recommendation strategy for Myaseen.",
      "Evaluated influencer suitability based on the brand and target audience.",
      "Organized recommendations to support potential campaign planning.",
      "Applied audience and marketing considerations to influencer selection."
    ]
  },
  {
    id: "joyful-cookiz-plan",
    title: "Joyful Cookiz Marketing Plan",
    category: "Marketing",
    kind: "Marketing plan",
    description: "A full marketing plan developed for Joyful Cookiz, covering strategic marketing activities and brand positioning.",
    url: "assets/Marketing/JoyfulCookiz (Full Marketing Plan).pdf",
    image: "assets/Marketing/Pics/joyful Cookiz'.jpg",
    tags: ["Marketing Strategy", "Marketing Plan", "Brand Strategy"],
    details: [
      "Developed a full marketing plan for Joyful Cookiz.",
      "Worked on the brand's marketing direction and positioning.",
      "Applied market and customer considerations to the proposed strategy.",
      "Structured the marketing activities into a comprehensive plan."
    ]
  },
  {
    id: "kuja-content-strategy",
    title: "KUJA CONTENT STRATEGY",
    category: "Marketing",
    kind: "Content strategy project",
    description: "A content strategy project developed for KUJA, focused on organizing the brand's communication and content direction.",
    url: "assets/Marketing/KUJA (CONTENT STRATEGY).pdf",
    image: "assets/Marketing/Pics/KUJA .jpg",
    tags: ["Content Strategy", "Marketing Strategy", "Content Planning"],
    details: [
      "Developed a content strategy for KUJA.",
      "Planned the brand's content direction and communication approach.",
      "Structured content ideas around the intended audience and marketing objectives.",
      "Applied strategic content planning to support the brand's positioning."
    ]
  },
  {
    id: "butterfly-marketing-strategy",
    title: "Butterfly Marketing Strategy",
    category: "Marketing",
    kind: "Marketing strategy project",
    description: "A marketing strategy project developed for Butterfly, presenting the proposed marketing direction and strategic activities.",
    url: "assets/Marketing/Butterfly Marketing Strategy Mind Map.pdf",
    image: "assets/Marketing/Pics/Butterfly.png",
    tags: ["Marketing Strategy", "Market Planning", "Brand Strategy"],
    details: [
      "Developed a marketing strategy for Butterfly.",
      "Organized the strategic direction using a marketing mind map.",
      "Worked on positioning and key marketing activities.",
      "Structured the strategy to provide a clear overview of the proposed marketing approach."
    ]
  },
  {
    id: "nazeef-campaign",
    title: "Nazeef Marketing Campaign",
    category: "Marketing",
    kind: "Marketing campaign project",
    description: "A marketing campaign project developed for Nazeef, covering campaign planning and promotional activities.",
    url: "assets/Marketing/Nazzef (Marketing Campaign).pdf",
    image: "assets/Marketing/Pics/Nazeef.jpg",
    tags: ["Marketing Campaign", "Campaign Planning", "Marketing Strategy"],
    details: [
      "Developed a marketing campaign for Nazeef.",
      "Planned campaign activities around the brand's marketing objectives.",
      "Worked on promotional messaging and campaign direction.",
      "Structured the campaign into a clear marketing plan."
    ]
  },
  {
    id: "Myaseen-Marketing-Strategy",
    title: "Myaseen Marketing Strategy",
    category: "Marketing",
    kind: "Marketing strategy project",
    description: "A marketing strategy project developed for Myaseen, focusing on brand positioning, target customers, and strategic marketing activities.",
    url: "assets/Marketing/MYASEEN (Marketing Strategy).pdf",
    image: "assets/Marketing/Pics/myaseen.png",
    tags: ["Marketing Strategy", "Brand Strategy", "Market Planning"],
    details: [
      "Developed a marketing strategy for Myaseen.",
      "Worked on brand positioning and target-market considerations.",
      "Planned strategic marketing activities around the project objectives.",
      "Organized the proposed strategy into a structured marketing plan."
    ]
  },
  {
    id: "Ninet-Marketing-Plan",
    title: "Ninet Marketing Plan",
    category: "Marketing",
    kind: "Marketing plan",
    description: "A full marketing plan developed for Ninet, covering the proposed marketing direction and strategic activities.",
    url: "assets/Marketing/NINET (Marketing Plan).pdf",
    image: "assets/Marketing/Pics/Ninet.jpg",
    tags: ["Marketing Strategy", "Marketing Plan", "Brand Strategy"],
    details: [
      "Developed a full marketing plan for Ninet.",
      "Worked on the brand's marketing direction and positioning.",
      "Applied market and customer considerations to the proposed strategy.",
      "Structured the proposed activities into a comprehensive marketing plan."
    ]
  },
  {
    id: "Old-Street-Marketing-Strategy",
    title: "Old Street Marketing Strategy",
    category: "Marketing",
    kind: "Marketing strategy project",
    description: "A marketing strategy project developed for Old Street, focusing on the brand's positioning and overall marketing direction.",
    url: "assets/Marketing/OLD STREE (Marketing Strategy ).pdf",
    image: "assets/Marketing/Pics/Old Street.jpg",
    tags: ["Marketing Strategy", "Brand Strategy", "Market Planning"],
    details: [
      "Developed a marketing strategy for Old Street.",
      "Worked on the brand's positioning and strategic direction.",
      "Applied marketing planning concepts to the project.",
      "Organized the proposed strategy into a structured marketing framework."
    ]
  },
  {
    id: "Puffy-Fluffy-Marketing-Campaign",
    title: "Puffy & Fluffy Marketing Campaign",
    category: "Marketing",
    kind: "Marketing campaign project",
    description: "A marketing campaign developed for Puffy & Fluffy, focusing on campaign planning, brand communication, and promotional activities.",
    url: "assets/Marketing/puffy (Marketing Campaign).pdf",
    image: "assets/Marketing/Pics/Puffy & Fluffy.jpg",
    tags: ["Marketing Campaign", "Campaign Planning", "Brand Communication"],
    details: [
      "Developed a marketing campaign for Puffy & Fluffy.",
      "Planned campaign activities around the brand's objectives.",
      "Worked on promotional communication and campaign direction.",
      "Structured the proposed activities into a complete campaign."
    ]
  },
  {
    id: "Nazzef-Sales-Script",
    title: "Nazzef Sales Script",
    category: "Marketing",
    kind: "Sales enablement project",
    description: "A sales scripting project developed for Nazzef to structure customer-facing sales conversations and support the sales process.",
    url: "assets/Marketing/Sales Script for NAZEEF.pdf",
    image: "assets/Marketing/Pics/Nazeef.jpg",
    tags: ["Sales Strategy", "Sales Scripting", "Customer Communication"],
    details: [
      "Developed a sales script for Nazzef.",
      "Structured customer-facing conversations around the sales process.",
      "Worked on messaging designed to communicate the product or service clearly.",
      "Applied customer communication and sales-planning principles."
    ]
  },
  {
    id: "Butterfly-Content-Calender",
    title: "Butterfly Content Calender",
    category: "Marketing",
    kind: "Content planning project",
    description: "A content calendar developed for Butterfly to organize planned marketing content and maintain a structured publishing schedule.",
    url: "assets/Marketing/Butterfly (Content Calender).pdf",
    image: "assets/Marketing/Pics/Butterfly.png",
    tags: ["Content Planning", "Content Calendar", "Social Media Marketing"],
    details: [
      "Developed a content calendar for Butterfly.",
      "Organized planned content into a structured publishing schedule.",
      "Aligned content topics with the broader marketing direction.",
      "Applied practical content planning and campaign organization."
    ]
  },
  {
    id: "Aziz-Competitor-Analysis",
    title: "Aziz Competitor Analysis",
    category: "Marketing",
    kind: "Competitor analysis project",
    description: "A competitor analysis project developed for Aziz, examining competing businesses and their market positioning.",
    url: "assets/Marketing/Aziz Competitor Analysis.pdf",
    image: "assets/Marketing/Pics/Mostafa Aziz.jpg",
    tags: ["Competitor Analysis", "Market Research", "Marketing Strategy"],
    details: [
      "Conducted competitor analysis for the Aziz project.",
      "Investigated competing businesses and their market positioning.",
      "Compared relevant competitors to identify market patterns and opportunities.",
      "Used the analysis to support marketing and positioning decisions."
    ]
  },
  {
    id: "DrAhmed-Mabrouk-Content-Strategy",
    title: "DrAhmed Mabrouk Content strategy",
    category: "Marketing",
    kind: "Content strategy project",
    description: "A content strategy project developed for DrAhmed Mabrouk, focusing on content direction, communication, and audience engagement.",
    url: "assets/Marketing/DrAhmed Mabrouk Content strategy.pdf",
    image: "assets/Marketing/Pics/Marketing Competitors Analysis .png",
    tags: ["Content Strategy", "Content Planning", "Marketing", "Audience Engagement"],
    details: [
      "Developed a content strategy for DrAhmed Mabrouk.",
      "Planned content direction around the intended audience and marketing objectives.",
      "Structured content themes and communication ideas.",
      "Applied strategic content planning to support the overall marketing direction."
    ]
  }
];

const certifications = [
  {
    title: "Pre Security",
    issuer: "TryHackMe",
    status: "Completed learning path",
    description: "Completed a foundational learning path covering core computing, networking, Linux, and cybersecurity concepts."
  },
  {
    title: "Cyber Security 101",
    issuer: "TryHackMe",
    status: "Completed learning path",
    description: "Completed a hands-on cybersecurity learning path covering core security concepts, tools, and practical exercises."
  },
  {
    title: "Jr Penetration Tester",
    issuer: "TryHackMe",
    status: "In progress",
    description: "Hands-on training in penetration testing methodology, web application security, enumeration, exploitation, and privilege escalation.",
    inProgress: true
  },
  {
    title: "Red Hat System Administration I",
    issuer: "Information Technology Institute (ITI)",
    status: "Training completed",
    description: "Completed Red Hat System Administration I training through ITI, covering practical Linux system administration fundamentals.",
  },
  {
    title: "Red Hat System Administration II",
    issuer: "Information Technology Institute (ITI)",
    status: "In progress",
    description: "Continuing practical training in Red Hat Linux system administration.",
    inProgress: true
  }
];

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderCertifications() {
  const container = document.getElementById("cert-grid");
  if (!container) return;

  const fragment = document.createDocumentFragment();
  certifications.forEach((certification) => {
    const card = element("article", `card cert reveal${certification.inProgress ? " in-progress" : ""}`);
    card.append(element("span", `pill${certification.inProgress ? " muted" : ""}`, certification.status));
    card.append(element("h4", "", certification.title));
    card.append(element("p", "", certification.issuer));
    card.append(element("p", "", certification.description));
    fragment.append(card);
  });
  container.replaceChildren(fragment);
}

function renderProject(project) {
  const card = element("article", "project reveal");
  card.dataset.category = project.category;
  const projectLinkLabels = {
    "Software Engineering": "Project Repository",
    Cybersecurity: "TryHackMe Room",
    "Website Developments": "Visit Website",
    Marketing: "View PDF"
  };

  if (project.image) {
    const imageFrame = element("div", "project-img");
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = `${project.title} project artwork`;
    image.loading = "lazy";
    imageFrame.append(image);
    card.append(imageFrame);
  }

  const body = element("div", "project-body");
  const meta = element("div", "project-meta");
  meta.append(element("span", "pill muted", project.kind));
  meta.append(element("span", "", project.category));
  body.append(meta, element("h3", "", project.title), element("p", "", project.description));

  const tags = element("ul", "tags");
  tags.setAttribute("aria-label", `${project.title} technologies and topics`);
  project.tags.forEach((tag) => tags.append(element("li", "", tag)));
  body.append(tags);

  const actions = element("div", "project-actions");
  const detailsButton = element("button", "btn btn-ghost btn-sm", "View details");
  detailsButton.type = "button";
  detailsButton.dataset.projectId = project.id;
  const projectLink = element("a", "btn btn-ghost btn-sm", projectLinkLabels[project.category]);
  projectLink.href = project.url;
  projectLink.target = "_blank";
  projectLink.rel = "noopener noreferrer";
  actions.append(detailsButton, projectLink);
  body.append(actions);
  card.append(body);
  return card;
}

function renderProjects() {
  const container = document.getElementById("project-grid");
  const filters = document.getElementById("project-filters");
  if (!container || !filters) return;

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const filterFragment = document.createDocumentFragment();
  categories.forEach((category, index) => {
    const button = element("button", "filter-btn", category);
    button.type = "button";
    button.dataset.filter = category;
    button.setAttribute("aria-pressed", String(index === 0));
    filterFragment.append(button);
  });
  filters.replaceChildren(filterFragment);
  container.replaceChildren(...projects.map(renderProject));
}

function renderWriteups() {
  const container = document.getElementById("writeup-grid");
  if (!container) return;

  const card = element("article", "card writeup reveal");
  const pill = element("span", "pill", "Medium");
  const title = element("h3", "", "Security Research & Write-ups");
  const description = element(
    "p",
    "",
    "I publish technical notes, security research, CTF walkthroughs, and hands-on learning from my cybersecurity journey, covering topics such as web security, Linux, penetration testing, and TryHackMe labs."
  );

  const actions = element("div", "project-actions");
  const link = element("a", "btn btn-primary btn-sm", "Read on Medium");
  link.href = profileLinks.medium;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  actions.append(link);

  card.append(pill, title, description, actions);
  container.replaceChildren(card);
}

function renderRepositories() {
  const container = document.getElementById("repo-list");
  if (!container) return;

  const link = element("a", "repo");
  link.href = "https://github.com/YoussefElkahky";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  const name = element("span", "repo-name");
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("class", "ic");
  icon.setAttribute("aria-hidden", "true");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", "#i-github");
  icon.append(use);
  name.append(icon, document.createTextNode("Browse GitHub repositories"));
  link.append(name, element("span", "repo-lang", "GitHub"));
  link.append(element("span", "repo-desc", "Explore my software engineering projects, cybersecurity work, Go development, and Linux-based experiments."));
  container.replaceChildren(link);
}

function updateProfileLinks() {
  document.querySelectorAll("[data-link]").forEach((link) => {
    const url = profileLinks[link.dataset.link];
    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      link.removeAttribute("tabindex");
    } else if (link.getAttribute("href") === "#") {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("tabindex", "-1");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });
}

function initProjectFilters() {
  const filters = document.getElementById("project-filters");
  const status = document.getElementById("filter-status");
  const grid = document.getElementById("project-grid");
  if (!filters || !grid) return;

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    const category = button.dataset.filter;
    filters.querySelectorAll("button[data-filter]").forEach((filterButton) => {
      filterButton.setAttribute("aria-pressed", String(filterButton === button));
    });

    let visibleCount = 0;
    grid.querySelectorAll(".project").forEach((project) => {
      const visible = category === "All" || project.dataset.category === category;
      project.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (status) status.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "project" : "projects"}.`;
  });
}

function initCaseModal() {
  const modal = document.getElementById("case-modal");
  const body = document.getElementById("case-body");
  const closeButton = document.getElementById("case-close");
  const grid = document.getElementById("project-grid");
  if (!modal || !body || !closeButton || !grid) return;

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-project-id]");
    if (!button) return;
    const project = projects.find((item) => item.id === button.dataset.projectId);
    if (!project) return;

    body.replaceChildren();
    const article = element("article", "case");
    article.append(element("span", "pill muted", project.kind));
    const title = element("h2", "", project.title);
    title.id = "case-title";
    article.append(title, element("p", "case-summary", project.description));
    const section = element("section");
    section.append(element("h3", "", "Project notes"));
    const list = element("ul");
    project.details.forEach((detail) => list.append(element("li", "", detail)));
    section.append(list);
    article.append(section);
    const tagSection = element("section");
    tagSection.append(element("h3", "", "Topics"));
    tagSection.append(element("p", "", project.tags.join(" · ")));
    article.append(tagSection);
    body.append(article);

    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    document.body.classList.add("modal-open");
    closeButton.focus();
  });

  const closeModal = () => {
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
    document.body.classList.remove("modal-open");
  };
  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
}

function initNavigation() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const header = document.getElementById("site-header");
  if (!toggle || !menu || !header) return;

  const setMenuOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => setMenuOpen(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
  document.addEventListener("click", (event) => {
    if (document.body.classList.contains("nav-open") && !header.contains(event.target)) setMenuOpen(false);
  });

  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const navLinks = [...menu.querySelectorAll("[data-nav]")];
  const sections = [...document.querySelectorAll("main [data-section]")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.dataset.nav === entry.target.dataset.section;
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
          link.classList.toggle("active", active);
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach((section) => observer.observe(section));
  }
}

function initReveals() {
  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  revealItems.forEach((item) => observer.observe(item));
}

function initPortraitFallback() {
  document.querySelectorAll("img[data-fallback]").forEach((image) => {
    const showFallback = () => {
      const fallback = element("span", "monogram", image.dataset.fallback);
      fallback.setAttribute("role", "img");
      fallback.setAttribute("aria-label", image.alt || "Profile image");
      image.replaceWith(fallback);
    };
    image.addEventListener("error", showFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) showFallback();
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const error = document.getElementById("cf-error");
  if (!form) return;

  let status = document.getElementById("contact-status");
  if (!status) {
    status = element("p", "sr-only");
    status.id = "contact-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    form.append(status);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const valid = name && email && message && form.elements.email.validity.valid;
    if (!valid) {
      if (error) {
        error.hidden = false;
        error.textContent = name && email && message ? "Enter a valid email address." : "Please fill in all three fields.";
      }
      status.textContent = "Please correct the highlighted form fields.";
      return;
    }

    if (error) error.hidden = true;
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\nReply to: ${email}`;
    status.textContent = "Opening your email app.";
    window.location.href = `mailto:Youssefelkahkyy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function initNetwork() {
  const canvas = document.getElementById("network");
  const context = canvas?.getContext("2d");
  if (!canvas || !context) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let points = [];
  let frame = 0;

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = bounds.width;
    height = bounds.height;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    const count = Math.min(58, Math.max(18, Math.round(width / 22)));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.24,
      vy: (Math.random() - 0.5) * 0.24
    }));
    draw(false);
  };

  const draw = (move) => {
    context.clearRect(0, 0, width, height);
    points.forEach((point, index) => {
      if (move) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
      }
      for (let otherIndex = index + 1; otherIndex < points.length; otherIndex += 1) {
        const other = points[otherIndex];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 145) {
          context.strokeStyle = `rgba(226, 58, 82, ${(1 - distance / 145) * 0.22})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
      context.fillStyle = "rgba(226, 58, 82, 0.48)";
      context.beginPath();
      context.arc(point.x, point.y, 1.4, 0, Math.PI * 2);
      context.fill();
    });
  };

  const animate = () => {
    draw(true);
    frame = window.requestAnimationFrame(animate);
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });
  if (!reduceMotion) frame = window.requestAnimationFrame(animate);
  window.addEventListener("pagehide", () => window.cancelAnimationFrame(frame), { once: true });
}

renderCertifications();
renderProjects();
renderWriteups();
renderRepositories();
updateProfileLinks();
initProjectFilters();
initCaseModal();
initNavigation();
initPortraitFallback();
initContactForm();
initNetwork();
document.documentElement.classList.add("js");
initReveals();
