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
                <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Scale className="h-24 w-24 text-primary mx-auto mb-6" />
                    <p className="text-sm text-accent-font text-primary font-semibold tracking-wide">
                      THE COPELAND QUESTIONS™
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-3 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                      Featured Framework
                    </span>
                    <span className="text-sm text-muted-foreground">2026</span>
                  </div>

                  <h3 className="font-display text-3xl font-bold mb-4">
                    Not Either/Or, But Both/And
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Dialectics, Disability, and Meaningful Access in Court
                  </p>

                  <p className="text-base text-foreground/70 mb-6 leading-relaxed">
                    A belief-neutral, effect-based framework for analyzing courtroom accessibility 
                    without credibility contests, diagnostic gatekeeping, or inquiries into judicial intent. 
                    This essay proposes a disciplined approach grounded in existing disability law, 
                    dialectical reasoning, and familiar courtroom practices like CART.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/article/not-eitheror-but-bothand">
                      <Button style={{ color: '#ffffff' }}>
                        <FileText className="mr-2 h-4 w-4" />
                        Read Full Article
                      </Button>
                    </Link>
                    <a href="/Not-EitherOr-But-BothAnd.pdf" download>
                      <Button variant="outline" style={{ color: '#ffffff' }}>
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="text-3xl font-display font-bold mb-12">More Articles Coming Soon</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Article 1 */}
            <Card>
              <CardContent className="p-8">
                <BookOpen className="h-12 w-12 text-primary mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">
                  The Copeland Questions™: A Practical Guide
                </h3>
                <p className="text-base text-muted-foreground mb-6">
                  Step-by-step guidance for applying the framework in real courtroom scenarios.
                </p>
                <p className="text-sm text-primary font-medium">Coming Soon</p>
              </CardContent>
            </Card>

            {/* Placeholder Article 2 */}
            <Card>
              <CardContent className="p-8">
                <Scale className="h-12 w-12 text-primary mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">
                  CART as the Rule, Not the Exception
                </h3>
                <p className="text-base text-muted-foreground mb-6">
                  Why courts already know how to do belief-neutral access analysis—they just don't always recognize it.
                </p>
                <p className="text-sm text-primary font-medium">Coming Soon</p>
              </CardContent>
            </Card>

            {/* Placeholder Article 3 */}
            <Card>
              <CardContent className="p-8">
                <FileText className="h-12 w-12 text-primary mb-6" />
                <h3 className="font-display text-xl font-bold mb-3">
                  Effect, Not Intent: The Doctrinal Bridge
                </h3>
                <p className="text-base text-muted-foreground mb-6">
                  Understanding why disability access analysis differs from Equal Protection doctrine.
                </p>
                <p className="text-sm text-primary font-medium">Coming Soon</p>
              </CardContent>
            </Card>
          </div>
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
            <Button size="lg" style={{ color: '#ffffff' }}>
              <Scale className="mr-2 h-5 w-5" />
              View Full Framework
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
