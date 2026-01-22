/**
 * Editorial Minimalism Design: Long-form article page
 * Layout: Readable essay format with pull quotes, call-out boxes, and citation tools
 * Typography: 18px base for brain injury accessibility, 1.8 line height
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Download, Share2, BookOpen, FileText, Link as LinkIcon } from "lucide-react";
import { Link } from "wouter";

export default function ArticleNotEitherOr() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "Not Either/Or, But Both/And - Dialectics, Disability, and Meaningful Access in Court";
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`I thought you might find this article interesting: ${url}`)}`
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <article>
        <header className="py-24 bg-card">
          <div className="container-reading">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                Featured Framework
              </span>
              <span className="text-sm text-muted-foreground">2026</span>
            </div>
            
            <h1 className="mb-6">
              Not Either/Or, But Both/And
            </h1>
            
            <p className="text-2xl text-foreground/70 leading-relaxed font-light mb-8">
              Dialectics, Disability, and Meaningful Access in Court
            </p>

            <div className="flex items-center justify-between pt-8 border-t border-border/40">
              <div>
                <p className="text-sm text-muted-foreground mb-1">By Kathryn Copeland</p>
                <p className="text-sm text-muted-foreground">Attorney at Law, Texas</p>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShare('twitter')}
                  aria-label="Share on Twitter"
                 
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShare('linkedin')}
                  aria-label="Share on LinkedIn"
                 
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={copyLink}
                  aria-label="Copy link"
                 
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Courts are built on decision-making. Judges must assess credibility, weigh evidence, and 
                choose between competing accounts of reality. To do that efficiently, the legal system 
                relies—often unconsciously—on binary thinking: credible or not, capable or not, persuasive or not.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Most of the time, that works.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                But disability breaks the binary.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                A litigant can be credible, intelligent, and legally correct <em>and</em> functionally 
                impaired in how disability affects communication, sequencing, stamina, or performance under 
                standard courtroom procedures. Those truths can coexist. Treating them as mutually exclusive 
                is not neutrality—it is a reasoning error.
              </p>

              <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary">
                <p className="text-xl font-display font-semibold text-primary mb-0">
                  Dialectical thinking names the correction:<br />
                  this is not either/or; it is both/and.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Dialectics is not "gray" */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">Dialectics is not "gray"</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Dialectical thinking is often misunderstood as compromise or muddling the middle. It is neither. 
                Dialectics does not dilute truth; it holds two true propositions at once without forcing one to 
                cancel the other.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In a courtroom context, the non-dialectical mistake usually looks like this:
              </p>

              <ul className="text-lg leading-relaxed mb-6 space-y-3">
                <li>Presentation is treated as a proxy for credibility</li>
                <li>Delivery is treated as a proxy for merit</li>
                <li>Functional limitation is treated as a proxy for dishonesty, exaggeration, or lack of seriousness</li>
              </ul>

              <p className="text-lg leading-relaxed mb-6">
                When disability affects how information is delivered—rather than whether it is true—standard 
                procedures can distort the record. The problem is not the litigant. It is the mismatch between 
                how courts expect people to perform and how disability actually operates.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Why "belief" is the wrong frame */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">Why "belief" is the wrong frame</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Disability access disputes often collapse into an unhelpful question:
              </p>

              <div className="my-8 p-6 bg-muted/30 rounded-lg">
                <p className="text-xl italic text-center mb-0">
                  Do I believe this person is really impaired?
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                That question feels intuitive, but it is legally misplaced. Disability civil rights law does 
                not require courts to resolve subjective belief disputes about diagnosis as a prerequisite to 
                access. The proper inquiry is procedural and effect-focused:
              </p>

              <div className="my-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-xl font-medium text-center mb-0">
                  Regardless of belief or intent, do standard courtroom procedures risk denying meaningful 
                  access or distorting participation because of disability?
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                This shift matters. It moves the analysis away from credibility contests about impairment and 
                back to where the law puts it: the reliability and fairness of the process itself.
              </p>
            </div>
          </div>
        </section>

        {/* For Judges and Clerks Call-out Box */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-10">
                <div className="flex items-start gap-4 mb-6">
                  <Scale className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">For Judges and Clerks</h3>
                    <p className="text-sm text-accent-font text-primary font-medium">
                      A Practical Framework for Courtroom Accessibility
                    </p>
                  </div>
                </div>
                
                <p className="text-base leading-relaxed mb-6">
                  This framework is designed to support judicial decision-making without requiring medical 
                  expertise, diagnostic gatekeeping, or credibility assessments about disability status. 
                  It provides a belief-neutral, legally grounded approach that:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Protects the integrity of the record and appellate review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Reduces litigation risk related to ADA Title II compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Helps courts fulfill their duty to vacate void orders under <em>Bridgman v. Moore</em></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Maintains procedural fairness without lowering substantive standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Applies familiar courtroom practices (like CART) to broader access issues</span>
                  </li>
                </ul>

                <p className="text-base leading-relaxed mb-6">
                  The Copeland Questions™ can be integrated into case management orders, standing orders, 
                  or bench protocols to ensure consistent, legally defensible accommodation analysis.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="https://not-eitheror-but-bothand-vfjt07a.gamma.site" target="_blank" rel="noopener noreferrer">
                    <Button>
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Full Essay
                    </Button>
                  </a>
                  <a href="https://not-eitheror-but-bothand-7lj5vn6.gamma.site" target="_blank" rel="noopener noreferrer">
                    <Button>
                      <FileText className="mr-2 h-4 w-4" />
                      Quick Reference Deck
                    </Button>
                  </a>
                  <a href="/Not-EitherOr-But-BothAnd.pdf" download>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section: Benign neglect */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">Disability discrimination is often not animus—it is "benign neglect"</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The Supreme Court has long recognized that disability discrimination looks different from other 
                forms of discrimination. It is often not the product of hostility or ill will, but of 
                thoughtlessness, indifference, and neutral rules applied without regard to functional reality.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In other words, harm can occur even when no one intends harm.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That insight is crucial for courts. It explains why focusing on motive or belief is frequently 
                the wrong diagnostic tool. The real barrier is often structural:
              </p>

              <ul className="text-lg leading-relaxed mb-6 space-y-3">
                <li>rigid pacing</li>
                <li>fixed sequencing expectations</li>
                <li>stamina demands that exceed human capacity</li>
                <li>communication formats that assume a single neurocognitive style</li>
                <li>procedures that silently equate fluency with truth</li>
              </ul>

              <p className="text-lg leading-relaxed mb-6">
                When these defaults interact with disability, exclusion can occur by design—even if the design 
                was unintentional.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Effect, not intent */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">Effect, not intent: the doctrinal bridge</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Many lawyers remember from constitutional law that Equal Protection claims generally require 
                proof of discriminatory purpose, not merely disproportionate effects. That framework, however, 
                does not control disability access analysis.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Disability civil rights statutes focus on meaningful access and reasonable modification. The 
                question is not whether a decisionmaker intended to discriminate, but whether the effect of a 
                procedure denies access or distorts participation.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This distinction matters in courtrooms. Judicial neutrality is preserved not by ignoring 
                disability's effects, but by ensuring that procedures do not misinterpret substance because 
                of how disability affects performance.
              </p>
            </div>
          </div>
        </section>

        {/* Section: CART shows the rule */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">CART shows the rule—not the exception</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Courts already know how to do belief-neutral, effect-based access analysis. They just don't 
                always recognize it.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Communication Access Realtime Translation (CART) is the clearest example.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                CART is routinely provided in courtrooms to ensure effective communication. It is granted 
                without questioning a participant's credibility, intelligence, or the merits of their position. 
                It does not alter testimony standards, evidentiary burdens, or outcomes. It modifies process 
                to preserve accuracy.
              </p>

              <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary">
                <p className="text-xl font-display font-semibold text-primary mb-0">
                  CART works because courts implicitly understand something essential:<br />
                  when standard procedures risk misunderstanding, the process must adjust—not the truth.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                That same logic applies far beyond hearing loss. Pacing, sequencing, breaks, format, assistive 
                communication tools, and remote participation are all procedural variables that can determine 
                whether the record reflects reality or distortion.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Courts are ADA-covered systems */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">Courts are ADA-covered systems</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Court proceedings are not exempt from disability law. Access to the courts is a core 
                governmental function, and ensuring meaningful participation is a civil rights obligation—not 
                a courtesy.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Reasonable modifications are not about sympathy or special treatment. They are about accuracy, 
                reliability, and fairness in adjudication.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Remedies clarify the standard */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">Remedies clarify the standard</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Another often-missed point: the legal standard can vary by remedy.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Access-focused relief—such as procedural modification or injunctive orders—does not depend on 
                proof of discriminatory intent. Compensatory damages may require a showing such as deliberate 
                indifference, depending on jurisdiction. But the existence of a violation does not hinge on 
                belief or animus.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That distinction further underscores why belief-based reasoning is a dead end.
              </p>
            </div>
          </div>
        </section>

        {/* Section: The Copeland Questions */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">The Copeland Questions™</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                To replace belief-based analysis with disciplined, legally correct reasoning, courts can ask 
                a simple, neutral question:
              </p>

              <div className="my-8 p-8 bg-primary/10 border-2 border-primary/30 rounded-lg">
                <p className="text-xl font-display font-bold text-center mb-0">
                  Regardless of intent or belief, does this procedure risk denying meaningful access or 
                  distorting participation because of disability?
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                If the answer is yes, the response is not to lower standards—but to adjust process so the 
                merits can be evaluated without distortion.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This approach protects:
              </p>

              <ul className="text-lg leading-relaxed mb-6 space-y-3">
                <li>the integrity of the record</li>
                <li>the fairness of proceedings</li>
                <li>appellate review</li>
                <li>and public confidence in the justice system</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: What this is—and what it is not */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">What this is—and what it is not</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                This framework is not about excusing merit, inflating credibility, or granting special treatment. 
                It does not ask courts to believe more.
              </p>

              <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary">
                <p className="text-xl font-display font-semibold text-primary mb-0">
                  It asks courts to mistake less.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Dialectical thinking—both/and, not either/or—allows courts to see disability clearly, analyze 
                access correctly, and decide cases on their merits rather than on performance artifacts created 
                by inaccessible procedures.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                That is not just good disability law.
              </p>

              <p className="text-lg leading-relaxed mb-6 font-medium">
                It is good judging.
              </p>
            </div>
          </div>
        </section>

        {/* Cite This Work Section */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">Cite This Work</h2>
            
            <Card className="border-border/40">
              <CardContent className="p-8">
                <p className="text-sm text-muted-foreground mb-6">
                  Use the following citation formats to reference this article in your work:
                </p>

                <div className="space-y-6">
                  {/* APA Format */}
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">APA (7th Edition)</p>
                    <div className="p-4 bg-muted/30 rounded font-mono text-sm">
                      Copeland, K. (2026). <em>Not either/or, but both/and: Dialectics, disability, and meaningful access in court</em>. Copeland Law. https://copelandlawtexas.com/article/not-eitheror-but-bothand
                    </div>
                  </div>

                  {/* Bluebook Format */}
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Bluebook (21st Edition)</p>
                    <div className="p-4 bg-muted/30 rounded font-mono text-sm">
                      Kathryn Copeland, <em>Not Either/Or, But Both/And: Dialectics, Disability, and Meaningful Access in Court</em>, Copeland Law (2026), https://copelandlawtexas.com/article/not-eitheror-but-bothand.
                    </div>
                  </div>

                  {/* MLA Format */}
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">MLA (9th Edition)</p>
                    <div className="p-4 bg-muted/30 rounded font-mono text-sm">
                      Copeland, Kathryn. "Not Either/Or, But Both/And: Dialectics, Disability, and Meaningful Access in Court." <em>Copeland Law</em>, 2026, copelandlawtexas.com/article/not-eitheror-but-bothand.
                    </div>
                  </div>

                  {/* Chicago Format */}
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Chicago (17th Edition)</p>
                    <div className="p-4 bg-muted/30 rounded font-mono text-sm">
                      Copeland, Kathryn. "Not Either/Or, But Both/And: Dialectics, Disability, and Meaningful Access in Court." Copeland Law, 2026. https://copelandlawtexas.com/article/not-eitheror-but-bothand.
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/40">
                  <p className="text-sm text-muted-foreground">
                    © 2026 Kathryn Copeland. All Rights Reserved.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    The Copeland Questions™ is a trademark of Kathryn Copeland.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">Related Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">
                    Interactive Presentation
                  </h3>
                  <p className="text-base text-muted-foreground mb-6">
                    View the full framework in an interactive, visually rich format on Gamma.
                  </p>
                  <a href="https://not-eitheror-but-bothand-vfjt07a.gamma.site" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      View on Gamma
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">
                    Download PDF
                  </h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Download the complete article as a professionally formatted PDF document.
                  </p>
                  <a href="/Not-EitherOr-But-BothAnd.pdf" download>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link href="/resources">
                <Button size="lg">
                  Explore More Resources
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
