import { useState, useEffect } from "react";

// Set document title and favicon
if (typeof document !== 'undefined') {
  document.title = "Kartik Hushare - Operations & Systems Portfolio";
  
  // Add viewport meta tag for proper mobile rendering
  let viewport = document.querySelector("meta[name=viewport]");
  if (!viewport) {
    viewport = document.createElement('meta');
    viewport.name = 'viewport';
    document.head.appendChild(viewport);
  }
  viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
  
  const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
  favicon.type = 'image/svg+xml';
  favicon.rel = 'icon';
  favicon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💼</text></svg>";
  document.head.appendChild(favicon);
  
  // Meta tags for SEO
  const addMeta = (attr, key, content) => {
    let meta = document.querySelector(`meta[${attr}="${key}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attr, key);
      document.head.appendChild(meta);
    }
    meta.content = content;
  };
  
  addMeta('name', 'description', 'Professional portfolio of Kartik Hushare - Business Process & Systems Analyst specializing in operations, automation, and data-driven decision making.');
  addMeta('property', 'og:title', 'Kartik Hushare - Operations & Systems Professional');
  addMeta('property', 'og:description', 'Specializing in process optimization, ERP systems, and business operations with 5+ years experience.');
  addMeta('property', 'og:type', 'website');
  addMeta('name', 'twitter:card', 'summary_large_image');
}

// ========== DATA ==========
const pages = ["Home","About","Work","Education","Skills","Contact"];

const experienceData = [
  { id:1, title:"Business Process & Systems Analyst", company:"BloomingBox LLC", type:"Full-time", period:"Nov 2024 – Present", location:"On-site", description:[
    "Acted as the bridge between departments, aligning technical solutions with operational goals and ensuring seamless cross-functional communication.",
    "Directed collaborations with Mercedes and Netflix, preparing systems and operations for strategic partnerships.",
    "Partially led the implementation of accounting systems, CRM platforms, and mobile app deployment.",
    "Spearheaded automation initiatives including AI-driven workflows, barcoding systems, and process optimization.",
    "Supported the launch of new warehouses and stores with robust technical infrastructure and data-driven reporting.",
    "Built interactive Power BI dashboards with advanced DAX measures for cost analysis and variance tracking."
  ], achievements:[
    { metric:"Order Completion Time", result:"10 mins → <1 min", icon:"⚡" },
    { metric:"Weekly Reconciliations", result:"132 → 30-35", icon:"📉" },
    { metric:"Stock Accuracy", result:"Achieved 85%", icon:"✓" },
    { metric:"COGS Reduction", result:"Down 2-3%", icon:"💰" },
    { metric:"Accounting Module", result:"Built from Scratch", icon:"🏗️" },
    { metric:"Food Industry Entry", result:"Tech & Ops Support", icon:"🍔" },
    { metric:"ERP Migrations", result:"Successfully Completed", icon:"🔄" }
  ]},
  { id:2, title:"Operational Supervisor", company:"Floward.co", type:"Full-time", period:"Jan 2024 – Nov 2024", location:"On-site", description:[
    "Managed 500+ daily order transactions across Abu Dhabi and Al Ain, ensuring seamless customer experience.",
    "Coordinated with suppliers, customer service, inventory teams, drivers, and florists for timely order fulfillment.",
    "Oversaw advance food ordering, verified all order details, and resolved customer complaints via multiple channels.",
    "Provided continuous feedback, trained subordinates, and collaborated to ensure on-time deliveries.",
    "Created and analysed performance reports, investigated operational issues, and implemented efficiency solutions."
  ], achievements:[
    { metric:"On-Time Delivery", result:"Maintained >97%", icon:"🎯" },
    { metric:"Customer Complaints", result:"Reduced by 7%", icon:"📉" },
    { metric:"Wastage Control", result:"Successfully Managed", icon:"♻️" }
  ]},
  { id:3, title:"Warehouse Operations Associate", company:"Amazon", type:"Full-time", period:"Nov 2022 – Jan 2023", location:"On-site", description:[
    "Worked in high-volume warehouse operations with strict SLAs.",
    "Handled picking, packing, sorting, and inventory movement at scale."
  ]},
  { id:4, title:"Project Management Intern", company:"Jankalyan Multipurpose Education Society", type:"Internship", period:"Apr 2023 – May 2023", location:"Remote", description:[
    "Supported fundraising strategy and online donor engagement.",
    "Prepared progress reports and coordinated remotely with stakeholders."
  ]},
  { id:5, title:"Hospitality Assistant", company:"Arc Hospitality Recruitment", type:"Full-time", period:"Feb 2023 – Apr 2023", location:"On-site", description:[
    "Worked in fast-paced hospitality operations.",
    "Developed teamwork, service quality, and adaptability."
  ]},
  { id:6, title:"Assistant Manager Intern", company:"Karmavati Tools & Electrical Store", type:"Internship", period:"Apr 2019 – Jul 2020", location:"On-site", description:[
    "Supported inventory control, supplier coordination, and customer service operations.",
    "Gained hands-on experience in team scheduling, order management, and POS systems.",
    "Assisted in marketing efforts to promote products and improve store visibility."
  ], achievements:[
    { metric:"POS System", result:"Successfully Installed", icon:"💳" },
    { metric:"Stock Management", result:"Enhanced with Bayaskar Software", icon:"📊" },
    { metric:"COVID Operations", result:"Maintained Store Functionality", icon:"🏪" }
  ]}
];

const projectsData = [
  { 
    id:1, 
    title:"End-to-End Accounting Module Implementation", 
    company:"BloomingBox LLC", 
    type:"Project", 
    period:"Nov 2024 – Jan 2025", 
    category:"ERP & Systems",
    tags:["ERP Development", "Financial Systems", "Process Design", "Change Management"],
    challenge:"After the head of finance resigned, critical financial discrepancies emerged — incorrect numbers, missing digital footprints, no approval workflows, and complete lack of documentation. The company had zero visibility into financial operations.",
    solution:[
      "Designed and implemented a complete accounting module from scratch including all ledgers, chart of accounts, and cost centers.",
      "Built comprehensive approval workflows with digital footprints and role-based access controls to ensure accountability.",
      "Integrated the module with procurement, inventory, asset management, and sales systems for end-to-end financial visibility.",
      "Developed automated reports and Power BI dashboards for real-time money management, sales flow, and purchase flow tracking.",
      "Created specialized voucher systems: landed cost vouchers, payment entries, journal entries — all connected to operational systems.",
      "Established proper financial controls to bring operations back on track with accurate, auditable data."
    ],
    achievements:[
      { metric:"System Components", result:"Built from Scratch", icon:"🏗️" },
      { metric:"Digital Footprint", result:"100% Documented", icon:"📋" },
      { metric:"Financial Visibility", result:"Real-time Insights", icon:"👁️" },
      { metric:"Approval Workflows", result:"Fully Automated", icon:"✅" },
      { metric:"System Integration", result:"4+ Modules Linked", icon:"🔗" }
    ],
    techStack:["ERP Customization", "Power BI", "Database Design", "Workflow Automation", "Access Control Systems"]
  },
  { 
    id:2, 
    title:"Dynamic COGS Analysis & Product-Level Costing System", 
    company:"BloomingBox LLC", 
    type:"Project", 
    period:"Dec 2024 – Present", 
    category:"Data Analytics",
    tags:["Power BI", "DAX", "Cost Analysis", "Data Modeling", "Business Intelligence"],
    challenge:"Previous finance head calculated COGS from P&L statements, which is inaccurate for the flower industry where prices change daily and product recipes vary. A small flower head means more flowers needed — traditional accounting methods couldn't capture this variability.",
    solution:[
      "Built a sophisticated Power BI system that calculates material costs at the product level for each individual order.",
      "Implemented granular tracking: each order contains multiple items, each item has its own recipe, and each material's price varies daily.",
      "Collaborated with production to redesign ERP workflows for accurate material consumption tracking at the line-item level.",
      "Created multi-dimensional analysis: segmented COGS by product, item group, supplier, delivery date, creation date, and hub.",
      "Developed planned vs. actual COGS comparison with variance analysis using advanced DAX measures.",
      "Delivered actionable insights that identified cost-saving opportunities across the supply chain."
    ],
    achievements:[
      { metric:"COGS Reduction", result:"2-3% Down", icon:"💰" },
      { metric:"Calculation Accuracy", result:"Product-Level Precision", icon:"🎯" },
      { metric:"Data Dimensions", result:"6+ Segmentations", icon:"📊" },
      { metric:"Reporting Frequency", result:"Real-time Updates", icon:"⚡" },
      { metric:"Cost Visibility", result:"Material-Level Tracking", icon:"🔍" }
    ],
    techStack:["Power BI", "Advanced DAX", "Data Modeling", "ERP Integration", "Excel", "SQL"]
  },
  { 
    id:3, 
    title:"ERP Performance Optimization & Server Migration", 
    company:"BloomingBox LLC", 
    type:"Project", 
    period:"Nov 2024 – Dec 2024", 
    category:"Automation & Optimization",
    tags:["System Optimization", "Server Migration", "Performance Tuning", "Database Management"],
    challenge:"The ERP system ran on AWS managed by a 3rd party, plagued by severe performance issues. With 500+ daily orders, each order took 5-8 minutes to complete. Inventory was duplicated multiple times, and orders were accepted even with zero stock.",
    solution:[
      "Completely restructured the order processing workflow to eliminate bottlenecks and redundant steps.",
      "Removed all duplicate inventory entries and implemented proper stock tracking mechanisms.",
      "Developed bulk completion functionality to process multiple orders simultaneously.",
      "Implemented real-time stock reservation system to prevent overselling and ensure inventory accuracy.",
      "Led the critical migration: took over ERP and database from 3rd party, transitioned to new server infrastructure.",
      "Optimized database queries and scripts for dramatically improved performance."
    ],
    achievements:[
      { metric:"Order Processing Time", result:"5-8 min → 10-15 sec", icon:"⚡" },
      { metric:"Performance Improvement", result:"30x Faster", icon:"🚀" },
      { metric:"Inventory Duplicates", result:"100% Eliminated", icon:"✓" },
      { metric:"Server Migration", result:"Zero Downtime", icon:"🔄" },
      { metric:"Daily Order Capacity", result:"500+ Orders Smooth", icon:"📦" }
    ],
    techStack:["AWS", "Database Optimization", "Server Management", "ERP Systems", "SQL", "Performance Tuning"]
  },
  { 
    id:4, 
    title:"Inventory Accuracy & Reconciliation System", 
    company:"BloomingBox LLC", 
    type:"Project", 
    period:"Nov 2024 – Jan 2025", 
    category:"Process Improvement",
    tags:["Inventory Management", "Process Control", "Automation", "Quality Assurance"],
    challenge:"Inventory chaos: inaccurate stock levels, incorrect deductions, 132+ weekly reconciliations needed, no purchase approvals, and untracked wastage/over-consumption. The system was riddled with human errors.",
    solution:[
      "Redesigned the entire inventory flow from receiving to consumption with proper checkpoints and validations.",
      "Implemented automated stock deduction mechanisms to eliminate manual errors.",
      "Built wastage and over-consumption tracking systems with variance reporting.",
      "Established mandatory purchase approval workflows with multi-level authorization.",
      "Created smart restrictions and validation rules to prevent common human errors at data entry points.",
      "Developed real-time reconciliation dashboards to identify and resolve discrepancies quickly."
    ],
    achievements:[
      { metric:"Stock Accuracy", result:"85-90% Achieved", icon:"✓" },
      { metric:"Weekly Reconciliations", result:"132 → 30-35", icon:"📉" },
      { metric:"Human Errors", result:"Significantly Reduced", icon:"🛡️" },
      { metric:"Purchase Controls", result:"100% Approved", icon:"✅" },
      { metric:"Wastage Tracking", result:"Fully Visible", icon:"♻️" }
    ],
    techStack:["ERP Workflow Design", "Inventory Management Systems", "Automation Rules", "Data Validation", "Reporting Tools"]
  },
  { 
    id:5, 
    title:"Interactive Portfolio Website", 
    company:"Personal Project", 
    type:"Project", 
    period:"Jan 2025", 
    category:"Web Development",
    tags:["React", "JavaScript", "UI/UX Design", "Responsive Design", "Google Analytics"],
    challenge:"Needed a professional, modern portfolio to showcase my operations and systems expertise in an engaging, interactive format that stands out from traditional CVs.",
    solution:[
      "Built a fully responsive, single-page React application with smooth animations and modern UI/UX.",
      "Implemented dark/light mode toggle, interactive skill bars, and dynamic content filtering.",
      "Integrated Google Analytics with custom event tracking for user behavior analysis and cold email campaign monitoring.",
      "Created an embedded feedback form with Google Apps Script backend for direct visitor engagement.",
      "Designed a unique experience/project filtering system with multiple view modes.",
      "Optimized for mobile-first experience with careful attention to performance and accessibility."
    ],
    achievements:[
      { metric:"Tech Stack", result:"React + Modern JS", icon:"⚛️" },
      { metric:"Performance", result:"Fast & Responsive", icon:"⚡" },
      { metric:"Design Quality", result:"Professional UI/UX", icon:"🎨" },
      { metric:"Tracking", result:"Full GA4 Integration", icon:"📊" },
      { metric:"Mobile Experience", result:"100% Optimized", icon:"📱" }
    ],
    techStack:["React", "JavaScript", "CSS3", "Google Analytics", "Google Apps Script", "Responsive Design"]
  }
];

const educationData = [
  { id:1, degree:"Master's in Management", grade:"2:1", institution:"University of Liverpool", period:"Sept 2022 – Sept 2023", flag:"🇬🇧",
    majors:["Project Management","Supply Chain Management"],
    highlights:["World Rank #44","Triple Crown Accredited","International curriculum with industry case studies"],
    achievements:["The Big Enterprise Challenge – A Sustainable Eurovision (2023)","UBC Global Master Challenge – Advanced to Round 1 (2023)"]
  },
  { id:2, degree:"Bachelor of Science – Information Technology", grade:"8.72 CGPA", institution:"Jai Hind College", period:"2019 – 2022", flag:"🇮🇳",
    majors:["Information Technology","Software Engineering"],
    highlights:["Ranked #24 in India","Strong foundation in systems design and programming"],
    achievements:["Organized CyberStrike – inter-collegiate tech festival","Led DotCom Club sponsorship & promotion","National-level debate competitor"]
  }
];

const skillsData = [
  { id:1, category:"Management & Leadership", icon:"📋", items:[
    { name:"Project Management 🔥", level:88, tags:["Planning","Execution","Risk Mgmt"] },
    { name:"Cross-functional Leadership", level:85, tags:["Stakeholder Comm.","Negotiation","Collaboration"] },
    { name:"Risk & Change Management", level:78, tags:["Lean Six Sigma","Problem Solving"] }
  ]},
  { id:2, category:"Operations & Supply Chain", icon:"🔄", items:[
    { name:"Business Process Analysis 🔥", level:92, tags:["Workflow Design","Optimization","Bottleneck Identification"] },
    { name:"Supply Chain & Inventory", level:85, tags:["Inbound","Outbound","Accuracy Control"] },
    { name:"Operations Management 🔥", level:90, tags:["SLA Mgmt","KPI Tracking","Process Control"] }
  ]},
  { id:3, category:"Communication & People Skills", icon:"💬", items:[
    { name:"Stakeholder Communication", level:88, tags:["Presentations","Reporting","Alignment"] },
    { name:"Negotiation & Influence", level:82, tags:["Conflict Resolution","Persuasion","Win-Win"] },
    { name:"Team Leadership & Training", level:85, tags:["Mentoring","Feedback","Motivation"] }
  ]},
  { id:4, category:"Systems & Technology", icon:"⚙️", items:[
    { name:"ERP & CRM Systems 🔥", level:82, tags:["Implementation","Configuration","Integration"] },
    { name:"Automation & AI Workflows 🔥", level:80, tags:["Process Automation","Barcoding","AI Tools"] },
    { name:"Mobile App Deployment", level:72, tags:["Coordination","QA","Launch"] }
  ]},
  { id:5, category:"Data & Analytics", icon:"📊", items:[
    { name:"Power BI & Dashboarding 🔥", level:86, tags:["DAX","Interactive Reports","Cost Analysis"] },
    { name:"Data Analysis & Reporting 🔥", level:88, tags:["Excel","Variance Tracking","KPIs"] },
    { name:"Google Analytics", level:75, tags:["GA4","Event Tracking","Dashboards"] },
    { name:"Advanced MS Office 🔥", level:90, tags:["Excel","PowerPoint","Word"] }
  ]},
  { id:6, category:"Programming & Certs", icon:"💻", items:[
    { name:"Python", level:70, tags:["Bootcamp","Data Scripts","Automation"] },
    { name:"Java", level:60, tags:["NIIT Certified","OOP","Basics"] },
    { name:"Operating Systems", level:65, tags:["NPTEL Certified","Linux Fundamentals"] }
  ]}
];

const certifications = [
  { title:"Lean Six Sigma White Belt", org:"Six Sigma Institute", icon:"🏅", description:"Process improvement & quality management", status:"✓ Certified" },
  { title:"Lean Six Sigma Yellow Belt", org:"In Progress", icon:"📚", description:"Advanced process optimization techniques", status:"🔄 In Progress", progress: 60 },
  { title:"Successful Negotiation", org:"University of Michigan (Coursera)", icon:"🤝", description:"Essentials of strategic negotiation", status:"✓ Certified" },
  { title:"Social Psychology", org:"Wesleyan University (Coursera)", icon:"🧠", description:"Understanding human behavior & influence", status:"✓ Certified" },
  { title:"Python Programming Bootcamp", org:"Udemy", icon:"🐍", description:"Data analysis & automation scripting", status:"✓ Certified" },
  { title:"Java Programming", org:"NIIT", icon:"☕", description:"Object-oriented programming fundamentals", status:"✓ Certified" },
  { title:"Operating Systems", org:"NPTEL", icon:"💾", description:"Linux, process management & file systems", status:"✓ Certified" },
  { title:"Google Analytics 4", org:"Google Skillshop", icon:"📊", description:"Web analytics & event tracking", status:"✓ Certified" }
];

const hobbiesData = [
  { id:1, title:"Psychology & Human Behavior", icon:"🧠", description:"Fascinated by how the human mind works and how society shapes behavior. Understanding psychology helps me lead teams better, predict reactions, and design systems that align with how people actually think and act.", featured: true, badges: ["Social Psychology", "Behavioral Science", "Decision Making"] },
  { id:2, title:"Startups & Market Exploration", icon:"🚀", description:"Love exploring markets, understanding what makes businesses tick, and analyzing competitive landscapes. Always studying how startups identify gaps, validate ideas, and execute in uncertain environments.", featured: true, badges: ["Market Analysis", "Business Models", "Growth Strategy"] },
  { id:3, title:"One Piece & Anime", icon:"⛵", description:"Die-hard One Piece fan — 1000+ episodes and counting! The themes of ambition, perseverance, and building the right crew resonate deeply. Beyond Luffy's journey, I love anime's unique take on strategy, philosophy, and character development.", featured: true, badges: ["🏴‍☠️ Straw Hat Crew", "1000+ Episodes", "Grand Line Explorer"] },
  { id:4, title:"PC & PS5 Gaming", icon:"🎮", description:"Love open-world exploration and competitive gaming on PC and PS5. Whether it's strategic planning in massive worlds or quick decision-making in competitive matches, gaming sharpens my problem-solving and keeps my reflexes sharp.", featured: true, badges: ["Open World", "Competitive", "Strategy"] },
  { id:5, title:"Systems & Process Design", icon:"🧩", description:"Genuinely enjoy developing strategies, solving complex problems, and finding hidden issues in workflows. There's something deeply satisfying about turning a messy 10-step process into an elegant 2-click solution. Chaos → Clarity is my jam.", featured: true, badges: ["Process Optimization", "Problem Solving", "Automation"] }
];

const languagesData = [
  { name:"English", level:"Fluent", flag:"🇬🇧", proficiency:95 },
  { name:"Hindi", level:"Native", flag:"🇮🇳", proficiency:100 },
  { name:"Marathi", level:"Fluent", flag:"🇮🇳", proficiency:95 },
  { name:"Marwari", level:"Native", flag:"🇮🇳", proficiency:100 }
];

// Years of Experience Calculator (Professional experience from Nov 2022)
function calculateExperience() {
  const startDate = new Date('2022-11-01'); // Amazon - first full-time professional role
  const now = new Date();
  const diff = now - startDate;
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  return { years, months };
}

// ========== ANIMATED COUNTER ==========
function useCounter(target, duration=1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const startTime = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);
  return count;
}

function StatCounter({ value, label, suffix="" }) {
  const c = useCounter(value);
  return (
    <div className="stat-block">
      <div className="stat-number">{c}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ========== SKILL BAR ==========
function SkillBar({ name, level, tags, visible }) {
  return (
    <div className="skill-row">
      <div className="skill-row-top">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: visible ? `${level}%` : "0%" }}></div>
      </div>
      <div className="skill-tags">
        {tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
      </div>
    </div>
  );
}

// ========== FLOATING PARTICLES ==========
function FloatingParticles() {
  return (
    <div className="particles-container">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="particle" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${15 + Math.random() * 15}s`
        }}></div>
      ))}
    </div>
  );
}

