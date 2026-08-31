/* ============================================================================
   PROJECTS — this is the only file you need to edit to add or change a project.
   See ADDING-A-PROJECT.md for a copy-paste template.

   status: "complete" | "active" | "planned"
   Anything with status "planned" or "active" and no report path simply renders
   without a download button. Nothing else needs changing.
   ========================================================================== */

const PROJECTS = [

/* ----------------------------------------------------------- Dissertations --- */

{
  id: "msc-dissertation",
  title: "MSc Dissertation: Adaptive Intake Geometry For Hydrogen High-Performance Engines",
  short: "Multi-physics CFD optimisation of runner and plenum geometry, coupling Ricardo WAVE, Ansys CFD and MATLAB.",
  org: "Brunel University London",
  module: "MSc dissertation",
  role: "Individual dissertation",
  year: "2026",
  status: "active",
  featured: false,
  tags: ["Powertrain", "Simulation", "Hydrogen"],
  tools: ["Ricardo WAVE", "Ansys CFD", "MATLAB"],
  report: null,
  hero: null,
  summary: [
    "In progress. Hydrogen's wide flammability limits and low volumetric energy density change what an intake system has to do, and adaptive runner length and plenum volume are a route to holding volumetric efficiency across a wider speed range than a fixed geometry allows.",
    "The plan is a 1D air-path model in Ricardo WAVE for fast geometry sweeps, 3D CFD in Ansys for the cases that matter, and a MATLAB optimisation layer tying the two together.",
    "Results, figures and the full report will be published here on submission."
  ],
  results: [],
  differently: [],
  figures: []
},

{
  id: "beng-dct",
  title: "BEng Dissertation: Lightweighting Dual-Clutch Transmission Input Shafts",
  short: "Thirteen steel grades screened, then FEA at 420 Nm in Abaqus validated against classical torsion theory.",
  org: "University of Nottingham",
  module: "BEng dissertation — supervised by Prof Nicholas Warrior",
  role: "Individual dissertation",
  year: "2024–25",
  grade: "71%",
  status: "complete",
  featured: true,
  tags: ["Powertrain", "Materials", "FEA"],
  tools: ["Abaqus CAE", "SolidWorks", "CES EduPack"],
  report: "reports/beng-dct.pdf",
  hero: "assets/figures/beng-dct/von-mises-inner.webp",

  summary: [
    "DCT input shafts carry high torsional load in a component whose geometry is largely fixed by the gearset around it. The question was whether material substitution alone can buy anything worth having.",
    "Thirteen candidate grades were screened using a weighted Materials Performance Index built in CES EduPack, combining yield strength, density, shear modulus, cost and fatigue strength. The shortlist then went through FEA in Abaqus CAE — C3D10 tetrahedral mesh, 3 mm global size, 420 Nm applied through a coupling constraint — on both the inner and outer shafts.",
    "The model was validated against classical torsion theory, with shear stress agreement inside 3–7%, and supported by a mesh convergence study on angle of twist."
  ],

  results: [
    ["Baseline AISI 1045", "Factor of safety 2.04 inner, 13.60 outer"],
    ["50B46", "FoS 6.23 / 41.57 — over 200% improvement at +1.35% cost"],
    ["AISI 4140", "FoS 5.51 / 36.76 at +8.59% cost"],
    ["17-4PH H1100", "−24.12% shaft cost with FoS 3.35 / 22.37"],
    ["Mass", "Best case −3.06%, and that grade failed the FoS threshold"],
    ["Torsional stiffness", "Varies under 3.3% across all grades — not a binding constraint"],
    ["Validation", "FEA within 3–7% of classical torsion theory"]
  ],

  findings: [
    {
      h: "Material substitution buys strength and cost, not mass",
      p: "Von Mises stress was effectively identical across every grade because geometry and load were fixed; only factor of safety moved, and it moved with yield strength. Steel densities are too close together for substitution alone to lighten anything — which means the honest conclusion of a lightweighting study was that the mass is in the geometry, and the material work should be spent on unlocking a smaller section rather than a lighter alloy."
    }
  ],

  differently: [
    "Model fatigue, not just static torsion. The shaft's real duty is cyclic. My own performance index weighted fatigue strength and then the analysis never tested it, which is an inconsistency I would not repeat.",
    "Optimise geometry alongside material. That steel density barely varies was foreseeable at the proposal stage. Hollow sections and spline refinement would have made the word lightweighting in the title mean something.",
    "Cost the component, not the billet. I compared raw material price only; machinability and heat-treatment cost would plausibly reverse the ranking between 50B46 and 17-4PH.",
    "Interrogate the CES averages. Every property was averaged from a range. A sensitivity study on yield strength alone would have shown how much of the FoS ranking survives contact with real supplier data."
  ],

  figures: [
    { src: "assets/figures/beng-dct/von-mises-inner.webp",  cap: "Von Mises stress on the inner input shaft at 420 Nm, showing concentrations at the diameter transitions." },
    { src: "assets/figures/beng-dct/von-mises-outer.webp",  cap: "Von Mises stress on the outer input shaft, concentrating at the keyway slots." },
    { src: "assets/figures/beng-dct/fos-inner.webp",        cap: "Factor of safety for the inner shaft across all thirteen grades, benchmarked against AISI 1045." },
    { src: "assets/figures/beng-dct/cost-comparison.webp",  cap: "Percentage difference in total shaft cost against the baseline. Maraging Steel 300 is excluded for scale." },
    { src: "assets/figures/beng-dct/mesh-convergence.webp", cap: "Mesh convergence: angle of twist against element count for the inner shaft." },
    { src: "assets/figures/beng-dct/cad-assembly.webp",     cap: "CAD model of the inner input shaft, sectioned into regions for theoretical stress and twist calculation." }
  ]
},


/* ------------------------------------------------- Powertrain & simulation --- */

{
  id: "mgp-motor",
  title: "MSc Group Project Individual Report: Electric powertrain motor subsystem for a Formula Student car",
  short: "Motor selection, gear ratio and torque control for a 80 kW FS Concept Class EV, sized by simulation.",
  org: "Brunel University London",
  module: "MSc Major Group Project — Individual Report",
  role: "Motor Subsystem Lead, BMM-A Electric Powertrain",
  year: "2025–26",
  grade: "72%",
  status: "complete",
  featured: true,
  tags: ["Powertrain", "Simulation", "Formula Student"],
  tools: ["MATLAB", "Simulink", "Lap simulation", "FS 2026 rules"],
  report: "reports/mgp-motor.pdf",
  hero: "assets/figures/mgp-motor/efficiency-map.webp",

  summary: [
    "Brunel's 2026 Concept Class entry needed four answers before anything else could be designed: which motor, what gear ratio, what torque controller, and what interface numbers the other six subsystems could build against. My job was to produce all four with evidence attached.",
    "I built a modular quasi-static MATLAB framework — a motor capability surface, a digitised 6,271-point efficiency map, a lumped-parameter thermal model and a forward–backward lap simulation covering all four FS dynamic events — and used it as the single tool behind every decision in the subsystem.",
    "The EMRAX 228 MV LC was selected from five candidates through four-stage screening against inverter, accumulator and coolant-rule constraints. The final drive was set at 3.60 by a 144-simulation weighted sweep that stayed robust across a ±0.15 tyre-friction uncertainty window."
  ],

  results: [
    ["Motor selected", "EMRAX 228 MV LC — 13.5 kg axial-flux PMSM"],
    ["Final drive ratio", "3.60:1 (144-simulation weighted sweep)"],
    ["0–75 m acceleration", "4.256 s — 28 ms inside the 2025 FSUK winning time"],
    ["Skidpad / Autocross", "5.217 s / 78.325 s"],
    ["Endurance", "1602 s (26.7 min), 30.4% pack SoC remaining"],
    ["Peak winding temperature", "78.5 °C against a 120 °C cutoff"],
    ["Energy-weighted motor efficiency", "91.4%"],
    ["Regenerative recovery", "7.1% of drive energy"]
  ],

  findings: [
    {
      h: "The 80 kW rule is measured at the DC bus, not the shaft",
      p: "A controller that clips shaft power at 80 kW puts roughly 87 kW on the bus at 92% motor efficiency — 7 kW over EV2.2.1, and enough to trigger the 500 ms moving-average enforcement. The corrected DC-input cap controller derates the shaft to 73.6 kW so bus power clips cleanly at the ceiling."
    },
    {
      h: "A fixed torque map cannot cover both ends of the pack",
      p: "Across the accumulator's 270–454 V range, voltage-limited peak power runs from 50.7 kW to 73.6 kW, with the rule and the motor envelope crossing at about 392 V. An SoC-aware adaptive cap switches binding regime automatically and saves 94 s of endurance against a conservative fixed map, 3.1 s against a well-calibrated one."
    },
    {
      h: "Regen is an accumulator problem, not a motor problem",
      p: "At typical braking RPM the motor offers about 80 kW of regenerative capability; the locked 2C pack accepts 16.3 kW. That 5:1 ratio means recovery rises to roughly 15% at 4C and 19% at 5C with no motor-side change at all — which moved the team's next design priority from control tuning to cell selection."
    }
  ],

  differently: [
    "Dyno-validate the field-weakening region. The capability surface interpolates three published K<sub>V</sub> values and is only good to ±5–10% at high RPM. One day on the actual EMRAX and Cascadia pairing would tighten that to about ±2% and settle the SoC threshold empirically.",
    "Close the thermal loop. Winding temperature is a passive monitor in the current controller. Feeding the KTY 81/210 reading directly into the torque-cap lookup would turn a hard 100 °C trip into a graceful derate — the hardware is already specified, only the control law is missing.",
    "Lock the tyre model on day one. Sensitivity analysis showed friction coefficient dominates every headline metric by four to ten times the next parameter, yet I ran most of the study on an assumed μ = 1.30 ± 0.15. Chasing real Hoosier data early would have removed the largest source of doubt in the results.",
    "Version the parameter file properly. Cohort assumptions moved mid-study and re-running everything cost time that a simple config-versioning scheme would have saved."
  ],

  figures: [
    { src: "assets/figures/mgp-motor/efficiency-map.webp",      cap: "Digitised EMRAX 228 MV efficiency map — 6,271 sampled points reconstructed into a continuous torque–speed surface used throughout the simulation." },
    { src: "assets/figures/mgp-motor/acceleration-trace.webp",  cap: "Four-channel trace for the 75 m standing start: velocity, distance, shaft torque and shaft power against the 80 kW rule line." },
    { src: "assets/figures/mgp-motor/gear-ratio-sweep.webp",    cap: "Weighted sweep across candidate motor-to-wheel reduction ratios, converging on 3.60:1." },
    { src: "assets/figures/mgp-motor/adaptive-controller.webp", cap: "Pack state of charge through the 22-lap endurance event, with the adaptive controller's rule-bound and voltage-bound regimes marked." },
    { src: "assets/figures/mgp-motor/regen-envelope.webp",      cap: "Combined drive-and-regen envelope and cumulative event energy, showing regen bounded by pack acceptance rather than motor capability." },
    { src: "assets/figures/mgp-motor/thermal-transient.webp",   cap: "Transient winding temperature across the endurance event, peaking at 78.5 °C including the driver-change soak." },
    { src: "assets/figures/mgp-motor/sensitivity-tornado.webp", cap: "Sensitivity tornado across acceleration time, endurance lap time and lap energy. Tyre friction dominates all three." }
  ]
},

{
  id: "hybrid-p0p1p2",
  title: "P0 / P1 / P2 Mild Hybrid Architecture Comparison",
  short: "Three 48 V parallel hybrid layouts on an identical vehicle over WLTP Class 3 — and why the most capable one finished last.",
  org: "Brunel University London",
  module: "Advanced Vehicle Propulsion Technologies",
  role: "Individual report",
  year: "2025",
  grade: "73%",
  status: "complete",
  featured: false,
  tags: ["Powertrain", "Simulation", "Emissions"],
  tools: ["MATLAB", "Simulink Powertrain Blockset", "ECMS", "WLTP Class 3"],
  report: "reports/hybrid-p0p1p2.pdf",
  hero: "assets/figures/hybrid-p0p1p2/fuel-economy.webp",

  summary: [
    "P0, P1 and P2 differ only in where the electric motor sits on the driveline, so a controlled comparison should isolate the effect of that placement. I ran all three on an identical 1623 kg vehicle over WLTP Class 3 with matched drag, frontal area, wheel radius, bus voltage and pack capacity.",
    "Energy management used an Equivalent Consumption Minimisation Strategy, with the weighting factor calibrated per architecture by a secant-method script until final SoC returned to within ±0.1% of the 60% start — charge-sustaining operation, so fuel economy figures are not flattered by battery depletion.",
    "The literature expects P2 to win, by up to 27% under WLTP. It came last. That gap between expectation and result is the most useful thing the study produced."
  ],

  results: [
    ["Calibrated ECMS weighting", "P0 2.0195, P1 3.4901, P2 3.8608"],
    ["Fuel economy ranking", "P1 best, P0 second, P2 worst"],
    ["CO₂", "P1 lowest, P0 intermediate, P2 highest"],
    ["NOx", "P0 lowest throughout, P2 highest"],
    ["HC and CO", "Broadly matched to 900 s, then P2 diverges sharply on late-cycle transients"],
    ["Velocity tracking", "P1 tightest; P2 shows the largest and most irregular error"],
    ["Motor speed", "P0 runs high on a 3:1 ratio; P1 direct-drive, P2 at 2.636:1"]
  ],

  findings: [
    {
      h: "More hardware capability does not guarantee more performance",
      p: "P2's decoupling clutch gives it the widest operating envelope and the largest bidirectional motor torque of the three, and it still delivered the lowest fuel economy and the worst emissions. The higher ECMS weighting required to keep it charge-sustaining constrained how aggressively it could use the electrical path, and its less stable torque delivery pushed the engine into worse combustion regimes during late-cycle transients."
    }
  ],

  differently: [
    "Hold the control strategy constant, or state plainly that it is a second variable. Calibrating ECMS separately for each architecture means I compared architecture-plus-calibration, not architecture. That one decision explains most of the disagreement with the published comparisons.",
    "Size the motors to a common criterion. Peak motor torque ran from 66.67 Nm to 225 Nm across the three models, so the comparison was never truly like-for-like.",
    "Run a second drive cycle. Everything here is WLTP Class 3. Urban, stop-start operation is where P2's engine decoupling should pay, and leaving it out is part of why P2 looks worse than it is.",
    "Plot engine operating points on the BSFC map. I inferred load-point shifting from torque traces when I could have shown it directly, which would have made the emissions argument far stronger."
  ],

  figures: [
    { src: "assets/figures/hybrid-p0p1p2/fuel-economy.webp",   cap: "Cumulative fuel economy across the full WLTP Class 3 cycle. The ordering holds from roughly 400 s onward." },
    { src: "assets/figures/hybrid-p0p1p2/battery-soc.webp",    cap: "Battery state of charge for all three architectures, each returning to the 60% start after ECMS calibration." },
    { src: "assets/figures/hybrid-p0p1p2/co2.webp",            cap: "Cumulative CO₂ emissions — a consistent ordering with P1 lowest and P2 highest." },
    { src: "assets/figures/hybrid-p0p1p2/velocity-error.webp", cap: "Velocity tracking error against the target profile, showing P2's larger negative excursions." },
    { src: "assets/figures/hybrid-p0p1p2/p0-torque.webp",      cap: "Engine and motor torque for the P0 architecture over a low-speed section, with the engine dominant and near-zero motor assist." }
  ]
},

{
  id: "engine-sim",
  title: "1D Engine Modelling and Vehicle Data Correlation",
  short: "Instrumenting a turbocharged 2.0 TFSI, then building an air-path model that has to agree with the logs.",
  org: "Self-directed",
  module: "Personal project",
  role: "Solo",
  year: "2026 – present",
  status: "active",
  featured: false,
  tags: ["Powertrain", "Simulation", "Data acquisition"],
  tools: ["1D modelling", "VCDS OBD / ECU logging", "MATLAB"],
  report: null,
  hero: null,
  summary: [
    "In progress. A turbocharged 2.0 TFSI (EA113 with K04 turbo) instrumented and logged at full throttle and part load — boost pressure, mass air flow, intake air temperature, lambda and ignition timing.",
    "The model is being built to correlate against both the logged data and published dynamometer curves, as the platform for a hydrogen-conversion feasibility study on a real engine rather than a generic one.",
    "Progress, correlation plots and findings will be posted here as the work develops."
  ],
  results: [],
  differently: [],
  figures: []
},


/* ----------------------------------------------- Vehicle design & dynamics --- */

{
  id: "fs-concept",
  title: "Brunel Masters Motorsports #90 — FS Concept Class Car Design Specification",
  short: "Technical authority across four engineering groups on a 30-person team, delivering a complete Concept Class design submission.",
  org: "Brunel Racing / Brunel Masters Motorsports",
  module: "FSUK 2026 Concept Class entry",
  role: "Engineering Technical Director & Motor Subsystem Lead",
  year: "2025–26",
  status: "complete",
  featured: true,
  tags: ["Leadership", "Vehicle dynamics", "Formula Student"],
  tools: ["Siemens NX", "Master CAD assembly", "Design reviews", "DVP"],
  report: "reports/fs-concept.pdf",
  hero: "assets/figures/fs-concept/fs_side.webp",

  summary: [
    "A single-motor, rear-wheel-drive electric car designed as the engineering foundation for Brunel's running FS Class entry in 2027. Concept Class is the IMechE category for new teams: everything is designed and defended, nothing is yet built.",
    "As Technical Director I sat across Powertrain, Chassis & Aero, Suspension and Driver Controls — chairing design reviews, owning the shared specification record and the master CAD assembly, and running the weekly leads meetings that kept four groups from converging on incompatible interface assumptions.",
    "The vehicle is deliberately conservative. Manufacturability, reliability and cost were weighted above peak performance, on the reasoning that a Concept Class design has to become a real car within twelve months and the team's first EV should not also be its first attempt at novel architecture."
  ],

  results: [
    ["Architecture", "Single-motor RWD, EMRAX 228 MV + Cascadia PM150DZ"],
    ["Accumulator", "540-cell Molicel 108S5P, 8.16 kWh at 388.8 V nominal"],
    ["Power", "80 kW per EV2.2.1 — motor rated 124 kW, derated to 73 kW continuous"],
    ["Mass target", "260–280 kg without driver"],
    ["Frame torsional stiffness", "2,922 Nm/deg by FEA against a 2,000 Nm/deg target"],
    ["Impact attenuator", "8.45 kJ absorbed — 15% above the 7.35 kJ reference threshold"],
    ["0–100 km/h", "3.97 s in software-in-the-loop against a 4.5 s target"],
    ["Aerodynamics", "Undertray-diffuser only, 130–180 N at 80 km/h, 50–55% front-biased"],
    ["Verification", "18 of 21 Design Verification Plan tests passed in SiL"]
  ],

  differently: [
    "Centralise cross-group decisions from week one. Without a coordinated specification process the four sub-teams converge on incompatible interface assumptions — we learned that by having to fix it rather than by preventing it.",
    "Scope the high-voltage workstream honestly at the start. Shutdown circuit, AMS, IMD, BSPD, BOTS, pre-charge, latched reset and TSAL are collectively a workstream with its own owner, not a set of tasks to distribute.",
    "Start the mass roll-up before component selection, not after. A 15–20% overrun accumulates quietly unless there is an itemised budget updated weekly against real part numbers.",
    "Identify long-lead items at concept stage. Three-to-four-month lead times on motor, inverter and cells decide whether the detail-design-to-build timeline closes at all, and that has to be known while the design is still moving."
  ],

  figures: [
    { src: "assets/figures/fs-concept/fs_side.webp",  cap: "Side view, car #90. 2,739 mm overall length, 1,565 mm wheelbase, 1,140 mm height." },
    { src: "assets/figures/fs-concept/fs_plan.webp",  cap: "Plan view showing the single-motor rear-wheel-drive layout and accumulator packaging." },
    { src: "assets/figures/fs-concept/fs_front.webp", cap: "Front end view with track dimensions and pushrod actuation clearing the steering rack." }
  ]
},

{
  id: "f4-suspension",
  title: "Formula 4 Suspension Setup Optimisation",
  short: "A parametric MATLAB sweep of every homologated spring combination on a Tatuus F4 T-421, scored against Silverstone dry targets.",
  org: "Brunel University London",
  module: "Racing Vehicle Design & Performance — Suspensions & Tyres Section",
  role: "Individual section within a group report",
  year: "2026",
  grade: "83%",
  status: "complete",
  featured: true,
  tags: ["Vehicle dynamics", "Simulation", "Motorsport"],
  tools: ["MATLAB", "2026 FIA F4 regulations", "Tatuus T-421 manual"],
  report: "reports/f4-suspension.pdf",
  hero: "assets/figures/f4-suspension/handling-balance.webp",

  summary: [
    "Formula 4 homologation fixes the wishbones, uprights and kinematics, so performance has to come out of the setup parameters that remain. That makes it a bounded optimisation problem rather than a design problem, which is exactly what makes it interesting.",
    "I built an idealised spring–damper model of the T-421 — 570 kg with driver, 40:60 distribution, motion ratios 1.1 front and 1.23 rear, Pirelli slick vertical stiffness linearised at 1.4 bar and 0° camber — and swept every homologated spring rate from 700 to 1100 lb/in.",
    "Each combination was scored by a weighted penalty function against Silverstone dry targets: enough front platform support without excessive pitch separation, a slightly softer rear for traction, pitch ratio above unity for stability, and a moderate front roll stiffness bias."
  ],

  results: [
    ["Optimum setup", "F700 / R700 — score 0.243 against a 0.218 baseline"],
    ["Ride rates", "59.60 N/mm front, 55.40 N/mm rear (−17.7% / −20.5%)"],
    ["Sprung natural frequency", "4.051 Hz front, 3.090 Hz rear"],
    ["Pitch ratio", "1.311 (front-dominant, up 1.8%)"],
    ["Front roll stiffness share", "0.572 — unchanged, lateral balance preserved"],
    ["Damping at ζ = 0.675", "3161.3 Ns/m front, 3852.6 Ns/m rear"]
  ],

  differently: [
    "Replace the linearised tyre. Vertical stiffness was taken at a single operating point, which pushed the computed natural frequencies above real F4 values. The study is therefore only valid comparatively, and a load- and pressure-dependent tyre model would make it predictive.",
    "Test the weightings, not just the model. Targets and weights were chosen to represent Silverstone but never perturbed. A 20% swing on any one weight might reorder the top five setups, and I don't currently know whether it does.",
    "Add a transient case. The model is steady-state, and dampers earn their money over kerbs and in quick direction changes — precisely the conditions this model cannot see.",
    "Bring anti-roll bars into the sweep. Leaving roll stiffness share to the springs alone artificially narrowed the range of balance solutions available."
  ],

  figures: [
    { src: "assets/figures/f4-suspension/spring-ranking.webp",   cap: "Weighted optimisation score for every homologated front–rear spring combination, with F700/R700 highlighted." },
    { src: "assets/figures/f4-suspension/handling-balance.webp", cap: "Handling balance map: pitch ratio against front roll stiffness share, coloured by overall score." },
    { src: "assets/figures/f4-suspension/ride-rates.webp",       cap: "Front and rear ride rates and sprung natural frequencies across all evaluated combinations." },
    { src: "assets/figures/f4-suspension/damping.webp",          cap: "Damper force–velocity characteristic and transient response across damping ratios for the selected setup." }
  ]
},

{
  id: "rally-telemetry",
  title: "Rally Stage Telemetry Processing and DC Motor Control",
  short: "Turning noisy accelerometer data into a curvature map of a 1,380 m stage, then tuning a controller against it.",
  org: "Brunel University London",
  module: "Advanced Vehicle Dynamics & Advanced CAD",
  role: "Individual coursework",
  year: "2025",
  grade: "78%",
  status: "complete",
  featured: false,
  tags: ["Vehicle dynamics", "Simulation", "Control"],
  tools: ["MATLAB", "Simulink", "Butterworth filtering", "PID tuning"],
  report: "reports/rally-telemetry.pdf",
  hero: "assets/figures/rally-telemetry/path-curvature.webp",

  summary: [
    "Two halves. First, take raw rally logger data — yaw rate, speed, longitudinal and lateral acceleration, sideslip — and derive a geometric description of the stage plus an assessment of how close the driver got to the grip limit. Second, take a DC motor and build a controller that actually meets a specification.",
    "The signal chain matters more than it looks. Integrating yaw rate and speed in Simulink at a fixed 0.01 s step matched to the sampling rate avoids interpolation error; the accelerations then need a filter that removes engine and surface noise without flattening the peaks that carry the cornering information."
  ],

  results: [
    ["Filter", "2nd-order Butterworth low-pass, 10 rad/s — noise removed, peak accelerations preserved"],
    ["Curvature", "Centripetal acceleration projected through sideslip, then Gaussian-smoothed"],
    ["Corners detected", "16 events above 0.04 1/m across 1,380 m"],
    ["Grip limit used", "0.82 g, from the maximum observed filtered lateral acceleration"],
    ["Tightest corner", "Driver at 11.21 km/h against a theoretical 12.93 km/h — within 13%"],
    ["PID tuning", "Overshoot 40% → 7%, settling 0.80 s → 0.28 s (K<sub>i</sub> 15→10, K<sub>d</sub> 0.1→0.4)"]
  ],

  differently: [
    "Justify the cut-off frequency from the data. I chose 10 rad/s from vehicle-dynamics reasoning and then showed it worked. A power spectral density plot would have shown where the noise floor actually starts and made the choice defensible rather than merely correct.",
    "Use a zero-phase filter. Butterworth adds phase lag that misaligns acceleration against speed. For offline analysis there is no reason not to run filtfilt and remove it entirely.",
    "Tune the PID against a specification instead of by hand. Heuristic tuning reached a good answer, but pole placement or an optimiser would make it reproducible and let me state the design margin.",
    "Handle the standing start automatically. The 1.43 km/h apex at corner 1 is a launch, not a driver error, and the analysis should have excluded it in code rather than in commentary."
  ],

  figures: [
    { src: "assets/figures/rally-telemetry/yaw-distance.webp",     cap: "Yaw angle and cumulative distance recovered by integrating yaw rate and speed in Simulink." },
    { src: "assets/figures/rally-telemetry/filtered-accel.webp",   cap: "Raw against filtered longitudinal and lateral acceleration. Noise is suppressed while dynamic peaks survive." },
    { src: "assets/figures/rally-telemetry/path-curvature.webp",   cap: "Path curvature against distance travelled — a geometric map of the stage independent of vehicle speed." },
    { src: "assets/figures/rally-telemetry/corner-detection.webp", cap: "Peak detection isolating 16 cornering events for apex-speed comparison against the theoretical grip limit." },
    { src: "assets/figures/rally-telemetry/pid-response.webp",     cap: "Closed-loop step response for P, PI and PID controllers tracking a 1 rad/s reference." }
  ]
},


/* ----------------------------------------------- Materials & manufacturing --- */

{
  id: "cast-aluminium",
  title: "Melt Quality, Solidification and Heat Treatment in Cast Aluminium",
  short: "Linking degassing practice, Nb grain refinement and heat treatment to what the tensile bar actually does.",
  org: "Brunel University London",
  module: "Advanced Materials & Manufacturing",
  role: "Individual report",
  year: "2025",
  grade: "82%",
  status: "complete",
  featured: false,
  tags: ["Materials", "Manufacturing", "Experimental"],
  tools: ["Reduced pressure testing", "Cooling curve analysis", "Optical microscopy", "Tensile testing"],
  report: "reports/cast-aluminium.pdf",
  hero: "assets/figures/cast-aluminium/heat-treatment.webp",

  summary: [
    "Three linked experiments on Al-Si Aural alloy: melt quality by density index and reduced pressure testing, solidification by cooling curve analysis with and without an Al-Nb-B grain refiner, and mechanical performance by tensile testing of HPDC bars in four heat-treatment conditions.",
    "The thread running through all three is that processing decisions made in the melt survive into the part. Hydrogen picked up during a long hold shows up as elongation lost on the test bar, and no amount of heat treatment recovers it."
  ],

  results: [
    ["Density index over hold time", "0.4 at 0 min rising to 13.1 at 240 min"],
    ["UTS across the DI range", "227.5 → 140.5 MPa"],
    ["Elongation across the DI range", "7.0% → 0.8% — the most defect-sensitive property"],
    ["Yield strength", "97–101 MPa, effectively flat: matrix-controlled, not porosity-controlled"],
    ["Thermal conductivity", "145 → 110 W/m·K"],
    ["Grain size with 0.1 wt.% Nb", "800 µm → 260 µm, recalescence suppressed"],
    ["Eutectic fraction (lever rule)", "76.3%"],
    ["HPDC heat treatment", "T6 highest proof stress at 206 MPa, but as-cast retains the highest UTS at 317.3 MPa"]
  ],

  findings: [
    {
      h: "Porosity caps what heat treatment can buy",
      p: "T6 produced the highest 0.2% proof stress but the as-cast condition still held the highest UTS. Entrapped gas pores from high-speed die filling act as crack initiation sites, and elevated-temperature treatment can make them more damaging even while the matrix itself is strengthened. Optimising HPDC alloys is therefore as much about die filling as it is about ageing schedules."
    }
  ],

  differently: [
    "Quantify porosity directly. Everything in Section A rests on density index as a proxy. Sectioning with image analysis, or CT, would let pore size and distribution be correlated to fracture behaviour instead of inferred from it.",
    "Take more than three tensile repeats. The scatter at high DI was the most informative feature in the data and three samples cannot characterise it.",
    "Run fractography on the as-cast versus T6 bars. That inversion is the standout result of the whole study and fracture surfaces would have proved the pore-initiation argument rather than argued it.",
    "Use a proper intercept count for grain size. Seven intercepts on the unrefined sample is too few to support a confident 800 µm figure."
  ],

  figures: [
    { src: "assets/figures/cast-aluminium/cooling-curves.webp",  cap: "Cooling curves for permanent mould cast Aural alloy with and without 0.1 wt.% Nb, showing undercooling and recalescence removed by the refiner." },
    { src: "assets/figures/cast-aluminium/stress-strain.webp",   cap: "Engineering stress–strain curves for HPDC Aural alloy in as-cast, solution-treated, T6 and over-aged conditions." },
    { src: "assets/figures/cast-aluminium/heat-treatment.webp",  cap: "UTS and 0.2% proof stress by heat-treatment condition — the as-cast bar keeps the highest UTS despite T6 having the highest proof stress." },
    { src: "assets/figures/cast-aluminium/microstructure.webp",  cap: "Optical microstructure of unrefined Aural alloy (left) against 0.1 wt.% Nb addition (right), both 30 mm PMC samples, as-cast." }
  ]
},


/* -------------------------------------------------------------- Commercial --- */

{
  id: "bmw-strategy",
  title: "BMW Group: Financial Performance and A Route Into V2V",
  short: "Two years of BMW's numbers, then an investment case and a build-versus-partner argument for vehicle-to-vehicle capability.",
  org: "Brunel University London",
  module: "Strategy and Business Planning",
  role: "Individual report",
  year: "2025",
  grade: "63%",
  showGrade: true,      /* set false to hide the grade chip on this project only */
  status: "complete",
  featured: false,
  tags: ["Commercial", "Strategy", "Financial analysis"],
  tools: ["BMW Group Report 2024", "Statista", "NPV / IRR / PI analysis"],
  report: "reports/bmw-strategy.pdf",
  hero: "assets/figures/bmw-strategy/market-share.webp",

  summary: [
    "An engineering degree that never touches the money is only half an argument, so this one is here deliberately. It analyses BMW Group's 2023–24 performance by division and region, positions it against Mercedes-Benz, Tesla, Audi and Volvo, and then assesses whether the company can fund the technology it says it will build.",
    "The second half evaluates BMW's vehicle-to-vehicle capability gap and argues a partnership-led route through bodies like the 5G Automotive Association rather than in-house development, on the basis that BMW's strengths are vehicle integration and control rather than telecom infrastructure.",
    "The third part is a discounted cash flow appraisal of a production facility, including a sensitivity sweep on demand and a UK-versus-overseas comparison."
  ],

  results: [
    ["Group revenue 2023 → 2024", "€155,498m → €142,380m (−8.4%)"],
    ["Regional split", "Europe +2.5%, Asia −18.1%, Americas −14.2%"],
    ["Market share", "9.4% → 8.2%, still ahead of Mercedes-Benz Cars at 7.1%"],
    ["Margins", "Gross 19.1 → 16.1%, operating 11.9 → 8.1%, net 7.8 → 5.4%"],
    ["Facility NPV at 10%", "£458,534, IRR 26.19%, discounted payback 2.82 years"],
    ["Breaking point", "Project turns negative at a 30% demand shortfall (NPV −£39,024)"],
    ["UK vs overseas", "PI 1.38 against 0.92 — the higher-margin overseas option does not recover its 3× capital cost"]
  ],

  differently: [
    "Take a position earlier. The analysis holds up, but it is descriptive for too long and the recommendation arrives late and hedged. The marks in a strategy report come in the argument, not the data collection — that is the main reason this one scored below my others.",
    "State the error in the market-share denominator. I built the global total from segment revenue estimates converted across currencies and then quoted shares to one decimal place, which implies a precision the method does not support.",
    "Cut the paragraphs that restate the annual report. That space belongs to the build-versus-partner case for V2V, which is the genuinely arguable part of the brief.",
    "Stress the NPV on more than demand. Discount rate and operating margin are at least as uncertain as sales volume, and a two-way sensitivity table would say considerably more than a single-variable sweep."
  ],

  figures: [
    { src: "assets/figures/bmw-strategy/revenue-segment.webp", cap: "Group revenue by division, 2023 against 2024 — Automotive dominance and the Financial Services offset." },
    { src: "assets/figures/bmw-strategy/revenue-region.webp",  cap: "Revenue by region. The Asia decline accounts for most of the group-level fall." },
    { src: "assets/figures/bmw-strategy/market-share.webp",    cap: "Market share of leading premium manufacturers across both years." },
    { src: "assets/figures/bmw-strategy/npv-sensitivity.webp", cap: "Net present value against demand shortfall, with the implied IRR at the zero crossing." }
  ]
}

];
