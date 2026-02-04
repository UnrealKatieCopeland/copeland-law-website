import { Link } from 'wouter';
import { FileText, ExternalLink, Clock, CheckCircle2, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            Developing frameworks for disability rights, court access, and cognitive liberty through legal scholarship and advocacy.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16">
        {/* Published Articles */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="h-8 w-8 text-teal-600" />
            <h2 className="text-3xl font-serif text-slate-900">Published Articles</h2>
          </div>

          <div className="grid gap-8">
            {/* AI as a Civil Right */}
            <article className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">
                    AI as a Civil Right: The Cognitive Prosthetic
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Published January 2026 • CopelandLawTexas.com
                  </p>
                </div>
                <FileText className="h-6 w-6 text-teal-600 flex-shrink-0" />
              </div>
              <p className="text-slate-700 mb-6">
                Introduces the concept of the <strong>Cognitive Prosthetic</strong>—a framework for understanding AI as a disability accommodation under Title II of the Americans with Disabilities Act. Argues that courts banning AI without considering cognitive disabilities may be violating federal law.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/cognitive-prosthetic">
                  <Button variant="outline" size="sm">
                    Read Full Article
                  </Button>
                </Link>
              </div>
            </article>

            {/* Not Either/Or, But Both/And */}
            <article className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">
                    Not Either/Or, But Both/And: A Framework for Disability Accommodation in Judicial Proceedings
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Published 2025 • CopelandLawTexas.com
                  </p>
                </div>
                <FileText className="h-6 w-6 text-teal-600 flex-shrink-0" />
              </div>
              <p className="text-slate-700 mb-6">
                Develops <strong>The Copeland Questions™</strong>—a judicial reasoning framework endorsed by Southwest ADA Center for training courts on Title II compliance. Addresses how courts can analyze accommodation requests without credibility contests.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/article/not-eitheror-but-bothand">
                  <Button variant="outline" size="sm">
                    Read Full Article
                  </Button>
                </Link>
              </div>
            </article>

            {/* Administrative Pathways */}
            <article className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">
                    Administrative Pathways to Court Access: Why Counties Need ADA Coordinators
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Published 2025 • CopelandLawTexas.com
                  </p>
                </div>
                <FileText className="h-6 w-6 text-teal-600 flex-shrink-0" />
              </div>
              <p className="text-slate-700 mb-6">
                Examines the Webb County DOJ settlement model and argues for county-level administrative processes to handle ADA accommodation requests before they reach the courtroom.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/article/administrative-pathways">
                  <Button variant="outline" size="sm">
                    Read Full Article
                  </Button>
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Works in Progress */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Edit3 className="h-8 w-8 text-amber-600" />
            <h2 className="text-3xl font-serif text-slate-900">Works in Progress</h2>
          </div>

          <div className="grid gap-8">
            {/* Cognitive Prosthetic Law Review */}
            <article className="bg-amber-50 border border-amber-200 rounded-lg p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">
                    The Cognitive Prosthetic: Reframing AI as Disability Accommodation Under Title II
                  </h3>
                  <p className="text-sm text-amber-700 mb-4">
                    <Clock className="inline h-4 w-4 mr-1" />
                    In Progress • Target: Law Review Submission February 2026
                  </p>
                </div>
                <FileText className="h-6 w-6 text-amber-600 flex-shrink-0" />
              </div>
              <p className="text-slate-700 mb-4">
                Full law review article (8,000-12,000 words) expanding the Cognitive Prosthetic framework with legal analysis, case examples, and proposed standards for courts evaluating AI accommodation requests.
              </p>
              <p className="text-sm text-slate-600">
                <strong>Target Journals:</strong> Harvard Civil Rights-Civil Liberties Law Review, Yale Law & Technology, Stanford Law & Policy Review
              </p>
            </article>

            {/* Access Before Evaluation */}
            <article className="bg-amber-50 border border-amber-200 rounded-lg p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">
                    Access Before Evaluation: Restoring the Correct Analytical Order in Disability Cases
                  </h3>
                  <p className="text-sm text-amber-700 mb-4">
                    <Clock className="inline h-4 w-4 mr-1" />
                    In Progress • Target: Law Review Submission March 2026
                  </p>
                </div>
                <FileText className="h-6 w-6 text-amber-600 flex-shrink-0" />
              </div>
              <p className="text-slate-700 mb-4">
                Examines how courts often evaluate behavior, credibility, or compliance before ensuring access has been provided—producing a recurring structural error where disability-related barriers are misread as personal failures.
              </p>
              <p className="text-sm text-slate-600">
                <strong>Target Journals:</strong> Columbia Journal of Law and Social Problems, Georgetown Journal on Poverty Law & Policy
              </p>
            </article>

            {/* The Copeland Test */}
            <article className="bg-amber-50 border border-amber-200 rounded-lg p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">
                    The Copeland Test: When Procedural Avoidance Violates Federal Rights
                  </h3>
                  <p className="text-sm text-amber-700 mb-4">
                    <Clock className="inline h-4 w-4 mr-1" />
                    In Development • Target: Post-Fifth Circuit Ruling
                  </p>
                </div>
                <FileText className="h-6 w-6 text-amber-600 flex-shrink-0" />
              </div>
              <p className="text-slate-700 mb-4">
                Proposes a framework for federal courts to evaluate when state courts use procedural mechanisms to avoid adjudicating federal claims—creating a systemic barrier to rights enforcement.
              </p>
              <p className="text-sm text-slate-600">
                <strong>Strategic Note:</strong> Publication timed to follow active Fifth Circuit litigation for maximum impact
              </p>
            </article>
          </div>
        </section>

        {/* Forthcoming */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-8 w-8 text-slate-400" />
            <h2 className="text-3xl font-serif text-slate-900">Forthcoming</h2>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
            <p className="text-slate-700 mb-6">
              Additional articles in development on void order doctrine, state-created danger theory, and systematic exclusion as civil rights violation. Op-ed submissions pending at major publications.
            </p>
            <p className="text-sm text-slate-600">
              For speaking engagements, CLE courses, or collaboration inquiries, please{' '}
              <Link href="/contact" className="text-teal-700 hover:text-teal-800 underline font-medium">
                contact us
              </Link>.
            </p>
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
            <ul className="space-y-3 text-slate-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span><strong>The Copeland Questions™:</strong> Judicial reasoning framework for ADA Title II compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span><strong>AI as Cognitive Prosthetic:</strong> Reframing AI bans as disability discrimination</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span><strong>Administrative Pathways:</strong> County-level ADA compliance for court access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span><strong>Access Before Evaluation:</strong> Structural errors in disability case adjudication</span>
              </li>
            </ul>
            <p className="text-sm text-slate-600 mb-6">
              Presentations available for judicial education programs, law school clinics, CLE courses, and disability rights conferences.
            </p>
            <Link href="/contact">
              <Button>
                Request Speaking Engagement
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
