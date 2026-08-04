export type RiskLevel = "low" | "moderate" | "high" | "extreme";

export interface Drug {
  id: string;
  name: string;
  aliases: string[];
  category: string;
  pharmacologyClass: string[];
  addictionPotential: string;
  danger: number; // 1-5
  legal: string;
  description: string;
  onset: string;
  duration: string;
  halfLife: string;
  benefits: string[];
  immediateEffects: string[];
  shortRisks: string[];
  longEffects: string[];
  longRisks: string[];
  brain: string;
  heart: string;
  body: string;
  mind: string;
  overdoseSigns: string[];
  withdrawal: string;
  color: string; // accent
  easterEgg?: string; // optional playful note shown on the profile and in any mix containing it
}

export const drugs: Drug[] = [
  {
    id: "cannabis",
    name: "Cannabis",
    aliases: ["Weed", "Marijuana", "THC", "Hash"],
    category: "Cannabinoid",
    pharmacologyClass: ["depressant", "psychedelic"],
    addictionPotential: "Moderate ~9-30%",
    danger: 2,
    legal: "Mixed - legal medical/recreational in many regions",
    description: "Cannabis acts on CB1/CB2 receptors. High THC strains produce strong psychoactive effects. Often used medically for pain, nausea.",
    onset: "Smoked: 2-10m, Edible: 30m-2h",
    duration: "2-10h (edible longer)",
    halfLife: "THC ~1-3d occasional, up to 7-13d chronic in body",
    benefits: ["Medical: chronic pain reduction", "Anti-nausea for chemo", "Appetite stimulation", "Reduced spasticity in MS (evidence)", "Perceived anxiety relief short-term"],
    immediateEffects: ["Euphoria, laughter", "Heightened sensory perception", "Increased appetite", "Time distortion", "Dry mouth, red eyes", "Impaired short-term memory & coordination"],
    shortRisks: ["Anxiety or paranoia, especially high dose", "Impaired driving and reaction time", "Dizziness, nausea if overconsumed", "Temporary elevated heart rate"],
    longEffects: ["Tolerance requiring more for same effect", "Potential amotivation with heavy daily use", "Bronchial irritation if smoked regularly"],
    longRisks: ["Cannabis use disorder in ~1/10 users", "Impact on memory/learning in adolescent heavy use", "CH Cannabinoid hyperemesis syndrome with chronic heavy use", "Potential trigger for psychosis in vulnerable individuals"],
    brain: "THC over-activates endocannabinoid system, disrupting natural memory, reward and coordination circuits in hippocampus, basal ganglia and cerebellum. Slows processing while high.",
    heart: "Raises heart rate 20-50% for up to 3 hours. Minimal direct cardiac toxicity alone but stressful if pre-existing heart disease.",
    body: "Dry mouth, bloodshot eyes, increased appetite. When smoked, tar and irritants to lungs. Edibles avoid respiratory load but dosing harder.",
    mind: "Can reduce anxiety at low dose for some, but high doses commonly increase anxiety, paranoia, and racing thoughts. Impairs recent memory encoding.",
    overdoseSigns: ["Extreme anxiety/panic, confusion", "Vomiting, pale skin", "Very rapid heart rate"],
    withdrawal: "Irritability, sleep difficulty, loss of appetite, mood swings for 1-2 weeks in daily users who stop.",
    color: "#2d5a3d"
  },
  {
    id: "alcohol",
    name: "Alcohol",
    aliases: ["Ethanol", "Liquor", "Beer", "Wine"],
    category: "Depressant",
    pharmacologyClass: ["depressant"],
    addictionPotential: "High - 15% develop dependence",
    danger: 4,
    legal: "Legal for adults >21 (US) / 18+ many countries",
    description: "One of most used psychoactive substances. CNS depressant that slows brain function. Dose-dependent from disinhibition to coma.",
    onset: "10-30 minutes on empty stomach",
    duration: "Effects 1-6h depending on amount, metabolized ~1 drink/hour",
    halfLife: "~4-5h behavioral; eliminated at ~0.015 BAC/hour",
    benefits: ["Social lubrication in low doses", "Mild cardiovascular association at very low use (contested)", "Used as antiseptic topically, solvent"],
    immediateEffects: ["Reduced inhibitions, sociability", "Slurred speech, impaired judgment", "Loss of coordination, slower reflexes", "Nausea at higher doses"],
    shortRisks: ["Alcohol poisoning if binge", "Violent or risky behavior", "Blackouts, memory loss", "Vomiting, aspiration risk", "Dangerous when driving"],
    longEffects: ["Tolerance and dependence", "Fatty liver progressing to cirrhosis", "Shrinkage of brain, neuropathy"],
    longRisks: ["Liver disease, pancreatitis", "Cancers: mouth, throat, esophagus, liver, breast", "Cardiomyopathy, hypertension", "Depression, anxiety, addiction", "Wernicke-Korsakoff memory disorder"],
    brain: "Enhances GABA inhibition and blocks NMDA excitation. Slows all cortical function. With chronic use, brain shrinks, neurotransmitter balance adapts, so stopping causes hyperexcitability.",
    heart: "Acute: vasodilation, flushing, raised heart rate. Chronic heavy: high blood pressure, arrhythmia (holiday heart), weakened heart muscle.",
    body: "Irritates stomach lining, dehydrates, causes inflammation. Liver metabolizes 90% - easily overloaded. Lowers blood sugar, impairs nutrition absorption.",
    mind: "Low dose reduces anxiety and self-consciousness. Higher doses cause emotional lability, aggression, severe judgment impairment, and later depressive crash.",
    overdoseSigns: ["Slow/no breathing, blue lips", "Unresponsive, can't be woken", "Vomiting while unconscious, hypothermia"],
    withdrawal: "Potentially life-threatening: tremor, sweats, seizures, hallucinations, delirium tremens days after stop in dependent users - medical supervision required.",
    color: "#8c5a2b"
  },
  {
    id: "nicotine",
    name: "Nicotine",
    aliases: ["Tobacco", "Vape", "Cigarettes", "Zyn"],
    category: "Stimulant",
    pharmacologyClass: ["stimulant"],
    addictionPotential: "Very High - among most addictive",
    danger: 4,
    legal: "Legal 18+/21+ but regulated",
    description: "Stimulant that drives tobacco dependence. Creates rapid dopamine surge, but delivery via smoke or vape carries separate harms.",
    onset: "Smoked/vape: ~20 seconds to brain",
    duration: "Buzz 5-30m, craving returns quickly",
    halfLife: "~2 hours",
    benefits: ["Brief focus, attention lift", "Mild mood elevation and appetite suppression", "Some evidence for ulcerative colitis benefit (nicotine)"],
    immediateEffects: ["Alertness, mild euphoria", "Increased heart rate and blood pressure", "Suppressed appetite", "Relaxed feeling after withdrawal relief"],
    shortRisks: ["Nausea and dizziness in new users", "Increased heart rate, blood pressure spike", "Acidity, heartburn"],
    longEffects: ["Strong tolerance, need to maintain level", "Vasoconstriction, reduced circulation"],
    longRisks: ["If smoked: lung cancer, COPD, stroke, heart disease", "Vaping: lung irritation, long-term unknown", "Gum disease, delayed wound healing", "Reproductive harms"],
    brain: "Binds nicotinic acetylcholine receptors, triggers dopamine, norepinephrine release. Desensitizes quickly causing tolerance. Brain rewires to expect nicotine.",
    heart: "Stimulates sympathetic system - raises heart rate +20bpm, constricts vessels, raises blood pressure. Increases risk of clots and coronary spasm.",
    body: "Supresses appetite, increases bowel motility. Chronic inhalation damages cilia and lung tissue. Vape aerosols irritate airways.",
    mind: "Provides brief relief of stress but only relieves withdrawal-induced anxiety. Long term associated with increased anxiety and mood swings between doses.",
    overdoseSigns: ["Nausea, vomiting, sweating", "Pale, clammy, confusion", "Rare: seizures with massive ingestion (especially children)"],
    withdrawal: "Irritability, anxiety, trouble concentrating, insomnia, increased appetite, strong craving for days to weeks.",
    color: "#4a4a4a"
  },
  {
    id: "cocaine",
    name: "Cocaine",
    aliases: ["Coke", "Blow", "Snow", "Powder"],
    category: "Stimulant",
    pharmacologyClass: ["stimulant"],
    addictionPotential: "High",
    danger: 5,
    legal: "Illegal Schedule II (medical local anesthetic only)",
    description: "Potent stimulant from coca leaf. Blocks dopamine reuptake, causing intense euphoria but short duration.",
    onset: "Snorted: 1-5m, smoked (crack): seconds",
    duration: "Snorted 15-45m, crack 5-15m",
    halfLife: "~1 hour",
    benefits: ["Medical: topical local anesthesia, vasoconstriction (rare)", "Perceived energy and confidence (short)"],
    immediateEffects: ["Intense euphoria, energy", "Talkativeness, hyperalert", "Decreased need for sleep/appetite", "Dilated pupils, sweating"],
    shortRisks: ["Anxiety, paranoia, irritability", "Increased heart rate and blood pressure", "Heart arrhythmia, chest pain - can occur even first time", "Nasal damage, nosebleeds"],
    longEffects: ["Strong craving and binge pattern", "Weight loss, sleep exhaustion", "Nasal septum damage"],
    longRisks: ["Heart attack, stroke at any use", "Severe addiction, psychosis with chronic high dose", "Relationship/financial damage", "Cocaine-induced midline destructive lesions"],
    brain: "Floods dopamine and norepinephrine by blocking reuptake. Overstimulates reward circuits, then crash as depleted. Can trigger seizures.",
    heart: "Extremely cardiotoxic: constricts coronary arteries, raises pressure and rate, promotes clots. Leading cause of drug-related heart emergencies.",
    body: "Raises temperature, sweating, tremor. Snorting destroys nasal tissue. Suppresses appetite leading to malnutrition.",
    mind: "Initial confidence turns to anxiety, suspicion, aggression after. Crash includes depression, fatigue, intense craving for hours/days.",
    overdoseSigns: ["Chest pain, very fast irregular pulse", "Seizure, hyperthermia", "Agitation, paranoid delirium, collapse"],
    withdrawal: "Crash: exhaustion, depression, vivid unpleasant dreams, increased appetite, strong craving - not medically dangerous but drives reuse.",
    color: "#b0b0b0"
  },
  {
    id: "heroin",
    name: "Heroin",
    aliases: ["H", "Smack", "Dope", "Opioid powder"],
    category: "Opioid",
    pharmacologyClass: ["depressant", "opioid"],
    addictionPotential: "Very High",
    danger: 5,
    legal: "Illegal Schedule I (no medical in US)",
    description: "Diacetylmorphine, rapid-acting opioid. Produces powerful analgesia and euphoria with high overdose and addiction risk.",
    onset: "Injection: ~20s, Smoked: <10s, Snorted: 5-10m",
    duration: "Rush seconds-minutes, sedation 3-5h",
    halfLife: "~30m rapidly to morphine, morphine 2-3h",
    benefits: ["No medical benefit illicitly, but opioid class vital for severe pain under supervision"],
    immediateEffects: ["Rush of intense pleasure and warmth", "Drowsiness, heavy limbs, nodding", "Pain elimination", "Slowed breathing"],
    shortRisks: ["Overdose: breathing stops - fatal minutes", "Nausea, vomiting, itchiness", "Dangerous when mixed with other depressants"],
    longEffects: ["Tolerance rapidly needing much more", "Dependence within days-weeks daily", "Constipation, hormonal suppression"],
    longRisks: ["Addiction, injection infections (HIV/HCV), endocarditis", "Collapsed veins, abscesses", "Loss of control over use, high mortality"],
    brain: "Converts to morphine, activates mu-opioid receptors. Drowns pain and reward centers, suppresses brainstem breathing rhythm.",
    heart: "Slows heart rate, drops blood pressure. Injection risks endocarditis (heart valve infection) and septic emboli.",
    body: "Slows gut, causes severe constipation, suppresses cough, reduces testosterone/estrogen. Itching from histamine.",
    mind: "Powerful anxiolysis and euphoria, profound detachment from worries. After peak, apathy. Dependence makes life revolve around avoiding withdrawal.",
    overdoseSigns: ["Unresponsive, limp", "Slow, shallow or no breathing, blue lips/nails", "Pinpoint pupils, gurgling"],
    withdrawal: "Intensely miserable: cramps, vomiting, diarrhea, anxiety, insomnia, muscle aches, sweating days 1-4 peaking, though rarely fatal alone.",
    color: "#6b2d2d"
  },
  {
    id: "mdma",
    name: "MDMA",
    aliases: ["Ecstasy", "Molly", "E"],
    category: "Empathogen",
    pharmacologyClass: ["stimulant", "psychedelic"],
    addictionPotential: "Low-Moderate, mainly psychological",
    danger: 3,
    legal: "Illegal Schedule I; FDA breakthrough for PTSD research",
    description: "Entactogen releasing serotonin, norepinephrine, dopamine. Promotes empathy and euphoria, but depletes serotonin.",
    onset: "30-60m oral",
    duration: "3-6h plus lingering",
    halfLife: "~8-9h",
    benefits: ["In trials: PTSD therapy aiding emotional processing", "Prosocial feelings, increased openness"],
    immediateEffects: ["Euphoria, emotional warmth, empathy", "Increased energy, sensitivity to touch and music", "Teeth clenching, sweating"],
    shortRisks: ["Hyperthermia, dehydration", "High heart rate and blood pressure", "Anxiety, confusion at high dose", "Hyponatremia if overhydrating"],
    longEffects: ["Serotonin crash next days: low mood, irritability", "Tolerance develops quickly"],
    longRisks: ["If frequent/high dose: possible serotonin axon changes (debated)", "Depression, sleep disturbance, neuro confusion in heavy users", "Adulteration risk: often cut with meth/cathinones"],
    brain: "Reverses serotonin transporter, flooding serotonin and blocking reuptake. Temporarily empties vesicles causing next-day depletion and astrocyte stress.",
    heart: "Raises pulse and pressure 20-40%. Can cause arrhythmia, especially with other stimulants. Hyperthermia strains heart.",
    body: "Raises temperature via both metabolic heat and impaired cooling, causes jaw tension, sweating, nausea. Can trigger muscle breakdown in extreme overheating.",
    mind: "Profound empathy, reduced fear response, openness. Can also cause overtalking and blurred boundaries. Comedown anxiety/depression 1-3 days.",
    overdoseSigns: ["Very hot, not sweating or profuse sweating, rigid", "Rapid heart, high blood pressure, panic, seizures", "Collapse"],
    withdrawal: "No classic withdrawal, but 1-3 day crash: low mood, fatigue, difficulty concentrating, cravings.",
    color: "#d67a5a"
  },
  {
    id: "lsd",
    name: "LSD",
    aliases: ["Acid", "Lucy", "Tabs"],
    category: "Psychedelic",
    pharmacologyClass: ["psychedelic"],
    addictionPotential: "Very Low - no physical dependence",
    danger: 2,
    legal: "Illegal Schedule I",
    description: "Classic serotonergic psychedelic, ultra potent microgram dose. Alters perception without direct neurotoxicity.",
    onset: "30-90m",
    duration: "8-12h",
    halfLife: "~3.6h",
    benefits: ["Research: anxiety, depression, cluster headache trials", "Perceived insights, creativity (subjective)", "No direct organ toxicity"],
    immediateEffects: ["Visual geometric patterns, enhanced colors", "Synesthesia, time dilation", "Heightened introspection"],
    shortRisks: ["Frightening trip: panic, paranoia", "Impaired judgment causing accidents", "Nausea, dilated pupils, sweating"],
    longEffects: ["Persists: no tolerance after ~2 weeks but immediate tolerance day after", "Flashbacks: HPPD in rare chronic"],
    longRisks: ["Unmasking latent psychosis in vulnerable", "Persistent perceptual distortion (HPPD) rare", "Traumatic psychological aftereffects from bad trip"],
    brain: "Partial agonist at 5-HT2A receptors in cortex. Disrupts thalamic filtering, causing sensory overflow and unconstrained association. No dopamine reinforcement loop.",
    heart: "Mild stimulation: slight rise in BP and pulse. Not cardiotoxic at typical doses but sympathetic arousal can stress heart.",
    body: "Dilated pupils, goosebumps, mild tremor, slight temperature rise. No respiratory depression. Nausea possible.",
    mind: "Can cause awe and insight but also terror and ego dissolution. Mindset and setting dominate experience. Can cause lasting belief changes.",
    overdoseSigns: ["No lethal overdose classic, but: severe agitation, hyperthermia, prolonged psychosis, self-harm risk"],
    withdrawal: "No withdrawal syndrome.",
    color: "#6e7cfa"
  },
  {
    id: "psilocybin",
    name: "Psilocybin",
    aliases: ["Magic Mushrooms", "Shrooms", "Psilocybe"],
    category: "Psychedelic",
    pharmacologyClass: ["psychedelic"],
    addictionPotential: "Very Low",
    danger: 1,
    legal: "Illegal Schedule I; decriminalized some places; trials legal",
    description: "Tryptamine psychedelic in ~200 mushroom species. Prodrug to psilocin, similar to LSD but shorter, more organic headspace.",
    onset: "20-60m eaten",
    duration: "4-6h",
    halfLife: "Psilocin ~2-3h",
    benefits: ["Trials: strong effect for treatment-resistant depression, end-of-life anxiety", "Addiction cessation pilot for tobacco"],
    immediateEffects: ["Visual rippling, breathing walls", "Emotional amplification, giggling", "Mystical-type feelings"],
    shortRisks: ["Nausea/vomiting common on comeup", "Anxiety if overwhelmed", "Confusion, disorientation"],
    longEffects: ["Afterglow days: improved mood, openness", "Tolerance short"],
    longRisks: ["Risky if eaten misidentified mushrooms - organ failure from toxic lookalikes", "Psychological distress in unsafe setting", "HPPD extremely rare"],
    brain: "Psilocin agonizes 5-HT2A like LSD, increases brain entropy and network crossover, reduces default mode network rigidity.",
    heart: "Transient mild increase in BP/pulse, generally safe. No direct cardiac damage.",
    body: "Nausea from chitin in mushrooms, abdominal cramps. No respiratory depression. Mild temp rise.",
    mind: "Often more emotional and less analytic than LSD. Can surface difficult memories with compassionate reframe but can also scare.",
    overdoseSigns: ["No lethal dose known in humans, but: severe panic, vomiting, temporary unable to walk/talk"],
    withdrawal: "None.",
    color: "#7b5a3a"
  },
  {
    id: "methamphetamine",
    name: "Methamphetamine",
    aliases: ["Meth", "Crystal", "Ice", "Crank"],
    category: "Stimulant",
    pharmacologyClass: ["stimulant"],
    addictionPotential: "Extremely High",
    danger: 5,
    legal: "Schedule II (Desoxyn limited ADHD) otherwise illegal",
    description: "Potent amphetamine releasing dopamine massively and lasting. Neurotoxic at high doses, binge pattern.",
    onset: "Smoked/injected: seconds; oral: 20m",
    duration: "8-12h (crystal)", 
    halfLife: "10-12h",
    benefits: ["Prescription: ADHD, obesity (rare)", "Illicit none - perceived productivity increase is unsustainable"],
    immediateEffects: ["Extreme energy, hyperfocus, euphoria", "No fatigue or hunger", "Rapid talking, repetitive behavior"],
    shortRisks: ["Heart arrhythmia, hyperthermia, seizure", "Extreme anxiety, paranoia, aggressive", "Stroke risk even young"],
    longEffects: ["Weight loss, dental decay, skin sores", "Psychosis with chronic sleep-deprived use"],
    longRisks: ["Dopamine system damage", "High addiction, brain changes", "Heart failure, Parkinson-like movement issues", "Severe mental health deterioration"],
    brain: "Forces dopamine out and blocks reuptake. High concentrations toxic to dopamine terminals. Cortex overworks without sleep for days causing psychosis.",
    heart: "Extreme vasoconstriction and high demand: causes spasm of coronaries, hypertension crises, cardiomyopathy, deadly arrhythmias.",
    body: "Temperature soars, sweating, tremor. Suppresses hunger, causes malnutrition. Compulsive scratching, poor healing.",
    mind: "Initial hyperconfidence devolves into suspicious, paranoid thinking, hallucinations with lack of sleep. Crash: depression, anhedonia for days.",
    overdoseSigns: ["Chest pain, collapse, seizure, very hot, agitated delirium"],
    withdrawal: "Crash: extreme exhaustion, depression, increased appetite, vivid nightmares, craving weeks to months.",
    color: "#8fb8d8"
  },
  {
    id: "amphetamine",
    name: "Amphetamine / Adderall",
    aliases: ["Adderall", "Speed", "Vyvanse", "Dex"],
    category: "Stimulant",
    pharmacologyClass: ["stimulant"],
    addictionPotential: "High, higher when misused",
    danger: 4,
    legal: "Schedule II Rx for ADHD/narcolepsy",
    description: "Medical stimulant for ADHD; misused for performance. Less potent/long than meth but similar risks at high doses.",
    onset: "Oral: 30-60m",
    duration: "4-12h depending on formulation",
    halfLife: "~10-13h",
    benefits: ["Medical: improves attention, executive function in ADHD", "Reduces narcolepsy episodes"],
    immediateEffects: ["Focus, energy, suppressed appetite", "Euphoria if high dose/snorted", "Increased confidence"],
    shortRisks: ["Anxiety, insomnia, jitter", "Elevated heart rate and blood pressure", "Risky driving overconfidence"],
    longEffects: ["Tolerance, dependence if daily high dose", "Mood swings, crash"],
    longRisks: ["Cardiac strain if high dose", "Addiction when non-prescribed route/dose", "Psychosis with binges, appetite/bone issues"],
    brain: "Releases and blocks dopamine/norepinephrine at lower potency than meth. At therapeutic doses improves prefrontal signaling; excessive floods and drains.",
    heart: "Raises HR 5-15bpm and BP. At therapeutic doses low risk in healthy; misused high dose raises arrhythmia and coronary strain risk.",
    body: "Appetite down, slight temperature rise, dry mouth. High dose: tremor, sweating, abdominal cramping.",
    mind: "Therapeutic: calmer, able to prioritize. Misuse: euphoric rush followed by irritability, anxiety, crash low.",
    overdoseSigns: ["Restlessness, rapid pulse, chest pain", "Agitation, hallucinations", "Seizure"],
    withdrawal: "Fatigue, depression, sleep excess, hunger, craving.",
    color: "#d5a500"
  },
  {
    id: "oxycodone",
    name: "Oxycodone",
    aliases: ["Oxy", "Percocet", "OxyContin", "Hillbilly heroin"],
    category: "Opioid",
    pharmacologyClass: ["depressant", "opioid"],
    addictionPotential: "High",
    danger: 4,
    legal: "Schedule II Rx for pain",
    description: "Semi-synthetic opioid. Effective analgesic with rapid tolerance, dependence, respiratory depression risk.",
    onset: "Oral immediate: 20-30m, extended: ~1h",
    duration: "3-6h IR, 12h ER",
    halfLife: "3-5h",
    benefits: ["Severe pain management post-surgery/cancer", "Cough/diarrhea suppression historically"],
    immediateEffects: ["Pain relief, relaxation, warmth", "Euphoria, drowsiness", "Slowed breathing, constipation"],
    shortRisks: ["Overdose fatal especially with alcohol/benzos", "Nausea, itching, confusion", "Dangerous to drive"],
    longEffects: ["Tolerance - need higher dose", "Dependence physically", "Hormonal low libido, constipation chronic"],
    longRisks: ["Addiction and escalation to stronger opioids/heroin/fentanyl", "Overdose death", "Social/health collapse"],
    brain: "Agonizes mu receptors; reduces pain percept, triggers dopamine reward; suppresses brainstem breathing drive - why overdose kills.",
    heart: "Lowers BP and rate; generally less heart toxic but anaphylaxis possible. Og risk is breathing, not heart directly.",
    body: "Slows gut, urinary retention, histamine itch, constricts pupils, suppresses cough.",
    mind: "Numbs emotional pain as well as physical. Produces contented apathy and reduced anxiety until wear-off anxiety returns.",
    overdoseSigns: ["Unresponsive, slow/no breathing", "Blue lips, limp, pinpoint pupils"],
    withdrawal: "Fearsome but not fatal: muscle aches, nausea, diarrhea, goosebumps, anxiety, insomnia like severe flu for 5-10 days.",
    color: "#7a3a3a"
  },
  {
    id: "fentanyl",
    name: "Fentanyl",
    aliases: ["Fetty", "Apache", "Carfentanil analogue", "Fake perc"],
    category: "Opioid",
    pharmacologyClass: ["depressant", "opioid"],
    addictionPotential: "Extremely High",
    danger: 5,
    legal: "Schedule II medical, illicit deadly",
    description: "Synthetic opioid 50-100x morphine potency, microgram dosing. Medical anaesthetic but illicitly mass-fatal overdose driver.",
    onset: "Iv seconds, patch minutes-hours",
    duration: "IV minutes to 1h but respiratory depression longer",
    halfLife: "IV ~3-7h, transdermal longer; but re-narcotization",
    benefits: ["Hospital: surgical anaesthesia, breakthrough cancer pain controlled"],
    immediateEffects: ["Potent rapid analgesia, sedation", "Extreme euphoria followed by nod", "Very fast respiratory suppression"],
    shortRisks: ["Death from 2mg mismeasured", "No chance to call help", "Rapid dependence"],
    longEffects: ["Chest wall rigidity high dose", "Severe tolerance"],
    longRisks: ["Highest overdose mortality now", "Illicit supply contamination - every 'perc' may be fentanyl"],
    brain: "Binds mu with extreme affinity, suppresses breathing at dose just above euphoria - narrow therapeutic index. Quickly saturates.",
    heart: "Slows rate, but death is respiratory first. Can cause chest wall rigidity impairing ventilation.",
    body: "Same opioid effects but far stronger: pinpoint pupils, constipation, itch, urine retention.",
    mind: "Intense rush then sedation. Tolerance escalates to life-threatening dose needs.",
    overdoseSigns: ["Immediate collapse, no breath, blue", "Very small amount fatal", "Needs multiple naloxone doses often"],
    withdrawal: "Like heroin but faster onset, severe: pains, vomiting, anxiety, insomnia, lasting weeks mental.",
    color: "#000000"
  },
  {
    id: "benzodiazepines",
    name: "Benzodiazepines",
    aliases: ["Xanax", "Valium", "Ativan", "Klonopin", "Benzos"],
    category: "Depressant",
    pharmacologyClass: ["depressant"],
    addictionPotential: "High",
    danger: 4,
    legal: "Schedule IV Rx for anxiety, seizures, sleep",
    description: "GABA-A enhancers, sedative-anxiolytic. Effective short-term but tolerance, dependence, deadly with alcohol/opioids.",
    onset: "Oral: 20-60m, alprazolam fast",
    duration: "Xanax 6-12h, diazepam up to 24-48h via metabolites",
    halfLife: "6-100h depending type",
    benefits: ["Panic and anxiety rapid relief", "Seizure and alcohol withdrawal treatment", "Muscle relaxant, pre-procedure sedation"],
    immediateEffects: ["Calm, less anxiety", "Drowsiness, slowed thoughts", "Amnesia at higher doses"],
    shortRisks: ["Over-sedation, falls, blackouts", "Amnesia, risky behavior no memory", "Respiratory arrest when mixed"],
    longEffects: ["Tolerance needing more", "Rebound anxiety worse than before"],
    longRisks: ["Dependence with dangerous withdrawal seizures", "Cognitive dulling with chronic", "Addiction and overdose when mixed"],
    brain: "Bind GABA-A, open chloride, hyperpolarize neurons. Widespread braking effect. Brain reduces own GABA and increases glutamate to compensate - withdrawal hyperexcitation.",
    heart: "Weak cardiac effects alone but slows breathing indirectly; mixed severe hypotension and bradycardia.",
    body: "Muscle loosening, difficulty walking straight, slurred speech, slowed reflexes.",
    mind: "Releases anxiety quickly but emotional processing impaired; after wears off anxiety can rebound higher; long term apathy.",
    overdoseSigns: ["Deep sleep, can't wake, slurred, falls", "When mixed: slow breathing, coma"],
    withdrawal: "Among worst: anxiety, insomnia, tremor, seizures, psychosis if abrupt after dependence - taper medically required weeks-months.",
    color: "#5186a0"
  },
  {
    id: "ketamine",
    name: "Ketamine",
    aliases: ["K", "Special K", "Ket"],
    category: "Dissociative",
    pharmacologyClass: ["dissociative", "depressant"],
    addictionPotential: "Low-Moderate",
    danger: 3,
    legal: "Schedule III medical anaesthetic; esketamine Rx for depression",
    description: "Dissociative anaesthetic blocking NMDA. Low dose antidepressant and trippy; high dose K-hole and anesthesia.",
    onset: "Snorted 5-15m, injection <5m",
    duration: "45m-2h",
    halfLife: "~2.5h",
    benefits: ["Medical anaesthesia, emergency sedation", "Esketamine nasal spray for treatment-resistant depression", "Chronic pain infusion use"],
    immediateEffects: ["Floating, dissociated from body", "Time distortion, mild visuals", "Numbness, impaired movement"],
    shortRisks: ["Inability to move/vulnerable", "Nausea, confusion", "High BP and pulse transient"],
    longEffects: ["Frequent high dose: bladder damage (ketamine bladder)", "Cognitive fog with heavy use"],
    longRisks: ["Bladder ulceration, incontinence, hydronephrosis if daily heavy", "Psychological dependence", "Liver irritation"],
    brain: "Blocks NMDA glutamate receptors, disconnects thalamus-cortex flow. Triggers burst of glutamate and BDNF, thought to underlie fast antidepressant effect.",
    heart: "Acute raises BP and pulse via sympathetic activation. Not typically arrhythmic alone but strain if heart disease.",
    body: "Anaesthetic but eyes open; increased salivation; numbness. Raised muscle tone.",
    mind: "Can feel existential, dream-like. Can relieve suicidal ideation hours after low dose but also cause confusion and ego dissolution high dose.",
    overdoseSigns: ["Unresponsive but rigid, very high BP", "Vomiting while dissociated", "Slow breathing if mixed with depressants"],
    withdrawal: "Mainly psychological cravings; some anxiety and shaking when heavy use stopped, not life threatening.",
    color: "#86b3a0"
  },
  {
    id: "pcp",
    name: "PCP",
    aliases: ["Angel Dust", "Phencyclidine", "Sherm"],
    category: "Dissociative",
    pharmacologyClass: ["dissociative", "stimulant"],
    addictionPotential: "Moderate",
    danger: 5,
    legal: "Schedule II illegal street, Schedule I? Actually II/ I",
    description: "Dissociative anesthetic with both stimulant and depressant and psychedelic. Unpredictable aggression and numbness, powerful.",
    onset: "Smoked 2-5m, oral 30-60m",
    duration: "6-24h long",
    halfLife: "7-46h",
    benefits: ["Former surgical anaesthetic, discontinued due to postoperative psychosis"],
    immediateEffects: ["Numbness, detachment from body", "Bizarre behavior, feeling superhuman", "Staring, repetitive movements"],
    shortRisks: ["Violent unpredictable behavior", "Hyperthermia, high BP, seizures", "Severe anxiety, psychosis mimicking schizophrenia", "No pain - risk self injury"],
    longEffects: ["Prolonged psychosis hours-days after", "Memory gaps"],
    longRisks: ["Persistent psychotic episodes with chronic use", "Flashbacks, depression, cognitive deficits"],
    brain: "NMDA blocker plus dopamine reuptake and sigma activity. Throws multiple circuits off, causing catatonia yet agitation.",
    heart: "Raises BP and heart rate strongly, can cause hypertensive crisis, heart failure in vulnerable.",
    body: "Looks blank, eyes may flick (nystagmus), drooling, sweating, rigid posturing, analgesic - no pain feedback.",
    mind: "Sense of strength invulnerability and detachment from consequences. Can be terrifying, trigger prolonged terrifying psychosis with delusions.",
    overdoseSigns: ["Extreme agitation, unmanageable, very hot, seizure, coma"],
    withdrawal: "Cravings, depression, headaches, increased appetite.",
    color: "#c2b0a0"
  },
  {
    id: "dmt",
    name: "DMT",
    aliases: ["Dimitri", "Spirit Molecule", "Ayahuasca core"],
    category: "Psychedelic",
    pharmacologyClass: ["psychedelic"],
    addictionPotential: "Very Low",
    danger: 2,
    legal: "Schedule I illegal",
    description: "Endogenous tryptamine, ultra short but breakthrough psychedelic. Smoked induces 5 minute intense visionary.",
    onset: "Smoked: seconds, Ayahuasca: 30-60m",
    duration: "Smoked 5-15m, ayahuasca 4-6h",
    halfLife: "Minutes, inactive via MAO unless with MAOI",
    benefits: ["Research interest in mystical experience and depression", "Culturally ritual healing in ayahuasca brews"],
    immediateEffects: ["Instant entry to overwhelming geometric entity-like visuals", "Complete loss of ordinary reality", "Intense but brief"],
    shortRisks: ["Extreme psychological shock if unprepared", "Rapid heart rate, blood pressure spike", "Vomiting (ayahuasca)"],
    longEffects: ["Integration difficulties if intense", "Tolerance immediate but resets quickly"],
    longRisks: ["May unmask psychosis in predisposed", "Ayahuasca interacts dangerously with SSRIs/MAOIs - serotonin syndrome"],
    brain: "Powerful 5-HT2A and sigma-1 agonist, produces maximal cortical entropy. Brain under DMT not dreamlike but hyper-realistic visionary state.",
    heart: "Sympathetic surge: BP and pulse rise notably for minutes.",
    body: "Dizziness, nausea when comes on strong, tremor, blood pressure rise. Ayahuasca strong purge via 5-HT3 nausea.",
    mind: "Often described as being transported to autonomous world, ego dissolves quickly. Can be awe or terror. Insight after but confusion possible.",
    overdoseSigns: ["No lethal dose smoked alone; risk is behavior/injury during peak"],
    withdrawal: "None.",
    color: "#c95e3a"
  },
  {
    id: "anabolic-steroids",
    name: "Anabolic Steroids",
    aliases: ["Roids", "Juice", "Test", "Tren"],
    category: "Steroid",
    pharmacologyClass: ["steroid"],
    addictionPotential: "Moderate - body image dependence",
    danger: 3,
    legal: "Schedule III if non-prescribed",
    description: "Synthetic testosterone derivatives building muscle but disrupting hormones and cardiovascular system.",
    onset: "Oral days, injectable weeks",
    duration: "Effects build over weeks",
    halfLife: "Varies  hours to days by ester",
    benefits: ["Medical: hypogonadism, muscle wasting, delayed puberty, some anemias"],
    immediateEffects: ["Increased strength, faster recovery (days)", "Increased aggression/energy in some"],
    shortRisks: ["Acne, hair loss, mood swing, testicular shrinkage", "Heart strain, high blood pressure"],
    longEffects: ["Muscle growth but tendon injury risk, hair loss", "Infertility temporary, gynecomastia"],
    longRisks: ["Heart attack, stroke, cardiomyopathy, high cholesterol", "Liver tumors (oral form)", "Infertility, mood disorders, addiction to image", "In women: irreversible virilization"],
    brain: "Increases confidence but can raise irritability, aggressive reactivity. Long high dose can cause hypomania/depression swings, dependence on self image.",
    heart: "Raises LDL, drops HDL, raises BP and thickens left ventricle, promoting heart attack and arrhythmia especially with stimulants.",
    body: "Builds protein synthesis, shrinks testes due feedback, acne, oily skin, accelerates male pattern baldness. Needles carry infection risk if shared.",
    mind: "Body dysmorphia driver: never big enough. Can cause irritable roid rage and depressive crash after cycle when endogenous testosterone low.",
    overdoseSigns: ["No acute overdose in single dose, but: chest pain, stroke signs, jaundice, severe mood episode"],
    withdrawal: "Depression, fatigue, low libido, loss of muscle, joint pain weeks-months until hormones recover.",
    color: "#9f8b6e"
  },
  {
    id: "nitrous-oxide",
    name: "Nitrous Oxide",
    aliases: ["NOS", "Whippets", "Laughing Gas", "Balloons"],
    category: "Inhalant / Dissociative",
    pharmacologyClass: ["dissociative", "depressant"],
    addictionPotential: "Low-Moderate - psychological",
    danger: 3,
    legal: "Legal for medical/catering, misuse restricted some places",
    description: "Inhaled anaesthetic gas causing 30-60s dissociative euphoria. Low acute risk isolated but B12 depletion and asphyxia risk.",
    onset: "Inhaled seconds",
    duration: "30s to few minutes",
    halfLife: "Minutes",
    benefits: ["Medical: dental anaesthesia, labor pain", "Culinary whipping agent"],
    immediateEffects: ["Giggly euphoria, sound distortion", "Lightheaded floating", "Tingling, brief analgesia"],
    shortRisks: ["Hypoxia if no air mixed - suffocation", "Fainting, falls, injury", "Frostbite if release direct mouth"],
    longEffects: ["Repeated low oxygen brain exposure", "Numbness in hands feet if frequent"],
    longRisks: ["B12 inactivation -> neuropathy, spinal cord degeneration (subacute combined degeneration) if heavy repeated", "Immune suppression, infertility concerns chronic", "Addiction to binge pattern"],
    brain: "NMDA blocker like ketamine but ultra short, also opioid and GABA modulation. Briefly cuts oxygen if inhaled pure, which harms brain if repeated.",
    heart: "Suppresses breathing indirectly; under oxygen deprivation can cause arrhythmia. Low direct toxicity but hypoxia dangerous.",
    body: " tingling from transient nerve block, loud distortion, impaired balance briefly, fainting possible.",
    mind: "Brief giggly silliness then clear recovery. Repeated binges promote impulsivity and chasing effect.",
    overdoseSigns: ["Blue lips, unresponsive, not breathing due to hypoxia"],
    withdrawal: "None classic, but craving and anxiety.",
    color: "#b7cbd8"
  },
  {
    id: "caffeine",
    name: "Caffeine",
    aliases: ["Coffee", "Energy Drinks", "Tea", "Pre-workout"],
    category: "Stimulant",
    pharmacologyClass: ["stimulant"],
    addictionPotential: "Low-Moderate - physical dependence common",
    danger: 2,
    legal: "Legal, unregulated in food/drinks",
    description: "World's most widely used psychoactive drug. Adenosine receptor blocker that promotes wakefulness and alertness. Very safe at normal doses, but toxic in gram quantities such as pure powder or stacked pills.",
    onset: "15-45 minutes",
    duration: "3-5h noticeable, subtle effects longer",
    halfLife: "~5h (3-7h; longer in pregnancy or with some meds)",
    benefits: ["Increased alertness and reduced fatigue", "Improved focus and reaction time", "Mild endurance / athletic performance boost", "Enhances some pain relievers (headache/migraine)", "Observational links to lower risk of Parkinson's, type 2 diabetes (not proven causal)"],
    immediateEffects: ["Alertness, wakefulness, reduced drowsiness", "Improved concentration and mood", "Increased heart rate and urine output", "Jitteriness or restlessness at higher doses"],
    shortRisks: ["Anxiety, jitteriness, insomnia", "Heart palpitations, mildly raised blood pressure", "Upset stomach, acid reflux", "Headache and irritability as it wears off"],
    longEffects: ["Tolerance - need more for same lift", "Physical dependence with daily use", "Disrupted sleep if taken late in the day"],
    longRisks: ["Chronic insomnia and anxiety with heavy use", "Worsened reflux; raised blood pressure in sensitive people", "Overdose from powders/pills: seizures, arrhythmia, rarely fatal", "Masks underlying sleep debt rather than fixing it"],
    brain: "Blocks adenosine receptors so the build-up 'tiredness' signal is silenced, indirectly raising dopamine and norepinephrine activity. Promotes wakefulness, but the rebound as it clears causes fatigue and headache.",
    heart: "Mildly raises heart rate and blood pressure short-term via sympathetic activation. Can trigger palpitations or arrhythmia in sensitive individuals or at high doses; low cardiac risk at moderate intake.",
    body: "Increases urine output (mild diuretic), stimulates stomach acid, can loosen bowels, and slightly raises metabolic rate. Tremor and sweating appear at high doses.",
    mind: "Lifts mood and motivation for most people; in excess it causes anxiety, racing thoughts and irritability. Regular users often feel merely 'normal' after their dose - much of the lift is relief of withdrawal.",
    overdoseSigns: ["Vomiting, severe agitation, confusion", "Very fast or irregular heartbeat", "Tremors, seizures (large ingestions of pills/powder)"],
    withdrawal: "Headache, fatigue, low mood, irritability and poor concentration for 2-9 days after stopping regular use.",
    color: "#6f4e37",
    easterEgg: "If you find yourself mixing White Monster and Espresso and moving to New York, please consider seeing a medical professional. You may be beyond help."
  },
  {
    id: "2cb",
    name: "2C-B",
    aliases: ["Nexus", "Bees", "Venus", "B"],
    category: "Psychedelic",
    pharmacologyClass: ["psychedelic", "stimulant"],
    addictionPotential: "Very Low - minimal dependence",
    danger: 2,
    legal: "Illegal Schedule I (US); controlled in most countries",
    description: "Synthetic phenethylamine psychedelic developed by Alexander Shulgin. A 5-HT2A agonist that is strongly dose-sensitive: entactogenic and stimulating at low doses, fully psychedelic at higher ones.",
    onset: "20-90m oral; faster and more painful if insufflated",
    duration: "4-8h oral",
    halfLife: "Poorly characterized (~hours)",
    benefits: ["Perceived: gentle, controllable visuals and euphoria (subjective)", "Studied as a therapy adjunct before scheduling", "Reported as shorter and more 'manageable' than LSD by some (subjective)"],
    immediateEffects: ["Colorful visuals, pattern enhancement", "Emotional openness, euphoria, giggliness", "Heightened enjoyment of music and touch", "Nausea, gas or muscle tension on the come-up"],
    shortRisks: ["Anxiety, confusion or panic at high dose", "Raised heart rate and blood pressure", "Nausea and stomach discomfort", "Vasoconstriction, especially when insufflated", "Extreme dose sensitivity - small mg differences change the experience a lot"],
    longEffects: ["Rapid tolerance, cross-tolerant with other psychedelics", "No known lasting physical harm at typical use"],
    longRisks: ["May unmask or worsen psychosis in vulnerable people", "HPPD (persistent perceptual changes) - rare", "Adulteration / misidentification - sold as or mixed with other drugs", "Dangerous with MAOIs; poorly characterized safety at high/frequent doses"],
    brain: "Partial agonist at 5-HT2A serotonin receptors like the classic psychedelics, altering perception and cognition, with added dopaminergic/adrenergic stimulation that gives a body-load and stimulant edge.",
    heart: "Sympathetic stimulation raises heart rate and blood pressure and constricts blood vessels; strain climbs with dose, with other stimulants, or with pre-existing heart conditions.",
    body: "Come-up nausea, gas, muscle tension and mild tremor are common. Pupils dilate and appetite drops. Insufflation is notably painful and more vasoconstrictive than oral use.",
    mind: "Lower doses feel warm, social and entactogenic; higher doses become fully psychedelic with visual and conceptual distortion. Set and setting strongly shape whether it feels joyful or anxious.",
    overdoseSigns: ["Severe agitation, panic, confusion", "Very high heart rate/blood pressure, chest pain", "Hyperthermia, seizures (high doses or mixed with stimulants)"],
    withdrawal: "No physical withdrawal; tolerance resets over days to about a week.",
    color: "#c0468f"
  },
  {
    id: "ghb",
    name: "GHB",
    aliases: ["G", "Liquid Ecstasy", "GBL", "Gina"],
    category: "Depressant",
    pharmacologyClass: ["depressant"],
    addictionPotential: "Moderate-High - dependence with frequent dosing",
    danger: 4,
    legal: "Schedule I illicit; Schedule III as Xyrem for narcolepsy",
    description: "CNS depressant with an extremely narrow margin between an active dose and overdose. Occurs naturally in the body and is prescribed for narcolepsy; illicitly popular in club and chemsex scenes and notorious for overdose ('G-hole') and drug-facilitated assault.",
    onset: "10-20 minutes",
    duration: "1.5-3 hours",
    halfLife: "~30-60 minutes",
    benefits: ["Medical: narcolepsy with cataplexy (sodium oxybate/Xyrem)", "Used for alcohol withdrawal in some countries", "Perceived euphoria, sociability and increased libido"],
    immediateEffects: ["Euphoria, relaxation, sociability", "Lowered inhibitions, increased libido", "Drowsiness and dizziness", "Nausea at higher doses"],
    shortRisks: ["Tiny dose increase can cause sudden unconsciousness ('G-hole')", "Vomiting while unconscious - aspiration risk", "Deadly respiratory depression with alcohol or other depressants", "Amnesia; exploited in assaults"],
    longEffects: ["Rapid tolerance", "Dependence with round-the-clock dosing"],
    longRisks: ["Severe physical dependence", "Life-threatening withdrawal (delirium, seizures) like alcohol/benzos", "Memory and mood problems with heavy use"],
    brain: "Acts on GABA-B and dedicated GHB receptors to depress CNS activity, with a biphasic dopamine effect. Higher doses cause deep sedation or coma and suppress the brainstem drive to breathe.",
    heart: "Slows heart rate and breathing; bradycardia is common. The lethal danger at overdose is respiratory arrest rather than direct heart toxicity, especially when mixed with other depressants.",
    body: "Nausea, vomiting, dizziness and loss of muscle control, which can progress to sudden deep sleep. Dose measured in millilitres, so small errors are dangerous.",
    mind: "Euphoria, disinhibition, sociability and heightened sexual desire, often with amnesia. Comedown and withdrawal bring anxiety, agitation and insomnia.",
    overdoseSigns: ["Unresponsive, cannot be woken", "Slow, shallow or stopped breathing, blue lips", "Vomiting while unconscious, seizures, sudden coma"],
    withdrawal: "In frequent heavy users, severe and potentially fatal: anxiety, tremor, insomnia, racing heart, delirium and seizures within hours of the last dose - medical detox required.",
    color: "#2f7d7d"
  },
  {
    id: "poppers",
    name: "Poppers",
    aliases: ["Amyl Nitrite", "Alkyl Nitrites", "Rush", "Liquid Gold"],
    category: "Inhalant",
    pharmacologyClass: ["inhalant"],
    addictionPotential: "Low - no physical dependence",
    danger: 2,
    legal: "Sold as 'room odorizer'; sale for inhalation restricted in many places",
    description: "Alkyl nitrite vapors inhaled for a brief head-rush and smooth-muscle relaxation. Powerful, fast, short-lived blood-vessel dilators popular in clubbing and among men who have sex with men. Low risk inhaled in isolation, but dangerous if swallowed or combined with erectile-dysfunction drugs.",
    onset: "Seconds (inhaled)",
    duration: "30 seconds to ~2 minutes",
    halfLife: "Minutes (rapidly metabolized)",
    benefits: ["Medical history: amyl nitrite for angina (chest pain) and as a cyanide-poisoning antidote", "Perceived: intense brief head-rush", "Smooth-muscle / sphincter relaxation used during sex"],
    immediateEffects: ["Warm head-rush and light-headedness", "Facial flushing, muscle relaxation", "Brief euphoria, sensation of time slowing", "Increased heart rate"],
    shortRisks: ["Sudden blood-pressure drop - fainting and falls", "Headache and nausea", "Dangerous BP crash if combined with ED drugs (Viagra/Cialis)", "Chemical burns on skin; poisoning if swallowed"],
    longEffects: ["Tolerance to the head-rush", "Possible vision changes with frequent use"],
    longRisks: ["Retinal damage / maculopathy with heavy use", "Methemoglobinemia (blood can't carry oxygen), severe if swallowed", "Rarely fatal if swallowed or mixed with ED drugs or other blood-pressure medication"],
    brain: "Rapid vasodilation briefly changes cerebral blood flow, producing a light-headed head-rush. It does not engage the classic addiction/reward circuitry, so dependence is minimal.",
    heart: "A powerful vasodilator that drops blood pressure sharply and reflexively speeds the heart. Combined with ED drugs or other vasodilators the fall in pressure can cause fainting or, rarely, cardiovascular collapse.",
    body: "Relaxes smooth muscle including blood vessels and sphincters, causing flushing, warmth and headache. Liquid irritates or burns skin and eyes; swallowing causes severe methemoglobinemia.",
    mind: "Brief disinhibition, euphoria and heightened physical sensation that fade within a couple of minutes, sometimes leaving a headache.",
    overdoseSigns: ["Blue or grey lips and skin (methemoglobinemia)", "Severe headache, fainting, very low blood pressure", "Breathing difficulty, loss of consciousness (especially if swallowed)"],
    withdrawal: "No physical withdrawal; at most a headache and psychological habit.",
    color: "#b98a3c"
  },
  {
    id: "morphine",
    name: "Morphine",
    aliases: ["MS Contin", "Morph", "Miss Emma", "M"],
    category: "Opioid",
    pharmacologyClass: ["depressant", "opioid"],
    addictionPotential: "High",
    danger: 4,
    legal: "Schedule II Rx for severe pain",
    description: "Naturally occurring opioid from the poppy and the benchmark against which other opioids are measured. Gold-standard analgesic for severe acute and cancer pain, carrying the classic opioid risks of dependence and respiratory depression.",
    onset: "Oral 30-60m; IV within minutes",
    duration: "IR 3-5h, ER up to 12h",
    halfLife: "~2-4h",
    benefits: ["Severe acute pain (post-surgical, trauma)", "Cancer and palliative / end-of-life pain", "Relief of heart-attack pain and breathlessness", "Cough suppression historically"],
    immediateEffects: ["Pain relief, relaxation, warmth", "Euphoria and drowsiness", "Slowed breathing, constricted pupils", "Itching and nausea"],
    shortRisks: ["Respiratory depression / overdose, far worse with alcohol or benzos", "Nausea, vomiting, constipation", "Low blood pressure, itching", "Impaired driving and judgment"],
    longEffects: ["Tolerance needing higher doses", "Physical dependence", "Chronic constipation, hormonal suppression"],
    longRisks: ["Addiction and escalation to stronger opioids", "Overdose death", "Hormonal and immune effects", "Injection infections if misused IV"],
    brain: "Agonizes mu-opioid receptors, blunting pain perception and triggering dopamine reward while suppressing the brainstem drive to breathe - the mechanism behind fatal overdose.",
    heart: "Lowers heart rate and blood pressure via histamine-mediated vasodilation. The lethal risk is respiratory arrest rather than direct cardiac toxicity.",
    body: "Slows the gut (constipation), causes histamine itch and flushing, constricts pupils, suppresses cough, and can cause urinary retention and nausea.",
    mind: "Relieves both physical and emotional pain, producing calm, contented detachment. On wear-off, anxiety and low mood return, and dependence centers life on avoiding withdrawal.",
    overdoseSigns: ["Unresponsive, limp", "Slow, shallow or stopped breathing, blue lips/fingertips", "Pinpoint pupils - reversible with naloxone"],
    withdrawal: "Rarely fatal but severe flu-like misery: muscle aches, cramps, sweating, chills, nausea, diarrhea, anxiety, insomnia and craving for several days.",
    color: "#8a4b5c"
  }
];

