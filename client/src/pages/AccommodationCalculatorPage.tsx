/**
 * Editorial Minimalism Design: Accommodation Calculator page
 * Purpose: Help users identify and request appropriate accommodations
 * Layout: Introduction + interactive calculator component
 */

import { Button } from "@/components/ui/button";
import { Calculator, Scale } from "lucide-react";
import { Link } from "wouter";
import AccommodationCalculator from "@/components/AccommodationCalculator";

export default function AccommodationCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="h-8 w-8 text-primary" />
            <p className="text-accent-font text-primary">Interactive Tool</p>
          </div>
          <h1 className="mb-8">
            Accommodation Calculator
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">
            Not sure what accommodations to request? Answer a few questions about your situation and receive personalized recommendations with legal foundations, case law citations, and a ready-to-submit template letter.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-display font-bold mb-8">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Answer Questions</h3>
              <p className="text-base text-muted-foreground">
                Tell us about your proceeding type, disability categories, and specific barriers you experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Get Recommendations</h3>
              <p className="text-base text-muted-foreground">
                Receive personalized accommodation recommendations with legal basis, case law, and explanations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Download Template</h3>
              <p className="text-base text-muted-foreground">
                Download a complete, properly formatted request letter ready to submit to the court.
              </p>
            </div>
          </div>

          <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-sm">
            <div className="space-y-2">
              <p className="text-base text-foreground/90 leading-relaxed">
                <strong>Important:</strong> This tool provides educational guidance based on federal disability law and The Copeland Questions™ framework. <strong>It is not legal advice and does not create an attorney-client relationship.</strong>
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                For case-specific legal counsel, consult with an attorney experienced in ADA litigation in your jurisdiction. Laws and court procedures vary by state and locality. These templates provide a starting point for making proper requests, but court responses vary widely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-card">
        <div className="container max-w-5xl">
          <AccommodationCalculator />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-display font-bold mb-8">Related Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded-sm">
              <Scale className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-lg mb-2">The Copeland Questions™ Framework</h3>
              <p className="text-base text-muted-foreground mb-4">
                Learn the theoretical foundation behind these recommendations: a belief-neutral, effect-based framework for analyzing courtroom accessibility.
              </p>
              <Link href="/framework">
                <Button variant="outline" style={{ color: '#ffffff' }}>
                  View Framework
                </Button>
              </Link>
            </div>

            <div className="p-6 bg-card rounded-sm">
              <Calculator className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-lg mb-2">Interactive Decision Tree</h3>
              <p className="text-base text-muted-foreground mb-4">
                Navigate accommodation analysis step-by-step with real courtroom scenarios and legal guidance.
              </p>
              <Link href="/decision-tree">
                <Button variant="outline" style={{ color: '#ffffff' }}>
                  Use Decision Tree
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-card border-t border-border/40">
        <div className="container max-w-5xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Kathryn Copeland. All Rights Reserved. The Copeland Questions™ is a trademark of Kathryn Copeland.
          </p>
        </div>
      </section>
    </div>
  );
}
