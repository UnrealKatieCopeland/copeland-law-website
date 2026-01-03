/* 
 * Editorial Minimalism Design: Biography and credentials page
 * Layout: Text-forward with strategic imagery
 * Focus: Katie's story, expertise, and approach
 */

import { Card, CardContent } from "@/components/ui/card";
import { Scale, Award, BookOpen, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">About</p>
          <h1 className="mb-8">Kathryn "Katie" Copeland</h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-light">
            Attorney at Law · Disability Advocate · Legal Resource Provider
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <div className="prose prose-lg max-w-none">
            <h2>A Journey Through Law and Advocacy</h2>
            
            <p className="text-foreground/80 leading-relaxed">
              Katie Copeland's legal career is marked by resilience, dedication, and an 
              unwavering commitment to justice. With her license recently reinstated, she 
              brings renewed energy to her practice, focusing on areas where legal expertise 
              intersects with human compassion.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Her practice encompasses family law, disability advocacy, personal injury, and 
              torts, but it's her specialized work in ADA Title II compliance that sets her 
              apart. Katie has made it her mission to force courtrooms to comply with 
              accessibility requirements, ensuring that justice is truly accessible to all.
            </p>

            <div className="pull-quote my-12 text-foreground/90">
              "I've learned that the most powerful advocacy comes from understanding both 
              the letter of the law and the lived experience of those it's meant to protect."
            </div>

            <h2>Areas of Expertise</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <Card className="border-border/40">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-display font-semibold">Family Law</h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Extensive experience in divorce, custody disputes, and family legal 
                    matters with a focus on protecting children and vulnerable parties.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-display font-semibold">ADA Compliance</h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Specialized work forcing courtroom compliance with ADA Title II 
                    requirements, ensuring equal access to justice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-display font-semibold">Disability Advocacy</h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Passionate advocacy for disability rights, combining legal expertise 
                    with personal understanding of accessibility challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-display font-semibold">Legal Resources</h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Development of comprehensive legal resources, forms, and educational 
                    materials to empower individuals navigating the legal system.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>Approach & Philosophy</h2>

            <p className="text-foreground/80 leading-relaxed">
              Katie's approach to law is rooted in the belief that effective advocacy requires 
              both technical expertise and emotional intelligence. She understands that behind 
              every legal issue is a human story—one that deserves to be heard, understood, 
              and honored.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Her work in disability advocacy is particularly personal. Having navigated the 
              complexities of the legal system while managing her own health challenges, Katie 
              brings a unique perspective to accessibility issues. She knows firsthand the 
              barriers that exist and is committed to dismantling them.
            </p>

            <h2>A Resource-Focused Practice</h2>

            <p className="text-foreground/80 leading-relaxed">
              While Katie maintains her legal credentials and expertise, her current practice 
              emphasizes resource provision and thought leadership. Through this website, she 
              offers access to legal forms, educational articles, and strategic insights 
              developed over years of practice.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              This approach allows her to share her extensive knowledge while maintaining 
              flexibility in her practice. Whether you're seeking information about family law, 
              need guidance on ADA compliance, or are looking for legal resources, Katie's 
              expertise is available to help.
            </p>

            <h2>Beyond the Courtroom</h2>

            <p className="text-foreground/80 leading-relaxed">
              Katie's impact extends beyond traditional legal practice. She has created over 
              20 FAQ videos addressing common family law questions, developed comprehensive 
              legal forms, and continues to write about the intersection of law, disability 
              rights, and access to justice.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Her work represents a commitment to making legal knowledge accessible, 
              challenging systemic barriers, and ensuring that everyone—regardless of 
              ability—can access the justice system effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-card">
        <div className="container-reading text-center">
          <h2 className="mb-6">Get in Touch</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Interested in learning more about Katie's work or accessing legal resources? 
            Reach out to start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Katie@CopelandLawTexas.com"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-accent-font"
            >
              Email Katie
            </a>
            <a 
              href="tel:8177898498"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-accent-font"
            >
              Call (817) 789-8498
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
