// -----------------------------------------------------------------------------
// Single source of truth for site content. Swap these values and the whole
// site updates. Placeholders are marked with TODO — replace before launch.
// -----------------------------------------------------------------------------

export const profile = {
  name: 'Eric Li',
  role: 'Data Analyst & AI Engineer',
  location: 'Toronto',
  // The hero statement — the first thing a reviewer reads. Keep it a claim you back up.
  headline: 'Every project is a number that moved.',
  lede: 'I build analytics and the AI systems behind it — SQL & BI, ETL, RAG, text-to-SQL, and LLM evaluation. Fewer claims, more receipts.',
  status: 'UofT — Math (Stats & English minor), Dec 2026 · open to new-grad roles',
};

export const socials = {
  email: 'Ericyj.li@mail.utoronto.ca',
  github: 'https://github.com/ericli', // TODO: replace with your real GitHub URL
  githubHandle: 'github.com/ericli', // TODO: replace
  linkedin: 'https://www.linkedin.com/in/ericli', // TODO: replace
  // Résumé is kept OFF GitHub by choice. Paste a HOSTED pdf link here
  // (e.g. a Google Drive / Dropbox "anyone with the link" URL) and the
  // Résumé links across the site will appear automatically. Empty = hidden.
  resume: '',
};

export type Lane = 'ai' | 'bi';

export type Link = { label: string; href: string; kind?: 'repo' | 'dashboard' | 'writeup' | 'case' };

export type Project = {
  lane: Lane;
  title: string;
  blurb: string;
  metricLabel: string;
  from?: string;
  to: string; // the "gain" — rendered bold
  tags: string[];
  links: Link[];
};

// Flagship work — the numbered index. Real work from your resume; edit freely.
export const projects: Project[] = [
  {
    lane: 'ai',
    title: 'Text-to-SQL Benchmark & Retrieval Tuning',
    blurb:
      'Benchmarked a text-to-SQL pilot on GPT-4o + pgvector across 150 gold-SQL pairs, then rewrote schema docs into the retrieval context to lift execution accuracy.',
    metricLabel: 'exec accuracy',
    from: '48%',
    to: '71%',
    tags: ['GPT-4o', 'pgvector', 'Python', 'eval'],
    links: [
      { label: 'Case study', href: '/work/text-to-sql', kind: 'case' },
      { label: 'Repo', href: socials.github, kind: 'repo' },
    ],
  },
  {
    lane: 'bi',
    title: 'Service-Delivery Performance Dashboard',
    blurb:
      'Replaced a 4-hour weekly Excel report with 6 validated Power BI views over a Snowflake warehouse — one source of truth for the account team.',
    metricLabel: 'weekly build',
    from: '4 hrs',
    to: 'minutes',
    tags: ['SQL', 'Power BI', 'Snowflake', 'dbt'],
    links: [
      { label: 'Case study', href: '/work/service-dashboard', kind: 'case' },
      { label: 'Dashboard', href: '#', kind: 'dashboard' },
    ],
  },
  {
    lane: 'ai',
    title: 'Support Assistant — Retrieval Layer',
    blurb:
      'Designed the retrieval layer over ~400 articles with LlamaIndex + Chroma; selected the chunking strategy that scored highest on a 120-question benchmark.',
    metricLabel: 'benchmark score',
    to: '83%',
    tags: ['LlamaIndex', 'Chroma', 'RAG', 'Python'],
    links: [
      { label: 'Case study', href: '/work/support-assistant', kind: 'case' },
      { label: 'Repo', href: socials.github, kind: 'repo' },
    ],
  },
  {
    lane: 'ai',
    title: 'Predictive Case-Escalation Model',
    blurb:
      'Built the SQL feature pipeline and time-based train/test split behind a client’s first predictive model over a 10M-row warehouse, held on the out-of-time set.',
    metricLabel: 'AUC (out-of-time)',
    to: '0.79',
    tags: ['SQL', 'Python', 'scikit-learn', 'MLOps'],
    links: [
      { label: 'Case study', href: '/work/escalation-model', kind: 'case' },
      { label: 'Repo', href: socials.github, kind: 'repo' },
    ],
  },
];

// The three showcase rails you asked for. Each seeded with one placeholder —
// duplicate an entry to add more. These become dedicated pages later.
export const repos: Link[] = [
  { label: 'text-to-sql-bench — retrieval eval harness for text-to-SQL', href: socials.github, kind: 'repo' },
  { label: 'PLACEHOLDER — add a pinned repo', href: socials.github, kind: 'repo' }, // TODO
];

export const dashboards: Link[] = [
  { label: 'Service-Delivery Performance — Power BI (6 validated views)', href: '#', kind: 'dashboard' },
  { label: 'PLACEHOLDER — add a Tableau Public / Power BI link', href: '#', kind: 'dashboard' }, // TODO
];

export const writeups: Link[] = [
  { label: 'How I lifted text-to-SQL accuracy 48% → 71% with better retrieval context', href: '#', kind: 'writeup' },
  { label: 'PLACEHOLDER — add a technical writeup', href: '#', kind: 'writeup' }, // TODO
];

export const about = [
  'I’m a University of Toronto math student (statistics and English minors) who ended up equally at home in a SQL console and an eval harness. I like the part of the job where a fuzzy business question becomes a number, and the number becomes a decision.',
  'Most recently at Avocette I worked across both sides of that line — owning weekly BI reporting and dashboards, and building applied-AI systems: a text-to-SQL benchmark, a RAG retrieval layer, an LLM evaluation rubric, and a client’s first predictive model. Before that I ran a profitable Shopify brand end to end, which is where I learned to respect a P&L.',
];

// Grouped skills — tied to where they were actually used, not a logo wall.
export const skills: { group: string; items: string[] }[] = [
  { group: 'SQL & BI', items: ['SQL', 'Power BI', 'Tableau', 'Power Query', 'Looker', 'Excel/VBA'] },
  { group: 'Data & Python', items: ['Python', 'pandas', 'NumPy', 'PySpark', 'ETL', 'dbt', 'R'] },
  { group: 'AI / LLM', items: ['RAG', 'LlamaIndex', 'Chroma', 'pgvector', 'text-to-SQL', 'LLM eval', 'Claude API'] },
  { group: 'Cloud & Warehouse', items: ['Snowflake', 'Azure', 'Salesforce', 'Azure DevOps', 'n8n'] },
];
