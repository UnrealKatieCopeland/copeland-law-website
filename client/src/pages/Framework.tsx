/**
 * Editorial Minimalism Design: Framework Landing Page
 * Introduces the framework, explains purpose and audience, links to full documents
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, FileText, BookOpen, Download, Users, Target, AlertCircle, ExternalLink, GitBranch, Calculator } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Framework() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "The Copeland Questions™: A framework for analyzing courtroom accessibility without credibility contests or diagnostic gatekeeping.";
    
    if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "copy") {
      navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-8 w-8 text-primary" />
            <p className="text-accent-font text-primary">Featured Framework</p>
          </div>
          
          <h1 className="mb-8">
            Not Either/Or, But Both/And
          </h1>
          
          <p className="text-2xl text-foreground/70 leading-relaxed font-light mb-8">
            Dialectics, Disability, and Meaningful Access in Court
          </p>

          <p className="text-lg text-foreground/60 leading-relaxed mb-12">
            A belief-neutral, effect-based framework for analyzing courtroom accessibility without 
            credibility contests, diagnostic gatekeeping, or inquiries into judicial intent.
          </p>
          
          {/* Primary Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://not-either-or-but-both-a-au2bjb1.gamma.site" target="_blank" rel="noopener noreferrer">
              <Button size="lg" style={{color: '#ffffff'}}>
                <BookOpen className="mr-2 h-5 w-5" />
                View Full Framework
              </Button>
            </a>
            <a href="/Not-EitherOr-But-BothAnd.pdf" download>
              <Button size="lg" variant="outline" style={{color: '#ffffff'}}>
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            © 2026 Kathryn Copeland. All Rights Reserved. The Copeland Questions™ is a trademark of Kathryn Copeland.
          </p>
        </div>
      </section>

      {/* What Is This Framework? */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-8">What Is This Framework?</h2>
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Courts are routinely asked to assess disability-related accommodation issues in real time, 
              often under procedural pressure and with incomplete records. These disputes frequently 
              collapse into credibility assessments, intent-based inquiries, or assumptions about 
              impairment that the law does not require—and often forbids.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              <strong className="text-foreground">The Copeland Questions™</strong> offers a different 
              approach: a structured, belief-neutral framework grounded in existing disability law, 
              dialectical reasoning, and familiar courtroom practices. It provides judges, clerks, and 
              attorneys with a clear pathway to analyze accessibility issues without requiring medical 
              expertise or engaging in credibility contests about disability status.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Effect-Based Analysis</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Shifts focus from "Do I believe you're disabled?" to "Does the standard procedure 
                  risk denying meaningful access?"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Scale className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Legally Grounded</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Built on Title II of the ADA, Section 504, and established case law including 
                  Gordon v. Massachusetts DCF (2015).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Practical Application</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Provides concrete questions judges can ask in the moment, without requiring medical 
                  training or diagnostic expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-8">Who Is This For?</h2>
          
          <div className="space-y-6">
            <Card className="border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Scale className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Judges and Judicial Officers</h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      Use this framework to analyze accommodation requests in real time, maintain 
                      procedural efficiency, and ensure compliance with federal disability law—without 
                      requiring medical expertise or engaging in credibility assessments about disability 
                      status.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Court Clerks and Administrators</h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      Apply these principles when processing accommodation requests, designing court 
                      procedures, and advising judicial officers on accessibility compliance. The 
                      framework provides clear guidance for administrative decision-making.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Attorneys and Advocates</h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      Frame accommodation requests using effect-based analysis, anticipate judicial 
                      concerns, and advocate for clients without requiring them to "prove" disability 
                      severity. The framework provides a shared language for discussing accessibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Legal Educators and Researchers</h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      Integrate this framework into judicial education programs, CLE courses, and 
                      academic research on disability law and court access. The dialectical approach 
                      offers a fresh lens for analyzing longstanding access issues.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Copeland Questions */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-8">The Copeland Questions™</h2>
          
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            At the heart of this framework are three simple questions that shift the analysis from 
            belief-based to effect-based:
          </p>

          <div className="space-y-6 mb-12">
            <Card className="border-l-4 border-primary">
              <CardContent className="p-8">
                <p className="text-2xl font-display font-bold text-primary mb-3">1.</p>
                <p className="text-xl font-medium mb-4">
                  Does the standard procedure risk denying meaningful access?
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  This question focuses on procedural effects, not individual credibility. It asks 
                  whether the current process creates barriers that could prevent participation, 
                  regardless of whether the judge believes the person is "really" disabled.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-primary">
              <CardContent className="p-8">
                <p className="text-2xl font-display font-bold text-primary mb-3">2.</p>
                <p className="text-xl font-medium mb-4">
                  What modification would address the effect without fundamentally altering the proceeding?
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  This question identifies reasonable solutions. It acknowledges that courts can adapt 
                  procedures (pacing, format, breaks, assistive technology) without compromising 
                  judicial authority or procedural integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-primary">
              <CardContent className="p-8">
                <p className="text-2xl font-display font-bold text-primary mb-3">3.</p>
                <p className="text-xl font-medium mb-4">
                  Is there a documented, individualized reason this specific modification would impose 
                  undue burden or fundamentally alter the proceeding?
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  This question applies the legal standard for denial. It requires courts to articulate 
                  specific, case-based reasons for denying accommodation—not rely on generalized concerns 
                  about efficiency or fairness.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="p-8 bg-primary/10 rounded-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-3">Why These Questions Work</h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  These questions bypass the credibility trap entirely. They don't ask judges to evaluate 
                  medical records, assess disability severity, or determine whether someone "really needs" 
                  accommodation. Instead, they focus on procedural effects and legal standards—areas where 
                  judges already have expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Resources */}
      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-8">Supporting Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Full Essay</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Read the complete framework with legal analysis, case law citations, and dialectical 
                  reasoning.
                </p>
                <a href="https://not-either-or-but-both-a-au2bjb1.gamma.site" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" style={{color: '#ffffff'}}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Essay
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <FileText className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Quick Reference Deck</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Visual slide deck with concise cards, practical examples, and specific modifications.
                </p>
                <a href="https://not-eitheror-but-bothand-7lj5vn6.gamma.site" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" style={{color: '#ffffff'}}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Quick Reference
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <GitBranch className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Interactive Decision Tree</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Step-by-step guidance for analyzing accommodation requests with legal outcomes and next steps.
                </p>
                <Link href="/decision-tree">
                  <Button variant="outline" style={{color: '#ffffff'}}>
                    Use Decision Tree
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Accommodation Calculator */}
          <Card className="border-primary/30 mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Calculator className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Not Sure What to Request?</h3>
                  </div>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Use our Accommodation Calculator to get personalized recommendations based on your 
                    situation, complete with legal foundations, case law citations, and a ready-to-submit 
                    template letter.
                  </p>
                </div>
                <Link href="/accommodation-calculator">
                  <Button size="lg" style={{color: '#ffffff'}}>
                    Use Calculator
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Test Your Understanding */}
          <Card className="border-primary/30">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Test Your Understanding</h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Take our interactive quiz with real courtroom scenarios and case law explanations. 
                    See how The Copeland Questions™ apply in practice.
                  </p>
                </div>
                <Link href="/quiz">
                  <Button size="lg" style={{color: '#ffffff'}}>
                    Take the Quiz
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Examples of Harm */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                    <h3 className="text-xl font-bold">Why This Framework Matters</h3>
                  </div>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    See documented cases showing what happens when courts fail to apply disability 
                    rights law—including the heartbreaking Gordon v. Massachusetts DCF case where a 
                    mother lost her baby based solely on disability diagnosis.
                  </p>
                </div>
                <Link href="/examples-of-harm">
                  <Button size="lg" variant="outline" style={{color: '#ffffff'}}>
                    View Examples of Harm
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Citation Section */}
      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-8">How to Cite This Framework</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary mb-2">APA (7th Edition)</p>
                <p className="text-sm font-mono bg-background p-4 rounded-sm">
                  Copeland, K. (2026). <em>Not either/or, but both/and: Dialectics, disability, and meaningful access in court</em>. 
                  https://copelandlawtexas.com/framework
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary mb-2">Bluebook (21st Edition)</p>
                <p className="text-sm font-mono bg-background p-4 rounded-sm">
                  Kathryn Copeland, <em>Not Either/Or, But Both/And: Dialectics, Disability, and Meaningful Access in Court</em>, 
                  https://copelandlawtexas.com/framework (2026).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary mb-2">MLA (9th Edition)</p>
                <p className="text-sm font-mono bg-background p-4 rounded-sm">
                  Copeland, Kathryn. "Not Either/Or, But Both/And: Dialectics, Disability, and Meaningful Access in Court." 
                  <em>Copeland Law</em>, 2026, copelandlawtexas.com/framework.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary mb-2">Chicago (17th Edition)</p>
                <p className="text-sm font-mono bg-background p-4 rounded-sm">
                  Copeland, Kathryn. "Not Either/Or, But Both/And: Dialectics, Disability, and Meaningful Access in Court." 
                  Copeland Law. 2026. https://copelandlawtexas.com/framework.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-background rounded-sm">
            <p className="text-sm text-foreground/60">
              © 2026 Kathryn Copeland. All Rights Reserved. The Copeland Questions™ is a trademark of Kathryn Copeland.
            </p>
          </div>
        </div>
      </section>

      {/* Social Sharing */}
      <section className="py-16 bg-background">
        <div className="container-reading text-center">
          <h2 className="mb-6">Share This Framework</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Help spread awareness of disability rights in courtrooms
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => handleShare("twitter")} variant="outline" style={{color: '#ffffff'}}>
              Share on Twitter
            </Button>
            <Button onClick={() => handleShare("linkedin")} variant="outline" style={{color: '#ffffff'}}>
              Share on LinkedIn
            </Button>
            <Button onClick={() => handleShare("copy")} variant="outline" style={{color: '#ffffff'}}>
              Copy Link
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