export interface Interaction {
  pair: [string, string];
  level: RiskLevel;
  title: string;
  description: string;
  mechanism: string;
}

const rawInteractions: Interaction[] = [
  { pair: ["alcohol", "benzodiazepines"], level: "extreme", title: "Respiratory failure cascade", description: "Both depress breathing and gag reflex. Coma and death even at moderate doses. Most fatal OD combo.", mechanism: "Dual GABA-A enhancement." },
  { pair: ["alcohol", "heroin"], level: "extreme", title: "Fatal overdose", description: "Alcohol amplifies opioid respiratory depression massively.", mechanism: "Depressant synergism." },
  { pair: ["alcohol", "oxycodone"], level: "extreme", title: "Fatal overdose", description: "Alcohol + opioid = breathing can stop.", mechanism: "Additive CNS depression." },
  { pair: ["alcohol", "fentanyl"], level: "extreme", title: "Almost certain death", description: "Even tiny fentanyl amount with alcohol suppresses breathing beyond recovery.", mechanism: "Ultra-potent opioid + alcohol." },
  { pair: ["benzodiazepines", "heroin"], level: "extreme", title: "Respiratory arrest", description: "Gold standard lethal combo seen in overdoses.", mechanism: "GABA + mu opioid" },
  { pair: ["benzodiazepines", "oxycodone"], level: "extreme", title: "Overdose", description: "FDA black box warning for co-prescribing.", mechanism: "GABA+opioid" },
  { pair: ["benzodiazepines", "fentanyl"], level: "extreme", title: "Instant fatal depression", description: "Fentanyl + benzo tiny margin.", mechanism: "Same" },
  { pair: ["alcohol", "cocaine"], level: "high", title: "Cocaethylene toxicity", description: "Liver forms cocaethylene which lasts longer and more cardiac toxic than cocaine alone, plus masks drunkenness leading to more bingeing.", mechanism: "Metabolite + heart stress." },
  { pair: ["cocaine", "heroin"], level: "extreme", title: "Speedball masking", description: "Stimulant hides opioid sedation then when cocaine wears off opioid overdose strikes alone. Heart pulls opposite directions.", mechanism: "Opposing autonomic drives." },
  { pair: ["alcohol", "nicotine"], level: "moderate", title: "Enhanced addictive loop", description: "Each increases craving for other, plus higher heart load and nausea.", mechanism: "Cross-cue reinforcement." },
  { pair: ["cocaine", "amphetamine"], level: "extreme", title: "Cardiac meltdown", description: "Two strong vasoconstrictive stimulants. Heart attack, stroke, extreme anxiety, seizure.", mechanism: "Catecholamine overload" },
  { pair: ["cocaine", "methamphetamine"], level: "extreme", title: "Sympathetic crisis", description: "Severe vasospasm, hypertension, hyperthermia, rhabdomyolysis.", mechanism: "Additive stimulant toxicity" },
  { pair: ["mdma", "cocaine"], level: "high", title: "Hyperthermia & heart overload", description: "Both raise temperature and BP. Plus serotonin/dopamine load.", mechanism: "Stimulant + hyperthermia" },
  { pair: ["mdma", "amphetamine"], level: "high", title: "Serotonin strain + heart", description: "Increased neurotoxic and cardiac risk, plus severe comedown.", mechanism: "Amp + serotonin stress" },
  { pair: ["mdma", "methamphetamine"], level: "extreme", title: "Neurotoxic amplification", description: "Massively increases chance of serotonin syndrome, hyperthermia, brain vessel issues.", mechanism: "High dop+serotonin" },
  { pair: ["mdma", "alcohol"], level: "high", title: "Dehydration & masked intoxication", description: "Alcohol hides MDMA overheating and dehydrates while liver stressed.", mechanism: "Heat load" },
  { pair: ["cannabis", "alcohol"], level: "moderate", title: "Double impairment & greens", description: "Cannabis reduces nausea that would normally stop drinking, more vomiting risk. Anxiety, dizziness, impaired coordination far worse together.", mechanism: "Cross impairment" },
  { pair: ["cannabis", "lsd"], level: "moderate", title: "Trip intensifier", description: "Often greatly intensifies visuals and confusion, can turn manageable trip into panic and paranoia.", mechanism: "THC 5-HT2A modulation" },
  { pair: ["cannabis", "psilocybin"], level: "moderate", title: "Trip intensifier", description: "Similar to LSD, can cause anxiety loop and prolong perceptual intensity.", mechanism: "Same" },
  { pair: ["lsd", "mdma"], level: "high", title: "Candyflipping - sensory overload", description: "Powerful synergy; can be overwhelming psychologically and dehydrating. Small dose anxiety risk.", mechanism: "Serotonin + 5-HT2A" },
  { pair: ["ketamine", "alcohol"], level: "extreme", title: "Vomit + coma", description: "Both nauseating and depress breathing. High risk of aspiration, inability to self-rescue.", mechanism: "Depressant + vomit" },
  { pair: ["ketamine", "benzodiazepines"], level: "high", title: "Airway compromise", description: "Sedation + dissociation makes airway protection poor.", mechanism: "Dissociative + GABA" },
  { pair: ["ketamine", "heroin"], level: "extreme", title: "Respiratory depression", description: "Classic anaesthetic danger - ketamine with opioids raises apnea and loss of airway reflex.", mechanism: "Opioid + dissociative depression" },
  { pair: ["ketamine", "oxycodone"], level: "extreme", title: "Respiratory depression", description: "Opioid + ketamine severely depresses breathing and ability to vomit clear.", mechanism: "Opioid + dissociative" },
  { pair: ["ketamine", "fentanyl"], level: "extreme", title: "Respiratory arrest", description: "Fentanyl plus ketamine - very high apnea and chest rigidity risk.", mechanism: "Potent opioid + dissociative" },
  { pair: ["nicotine", "cocaine"], level: "high", title: "Cardiac stacking", description: "Two vasoconstrictors raise MI risk.", mechanism: "Sympathetic load" },
  { pair: ["nicotine", "amphetamine"], level: "high", title: "Heart racing overload", description: "Stacked stimulation, hypertension, anxiety.", mechanism: "Stimulant additive" },
  { pair: ["anabolic-steroids", "cocaine"], level: "high", title: "Heart thickening + spasm", description: "Steroid heart remodeling plus cocaine coronary spasm = high MI risk.", mechanism: "Cardiac remodeling + vasospasm" },
  { pair: ["anabolic-steroids", "amphetamine"], level: "high", title: "BP crisis", description: "Both raise pressure, strain left ventricle.", mechanism: "Hypertension synergy" },
  { pair: ["nitrous-oxide", "alcohol"], level: "high", title: "Oxygen drop + fall", description: "Both cause falls, hypoxia, confusion.", mechanism: "Hypoxia + sedation" },
  { pair: ["nitrous-oxide", "ketamine"], level: "moderate", title: "Double dissociative blackout", description: "Profound dissociation, risk of injury, B12 depletion amplified.", mechanism: "NMDA block double" },
  { pair: ["pcp", "alcohol"], level: "extreme", title: "Psychosis + respiratory failure", description: "Unpredictable violence, seizures, coma.", mechanism: "NMDA + GABA chaos" },
  { pair: ["pcp", "cocaine"], level: "extreme", title: "Hypertensive crisis + psychosis", description: "Extreme agitation, hyperthermia, stroke.", mechanism: "Sympathetic + NMDA storm" },
  { pair: ["fentanyl", "cocaine"], level: "extreme", title: "Deadly masking again", description: "Same as heroin speedball but far less margin due to fentanyl potency.", mechanism: "Masking" },
  { pair: ["dmt", "alcohol"], level: "moderate", title: "Confusion + vomiting", description: "Dampens clear DMT headspace, raises nausea and anxiety.", mechanism: "Depressant muddy" },
  { pair: ["dmt", "cannabis"], level: "moderate", title: "Anxiety amplification", description: "THC can make DMT onset more chaotic and lingering.", mechanism: "Anxiety loop" },
  { pair: ["psilocybin", "amphetamine"], level: "high", title: "Anxiety + heart", description: "Stimulant anxiety undermines safe psychedelic set, hypertension.", mechanism: "Tachycardia + panic" },
  { pair: ["lsd", "amphetamine"], level: "high", title: "Psychosis risk elevation", description: "Stimulant pushes already high thought-racing into paranoia.", mechanism: "Dopamine + 5-HT2A" },
  { pair: ["caffeine", "cocaine"], level: "high", title: "Cardiac stacking", description: "Two vasoconstrictive stimulants raise heart rate and blood pressure together, increasing arrhythmia and chest-pain risk.", mechanism: "Additive sympathetic load" },
  { pair: ["caffeine", "amphetamine"], level: "high", title: "Overstimulation & hypertension", description: "Stacked stimulation drives jitteriness, insomnia, raised blood pressure and arrhythmia risk.", mechanism: "Catecholamine + adenosine block" },
  { pair: ["caffeine", "methamphetamine"], level: "high", title: "Heart & heat overload", description: "Additive cardiac and CNS stimulation plus dehydration; caffeine masks fatigue leading to overexertion.", mechanism: "Additive stimulant toxicity" },
  { pair: ["caffeine", "mdma"], level: "high", title: "Hyperthermia amplification", description: "Caffeine worsens MDMA overheating and seizure risk and hides fatigue, encouraging dangerous overexertion. Often a hidden cut in 'party pills'.", mechanism: "Stimulant + thermogenic stress" },
  { pair: ["caffeine", "nicotine"], level: "moderate", title: "Stimulant stacking", description: "Common combo; additive heart rate, anxiety and jitter. Smoking also speeds caffeine clearance, feeding heavier intake.", mechanism: "Sympathetic additive" },
  { pair: ["caffeine", "alcohol"], level: "moderate", title: "Wide-awake drunk", description: "Caffeine masks alcohol's sedation so people feel less drunk and drink more while just as impaired - the energy-drink-plus-liquor risk.", mechanism: "Masked intoxication" },
  { pair: ["caffeine", "2cb"], level: "moderate", title: "Anxious body-load", description: "Caffeine adds tachycardia and anxiety on top of 2C-B's own stimulation, making the trip jittery and heart-heavy.", mechanism: "Stimulant + 5-HT2A" },
  { pair: ["2cb", "mdma"], level: "high", title: "Nexus flip - heart & heat", description: "Popular combo but stacks serotonin release with 5-HT2A activation and doubles cardiac and hyperthermia load.", mechanism: "Serotonin + phenethylamine stimulation" },
  { pair: ["2cb", "amphetamine"], level: "high", title: "Stimulant + psychedelic strain", description: "Tachycardia, hypertension and anxiety rise, pushing a manageable trip toward panic or paranoia.", mechanism: "Dopamine + 5-HT2A" },
  { pair: ["2cb", "cocaine"], level: "high", title: "Vasoconstriction + anxious trip", description: "Additive vasoconstriction and cardiac strain, plus cocaine anxiety souring the headspace.", mechanism: "Sympathetic overload" },
  { pair: ["2cb", "alcohol"], level: "moderate", title: "Muddied headspace", description: "Alcohol dulls the trip, worsens nausea and dehydration, and impairs judgment during altered perception.", mechanism: "Depressant muddy" },
  { pair: ["2cb", "cannabis"], level: "moderate", title: "Trip intensifier", description: "THC can sharply amplify visuals and confusion, turning a manageable 2C-B trip into anxiety or paranoia.", mechanism: "THC 5-HT2A modulation" },
  { pair: ["2cb", "lsd"], level: "moderate", title: "Psychedelic stacking", description: "Combined 5-HT2A intensity can be overwhelming and unpredictable even though the two are chemically related.", mechanism: "5-HT2A synergy" },
  { pair: ["morphine", "alcohol"], level: "extreme", title: "Fatal respiratory depression", description: "Alcohol amplifies opioid suppression of breathing - a leading cause of opioid overdose death.", mechanism: "Additive CNS depression" },
  { pair: ["morphine", "benzodiazepines"], level: "extreme", title: "Respiratory arrest", description: "Opioid plus benzo carries an FDA black-box warning; breathing can stop.", mechanism: "GABA + mu opioid" },
  { pair: ["morphine", "heroin"], level: "extreme", title: "Opioid stacking overdose", description: "Two mu-opioid agonists together vastly raise overdose risk with no added benefit.", mechanism: "Additive mu-opioid load" },
  { pair: ["morphine", "cocaine"], level: "extreme", title: "Speedball masking", description: "Stimulant hides opioid sedation until it wears off, then opioid respiratory depression strikes; heart pulled in opposite directions.", mechanism: "Opposing autonomic drives" },
  { pair: ["morphine", "ketamine"], level: "extreme", title: "Respiratory depression", description: "Opioid plus dissociative severely depresses breathing and airway reflexes while sedated.", mechanism: "Opioid + dissociative depression" },
  { pair: ["ghb", "alcohol"], level: "extreme", title: "Coma & aspiration", description: "Two depressants with a tiny combined margin - vomiting, respiratory failure and coma. A very common fatal mix.", mechanism: "GABA-B + GABA-A depression" },
  { pair: ["ghb", "benzodiazepines"], level: "extreme", title: "Respiratory failure", description: "Stacked sedation stops breathing and abolishes the gag reflex.", mechanism: "Additive CNS depression" },
  { pair: ["ghb", "heroin"], level: "extreme", title: "Respiratory arrest", description: "GHB plus opioid crushes the drive to breathe - high overdose fatality.", mechanism: "Depressant + mu opioid" },
  { pair: ["ghb", "oxycodone"], level: "extreme", title: "Respiratory arrest", description: "Opioid plus GHB severely depresses breathing and the ability to vomit clear.", mechanism: "Depressant + opioid" },
  { pair: ["ghb", "fentanyl"], level: "extreme", title: "Almost certain overdose", description: "Ultra-potent opioid plus GHB leaves essentially no safety margin for breathing.", mechanism: "Potent opioid + depressant" },
  { pair: ["ghb", "morphine"], level: "extreme", title: "Respiratory arrest", description: "GHB plus morphine stacks two breathing suppressants - high risk of coma and death.", mechanism: "Depressant + opioid" },
  { pair: ["ghb", "ketamine"], level: "extreme", title: "Unconsciousness & aspiration", description: "Sedation plus dissociation removes airway protection; high risk of choking while unresponsive.", mechanism: "Depressant + dissociative" },
  { pair: ["ghb", "mdma"], level: "high", title: "Masked sedation - redose overdose", description: "MDMA hides GHB's sedation so users redose GHB and slip into a G-hole; heart works brakes and accelerator at once.", mechanism: "Up/down masking" },
  { pair: ["ghb", "poppers"], level: "moderate", title: "Blood pressure crash", description: "Poppers' sudden vasodilation on top of GHB sedation raises fainting and collapse risk.", mechanism: "Hypotension + sedation" },
  { pair: ["poppers", "alcohol"], level: "high", title: "Fainting & BP collapse", description: "Both lower blood pressure; together they cause dizziness, fainting and falls.", mechanism: "Additive vasodilation" },
  { pair: ["poppers", "cocaine"], level: "high", title: "Cardiovascular whiplash", description: "Cocaine spikes blood pressure and heart rate while poppers crash it - dangerous swings and arrhythmia risk.", mechanism: "Opposing vascular drives" },
  { pair: ["poppers", "methamphetamine"], level: "high", title: "Cardiovascular strain", description: "Stimulant tachycardia and hypertension against sudden vasodilation stress the heart.", mechanism: "Sympathetic + vasodilation conflict" },
  { pair: ["poppers", "mdma"], level: "high", title: "Heart strain & BP swings", description: "A common chemsex combo; stacked heart rate and clashing blood-pressure effects strain the cardiovascular system.", mechanism: "Stimulant + vasodilation" },
  { pair: ["poppers", "amphetamine"], level: "high", title: "Cardiovascular strain", description: "Stimulant load plus abrupt vasodilation raises the risk of fainting, arrhythmia and chest pain.", mechanism: "Sympathetic + vasodilation conflict" },
];

