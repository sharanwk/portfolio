/* ============================================================================
   PROFILE + CV — edit here to change anything outside the projects list.
   ========================================================================== */

const PROFILE = {
  name: "Sharan Kalamohan",
  role: "Automotive & Motorsport Engineer",
  location: "Amersham, Buckinghamshire",
  email: "kalamohansharan@gmail.com",
  phone: "+44 7397 896474",
  linkedin: "https://linkedin.com/in/sharankalamohan",
  linkedinLabel: "linkedin.com/in/sharankalamohan",
  photo: "assets/profile.jpg",
  cvFile: "assets/Sharan-Kalamohan-CV.docx",

  availability: "Available full-time from October 2026",
  eligibility: "British citizen · Full UK right to work · Full UK driving licence",

  /* The one-paragraph version. Keep it to something you'd actually say. */
  thesis: "Hi — I'm Sharan Kalamohan, an MSc Automotive & Motorsport Engineering student at Brunel University London, based in Amersham, Buckinghamshire. I am looking for a graduate role in powertrains. I spent a year at Renishaw plc in a future-products R&D team working on a shop-floor gauging system, which went on to win the company's internal Innovation Product of the Year. Alongside my degrees I've built my technical depth through Formula Student, where I was Technical Director of a 30-person concept-class EV team, and through self-directed powertrain simulation on turbocharged and hydrogen combustion. Below you will find my resume and the projects I have worked on.",

  /* group: "education" | "relevant" | "other"  — each group renders as its own
     sub-heading under Background, most recent first within the group. */
  timeline: [
    {
      group: "education",
      kind: "Degree",
      period: "Sep 2025 – Sep 2026",
      title: "MSc Automotive & Motorsport Engineering",
      org: "Brunel University London",
      note: "Predicted Distinction",
      points: [
        "Advanced Vehicle Dynamics & Advanced CAD — 87%",
        "Major Group Project — 72%",
        "Advanced Vehicle Propulsion Technologies — 71%",
        "Advanced Materials & Manufacturing — 70%",
        "Racing Vehicle Design & Performance — 70%",
        "Dissertation & Coursework Presented In Projects Section"
      ]
    },
    {
      group: "relevant",
      kind: "Formula Student",
      period: "Oct 2025 – May 2026",
      title: "Engineering Technical Director & Motor Subsystem Lead",
      org: "Brunel Formula Student",
      note: "FSUK Concept Class · 30-person team",
      body: "Technical authority across Powertrain, Chassis & Aero, Suspension and Driver Controls on Brunel's electric Concept Class entry. Chaired design reviews, owned the shared specification record and the master CAD assembly, and ran weekly leads meetings to keep four groups from designing to four different sets of assumptions.",
      points: [
        "Coached members through technical blockers to hold the submission schedule",
        "Delegated and tracked subsystem testing across four engineering groups",
        "Handed a documented architecture to the 2027 build team"
      ]
    },
    {
      group: "education",
      kind: "Degree",
      period: "Sep 2021 – Jun 2025",
      title: "BEng (Hons) Mechanical Engineering",
      org: "University of Nottingham",
      note: "Upper Second Class (2:1) · includes 12-month industrial placement",
      points: [
        "Advanced Powertrain Engineering — 91%",
        "Dissertation — 71%",
        "Dissertation Presented In Projects Section"
      ]
    },
    {
      group: "relevant",
      kind: "Industrial placement",
      period: "Aug 2023 – Aug 2024",
      title: "Mechanical Engineering Placement Student",
      org: "Renishaw PLC, Wotton-under-Edge",
      note: "Future-Products R&D — Equator X gauging system",
      body: "Twelve months on a team taking a metrology product to market. The system won Renishaw's internal Innovation Product of the Year 2024. My work was on the bonded carbon-fibre structure that its calibration depends on: if the struts move thermally, the software is calibrating against a moving target.",
      points: [
        "Designed and machined a magnetic multi-slot bonding fixture, taking strut output from one to five per batch at varying bond-line thicknesses; the concept informed later production tooling",
        "Cut bond-line thickness variation by 400 µm from an 800–1,200 µm spread, reaching the CTE stability the calibration software required",
        "Planned and ran adhesive life, CTE and bond-line test programmes plus carbon-fibre tensile testing; authored the internal reports behind adhesive selection",
        "Modelled in Siemens NX under Teamcenter, programmed GibbsCAM toolpaths, machined on a Mazak 3-axis mill and verified by CMM inspection in MODUS"
      ]
    },
    {
      group: "other",
      kind: "Part-time",
      period: "Sep 2022 – present",
      title: "Part-time Area Manager",
      org: "Mohan Retail Ltd",
      note: "Alongside full-time study",
      body: "Coordinated logistics and operations of multiple stores including staff training, inventory control, finances and standards oversight.",
      points: []
    }
  ],

  skills: [
    { group: "CAD & PLM",      items: ["Siemens NX", "Teamcenter PLM", "SolidWorks", "Autodesk Inventor", "3D Scanning & Reverse Engineering"] },
    { group: "Simulation",     items: ["MATLAB & Simulink", "Ricardo WAVE", "Ansys CFD", "Abaqus CAE", "CES EduPack"] },
    { group: "Manufacturing",  items: ["GibbsCAM", "CNC Milling & Turning", "Manual Milling & Turning", "CMM Programming (MODUS)", "Rapid Prototyping"] },
  ],

  interests: [
    { h: "Music production", p: "Self-taught; audio synthesis and arrangement, developing skills in signal filtering." },
    { h: "Strength training", p: "A self-designed programme balancing strength work against cardiovascular conditioning with nutrition and recovery implemented." },
    { h: "Five-a-side football", p: "Weekly competitive games with local league." }
  ],

  languages: "English (native) · Tamil (native)"
};
