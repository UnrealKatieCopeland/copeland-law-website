import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, Share2 } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Editorial Minimalism with Strategic Maximalism
 * - Elegant serif headers with readable body text
 * - Teal brand color as power accent
 * - Clean, scannable sections with generous whitespace
 * - Professional article layout for thought leadership
 */

export default function ArticleDetail() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Not Either/Or, But Both/And - The Copeland Questions™",
        text: "Dialectics, Disability, and Meaningful Access in Court",
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main id="main-content" className="flex-1">
        {/* Article Header */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8f6f3] to-white">
          <div className="container max-w-4xl">
            <Link href="/articles">
              <Button variant="outline" className="mb-8">
                ← Back to Articles
              </Button>
            </Link>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Not Either/Or, But Both/And
            </h1>
            
            <p className="text-2xl text-muted-foreground font-light mb-8">
              Dialectics, Disability, and Meaningful Access in Court
            </p>
            
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-8">
              <span>By Kathryn "Katie" Copeland</span>
              <span>•</span>
              <span>© 2026 All Rights Reserved</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/not-eitheror-but-bothand.pdf" download>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </a>
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
              <a href="https://not-eitheror-but-bothand-vfjt07a.gamma.site" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  View Interactive Version
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8">
                Courts are built on decision-making. Judges must assess credibility, weigh evidence, and choose between competing accounts of reality. To do that efficiently, the legal system relies—often unconsciously—on binary thinking: credible or not, capable or not, persuasive or not.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                Most of the time, that works.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                But disability breaks the binary.
              </p>

              <p className="text-xl leading-relaxed mb-12">
                A litigant can be credible, intelligent, and legally correct <em>and</em> functionally impaired in how disability affects communication, sequencing, stamina, or performance under standard courtroom procedures. Those truths can coexist. Treating them as mutually exclusive is not neutrality—it is a reasoning error.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 my-12 italic text-2xl text-muted-foreground">
                Dialectical thinking names the correction: this is not either/or; it is both/and.
              </blockquote>

              <Separator className="my-12" />

              <h2 className="font-display text-3xl font-bold mb-6">Dialectics is not "gray"</h2>

              <p className="text-xl leading-relaxed mb-8">
                Dialectical thinking is often misunderstood as compromise or muddling the middle. It is neither. Dialectics does not dilute truth; it holds two true propositions at once without forcing one to cancel the other.
              </p>

              <p className="text-xl leading-relaxed mb-6">
                In a courtroom context, the non-dialectical mistake usually looks like this:
              </p>

              <ul className="text-xl leading-relaxed mb-8 space-y-3">
                <li>Presentation is treated as a proxy for credibility</li>
                <li>Delivery is treated as a proxy for merit</li>
                <li>Functional limitation is treated as a proxy for dishonesty, exaggeration, or lack of seriousness</li>
              </ul>

              <p className="text-xl leading-relaxed mb-12">
                When disability affects how information is delivered—rather than whether it is true—standard procedures can distort the record. The problem is not the litigant. It is the mismatch between how courts expect people to perform and how disability actually operates.
              </p>

              <Separator className="my-12" />

              <h2 className="font-display text-3xl font-bold mb-6">Why "belief" is the wrong frame</h2>

              <p className="text-xl leading-relaxed mb-8">
                Disability access disputes often collapse into an unhelpful question:
              </p>

              <blockquote className="border-l-4 border-destructive pl-6 my-8 italic text-xl text-muted-foreground">
                Do I believe this person is really impaired?
              </blockquote>

              <p className="text-xl leading-relaxed mb-8">
                That question feels intuitive, but it is legally misplaced. Disability civil rights law does not require courts to resolve subjective belief disputes about diagnosis as a prerequisite to access. The proper inquiry is procedural and effect-focused:
              </p>

              <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-xl text-primary font-semibold">
                Regardless of belief or intent, do standard courtroom procedures risk denying meaningful access or distorting participation because of disability?
              </blockquote>

              <p className="text-xl leading-relaxed mb-12">
                This shift matters. It moves the analysis away from credibility contests about impairment and back to where the law puts it: the reliability and fairness of the process itself.
              </p>

              <Separator className="my-12" />

              <h2 className="font-display text-3xl font-bold mb-6">Disability discrimination is often not animus—it is "benign neglect"</h2>

              <p className="text-xl leading-relaxed mb-8">
                The Supreme Court has long recognized that disability discrimination looks different from other forms of discrimination. It is often not the product of hostility or ill will, but of thoughtlessness, indifference, and neutral rules applied without regard to functional reality.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                In other words, harm can occur even when no one intends harm.
              </p>

              <p className="text-xl leading-relaxed mb-6">
                That insight is crucial for courts. It explains why focusing on motive or belief is frequently the wrong diagnostic tool. The real barrier is often structural:
              </p>

              <ul className="text-xl leading-relaxed mb-8 space-y-3">
                <li>rigid pacing</li>
                <li>fixed sequencing expectations</li>
                <li>stamina demands that exceed human capacity</li>
                <li>communication formats that assume a single neurocognitive style</li>
                <li>procedures that silently equate fluency with truth</li>
              </ul>

              <p className="text-xl leading-relaxed mb-12">
                When these defaults interact with disability, exclusion can occur by design—even if the design was unintentional.
              </p>

              <Separator className="my-12" />

              <h2 className="font-display text-3xl font-bold mb-6">Effect, not intent: the doctrinal bridge</h2>

              <p className="text-xl leading-relaxed mb-8">
                Many lawyers remember from constitutional law that Equal Protection claims generally require proof of discriminatory purpose, not merely disproportionate effects. That framework, however, does not control disability access analysis.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                Disability civil rights statutes focus on meaningful access and reasonable modification. The question is not whether a decisionmaker intended to discriminate, but whether the effect of a procedure denies access or distorts participation.
              </p>

              <p className="text-xl leading-relaxed mb-12">
                This distinction matters in courtrooms. Judicial neutrality is preserved not by ignoring disability's effects, but by ensuring that procedures do not misinterpret substance because of how disability affects performance.
              </p>

              <Separator className="my-12" />

              <h2 className="font-display text-3xl font-bold mb-6">CART shows the rule—not the exception</h2>

              <p className="text-xl leading-relaxed mb-8">
                Courts already know how to do belief-neutral, effect-based access analysis. They just don't always recognize it.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                Communication Access Realtime Translation (CART) is the clearest example.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                CART is routinely provided in courtrooms to ensure effective communication. It is granted without questioning a participant's credibility, intelligence, or the merits of their position. It does not alter testimony standards, evidentiary burdens, or outcomes. It modifies process to preserve accuracy.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-xl text-primary font-semibold">
                CART works because courts implicitly understand something essential: when standard procedures risk misunderstanding, the process must adjust—not the truth.
              </blockquote>

              <p className="text-xl leading-relaxed mb-12">
                That same logic applies far beyond hearing loss. Pacing, sequencing, breaks, format, assistive communication tools, and remote participation are all procedural variables that can determine whether the record reflects reality or distortion.
              </p>

              {/* Call-out Box for Judges and Clerks */}
              <Card className="my-12 bg-[#f8f6f3] border-primary">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4 text-primary">For Judges and Clerks</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    When evaluating accommodation requests, consider: If this were a hearing-related request for CART, would I question the participant's credibility or the merits of their case before granting it?
                  </p>
                  <p className="text-lg leading-relaxed">
                    If the answer is no, apply the same reasoning to other disability-related procedural modifications. The goal is not to change standards—it's to ensure the record accurately reflects what happened, not how disability affected performance.
                  </p>
                </CardContent>
              </Card>

              <Separator className="my-12" />

              <h2 className="font-display text-3xl font-bold mb-6">Courts are ADA-covered systems</h2>

              <p className="text-xl leading-relaxed mb-8">
                Court proceedings are not exempt from disability law. Access to the courts is a core governmental function, and ensuring meaningful participation is a civil rights obligation—not a courtesy.
              </p>

              <p className="text-xl leading-relaxed mb-12">
                Reasonable modifications are not about sympathy or special treatment. They are about accuracy, reliability, and fairness in adjudication.
              </p>

              <Separator className="my-12" />

              <h2 className="font-display text-3xl font-bold mb-6">Remedies clarify the standard</h2>

              <p className="text-xl leading-relaxed mb-8">
                Another often-missed point: the legal standard can vary by remedy.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                Access-focused relief—such as procedural modification or injunctive orders—does not depend on proof of discriminatory intent. Compensatory damages may require a showing such as deliberate indifference, depending on jurisdiction. But the existence of a violation does not hinge on belief or animus.
              </p>

              <p className="text-xl leading-relaxed mb-12">
                That distinction further underscores why belief-based reasoning is a dead end.
              </p>

              <Separator className="my-12" />

              <h2 className="font-display text-3xl font-bold mb-6">The Copeland Questions™</h2>

              <p className="text-xl leading-relaxed mb-8">
                To replace belief-based analysis with disciplined, legally correct reasoning, courts can ask a simple, neutral question:
              </p>

              <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-2xl text-primary font-bold">
                Regardless of intent or belief, does this procedure risk denying meaningful access or distorting participation because of disability?
              </blockquote>

              <p className="text-xl leading-relaxed mb-6">
                If the answer is yes, the response is not to lower standards—but to adjust process so the merits can be evaluated without distortion.
              </p>

              <p className="text-xl leading-relaxed mb-6">
                This approach protects:
              </p>

              <ul className="text-xl leading-relaxed mb-12 space-y-3">
                <li>the integrity of the record</li>
                <li>the fairness of proceedings</li>
                <li>appellate review</li>
                <li>and public confidence in the justice system</li>
              </ul>

              <Separator className="my-12" />

              <h2 className="font-display text-3xl font-bold mb-6">What this is—and what it is not</h2>

              <p className="text-xl leading-relaxed mb-8">
                This framework is not about excusing merit, inflating credibility, or granting special treatment. It does not ask courts to believe more.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-2xl text-primary font-bold">
                It asks courts to mistake less.
              </blockquote>

              <p className="text-xl leading-relaxed mb-8">
                Dialectical thinking—both/and, not either/or—allows courts to see disability clearly, analyze access correctly, and decide cases on their merits rather than on performance artifacts created by inaccessible procedures.
              </p>

              <p className="text-xl leading-relaxed mb-4">
                That is not just good disability law.
              </p>

              <p className="text-xl leading-relaxed font-semibold">
                It is good judging.
              </p>
            </article>

            <Separator className="my-16" />

            {/* Citation Section */}
            <section className="my-16">
              <h2 className="font-display text-3xl font-bold mb-8">Cite This Work</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">APA Format</h3>
                  <p className="text-base font-mono bg-muted p-4 rounded">
                    Copeland, K. (2026). <em>Not either/or, but both/and: Dialectics, disability, and meaningful access in court</em>. Copeland Law. https://copelandlawtexas.com/article/not-eitheror-but-bothand
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Bluebook Format</h3>
                  <p className="text-base font-mono bg-muted p-4 rounded">
                    Kathryn Copeland, <em>Not Either/Or, But Both/And: Dialectics, Disability, and Meaningful Access in Court</em>, COPELAND LAW (2026), https://copelandlawtexas.com/article/not-eitheror-but-bothand.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">MLA Format</h3>
                  <p className="text-base font-mono bg-muted p-4 rounded">
                    Copeland, Kathryn. "Not Either/Or, But Both/And: Dialectics, Disability, and Meaningful Access in Court." <em>Copeland Law</em>, 2026, copelandlawtexas.com/article/not-eitheror-but-bothand.
                  </p>
                </CardContent>
              </Card>

              <p className="text-sm text-muted-foreground mt-6">
                © 2026 Kathryn Copeland. All Rights Reserved. The Copeland Questions™ is a trademark of Kathryn Copeland.
              </p>
            </section>

            {/* Related Resources */}
            <section className="my-16">
              <h2 className="font-display text-3xl font-bold mb-8">Related Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">CART in the Courtroom</h3>
                    <p className="text-base text-muted-foreground mb-4">
                      Model guidelines from the American Judges Foundation on providing communication access.
                    </p>
                    <a href="/cart-in-the-courtroom-model-guidelines.pdf" download>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Guidelines
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">The Copeland Questions™</h3>
                    <p className="text-base text-muted-foreground mb-4">
                      Explore the full framework for disability access analysis in courtrooms.
                    </p>
                    <Link href="/framework">
                      <Button variant="outline">
                        View Framework
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </section>

            <div className="text-center my-16">
              <Link href="/articles">
                <Button variant="outline" size="lg">
                  ← Back to All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