export function getInteraction(aId: string, bId: string): Interaction | undefined {
  const [x, y] = [aId, bId].sort();
  return rawInteractions.find(i => {
    const [ix, iy] = i.pair.sort();
    return ix === x && iy === y;
  });
}

// fallback by pharmacology class
export function getGenericInteraction(a: Drug, b: Drug): Interaction {
  const exists = getInteraction(a.id, b.id);
  if (exists) return exists;
  const aDep = a.pharmacologyClass.includes("depressant") || a.pharmacologyClass.includes("opioid");
  const bDep = b.pharmacologyClass.includes("depressant") || b.pharmacologyClass.includes("opioid");
  const aStim = a.pharmacologyClass.includes("stimulant");
  const bStim = b.pharmacologyClass.includes("stimulant");
  const aPsy = a.pharmacologyClass.includes("psychedelic");
  const bPsy = b.pharmacologyClass.includes("psychedelic");

  if (aDep && bDep) {
    return { pair: [a.id, b.id], level: "high", title: "Double Depressant", description: `${a.name} + ${b.name} both slow breathing and consciousness. Risk of overdose, aspiration and coma rises more than additive.`, mechanism: "Additive CNS depression" };
  }
  if (aStim && bStim) {
    return { pair: [a.id, b.id], level: "high", title: "Double Stimulant Load", description: `${a.name} + ${b.name} push heart rate, blood pressure, temperature and anxiety together. Risk of heart arrhythmia, seizure, heat stroke.`, mechanism: "Sympathetic overload" };
  }
  if ((aDep && bStim) || (aStim && bDep)) {
    return { pair: [a.id, b.id], level: "moderate", title: "Up/Down Masking", description: `One masks the other's sedation or stimulation, encouraging redosing and unexpected strain. Heart works both brakes and accelerator.`, mechanism: "Masking + autonomic conflict" };
  }
  if ((aPsy && bStim) || (aStim && bPsy)) {
    return { pair: [a.id, b.id], level: "moderate", title: "Mind racing + visuals", description: `Stimulant anxiety can make psychedelic trip paranoid and tachycardic.`, mechanism: "Anxiety amplification" };
  }
  if (aPsy && bPsy) {
    return { pair: [a.id, b.id], level: "moderate", title: "Psychedelic stacking", description: `Combined intensity may be overwhelming and unpredictable even if chemically similar.`, mechanism: "5-HT2A synergy" };
  }
  return { pair: [a.id, b.id], level: "low", title: "Unpredictable mixture", description: `No well-known lethal synergy between ${a.name} and ${b.name}, but impurity, dose and individual health still can make interaction dangerous. Never assume safe.`, mechanism: "Individual variance" };
}

