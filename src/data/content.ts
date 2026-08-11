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
  github: 'https://github.com/ericyjl01',
  githubHandle: 'github.com/ericyjl01',
  linkedin: 'https://www.linkedin.com/in/ericli', // TODO: replace with your real LinkedIn URL
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

// -----------------------------------------------------------------------------
// Case studies — the deep-dive write-ups behind the index rows. Data-driven,
// keyed by slug, rendered by src/pages/work/[slug].astro in the Index system.
//
// RULE: public copy contains ONLY facts Eric can defend line-by-line. Anything
// uncertain (latency, cost, exact scoring mechanics, embedding model, etc.) is
// NOT invented and NOT rendered — it lives in `openQuestions` for Eric to
// confirm, and never reaches the page. A publish gate in index.astro
// (PUBLISHED_CASE_STUDIES) keeps a slug's link hidden until its page exists.
// -----------------------------------------------------------------------------

export type CaseBlock =
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'table'; caption?: string; columns: string[]; rows: string[][] };

export type CaseSection = { n: string; heading: string; blocks: CaseBlock[] };

export type CaseStudy = {
  slug: string;
  lane: Lane;
  title: string;
  // One-line standfirst under the title.
  dek: string;
  // The opening — problem → approach → result. First ~200 words do the work.
  summary: string[];
  metric: { label: string; from?: string; to: string };
  tags: string[];
  meta: { org: string; role: string; timeframe: string; stack: string };
  sections: CaseSection[];
  // NOT rendered publicly. Items to verify with Eric before treating as fact.
  openQuestions: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  'text-to-sql': {
    slug: 'text-to-sql',
    lane: 'ai',
    title: 'Text-to-SQL Benchmark & Retrieval Tuning',
    dek: 'The pilot was writing runnable SQL that returned the wrong rows. The fix was retrieval quality, not a bigger model.',
    summary: [
      'An internal team wanted to query a production database in plain English. The pilot — GPT-4o generating SQL, with pgvector retrieving relevant schema context — demoed well but failed in the way that matters least visibly: it produced valid, runnable SQL that returned the wrong result. Nobody could say how often, because "it looks like SQL" is not a measure of correctness.',
      'I built a benchmark of 150 gold-SQL pairs and scored the pilot on execution accuracy — does the generated query, when run, return the same result as the hand-written gold query? That set a hard baseline of 48%. The failures clustered on the model not knowing which column meant what, so I rewrote the schema documentation feeding the retrieval context — clearer table and column descriptions, join keys, and worked examples — and left the prompt and the model untouched.',
      'On the same 150-pair benchmark, execution accuracy went from 48% to 71%. The lift came from what the model was given to read, not from a larger model or a cleverer prompt.',
    ],
    metric: { label: 'execution accuracy', from: '48%', to: '71%' },
    tags: ['GPT-4o', 'pgvector', 'Python', 'retrieval', 'evals'],
    meta: {
      org: 'Avocette Technologies',
      role: 'AI Data Analyst Intern · Data Operations',
      timeframe: 'Apr – Sep 2025',
      stack: 'GPT-4o · pgvector · Python',
    },
    sections: [
      {
        n: '01',
        heading: 'Architecture & the LLM / logic boundary',
        blocks: [
          {
            kind: 'p',
            text: 'The pipeline is deliberately boring: a question is embedded, pgvector runs a similarity search over chunked schema documentation, the retrieved snippets are assembled into context alongside the question, GPT-4o generates SQL, and that SQL is executed against the database.',
          },
          {
            kind: 'p',
            text: 'The design rule is where the interesting decision lives: the model owns only the translation from language to query. It is not asked to know the schema from memory. Everything it needs to be correct — table names, what each column means, which keys to join on — is supplied by retrieval, deterministically, at request time. Code owns retrieval, execution, and scoring; the LLM owns the sentence-to-SQL step and nothing else.',
          },
          {
            kind: 'p',
            text: 'That boundary is what made the system debuggable. When a query came back wrong, the question split cleanly in two: was the right schema context retrieved (a retrieval problem) or did the model misuse context it was given (a generation problem)? Reading the failures through that lens is what located the fix in the documentation rather than in the prompt.',
          },
        ],
      },
      {
        n: '02',
        heading: 'Evaluation: the 150-pair golden set',
        blocks: [
          {
            kind: 'p',
            text: 'The benchmark is 150 question-and-gold-SQL pairs. Each pair is scored on execution accuracy: run both the generated query and the gold query, then compare their result sets. A query that errors, or that runs but returns a different result, is a miss. "Valid-looking SQL" earns nothing — only returning the right answer counts.',
          },
          {
            kind: 'p',
            text: 'The controlled comparison is the point. Baseline and post-change runs used the same model, the same prompt, and the same 150 pairs; the only thing that changed between 48% and 71% was the schema documentation in the retrieval context. That isolation is what lets the 23-point gain be attributed to retrieval quality rather than to noise or a model swap.',
          },
          {
            kind: 'table',
            caption: 'Same benchmark, same model, same prompt — only the retrieved schema docs changed.',
            columns: ['', 'Execution accuracy', 'Benchmark'],
            rows: [
              ['Baseline pilot', '48%', '150 gold-SQL pairs'],
              ['After retrieval-context rewrite', '71%', '150 gold-SQL pairs'],
            ],
          },
        ],
      },
      {
        n: '03',
        heading: 'Why the fix was documentation, not the prompt',
        blocks: [
          {
            kind: 'p',
            text: 'The failing queries were not random. They were the queries where the model had to guess the meaning of a column or the relationship between two tables — and guessed wrong. The model was competent at SQL; it was under-informed about this schema.',
          },
          {
            kind: 'p',
            text: 'So the intervention went to the source of that information. I rewrote the schema docs that get chunked and retrieved: plain-language descriptions of what each table and column actually holds, explicit join keys, and a handful of worked question-to-SQL examples for the patterns the benchmark exercised. Better raw material for retrieval to surface — not a longer prompt, not a heavier model.',
          },
        ],
      },
      {
        n: '04',
        heading: 'Limitations & what I would do next',
        blocks: [
          {
            kind: 'p',
            text: 'Credibility matters more than the headline number, so the honest read: 71% execution accuracy is a strong benchmark result, not a shippable-to-users one. Execution accuracy rewards returning the right rows on a fixed 150-pair set; it says nothing about queries that are correct but expensive, and the benchmark cannot cover every long-tail join and aggregation a real user would try.',
          },
          {
            kind: 'list',
            items: [
              'Add an abstention path — when retrieval confidence is low, the system should decline rather than confidently return a wrong answer.',
              'Grow the golden set from real user misses, so the benchmark tracks what people actually ask, not what I anticipated.',
              'Instrument latency and cost per query alongside accuracy, so quality is never improved blind to what it costs.',
              'Report accuracy per error type (bad join, wrong aggregation, wrong filter), not just the aggregate, so the next gain is aimed rather than guessed.',
              'Wrap execution in a safety layer — read-only access, row limits, and query timeouts — before any non-benchmark use.',
            ],
          },
        ],
      },
    ],
    openQuestions: [
      'Exact GPT-4o snapshot/version used, and the embedding model behind pgvector.',
      'Execution-accuracy scoring mechanics: set-equality ignoring row order vs. exact ordered match; how NULLs and duplicate rows are handled.',
      'How the 150 gold-SQL pairs were sourced (real user questions vs. hand-authored) and who validated the gold SQL.',
      'Target database engine being queried (pgvector implies Postgres for the vector store, but the queried DB may differ).',
      'Latency (p50/p95) and cost per query — were these instrumented at all during the pilot? If yes, real numbers can replace the "what I would do next" framing.',
      'Whether any execution guardrails (read-only, timeouts, row limits, retries/fallbacks) existed in the pilot, or were only proposed.',
      'Per-error-type breakdown of the 52% baseline failures, if it was recorded.',
    ],
  },
};

// Grouped skills — tied to where they were actually used, not a logo wall.
export const skills: { group: string; items: string[] }[] = [
  { group: 'SQL & BI', items: ['SQL', 'Power BI', 'Tableau', 'Power Query', 'Looker', 'Excel/VBA'] },
  { group: 'Data & Python', items: ['Python', 'pandas', 'NumPy', 'PySpark', 'ETL', 'dbt', 'R'] },
  { group: 'AI / LLM', items: ['RAG', 'LlamaIndex', 'Chroma', 'pgvector', 'text-to-SQL', 'LLM eval', 'Claude API'] },
  { group: 'Cloud & Warehouse', items: ['Snowflake', 'Azure', 'Salesforce', 'Azure DevOps', 'n8n'] },
];
