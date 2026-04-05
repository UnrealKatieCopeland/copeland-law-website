import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Scale, FileText, ExternalLink, ArrowLeft } from "lucide-react";

/**
 * Design Philosophy: Editorial Minimalism with Strategic Maximalism
 * - Elegant serif headers with readable body text
 * - Teal brand color as power accent
 * - Long-form article layout with generous whitespace
 * - Magazine-quality typography for thought leadership
 */

export default function ArticleCopelandQuestions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b border-border/40 py-4">
        <div className="container">
          <Link href="/articles">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-20 bg-card border-b border-border/40">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
              Framework Introduction
            </span>
            <span className="text-sm text-muted-foreground">April 5, 2026</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
            Introducing The Copeland Questions™
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            A Structured Judicial Inquiry for ADA Title II Compliance in Court Proceedings
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-border/40">
            <div>
              <p className="font-semibold text-foreground">Kathryn "Katie" Marie Copeland, J.D.</p>
              <p className="text-sm text-muted-foreground">Attorney at Law · CopelandLawTexas.com</p>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-16">
        <div className="container max-w-3xl">

          {/* Opening */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl leading-relaxed text-foreground/80 mb-8 font-medium">
              Every tradition worth keeping has a structure. Not because structure is magic, but because 
              structure makes accountability repeatable.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              Courts already understand this. They use voir dire to select juries. They use the 
              four-factor test for preliminary injunctions. They use the McDonnell Douglas framework 
              for employment discrimination. These structures do not guarantee the right outcome. 
              But they make the wrong outcome harder to hide.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              Disability accommodation analysis in American courtrooms does not yet have that structure. 
              What it has instead is discretion — wide, unreviewable, and largely unguided discretion 
              exercised by judges who were never trained in disability law, in proceedings where the 
              disabled person is already at a disadvantage, producing records that contain no reasoning 
              at all.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-10">
              This post formally introduces a framework designed to change that. I am calling it 
              <strong> The Copeland Questions™</strong>.
            </p>
          </div>

          {/* Section 1: The Problem */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
              The Problem Is Not Ignorance. It Is Structure.
            </h2>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              When a disabled litigant requests an accommodation in a family court proceeding — 
              extended time, real-time captioning, a break schedule, an AI transcription tool — 
              the court typically does one of three things. It grants the request without analysis. 
              It denies the request without analysis. Or it reframes the request as a credibility 
              question: does this person <em>really</em> need what they are asking for?
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              None of these responses is what the law requires. Title II of the Americans with 
              Disabilities Act does not ask whether the court believes the impairment. It asks 
              whether the structure of the proceeding, as applied, excludes a qualified person 
              with a disability from meaningful participation. That is an effect-based inquiry, 
              not a credibility contest.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              The gap between what the law requires and what courts actually do is not primarily 
              a gap in judicial goodwill. Most judges are not trying to exclude disabled litigants. 
              The gap is structural: courts do not have a standardized framework for asking the 
              right questions. So they ask the wrong ones — or they ask none at all.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary/5 rounded-r-lg">
              <p className="text-lg italic text-foreground/80 leading-relaxed">
                "Equal justice under law cannot depend on neurological endurance."
              </p>
            </blockquote>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              The consequence falls on the people who can least afford it. Disabled parents in 
              custody proceedings. Survivors of brain injury navigating protective order hearings. 
              Deaf litigants in proceedings where no interpreter was provided. People whose 
              cognitive limitations are invisible to the court, and whose requests for accommodation 
              are treated as tactical maneuvers rather than legal rights.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70">
              The record does not contain their experience. It contains the transcript of a 
              proceeding they were not fully present for — and in which no one asked whether 
              they were.
            </p>
          </section>

          {/* Section 2: The Framework */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
              The Framework: Four Questions, On the Record
            </h2>

            <p className="text-lg leading-relaxed text-foreground/70 mb-8">
              The Copeland Questions™ are a structured judicial inquiry designed to operationalize 
              Title II compliance in real-time court proceedings. They are grounded entirely in 
              existing law — no new statutes required, no new rights created. They ask only what 
              the ADA already requires courts to consider. The innovation is not the substance. 
              It is the structure.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-10">
              Each question corresponds to a specific statutory or regulatory anchor. Each is 
              designed to be asked aloud, on the record, with the answer entered into the record. 
              A denial requires documented legal justification. Silence is not an answer.
            </p>

            {/* The Four Questions */}
            <div className="space-y-6 mb-10">
              {[
                {
                  number: "1",
                  title: "Qualified Person with a Disability?",
                  question: "Is the individual a qualified person with a disability within the meaning of the ADA?",
                  citation: "42 U.S.C. § 12102",
                  explanation: "This question establishes the threshold. The ADA's definition of disability is broad and functional — it includes any physical or mental impairment that substantially limits a major life activity. Courts should not require clinical diagnosis or documentation beyond what is reasonably available. The question is whether the person qualifies, not whether the court is convinced."
                },
                {
                  number: "2",
                  title: "Denied Meaningful Participation?",
                  question: "Is the individual denied meaningful participation in a court service, program, or activity?",
                  citation: "42 U.S.C. § 12132",
                  explanation: "This question focuses on effect, not intent. A court proceeding is a program or activity within the meaning of Title II. The question is whether the default structure of that proceeding — its pace, format, sensory demands, or cognitive load — effectively excludes the disabled person from meaningful participation. The answer does not require proof of bad faith."
                },
                {
                  number: "3",
                  title: "Denial by Reason of Disability?",
                  question: "Does the denial arise through the interaction between functional limitation and procedural structure?",
                  citation: "28 C.F.R. § 35.130",
                  explanation: "This question identifies the mechanism of exclusion. The denial need not be intentional. It need not be discriminatory in the traditional sense. It need only arise from the interaction between the person's functional limitations and the court's procedural defaults. A hearing that moves too fast for a person with processing disorder is not neutral — it is structurally inaccessible."
                },
                {
                  number: "4",
                  title: "Reasonable Modification Available?",
                  question: "Would a reasonable modification enable access without fundamentally altering the nature of the proceeding or imposing undue burden?",
                  citation: "28 C.F.R. § 35.130(b)(7)",
                  explanation: "This question identifies the remedy. The ADA requires reasonable modification unless it would fundamentally alter the proceeding or impose undue burden. Courts must engage in an individualized assessment of what modifications are available and whether they are reasonable. The burden of demonstrating fundamental alteration or undue burden falls on the entity denying the accommodation — not on the person requesting it."
                }
              ].map((q) => (
                <div key={q.number} className="flex gap-6 p-6 bg-card rounded-lg border border-border/40">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">{q.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-primary mb-2">{q.title}</h3>
                    <p className="text-base font-medium text-foreground mb-1 italic">"{q.question}"</p>
                    <p className="text-sm text-primary mb-3 font-mono">{q.citation}</p>
                    <p className="text-base text-foreground/70 leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Why Name It */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
              Why Name It?
            </h2>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              A framework without a name is a framework that cannot travel. It cannot be cited 
              by advocates, taught in law schools, referenced in briefs, or adopted by court 
              administrators. It cannot become the standard it is designed to be.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              Naming a framework is an act of precision, not ego. The McDonnell Douglas framework 
              is named for a case. The Daubert standard is named for a case. The Miranda warnings 
              are named for a person. The name is a handle — it allows the idea to be carried, 
              shared, and built upon by people who were not in the room when it was first articulated.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              The Copeland Questions™ are named for the same reason a liturgy is named: so that 
              the structure can be repeated, reliably, across different courtrooms, different 
              judges, different cases. A liturgy does not guarantee justice. But it makes injustice 
              harder to hide.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              I am a lawyer with a traumatic brain injury. I know what it costs to participate 
              in a proceeding that was not designed for you. I know what it means to have your 
              request for accommodation treated as a credibility question. I know what the record 
              looks like when no one asked whether you were actually present — not physically, 
              but functionally.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70">
              I named this framework because I needed it to exist. And because other people need 
              it to exist too — people who do not have a law degree, who cannot articulate the 
              statutory framework in the moment, who need a judge to ask the right questions 
              before the proceeding ends and the record closes.
            </p>
          </section>

          {/* Section 4: The Scholarly Foundation */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
              The Scholarly Foundation
            </h2>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              The Copeland Questions™ are introduced here as a named framework, but they are 
              grounded in a body of work that has been developing in parallel. The underlying 
              doctrine — the Cognitive Prosthetic Doctrine — was introduced in a preprint 
              published on SSRN in March 2026, which reconceives ADA accommodation denials as 
              structural due process violations in family court proceedings.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              The four-question inquiry itself appeared in my article published by the ABA 
              Commission on Disability Rights on April 2, 2026, under the title{" "}
              <em>Access Is Not Advantage: Structural Integrity and Disability Accommodation 
              in State Courts</em>. That article presented the inquiry as a structured analytical 
              tool. This post names it.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-8">
              A companion legislative proposal — the Family Court Access Act of 2026 — has also 
              been submitted to SSRN. The FCAA would codify AI tools as qualifying cognitive 
              accommodations under Title II and establish enforceable standards for accommodation 
              analysis in family court proceedings. The Copeland Questions™ are the practical 
              implementation of what that legislation would require.
            </p>

            {/* Publication Links */}
            <div className="grid md:grid-cols-3 gap-4 p-6 bg-card rounded-lg border border-border/40">
              <a
                href="https://www.americanbar.org/groups/diversity/disabilityrights/news/structural-integrity-disability-accommodation-state-courts/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 p-4 rounded border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <ExternalLink className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">ABA Article</p>
                <p className="text-xs text-muted-foreground">Access Is Not Advantage · April 2, 2026</p>
              </a>
              <a
                href="https://ssrn.com/abstract=6469802"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 p-4 rounded border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <ExternalLink className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">SSRN Preprint</p>
                <p className="text-xs text-muted-foreground">The Cognitive Prosthetic Doctrine · March 2026</p>
              </a>
              <a
                href="https://ssrn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 p-4 rounded border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <ExternalLink className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Legislative Proposal</p>
                <p className="text-xs text-muted-foreground">Family Court Access Act of 2026 · SSRN</p>
              </a>
            </div>
          </section>

          {/* Section 5: How to Use It */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
              How to Use The Copeland Questions™
            </h2>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              The framework is designed to be used in three contexts.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              <strong>For disabled litigants and their advocates:</strong> The four questions 
              provide a checklist for evaluating whether a court has conducted a legally adequate 
              accommodation analysis. If the record does not reflect engagement with each question, 
              the accommodation denial may be legally deficient — and that deficiency is 
              preservable for appeal.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              <strong>For judges and court administrators:</strong> The framework provides a 
              structured inquiry that can be conducted in real time, on the record, without 
              requiring specialized disability training. It does not ask judges to become 
              disability experts. It asks them to ask the right questions and document the answers.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              <strong>For legal scholars and reformers:</strong> The framework is an invitation. 
              It is designed to be tested, critiqued, refined, and built upon. If it is wrong 
              in some respect, I want to know. If it can be improved, I want to see it improved. 
              The goal is not a framework that bears my name. The goal is a framework that works.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary/5 rounded-r-lg">
              <p className="text-lg italic text-foreground/80 leading-relaxed">
                "The hearing happened. But meaningful participation did not."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — The question the record should answer, and too often does not.
              </p>
            </blockquote>
          </section>

          {/* Section 6: What Comes Next */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
              What Comes Next
            </h2>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              Naming a framework is the beginning, not the end. The work ahead includes 
              developing training materials for judges and court staff, building a model 
              court rule that incorporates the inquiry into standard pre-hearing procedure, 
              and documenting the cases where the absence of this analysis produced outcomes 
              that the law did not require and justice did not permit.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              A forthcoming book — <em>The Cognitive Prosthetic: Disability, AI, and the 
              Right to Be Present in Court</em> — will develop the full framework in depth, 
              including the portraits of people whose proceedings did not ask these questions, 
              and the children who are living with the verdicts those proceedings produced.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70 mb-6">
              If you are a disabled litigant who has experienced accommodation denial in a 
              court proceeding, I want to hear from you. If you are a legal scholar working 
              in disability rights or due process, I welcome collaboration. If you are a 
              judge or court administrator who wants to implement this framework, I am 
              available to consult.
            </p>

            <p className="text-lg leading-relaxed text-foreground/70">
              The questions are named. Now they need to be asked.
            </p>
          </section>

          {/* Closing Callout */}
          <div className="p-8 bg-primary/5 border border-primary/20 rounded-lg mb-16 text-center">
            <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="font-display text-2xl font-bold text-foreground mb-3">
              The Copeland Questions™
            </p>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              A Structured Judicial Inquiry for ADA Title II Compliance in Court Proceedings.<br />
              Developed by Kathryn "Katie" Marie Copeland, J.D.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/framework">
                <Button>
                  <Scale className="mr-2 h-4 w-4" />
                  Explore the Full Framework
                </Button>
              </Link>
              <Link href="/publications">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  View All Publications
                </Button>
              </Link>
            </div>
          </div>

          {/* Citation Block */}
          <div className="p-6 bg-card border border-border/40 rounded-lg">
            <p className="text-sm font-semibold text-foreground mb-3">Cite This Post</p>
            <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-3">
              <strong>Bluebook:</strong> Kathryn Marie Copeland, <em>Introducing The Copeland 
              Questions™: A Structured Judicial Inquiry for ADA Title II Compliance</em>, 
              CopelandLawTexas.com (Apr. 5, 2026), https://copelandlaw-fxodugk7.manus.space/article/copeland-questions.
            </p>
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              <strong>APA 7th:</strong> Copeland, K. M. (2026, April 5). Introducing The Copeland 
              Questions™: A structured judicial inquiry for ADA Title II compliance. 
              CopelandLawTexas.com. https://copelandlaw-fxodugk7.manus.space/article/copeland-questions
            </p>
          </div>

        </div>
      </article>
    </div>
  );
}
