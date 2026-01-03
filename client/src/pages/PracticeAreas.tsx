/* 
 * Editorial Minimalism Design: Detailed practice areas page
 * Layout: Magazine-style sections with imagery and detailed descriptions
 */

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Scale, FileText, CheckCircle } from "lucide-react";

export default function PracticeAreas() {
  const practiceAreas = [
    {
      icon: Heart,
      title: "Family Law",
      image: "/images/advocacy-hands.png",
      description: "Compassionate legal guidance through life's most challenging family transitions.",
      details: [
        "Divorce and separation proceedings",
        "Child custody and visitation rights",
        "Child support and spousal maintenance",
        "Protective orders and family safety",
        "Modification of existing orders",
        "Parental rights termination",
      ],
      approach: "Family law matters are deeply personal and emotionally charged. Katie approaches each case with sensitivity and strategic thinking, always prioritizing the best interests of children while protecting her clients' rights. Her experience spans from amicable settlements to complex contested proceedings."
    },
    {
      icon: Users,
      title: "Disability Advocacy",
      image: "/images/accessibility-focus.png",
      description: "Dedicated representation for individuals with disabilities navigating legal challenges.",
      details: [
        "Disability rights enforcement",
        "Accessibility accommodations",
        "Discrimination claims",
        "Social Security Disability appeals",
        "Educational rights (IEP/504 plans)",
        "Employment discrimination",
      ],
      approach: "Katie brings both legal expertise and lived experience to disability advocacy. She understands the systemic barriers that individuals with disabilities face and works tirelessly to ensure equal treatment under the law. Her advocacy is informed by personal knowledge of navigating systems that weren't designed with accessibility in mind."
    },
    {
      icon: Scale,
      title: "ADA Title II Compliance in Courtrooms",
      image: "/images/legal-research.png",
      description: "Pioneering work ensuring courtrooms meet their legal obligations for accessibility.",
      details: [
        "Courtroom accessibility audits",
        "ADA Title II compliance enforcement",
        "Reasonable accommodation requests",
        "Systemic barrier identification",
        "Policy and procedure reform",
        "Training and education for court personnel",
      ],
      approach: "This is Katie's specialized niche—forcing courtrooms to comply with ADA Title II requirements. She has developed expertise in identifying accessibility barriers in judicial proceedings and compelling courts to provide necessary accommodations. This work is critical to ensuring equal access to justice for all individuals, regardless of disability."
    },
    {
      icon: FileText,
      title: "Personal Injury & Torts",
      image: "/images/scales-abstract.png",
      description: "Representation for individuals who have suffered harm due to negligence or wrongdoing.",
      details: [
        "Motor vehicle accidents",
        "Premises liability",
        "Medical malpractice",
        "Product liability",
        "Wrongful death claims",
        "Insurance disputes",
      ],
      approach: "Personal injury cases require thorough investigation, strategic negotiation, and when necessary, aggressive litigation. Katie works to ensure that injured parties receive fair compensation for their losses while holding negligent parties accountable. Her approach combines meticulous case preparation with compassionate client service."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">Legal Services</p>
          <h1 className="mb-8">Practice Areas</h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-light">
            Specialized legal expertise across multiple practice areas, with a focus on 
            protecting rights and ensuring access to justice for all.
          </p>
        </div>
      </section>

      {/* Practice Areas Detail */}
      {practiceAreas.map((area, index) => {
        const Icon = area.icon;
        return (
          <section 
            key={area.title}
            className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'bg-card'}`}
          >
            <div className="container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image - alternating sides */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl">{area.title}</h2>
                  </div>
                  
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-accent-font text-sm mb-4 text-foreground">
                      Services Include
                    </h3>
                    <ul className="space-y-2">
                      {area.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/70">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-6">
                      <h3 className="text-accent-font text-sm mb-3 text-foreground">
                        Katie's Approach
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {area.approach}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container-reading text-center">
          <h2 className="mb-6">Need Legal Guidance?</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you're facing a family law matter, need disability advocacy, or require 
            assistance with ADA compliance, Katie can help guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Katie@CopelandLawTexas.com"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-accent-font"
            >
              Contact Katie
            </a>
            <a 
              href="/resources"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-accent-font"
            >
              Browse Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
