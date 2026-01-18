/**
 * Editorial Minimalism Design: Decision Tree page
 * Interactive "Choose Your Own Adventure" tool for accommodation analysis
 */

import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, Scale, BookOpen, AlertCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import AccommodationDecisionTree from "@/components/AccommodationDecisionTree";

export default function DecisionTree() {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Accommodation Decision Tree"
        description="Navigate ADA compliance step-by-step with an interactive decision tree. Answer questions about your situation and receive legal guidance, case law citations, and concrete next steps for accommodation requests."
        path="/decision-tree"
      />
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch className="h-8 w-8 text-primary" />
            <p className="text-accent-font text-primary">Interactive Tool</p>
          </div>
          
          <h1 className="mb-8">
            Accommodation Decision Tree
          </h1>
          
          <p className="text-2xl text-foreground/70 leading-relaxed font-light mb-8">
            Navigate ADA Compliance Step-by-Step
          </p>

          <p className="text-lg text-foreground/60 leading-relaxed">
            This interactive tool guides you through accommodation analysis using real courtroom 
            scenarios. Answer questions about your situation and receive legal guidance, case law 
            citations, and concrete next steps.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-8">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-3">1</div>
                <h3 className="text-lg font-bold mb-2">Answer Questions</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Start with whether an accommodation was requested and follow the pathway based 
                  on what happened in your case.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-3">2</div>
                <h3 className="text-lg font-bold mb-2">Get Legal Analysis</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Each outcome includes legal basis, case law citations, and analysis of whether 
                  the court's actions comply with the ADA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-3">3</div>
                <h3 className="text-lg font-bold mb-2">Take Action</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Receive specific next steps: what to file, what to say, what to document, and 
                  when to escalate to federal enforcement.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 bg-primary/5 rounded-sm border-l-4 border-primary">
            <p className="text-sm text-foreground/70 leading-relaxed">
              <strong>Note:</strong> This tool provides educational guidance based on federal 
              disability law. It is not a substitute for legal advice. For case-specific counsel, 
              consult with an attorney experienced in ADA litigation.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-amber-500/5 border-y border-amber-500/20">
        <div className="container">
          <div className="flex gap-4 items-start max-w-3xl mx-auto">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" aria-hidden="true" />
            <div className="text-sm text-foreground/80">
              <strong className="text-foreground">Educational Tool:</strong> This decision tree provides educational guidance only and is not legal advice. It does not create an attorney-client relationship. For case-specific guidance, consult an attorney experienced in ADA litigation.
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Start Your Analysis</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Answer each question based on what happened in your case. You can go back at any 
              time to explore different pathways.
            </p>
          </div>

          <AccommodationDecisionTree />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-8">Related Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <Scale className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">The Copeland Questions™ Framework</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Learn the theoretical foundation behind this decision tree: a belief-neutral, 
                  effect-based framework for analyzing courtroom accessibility.
                </p>
                <Link href="/framework">
                  <Button variant="outline">
                    View Framework
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Test Your Understanding</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  Take our interactive quiz with real courtroom scenarios and case law explanations 
                  to deepen your understanding of ADA compliance.
                </p>
                <Link href="/quiz">
                  <Button variant="outline">
                    Take the Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-8 bg-card">
        <div className="container-reading text-center">
          <p className="text-sm text-foreground/60">
            © 2026 Kathryn Copeland. All Rights Reserved. The Copeland Questions™ is a trademark of Kathryn Copeland.
          </p>
        </div>
      </section>
    </div>
  );
}