// ========== BACKGROUND DECO ==========
function BgDeco({ page }) {
  const shapes = {
    Home: <><circle cx="880" cy="80" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.07"/><circle cx="880" cy="80" r="110" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.04"/><circle cx="60" cy="520" r="100" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.05"/><line x1="0" y1="380" x2="200" y2="300" stroke="currentColor" strokeWidth="0.5" opacity="0.04"/><line x1="0" y1="420" x2="120" y2="420" stroke="currentColor" strokeWidth="0.3" opacity="0.03"/></>,
    About: <><rect x="750" y="40" width="180" height="180" rx="36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" transform="rotate(12 840 130)"/><circle cx="80" cy="450" r="130" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.05"/><circle cx="80" cy="450" r="70" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.03"/></>,
    Experience: <><circle cx="920" cy="320" r="200" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05"/><circle cx="920" cy="320" r="130" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.03"/><line x1="0" y1="180" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" opacity="0.05"/><line x1="0" y1="500" x2="70" y2="500" stroke="currentColor" strokeWidth="0.3" opacity="0.04"/></>,
    Education: <><polygon points="870,30 930,140 810,140" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06"/><circle cx="70" cy="280" r="90" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.05"/><circle cx="70" cy="280" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.03"/><circle cx="900" cy="500" r="70" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.04"/></>,
    Skills: <><circle cx="900" cy="480" r="160" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.05"/><circle cx="900" cy="480" r="90" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.03"/><rect x="20" y="60" width="80" height="80" rx="18" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.05" transform="rotate(18 60 100)"/></>,
    Hobbies: <><circle cx="140" cy="160" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06"/><circle cx="880" cy="440" r="140" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.05"/><line x1="850" y1="0" x2="1000" y2="80" stroke="currentColor" strokeWidth="0.4" opacity="0.04"/></>,
    Contact: <><circle cx="800" cy="200" r="130" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06"/><circle cx="800" cy="200" r="70" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.04"/><line x1="0" y1="450" x2="160" y2="450" stroke="currentColor" strokeWidth="0.4" opacity="0.05"/><circle cx="120" cy="80" r="50" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.04"/></>
  };
  return (
    <svg className="bg-deco" viewBox="0 0 1000 600" preserveAspectRatio="none">
      {shapes[page] || null}
    </svg>
  );
}


