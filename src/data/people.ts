// Placeholder lab members. Replace names, bios, and links with real people.

export interface Person {
  name: string;
  role: string;
  group: 'pi' | 'postdoc' | 'phd' | 'staff' | 'affiliate' | 'alumni';
  blurb: string;
  focus?: string;
  links?: { email?: string; scholar?: string; github?: string; site?: string };
  placement?: string; // for alumni
}

export const people: Person[] = [
  {
    name: 'Dr. Avery Chen',
    role: 'Principal Investigator · Assistant Professor, SDIS',
    group: 'pi',
    blurb:
      'Avery leads the lab’s work on trustworthy clinical AI, with a focus on methods that hold up across the full range of patients a health system actually serves. Before UNC, they trained in biomedical informatics and worked with safety-net health systems on deployment.',
    focus: 'Clinical NLP · fairness · human-AI decision making',
    links: { email: 'avery.chen@unc.edu' },
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Postdoctoral Fellow',
    group: 'postdoc',
    blurb: 'Federated learning and differential privacy for multi-hospital studies.',
    focus: 'Privacy-preserving ML',
  },
  {
    name: 'Dr. Marcus Bell',
    role: 'Postdoctoral Fellow',
    group: 'postdoc',
    blurb: 'Evaluation and calibration of clinical risk models across subgroups.',
    focus: 'Fair prediction · calibration',
  },
  {
    name: 'Sofia Ramirez',
    role: 'PhD Student, Information Science',
    group: 'phd',
    blurb: 'Retrieval-grounded language assistants for public-health decision support.',
    focus: 'LLMs · public health',
  },
  {
    name: 'Daniel Okoro',
    role: 'PhD Student, Information Science',
    group: 'phd',
    blurb: 'Extracting social determinants of health from clinical narratives.',
    focus: 'Clinical NLP',
  },
  {
    name: 'Hana Kim',
    role: 'PhD Student, Computer Science',
    group: 'phd',
    blurb: 'Robust aggregation methods for heterogeneous federated networks.',
    focus: 'Federated systems',
  },
  {
    name: 'Jordan Fields',
    role: 'PhD Student, Information Science',
    group: 'phd',
    blurb: 'Human-factors studies of AI decision support with frontline staff.',
    focus: 'Human-AI interaction',
  },
  {
    name: 'Taylor Reed',
    role: 'Lab Manager & Research Associate',
    group: 'staff',
    blurb: 'Coordinates data governance, IRB submissions, and reproducible pipelines.',
    focus: 'Research operations',
  },
  {
    name: 'Dr. Lena Vogel',
    role: 'Affiliate · Gillings School of Public Health',
    group: 'affiliate',
    blurb: 'Epidemiologist collaborating on public-health decision support.',
  },
  {
    name: 'Dr. Samuel Ortiz',
    role: 'Affiliate · UNC Health',
    group: 'affiliate',
    blurb: 'Physician-scientist advising clinical deployment and validation.',
  },
  {
    name: 'Dr. Grace Liu',
    role: 'PhD, 2025',
    group: 'alumni',
    blurb: 'Dissertation on subgroup calibration of clinical risk scores.',
    placement: 'Now: Research Scientist, Stanford AIMI',
  },
  {
    name: 'Omar Haddad',
    role: 'MS, 2024',
    group: 'alumni',
    blurb: 'Thesis on weak supervision for clinical text.',
    placement: 'Now: ML Engineer, Epic',
  },
];

export const groupLabels: Record<Person['group'], string> = {
  pi: 'Principal Investigator',
  postdoc: 'Postdoctoral Fellows',
  phd: 'PhD Students',
  staff: 'Staff',
  affiliate: 'Affiliates & Collaborators',
  alumni: 'Alumni',
};
