import { useState } from 'react';
import { Link } from 'wouter';
import { FileText, ExternalLink, Clock, CheckCircle2, BookOpen, Landmark, Quote, Copy, Check, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

const citations = [
  {
    id: 'aba-2026',
    title: 'Access Is Not Advantage (ABA, 2026)',
    apa: 'Copeland, K. M. (2026, April 2). Access is not advantage: Structural integrity and disability accommodation in state courts. American Bar Association, Commission on Disability Rights. https://www.americanbar.org/groups/diversity/disabilityrights/news/structural-integrity-disability-accommodation-state-courts/',
    bluebook: 'Kathryn "Katie" Copeland, Access Is Not Advantage: Structural Integrity and Disability Accommodation in State Courts, Am. Bar Ass\'n Comm\'n on Disability Rts. (Apr. 2, 2026), https://www.americanbar.org/groups/diversity/disabilityrights/news/structural-integrity-disability-accommodation-state-courts/.'
  },
  {
    id: 'ssrn-doctrine',
    title: 'The Cognitive Prosthetic Doctrine (SSRN, 2026)',
    apa: 'Copeland, K. M. (2026, March). The cognitive prosthetic doctrine: Reconceiving ADA accommodation denials as structural due process violations in family court proceedings [Preprint]. Social Science Research Network. https://ssrn.com/abstract=6469802',
    bluebook: 'Kathryn Marie Copeland, The Cognitive Prosthetic Doctrine: Reconceiving ADA Accommodation Denials as Structural Due Process Violations in Family Court Proceedings (Mar. 2026) (SSRN preprint), https://ssrn.com/abstract=6469802.'
  },
  {
    id: 'ssrn-ai',
    title: 'AI as a Civil Right (SSRN, 2026)',
    apa: 'Copeland, K. M. (2026, April). AI as a civil right: The cognitive prosthetic [Preprint]. Social Science Research Network. https://ssrn.com',
    bluebook: 'Kathryn Marie Copeland, AI as a Civil Right: The Cognitive Prosthetic (Apr. 2026) (SSRN preprint), https://ssrn.com.'
  },
  {
    id: 'fcaa',
    title: 'The Family Court Access Act of 2026 (SSRN, 2026)',
    apa: 'Copeland, K. M. (2026, April). The Family Court Access Act of 2026: A model federal statute requiring ADA coordinators in family courts receiving federal child welfare funding [Legislative proposal]. Social Science Research Network. https://ssrn.com',
    bluebook: 'Kathryn Marie Copeland, The Family Court Access Act of 2026: A Model Federal Statute Requiring ADA Coordinators in Family Courts Receiving Federal Child Welfare Funding (Apr. 2026) (SSRN legislative proposal), https://ssrn.com.'
  }
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-teal-700 transition-colors px-2 py-1 rounded hover:bg-teal-50"
      aria-label="Copy citation"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-teal-600" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

function CitationCard({ citation }: { citation: typeof citations[0] }) {
  const [format, setFormat] = useState<'apa' | 'bluebook'>('bluebook');
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h3 className="text-base font-semibold text-slate-900 mb-4">{citation.title}</h3>
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setFormat('bluebook')}
          className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors ${
            format === 'bluebook'
              ? 'bg-teal-700 text-white border-teal-700'
              : 'bg-white text-slate-600 border-slate-300 hover:border-teal-400'
          }`}
        >
          Bluebook
        </button>
        <button
          onClick={() => setFormat('apa')}
          className={`text-xs font-medium px-3 py-1 rounded-full border transition-colors ${
            format === 'apa'
              ? 'bg-teal-700 text-white border-teal-700'
              : 'bg-white text-slate-600 border-slate-300 hover:border-teal-400'
          }`}
        >
          APA 7th
        </button>
      </div>
      <div className="bg-slate-50 rounded p-4 flex items-start justify-between gap-3">
        <p className="text-sm text-slate-700 font-mono leading-relaxed flex-1">
          {format === 'bluebook' ? citation.bluebook : citation.apa}
        </p>
        <CopyButton text={format === 'bluebook' ? citation.bluebook : citation.apa} />
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Publications & Scholarship
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Developing frameworks for disability rights, court access, and cognitive liberty through legal scholarship, legislative proposals, and advocacy.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16">

        {/* Published — ABA */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="h-8 w-8 text-teal-600" />
            <h2 className="text-3xl font-serif text-slate-900">Published Articles</h2>
          </div>

          <div className="grid gap-8">

            {/* ABA Article — most recent, most prominent */}
            <article className="bg-white border-2 border-teal-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                    ABA Commission on Disability Rights
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">
                    Access Is Not Advantage: Structural Integrity and Disability Accommodation in State Courts
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Published April 2, 2026 · American Bar Association, Commission on Disability Rights
                  </p>
                </div>
                <FileText className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
              </div>
              <p className="text-slate-700 mb-6">
                Argues that Title II of the ADA is a structured compliance inquiry, not a credibility contest — and that unaccommodated disability distorts the record, undermining appellate review and the structural legitimacy of adjudication itself. Introduces a three-part judicial inquiry: functional impact, individualized assessment, and record integrity. Proposes <strong>The Copeland Questions™</strong> as a practical framework for judicial ADA compliance.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.americanbar.org/groups/diversity/disabilityrights/news/structural-integrity-disability-accommodation-state-courts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Read on ABA.org
                  </Button>
                </a>
              </div>
            </article>

            {/* SSRN Preprint */}
            <article className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                    SSRN Preprint
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">
                    The Cognitive Prosthetic Doctrine: Reconceiving ADA Accommodation Denials as Structural Due Process Violations in Family Court Proceedings
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Published March 2026 · Social Science Research Network (SSRN)
                  </p>
                </div>
                <FileText className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
              </div>
              <p className="text-slate-700 mb-6">
                Introduces the <strong>Cognitive Prosthetic Doctrine</strong> — a constitutional and statutory framework for understanding how denial of cognitive accommodation in family court proceedings may render those proceedings structurally deficient under <em>Mathews v. Eldridge</em> and <em>Tennessee v. Lane</em>. Draws on trial transcripts, pleadings, and contemporaneous records to examine how procedural design and accommodation practices affect meaningful participation and the reliability of the appellate record.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://ssrn.com/abstract=6469802"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Read on SSRN
                  </Button>
                </a>
              </div>
            </article>

            {/* AI as a Civil Right — SSRN */}
            <article className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                    SSRN Preprint
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">
                    AI as a Civil Right: The Cognitive Prosthetic
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Published April 2026 · Social Science Research Network (SSRN)
                  </p>
                </div>
                <FileText className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
              </div>
              <p className="text-slate-700 mb-6">
                Applies the Cognitive Prosthetic Doctrine specifically to artificial intelligence tools, arguing that AI is not merely a qualifying accommodation under existing law — it is the defining accommodation challenge of the next decade. Introduces the "speed as proxy for competence" critique: courts that evaluate disabled litigants without accommodation are not evaluating their legal capacity; they are evaluating their ability to survive a process designed for a different kind of brain. Calls for enactment of the <strong>Family Court Access Act</strong>.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://ssrn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Read on SSRN
                  </Button>
                </a>
              </div>
            </article>

          </div>
        </section>

        {/* Legislative Proposal */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Landmark className="h-8 w-8 text-indigo-600" />
            <h2 className="text-3xl font-serif text-slate-900">Legislative Proposal</h2>
          </div>

          <article className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  Model Federal Statute
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-2">
                  The Family Court Access Act of 2026
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Proposed by Kathryn Marie Copeland, J.D. · Published April 2026 · SSRN
                </p>
              </div>
              <Landmark className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
            </div>
            <p className="text-slate-700 mb-4">
              A model federal statute to amend the Child Abuse Prevention and Treatment Act and Titles IV-B and IV-E of the Social Security Act, conditioning federal child welfare funding on ADA compliance in family courts. Requires mandatory designation of ADA Coordinators, a structured interactive process before custody hearings, written accommodation protocols, and prohibition of adverse inferences drawn from unaccommodated performance.
            </p>
            <p className="text-slate-700 mb-6">
              Recognizes the minor children of disabled parents as independent civil rights victims with cognizable claims for the impairment of the parent-child relationship — grounded in 28 C.F.R. § 35.130(g) and <em>Loeffler v. Staten Island University Hospital</em>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://ssrn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Read Full Proposal
                </Button>
              </a>
            </div>
          </article>
        </section>

        {/* Forthcoming Book */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-amber-600" />
            <h2 className="text-3xl font-serif text-slate-900">Forthcoming Book</h2>
          </div>

          <article className="bg-amber-50 border border-amber-200 rounded-lg p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  Forthcoming 2026
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-2">
                  The Cognitive Prosthetic: Disability, Due Process, and the Collapse of Meaningful Access in American Courts
                </h3>
                <p className="text-sm text-amber-700 mb-4">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Kathryn "Katie" Marie Copeland, J.D. · Self-published (KDP) · 2026
                </p>
              </div>
              <BookOpen className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            </div>
            <p className="text-slate-700 mb-4">
              A full-length work integrating the Cognitive Prosthetic Doctrine with narrative portraits of disabled litigants, the constitutional framework for meaningful participation, and a practical liturgy for judicial ADA compliance. Includes the complete text of The Copeland Questions™ as a decision tool for courts, and a companion legislative proposal for the Family Court Access Act.
            </p>
            <p className="text-sm text-slate-600">
              Notification available upon publication — contact below.
            </p>
          </article>
        </section>

        {/* Works in Progress */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-slate-400" />
            <h2 className="text-3xl font-serif text-slate-900">Works in Progress</h2>
          </div>

          <div className="grid gap-6">
            <article className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-serif text-slate-900 mb-2">
                Access Before Evaluation: Restoring the Correct Analytical Order in Disability Cases
              </h3>
              <p className="text-sm text-slate-500 mb-3">In Progress · Target: Law Review Submission 2026</p>
              <p className="text-slate-700 text-sm">
                Examines how courts often evaluate behavior, credibility, or compliance before ensuring access has been provided — producing a recurring structural error where disability-related barriers are misread as personal failures.
              </p>
            </article>

            <article className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-serif text-slate-900 mb-2">
                The Copeland Test: When Procedural Avoidance Violates Federal Rights
              </h3>
              <p className="text-sm text-slate-500 mb-3">In Development · Timed to follow Fifth Circuit proceedings</p>
              <p className="text-slate-700 text-sm">
                Proposes a framework for federal courts to evaluate when state courts use procedural mechanisms to avoid adjudicating federal claims — creating a systemic barrier to rights enforcement.
              </p>
            </article>
          </div>
        </section>

        {/* Speaking & Presentations */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <ExternalLink className="h-8 w-8 text-teal-600" />
            <h2 className="text-3xl font-serif text-slate-900">Speaking & Presentations</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Available Topics
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1 text-lg leading-none">·</span>
                  <span><strong>The Copeland Questions™:</strong> A judicial reasoning framework for ADA Title II compliance in state courts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1 text-lg leading-none">·</span>
                  <span><strong>AI as a Civil Right:</strong> Why courts banning AI tools may be removing a cognitive prosthetic</span>
                </div>
              </div>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1 text-lg leading-none">·</span>
                  <span><strong>The Family Court Access Act:</strong> A legislative framework for structural ADA compliance in family courts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 mt-1 text-lg leading-none">·</span>
                  <span><strong>Access Before Evaluation:</strong> Structural errors in disability case adjudication and how to correct them</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              Available for judicial education programs, law school clinics, CLE courses, disability rights conferences, and legislative testimony.
            </p>
            <Link href="/contact">
              <Button>
                Request Speaking Engagement
              </Button>
            </Link>
          </div>
        </section>

        {/* The Copeland Questions Infographic */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <LayoutGrid className="h-8 w-8 text-teal-600" />
            <h2 className="text-3xl font-serif text-slate-900">The Copeland Questions™</h2>
          </div>
          <p className="text-slate-600 mb-8 max-w-2xl">
            A structured judicial inquiry for ADA Title II compliance in court proceedings. Developed by Kathryn "Katie" Marie Copeland, J.D. Published by the ABA Commission on Disability Rights, April 2, 2026.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Infographic */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663217842804/fxoDUGK7fWNuzCp7b7Ds9x/copeland_questions_teal_v2_82a48d4a.png"
                alt="Infographic: The Copeland Questions™ — A Structured Judicial Inquiry for ADA Title II Compliance. Four numbered questions with statutory citations, developed by Kathryn 'Katie' Marie Copeland, J.D. Published by the ABA Commission on Disability Rights, April 2, 2026. Full text below."
                aria-describedby="copeland-questions-long-desc"
                className="w-full max-w-sm mx-auto block rounded-lg shadow-lg"
              />
              <p className="text-xs text-slate-400 text-center mt-3">
                Designed to WCAG 2.1 Level AA standards · High contrast · Screen reader accessible
              </p>
            </div>

            {/* Accessible Long Description */}
            <div
              id="copeland-questions-long-desc"
              className="bg-slate-50 border border-slate-200 rounded-lg p-6"
              aria-label="Full text of The Copeland Questions infographic"
            >
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-1">The Copeland Questions™</h3>
              <p className="text-sm text-slate-500 italic mb-6">A Structured Judicial Inquiry for ADA Title II Compliance</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Qualified Person with a Disability?</h4>
                    <p className="text-slate-700 text-sm mb-1">Is the individual a qualified person with a disability within the meaning of the ADA?</p>
                    <p className="text-teal-700 text-xs font-mono">42 U.S.C. § 12102</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Denied Meaningful Participation?</h4>
                    <p className="text-slate-700 text-sm mb-1">Is the individual denied meaningful participation in a court service, program, or activity?</p>
                    <p className="text-teal-700 text-xs font-mono">42 U.S.C. § 12132</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Denial by Reason of Disability?</h4>
                    <p className="text-slate-700 text-sm mb-1">Does the denial arise through the interaction between functional limitation and procedural structure?</p>
                    <p className="text-teal-700 text-xs font-mono">28 C.F.R. § 35.130</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">4</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Reasonable Modification Available?</h4>
                    <p className="text-slate-700 text-sm mb-1">Would a reasonable modification enable access without fundamentally altering the proceeding or imposing undue burden?</p>
                    <p className="text-teal-700 text-xs font-mono">28 C.F.R. § 35.130(b)(7)</p>
                  </div>
                </div>
              </div>

              <blockquote className="mt-6 border-l-4 border-teal-600 pl-4">
                <p className="text-slate-800 font-semibold text-sm">"Equal justice under law cannot depend on neurological endurance."</p>
              </blockquote>

              <p className="text-xs text-slate-400 mt-6">
                Published: ABA Commission on Disability Rights · April 2, 2026<br />
                Developed by Kathryn "Katie" Marie Copeland, J.D. · CopelandLawTexas.com
              </p>
            </div>
          </div>
        </section>

        {/* Cite This Work */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <Quote className="h-8 w-8 text-teal-600" />
            <h2 className="text-3xl font-serif text-slate-900">Cite This Work</h2>
          </div>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Toggle between Bluebook and APA 7th edition formats. Click Copy to copy the citation to your clipboard.
          </p>
          <div className="grid gap-6">
            {citations.map(c => (
              <CitationCard key={c.id} citation={c} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
