/**
 * Tools Hub Landing Page
 * Showcases all interactive tools with clear value propositions
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, GitBranch, GraduationCap, ArrowRight, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function ToolsHub() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead 
        title="Interactive Tools"
        description="Explore interactive tools for disability access law: take the case law quiz, get personalized accommodation recommendations, or navigate decision pathways. Based on The Copeland Questions™ framework."
        path="/tools"
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Interactive Tools for Disability Access Law
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Practical resources to help you understand, request, and implement ADA accommodations in legal proceedings. Based on The Copeland Questions™ framework.
            </p>
            
            {/* Legal Disclaimer */}
            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-sm text-left">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-foreground/80">
                  <strong className="text-foreground">Educational Resources Only:</strong> These tools provide educational guidance and are not legal advice. They do not create an attorney-client relationship. Laws and court procedures vary by jurisdiction. Consult an attorney experienced in ADA litigation for case-specific guidance.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Case Law Quiz */}
              <Card className="border-primary/30 hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                      <GraduationCap className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-display font-bold mb-3">Case Law Quiz</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      Test your understanding with 10 real courtroom scenarios. Learn to identify reasoning errors judges make when evaluating ADA accommodation requests.
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-foreground">What it does:</span>
                      <span className="text-foreground/70">Tests ability to spot belief-based vs. effect-based reasoning</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-foreground">Who it's for:</span>
                      <span className="text-foreground/70">Judges, attorneys, advocates, law students</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-foreground">Time required:</span>
                      <span className="text-foreground/70">10-15 minutes</span>
                    </div>
                  </div>
                  
                  <a href="/quiz">
                    <Button className="w-full" size="lg">
                      Start Quiz
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Accommodation Calculator */}
              <Card className="border-primary/30 hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                      <Calculator className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-display font-bold mb-3">Accommodation Calculator</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      Get personalized accommodation recommendations with legal citations and a downloadable template request letter tailored to your situation.
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-foreground">What it does:</span>
                      <span className="text-foreground/70">Generates customized recommendations and template letters</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-foreground">Who it's for:</span>
                      <span className="text-foreground/70">Parents, litigants, attorneys preparing requests</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-foreground">Time required:</span>
                      <span className="text-foreground/70">2-3 minutes</span>
                    </div>
                  </div>
                  
                  <a href="/accommodation-calculator">
                    <Button className="w-full" size="lg">
                      Get Recommendations
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Decision Tree */}
              <Card className="border-primary/30 hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-4">
                      <GitBranch className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-display font-bold mb-3">Decision Tree</h2>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      Navigate complex accommodation scenarios with an interactive decision tree. Find the right pathway for your specific situation and legal context.
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-foreground">What it does:</span>
                      <span className="text-foreground/70">Guides you through decision pathways with legal outcomes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-foreground">Who it's for:</span>
                      <span className="text-foreground/70">Anyone navigating accommodation requests</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-foreground">Time required:</span>
                      <span className="text-foreground/70">5-10 minutes</span>
                    </div>
                  </div>
                  
                  <a href="/decision-tree">
                    <Button className="w-full" size="lg">
                      Explore Pathways
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Looking for More Resources?
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Explore The Copeland Questions™ framework, read in-depth articles, or access judicial education materials.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/framework">
                <Button size="lg" variant="outline">
                  View Framework
                </Button>
              </a>
              <a href="/articles">
                <Button size="lg" variant="outline">
                  Read Articles
                </Button>
              </a>
              <a href="/resources">
                <Button size="lg" variant="outline">
                  Browse Resources
                </Button>
              </a>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
