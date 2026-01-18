/**
 * Editorial Minimalism Design: Resources and tools page
 * Layout: Organized resource library with protected IP
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Download, BookOpen, Scale, CheckCircle, Lock, ExternalLink, AlertTriangle, Calculator, GitBranch, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  const resourceCategories = [
    {
      title: "ADA Courtroom Rights",
      icon: Scale,
      description: "Understanding your rights to accessibility in judicial proceedings",
      resources: [
        {
          name: "ADA Title II Overview for Court Proceedings",
          type: "Guide",
          description: "Comprehensive introduction to federal accessibility requirements in courtrooms",
          available: true,
        },
        {
          name: "Common Courtroom Accessibility Barriers",
          type: "Checklist",
          description: "Identification guide for systemic barriers in judicial settings",
          available: true,
        },
        {
          name: "Requesting Reasonable Accommodations",
          type: "Template",
          description: "Professional letter template for formal accommodation requests",
          available: true,
        },
      ],
    },
    {
      title: "Documentation & Evidence",
      icon: FileText,
      description: "Tools for tracking and documenting accessibility violations",
      resources: [
        {
          name: "ADA Violation Documentation Worksheet",
          type: "Template",
          description: "Structured template for recording accessibility barriers and denials",
          available: true,
        },
        {
          name: "Timeline Template for Accessibility Issues",
          type: "Template",
          description: "Chronological tracking tool for accommodation requests and responses",
          available: true,
        },
        {
          name: "Evidence Organization Framework",
          type: "Guide",
          description: "Strategic approach to organizing documentation for legal action",
          available: true,
        },
      ],
    },
    {
      title: "Legal Standards Reference",
      icon: BookOpen,
      description: "Plain-language explanations of federal accessibility regulations",
      resources: [
        {
          name: "28 C.F.R. § 35.130 - General Prohibitions",
          type: "Reference",
          description: "Key federal regulation explained with practical applications",
          available: true,
        },
        {
          name: "Case Law Digest: Courtroom Accessibility",
          type: "Reference",
          description: "Summary of landmark cases establishing accessibility rights",
          available: true,
        },
        {
          name: "Texas-Specific Accessibility Requirements",
          type: "Reference",
          description: "State law provisions complementing federal ADA protections",
          available: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">Legal Resources</p>
          <h1 className="mb-8">Tools & Educational Materials</h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-light">
            Access comprehensive resources designed to empower individuals navigating 
            accessibility challenges in the legal system.
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Publications</h2>
            <p className="text-center text-foreground/70 mb-12 text-lg">
              Citation-ready scholarly work and frameworks for disability rights advocacy
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Not Either/Or, But Both/And */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl mb-2">Not Either/Or, But Both/And</h3>
                      <p className="text-sm text-foreground/60 font-normal">
                        Dialectics, Disability, and Meaningful Access in Court
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    A framework for analyzing courtroom accessibility without credibility contests, 
                    diagnostic gatekeeping, or inquiries into judicial intent. Grounded in existing 
                    disability law and dialectical reasoning.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <a href="/Not-EitherOr-But-BothAnd.pdf" download aria-label="Download Not Either/Or, But Both/And PDF">
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </a>
                    <Link href="/framework">
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Interactive
                      </Button>
                    </Link>
                  </div>
                  
                  <p className="text-xs text-foreground/50 mt-4">
                    © 2026 Kathryn Copeland. All Rights Reserved.
                  </p>
                </CardContent>
              </Card>

              {/* CART Model Guidelines */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl mb-2">CART in the Courtroom</h3>
                      <p className="text-sm text-foreground/60 font-normal">
                        Model Guidelines (2002)
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    Official model guidelines for Communication Access Realtime Translation (CART) 
                    in courtrooms. A joint project by the American Judges Foundation and National 
                    Court Reporters Foundation.
                  </p>
                  
                  <a href="/cart-in-the-courtroom-model-guidelines.pdf" download aria-label="Download CART Model Guidelines PDF">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </a>
                  
                  <p className="text-xs text-foreground/50 mt-4">
                    Source: American Judges Foundation & National Court Reporters Foundation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4">Interactive Tools</h2>
            <p className="text-lg text-foreground/70">
              Practical tools to help you understand and request accommodations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <Calculator className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Accommodation Calculator</h3>
                    <p className="text-sm text-foreground/60 font-normal">
                      Get personalized recommendations
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Answer questions about your situation and receive personalized accommodation 
                  recommendations with legal foundations, case law citations, and a ready-to-submit 
                  template letter.
                </p>
                <Link href="/accommodation-calculator">
                  <Button className="w-full">
                    Use Calculator
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <GitBranch className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Decision Tree</h3>
                    <p className="text-sm text-foreground/60 font-normal">
                      Navigate step-by-step
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Interactive guidance for analyzing accommodation requests using real courtroom 
                  scenarios. Answer questions and receive legal analysis with specific next steps.
                </p>
                <Link href="/decision-tree">
                  <Button className="w-full">
                    Use Decision Tree
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Interactive Quiz</h3>
                    <p className="text-sm text-foreground/60 font-normal">
                      Test your understanding
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  10 real courtroom scenarios with immediate feedback and detailed case law 
                  explanations. Learn how The Copeland Questions™ apply in practice.
                </p>
                <Link href="/quiz">
                  <Button className="w-full">
                    Take the Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Judicial Education Materials */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4">Judicial Education Materials</h2>
            <p className="text-lg text-foreground/70">
              Presentation-ready resources for judges, clerks, and court administrators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Full Essay Presentation</h3>
                    <p className="text-sm text-foreground/60 font-normal">
                      Comprehensive theoretical foundation
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  In-depth exploration of dialectical reasoning, the false either/or binary, 
                  and the legal framework for belief-neutral access analysis.
                </p>
                <a href="https://not-eitheror-but-bothand-vfjt07a.gamma.site" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Essay
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Quick Reference Deck</h3>
                    <p className="text-sm text-foreground/60 font-normal">
                      Practical application guide
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Visual slide deck with The Copeland Questions™, concrete examples of 
                  reasonable modifications, and actionable guidance for practitioners.
                </p>
                <a href="https://not-eitheror-but-bothand-7lj5vn6.gamma.site" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Quick Reference
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-destructive/30">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2">Examples of Harm</h3>
                    <p className="text-sm text-foreground/60 font-normal">
                      Real consequences of failing to train
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Documented cases showing what happens when courts fail to apply disability 
                  rights law, including the heartbreaking Gordon v. Massachusetts DCF case.
                </p>
                <Link href="/examples-of-harm">
                  <Button className="w-full">
                    View Case Examples
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Framework - The Copeland Questions */}
      <section className="py-16 bg-card">
        <div className="container">
          <Card className="border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="h-10 w-10 text-primary" />
                  <div>
                    <h2 className="text-3xl mb-2">The Copeland Questions™</h2>
                    <p className="text-sm text-foreground/60">© 2026 Kathryn Copeland. All Rights Reserved.</p>
                  </div>
                </div>
                
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  A strategic framework for identifying and addressing systemic accessibility 
                  barriers in judicial proceedings. Inspired by landmark civil rights advocacy, 
                  The Copeland Questions provide a structured approach to ensuring equal access 
                  to justice.
                </p>

                <div className="bg-background/50 rounded-sm p-6 mb-6">
                  <h3 className="text-accent-font text-sm mb-4 text-foreground">
                    Framework Components
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70">
                        <strong>Threshold Questions</strong> - Establishing jurisdiction and applicable standards
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70">
                        <strong>Interactive Process Analysis</strong> - Evaluating good faith engagement
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70">
                        <strong>Pattern Recognition</strong> - Identifying systemic versus isolated barriers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70">
                        <strong>Remedy Framework</strong> - Structuring effective relief requests
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background/70 rounded-sm border border-primary/20">
                  <Lock className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground/70">
                    <strong>Protected intellectual property.</strong> The Copeland Questions™ 
                    framework represents original research and advocacy work in disability rights.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resource Categories */}
      {resourceCategories.map((category, index) => {
        const Icon = category.icon;
        return (
          <section 
            key={category.title}
            className={`py-16 ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
          >
            <div className="container">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl">{category.title}</h2>
                </div>
                <p className="text-foreground/70 text-lg">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource) => (
                  <Card key={resource.name} className="border-border/40 hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                        <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-sm">
                          {resource.type}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {resource.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        {resource.available ? (
                          <>
                            <FileText className="h-4 w-4" />
                            <span>Research Material</span>
                          </>
                        ) : (
                          <>
                            <Lock className="h-4 w-4" />
                            <span>In Development</span>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Copyright Notice */}
      <section className="py-8 bg-background border-t border-border/40">
        <div className="container">
          <p className="text-sm text-center text-foreground/60">
            All materials, frameworks, and templates are © 2026 Kathryn Copeland. All Rights Reserved. 
            Unauthorized reproduction or distribution is prohibited.
          </p>
        </div>
      </section>
    </div>
  );
}