export function assessMix(selected: Drug[]): { level: RiskLevel, interactions: Interaction[], summary: string } {
  if (selected.length < 2) {
    return { level: "low", interactions: [], summary: "Select at least 2 substances to see interaction analysis." };
  }
  const interactions: Interaction[] = [];
  for (let i = 0; i < selected.length; i++) {
    for (let j = i + 1; j < selected.length; j++) {
      interactions.push(getGenericInteraction(selected[i], selected[j]));
    }
  }
  const order: Record<RiskLevel, number> = { low: 0, moderate: 1, high: 2, extreme: 3 };
  let max: RiskLevel = "low";
  for (const inter of interactions) {
    if (order[inter.level] > order[max]) max = inter.level;
  }
  const extremeCount = interactions.filter(i => i.level === "extreme").length;
  const highCount = interactions.filter(i => i.level === "high").length;
  let summary = "";
  if (max === "extreme") summary = `Extreme danger: ${extremeCount} pair(s) in this mix are known to cause fatal respiratory arrest, cardiac arrest or hyperthermia. Combining these significantly increases death risk. Avoid.`;
  else if (max === "high") summary = `High risk mix: ${highCount} high-risk pairs. Expect strong heart strain, overheating, severe anxiety or profound sedation. Dose-response unpredictable.`;
  else if (max === "moderate") summary = `Moderate risk: effects amplify or mask each other, raising chance of panic, nausea, falls or poor judgment. Start low mindset if any use but safer to avoid mixing.`;
  else summary = `Low documented lethal synergy, but purity and dose still matter. Every combination carries unknown individual heart, liver and mental health response.`;

  return { level: max, interactions: interactions.sort((a,b)=>order[b.level]-order[a.level]), summary };
}

export const categories = ["All", "Stimulant", "Depressant", "Opioid", "Psychedelic", "Cannabinoid", "Dissociative", "Empathogen", "Steroid", "Inhalant"] as const;