// ========== MAIN COMPONENT ==========
export default function DigitalCV() {
  const [active, setActive] = useState("Home");
  const [dark, setDark] = useState(true);
  const [hovered, setHovered] = useState(null);
  const [pageKey, setPageKey] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expFilter, setExpFilter] = useState("All");
  const [availability, setAvailability] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({ name: '', email: '', message: '', rating: '' });
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 900);

  const experience = calculateExperience();

  const copyEmail = () => {
    navigator.clipboard.writeText('kartiksinghushare@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
    
    // GA tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_copy', {
        'event_category': 'engagement',
        'event_label': 'Email Copied'
      });
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!feedbackForm.name || !feedbackForm.email || !feedbackForm.rating) {
      alert('Please fill in all required fields (Name, Email, and Rating)');
      return;
    }
    
    setFeedbackSubmitting(true);

    try {
      // Google Sheets Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwUE6sf7gnrn_LTsYi932Zq41aPvYUEoEuSnVBzWTyIqzG_6AaUi8aH12HBQ3cxJQ9cMw/exec';
      
      const formData = new FormData();
      formData.append('name', feedbackForm.name);
      formData.append('email', feedbackForm.email);
      formData.append('message', feedbackForm.message || 'No message provided');
      formData.append('rating', feedbackForm.rating);

      // Add timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
        mode: 'no-cors' // Important for Google Apps Script
      });

      clearTimeout(timeoutId);

      // With no-cors mode, we can't read the response, but if we get here, it likely succeeded
      setFeedbackSubmitted(true);
      setFeedbackForm({ name: '', email: '', message: '', rating: '' });
      
      // GA tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'feedback_submit', {
          'event_category': 'engagement',
          'event_label': 'Feedback Submitted',
          'value': feedbackForm.rating
        });
      }

      setTimeout(() => setFeedbackSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      
      if (error.name === 'AbortError') {
        alert('Submission is taking longer than expected. Your feedback may still be recorded. Please check back later or contact directly via email.');
      } else {
        alert('Failed to submit feedback. Please try again or contact directly via email: kartiksinghushare@gmail.com');
      }
    } finally {
      setFeedbackSubmitting(false);
    }
  };

  const switchPage = (name) => {
    setActive(name);
    setHovered(null);
    setPageKey(k => k + 1);
    setSkillsVisible(false);
    if (name === "Skills") setTimeout(() => setSkillsVisible(true), 300);
    
    // Update page title for GA tracking
    const pageTitles = {
      "Home": "Kartik Hushare - Home",
      "About": "Kartik Hushare - About Me",
      "Work": "Kartik Hushare - Experience & Projects",
      "Education": "Kartik Hushare - Education & Certifications",
      "Skills": "Kartik Hushare - Skills & Expertise",
      "Contact": "Kartik Hushare - Contact Information"
    };
    
    if (typeof document !== 'undefined') {
      document.title = pageTitles[name] || "Kartik Hushare - Portfolio";
    }
    
    // GA page view tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageTitles[name],
        page_location: window.location.href,
        page_path: `/${name.toLowerCase()}`
      });
    }
  };

  useEffect(() => { 
    if (active === "Skills") setTimeout(() => setSkillsVisible(true), 350);
  }, [active]);

  // Handle mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Track cold email visits
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const urlParams = new URLSearchParams(window.location.search);
      const source = urlParams.get('source');
      const campaign = urlParams.get('campaign');
      const emailId = urlParams.get('email_id');
      
      // Track if visitor came from cold email
      if (source === 'cold_email' || source === 'email' || campaign === 'cold_outreach') {
        window.gtag('event', 'cold_email_visit', {
          'event_category': 'acquisition',
          'event_label': 'Cold Email Visit',
          'campaign': campaign || 'cold_email',
          'email_id': emailId || 'unknown',
          'page_location': window.location.href
        });
        
        // Also send as a page view with campaign info
        window.gtag('event', 'page_view', {
          'page_title': 'Portfolio - Cold Email Landing',
          'page_location': window.location.href,
          'campaign_source': 'cold_email',
          'campaign_name': campaign || 'outreach'
        });
      }
    }
  }, []); // Run once on mount

  const filteredExperience = expFilter === "All" 
    ? experienceData 
    : experienceData.filter(exp => exp.type === expFilter || exp.location === expFilter);

  const sharePortfolio = (platform) => {
    const url = window.location.href;
    const text = "Check out Kartik Hushare's Professional Portfolio";
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };
    window.open(urls[platform], '_blank');
    
    // GA tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', `share_${platform}`, {
        'event_category': 'social_share',
        'event_label': `Shared on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`
      });
    }
  };

  const renderContent = () => {
    switch (active) {
      // ============ HOME ============
      case "Home": return (
        <div className="section-fade" key={pageKey}>
          <BgDeco page="Home" />
          <div className="home-intro">
            <h1 className="home-headline">Operations · Systems · Automation</h1>
            <p className="home-sub">Bridging execution and technology to scale operations. Specializing in process optimization, ERP systems, and data-driven decision making across supply chain and business operations.</p>
            
            <div className="availability-toggle">
              <div className={`availability-status ${availability ? 'available' : 'unavailable'}`}>
                <span className="availability-dot"></span>
                <span className="availability-text">
                  Open to Opportunities
                </span>
              </div>
              <div className={`availability-status ${availability ? 'available' : 'unavailable'}`}>
                <span className="availability-dot"></span>
                <span className="availability-text">
                  Available for Freelancing
                </span>
              </div>
            </div>
          </div>

          <div className="home-content-grid">
            <div className="home-stats">
              <StatCounter value={500} label="Daily Orders Managed" suffix="+" />
              <StatCounter value={6} label="Roles & Internships" />
              <StatCounter value={3} label="Countries" />
              <div className="stat-block">
                <div className="stat-number">{experience.years}+</div>
                <div className="stat-label">Years Professional Experience</div>
              </div>
            </div>
            <div className="home-highlights">
              <div className="home-highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <div className="highlight-label">Current Role</div>
                  <div className="highlight-value">Business Process & Systems Analyst</div>
                </div>
              </div>
              <div className="home-highlight-item">
                <span className="highlight-icon">📍</span>
                <div>
                  <div className="highlight-label">Location</div>
                  <div className="highlight-value">Dubai, UAE</div>
                </div>
              </div>
              <div className="home-highlight-item">
                <span className="highlight-icon">🎓</span>
                <div>
                  <div className="highlight-label">Education</div>
                  <div className="highlight-value">MSc Management (Liverpool)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-section">
            <div className="section-title" style={{ fontSize: 28, marginBottom: 32 }}>Career Journey</div>
            <div className="timeline">
              {[
                { year: "2019", label: "Foundation", desc: "Assistant Manager Intern at Karmavati Tools", icon: "🏪", color: "#e8a87c" },
                { year: "2022", label: "Global Leap", desc: "MSc at Liverpool · Amazon Warehouse Ops", icon: "🌍", color: "#85cdca" },
                { year: "2023", label: "Internships", desc: "Project Mgmt · Hospitality · Remote work", icon: "📈", color: "#7eb8da" },
                { year: "2024", label: "Leadership", desc: "Operational Supervisor at Floward.co", icon: "🎯", color: "#c3aed6" },
                { year: "Now", label: "Systems & Scale", desc: "Business Process & Systems Analyst at BloomingBox", icon: "⚡", color: "#f6c85e" }
              ].map((t, i) => (
                <div className="timeline-item" key={i} onMouseEnter={() => setHovered(t)} onMouseLeave={() => setHovered(null)}>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-connector">
                    <div className="timeline-dot" style={{ background: t.color, boxShadow: `0 0 14px ${t.color}60` }}>{t.icon}</div>
                    {i < 4 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-label">{t.label}</div>
                    <div className={`timeline-desc ${hovered?.year === t.year ? "visible" : ""}`}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-share-section">
            <div className="share-label">Share Portfolio</div>
            <div className="share-buttons">
              <button className="share-btn linkedin" onClick={() => sharePortfolio('linkedin')}>
                <span className="share-icon">in</span> LinkedIn
              </button>
              <button className="share-btn twitter" onClick={() => sharePortfolio('twitter')}>
                <span className="share-icon">𝕏</span> Twitter
              </button>
              <button className="share-btn whatsapp" onClick={() => sharePortfolio('whatsapp')}>
                <span className="share-icon">💬</span> WhatsApp
              </button>
            </div>
          </div>
        </div>
      );

      // ============ ABOUT ============
      case "About": return (
        <div className="section-fade" key={pageKey}>
          <BgDeco page="About" />
          <div className="about-layout">
            <div className="about-left">
              <div className="section-title">About Me</div>
              <div className="about-body">
                <p>I specialize in simplifying complex operations into efficient systems — bridging execution, data, and technology to create scalable, sustainable processes.</p>
                <p>With a background spanning warehouse operations, supply chain supervision, and business systems analysis, I bring a rare combination of hands-on experience and strategic thinking to every challenge.</p>
                <p>My approach is rooted in curiosity: understanding why things work (or don't), then rebuilding them in ways that scale. Whether it's automating a workflow, launching a warehouse, or aligning a cross-functional team — I focus on measurable outcomes.</p>
              </div>
              
              <div className="personal-details">
                <div className="detail-item">
                  <span className="detail-icon">🇮🇳</span>
                  <div className="detail-content">
                    <div className="detail-label">Nationality</div>
                    <div className="detail-value">Indian</div>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🎂</span>
                  <div className="detail-content">
                    <div className="detail-label">Age</div>
                    <div className="detail-value">25</div>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <div className="detail-content">
                    <div className="detail-label">Based in</div>
                    <div className="detail-value">UAE</div>
                  </div>
                </div>
              </div>

              <div className="about-tags">
                {["Systems Thinker", "Operations", "Automation", "Data-Driven", "Cross-functional", "Scalability", "Lean Six Sigma"].map(t => (
                  <span className="about-tag" key={t}>{t}</span>
                ))}
              </div>

              <div className="languages-section">
                <div className="languages-title">Languages</div>
                <div className="languages-grid">
                  {languagesData.map((lang, i) => (
                    <div className="language-card" key={i}>
                      <div className="language-header">
                        <span className="language-flag">{lang.flag}</span>
                        <div>
                          <div className="language-name">{lang.name}</div>
                          <div className="language-level">{lang.level}</div>
                        </div>
                      </div>
                      <div className="language-bar-bg">
                        <div className="language-bar-fill" style={{width: `${lang.proficiency}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="about-card-title">Extracurriculars</div>
              {[
                { icon: "💛", text: "Fundraised for visual impairment causes with Aasha Foundation" },
                { icon: "💻", text: "Led sponsorship & promotion for tech events (DotCom Club)" },
                { icon: "♻️", text: "Volunteered in e-waste collection & mental health awareness" },
                { icon: "🏆", text: "Organized CyberStrike – inter-collegiate tech festival" },
                { icon: "🎤", text: "Competed at national level in debate competitions" }
              ].map((e, i) => (
                <div className="extracurr-item" key={i}>
                  <span className="extracurr-icon">{e.icon}</span>
                  <span className="extracurr-text">{e.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies Section within About */}
          <div className="section-title" style={{ marginTop: 60, marginBottom: 12 }}>Interests & Hobbies</div>
          <p className="hobbies-intro">Beyond work, these are the things that fuel my curiosity, shape my thinking, and keep me energized.</p>
          <div className="hobbies-grid">
            {hobbiesData.map((h, i) => (
              <div className={`hobby-card ${h.featured ? 'featured' : ''}`} key={h.id} style={{ animationDelay: `${i * 100}ms` }}
                onMouseEnter={() => setHovered(h)} onMouseLeave={() => setHovered(null)}>
                <div className={`hobby-icon-wrap ${hovered?.id === h.id ? "active" : ""}`}>{h.icon}</div>
                <div className="hobby-title">{h.title}</div>
                {h.badges && (
                  <div className="hobby-badges">
                    {h.badges.map((badge, idx) => (
                      <span key={idx} className="hobby-badge">{badge}</span>
                    ))}
                  </div>
                )}
                <div className={`hobby-desc ${hovered?.id === h.id ? "visible" : ""}`}>{h.description}</div>
              </div>
            ))}
          </div>
        </div>
      );

      // ============ WORK ============
      case "Work": return (
        <div className="section-fade" key={pageKey}>
          <BgDeco page="Experience" />
          <div className="section-title">Professional Experience</div>
          
          <div className="filter-section">
            {["All", "Full-time", "Internship", "Remote", "On-site"].map(f => (
              <button 
                key={f} 
                className={`filter-btn ${expFilter === f ? 'active' : ''}`}
                onClick={() => {
                  setExpFilter(f);
                  setExpandedCard(null);
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'experience_filter', {
                      'event_category': 'filter',
                      'event_label': f
                    });
                  }
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {isMobile ? (
            // Mobile: Expandable cards
            <div className="mobile-cards-container">
              {filteredExperience.map((item, i) => (
                <div key={item.id} className={`mobile-exp-card ${expandedCard === `exp-${item.id}` ? 'expanded' : ''}`}
                  style={{ animationDelay: `${i * 55}ms` }}>
                  <div className="mobile-card-header" onClick={() => setExpandedCard(expandedCard === `exp-${item.id}` ? null : `exp-${item.id}`)}>
                    <div className="item-card-dot"></div>
                    <div style={{flex: 1}}>
                      <div className="item-card-title">{item.title}</div>
                      <div className="item-card-sub">{item.company} · {item.period}</div>
                    </div>
                    <span className="expand-icon">{expandedCard === `exp-${item.id}` ? '▲' : '▼'}</span>
                  </div>
                  {expandedCard === `exp-${item.id}` && (
                    <div className="mobile-card-content">
                      <div className="detail-badge">{item.type}</div>
                      <div className="detail-period">{item.location}</div>
                      <ul className="detail-list">
                        {item.description.slice(0, 3).map((d, idx) => <li key={idx}>{d}</li>)}
                      </ul>
                      {item.achievements && (
                        <>
                          <div className="achievements-label">Key Achievements</div>
                          <div className="achievements-grid">
                            {item.achievements.map((a, idx) => (
                              <div className="achievement-item" key={idx}>
                                <span className="achievement-icon">{a.icon}</span>
                                <div>
                                  <div className="achievement-metric">{a.metric}</div>
                                  <div className="achievement-result">{a.result}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Desktop: Side panel + cards
            <div className="split-grid">
              <div className="detail-panel" 
                onMouseEnter={() => hovered && setHovered(hovered)}>
                {hovered && hovered.company && !hovered.challenge ? (
                  <>
                    <div className="detail-badge">{hovered.type}</div>
                    <div className="detail-title">{hovered.title}</div>
                    <div className="detail-company">{hovered.company}</div>
                    <div className="detail-period">{hovered.period} · {hovered.location}</div>
                    <ul className="detail-list">
                      {hovered.description.slice(0, 3).map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                    {hovered.achievements && (
                      <>
                        <div className="achievements-label">Key Achievements</div>
                        <div className="achievements-grid">
                          {hovered.achievements.map((a, i) => (
                            <div className="achievement-item" key={i}>
                              <span className="achievement-icon">{a.icon}</span>
                              <div>
                                <div className="achievement-metric">{a.metric}</div>
                                <div className="achievement-result">{a.result}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="detail-placeholder">← Hover a role to preview details</div>
                )}
              </div>
              <div className="exp-grid">
                {filteredExperience.map((item, i) => (
                  <div key={item.id} className={`item-card ${hovered?.id === item.id ? "active-item" : ""}`}
                    onMouseEnter={() => setHovered(item)}
                    style={{ animationDelay: `${i * 55}ms` }}>
                    <div className="item-card-row">
                      <div className="item-card-dot"></div>
                      <div>
                        <div className="item-card-title">{item.title}</div>
                        <div className="item-card-sub">{item.company} · {item.period}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          <div className="section-title" style={{ marginTop: 60, marginBottom: 24 }}>Projects</div>
          
          {isMobile ? (
            // Mobile: Expandable project cards
            <div className="mobile-cards-container">
              {projectsData.map((item, i) => (
                <div key={item.id} className={`mobile-exp-card project-card-item ${expandedCard === `proj-${item.id}` ? 'expanded' : ''}`}
                  style={{ animationDelay: `${i * 55}ms` }}>
                  <div className="mobile-card-header" onClick={() => setExpandedCard(expandedCard === `proj-${item.id}` ? null : `proj-${item.id}`)}>
                    <div className="item-card-dot"></div>
                    <div style={{flex: 1}}>
                      <div className="item-card-title">{item.title}</div>
                      <div className="item-card-sub">{item.company} · {item.period}</div>
                      <div className="item-card-category">{item.category}</div>
                    </div>
                    <span className="expand-icon">{expandedCard === `proj-${item.id}` ? '▲' : '▼'}</span>
                  </div>
                  {expandedCard === `proj-${item.id}` && (
                    <div className="mobile-card-content">
                      <div className="project-section-label">Challenge</div>
                      <p className="project-challenge">{item.challenge}</p>
                      <div className="project-section-label">Solution</div>
                      <ul className="detail-list">
                        {item.solution.slice(0, 4).map((s, idx) => <li key={idx}>{s}</li>)}
                      </ul>
                      <div className="project-section-label">Tech Stack</div>
                      <div className="tech-stack-tags">
                        {item.techStack.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="achievements-label" style={{marginTop: 16}}>Impact & Results</div>
                      <div className="achievements-grid">
                        {item.achievements.map((a, idx) => (
                          <div className="achievement-item" key={idx}>
                            <span className="achievement-icon">{a.icon}</span>
                            <div>
                              <div className="achievement-metric">{a.metric}</div>
                              <div className="achievement-result">{a.result}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Desktop: Side panel + project cards
            <div className="split-grid">
              <div className="detail-panel" 
                onMouseEnter={() => hovered && setHovered(hovered)}>
                {hovered && hovered.challenge ? (
                  <>
                    <div className="detail-badge">{hovered.category}</div>
                    <div className="detail-title">{hovered.title}</div>
                    <div className="detail-company">{hovered.company}</div>
                    <div className="detail-period">{hovered.period}</div>
                    
                    <div className="project-section-label">Challenge</div>
                    <p className="project-challenge">{hovered.challenge}</p>
                    
                    <div className="project-section-label">Solution</div>
                    <ul className="detail-list">
                      {hovered.solution.slice(0, 4).map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                    
                    {hovered.techStack && (
                      <>
                        <div className="project-section-label">Tech Stack</div>
                        <div className="tech-stack-tags">
                          {hovered.techStack.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </>
                    )}
                    
                    {hovered.achievements && (
                      <>
                        <div className="achievements-label" style={{marginTop: 16}}>Impact & Results</div>
                        <div className="achievements-grid">
                          {hovered.achievements.map((a, i) => (
                            <div className="achievement-item" key={i}>
                              <span className="achievement-icon">{a.icon}</span>
                              <div>
                                <div className="achievement-metric">{a.metric}</div>
                                <div className="achievement-result">{a.result}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="detail-placeholder">← Hover a project to preview details</div>
                )}
              </div>
              <div className="exp-grid">
                {projectsData.map((item, i) => (
                  <div key={item.id} className={`item-card project-card-item ${hovered?.id === item.id ? "active-item" : ""}`}
                    onMouseEnter={() => setHovered(item)}
                    style={{ animationDelay: `${i * 55}ms` }}>
                    <div className="item-card-row">
                      <div className="item-card-dot"></div>
                      <div style={{flex: 1}}>
                        <div className="item-card-title">{item.title}</div>
                        <div className="item-card-sub">{item.company} · {item.period}</div>
                        <div className="item-card-category">{item.category}</div>
                        <div className="item-card-tags">
                          {item.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="mini-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );


      // ============ EDUCATION ============
      case "Education": return (
        <div className="section-fade" key={pageKey}>
          <BgDeco page="Education" />
          <div className="section-title">Education</div>
          <div className="edu-grid">
            {educationData.map((edu, i) => (
              <div className="edu-card" key={edu.id} style={{ animationDelay: `${i * 120}ms` }}>
                <div className="edu-header">
                  <span className="edu-flag">{edu.flag}</span>
                  <div className="edu-header-mid">
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-inst">{edu.institution} · {edu.period}</div>
                  </div>
                  <div className="edu-grade">{edu.grade}</div>
                </div>
                <div className="edu-majors">
                  {edu.majors.map(m => <span className="edu-major-tag" key={m}>{m}</span>)}
                </div>
                <div className="edu-section-label">Highlights</div>
                <ul className="edu-list">
                  {edu.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
                <div className="edu-section-label">Achievements</div>
                <ul className="edu-list">
                  {edu.achievements.map((a, j) => <li key={j} className="edu-achievement">🏆 {a}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="cert-section">
            <div className="section-title" style={{ fontSize: 24, marginBottom: 12 }}>Certifications & Training</div>
            <p className="cert-intro">Continuous learning through formal certifications, online courses, and hands-on training programs.</p>
            <div className="cert-grid">
              {certifications.map((c, i) => (
                <div className="cert-card" key={i} style={{ animationDelay: `${i * 70}ms` }}>
                  <span className="cert-icon">{c.icon}</span>
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-org">{c.org}</div>
                  <div className="cert-description">{c.description}</div>
                  <div className="cert-footer">
                    <span className="cert-status">{c.status}</span>
                  </div>
                  {c.progress && (
                    <div className="cert-progress-bar">
                      <div className="cert-progress-fill" style={{ width: `${c.progress}%` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );

      // ============ SKILLS ============
      case "Skills": return (
        <div className="section-fade" key={pageKey}>
          <BgDeco page="Skills" />
          <div className="section-title">Skills & Capabilities</div>

          {/* All Skills by Category */}
          <div className="skills-master">
            {skillsData.map((cat, ci) => (
              <div className="skill-category" key={cat.id} style={{ animationDelay: `${ci * 90}ms` }}>
                <div className="skill-cat-header">
                  <span className="skill-cat-icon">{cat.icon}</span>
                  <span className="skill-cat-title">{cat.category}</span>
                </div>
                <div className="skill-items">
                  {cat.items.map(item => (
                    <SkillBar key={item.name} name={item.name} level={item.level} tags={item.tags} visible={skillsVisible} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

      // ============ CONTACT ============
      case "Contact": return (
        <div className="section-fade" key={pageKey}>
          <BgDeco page="Contact" />
          <div className="section-title">Let's Connect</div>
          <p className="contact-intro">I'm open to opportunities in operations, systems, and business process roles. Feel free to reach out.</p>
          
          <div className="contact-feedback-grid">
            {/* Contact Information */}
            <div className="contact-column">
              <div className="column-title">Contact Information</div>
              <div className="contact-card">
                {[
                  { icon: "✉️", label: "Email", value: "kartiksinghushare@gmail.com", href: "mailto:kartiksinghushare@gmail.com", copyable: true, gaEvent: "email_click" },
                  { icon: "📱", label: "Phone (UAE)", value: "+971 50 966 0624", href: "tel:+971509660624", whatsapp: "https://wa.me/971509660624", gaEvent: "phone_uae_click" },
                  { icon: "☎️", label: "Phone (India)", value: "+91 8484842859", href: "tel:+918484842859", note: "Available during travel/vacation", gaEvent: "phone_india_click" },
                  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/kartiksingh-hushare-1a6698251", href: "https://www.linkedin.com/in/kartiksingh-hushare-1a6698251", gaEvent: "linkedin_click" },
                  { icon: "📸", label: "Instagram", value: "@kartikhushare", href: "https://www.instagram.com/kartikhushare", gaEvent: "instagram_click" },
                  { icon: "📍", label: "Location", value: "Dubai, UAE", href: null }
                ].map((c, i) => (
                  <div className="contact-row" key={i}>
                    <div className="contact-icon">{c.icon}</div>
                    <div className="contact-info">
                      <div className="contact-label">{c.label}</div>
                      <div className="contact-value">
                        {c.href ? (
                          <a 
                            href={c.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => {
                              if (c.gaEvent && typeof window !== 'undefined' && window.gtag) {
                                window.gtag('event', c.gaEvent, {
                                  'event_category': 'contact',
                                  'event_label': c.label
                                });
                              }
                            }}
                          >
                            {c.value}
                          </a>
                        ) : c.value}
                        {c.note && <div className="contact-note">{c.note}</div>}
                      </div>
                    </div>
                    <div className="contact-actions">
                      {c.copyable && (
                        <button className="copy-email-btn" onClick={copyEmail}>
                          {emailCopied ? '✓ Copied!' : '📋 Copy'}
                        </button>
                      )}
                      {c.whatsapp && (
                        <a 
                          href={c.whatsapp} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="whatsapp-btn"
                          onClick={() => {
                            if (typeof window !== 'undefined' && window.gtag) {
                              window.gtag('event', 'whatsapp_click', {
                                'event_category': 'contact',
                                'event_label': 'WhatsApp UAE'
                              });
                            }
                          }}
                        >
                          💬 WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="resume-download-section">
                <button className="download-resume-btn" onClick={() => {
                  window.open('https://drive.google.com/uc?export=download&id=1sa2BTDTzHaveFcFGYL3LwMJjcGQoVjA6', '_blank');
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'resume_download', {
                      'event_category': 'engagement',
                      'event_label': 'Resume Downloaded'
                    });
                  }
                }}>
                  <span className="download-icon">📄</span>
                  <div>
                    <div className="download-label">Download Resume</div>
                    <div className="download-sublabel">PDF Format · Updated Jan 2025</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Feedback Form */}
            <div className="feedback-column">
              <div className="column-title">Send Feedback</div>
              {feedbackSubmitted && (
                <div className="feedback-success-banner">
                  <div className="success-icon">✅</div>
                  <div>
                    <div className="success-title">Thank you for your feedback!</div>
                    <div className="success-message">Your message has been sent successfully. I'll get back to you soon!</div>
                  </div>
                </div>
              )}
              <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">How would you rate this portfolio? *</label>
                  <div className="rating-buttons">
                    {[
                      { num: 1, label: 'Poor' },
                      { num: 2, label: 'Fair' },
                      { num: 3, label: 'Good' },
                      { num: 4, label: 'Great' },
                      { num: 5, label: 'Excellent' }
                    ].map(({ num, label }) => (
                      <button
                        key={num}
                        type="button"
                        className={`rating-btn ${feedbackForm.rating === `${num} - ${label}` ? 'active' : ''}`}
                        onClick={() => setFeedbackForm({...feedbackForm, rating: `${num} - ${label}`})}
                        title={`${num} star${num > 1 ? 's' : ''} - ${label}`}
                      >
                        {'⭐'.repeat(num)}
                        <span className="rating-label">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Share your thoughts, suggestions, or feedback..."
                    rows="6"
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="feedback-submit-btn"
                  disabled={feedbackSubmitting || feedbackSubmitted}
                >
                  {feedbackSubmitting ? '⏳ Sending...' : feedbackSubmitted ? '✅ Sent!' : '📨 Send Feedback'}
                </button>
              </form>
            </div>
          </div>
        </div>
      );

      default: return null;
    }
  };

  return (
    <>
      <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
    *{margin:0;padding:0;box-sizing:border-box}
    html{overflow-x:hidden;width:100%;height:100%}
    body{overflow-x:hidden;width:100%;min-height:100%;margin:0;padding:0}
    @keyframes fadeUp{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:translateY(0)}}
    @keyframes slideRight{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}
    @keyframes pulse{0%,100%{transform:scale(1);opacity:.4}50%{transform:scale(1.05);opacity:.6}}
    @keyframes shimmer{0%{background-position:-1000px 0}100%{background-position:1000px 0}}
    @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}25%{transform:translateY(-10px) rotate(5deg)}50%{transform:translateY(-5px) rotate(-5deg)}75%{transform:translateY(-15px) rotate(3deg)}}
    @keyframes pulseDot{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:0.5}}
    .portfolio-root{font-family:'DM Sans',sans-serif;min-height:100vh;position:relative;transition:background .6s cubic-bezier(.4,0,.2,1),color .6s cubic-bezier(.4,0,.2,1);overflow-x:hidden;width:100%;max-width:100vw}
    .portfolio-root.light{background:#f3f1ed;color:#1a1a1a;--card:#fff;--shadow:0 4px 32px rgba(0,0,0,.08),0 1px 3px rgba(0,0,0,.04);--shadow-hover:0 12px 48px rgba(0,0,0,.15),0 4px 12px rgba(0,0,0,.08);--nav-bg:rgba(243,241,237,.85);--nav-border:rgba(0,0,0,.08);--accent:#1a1a1a;--muted:#6e6e6e;--muted2:#aaa;--pill-bg:#1a1a1a;--pill-c:#fff;--hover-card:#f7f6f2;--tag-bg:#eae8e3;--bar-bg:#e4e1d9;--bar-fill:linear-gradient(90deg,#1a1a1a,#3a3a3a);--accent-gradient:linear-gradient(135deg,#667eea 0%,#764ba2 100%);--glow:rgba(102,126,234,.3)}
    .portfolio-root.dark{background:#0e0e0d;color:#e6e6e3;--card:#1a1a19;--shadow:0 4px 32px rgba(0,0,0,.4),0 1px 3px rgba(0,0,0,.2);--shadow-hover:0 12px 48px rgba(0,0,0,.6),0 4px 12px rgba(0,0,0,.3);--nav-bg:rgba(14,14,13,.85);--nav-border:rgba(255,255,255,.08);--accent:#e6e6e3;--muted:#888;--muted2:#555;--pill-bg:#e6e6e3;--pill-c:#111;--hover-card:#232320;--tag-bg:#262623;--bar-bg:#2a2a28;--bar-fill:linear-gradient(90deg,#e6e6e3,#c0c0be);--accent-gradient:linear-gradient(135deg,#667eea 0%,#764ba2 100%);--glow:rgba(102,126,234,.2)}
    
    .particles-container{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;width:100%;height:100%}
    .particle{position:absolute;width:4px;height:4px;background:var(--accent);border-radius:50%;opacity:0.15;animation:float 20s infinite ease-in-out}
    
    .bg-deco{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;color:var(--accent);z-index:0;opacity:0;animation:fadeUp 1.2s .3s ease forwards}
    .bg-deco circle,.bg-deco rect,.bg-deco polygon,.bg-deco line{animation:pulse 4s ease-in-out infinite}
    .nav{position:sticky;top:0;z-index:50;background:var(--nav-bg);backdrop-filter:blur(24px) saturate(180%);border-bottom:1px solid var(--nav-border);box-shadow:0 1px 3px rgba(0,0,0,.03);animation:slideRight .6s ease}
    .nav-inner{max-width:1100px;margin:0 auto;padding:15px 24px;display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%}
    @media(max-width:600px){.nav-inner{padding:12px 16px;flex-wrap:wrap}}
    @media(max-width:400px){.nav-inner{padding:10px 12px;gap:8px}}
    .nav-brand{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;white-space:nowrap;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;position:relative}
    @media(max-width:600px){.nav-brand{font-size:18px}}
    .nav-brand::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:var(--accent-gradient);transition:width .4s ease}
    .nav-brand:hover::after{width:100%}
    .nav-tabs{display:flex;gap:4px;flex-wrap:wrap;justify-content:center}
    @media(max-width:600px){.nav-tabs{width:100%;order:3;gap:3px}}
    .nav-tab{background:transparent;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;color:var(--muted);padding:7px 16px;border-radius:50px;transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
    @media(max-width:600px){.nav-tab{font-size:11px;padding:5px 10px}}
    .nav-tab::before{content:'';position:absolute;inset:0;background:var(--tag-bg);transform:scale(0);transition:transform .3s cubic-bezier(.4,0,.2,1);border-radius:50px;z-index:-1}
    .nav-tab:hover::before{transform:scale(1)}
    .nav-tab:hover{color:var(--accent)}
    .nav-tab.active{background:var(--pill-bg);color:var(--pill-c);box-shadow:0 2px 8px rgba(0,0,0,.12);transform:scale(1.05)}
    .toggle-btn{background:transparent;border:1.5px solid var(--muted2);color:var(--muted);font-family:'DM Sans',sans-serif;font-size:12px;padding:6px 14px;border-radius:50px;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);white-space:nowrap;position:relative;overflow:hidden}
    @media(max-width:600px){.toggle-btn{font-size:11px;padding:5px 10px}}
    .toggle-btn::before{content:'';position:absolute;inset:0;background:var(--accent-gradient);opacity:0;transition:opacity .3s;border-radius:50px;z-index:-1}
    .toggle-btn:hover{border-color:var(--accent);color:var(--accent);transform:scale(1.05)}
    .toggle-btn:hover::before{opacity:.1}
    .main{max-width:1100px;width:100%;margin:0 auto;padding:56px 28px 100px;position:relative;z-index:1}
    @media(max-width:600px){.main{padding:32px 16px 60px}}
    @media(max-width:400px){.main{padding:24px 12px 50px}}
    .section-fade{animation:fadeUp .7s cubic-bezier(.4,0,.2,1) both;position:relative}
    .section-title{font-family:'Cormorant Garamond',serif;font-size:42px;font-weight:700;margin-bottom:36px;letter-spacing:-.8px;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:fadeUp .6s .1s ease both;position:relative;display:inline-block}
    @media(max-width:600px){.section-title{font-size:32px;margin-bottom:24px}}
    .section-title::after{content:'';position:absolute;bottom:-8px;left:0;width:60px;height:3px;background:var(--accent-gradient);border-radius:2px}
    
    .home-intro{text-align:center;max-width:800px;margin:0 auto 56px;animation:fadeUp .6s .2s ease both}
    @media(max-width:600px){.home-intro{margin:0 auto 36px}}
    .home-headline{font-family:'Cormorant Garamond',serif;font-size:52px;font-weight:700;line-height:1.2;letter-spacing:-1px;background:linear-gradient(135deg,var(--accent) 0%,var(--muted) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:24px}
    @media(max-width:600px){.home-headline{font-size:32px;line-height:1.3}}
    .home-sub{font-size:15.5px;color:var(--muted);line-height:1.8;max-width:680px;margin:0 auto 28px}
    @media(max-width:600px){.home-sub{font-size:14px;line-height:1.7}}
    
    .availability-toggle{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:24px;flex-wrap:wrap}
    @media(max-width:600px){.availability-toggle{gap:12px}}
    .availability-status{display:flex;align-items:center;gap:8px;padding:10px 20px;border-radius:50px;background:var(--card);border:1px solid var(--nav-border);transition:all .3s;box-shadow:var(--shadow)}
    @media(max-width:600px){.availability-status{padding:8px 16px}}
    .availability-status:hover{transform:translateY(-2px);box-shadow:var(--shadow-hover)}
    .availability-status.available{border-color:#22c55e50}
    .availability-status.unavailable{border-color:#ef444450}
    .availability-dot{width:8px;height:8px;border-radius:50%;animation:pulseDot 2s ease infinite}
    .availability-status.available .availability-dot{background:#22c55e}
    .availability-status.unavailable .availability-dot{background:#ef4444}
    .availability-text{font-size:13px;font-weight:600}
    .availability-btn{background:var(--tag-bg);border:none;padding:8px 16px;border-radius:50px;font-size:12px;cursor:pointer;transition:all .3s;color:var(--accent)}
    .availability-btn:hover{background:var(--accent);color:var(--pill-c);transform:scale(1.05)}
    
    .home-content-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:64px;animation:fadeUp .6s .4s ease both;width:100%}
    @media(max-width:800px){.home-content-grid{grid-template-columns:1fr;gap:24px}}
    @media(max-width:600px){.home-content-grid{gap:20px;margin-bottom:40px}}
    @media(max-width:400px){.home-content-grid{gap:16px;margin-bottom:32px}}
    .home-stats{display:grid;grid-template-columns:1fr 1fr;gap:16px;width:100%}
    @media(max-width:500px){.home-stats{grid-template-columns:1fr;gap:12px}}
    @media(max-width:400px){.home-stats{gap:10px}}
    .stat-block{background:var(--card);box-shadow:var(--shadow);border-radius:22px;padding:26px 18px;text-align:center;transition:all .4s cubic-bezier(.4,0,.2,1);border:1px solid transparent;position:relative;overflow:hidden;animation:fadeUp .6s ease both;width:100%}
    @media(max-width:600px){.stat-block{padding:20px 14px;border-radius:18px}}
    @media(max-width:400px){.stat-block{padding:16px 12px;border-radius:16px}}
    .stat-block:nth-child(1){animation-delay:.5s}
    .stat-block:nth-child(2){animation-delay:.6s}
    .stat-block:nth-child(3){animation-delay:.7s}
    .stat-block:nth-child(4){animation-delay:.8s}
    .stat-block::before{content:'';position:absolute;inset:0;background:var(--accent-gradient);opacity:0;transition:opacity .4s;z-index:-1}
    .stat-block:hover{transform:translateY(-8px) scale(1.03);box-shadow:var(--shadow-hover);border-color:var(--glow)}
    @media(max-width:600px){.stat-block:hover{transform:translateY(-4px) scale(1.02)}}
    .stat-block:hover::before{opacity:.08}
    .stat-number{font-family:'Cormorant Garamond',serif;font-size:40px;font-weight:700;letter-spacing:-1px;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    @media(max-width:600px){.stat-number{font-size:32px}}
    .stat-label{font-size:10.5px;color:var(--muted2);margin-top:6px;text-transform:uppercase;letter-spacing:1px;line-height:1.4}
    @media(max-width:600px){.stat-label{font-size:9.5px;margin-top:4px}}
    
    .home-highlights{display:flex;flex-direction:column;gap:12px}
    @media(max-width:600px){.home-highlights{gap:10px}}
    .home-highlight-item{display:flex;align-items:center;gap:12px;background:var(--card);padding:14px 18px;border-radius:14px;border:1px solid var(--nav-border);transition:all .3s cubic-bezier(.4,0,.2,1)}
    @media(max-width:600px){.home-highlight-item{padding:12px 14px;gap:10px}}
    .home-highlight-item:hover{transform:translateX(6px);border-color:var(--glow);background:var(--hover-card)}
    @media(max-width:600px){.home-highlight-item:hover{transform:translateX(3px)}}
    .highlight-icon{font-size:22px;flex-shrink:0}
    @media(max-width:600px){.highlight-icon{font-size:20px}}
    .highlight-label{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted2);margin-bottom:2px}
    .highlight-value{font-size:13px;font-weight:600}
    @media(max-width:600px){.highlight-value{font-size:12px}}
    
    .timeline-section{margin-top:16px;text-align:center;width:100%;overflow:hidden}
    @media(max-width:600px){.timeline-section{margin-top:8px}}
    .timeline{display:flex;flex-direction:row;gap:0;overflow-x:auto;padding:20px 0 30px;justify-content:center;max-width:100%;width:100%}
    @media(max-width:700px){.timeline{justify-content:flex-start;padding:15px 0 25px}}
    .timeline::-webkit-scrollbar{height:6px}
    .timeline::-webkit-scrollbar-track{background:var(--bar-bg);border-radius:3px}
    .timeline::-webkit-scrollbar-thumb{background:var(--bar-fill);border-radius:3px}
    .timeline-item{display:flex;flex-direction:column;align-items:center;min-width:180px;max-width:200px;cursor:default;opacity:0;animation:slideRight .6s ease forwards;padding:0 12px;flex:0 0 auto}
    .timeline-item:nth-child(1){animation-delay:.9s}
    .timeline-item:nth-child(2){animation-delay:1s}
    .timeline-item:nth-child(3){animation-delay:1.1s}
    .timeline-item:nth-child(4){animation-delay:1.2s}
    .timeline-item:nth-child(5){animation-delay:1.3s}
    .timeline-year{font-family:'Cormorant Garamond',serif;font-size:16px;font-weight:600;color:var(--muted);padding-bottom:14px;text-align:center;transition:color .3s;min-height:40px;display:flex;align-items:center;justify-content:center}
    .timeline-item:hover .timeline-year{color:var(--accent)}
    .timeline-connector{display:flex;flex-direction:row;align-items:center;width:100%}
    .timeline-dot{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;transition:all .4s cubic-bezier(.4,0,.2,1);position:relative;z-index:1;cursor:pointer;margin:0 auto}
    .timeline-dot::after{content:'';position:absolute;inset:-4px;border-radius:50%;background:inherit;opacity:0;transition:opacity .4s;z-index:-1}
    .timeline-item:hover .timeline-dot{transform:scale(1.25) rotate(10deg);box-shadow:0 8px 24px rgba(0,0,0,.2)}
    .timeline-item:hover .timeline-dot::after{opacity:.3}
    .timeline-line{width:100%;height:2px;background:var(--bar-bg);transition:background .3s;flex:1}
    .timeline-item:last-child .timeline-connector .timeline-line{display:none}
    .timeline-item:hover .timeline-line{background:var(--bar-fill)}
    .timeline-content{padding-top:18px;text-align:center;width:100%}
    .timeline-label{font-size:15px;font-weight:600;transition:color .3s;margin-bottom:8px;min-height:20px}
    .timeline-item:hover .timeline-label{background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .timeline-desc{font-size:12.5px;color:var(--muted);max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.4,0,.2,1),opacity .4s;opacity:0;line-height:1.5}
    .timeline-desc.visible{max-height:90px;opacity:1;margin-top:0}
    
    .social-share-section{margin-top:48px;text-align:center;animation:fadeUp .6s .6s ease both}
    .share-label{font-size:14px;color:var(--muted2);margin-bottom:16px;text-transform:uppercase;letter-spacing:1.5px}
    .share-buttons{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
    .share-btn{background:var(--card);border:1px solid var(--nav-border);padding:10px 20px;border-radius:50px;font-size:13px;cursor:pointer;transition:all .3s;display:flex;align-items:center;gap:8px;font-family:'DM Sans',sans-serif;color:var(--accent)}
    .share-btn:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
    .share-btn.linkedin:hover{border-color:#0077b5;color:#0077b5}
    .share-btn.twitter:hover{border-color:#1da1f2;color:#1da1f2}
    .share-btn.whatsapp:hover{border-color:#25d366;color:#25d366}
    .share-icon{font-weight:700;font-size:14px}
    
    .filter-section{display:flex;gap:10px;margin-bottom:24px;flex-wrap:wrap;animation:fadeUp .6s .2s ease both}
    .filter-btn{background:var(--tag-bg);border:none;padding:8px 16px;border-radius:50px;font-size:13px;cursor:pointer;transition:all .3s;color:var(--accent);font-family:'DM Sans',sans-serif}
    .filter-btn:hover{background:var(--hover-card);transform:scale(1.05)}
    .filter-btn.active{background:var(--accent-gradient);color:#fff;box-shadow:0 2px 8px var(--glow)}
    
    .about-layout{display:grid;grid-template-columns:1.2fr .8fr;gap:48px;width:100%}
    @media(max-width:700px){.about-layout{grid-template-columns:1fr;gap:32px}}
    @media(max-width:600px){.about-layout{gap:24px}}
    @media(max-width:400px){.about-layout{gap:20px}}
    .about-body{font-size:16px;line-height:1.9;color:var(--muted);animation:fadeUp .6s .2s ease both}
    @media(max-width:600px){.about-body{font-size:14px;line-height:1.8}}
    .about-body p+p{margin-top:18px}
    .personal-details{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px;animation:fadeUp .6s .25s ease both}
    @media(max-width:600px){.personal-details{grid-template-columns:1fr;gap:12px}}
    .detail-item{background:var(--card);border:1px solid var(--nav-border);border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px;transition:all .3s cubic-bezier(.4,0,.2,1);cursor:default}
    .detail-item:hover{transform:translateY(-3px);border-color:var(--glow);box-shadow:var(--shadow)}
    .detail-icon{font-size:28px;flex-shrink:0;transition:transform .3s}
    .detail-item:hover .detail-icon{transform:scale(1.15) rotate(5deg)}
    .detail-content{flex:1}
    .detail-label{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--muted2);margin-bottom:4px}
    .detail-value{font-size:15px;font-weight:600;color:var(--accent)}
    .about-tags{display:flex;flex-wrap:wrap;gap:10px;margin-top:32px;animation:fadeUp .6s .3s ease both}
    .about-tag{background:var(--tag-bg);font-size:13px;padding:8px 18px;border-radius:50px;color:var(--accent);font-weight:500;transition:all .3s cubic-bezier(.4,0,.2,1);border:1px solid transparent;position:relative;overflow:hidden}
    .about-tag::before{content:'';position:absolute;inset:0;background:var(--accent-gradient);opacity:0;transition:opacity .3s;z-index:-1}
    .about-tag:hover{transform:translateY(-3px) scale(1.08);box-shadow:var(--shadow);border-color:var(--glow);color:var(--pill-c)}
    .about-tag:hover::before{opacity:1}
    
    .languages-section{margin-top:36px;animation:fadeUp .6s .4s ease both}
    .languages-title{font-size:18px;font-weight:600;margin-bottom:16px;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .languages-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    @media(max-width:600px){.languages-grid{grid-template-columns:1fr}}
    .language-card{background:var(--card);border:1px solid var(--nav-border);border-radius:12px;padding:14px;transition:all .3s}
    .language-card:hover{border-color:var(--glow);transform:translateY(-2px)}
    .language-header{display:flex;align-items:center;gap:10px;margin-bottom:8px}
    .language-flag{font-size:20px}
    .language-name{font-size:13px;font-weight:600}
    .language-level{font-size:11px;color:var(--muted2)}
    .language-bar-bg{height:4px;background:var(--bar-bg);border-radius:2px;overflow:hidden}
    .language-bar-fill{height:100%;background:var(--bar-fill);border-radius:2px;transition:width 1s ease}
    
    .about-right{background:var(--card);box-shadow:var(--shadow);border-radius:24px;padding:30px;height:fit-content;transition:all .4s cubic-bezier(.4,0,.2,1);border:1px solid transparent;animation:fadeUp .6s .4s ease both}
    .about-right:hover{transform:translateY(-6px);box-shadow:var(--shadow-hover);border-color:var(--glow)}
    .about-card-title{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:600;margin-bottom:20px;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .extracurr-item{display:flex;align-items:flex-start;gap:14px;padding:13px 8px;border-bottom:1px solid var(--nav-border);transition:all .3s cubic-bezier(.4,0,.2,1);border-radius:8px}
    .extracurr-item:last-child{border-bottom:none}
    .extracurr-item:hover{padding-left:14px;background:var(--hover-card);transform:translateX(4px)}
    .extracurr-icon{font-size:20px;flex-shrink:0;margin-top:2px;transition:transform .3s}
    .extracurr-item:hover .extracurr-icon{transform:scale(1.2) rotate(5deg)}
    .extracurr-text{font-size:13px;color:var(--muted);line-height:1.6}
    
    .split-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
    @media(max-width:700px){.split-grid{grid-template-columns:1fr;gap:20px}}
    .detail-panel{background:var(--card);box-shadow:var(--shadow);border-radius:24px;padding:32px;min-height:420px;max-height:600px;overflow-y:auto;transition:all .4s cubic-bezier(.4,0,.2,1);border:1px solid transparent;animation:fadeUp .6s .2s ease both}
    @media(max-width:600px){.detail-panel{padding:24px;border-radius:20px;min-height:320px;max-height:500px}}
    .detail-panel::-webkit-scrollbar{width:6px}
    .detail-panel::-webkit-scrollbar-track{background:var(--bar-bg);border-radius:3px}
    .detail-panel::-webkit-scrollbar-thumb{background:var(--bar-fill);border-radius:3px}
    .detail-panel:hover{box-shadow:var(--shadow-hover);border-color:var(--glow)}
    .detail-placeholder{font-size:13.5px;color:var(--muted2);font-style:italic;padding-top:120px;text-align:center;animation:pulse 2s ease-in-out infinite}
    .detail-badge{display:inline-block;font-size:10px;text-transform:uppercase;letter-spacing:1.2px;background:var(--accent-gradient);color:#fff;padding:5px 12px;border-radius:50px;margin-bottom:14px;box-shadow:0 2px 8px var(--glow)}
    .detail-title{font-size:19px;font-weight:600;margin-bottom:4px;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .detail-company{font-size:14.5px;font-weight:500;color:var(--muted)}
    .detail-period{font-size:12px;color:var(--muted2);margin-bottom:20px}
    .detail-list{list-style:none}
    .detail-list li{font-size:13.5px;color:var(--muted);padding:7px 0;border-bottom:1px solid var(--nav-border);line-height:1.6;transition:all .3s}
    .detail-list li:hover{padding-left:8px;color:var(--accent)}
    .detail-list li:last-child{border-bottom:none}
    .detail-list li::before{content:"→ ";opacity:.35;transition:opacity .3s}
    .detail-list li:hover::before{opacity:1}
    .achievements-label{font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:var(--muted2);margin:20px 0 12px;padding-top:16px;border-top:1px solid var(--nav-border)}
    .achievements-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    @media(max-width:800px){.achievements-grid{grid-template-columns:1fr}}
    .achievement-item{display:flex;align-items:center;gap:10px;background:var(--tag-bg);padding:10px 12px;border-radius:10px;transition:all .3s}
    .achievement-item:hover{background:var(--hover-card);transform:translateX(4px)}
    .achievement-icon{font-size:18px;flex-shrink:0}
    .achievement-metric{font-size:10.5px;color:var(--muted2);font-weight:500;line-height:1.3}
    .achievement-result{font-size:12px;font-weight:600;color:var(--accent);margin-top:2px}
    .exp-grid{display:flex;flex-direction:column;gap:10px}
    .item-card{background:var(--card);box-shadow:var(--shadow);border-radius:18px;padding:17px 20px;cursor:pointer;border:2px solid transparent;transition:all .3s cubic-bezier(.4,0,.2,1);animation:fadeUp .5s both;position:relative;overflow:hidden}
    .item-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:0;background:var(--accent-gradient);transition:width .3s;z-index:0}
    .item-card:hover::before,.item-card.active-item::before{width:4px}
    .item-card:hover,.item-card.active-item{border-color:var(--glow);background:var(--hover-card);transform:translateX(8px) scale(1.02);box-shadow:var(--shadow-hover)}
    .item-card-row{display:flex;align-items:center;gap:14px;position:relative;z-index:1}
    .item-card-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);opacity:.35;flex-shrink:0;transition:all .3s}
    .item-card.active-item .item-card-dot{opacity:1;transform:scale(1.4);box-shadow:0 0 8px var(--glow)}
    .item-card-title{font-size:13.5px;font-weight:600;transition:color .3s}
    .item-card:hover .item-card-title,.item-card.active-item .item-card-title{background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .item-card-sub{font-size:11.5px;color:var(--muted2);margin-top:3px}
    .item-card-category{font-size:10px;color:var(--accent);font-weight:600;margin-top:6px;text-transform:uppercase;letter-spacing:0.5px}
    .item-card-tags{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px}
    .mini-tag{font-size:9px;background:var(--tag-bg);color:var(--muted);padding:3px 8px;border-radius:8px;font-weight:500;border:1px solid var(--nav-border)}
    .project-card-item{border-left:3px solid var(--glow)}
    .project-card-item .item-card-dot{background:var(--glow)}
    .project-section-label{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--accent);margin-top:16px;margin-bottom:8px;font-weight:700}
    .project-challenge{font-size:12.5px;color:var(--muted);line-height:1.6;margin-bottom:16px;padding:12px;background:var(--hover-card);border-radius:12px;border-left:3px solid var(--glow)}
    .tech-stack-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
    .tech-tag{font-size:10px;background:var(--accent-gradient);color:#fff;padding:5px 10px;border-radius:12px;font-weight:600;box-shadow:0 2px 6px rgba(102,126,234,0.3)}
    
    /* Mobile Expandable Cards */
    .mobile-cards-container{display:flex;flex-direction:column;gap:12px}
    .mobile-exp-card{background:var(--card);box-shadow:var(--shadow);border-radius:18px;border:2px solid transparent;transition:all .3s cubic-bezier(.4,0,.2,1);animation:fadeUp .5s both;overflow:hidden}
    .mobile-exp-card.project-card-item{border-left:3px solid var(--glow)}
    .mobile-exp-card:hover,.mobile-exp-card.expanded{border-color:var(--glow);box-shadow:var(--shadow-hover)}
    .mobile-card-header{display:flex;align-items:center;gap:14px;padding:17px 20px;cursor:pointer;position:relative;user-select:none;-webkit-tap-highlight-color:transparent}
    .mobile-card-header::before{content:'';position:absolute;left:0;top:0;bottom:0;width:0;background:var(--accent-gradient);transition:width .3s;z-index:0}
    .mobile-card-header:active::before{width:4px}
    .mobile-card-header>*{position:relative;z-index:1}
    .expand-icon{font-size:18px;color:var(--accent);flex-shrink:0;transition:transform .3s}
    .mobile-exp-card.expanded .expand-icon{transform:rotate(180deg)}
    .mobile-card-content{padding:0 20px 20px 54px;max-height:0;overflow:hidden;opacity:0;transition:max-height .4s cubic-bezier(.4,0,.2,1),opacity .3s ease,padding .3s ease}
    .mobile-exp-card.expanded .mobile-card-content{max-height:2000px;opacity:1;padding:0 20px 20px 54px}
    .mobile-card-content .detail-badge{margin-bottom:10px}
    .mobile-card-content .detail-list{margin:12px 0}
    @media(min-width:901px){.mobile-cards-container{display:none}}
    @media(max-width:900px){.split-grid{display:none !important}}
    
    .edu-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:48px}
    @media(max-width:700px){.edu-grid{grid-template-columns:1fr;gap:16px;margin-bottom:32px}}
    .edu-card{background:var(--card);box-shadow:var(--shadow);border-radius:24px;padding:30px;animation:fadeUp .5s both;transition:all .4s cubic-bezier(.4,0,.2,1);border:1px solid transparent;position:relative;overflow:hidden}
    @media(max-width:600px){.edu-card{padding:20px;border-radius:20px}}
    .edu-card::before{content:'';position:absolute;top:-50%;right:-50%;width:200%;height:200%;background:var(--accent-gradient);opacity:0;transform:rotate(45deg);transition:opacity .5s;z-index:0}
    .edu-card:hover{transform:translateY(-6px) scale(1.02);box-shadow:var(--shadow-hover);border-color:var(--glow)}
    .edu-card:hover::before{opacity:.05}
    .edu-card>*{position:relative;z-index:1}
    .edu-header{display:flex;align-items:flex-start;gap:16px;margin-bottom:16px}
    .edu-flag{font-size:32px;flex-shrink:0;transition:transform .4s}
    .edu-card:hover .edu-flag{transform:scale(1.15) rotate(5deg)}
    .edu-header-mid{flex:1;min-width:0}
    .edu-degree{font-size:16px;font-weight:600;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .edu-inst{font-size:12.5px;color:var(--muted2);margin-top:3px}
    .edu-grade{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:700;color:var(--accent);flex-shrink:0;transition:transform .3s}
    .edu-card:hover .edu-grade{transform:scale(1.1)}
    .edu-majors{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:16px}
    .edu-major-tag{font-size:11px;background:var(--tag-bg);padding:5px 12px;border-radius:50px;color:var(--accent);font-weight:500;transition:all .3s}
    .edu-major-tag:hover{transform:scale(1.08);background:var(--accent-gradient);color:#fff;box-shadow:0 2px 8px var(--glow)}
    .edu-section-label{font-size:10px;text-transform:uppercase;letter-spacing:1.3px;color:var(--muted2);margin-bottom:6px;margin-top:14px}
    .edu-list{list-style:none}
    .edu-list li{font-size:13px;color:var(--muted);padding:3px 0;transition:all .3s}
    .edu-list li:hover{padding-left:6px;color:var(--accent)}
    .edu-list li::before{content:"· ";opacity:.4}
    .edu-achievement::before{content:"" !important}
    .cert-section{margin-top:8px}
    .cert-intro{font-size:13.5px;color:var(--muted);margin-bottom:20px;line-height:1.6;text-align:center}
    .cert-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    @media(max-width:900px){.cert-grid{grid-template-columns:repeat(3,1fr);gap:14px}}
    @media(max-width:700px){.cert-grid{grid-template-columns:repeat(2,1fr);gap:12px}}
    @media(max-width:500px){.cert-grid{grid-template-columns:1fr;gap:12px}}
    .cert-card{background:var(--card);box-shadow:var(--shadow);border-radius:20px;padding:24px 18px;text-align:center;transition:all .4s cubic-bezier(.4,0,.2,1);animation:fadeUp .5s both;border:1px solid transparent;cursor:pointer;display:flex;flex-direction:column;min-height:240px}
    @media(max-width:600px){.cert-card{padding:20px 16px;border-radius:18px;min-height:220px}}
    .cert-card:hover{transform:translateY(-6px) scale(1.03);box-shadow:var(--shadow-hover);border-color:var(--glow)}
    .cert-icon{font-size:32px;display:block;margin-bottom:12px;transition:transform .4s}
    .cert-card:hover .cert-icon{transform:scale(1.2) rotate(10deg)}
    .cert-title{font-size:13px;font-weight:700;line-height:1.4;margin-bottom:6px;color:var(--accent)}
    .cert-org{font-size:11px;color:var(--muted2);margin-bottom:10px;line-height:1.3}
    .cert-description{font-size:11px;color:var(--muted);line-height:1.5;margin-bottom:12px;flex:1}
    .cert-footer{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto;padding-top:10px;border-top:1px solid var(--nav-border)}
    .cert-status{font-size:10px;font-weight:600;padding:4px 10px;border-radius:12px;background:var(--tag-bg);color:var(--accent)}
    .cert-progress-bar{width:100%;height:4px;background:var(--tag-bg);border-radius:4px;overflow:hidden;margin-top:10px}
    .cert-progress-fill{height:100%;background:var(--accent-gradient);transition:width .6s cubic-bezier(.4,0,.2,1);border-radius:4px}
    @media(max-width:600px){.cert-title{font-size:12px}.cert-org,.cert-description{font-size:10px}}
    
    .skills-master{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;width:100%}
    @media(max-width:900px){.skills-master{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:600px){.skills-master{grid-template-columns:1fr}}
    .skill-category{background:var(--card);box-shadow:var(--shadow);border-radius:24px;padding:28px;animation:fadeUp .5s both;transition:all .4s cubic-bezier(.4,0,.2,1);border:1px solid transparent;width:100%}
    @media(max-width:600px){.skill-category{padding:20px;border-radius:20px}}
    @media(max-width:400px){.skill-category{padding:16px;border-radius:18px}}
    .skill-category:hover{transform:translateY(-4px);box-shadow:var(--shadow-hover);border-color:var(--glow)}
    .skill-cat-header{display:flex;align-items:center;gap:12px;margin-bottom:22px}
    .skill-cat-icon{font-size:24px;transition:transform .4s}
    .skill-category:hover .skill-cat-icon{transform:scale(1.15) rotate(5deg)}
    .skill-cat-title{font-size:15px;font-weight:600;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .skill-items{display:flex;flex-direction:column;gap:19px}
    .skill-row{transition:transform .3s}
    .skill-row:hover{transform:translateX(4px)}
    .skill-row-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:7px}
    .skill-name{font-size:13.5px;font-weight:500}
    .skill-pct{font-size:11.5px;color:var(--muted2);font-weight:600}
    .skill-bar-bg{height:6px;background:var(--bar-bg);border-radius:4px;overflow:hidden;position:relative}
    .skill-bar-fill{height:100%;background:var(--bar-fill);border-radius:4px;transition:width 1.5s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
    .skill-bar-fill::after{content:'';position:absolute;top:0;left:0;bottom:0;right:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer 2s infinite}
    .skill-tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
    .skill-tag{font-size:10px;background:var(--tag-bg);color:var(--muted);padding:4px 9px;border-radius:50px;transition:all .3s}
    .skill-tag:hover{background:var(--accent);color:var(--pill-c);transform:scale(1.08)}
    
    .hobbies-intro{font-size:14.5px;color:var(--muted);margin-bottom:28px;line-height:1.8;text-align:center;animation:fadeUp .6s .2s ease both}
    .hobbies-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:18px;width:100%}
    @media(max-width:700px){.hobbies-grid{grid-template-columns:repeat(2,1fr);gap:16px}}
    @media(max-width:500px){.hobbies-grid{grid-template-columns:1fr;gap:14px}}
    .hobby-card{grid-column:span 2;background:var(--card);box-shadow:var(--shadow);border-radius:24px;padding:30px;cursor:pointer;transition:all .4s cubic-bezier(.4,0,.2,1);animation:fadeUp .5s both;border:1px solid transparent;position:relative;overflow:hidden;width:100%}
    .hobby-card.featured{border:2px solid var(--glow);background:linear-gradient(135deg,var(--card) 0%,rgba(102,126,234,0.05) 100%)}
    @media(max-width:700px){.hobby-card{grid-column:span 1;padding:24px;border-radius:20px}}
    @media(max-width:600px){.hobby-card{padding:20px}}
    @media(max-width:500px){.hobby-card{grid-column:auto;padding:24px}}
    @media(max-width:400px){.hobby-card{padding:20px;border-radius:18px}}
    .hobby-card::before{content:'';position:absolute;inset:0;background:var(--accent-gradient);opacity:0;transition:opacity .4s;z-index:0}
    .hobby-card:hover::before{opacity:.08}
    .hobby-card.featured::before{opacity:.05}
    .hobby-card.featured:hover::before{opacity:.12}
    .hobby-card>*{position:relative;z-index:1}
    .hobby-card:hover{transform:translateY(-8px) scale(1.03);box-shadow:var(--shadow-hover);border-color:var(--glow)}
    .hobby-icon-wrap{width:56px;height:56px;border-radius:16px;background:var(--tag-bg);display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:16px;transition:all .4s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
    .hobby-icon-wrap::before{content:'';position:absolute;inset:0;background:var(--accent-gradient);opacity:0;transition:opacity .4s}
    .hobby-icon-wrap.active{transform:scale(1.2) rotate(10deg);box-shadow:0 8px 24px var(--glow)}
    .hobby-icon-wrap.active::before{opacity:.2}
    .hobby-title{font-size:16px;font-weight:600;margin-bottom:8px;transition:all .3s;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto}
    @media(max-width:600px){.hobby-title{font-size:15px}}
    .hobby-card:hover .hobby-title{background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hobby-badges{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}
    .hobby-badge{font-size:10px;background:var(--accent-gradient);color:#fff;padding:4px 10px;border-radius:12px;font-weight:600;white-space:nowrap;box-shadow:0 2px 6px rgba(102,126,234,0.3);animation:fadeUp .4s both}
    .hobby-badge:nth-child(1){animation-delay:.1s}
    .hobby-badge:nth-child(2){animation-delay:.2s}
    .hobby-badge:nth-child(3){animation-delay:.3s}
    @media(max-width:600px){.hobby-badge{font-size:9px;padding:3px 8px}}
    .hobby-desc{font-size:13.5px;color:var(--muted);max-height:0;overflow:hidden;transition:max-height .5s cubic-bezier(.4,0,.2,1),opacity .4s;opacity:0;line-height:1.65}
    .hobby-desc.visible{max-height:200px;opacity:1}
    @media(max-width:600px){.hobby-desc.visible{max-height:250px}}
    
    .contact-intro{font-size:14.5px;color:var(--muted);margin-bottom:30px;line-height:1.8;animation:fadeUp .6s .2s ease both;text-align:center}
    .contact-feedback-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;animation:fadeUp .6s .3s ease both}
    @media(max-width:900px){.contact-feedback-grid{grid-template-columns:1fr;gap:28px}}
    .contact-column,.feedback-column{width:100%}
    .column-title{font-size:20px;font-weight:700;margin-bottom:20px;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .contact-card{background:var(--card);box-shadow:var(--shadow);border-radius:24px;padding:10px 0;border:1px solid transparent;transition:all .4s}
    .contact-card:hover{box-shadow:var(--shadow-hover);border-color:var(--glow)}
    .contact-row{display:flex;align-items:center;gap:20px;padding:20px 28px;border-bottom:1px solid var(--nav-border);transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;flex-wrap:wrap}
    @media(max-width:600px){.contact-row{padding:16px 20px;gap:12px}}
    .contact-row::before{content:'';position:absolute;left:0;top:0;bottom:0;width:0;background:var(--accent-gradient);transition:width .3s}
    .contact-row:hover::before{width:4px}
    .contact-row:last-child{border-bottom:none}
    .contact-row:hover{background:var(--hover-card);transform:translateX(6px)}
    .contact-icon{font-size:22px;width:40px;text-align:center;flex-shrink:0;transition:transform .3s}
    .contact-row:hover .contact-icon{transform:scale(1.2) rotate(5deg)}
    .contact-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
    .contact-label{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--muted2)}
    .contact-value{font-size:14.5px;font-weight:500;word-break:break-all;overflow-wrap:break-word}
    @media(max-width:600px){.contact-value{font-size:13px}}
    .contact-value a{color:inherit;text-decoration:none;transition:all .3s}
    .contact-value a:hover{background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .contact-note{font-size:11px;color:var(--muted2);font-style:italic;margin-top:4px}
    .contact-actions{display:flex;gap:8px;flex-shrink:0;flex-wrap:wrap}
    @media(max-width:600px){.contact-actions{gap:6px}}
    .copy-email-btn,.whatsapp-btn{background:var(--tag-bg);border:1px solid var(--nav-border);padding:8px 16px;border-radius:50px;font-size:12px;cursor:pointer;transition:all .3s;color:var(--accent);font-family:'DM Sans',sans-serif;font-weight:500;white-space:nowrap;text-decoration:none;display:inline-block}
    @media(max-width:600px){.copy-email-btn,.whatsapp-btn{font-size:11px;padding:6px 12px}}
    .copy-email-btn:hover,.whatsapp-btn:hover{background:var(--accent-gradient);color:#fff;border-color:transparent;transform:scale(1.05);box-shadow:0 2px 8px var(--glow)}
    .whatsapp-btn:hover{background:linear-gradient(135deg,#25d366 0%,#128c7e 100%)}
    .resume-download-section{margin-top:32px;animation:fadeUp .6s .4s ease both}
    .download-resume-btn{width:100%;background:var(--accent-gradient);color:#fff;border:none;border-radius:16px;padding:20px 24px;display:flex;align-items:center;gap:16px;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 16px var(--glow);position:relative;overflow:hidden}
    .download-resume-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,#764ba2 0%,#667eea 100%);opacity:0;transition:opacity .3s}
    .download-resume-btn:hover{transform:translateY(-4px);box-shadow:0 8px 24px var(--glow)}
    .download-resume-btn:hover::before{opacity:1}
    .download-resume-btn>*{position:relative;z-index:1}
    .download-icon{font-size:28px;flex-shrink:0}
    .download-label{font-size:16px;font-weight:600;text-align:left}
    .download-sublabel{font-size:12px;opacity:.9;margin-top:2px;text-align:left}
    @media(max-width:600px){.download-resume-btn{padding:16px 20px}.download-icon{font-size:24px}.download-label{font-size:14px}.download-sublabel{font-size:11px}}
    
    /* Feedback Form Styles */
    .feedback-success-banner{display:flex;align-items:center;gap:16px;background:linear-gradient(135deg,rgba(34,197,94,0.1) 0%,rgba(34,197,94,0.05) 100%);border:1px solid rgba(34,197,94,0.3);border-radius:16px;padding:20px;margin-bottom:20px;animation:slideDown .4s ease both}
    @keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
    .success-icon{font-size:32px;flex-shrink:0}
    .success-title{font-size:16px;font-weight:700;color:#22c55e;margin-bottom:4px}
    .success-message{font-size:14px;color:var(--muted);line-height:1.5}
    @media(max-width:600px){.feedback-success-banner{padding:16px;gap:12px}.success-icon{font-size:28px}.success-title{font-size:14px}.success-message{font-size:13px}}
    .feedback-form{background:var(--card);box-shadow:var(--shadow);border-radius:24px;padding:28px;border:1px solid var(--nav-border);transition:all .4s}
    .feedback-form:hover{box-shadow:var(--shadow-hover);border-color:var(--glow)}
    .form-group{margin-bottom:20px}
    .form-label{display:block;font-size:13px;font-weight:600;color:var(--accent);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px}
    .form-input,.form-textarea{width:100%;background:var(--hover-card);border:1px solid var(--nav-border);border-radius:12px;padding:12px 16px;font-size:14px;color:var(--accent);font-family:'DM Sans',sans-serif;transition:all .3s;resize:vertical}
    .form-input:focus,.form-textarea:focus{outline:none;border-color:var(--glow);box-shadow:0 0 0 3px rgba(102,126,234,0.1)}
    .form-input::placeholder,.form-textarea::placeholder{color:var(--muted2)}
    .rating-buttons{display:flex;gap:8px;flex-wrap:wrap;justify-content:space-between}
    @media(max-width:600px){.rating-buttons{gap:6px}}
    .rating-btn{background:var(--tag-bg);border:1px solid var(--nav-border);padding:10px 12px;border-radius:12px;font-size:16px;cursor:pointer;transition:all .3s;font-family:'DM Sans',sans-serif;display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;min-width:70px}
    @media(max-width:600px){.rating-btn{padding:8px 8px;font-size:14px;min-width:60px}}
    .rating-label{font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:0.5px}
    @media(max-width:600px){.rating-label{font-size:9px}}
    .rating-btn:hover{background:var(--hover-card);transform:scale(1.05)}
    .rating-btn:hover .rating-label{color:var(--accent)}
    .rating-btn.active{background:var(--accent-gradient);color:#fff;border-color:transparent;transform:scale(1.05);box-shadow:0 4px 12px var(--glow)}
    .rating-btn.active .rating-label{color:#fff}
    .feedback-submit-btn{width:100%;background:var(--accent-gradient);color:#fff;border:none;border-radius:12px;padding:14px 20px;font-size:15px;font-weight:700;cursor:pointer;transition:all .3s;font-family:'DM Sans',sans-serif;box-shadow:0 4px 12px var(--glow)}
    .feedback-submit-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 20px var(--glow)}
    .feedback-submit-btn:disabled{opacity:0.6;cursor:not-allowed}
    @media(max-width:600px){.feedback-form{padding:20px}.form-input,.form-textarea{padding:10px 14px;font-size:13px}.rating-btn{padding:8px 12px;font-size:14px}}
    
    .footer{text-align:center;font-size:12px;color:var(--muted2);padding:32px 0 16px;position:relative;z-index:1;animation:fadeUp .6s .5s ease both}
      `}</style>
      <div className={`portfolio-root ${dark ? "dark" : "light"}`}>
        <FloatingParticles />
        <nav className="nav">
          <div className="nav-inner">
            <div className="nav-brand">Kartik Hushare</div>
            <div className="nav-tabs">
              {pages.map(p => (
                <button key={p} className={`nav-tab ${active === p ? "active" : ""}`} onClick={() => switchPage(p)}>{p}</button>
              ))}
            </div>
            <button className="toggle-btn" onClick={() => setDark(!dark)}>{dark ? "☀️ Light" : "🌙 Dark"}</button>
          </div>
        </nav>
        <main className="main">{renderContent()}</main>
        <footer className="footer">© 2025 Kartik Hushare</footer>
      </div>
    </>
  );
}
