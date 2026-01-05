/**
 * Editorial Minimalism Design: Homepage
 * Layout: Cinematic hero + editorial sections
 * Typography: Cormorant Garamond headers, Source Sans 3 body
 * Color: Warm ivory background with teal accent
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Scale, FileText, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-justice.png')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 container-reading text-white">
          <h1 className="text-5xl md:text-6xl mb-6 text-white">
            Kathryn "Katie" Copeland
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light text-white/90">
            Disability Rights Advocate & Legal Scholar
          </p>
          <p className="text-xl leading-relaxed mb-8 text-white/80">
            Developing frameworks for accessibility compliance, documenting systemic barriers, 
            and advancing the intersection of disability rights and due process.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <Button size="lg" className="text-accent-font" style={{color: '#ffffff'}}>
                Learn More
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" className="text-accent-font" style={{color: '#ffffff'}}>
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">About This Work</p>
          <h2 className="mb-8">A Portfolio of Advocacy & Scholarship</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-foreground/70 leading-relaxed font-light mb-6">
              This platform showcases research, frameworks, and educational materials developed 
              through years of navigating the intersection of disability rights, family law, and 
              systemic accessibility barriers.
            </p>
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              The work presented here represents intellectual contributions to the field of 
              disability advocacy, including The Copeland Questions™ framework, comprehensive 
              ADA compliance documentation, and resources for understanding accessibility rights 
              in judicial proceedings.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent-font text-primary mb-4">Areas of Focus</p>
            <h2 className="mb-6">Scholarship & Advocacy</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Research and framework development across multiple domains of disability rights and legal accessibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border/40 hover:border-primary/40 transition-all">
              <CardContent className="p-8">
                <Scale className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl mb-4">ADA Title II Compliance</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Research and documentation of accessibility requirements in judicial settings
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:border-primary/40 transition-all">
              <CardContent className="p-8">
                <FileText className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl mb-4">Disability Advocacy</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Frameworks for documenting barriers and asserting accommodation rights
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:border-primary/40 transition-all">
              <CardContent className="p-8">
                <BookOpen className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl mb-4">Legal Scholarship</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Analysis of systemic issues in family law and due process protections
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:border-primary/40 transition-all">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl mb-4">Educational Resources</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Templates, guides, and tools for understanding accessibility rights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Copeland Questions */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/accessibility-focus.png" 
                alt="Conceptual representation of accessibility advocacy" 
                className="w-full rounded-sm shadow-lg"
              />
            </div>
            <div>
              <p className="text-accent-font text-primary mb-4">Featured Framework</p>
              <h2 className="mb-6">The Copeland Questions™</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                A strategic framework for identifying and addressing systemic accessibility 
                barriers in judicial proceedings. Inspired by landmark civil rights advocacy, 
                The Copeland Questions provide a structured approach to ensuring equal access 
                to justice.
              </p>
              <p className="text-sm text-foreground/60 mb-6">
                © 2026 Kathryn Copeland. All Rights Reserved.
              </p>
              <Link href="/resources">
                <Button className="text-accent-font w-fit" style={{color: '#ffffff'}}>
                  Learn About the Framework
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent-font text-primary mb-4">Portfolio</p>
            <h2 className="mb-6">Recent Work & Publications</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/40">
              <CardContent className="p-8">
                <div className="text-sm text-primary mb-2">2026</div>
                <h3 className="text-xl mb-4">ADA Compliance Research</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Comprehensive documentation of courtroom accessibility barriers and regulatory frameworks
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8">
                <div className="text-sm text-primary mb-2">2026</div>
                <h3 className="text-xl mb-4">The Copeland Questions™</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Strategic framework for disability rights advocacy in judicial settings
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8">
                <div className="text-sm text-primary mb-2">Ongoing</div>
                <h3 className="text-xl mb-4">Educational Resources</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Templates and guides for documenting accessibility violations and asserting rights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <div className="text-center">
            <h2 className="mb-8">About Katie Copeland</h2>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Licensed attorney in Texas with expertise in family law, disability rights, and 
              ADA Title II compliance. This platform documents research, frameworks, and 
              educational materials developed through lived experience navigating systemic 
              barriers in the legal system.
            </p>
            <Link href="/about">
              <Button size="lg" className="text-accent-font" style={{color: '#ffffff'}}>
                Read Full Background
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
