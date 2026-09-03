// Placeholder publications. Replace with the lab's real citations + BibTeX.

export interface Publication {
  id: string;
  authors: string;
  title: string;
  venue: string;
  year: number;
  topic: string;
  links?: { doi?: string; pdf?: string; code?: string };
  bibtex: string;
}

export const publications: Publication[] = [
  {
    id: 'placeholder',
    authors: 'authors',
    title: 'title',
    venue: 'venue',
    year: 2026,
    topic: 'topic',
    bibtex: `@inproceedings{placeholder,
  title     = {title},
  author    = {authors},
  booktitle = {venue},
  year      = {2026}
}`,
  },
];

export const topics = ['All', ...Array.from(new Set(publications.map((p) => p.topic)))];
export const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);
