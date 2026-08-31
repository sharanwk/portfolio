/* ============================================================================
   PROFILE + CV — edit here to change anything outside the projects list.
============================================================================ */
const PROFILE = {
  name: 'Sharan Kalamohan',
  role: 'Automotive & Motorsport Engineer',
  location: 'Amersham, Buckinghamshire',
  email: 'kalamohansharan@gmail.com',
  linkedin: 'https://linkedin.com/in/sharankalamohan',
  linkedinLabel: 'linkedin.com/in/sharankalamohan',
  photo: 'assets/profile.jpg',
  cvFile: 'assets/Sharan-Kalamohan-CV.pdf',
  availability: 'Available full-time from October 2026',
  eligibility: 'British citizen · Full UK right to work · Full UK driving licence',
  
  /* The one-paragraph version. Keep it to something you'd actually say. */
  thesis: "Hi, I'm Sharan! I’m an Amersham based engineering master's student with a passion to build the next generation of powertrains. From leading a Formula Student EV Concept Class team to helping develop award-winning gauging systems at Renishaw and simulating hydrogen combustion, I love pushing mechanical limits. I'm hunting for graduate powertrain roles—take a look at my resume and projects below.",
  
  /* group: education | relevant | other — each group renders as its own sub-heading under Background, most recent first within the group. */
  timeline: [
    {
      group: 'education',
      kind: 'Degree',
      period: 'Sep 2025 – Sep 2026',
      title: 'MSc Automotive & Motorsport Engineering',
      org: 'Brunel University London',
      note: 'Predicted Distinction',
      points: [
        'Advanced Vehicle Dynamics & Advanced CAD — 87%',
        'Advanced Vehicle Propulsion Technologies & Systems — 71%',
        'Racing Vehicle Design & Performance — 70%',
         'Advanced Materials & Manufacturing — 70% ',
        'Dissertation & Coursework Presented In Projects Section'
      ]
    },
    {
      group: 'relevant',
      kind: 'Formula Student',
      period: 'Oct 2025 – May 2026',
      title: 'Engineering Technical Director',
      org: 'Brunel Masters Motorsport (Formula Student UK)',
      note: 'FSUK Concept Class · team of 30 across four engineering groups',
      body: "Technical authority across Powertrain, Chassis & Aero, Suspension and Driver Controls on Brunel's electric Concept Class entry. Chaired design reviews to resolve cross-subsystem clashes, ran weekly leads meetings and owned the master CAD assembly and specification record.",
      points: [
        'Set and arbitrated vehicle-level targets — 280 kg, 453 V nominal, 40:60 front/rear — that all four engineering groups designed to',
        'Delivered the May Concept Class design submission: full vehicle CAD and specifications showing rule compliance',
        'Handed a documented architecture to the 2027 build team'
      ]
    },
    {
      group: 'education',
      kind: 'Degree',
      period: 'Sep 2021 – Jun 2025',
      title: 'BEng (Hons) Mechanical Engineering',
      org: 'University of Nottingham',
      note: 'Upper Second Class (2:1) · includes 12-month industrial placement at Renishaw plc',
      points: [
        'Advanced Powertrain Engineering — 91%',
        'Introduction To Automotive Technology — 71%',
        'Dissertation — 71% (Dissertation Presented In Projects Section)',
      ]
    },
    {
      group: 'relevant',
      kind: 'Industrial placement',
      period: 'Aug 2023 – Aug 2024',
      title: 'Mechanical Engineering Placement Student',
      org: 'Renishaw plc, Wotton-under-Edge',
      note: 'Gauging R&D — Equator X gauging system',
      body: "Twelve months on a team taking a metrology product to market. The system has since launched and was named Renishaw's internal Product of the Year 2024. My work was on the bonded carbon-fibre structure that its calibration depends on: if the struts move thermally, the software is calibrating against a moving target.",
      points: [
        'Designed and machined a magnetic multi-slot bonding fixture, raising carbon-fibre strut output 5x',
        'Planned and ran structural-adhesive life, thermal expansion and bond-line test programmes, plus tensile testing of carbon-fibre struts; authored the internal test reports that drove adhesive selection and production feasibility',
        'Cut bond-line thickness spread from 800 µm to 50 µm, achieving the CTE stability the calibration software required',
        'Modelled components in Siemens NX under Teamcenter PLM, programmed GibbsCAM toolpaths, machined the parts and verified them by CMM inspection, owning the loop from concept to measured part'
      ]
    },
    {
      group: 'other',
      kind: 'Part-time',
      period: 'Sep 2022 – present',
      title: 'Assistant Area Manager',
      org: 'Mohan Retail Ltd, Amersham',
      note: 'Flexible part time, alongside full-time study',
      body: '',
      points: [
        'Managed logistics, stock and staff scheduling across four family run retail stores alongside full-time study',
        'Introduced Excel-based stock rotation and dynamic pricing, cutting spoilage and increasing weekly revenue 3.6%'
      ]
    }
  ],
  
  skills: [
    {
      group: 'CAD & PLM',
      items: [
        'Siemens NX',
        'Teamcenter PLM',
        'SolidWorks',
        'Autodesk Inventor',
        '3D Scanning & Reverse Engineering'
      ]
    },
    {
      group: 'Simulation',
      items: [
        'MATLAB & Simulink',
        'Ricardo WAVE',
        'Ansys CFD',
        'Abaqus CAE',
        'CES EduPack'
      ]
    },
    {
      group: 'Manufacturing',
      items: [
        'GibbsCAM',
        'CNC Milling & Turning',
        'Manual Milling & Turning',
        'CMM Programming (MODUS)',
        'Rapid Prototyping'
      ]
    }
  ],
  
  interests: [
    {
      h: 'Music production',
      p: 'Self-taught in FL Studio, working with synthesis, sampling and mixing.'
    },
    {
      h: 'Strength training',
      p: 'A programme balancing strength, nutrition and recovery.'
    },
    {
      h: 'Five-a-side football',
      p: 'Weekly games in a local competitive league.'
    }
  ],
  
  languages: 'English (native) · Tamil (native)',
  memberships: 'IMechE Student Member'
};
