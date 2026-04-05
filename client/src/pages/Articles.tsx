import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Scale } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Editorial Minimalism with Strategic Maximalism
 * - Elegant serif headers with readable body text
 * - Teal brand color as power accent
 * - Clean, scannable sections with generous whitespace
 * - Magazine-quality layout for thought leadership
 */

export default function Articles() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <p className="text-accent-font text-primary mb-6">Legal Scholarship & Thought Leadership</p>
          <h1 className="mb-8">
            Articles & Essays
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">
            Exploring disability rights, courtroom accessibility, and the intersection of law and 
            lived experience through rigorous analysis and systems-level thinking.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="mb-12">
            <p className="text-accent-font text-primary mb-3">Featured Article</p>
            <h2 className="text-3xl font-display font-bold mb-4">Latest from Copeland Law</h2>
          </div>

          <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Visual Section */}
                <div className="md:col-span-2 bg-gradient-to-br from-primary/20 to-primary/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Scale className="h-24 w-24 text-primary mx-auto mb-6" />
                    <p className="text-sm text-accent-font text-primary font-semibold tracking-wide">
                      THE COPELAND QUESTIONS™
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">April 5, 2026</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-3 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                      Framework Introduction
                    </span>
                    <span className="text-sm text-muted-foreground">New · April 5, 2026</span>
                  </div>

                  <h3 className="font-display text-3xl font-bold mb-4">
                    Introducing The Copeland Questions™
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    A Structured Judicial Inquiry for ADA Title II Compliance in Court Proceedings
                  </p>

                  <p className="text-base text-foreground/70 mb-6 leading-relaxed">
                    This post formally names and introduces The Copeland Questions™ — a four-part 
                    structured inquiry grounded entirely in existing law, designed to make ADA 
                    Title II compliance analysis repeatable, reviewable, and on the record. 
                    Every tradition worth keeping has a structure. This is the structure.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/article/copeland-questions">
                      <Button>
                        <FileText className="mr-2 h-4 w-4" />
                        Read Full Post
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Second Featured Article: Administrative Pathways */}
      <section className="py-16 bg-card">
        <div className="container">
          <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Visual Section */}
                <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Scale className="h-24 w-24 text-primary mx-auto mb-6" />
                    <p className="text-sm text-accent-font text-primary font-semibold tracking-wide">
                      STRATEGIC GUIDE
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-3 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                      Strategic Guide
                    </span>
                    <span className="text-sm text-muted-foreground">2026</span>
                  </div>

                  <h3 className="font-display text-3xl font-bold mb-4">
                    Administrative Pathways to ADA Compliance in Family Courts
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    A Strategic Guide to Federal Remediation Channels
                  </p>

                  <p className="text-base text-foreground/70 mb-6 leading-relaxed">
                    A comprehensive roadmap for disabled parents, advocates, and legal professionals seeking 
                    to utilize federal administrative channels to report and remediate systemic violations. 
                    Covers DOJ Title II complaints, HHS Section 504 complaints, the P&A system, DOJ Statements 
                    of Interest, and NCD policy feedback.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/article/administrative-pathways">
                      <Button>
                        <FileText className="mr-2 h-4 w-4" />
                        Read Full Article
                      </Button>
                    </Link>
                    <a href="/Administrative-Pathways-ADA-Compliance-Full-Guide.pdf" download>
                      <Button variant="outline">
                        Download Full Guide PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* More Scholarship Section */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-3xl text-center">
          <p className="text-sm text-primary font-semibold tracking-wide uppercase mb-4">Scholarship in Progress</p>
          <h2 className="text-2xl font-display font-bold mb-4">More Articles Forthcoming</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Additional scholarship on CART as a model for cognitive accommodation, the doctrinal distinction between effect and intent in disability access analysis, and a practical guide to applying The Copeland Questions™ in real proceedings is in development. Subscribe or check back for updates.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Explore The Copeland Questions™ Framework
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn more about the complete framework for disability access analysis in courtrooms.
          </p>
          <Link href="/framework">
            <Button size="lg">
              <Scale className="mr-2 h-5 w-5" />
              View Full Framework
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
