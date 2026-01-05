/**
 * Editorial Minimalism Design: Contact information page
 * Layout: Simple informational display without active contact form
 */

import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">Contact Information</p>
          <h1 className="mb-8">Professional Correspondence</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            This website serves as a portfolio and resource platform for disability rights 
            advocacy work and legal scholarship.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/40">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-accent-font text-sm mb-2 text-foreground">Email</h3>
                    <p className="text-foreground/70">
                      Katie@CopelandLawTexas.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/40">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-accent-font text-sm mb-2 text-foreground">Location</h3>
                    <p className="text-foreground/70">
                      Texas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Purpose Statement */}
      <section className="py-16 bg-card">
        <div className="container-reading">
          <h2 className="mb-6">About This Platform</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              This website showcases intellectual property, research, and educational materials 
              developed in the field of disability rights and legal accessibility. It serves as 
              a portfolio of advocacy work and scholarship.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              The Copeland Questions™ framework and associated resources represent years of 
              research and lived experience navigating systemic barriers in judicial proceedings.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              All content, frameworks, and materials are © 2026 Kathryn Copeland. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
