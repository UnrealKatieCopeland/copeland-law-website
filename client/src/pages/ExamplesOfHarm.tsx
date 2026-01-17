/**
 * Editorial Minimalism Design: Examples of Harm page
 * Documents real cases showing consequences of failing to train on disability rights
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Scale, FileText, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function ExamplesOfHarm() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-8 w-8 text-primary" />
            <p className="text-accent-font text-primary">Real Cases, Real Consequences</p>
          </div>
          
          <h1 className="mb-8">
            Examples of Harm
          </h1>
          
          <p className="text-2xl text-foreground/70 leading-relaxed font-light mb-8">
            What Happens When Courts Fail to Train on Disability Rights
          </p>

          <p className="text-lg text-foreground/60 leading-relaxed">
            These are not hypothetical scenarios. These are documented cases where the failure to 
            apply disability rights law—the failure to ask The Copeland Questions™—resulted in 
            devastating harm to families. Each case demonstrates what happens when courts rely on 
            belief-based assumptions about disability rather than effect-based analysis of actual 
            capabilities with appropriate supports.
          </p>
        </div>
      </section>

      {/* Case 1: Gordon v. Massachusetts DCF */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <Card className="border-primary/30">
            <CardContent className="p-10">
              <div className="flex items-start gap-4 mb-6">
                <Scale className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-display font-bold mb-2">Gordon v. Massachusetts DCF (2015)</h2>
                  <p className="text-lg text-primary font-medium">
                    Baby Removed Based Solely on Mother's Disability Diagnosis
                  </p>
                </div>
              </div>

              {/* The Story */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-4">The Story</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-base leading-relaxed mb-4">
                    Sara Gordon was 21 years old when she gave birth to her daughter, Dana. Two days 
                    later—while Sara was still recovering from childbirth in the hospital—the Massachusetts 
                    Department of Children and Families (DCF) removed baby Dana from her custody.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    <strong>The reason?</strong> Not abuse. Not neglect. Not any evidence of harm. The 
                    agency stated that Sara "was not able to comprehend how to handle or care for the 
                    child because Gordon has a developmental disability."
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    Sara's parents—who did not have developmental disabilities—were available and willing 
                    to help. They had even planned for Sara and Dana to live with them. Sara's mother 
                    quit her job to provide full-time support.
                  </p>
                  <p className="text-base leading-relaxed">
                    Despite this family support, DCF placed Dana in foster care with a plan for adoption 
                    and sought to terminate Sara's parental rights.
                  </p>
                </div>
              </div>

              {/* What Went Wrong */}
              <div className="mb-8 p-6 bg-primary/5 rounded-sm border-l-4 border-primary">
                <h3 className="text-xl font-display font-bold mb-4">What Massachusetts DCF Did Wrong</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">
                      <strong>Acted on assumptions and stereotypes</strong> about Sara's disability rather 
                      than conducting individualized assessment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">
                      <strong>Assumed Sara was unable to learn</strong> how to safely care for her daughter 
                      because of her disability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">
                      <strong>Denied meaningful assistance</strong> from Sara's mother and other service 
                      providers during visits
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">
                      <strong>Provided only minimal supports</strong> and limited opportunities for 
                      reunification
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base leading-relaxed">
                      <strong>Changed the permanency goal to adoption</strong> and sought to terminate 
                      parental rights based on disability
                    </span>
                  </li>
                </ul>
              </div>

              {/* The Expert Assessment */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-4">What the Experts Found</h3>
                <div className="p-6 bg-card rounded-sm border border-border/40">
                  <p className="text-base leading-relaxed mb-4">
                    Dr. Nicole Brisson, Ph.D., LCMHC, a nationally-recognized expert in assessing parents 
                    with developmental and intellectual disabilities, evaluated Sara in October 2014:
                  </p>
                  <blockquote className="border-l-4 border-primary pl-6 italic text-lg mb-4">
                    "Ms. Gordon is a loving, caring, and conscientious mother who is willing to do 
                    whatever it takes to have her daughter in her life."
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-6 italic text-lg">
                    "There was no discernible reason revealed [by her] assessment that [Ms. Gordon] 
                    and her parents do not have the ability to care for [Dana] safely."
                  </blockquote>
                </div>
                <p className="text-base leading-relaxed mt-4">
                  Multiple community-based service providers, two parenting assessment experts, Dana's 
                  court-appointed attorney, and even a majority of DCF's own Foster Care Review panel 
                  all agreed that a family-supported parenting plan would be appropriate.
                </p>
              </div>

              {/* The Federal Investigation */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-4">The Federal Investigation</h3>
                <p className="text-base leading-relaxed mb-4">
                  Sara challenged DCF's actions by filing complaints with the Department of Justice (DOJ) 
                  and Department of Health and Human Services (HHS). In January 2015, the agencies issued 
                  a joint Letter of Findings concluding that DCF had violated Title II of the Americans 
                  with Disabilities Act and Section 504 of the Rehabilitation Act.
                </p>
                <div className="p-6 bg-card rounded-sm border border-border/40">
                  <p className="text-sm text-accent-font text-primary font-semibold mb-3">
                    KEY FINDING FROM DOJ/HHS
                  </p>
                  <blockquote className="text-base leading-relaxed italic">
                    "DCF acted based on Ms. Gordon's disability as well as on DCF's discriminatory 
                    assumptions and stereotypes about her disability, without consideration of implementing 
                    appropriate family-based support services... DCF staff assumed that Ms. Gordon was 
                    unable to learn how to safely care for her daughter because of her disability, and, 
                    therefore, denied her the opportunity to receive meaningful assistance."
                  </blockquote>
                </div>
              </div>

              {/* The Legal Principles */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-4">Legal Principles Established</h3>
                <p className="text-base leading-relaxed mb-4">
                  The Gordon settlement established critical protections that should prevent this from 
                  happening to other families:
                </p>
                <div className="grid gap-4">
                  <div className="p-4 bg-background rounded-sm">
                    <h4 className="font-bold mb-2">1. Individualized Assessment Required</h4>
                    <p className="text-sm leading-relaxed">
                      Agencies cannot rely on disability diagnosis to presume unfitness. They must 
                      evaluate actual capabilities with appropriate supports.
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-sm">
                    <h4 className="font-bold mb-2">2. Reasonable Modifications in Reunification</h4>
                    <p className="text-sm leading-relaxed">
                      The duty to provide accommodations extends to all reunification services. 
                      Inaccessible parenting classes violate federal law.
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-sm">
                    <h4 className="font-bold mb-2">3. Safety Cannot Be a Pretext</h4>
                    <p className="text-sm leading-relaxed">
                      Safety concerns must be based on "actual risks, not on mere speculation, 
                      stereotypes, or generalizations about individuals with disabilities."
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-sm">
                    <h4 className="font-bold mb-2">4. "Reasonable Efforts" Include ADA Compliance</h4>
                    <p className="text-sm leading-relaxed">
                      Under Title IV-E, failure to provide disability-related accommodations is a 
                      failure to meet the statutory "reasonable efforts" requirement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why This Matters */}
              <div className="p-8 bg-primary/10 rounded-sm">
                <h3 className="text-xl font-display font-bold mb-4">Why This Case Matters</h3>
                <p className="text-base leading-relaxed mb-4">
                  This is not a case of abuse or neglect. This is not a case of a parent who refused 
                  services or support. This is a case where:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span className="text-base">A young mother with a disability wanted her baby</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span className="text-base">Her family wanted to help her raise her baby</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✓</span>
                    <span className="text-base">Experts said she could safely parent with support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✗</span>
                    <span className="text-base">The system took her baby anyway, based solely on disability diagnosis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✗</span>
                    <span className="text-base">The system then tried to permanently sever her parental rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">✗</span>
                    <span className="text-base">It took federal civil rights enforcement to stop it</span>
                  </li>
                </ul>
                <p className="text-base leading-relaxed font-medium">
                  This is exactly the kind of harm that happens when courts and agencies fail to apply 
                  The Copeland Questions™ framework—when they rely on belief-based assumptions about 
                  disability rather than effect-based analysis of actual capabilities with appropriate 
                  supports.
                </p>
              </div>

              {/* Resources */}
              <div className="mt-8 pt-8 border-t border-border/40">
                <h3 className="text-lg font-bold mb-4">Read the Full Documentation</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="/Gordonletter.pdf" target="_blank" rel="noopener noreferrer">
                    <Button style={{ color: '#ffffff' }}>
                      <FileText className="mr-2 h-4 w-4" />
                      DOJ/HHS Letter of Findings (PDF)
                    </Button>
                  </a>
                  <a href="/IllinoisArticle_June2015_18.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" style={{ color: '#ffffff' }}>
                      <FileText className="mr-2 h-4 w-4" />
                      Illinois Bar Article (PDF)
                    </Button>
                  </a>
                  <a href="http://isba.org/sections/mentalhealth/newsletter/2015/06/parentdevelopmentaldisabilitydiscri" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" style={{ color: '#ffffff' }}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Original Article
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card">
        <div className="container-reading text-center">
          <h2 className="mb-6">This Must Not Happen Again</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            The Gordon case demonstrates why judicial training on disability rights is not optional—it 
            is essential to prevent devastating harm to families. Learn how The Copeland Questions™ 
            framework provides courts with the tools to avoid these errors.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/framework">
              <Button size="lg" style={{ color: '#ffffff' }}>
                <Scale className="mr-2 h-5 w-5" />
                View The Framework
              </Button>
            </Link>
            <Link href="/quiz">
              <Button size="lg" variant="outline" style={{ color: '#ffffff' }}>
                Test Your Understanding
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="py-8 bg-background">
        <div className="container-reading text-center">
          <p className="text-sm text-foreground/60">
            © 2026 Kathryn Copeland. All Rights Reserved. The Copeland Questions™ is a trademark of Kathryn Copeland.
          </p>
        </div>
      </section>
    </div>
  );
}
