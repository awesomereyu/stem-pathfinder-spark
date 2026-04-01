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
  tags: string[]; // used for matching
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
