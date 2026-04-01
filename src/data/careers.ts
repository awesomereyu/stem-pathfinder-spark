export interface Career {
  id: string;
  title: string;
  icon: string;
  colorKey: string;
  description: string;
  highSchoolPrep: string[];
  extracurriculars: string[];
  professionalSkills: string[];
  educationLinks: { label: string; url: string }[];
  entryLevelJobs: string[];
  salaryRange: string;
  growthOutlook: string;
  tags: string[];
}

export const careers: Career[] = [
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: "BarChart3",
    colorKey: "career-data",
    description:
      "Data Scientists transform massive datasets into actionable insights that drive business decisions. They combine statistics, programming, and domain expertise to uncover patterns, build predictive models, and communicate findings to stakeholders.",
    highSchoolPrep: ["AP Calculus AB/BC", "AP Statistics", "AP Computer Science A", "AP Computer Science Principles"],
    extracurriculars: ["TSA (Technology Student Association)", "Math League / Mu Alpha Theta", "Science Olympiad", "Kaggle student competitions"],
    professionalSkills: ["Python & R programming", "SQL & database querying", "Machine Learning frameworks (scikit-learn, TensorFlow)", "Data visualization (Tableau, matplotlib)", "Statistical analysis & hypothesis testing"],
    educationLinks: [
      { label: "B.S. Data Science – MIT", url: "https://www.mit.edu/academics/" },
      { label: "B.S. Statistics – UC Berkeley", url: "https://statistics.berkeley.edu/academics/undergrad" },
      { label: "Google Data Analytics Certificate", url: "https://grow.google/certificates/data-analytics/" },
      { label: "IBM Data Science Professional Certificate", url: "https://www.ibm.com/training/badge/data-science-professional-certificate" },
    ],
    entryLevelJobs: ["Junior Data Analyst", "Business Intelligence Intern", "Data Engineering Associate", "Research Assistant"],
    salaryRange: "$65,000 – $130,000",
    growthOutlook: "36% growth (Much faster than average)",
    tags: ["math", "puzzles", "computers", "analysis", "patterns"],
  },
  {
    id: "biomedical-engineer",
    title: "Biomedical Engineer",
    icon: "HeartPulse",
    colorKey: "career-bio",
    description:
      "Biomedical Engineers design medical devices, artificial organs, and healthcare technologies that save lives. They bridge engineering principles with medical sciences to develop prosthetics, imaging systems, and drug delivery mechanisms.",
    highSchoolPrep: ["AP Biology", "AP Chemistry", "AP Physics C", "AP Calculus BC"],
    extracurriculars: ["Science Olympiad", "HOSA (Health Occupations Students of America)", "TSA", "Hospital volunteering or shadowing"],
    professionalSkills: ["CAD/3D modeling (SolidWorks, AutoCAD)", "Biomechanics analysis", "Medical device regulations (FDA)", "MATLAB programming", "Lab techniques & biomaterials"],
    educationLinks: [
      { label: "B.S. Biomedical Engineering – Johns Hopkins", url: "https://www.bme.jhu.edu/academics/undergraduate/" },
      { label: "B.S. Bioengineering – Stanford", url: "https://bioengineering.stanford.edu/academics-admission/undergraduate-program" },
      { label: "B.S. Biomedical Engineering – Georgia Tech", url: "https://bme.gatech.edu/bme/undergraduate" },
    ],
    entryLevelJobs: ["Biomedical Equipment Technician", "Quality Assurance Engineer", "Research Associate", "Clinical Engineering Intern"],
    salaryRange: "$62,000 – $120,000",
    growthOutlook: "5% growth (Faster than average)",
    tags: ["biology", "building", "health", "design", "helping"],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    icon: "Shield",
    colorKey: "career-cyber",
    description:
      "Cybersecurity Analysts protect organizations from digital threats by monitoring networks, investigating breaches, and implementing security protocols. They are the digital guardians who keep data and systems safe from hackers and malware.",
    highSchoolPrep: ["AP Computer Science A", "AP Computer Science Principles", "Networking fundamentals", "AP Calculus AB"],
    extracurriculars: ["CyberPatriot competition", "TSA Cybersecurity event", "Capture The Flag (CTF) competitions", "Coding clubs"],
    professionalSkills: ["Network security & firewalls", "Penetration testing tools (Kali Linux, Metasploit)", "SIEM tools (Splunk, QRadar)", "Python scripting for automation", "Incident response & forensics"],
    educationLinks: [
      { label: "B.S. Cybersecurity – NYU Tandon", url: "https://engineering.nyu.edu/academics/programs/cybersecurity-bs" },
      { label: "CompTIA Security+ Certification", url: "https://www.comptia.org/certifications/security" },
      { label: "B.S. Computer Science (Security) – Purdue", url: "https://www.cs.purdue.edu/undergraduate/curriculum/security.html" },
      { label: "Certified Ethical Hacker (CEH)", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" },
    ],
    entryLevelJobs: ["SOC Analyst (Tier 1)", "IT Security Intern", "Vulnerability Assessment Associate", "Security Operations Technician"],
    salaryRange: "$60,000 – $115,000",
    growthOutlook: "33% growth (Much faster than average)",
    tags: ["computers", "puzzles", "protection", "analysis", "technology"],
  },
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    icon: "Leaf",
    colorKey: "career-env",
    description:
      "Environmental Scientists study the natural world to protect ecosystems and human health. They analyze water, soil, and air quality, assess environmental risks, and develop solutions for pollution, climate change, and conservation challenges.",
    highSchoolPrep: ["AP Environmental Science", "AP Biology", "AP Chemistry", "AP Statistics"],
    extracurriculars: ["Environmental club", "Science Olympiad", "Local conservation volunteering", "TSA Environmental Challenges"],
    professionalSkills: ["GIS mapping (ArcGIS)", "Environmental sampling & lab analysis", "Environmental Impact Assessments (EIA)", "Data analysis with R or Python", "Report writing & regulatory compliance"],
    educationLinks: [
      { label: "B.S. Environmental Science – Cornell", url: "https://cals.cornell.edu/environmental-science" },
      { label: "B.S. Earth & Environmental Science – Columbia", url: "https://eesc.columbia.edu/undergraduate" },
      { label: "EPA Environmental Career Resources", url: "https://www.epa.gov/careers" },
    ],
    entryLevelJobs: ["Environmental Technician", "Field Research Assistant", "Sustainability Coordinator", "Water Quality Analyst"],
    salaryRange: "$50,000 – $95,000",
    growthOutlook: "6% growth (Faster than average)",
    tags: ["nature", "biology", "helping", "outdoors", "research"],
  },
  {
    id: "robotics-engineer",
    title: "Robotics Engineer",
    icon: "Bot",
    colorKey: "career-robot",
    description:
      "Robotics Engineers design, build, and program robots and automated systems used in manufacturing, healthcare, exploration, and everyday life. They combine mechanical engineering, electronics, and computer science to create intelligent machines.",
    highSchoolPrep: ["AP Physics C (Mechanics)", "AP Calculus BC", "AP Computer Science A", "Engineering/Technology courses"],
    extracurriculars: ["FIRST Robotics Competition (FRC)", "VEX Robotics", "TSA Robotics events", "Arduino/Raspberry Pi projects"],
    professionalSkills: ["ROS (Robot Operating System)", "C++ and Python programming", "CAD design & 3D printing", "Sensor integration & control systems", "Embedded systems programming"],
    educationLinks: [
      { label: "B.S. Robotics Engineering – WPI", url: "https://www.wpi.edu/academics/departments/robotics-engineering" },
      { label: "B.S. Mechanical Engineering (Robotics) – Carnegie Mellon", url: "https://www.ri.cmu.edu/education/academic-programs/undergraduate/" },
      { label: "B.S. Electrical & Computer Engineering – Georgia Tech", url: "https://ece.gatech.edu/undergraduate" },
    ],
    entryLevelJobs: ["Robotics Technician", "Automation Engineer Intern", "Controls Systems Associate", "Mechatronics Technician"],
    salaryRange: "$65,000 – $125,000",
    growthOutlook: "9% growth (Faster than average)",
    tags: ["building", "computers", "math", "design", "technology"],
  },
  {
    id: "aerospace-technician",
    title: "Aerospace Technician",
    icon: "Rocket",
    colorKey: "career-aero",
    description:
      "Aerospace Technicians assemble, test, and maintain aircraft, spacecraft, and missile systems. They work hands-on with cutting-edge technology, ensuring that flight systems are safe, functional, and mission-ready for aviation and space exploration.",
    highSchoolPrep: ["AP Physics 1 & 2", "Pre-Calculus / AP Calculus AB", "Engineering & Technology courses", "AP Chemistry"],
    extracurriculars: ["TSA Flight Endurance or Dragster events", "Civil Air Patrol", "Model rocketry clubs", "Aviation ground school"],
    professionalSkills: ["Aircraft systems troubleshooting", "Blueprint & schematic reading", "Composite materials & fabrication", "Avionics testing equipment", "FAA regulations & safety protocols"],
    educationLinks: [
      { label: "A.S. Aerospace Technology – Embry-Riddle", url: "https://erau.edu/degrees/associate/aerospace-technology" },
      { label: "B.S. Aerospace Engineering – MIT", url: "https://aeroastro.mit.edu/academics/undergraduate-program/" },
      { label: "FAA A&P Mechanic Certification", url: "https://www.faa.gov/mechanics/become" },
      { label: "B.S. Aerospace Engineering – Purdue", url: "https://engineering.purdue.edu/AAE" },
    ],
    entryLevelJobs: ["Aircraft Maintenance Technician", "Aerospace Assembly Technician", "Quality Inspector", "Avionics Installer"],
    salaryRange: "$50,000 – $100,000",
    growthOutlook: "6% growth (Faster than average)",
    tags: ["building", "math", "outdoors", "technology", "hands-on"],
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    icon: "Code",
    colorKey: "career-data",
    description:
      "Software Engineers design, develop, and maintain the applications and systems that power modern life. From mobile apps to cloud platforms, they write clean, scalable code and collaborate with teams to solve complex technical challenges.",
    highSchoolPrep: ["AP Computer Science A", "AP Computer Science Principles", "AP Calculus AB/BC", "Linear Algebra (if available)"],
    extracurriculars: ["Hackathons", "TSA Software Development", "Open source contributions on GitHub", "Coding clubs or competitive programming"],
    professionalSkills: ["Full-stack web development (React, Node.js)", "Version control (Git/GitHub)", "Algorithms & data structures", "Cloud platforms (AWS, GCP)", "Agile/Scrum methodology"],
    educationLinks: [
      { label: "B.S. Computer Science – Stanford", url: "https://cs.stanford.edu/academics/undergraduate" },
      { label: "B.S. Computer Science – Carnegie Mellon", url: "https://www.cs.cmu.edu/undergraduate-programs" },
      { label: "freeCodeCamp (Free)", url: "https://www.freecodecamp.org/" },
      { label: "The Odin Project (Free)", url: "https://www.theodinproject.com/" },
    ],
    entryLevelJobs: ["Junior Software Developer", "Frontend Developer Intern", "QA Engineer", "DevOps Associate"],
    salaryRange: "$70,000 – $150,000",
    growthOutlook: "25% growth (Much faster than average)",
    tags: ["computers", "puzzles", "math", "design", "technology"],
  },
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    icon: "Building2",
    colorKey: "career-robot",
    description:
      "Civil Engineers plan, design, and oversee the construction of infrastructure projects like roads, bridges, dams, and buildings. They ensure structures are safe, sustainable, and built to serve communities for decades.",
    highSchoolPrep: ["AP Physics C (Mechanics)", "AP Calculus BC", "AP Environmental Science", "Engineering courses"],
    extracurriculars: ["TSA Structural Engineering events", "MATHCOUNTS / Math Olympiad", "Habitat for Humanity", "Model Bridge Building competitions"],
    professionalSkills: ["Structural analysis software (SAP2000, ETABS)", "AutoCAD & Civil 3D", "Project management", "Geotechnical & hydraulic engineering basics", "Building codes & zoning regulations"],
    educationLinks: [
      { label: "B.S. Civil Engineering – UC Berkeley", url: "https://ce.berkeley.edu/programs/undergraduate" },
      { label: "B.S. Civil Engineering – Georgia Tech", url: "https://ce.gatech.edu/undergraduate" },
      { label: "FE (Fundamentals of Engineering) Exam", url: "https://ncees.org/engineering/fe/" },
    ],
    entryLevelJobs: ["Junior Civil Engineer", "Field Engineering Intern", "Construction Inspector", "Transportation Planner"],
    salaryRange: "$58,000 – $110,000",
    growthOutlook: "5% growth (Average)",
    tags: ["building", "math", "design", "outdoors", "hands-on"],
  },
  {
    id: "pharmacist",
    title: "Pharmacist",
    icon: "Pill",
    colorKey: "career-bio",
    description:
      "Pharmacists are medication experts who ensure patients receive safe, effective drug therapies. They counsel patients, collaborate with doctors, and play a critical role in public health through immunizations, health screenings, and medication management.",
    highSchoolPrep: ["AP Chemistry", "AP Biology", "AP Calculus AB", "AP Psychology"],
    extracurriculars: ["HOSA", "Science Olympiad (Chemistry events)", "Pharmacy shadowing", "Red Cross volunteering"],
    professionalSkills: ["Pharmacology & drug interactions", "Patient counseling & communication", "Compounding & dispensing", "Clinical trial knowledge", "Healthcare regulations & HIPAA"],
    educationLinks: [
      { label: "Pharm.D. – University of Michigan", url: "https://pharmacy.umich.edu/pharmd" },
      { label: "Pharm.D. – UNC Eshelman", url: "https://pharmacy.unc.edu/academics/pharmd/" },
      { label: "PCAT Exam Info", url: "https://www.pearsonassessments.com/postsecondaryeducation/pharmacy/pcat.html" },
    ],
    entryLevelJobs: ["Pharmacy Technician", "Pharmacy Intern", "Clinical Research Coordinator", "Pharmaceutical Sales Rep"],
    salaryRange: "$75,000 – $140,000",
    growthOutlook: "2% growth (Slower than average)",
    tags: ["biology", "health", "helping", "research", "analysis"],
  },
  {
    id: "marine-biologist",
    title: "Marine Biologist",
    icon: "Fish",
    colorKey: "career-env",
    description:
      "Marine Biologists study ocean life from microscopic plankton to massive whales. They research marine ecosystems, track species populations, study the impacts of climate change on oceans, and work to conserve underwater habitats around the world.",
    highSchoolPrep: ["AP Biology", "AP Environmental Science", "AP Chemistry", "AP Statistics"],
    extracurriculars: ["Marine science camps", "Aquarium volunteering", "Scuba diving certification", "Environmental clubs"],
    professionalSkills: ["Marine taxonomy & ecology", "Underwater surveying & diving", "GIS & remote sensing", "Statistical modeling for populations", "Scientific writing & grant proposals"],
    educationLinks: [
      { label: "B.S. Marine Biology – University of Miami", url: "https://www.rsmas.miami.edu/academics/undergraduate/" },
      { label: "B.S. Marine Science – UC Santa Cruz", url: "https://oceansci.ucsc.edu/academics/undergraduate/" },
      { label: "NOAA Careers & Internships", url: "https://www.noaa.gov/education/opportunities" },
    ],
    entryLevelJobs: ["Marine Research Assistant", "Aquarium Biologist", "Environmental Consultant", "Fisheries Observer"],
    salaryRange: "$45,000 – $85,000",
    growthOutlook: "5% growth (Average)",
    tags: ["nature", "biology", "outdoors", "research", "analysis"],
  },
  {
    id: "ai-ml-engineer",
    title: "AI / Machine Learning Engineer",
    icon: "Brain",
    colorKey: "career-aero",
    description:
      "AI/ML Engineers build intelligent systems that can learn, reason, and make decisions. From self-driving cars to voice assistants, they design neural networks, train models on vast datasets, and push the boundaries of what machines can do.",
    highSchoolPrep: ["AP Calculus BC", "AP Statistics", "AP Computer Science A", "Linear Algebra (college dual enrollment)"],
    extracurriculars: ["AI/ML online courses (fast.ai, Coursera)", "Kaggle competitions", "TSA coding events", "Research mentorship programs"],
    professionalSkills: ["Deep learning (PyTorch, TensorFlow)", "Natural Language Processing", "Computer Vision", "Cloud ML platforms (AWS SageMaker, GCP Vertex AI)", "Mathematics (linear algebra, probability)"],
    educationLinks: [
      { label: "B.S. Computer Science (AI) – Stanford", url: "https://cs.stanford.edu/academics/undergraduate" },
      { label: "B.S. Computer Science – MIT", url: "https://www.eecs.mit.edu/academics/undergraduate-programs/" },
      { label: "DeepLearning.AI Specialization", url: "https://www.deeplearning.ai/" },
      { label: "fast.ai Practical Deep Learning", url: "https://www.fast.ai/" },
    ],
    entryLevelJobs: ["ML Engineer Intern", "AI Research Assistant", "Data Scientist (ML focus)", "Computer Vision Associate"],
    salaryRange: "$85,000 – $170,000",
    growthOutlook: "40%+ growth (Much faster than average)",
    tags: ["computers", "math", "patterns", "analysis", "puzzles"],
  },
  {
    id: "electrical-engineer",
    title: "Electrical Engineer",
    icon: "Zap",
    colorKey: "career-robot",
    description:
      "Electrical Engineers design, develop, and test electrical systems—from power grids and renewable energy systems to microchips and telecommunications networks. They are essential to nearly every modern technology we rely on.",
    highSchoolPrep: ["AP Physics C (E&M)", "AP Calculus BC", "AP Computer Science A", "Electronics courses"],
    extracurriculars: ["TSA Electronics events", "Amateur radio (Ham Radio)", "FIRST Robotics", "Arduino & circuit projects"],
    professionalSkills: ["Circuit design & PCB layout", "MATLAB & Simulink", "Embedded systems (C/C++)", "Signal processing", "Power systems analysis"],
    educationLinks: [
      { label: "B.S. Electrical Engineering – MIT", url: "https://www.eecs.mit.edu/academics/undergraduate-programs/" },
      { label: "B.S. Electrical Engineering – Georgia Tech", url: "https://ece.gatech.edu/undergraduate" },
      { label: "B.S. Electrical Engineering – Purdue", url: "https://engineering.purdue.edu/ECE" },
    ],
    entryLevelJobs: ["Junior Electrical Engineer", "Test Engineer", "Electronics Technician", "Power Systems Intern"],
    salaryRange: "$65,000 – $120,000",
    growthOutlook: "3% growth (Average)",
    tags: ["math", "building", "technology", "hands-on", "design"],
  },
  {
    id: "ux-designer",
    title: "UX/UI Designer",
    icon: "Palette",
    colorKey: "career-data",
    description:
      "UX/UI Designers create intuitive, beautiful digital experiences. They research how users interact with products, design wireframes and prototypes, and ensure that apps and websites are both functional and delightful to use.",
    highSchoolPrep: ["AP Computer Science Principles", "AP Art & Design (2D or 3D)", "AP Psychology", "Graphic Design courses"],
    extracurriculars: ["TSA Webmaster", "Design competitions (Adobe Creative Jam)", "Personal portfolio projects", "School newspaper or yearbook design"],
    professionalSkills: ["Figma & Sketch prototyping", "User research & usability testing", "HTML/CSS fundamentals", "Design systems & accessibility (WCAG)", "Information architecture"],
    educationLinks: [
      { label: "B.F.A. Interaction Design – SVA", url: "https://sva.edu/academics/undergraduate/interaction-design" },
      { label: "Google UX Design Certificate", url: "https://grow.google/certificates/ux-design/" },
      { label: "B.S. Human-Computer Interaction – Carnegie Mellon", url: "https://www.hcii.cmu.edu/academics/undergraduate" },
    ],
    entryLevelJobs: ["Junior UX Designer", "UI Design Intern", "Product Design Associate", "UX Research Assistant"],
    salaryRange: "$55,000 – $120,000",
    growthOutlook: "16% growth (Faster than average)",
    tags: ["design", "helping", "computers", "patterns", "puzzles"],
  },
  {
    id: "chemical-engineer",
    title: "Chemical Engineer",
    icon: "FlaskConical",
    colorKey: "career-env",
    description:
      "Chemical Engineers apply chemistry, physics, and math to solve problems involving the production of chemicals, fuel, food, pharmaceuticals, and many other products. They design processes and equipment for large-scale safe and efficient manufacturing.",
    highSchoolPrep: ["AP Chemistry", "AP Physics C", "AP Calculus BC", "AP Biology"],
    extracurriculars: ["Science Olympiad (Chemistry events)", "TSA", "Chemistry club", "Undergraduate research programs"],
    professionalSkills: ["Process simulation (Aspen Plus, HYSYS)", "Thermodynamics & fluid mechanics", "Quality control & statistical process control", "Lab safety & OSHA regulations", "MATLAB & process modeling"],
    educationLinks: [
      { label: "B.S. Chemical Engineering – MIT", url: "https://cheme.mit.edu/academics/undergraduate/" },
      { label: "B.S. Chemical Engineering – Georgia Tech", url: "https://chbe.gatech.edu/undergraduate" },
      { label: "AIChE Student Resources", url: "https://www.aiche.org/community/students" },
    ],
    entryLevelJobs: ["Process Engineer Intern", "Quality Control Analyst", "Manufacturing Engineer", "Research Chemist"],
    salaryRange: "$65,000 – $125,000",
    growthOutlook: "8% growth (Faster than average)",
    tags: ["biology", "math", "research", "analysis", "building"],
  },
  {
    id: "game-developer",
    title: "Game Developer",
    icon: "Gamepad2",
    colorKey: "career-aero",
    description:
      "Game Developers create interactive entertainment experiences across platforms—from mobile puzzle games to massive multiplayer worlds. They combine programming, art, physics, and storytelling to build engaging virtual experiences.",
    highSchoolPrep: ["AP Computer Science A", "AP Art & Design", "AP Physics 1", "AP Calculus AB"],
    extracurriculars: ["Game jams (Ludum Dare, Global Game Jam)", "TSA Video Game Design", "Unity/Unreal personal projects", "Modding communities"],
    professionalSkills: ["Unity or Unreal Engine", "C# or C++ programming", "3D modeling (Blender, Maya)", "Game physics & math", "Version control & collaboration"],
    educationLinks: [
      { label: "B.S. Game Design – DigiPen", url: "https://www.digipen.edu/academics/game-design-and-development" },
      { label: "B.S. Computer Science (Games) – USC", url: "https://games.usc.edu/academics/" },
      { label: "Unity Learn (Free)", url: "https://learn.unity.com/" },
      { label: "Unreal Engine Learning Portal", url: "https://dev.epicgames.com/community/unreal-engine/learning" },
    ],
    entryLevelJobs: ["Junior Game Programmer", "QA Game Tester", "Level Design Intern", "Gameplay Engineer"],
    salaryRange: "$50,000 – $120,000",
    growthOutlook: "16% growth (Faster than average)",
    tags: ["computers", "design", "puzzles", "building", "patterns"],
  },
  {
    id: "network-engineer",
    title: "Network Engineer",
    icon: "Network",
    colorKey: "career-cyber",
    description:
      "Network Engineers design, implement, and manage the computer networks that keep organizations connected. They configure routers, switches, and firewalls to ensure reliable, secure, and high-performance communication infrastructure.",
    highSchoolPrep: ["AP Computer Science Principles", "Networking fundamentals", "AP Calculus AB", "IT certification prep courses"],
    extracurriculars: ["CyberPatriot", "TSA Networking events", "Home lab projects", "IT helpdesk volunteering"],
    professionalSkills: ["Cisco IOS & network configuration", "TCP/IP, DNS, DHCP protocols", "Network monitoring (Wireshark, Nagios)", "Cloud networking (AWS VPC, Azure VNet)", "Network security & VPN setup"],
    educationLinks: [
      { label: "Cisco CCNA Certification", url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html" },
      { label: "B.S. Information Technology – WGU", url: "https://www.wgu.edu/online-it-degrees/information-technology-bachelors-program.html" },
      { label: "CompTIA Network+ Certification", url: "https://www.comptia.org/certifications/network" },
    ],
    entryLevelJobs: ["NOC Technician", "Junior Network Administrator", "IT Support Specialist", "Network Installation Technician"],
    salaryRange: "$55,000 – $110,000",
    growthOutlook: "6% growth (Faster than average)",
    tags: ["technology", "computers", "protection", "puzzles", "hands-on"],
  },
];

