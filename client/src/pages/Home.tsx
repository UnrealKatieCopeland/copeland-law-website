/* 
 * Editorial Minimalism Design: Magazine-quality homepage
 * Layout: Asymmetric editorial grid with generous whitespace
 * Typography: Cormorant Garamond headers, Source Sans 3 body
 * Color: Warm ivory background, teal accents, deep charcoal text
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Heart, Users, FileText, BookOpen, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Cinematic with overlaid text */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-justice.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent-font text-primary mb-6">Legal Advocacy & Resources</p>
            <h1 className="text-foreground mb-6">
              Championing Justice Through Expertise and Compassion
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed font-light max-w-2xl">
              Kathryn "Katie" Copeland provides specialized legal insight in family law, 
              disability advocacy, and ADA Title II compliance—offering resources, 
              analysis, and thought leadership for those navigating complex legal challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button size="lg" className="text-accent-font" style={{color: '#fafafa'}}>
                  Learn More
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="text-accent-font" style={{color: '#ffffff'}}>
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Editorial text-forward */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">About Katie Copeland</p>
          <h2 className="mb-8">A Voice for Justice and Accessibility</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-6">
              Katie Copeland brings years of legal experience to the forefront of disability 
              advocacy and family law. Her practice focuses on ensuring equal access to justice, 
              particularly in areas where the legal system intersects with disability rights.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Katie's specialized work in ADA Title II compliance and courtroom accessibility 
              represents a critical frontier in civil rights advocacy. She combines deep 
              legal knowledge with lived experience to challenge systemic barriers and 
              advocate for meaningful change.
            </p>
            <div className="pull-quote my-8 text-foreground/90">
              "Justice isn't just about knowing the law—it's about understanding the human 
              experience behind every legal challenge."
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas - Grid with imagery */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mb-16 max-w-2xl">
            <p className="text-accent-font text-primary mb-4">Areas of Focus</p>
            <h2 className="mb-6">Legal Expertise & Advocacy</h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Specialized knowledge across multiple practice areas, with a focus on 
              protecting rights and ensuring access to justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Family Law */}
            <Card className="border-border/40 hover:border-primary/40 transition-all group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/advocacy-hands.png" 
                  alt="Two hands clasped together in support, representing compassionate family law advocacy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl">Family Law</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Compassionate guidance through divorce, custody disputes, and family 
                  legal matters with a focus on protecting children and vulnerable parties.
                </p>
              </CardContent>
            </Card>

            {/* Disability Advocacy */}
            <Card className="border-border/40 hover:border-primary/40 transition-all group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/accessibility-focus.png" 
                  alt="Wheelchair accessibility symbol representing disability rights and equal access advocacy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl">Disability Advocacy</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Dedicated advocacy for disability rights, accessibility, and ensuring 
                  equal treatment under the law for individuals with disabilities.
                </p>
              </CardContent>
            </Card>

            {/* ADA Title II Compliance */}
            <Card className="border-border/40 hover:border-primary/40 transition-all group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/legal-research.png" 
                  alt="Legal books and research materials representing ADA Title II compliance work" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl">ADA Title II Compliance</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Specialized work advocating for courtroom compliance with ADA Title II, ensuring 
                  accessible justice for all individuals regardless of disability.
                </p>
              </CardContent>
            </Card>

            {/* Personal Injury */}
            <Card className="border-border/40 hover:border-primary/40 transition-all group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/scales-abstract.png" 
                  alt="Abstract representation of scales of justice symbolizing personal injury law" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl">Personal Injury & Torts</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Representation for individuals who have suffered harm due to negligence, 
                  with a focus on achieving fair compensation and accountability.
                </p>
              </CardContent>
            </Card>

            {/* Legal Resources */}
            <Card className="border-border/40 hover:border-primary/40 transition-all group overflow-hidden md:col-span-2 lg:col-span-2">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
                    alt="Organized legal documents and forms representing comprehensive legal resources" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl">Legal Resources & Forms</h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Access a comprehensive library of legal resources, downloadable forms, 
                    and educational materials designed to empower individuals navigating 
                    the legal system.
                  </p>
                  <Link href="/resources">
                    <Button variant="outline" className="text-accent-font w-fit" style={{color: '#ffffff'}}>
                      Browse Resources
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Pull quote style */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent-font text-primary mb-6">Approach & Philosophy</p>
            <blockquote className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight mb-8 italic">
              "The law should serve everyone equally. When it doesn't, we have a 
              responsibility to challenge the system and demand better."
            </blockquote>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Katie's approach combines rigorous legal analysis with deep empathy for 
              clients' lived experiences. Her work is grounded in the belief that true 
              justice requires both expertise and understanding.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Editorial with image */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent-font text-primary mb-4">Get In Touch</p>
              <h2 className="mb-6">Let's Connect</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                Whether you're seeking legal resources, have questions about accessibility 
                compliance, or want to discuss a potential matter, Katie is available to help.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="mailto:Katie@CopelandLawTexas.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Katie@CopelandLawTexas.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a 
                    href="tel:8177898498" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    (817) 789-8498
                  </a>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" className="text-accent-font" style={{color: '#ffffff'}}>
                  Contact Katie
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80" 
                alt="Lady Justice statue symbolizing fairness and equal access to justice" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
