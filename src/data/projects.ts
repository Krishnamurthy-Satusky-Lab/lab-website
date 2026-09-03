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
    id: 'clinical-nlp-equity',
    title: 'Clinical NLP for Underserved Populations',
    tagline: 'Methods for extracting clinical and social information from free-text notes.',
    status: 'Active',
    summary:
      'We develop language models that extract social and clinical information from free-text notes, then compare their performance across patient groups and care settings.',
    approach: [
      'Domain-adapted transformer models fine-tuned on de-identified clinical narratives',
      'Weak supervision to scale annotation across specialties and safety-net settings',
      'Subgroup error auditing built into every model release',
    ],
    collaborators: ['UNC Health', 'Piedmont Community Clinics', 'Dept. of Family Medicine'],
    funding: 'NIH / NLM R01 (pending)',
    topics: ['NLP', 'Health Equity', 'Clinical'],
  },
  {
    id: 'equitable-risk-prediction',
    title: 'Equitable Clinical Risk Prediction',
    tagline: 'Evaluation and calibration of risk models across patient subgroups.',
    status: 'Active',
    summary:
      'We study how predictive models perform across race, sex, and payer groups, with a focus on calibration, external validation, and deployment reporting.',
    approach: [
      'Multi-site external validation with subgroup-stratified calibration',
      'Fairness-aware recalibration that preserves clinical utility',
      'Model cards and decision-curve reporting for deployment review',
    ],
    collaborators: ['UNC Cardiology', 'Duke AI Health'],
    funding: 'AHRQ R21',
    topics: ['Fairness', 'Prediction', 'Clinical'],
  },
  {
    id: 'federated-hospital-learning',
    title: 'Privacy-Preserving Federated Learning',
    tagline: 'Multi-institution model training with data retained at each hospital.',
    status: 'Ongoing',
    summary:
      'We build federated and differentially private training pipelines for multi-institution studies in which patient data remains at each participating hospital.',
    approach: [
      'Federated averaging with differential-privacy budgets per site',
      'Heterogeneity-robust aggregation for imbalanced institutions',
      'Open tooling for IRB-friendly multi-site studies',
    ],
    collaborators: ['6 partner health systems', 'RENCI'],
    funding: 'NSF SaTC',
    topics: ['Privacy', 'Federated', 'Systems'],
  },
  {
    id: 'public-health-llm',
    title: 'LLM Decision Support for Public Health',
    tagline: 'Retrieval-based language tools for local public-health staff.',
    status: 'Seeking collaborators',
    summary:
      'We study retrieval-based language assistants for policy and epidemiology questions, including citation accuracy, abstention, and use by public-health staff.',
    approach: [
      'Retrieval-augmented generation over vetted guideline corpora',
      'Abstention and citation requirements evaluated against expert panels',
      'Human-factors studies with department staff in the loop',
    ],
    collaborators: ['NC DHHS (exploratory)', 'Gillings School of Public Health'],
    topics: ['LLMs', 'Public Health', 'Human-AI'],
  },
  {
    id: 'health-equity-benchmark',
    title: 'A Benchmark for Health-Equity Evaluation',
    tagline: 'Shared tasks and documentation for evaluating health-equity outcomes.',
    status: 'Ongoing',
    summary:
      'We are developing a documented benchmark suite for evaluating differences in clinical AI performance across patient groups.',
    approach: [
      'Curated tasks with subgroup labels and documented provenance',
      'Datasheets and reproducible evaluation harness',
      'Community governance for task contribution and review',
    ],
    collaborators: ['Open call; see Contact'],
    topics: ['Benchmarks', 'Health Equity', 'Open Science'],
  },
];
