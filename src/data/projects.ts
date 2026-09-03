// Placeholder research projects. Replace with real work.

export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: 'Active' | 'Ongoing' | 'Seeking collaborators' | 'Wrapping up';
  summary: string;
  approach: string[];
  collaborators: string[];
  funding?: string;
  topics: string[];
}

export const projects: Project[] = [
  {
    id: 'cipoc',
    title: 'Cancer Identification and Precision Oncology Center (CIPOC)',
    tagline: 'AI methods for rapid identification and characterization of cancer cases.',
    status: 'Active',
    summary:
      'Developing AI/ML pipelines for extracting clinical variables from free-text clinical notes to decrease the lag between diagnosis and cancer registration, reduce registrar burden, and help clinicians identify potential signs of cancer from patient notes in real time.',
    approach: [
      'Bespoke agents and workflow orchestration',
      'Evidentiary provenance, deterministic validation, and auditability across all LLM interactions',
    ],
    collaborators: ['NC TraCS', 'RENCI', 'UNC Health'],
    funding: 'ARPA-H',
    topics: ['NLP', 'Cancer', 'Clinical', 'LLM', 'AI'],
  },
  {
    id: 'bdc',
    title: 'Expanding Image Analysis Capabilities - NHLBI BioData Catalyst',
    tagline: 'Tools and infrastructure for training and deploying deep learning models in BDC.',
    status: 'Active',
    summary:
      'Creating image analysis tools for multiple imaging modalities, centered around training deep learning models and incorporating foundation or custom models into analytic workflows in the NHLBI BioData Catalyst ecosystem.',
    approach: [
      'Cloud-deployable, containerized, and generalizable tools for training and inference',
      'Flavored deployments for popular foundation models',
      'Interactive documentation with demonstration projects',
      'Workflow adapters for common downstream applications',
    ],
    collaborators: ['RENCI', 'RTI'],
    funding: 'NHLBI',
    topics: ['Imaging', 'AI'],
  },
];
