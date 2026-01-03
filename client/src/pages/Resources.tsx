/* 
 * Editorial Minimalism Design: Resource library page
 * Layout: Organized categories with clear navigation
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, Scale, Users, Heart, AlertCircle } from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      icon: Heart,
      title: "Family Law Resources",
      description: "Forms, guides, and information for family law matters",
      resources: [
        { name: "Divorce Checklist", type: "PDF Guide" },
        { name: "Child Custody Agreement Template", type: "Form" },
        { name: "Parenting Plan Worksheet", type: "Form" },
        { name: "Financial Disclosure Forms", type: "Form Package" },
        { name: "Guide to Texas Family Law", type: "Educational Guide" },
      ]
    },
    {
      icon: Users,
      title: "Disability Rights Resources",
      description: "Information and tools for disability advocacy",
      resources: [
        { name: "ADA Rights Overview", type: "PDF Guide" },
        { name: "Reasonable Accommodation Request Letter", type: "Template" },
        { name: "Disability Discrimination Complaint Guide", type: "Guide" },
        { name: "IEP Meeting Preparation Checklist", type: "Checklist" },
        { name: "Social Security Disability Appeal Guide", type: "Guide" },
      ]
    },
    {
      icon: Scale,
      title: "ADA Compliance Resources",
      description: "Tools for ensuring courtroom accessibility",
      resources: [
        { name: "ADA Title II Courtroom Compliance Checklist", type: "Checklist" },
        { name: "Accommodation Request for Court Proceedings", type: "Template" },
        { name: "Accessibility Barrier Documentation Form", type: "Form" },
        { name: "Guide to ADA Title II Requirements", type: "Educational Guide" },
        { name: "Sample Complaint Letters", type: "Template Package" },
      ]
    },
    {
      icon: FileText,
      title: "General Legal Resources",
      description: "Helpful information for various legal matters",
      resources: [
        { name: "Legal Terminology Glossary", type: "Reference" },
        { name: "How to Prepare for a Legal Consultation", type: "Guide" },
        { name: "Document Organization Checklist", type: "Checklist" },
        { name: "Understanding Legal Fees", type: "Guide" },
        { name: "Pro Se Representation Guide", type: "Guide" },
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">Legal Resources</p>
          <h1 className="mb-8">Resource Library</h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-light mb-8">
            Access a comprehensive collection of legal forms, guides, and educational 
            materials designed to empower individuals navigating the legal system.
          </p>
          
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 flex gap-4">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-semibold mb-2">Important Notice</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  These resources are provided for informational purposes only and do not 
                  constitute legal advice. Every legal situation is unique, and you should 
                  consult with a qualified attorney about your specific circumstances.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="space-y-16">
            {resourceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                    <h2 className="text-3xl">{category.title}</h2>
                  </div>
                  <p className="text-foreground/70 mb-8 max-w-2xl">
                    {category.description}
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource) => (
                      <Card key={resource.name} className="border-border/40 hover:border-primary/40 transition-all group">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <FileText className="h-6 w-6 text-primary" />
                            <span className="text-xs text-accent-font text-muted-foreground">
                              {resource.type}
                            </span>
                          </div>
                          <h3 className="font-display font-semibold text-lg mb-4">
                            {resource.name}
                          </h3>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full text-accent-font group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-7 w-7 text-primary" />
              <h2 className="text-3xl">Educational Articles</h2>
            </div>
            <p className="text-foreground/70 mb-8">
              In-depth articles and guides on important legal topics, written to be 
              accessible and informative.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Understanding ADA Title II: Your Rights in the Courtroom",
                  excerpt: "A comprehensive guide to accessibility rights in judicial proceedings and how to enforce them.",
                  readTime: "12 min read"
                },
                {
                  title: "Navigating Family Law: What to Expect in Custody Proceedings",
                  excerpt: "Essential information about child custody cases, from initial filing through final orders.",
                  readTime: "15 min read"
                },
                {
                  title: "Disability Discrimination: Recognizing and Addressing Violations",
                  excerpt: "How to identify disability discrimination and take action to protect your rights.",
                  readTime: "10 min read"
                },
                {
                  title: "The Copeland Questions: A Framework for Systemic Legal Reform",
                  excerpt: "Introducing a strategic approach to identifying and addressing institutional failures in the legal system.",
                  readTime: "18 min read"
                },
              ].map((article) => (
                <Card key={article.title} className="border-border/40 hover:border-primary/40 transition-all cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <span className="text-xs text-accent-font text-muted-foreground whitespace-nowrap">
                        {article.readTime}
                      </span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container-reading text-center">
          <h2 className="mb-6">Need Personalized Guidance?</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            While these resources provide valuable information, every legal situation is 
            unique. Contact Katie to discuss your specific needs.
          </p>
          <a 
            href="mailto:Katie@CopelandLawTexas.com"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-accent-font"
          >
            Contact Katie
          </a>
        </div>
      </section>
    </div>
  );
}
