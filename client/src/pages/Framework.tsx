/**
 * Editorial Minimalism Design: Featured Framework page
 * Layout: Long-form essay with skimmable sections, pull quotes, and citation-ready formatting
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, FileText, BookOpen, Download } from "lucide-react";

export default function Framework() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">Featured Framework</p>
          <h1 className="mb-8">
            Not Either/Or, But Both/And
          </h1>
          <p className="text-2xl text-foreground/70 leading-relaxed font-light mb-8">
            Dialectics, Disability, and Meaningful Access in Court
          </p>
          <p className="text-lg text-foreground/60 leading-relaxed mb-8">
            A framework for analyzing courtroom accessibility without credibility contests, 
            diagnostic gatekeeping, or inquiries into judicial intent.
          </p>
          
          {/* Download and View Options */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="/Not-EitherOr-But-BothAnd.pdf" download aria-label="Download Not Either/Or, But Both/And PDF">
              <Button size="lg" style={{color: '#ffffff'}}>
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </a>
            <p className="text-sm text-foreground/60">
              © 2026 Kathryn Copeland. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Presentation */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-center mb-8">Interactive Presentation</h2>
          <div className="max-w-4xl mx-auto">
            <iframe 
              src="https://gamma.app/embed/8m5h7tdn35dza2h" 
              style={{width: '100%', maxWidth: '100%', height: '450px', border: 'none', borderRadius: '8px'}} 
              allow="fullscreen" 
              title="Not Either/Or, But Both/And - Interactive Presentation"
              aria-label="Interactive presentation of Not Either/Or, But Both/And framework"
            />
          </div>
        </div>
      </section>

      {/* Orientation */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Courts are routinely asked to assess disability-related accommodation issues in real time, 
              often under procedural pressure and with incomplete records.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              These disputes frequently collapse into credibility assessments, intent-based inquiries, 
              or assumptions about impairment that the law does not require—and often forbids.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              This essay proposes a different approach: a belief-neutral, effect-based framework grounded 
              in existing disability law, dialectical reasoning, and familiar courtroom practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Essay Content */}
      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-8">The False Either/Or in Disability Analysis</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Courts are built on decision-making. Judges must assess credibility, weigh evidence, and 
              choose between competing accounts of reality. To do that efficiently, the legal system 
              relies—often unconsciously—on binary thinking: credible or not, capable or not, persuasive or not.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Most of the time, that works.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              But disability breaks the binary.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              A litigant can be credible, intelligent, and legally correct <em>and</em> functionally 
              impaired in how disability affects communication, sequencing, stamina, or performance under 
              standard courtroom procedures. Those truths can coexist. Treating them as mutually exclusive 
              is not neutrality—it is a reasoning error.
            </p>
            
            <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary">
              <p className="text-xl text-foreground italic leading-relaxed">
                Dialectical thinking names the correction: this is not either/or; it is both/and.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-8">Dialectics and Legal Error</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Dialectical thinking is often misunderstood as compromise or muddling the middle. It is neither. 
              Dialectics does not dilute truth; it holds two true propositions at once without forcing one 
              to cancel the other.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              In a courtroom context, the non-dialectical mistake usually looks like this:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-foreground/70 leading-relaxed space-y-2">
              <li>Presentation is treated as a proxy for credibility</li>
              <li>Delivery is treated as a proxy for merit</li>
              <li>Functional limitation is treated as a proxy for dishonesty, exaggeration, or lack of seriousness</li>
            </ul>
            <p className="text-lg text-foreground/70 leading-relaxed">
              When disability affects how information is delivered—rather than whether it is true—standard 
              procedures can distort the record. The problem is not the litigant. It is the mismatch between 
              how courts expect people to perform and how disability actually operates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-8">Why "Belief" Is the Wrong Frame</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Disability access disputes often collapse into an unhelpful question:
            </p>
            <p className="text-xl text-foreground/60 italic leading-relaxed mb-6 pl-8">
              Do I believe this person is really impaired?
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              That question feels intuitive, but it is legally misplaced. Disability civil rights law does 
              not require courts to resolve subjective belief disputes about diagnosis as a prerequisite to 
              access. The proper inquiry is procedural and effect-focused:
            </p>
            
            <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary">
              <p className="text-xl text-foreground italic leading-relaxed">
                Regardless of belief or intent, do standard courtroom procedures risk denying meaningful 
                access or distorting participation because of disability?
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              This shift matters. It moves the analysis away from credibility contests about impairment and 
              back to where the law puts it: the reliability and fairness of the process itself.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-8">Disability Discrimination Is Often Not Animus—It Is "Benign Neglect"</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              The Supreme Court has long recognized that disability discrimination looks different from other 
              forms of discrimination. It is often not the product of hostility or ill will, but of 
              thoughtlessness, indifference, and neutral rules applied without regard to functional reality.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              In other words, harm can occur even when no one intends harm.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              That insight is crucial for courts. It explains why focusing on motive or belief is frequently 
              the wrong diagnostic tool. The real barrier is often structural:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-foreground/70 leading-relaxed space-y-2">
              <li>Rigid pacing</li>
              <li>Fixed sequencing expectations</li>
              <li>Stamina demands that exceed human capacity</li>
              <li>Communication formats that assume a single neurocognitive style</li>
              <li>Procedures that silently equate fluency with truth</li>
            </ul>
            <p className="text-lg text-foreground/70 leading-relaxed">
              When these defaults interact with disability, exclusion can occur by design—even if the design 
              was unintentional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-8">Effect, Not Intent: The Doctrinal Bridge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Many lawyers remember from constitutional law that Equal Protection claims generally require 
              proof of discriminatory purpose, not merely disproportionate effects. That framework, however, 
              does not control disability access analysis.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Disability civil rights statutes focus on meaningful access and reasonable modification. The 
              question is not whether a decisionmaker intended to discriminate, but whether the effect of a 
              procedure denies access or distorts participation.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              This distinction matters in courtrooms. Judicial neutrality is preserved not by ignoring 
              disability's effects, but by ensuring that procedures do not misinterpret substance because of 
              how disability affects performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-8">CART Shows the Rule—Not the Exception</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Courts already know how to do belief-neutral, effect-based access analysis. They just don't 
              always recognize it.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Communication Access Realtime Translation (CART) is the clearest example.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              CART is routinely provided in courtrooms to ensure effective communication. It is granted 
              without questioning a participant's credibility, intelligence, or the merits of their position. 
              It does not alter testimony standards, evidentiary burdens, or outcomes. It modifies process to 
              preserve accuracy.
            </p>
            
            <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary">
              <p className="text-xl text-foreground italic leading-relaxed">
                CART works because courts implicitly understand something essential: when standard procedures 
                risk misunderstanding, the process must adjust—not the truth.
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              That same logic applies far beyond hearing loss. Pacing, sequencing, breaks, format, assistive 
              communication tools, and remote participation are all procedural variables that can determine 
              whether the record reflects reality or distortion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-8">Courts Are ADA-Covered Systems</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Court proceedings are not exempt from disability law. Access to the courts is a core 
              governmental function, and ensuring meaningful participation is a civil rights obligation—not 
              a courtesy.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Reasonable modifications are not about sympathy or special treatment. They are about accuracy, 
              reliability, and fairness in adjudication.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-8">Remedies Clarify the Standard</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Another often-missed point: the legal standard can vary by remedy.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Access-focused relief—such as procedural modification or injunctive orders—does not depend on 
              proof of discriminatory intent. Compensatory damages may require a showing such as deliberate 
              indifference, depending on jurisdiction. But the existence of a violation does not hinge on 
              belief or animus.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              That distinction further underscores why belief-based reasoning is a dead end.
            </p>
          </div>
        </div>
      </section>

      {/* The Copeland Questions - Key Section */}
      <section className="py-20 bg-primary/5">
        <div className="container-reading">
          <h2 className="mb-8">The Copeland Questions™</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              To replace belief-based analysis with disciplined, legally correct reasoning, courts can ask a 
              simple, neutral question:
            </p>
            
            <Card className="border-primary/40 bg-card mb-8">
              <CardContent className="p-10">
                <p className="text-2xl text-foreground leading-relaxed font-light">
                  Regardless of intent or belief, does this procedure risk denying meaningful access or 
                  distorting participation because of disability?
                </p>
              </CardContent>
            </Card>

            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              If the answer is yes, the response is not to lower standards—but to adjust process so the 
              merits can be evaluated without distortion.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              This approach protects:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-foreground/70 leading-relaxed space-y-2">
              <li>The integrity of the record</li>
              <li>The fairness of proceedings</li>
              <li>Appellate review</li>
              <li>And public confidence in the justice system</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-8">What This Is—and What It Is Not</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              This framework is not about excusing merit, inflating credibility, or granting special 
              treatment. It does not ask courts to believe more.
            </p>
            
            <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary">
              <p className="text-xl text-foreground italic leading-relaxed">
                It asks courts to mistake less.
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Dialectical thinking—both/and, not either/or—allows courts to see disability clearly, analyze 
              access correctly, and decide cases on their merits rather than on performance artifacts created 
              by inaccessible procedures.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              That is not just good disability law. It is good judging.
            </p>
          </div>
        </div>
      </section>

      {/* Where This Framework Applies */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Where This Framework Applies</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              This framework has applications across multiple domains of legal practice and scholarship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-border/40">
              <CardContent className="p-6 text-center">
                <Scale className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg mb-2">Judicial Education</h3>
                <p className="text-foreground/70 text-base leading-relaxed">
                  Bench materials and continuing legal education programs
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-6 text-center">
                <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg mb-2">Appellate Review</h3>
                <p className="text-foreground/70 text-base leading-relaxed">
                  Analysis of accommodation errors and procedural fairness
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg mb-2">ADA Compliance</h3>
                <p className="text-foreground/70 text-base leading-relaxed">
                  Title II court system compliance and implementation
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg mb-2">Legal Scholarship</h3>
                <p className="text-foreground/70 text-base leading-relaxed">
                  Academic research and teaching materials
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-card">
        <div className="container-reading text-center">
          <p className="text-base text-foreground/60 mb-4">
            This framework is part of ongoing work on courtroom accessibility, disability law, and 
            procedural justice.
          </p>
          <p className="text-sm text-foreground/60">
            © 2026 Kathryn Copeland. All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