export type InterestTag = "math" | "puzzles" | "computers" | "analysis" | "patterns" | "biology" | "building" | "health" | "design" | "helping" | "protection" | "technology" | "nature" | "outdoors" | "research" | "hands-on";

export interface QuizQuestion {
  id: string;
  question: string;
  options: { label: string; tags: InterestTag[] }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Which activity sounds most exciting to you?",
    options: [
      { label: "Analyzing data to find hidden patterns", tags: ["analysis", "patterns", "math"] },
      { label: "Building or designing something physical", tags: ["building", "design", "hands-on"] },
      { label: "Protecting systems from threats", tags: ["protection", "computers", "technology"] },
      { label: "Exploring the natural world outdoors", tags: ["nature", "outdoors", "biology"] },
    ],
  },
  {
    id: "q2",
    question: "Which school subject do you enjoy the most?",
    options: [
      { label: "Math & Statistics", tags: ["math", "analysis", "patterns"] },
      { label: "Biology & Chemistry", tags: ["biology", "health", "nature"] },
      { label: "Computer Science & Programming", tags: ["computers", "technology", "puzzles"] },
      { label: "Physics & Engineering", tags: ["building", "design", "math"] },
    ],
  },
  {
    id: "q3",
    question: "How would your friends describe you?",
    options: [
      { label: "The problem solver who loves puzzles", tags: ["puzzles", "analysis", "computers"] },
      { label: "The one who always wants to help others", tags: ["helping", "health", "biology"] },
      { label: "The creative builder and tinkerer", tags: ["building", "design", "hands-on"] },
      { label: "The nature lover and explorer", tags: ["nature", "outdoors", "research"] },
    ],
  },
  {
    id: "q4",
    question: "Which project would you most want to work on?",
    options: [
      { label: "A machine learning model that predicts trends", tags: ["computers", "math", "patterns"] },
      { label: "A medical device that helps patients", tags: ["health", "biology", "design"] },
      { label: "A robot that can navigate obstacles", tags: ["building", "technology", "hands-on"] },
      { label: "A system to monitor air or water quality", tags: ["nature", "research", "analysis"] },
    ],
  },
  {
    id: "q5",
    question: "What kind of work environment appeals to you?",
    options: [
      { label: "Behind a computer solving complex problems", tags: ["computers", "puzzles", "analysis"] },
      { label: "A high-tech lab with cutting-edge equipment", tags: ["technology", "design", "health"] },
      { label: "A workshop or factory floor building things", tags: ["building", "hands-on", "technology"] },
      { label: "Outdoors in the field collecting samples", tags: ["outdoors", "nature", "research"] },
    ],
  },
  {
    id: "q6",
    question: "Which emerging technology excites you the most?",
    options: [
      { label: "Artificial Intelligence & Big Data", tags: ["computers", "patterns", "math"] },
      { label: "Drones & autonomous vehicles", tags: ["building", "technology", "hands-on"] },
      { label: "Gene editing & biotech breakthroughs", tags: ["biology", "health", "research"] },
      { label: "Cybersecurity & digital privacy", tags: ["protection", "computers", "puzzles"] },
    ],
  },
  {
    id: "q7",
    question: "What motivates you the most?",
    options: [
      { label: "Making beautiful things people love to use", tags: ["design", "helping", "patterns"] },
      { label: "Understanding how nature and life work", tags: ["biology", "nature", "research"] },
      { label: "Creating games or interactive experiences", tags: ["computers", "design", "puzzles"] },
      { label: "Keeping people and systems safe", tags: ["protection", "helping", "technology"] },
    ],
  },
  {
    id: "q8",
    question: "Pick a weekend project you'd actually do:",
    options: [
      { label: "Wire up a circuit board or solder electronics", tags: ["hands-on", "building", "technology"] },
      { label: "Code a personal website or small app", tags: ["computers", "design", "puzzles"] },
      { label: "Go on a nature hike and identify species", tags: ["nature", "outdoors", "biology"] },
      { label: "Analyze a dataset or crunch interesting numbers", tags: ["math", "analysis", "patterns"] },
    ],
  },
];

/**
 * Scores each career based on tag frequency from user answers.
 * Returns careers sorted by match percentage (descending).
 */
export function scoreCarers(selectedTags: InterestTag[]): { career: Career; score: number; percentage: number }[] {
  const tagCounts: Record<string, number> = {};
  for (const tag of selectedTags) {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  }

  const scored = careers.map((career) => {
    let score = 0;
    for (const tag of career.tags) {
      score += tagCounts[tag] || 0;
    }
    return { career, score };
  });

  const maxScore = Math.max(...scored.map((s) => s.score), 1);
  return scored
    .map((s) => ({ ...s, percentage: Math.round((s.score / maxScore) * 100) }))
    .sort((a, b) => b.score - a.score);
}
