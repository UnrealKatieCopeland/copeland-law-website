/**
 * Editorial Minimalism Design: About page
 * Layout: Text-forward editorial with professional bio
 */

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Scale, FileText } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">About</p>
          <h1 className="mb-8">Kathryn "Katie" Copeland</h1>
          <p className="text-2xl text-foreground/70 leading-relaxed font-light">
            Disability rights advocate, legal scholar, and developer of The Copeland Questions™ 
            framework for accessibility compliance in judicial settings.
          </p>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-8">Background</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Katie Copeland is a licensed attorney in Texas whose work focuses on the intersection 
              of disability rights, family law, and systemic accessibility barriers. Through years 
              of lived experience navigating the legal system as a person with disabilities, she 
              has developed comprehensive frameworks and educational resources for understanding 
              and documenting ADA Title II compliance issues.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Her research encompasses federal accessibility regulations, courtroom accommodation 
              rights, and the documentation of systemic barriers that prevent meaningful access to 
              justice for people with disabilities. This work has resulted in The Copeland Questions™, 
              a strategic framework for identifying and addressing accessibility violations in 
              judicial proceedings.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Katie's advocacy extends beyond individual cases to systemic reform, with a focus on 
              exposing patterns of discrimination and developing practical tools for self-advocacy 
              and legal documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Areas of Expertise</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Research and framework development across multiple domains of disability rights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/40">
              <CardContent className="p-8 text-center">
                <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl mb-3">ADA Title II Compliance</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Federal accessibility requirements in judicial settings and courtroom accommodation rights
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl mb-3">Disability Advocacy</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Documentation frameworks for accessibility barriers and accommodation denials
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl mb-3">Legal Scholarship</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Analysis of systemic issues in family law and due process protections
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Copeland Questions */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-6">The Copeland Questions™</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Katie's signature contribution to the field is The Copeland Questions™, a strategic 
              framework for identifying and addressing systemic accessibility barriers in judicial 
              proceedings. Inspired by landmark civil rights advocacy, this framework provides a 
              structured approach to ensuring equal access to justice.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              The framework encompasses threshold questions for establishing jurisdiction, interactive 
              process analysis for evaluating good faith engagement, pattern recognition for identifying 
              systemic versus isolated barriers, and remedy frameworks for structuring effective relief 
              requests.
            </p>
            <p className="text-sm text-foreground/60">
              © 2026 Kathryn Copeland. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-8">Education & Credentials</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-2">Licensed Attorney</h3>
              <p className="text-foreground/70">State Bar of Texas</p>
            </div>
            <div>
              <h3 className="text-xl mb-2">Areas of Focus</h3>
              <p className="text-foreground/70">
                Family Law, Disability Rights, ADA Title II Compliance, Personal Injury, Torts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <h2 className="mb-6">Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-foreground/70 leading-relaxed">
              This platform serves to document research, share educational resources, and advance 
              understanding of disability rights in judicial settings. The work presented here 
              represents a commitment to exposing systemic barriers, protecting due process rights, 
              and creating frameworks that empower individuals to advocate for accessibility compliance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
