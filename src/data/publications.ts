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
    id: 'chen2025equity',
    authors: 'Chen A., Bell M., Ramirez S., Nair P.',
    title: 'Subgroup calibration is not enough: rethinking equity reporting for clinical risk models',
    venue: 'ACM Conference on Health, Inference, and Learning (CHIL)',
    year: 2025,
    topic: 'Fairness',
    bibtex: `@inproceedings{chen2025equity,
  title     = {Subgroup calibration is not enough: rethinking equity reporting for clinical risk models},
  author    = {Chen, Avery and Bell, Marcus and Ramirez, Sofia and Nair, Priya},
  booktitle = {ACM Conference on Health, Inference, and Learning (CHIL)},
  year      = {2025}
}`,
  },
  {
    id: 'okoro2025sdoh',
    authors: 'Okoro D., Chen A.',
    title: 'Extracting social determinants of health from clinical notes with weak supervision',
    venue: 'Journal of the American Medical Informatics Association (JAMIA)',
    year: 2025,
    topic: 'NLP',
    bibtex: `@article{okoro2025sdoh,
  title   = {Extracting social determinants of health from clinical notes with weak supervision},
  author  = {Okoro, Daniel and Chen, Avery},
  journal = {Journal of the American Medical Informatics Association (JAMIA)},
  year    = {2025}
}`,
  },
  {
    id: 'nair2025federated',
    authors: 'Nair P., Kim H., Chen A.',
    title: 'Heterogeneity-robust federated learning across imbalanced health systems',
    venue: 'Machine Learning for Healthcare (MLHC)',
    year: 2025,
    topic: 'Privacy',
    bibtex: `@inproceedings{nair2025federated,
  title     = {Heterogeneity-robust federated learning across imbalanced health systems},
  author    = {Nair, Priya and Kim, Hana and Chen, Avery},
  booktitle = {Machine Learning for Healthcare (MLHC)},
  year      = {2025}
}`,
  },
  {
    id: 'ramirez2024rag',
    authors: 'Ramirez S., Vogel L., Chen A.',
    title: 'Grounded and abstaining: retrieval-augmented assistants for public-health decision support',
    venue: 'AMIA Annual Symposium',
    year: 2024,
    topic: 'LLMs',
    bibtex: `@inproceedings{ramirez2024rag,
  title     = {Grounded and abstaining: retrieval-augmented assistants for public-health decision support},
  author    = {Ramirez, Sofia and Vogel, Lena and Chen, Avery},
  booktitle = {AMIA Annual Symposium},
  year      = {2024}
}`,
  },
  {
    id: 'bell2024calibration',
    authors: 'Bell M., Chen A.',
    title: 'Decision-curve reporting for deployment review of clinical prediction models',
    venue: 'npj Digital Medicine',
    year: 2024,
    topic: 'Prediction',
    bibtex: `@article{bell2024calibration,
  title   = {Decision-curve reporting for deployment review of clinical prediction models},
  author  = {Bell, Marcus and Chen, Avery},
  journal = {npj Digital Medicine},
  year    = {2024}
}`,
  },
  {
    id: 'chen2024benchmark',
    authors: 'Chen A., Liu G., Okoro D.',
    title: 'Toward a community benchmark for health-equity evaluation of clinical AI',
    venue: 'NeurIPS Datasets & Benchmarks Track',
    year: 2024,
    topic: 'Benchmarks',
    bibtex: `@inproceedings{chen2024benchmark,
  title     = {Toward a community benchmark for health-equity evaluation of clinical AI},
  author    = {Chen, Avery and Liu, Grace and Okoro, Daniel},
  booktitle = {Advances in Neural Information Processing Systems (Datasets and Benchmarks Track)},
  year      = {2024}
}`,
  },
  {
    id: 'kim2023aggregation',
    authors: 'Kim H., Nair P., Chen A.',
    title: 'Robust aggregation under institutional imbalance in federated clinical networks',
    venue: 'IEEE Journal of Biomedical and Health Informatics',
    year: 2023,
    topic: 'Privacy',
    bibtex: `@article{kim2023aggregation,
  title   = {Robust aggregation under institutional imbalance in federated clinical networks},
  author  = {Kim, Hana and Nair, Priya and Chen, Avery},
  journal = {IEEE Journal of Biomedical and Health Informatics},
  year    = {2023}
}`,
  },
  {
    id: 'liu2023fair',
    authors: 'Liu G., Bell M., Chen A.',
    title: 'When risk scores fail quietly: auditing subgroup drift after deployment',
    venue: 'ACM Conference on Fairness, Accountability, and Transparency (FAccT)',
    year: 2023,
    topic: 'Fairness',
    bibtex: `@inproceedings{liu2023fair,
  title     = {When risk scores fail quietly: auditing subgroup drift after deployment},
  author    = {Liu, Grace and Bell, Marcus and Chen, Avery},
  booktitle = {ACM Conference on Fairness, Accountability, and Transparency (FAccT)},
  year      = {2023}
}`,
  },
  {
    id: 'fields2023human',
    authors: 'Fields J., Ortiz S., Chen A.',
    title: 'What clinicians actually do with AI advice: a human-factors study of alert response',
    venue: 'CHI Conference on Human Factors in Computing Systems',
    year: 2023,
    topic: 'Human-AI',
    bibtex: `@inproceedings{fields2023human,
  title     = {What clinicians actually do with AI advice: a human-factors study of alert response},
  author    = {Fields, Jordan and Ortiz, Samuel and Chen, Avery},
  booktitle = {CHI Conference on Human Factors in Computing Systems},
  year      = {2023}
}`,
  },
  {
    id: 'chen2022adapt',
    authors: 'Chen A., Haddad O.',
    title: 'Domain-adapted language models for safety-net clinical text',
    venue: 'Findings of EMNLP',
    year: 2022,
    topic: 'NLP',
    bibtex: `@inproceedings{chen2022adapt,
  title     = {Domain-adapted language models for safety-net clinical text},
  author    = {Chen, Avery and Haddad, Omar},
  booktitle = {Findings of the Association for Computational Linguistics: EMNLP},
  year      = {2022}
}`,
  },
];

export const topics = ['All', ...Array.from(new Set(publications.map((p) => p.topic)))];
export const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);
