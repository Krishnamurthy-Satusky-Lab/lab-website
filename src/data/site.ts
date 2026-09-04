// Central site identity and contact information.

export const site = {
  name: 'Carolina TRACE Lab',
  shortName: 'TRACE Lab',
  tagline: 'Transparent and Reliable AI for Complex Environments.',
  school: 'UNC School of Data & Information Sciences',
  university: 'The University of North Carolina at Chapel Hill',
  mission:
    'We develop AI methods and systems that explain their outputs, quantify uncertainty, and operate reliably across complex real-world environments.',
  email: 'ashok@renci.org',
  location: 'Manning Hall, UNC-Chapel Hill, Chapel Hill, NC 27599',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'People', href: '/people/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Contact', href: '/contact/' },
] as const;
