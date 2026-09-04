// Placeholder lab members. Replace names, bios, and links with real people.

export interface Person {
  name: string;
  role: string;
  group: 'faculty' | 'postdoc' | 'phd' | 'undergrad' | 'staff' | 'affiliate' | 'alumni';
  /** Renders this faculty member as the prominent featured card. Set false
      (or omit) to list all faculty as equal-sized cards instead. */
  lead?: boolean;
  blurb: string;
  focus?: string;
  links?: { email?: string; scholar?: string; github?: string; site?: string };
  placement?: string; // for alumni
}

export const people: Person[] = [
  {
    name: 'Ashok Krishnamurthy',
    role: 'Principal Investigator · Professor, SDIS',
    group: 'faculty',
    lead: true,
    blurb:
      'Data analytics with applications in health care and social science, high-end computing for modeling and simulation, advanced computational tools to improve industrial productivity through virtual product and process development, digital processing to extract information from images, audio and other signals.',
    focus: 'Clinical NLP · fairness · human-AI decision making',
    links: { email: 'ashok@renci.org' },
  },
  {
    name: 'Matt Satusky',
    role: 'Research Scientist, RENCI',
    group: 'faculty',
    blurb:
      'Developing explainable AI applications for health and public safety.',
    focus: 'Clinical NLP · AI explainability · Agentic workflows',
    links: { email: 'satusky@renci.org' },
  },
  {
    name: 'Swaroopa Dola',
    role: 'Postdoctoral Fellow',
    group: 'postdoc',
    blurb: 'AI methods for building clinical knowledge.',
    focus: 'Knowledge graphs · Clinical NLP',
  },
  {
    name: 'Juan Garcia',
    role: 'Postdoctoral Fellow',
    group: 'postdoc',
    blurb: 'Quantification of uncertainty in AI models.',
    focus: 'AI uncertainty · Model architecture',
  },
];

export const groupLabels: Record<Person['group'], string> = {
  faculty: 'Faculty',
  postdoc: 'Postdoctoral Fellows',
  phd: 'PhD Students',
  undergrad: 'Undergraduate Researchers',
  staff: 'Staff',
  affiliate: 'Affiliates & Collaborators',
  alumni: 'Alumni',
};
