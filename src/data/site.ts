// Central site config. Swap these placeholder values for the real lab identity.

export const site = {
  name: 'Carolina Health AI Lab',
  shortName: 'CHAI Lab',
  tagline: 'Clinical and public health informatics.',
  school: 'UNC School of Data & Information Sciences',
  university: 'The University of North Carolina at Chapel Hill',
  mission:
    'We study how machine learning can support clinical care and public health, with an emphasis on evaluation, explanability, and responsible deployment.',
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
