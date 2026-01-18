/**
 * Editorial Minimalism Design: Strategic guide article page
 * Layout: Solution-oriented essay with call-out boxes and actionable sections
 * Typography: 18px base for brain injury accessibility, 1.8 line height
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Download, Share2, FileText, Link as LinkIcon, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function ArticleAdministrativePathways() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "Administrative Pathways to ADA Compliance in Family Courts";
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`I thought you might find this strategic guide interesting: ${url}`)}`
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <article>
        <header className="py-24 bg-card">
          <div className="container-reading">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                Strategic Guide
              </span>
              <span className="text-sm text-muted-foreground">2026</span>
            </div>
            
            <h1 className="mb-6">
              Administrative Pathways to ADA Compliance in Family Courts
            </h1>
            
            <p className="text-2xl text-foreground/70 leading-relaxed font-light mb-8">
              Navigating Federal Remediation Channels for Systemic Accessibility Barriers
            </p>

            <div className="flex items-center justify-between pt-8 border-t border-border/40">
              <div>
                <p className="text-sm text-muted-foreground mb-1">By Kathryn Copeland</p>
                <p className="text-sm text-muted-foreground">Attorney at Law, Texas</p>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShare('twitter')}
                  aria-label="Share on Twitter"
                 
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleShare('linkedin')}
                  aria-label="Share on LinkedIn"
                 
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={copyLink}
                  aria-label="Copy link"
                 
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Executive Overview */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">Executive Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The intersection of disability rights and family law represents one of the most challenging 
                frontiers in civil rights enforcement. For parents with disabilities, family courts often 
                function not as arbiters of justice but as sites of systemic exclusion. Despite clear 
                mandates under Title II of the Americans with Disabilities Act and Section 504 of the 
                Rehabilitation Act, parents routinely encounter discrimination that conflates disability 
                with parental unfitness.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This discrimination is rarely isolated. It is embedded in administrative procedures, court 
                policies, and the biases of child welfare agencies. When courts fail to provide reasonable 
                modifications—such as sign language interpreters, accessible documentation, extended 
                timeframes, or modifications to "standard" parenting assessments—they commit actionable 
                civil rights violations.
              </p>
              <p className="text-lg leading-relaxed">
                This guide provides a strategic roadmap for disabled parents, advocates, and legal 
                professionals seeking to utilize federal administrative channels to report and remediate 
                systemic violations. Unlike appellate litigation, which focuses on individual case outcomes, 
                administrative complaints target the institutional architecture of the court system itself.
              </p>
            </div>
          </div>
        </section>

        {/* Why Administrative Channels Matter */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">Why Administrative Channels Matter</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Administrative remediation offers several strategic advantages over traditional litigation:
              </p>
              
              <div className="grid gap-6 my-8">
                <div className="p-6 bg-background rounded-sm">
                  <h3 className="text-xl font-display font-bold mb-3">Systemic Impact</h3>
                  <p className="text-base leading-relaxed">
                    Administrative complaints can trigger compliance reviews that affect entire court systems, 
                    not just individual cases.
                  </p>
                </div>
                
                <div className="p-6 bg-background rounded-sm">
                  <h3 className="text-xl font-display font-bold mb-3">Lower Burden of Proof</h3>
                  <p className="text-base leading-relaxed">
                    Many administrative processes do not require proof of discriminatory intent—only 
                    discriminatory effect.
                  </p>
                </div>
                
                <div className="p-6 bg-background rounded-sm">
                  <h3 className="text-xl font-display font-bold mb-3">Federal Leverage</h3>
                  <p className="text-base leading-relaxed">
                    Engaging federal agencies like the Department of Justice (DOJ) and Department of Health 
                    and Human Services (HHS) brings institutional pressure that state courts cannot ignore.
                  </p>
                </div>
                
                <div className="p-6 bg-background rounded-sm">
                  <h3 className="text-xl font-display font-bold mb-3">Cost-Effective</h3>
                  <p className="text-base leading-relaxed">
                    Most administrative complaint processes are free and do not require legal representation.
                  </p>
                </div>
                
                <div className="p-6 bg-background rounded-sm">
                  <h3 className="text-xl font-display font-bold mb-3">Policy Reform</h3>
                  <p className="text-base leading-relaxed">
                    Successful administrative advocacy can result in consent decrees, settlement agreements, 
                    and policy changes that protect future litigants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Five Key Pathways */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">The Five Key Pathways</h2>
            
            {/* Pathway 1: DOJ */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">1. Department of Justice (DOJ) Title II Complaints</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>What It Does:</strong> The DOJ Civil Rights Division's Disability Rights Section 
                  enforces Title II of the ADA, which prohibits discrimination by public entities—including courts.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>When to Use:</strong> When a court system demonstrates a pattern or practice of 
                  denying accommodations, using discriminatory screening tools, or maintaining policies that 
                  systematically exclude disabled parents.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Key Concept:</strong> The "methods of administration" theory. If a court's 
                  administrative procedures have the effect of discriminating against disabled individuals, 
                  the DOJ has authority to intervene—even without overturning specific custody orders.
                </p>
                
                <div className="my-6 p-6 bg-card border-l-4 border-primary">
                  <h4 className="text-lg font-bold mb-3">How to File</h4>
                  <ul className="space-y-2 text-base">
                    <li><strong>Online portal:</strong> civilrights.justice.gov</li>
                    <li><strong>Mail:</strong> U.S. Department of Justice, Civil Rights Division, 950 Pennsylvania Avenue NW, Disability Rights Section – 1425 NYAV, Washington, DC 20530</li>
                    <li>Focus on systemic patterns, not individual rulings</li>
                    <li>Document specific policies or procedures that create barriers</li>
                    <li>Explain how these barriers "substantially impair" program objectives for disabled participants</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pathway 2: HHS */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">2. Department of Health and Human Services (HHS) Section 504 Complaints</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>What It Does:</strong> HHS Office for Civil Rights (OCR) has jurisdiction over 
                  state child welfare agencies that receive federal funding, which includes virtually all 
                  state agencies.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>When to Use:</strong> When a child welfare agency (CPS, DCF, DHS) bases removal 
                  or reunification decisions on discriminatory assumptions rather than individualized 
                  assessment, or fails to provide accessible services.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Key Precedent:</strong> The 2015 <em>Gordon v. Massachusetts DCF</em> settlement 
                  established that child welfare agencies violate federal law when they rely on disability 
                  diagnosis to presume unfitness, fail to conduct individualized assessments, or deny 
                  reasonable modifications in reunification services.
                </p>
                
                <div className="my-6 p-6 bg-card border-l-4 border-primary">
                  <h4 className="text-lg font-bold mb-3">How to File</h4>
                  <ul className="space-y-2 text-base">
                    <li><strong>Email:</strong> ocrmail@hhs.gov</li>
                    <li><strong>Online:</strong> HHS OCR Complaint Portal</li>
                    <li><strong>Mail:</strong> U.S. Department of Health and Human Services, 200 Independence Avenue SW, Washington, DC 20201</li>
                    <li>Allege denial of "critical child welfare services" based on disability</li>
                    <li>Cite failure to provide reasonable modifications</li>
                    <li>Reference the <em>Gordon</em> settlement as legal precedent</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pathway 3: P&A */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">3. Protection and Advocacy (P&A) System</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>What It Does:</strong> The P&A network consists of federally mandated agencies in 
                  every state (e.g., Disability Rights California, Disability Rights Texas) that protect the 
                  rights of individuals with disabilities.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>When to Use:</strong> When seeking legal representation for systemic advocacy, not 
                  just individual case assistance.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Key Strategy:</strong> Frame your request as a "test case" for challenging a 
                  systemic barrier, not merely a private custody dispute. P&As prioritize systemic advocacy 
                  that can reform policies affecting multiple individuals.
                </p>
              </div>
            </div>

            {/* Pathway 4: SOI */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">4. DOJ Statement of Interest (SOI)</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>What It Does:</strong> If you have retained counsel and filed a federal lawsuit, 
                  you can request that the DOJ file a Statement of Interest—a legal brief offering the 
                  federal government's authoritative interpretation of disability law.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>When to Use:</strong> When a state court or agency is arguing a legal position 
                  that contradicts established DOJ policy, or when the case involves a question of general 
                  public importance.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Strategic Value:</strong> Courts grant "considerable respect" to DOJ 
                  interpretations. An SOI can defeat a Motion to Dismiss, clarify misunderstood legal 
                  standards, or "thaw" a frozen case.
                </p>
              </div>
            </div>

            {/* Pathway 5: NCD */}
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">5. National Council on Disability (NCD) Policy Feedback</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>What It Does:</strong> The NCD is an independent federal agency that advises the 
                  President and Congress on disability policy. Their investigations often form the basis for 
                  future DOJ/HHS guidance and legislation.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>When to Use:</strong> For long-term systemic change through policy advocacy and 
                  federal reporting.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Key Report:</strong> The 2012 NCD report <em>"Rocking the Cradle: Ensuring the 
                  Rights of Parents with Disabilities"</em> documented systemic bias in child welfare and 
                  called for elimination of "predictive neglect" statutes. All advocacy should reference 
                  this foundational work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Attorneys and Advocates Call-out Box */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-10">
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">For Attorneys and Advocates</h3>
                    <p className="text-sm text-accent-font text-primary font-medium">
                      Strategic Filing Checklist
                    </p>
                  </div>
                </div>
                
                <p className="text-base leading-relaxed mb-6">
                  Effective remediation of systemic ADA violations requires a multi-faceted approach:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">1.</span>
                    <span><strong>Preserve the Record:</strong> Formally request accommodations in writing at every hearing. Object on the record when denied.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">2.</span>
                    <span><strong>Dual-Agency Filing:</strong> File simultaneous complaints with DOJ (court access) and HHS (agency services) to address both sides of the system.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">3.</span>
                    <span><strong>Judicial Misconduct Reporting:</strong> If denial involved hostile demeanor, file a separate conduct complaint focusing on the hostile environment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">4.</span>
                    <span><strong>Strategic Escalation:</strong> If represented by counsel, request a DOJ Statement of Interest to frame the case as a threat to the integration mandate.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">5.</span>
                    <span><strong>Policy Feedback:</strong> Submit your narrative to the NCD and local P&A to ensure the systemic failure is recorded in federal metrics.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <a href="/Administrative-Pathways-ADA-Compliance-Full-Guide.pdf" download>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Guide PDF
                    </Button>
                  </a>
                  <Link href="/resources">
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      View All Resources
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Gordon Settlement */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">The Gordon Settlement: Your Legal Foundation</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The January 2015 joint DOJ/HHS Letter of Findings regarding Massachusetts DCF established 
                critical legal principles that should be cited in every complaint:
              </p>

              <div className="grid gap-6 my-8">
                <div className="p-6 bg-card rounded-sm">
                  <h3 className="text-xl font-display font-bold mb-3">Individualized Assessment Required</h3>
                  <p className="text-base leading-relaxed">
                    Agencies cannot rely on disability diagnosis to presume unfitness. They must evaluate 
                    actual capabilities.
                  </p>
                </div>
                
                <div className="p-6 bg-card rounded-sm">
                  <h3 className="text-xl font-display font-bold mb-3">Reasonable Modifications in Reunification</h3>
                  <p className="text-base leading-relaxed">
                    The duty to provide accommodations extends to all reunification services. Inaccessible 
                    parenting classes violate federal law.
                  </p>
                </div>
                
                <div className="p-6 bg-card rounded-sm">
                  <h3 className="text-xl font-display font-bold mb-3">Safety Cannot Be a Pretext</h3>
                  <p className="text-base leading-relaxed">
                    Safety concerns must be based on actual risks, not "mere speculation, stereotypes, or 
                    generalizations" about disability.
                  </p>
                </div>
                
                <div className="p-6 bg-card rounded-sm">
                  <h3 className="text-xl font-display font-bold mb-3">"Reasonable Efforts" Include ADA Compliance</h3>
                  <p className="text-base leading-relaxed">
                    Under Title IV-E, failure to provide disability-related accommodations is a failure to 
                    meet the statutory "reasonable efforts" requirement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">Conclusion: From Individual Harm to Systemic Reform</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The pathway to justice for disabled parents is not a single door but a network of 
                administrative levers. You cannot rely solely on the discretion of a presiding judge. 
                Instead, you must adopt a strategic, multi-agency approach that targets the institutional 
                architecture of discrimination.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Administrative remediation is not about winning a single case. It is about forcing systemic 
                compliance that protects future families. It is about documenting patterns that federal 
                agencies cannot ignore. It is about transforming individual harm into collective power for 
                reform.
              </p>
              
              <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary">
                <p className="text-xl text-foreground italic leading-relaxed">
                  The tools exist. The legal precedents are established. The federal agencies have 
                  jurisdiction. What remains is the strategic deployment of these pathways by disabled 
                  parents, advocates, and attorneys who refuse to accept systemic exclusion as inevitable.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                This is not just legal strategy. It is civil rights enforcement. And it is long overdue.
              </p>
            </div>
          </div>
        </section>

        {/* Citation Section */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">How to Cite This Work</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-sm">
                <h3 className="text-sm font-bold text-accent-font text-primary mb-3">APA 7th Edition</h3>
                <p className="text-base leading-relaxed font-mono text-sm">
                  Copeland, K. (2026). <em>Fighting back: Administrative pathways for ADA compliance in family courts</em>. https://copelandlaw.com/article/fighting-back-administrative-pathways
                </p>
              </div>

              <div className="p-6 bg-card rounded-sm">
                <h3 className="text-sm font-bold text-accent-font text-primary mb-3">Bluebook (21st ed.)</h3>
                <p className="text-base leading-relaxed font-mono text-sm">
                  Kathryn Copeland, <em>Fighting Back: Administrative Pathways for ADA Compliance in Family Courts</em>, https://copelandlaw.com/article/fighting-back-administrative-pathways (2026).
                </p>
              </div>

              <div className="p-6 bg-card rounded-sm">
                <h3 className="text-sm font-bold text-accent-font text-primary mb-3">MLA 9th Edition</h3>
                <p className="text-base leading-relaxed font-mono text-sm">
                  Copeland, Kathryn. "Fighting Back: Administrative Pathways for ADA Compliance in Family Courts." <em>Copeland Law</em>, 2026, copelandlaw.com/article/fighting-back-administrative-pathways.
                </p>
              </div>

              <div className="p-6 bg-card rounded-sm">
                <h3 className="text-sm font-bold text-accent-font text-primary mb-3">Chicago 17th Edition</h3>
                <p className="text-base leading-relaxed font-mono text-sm">
                  Copeland, Kathryn. "Fighting Back: Administrative Pathways for ADA Compliance in Family Courts." Copeland Law, 2026. https://copelandlaw.com/article/fighting-back-administrative-pathways.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card border-l-4 border-primary">
              <p className="text-sm text-foreground/70 mb-2">
                <strong>Copyright Notice:</strong> © 2026 Kathryn Copeland. All Rights Reserved.
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Trademark Notice:</strong> The Copeland Questions™ is a trademark of Kathryn Copeland.
              </p>
            </div>
          </div>
        </section>

        {/* Social Sharing */}
        <section className="py-16 bg-card">
          <div className="container-reading text-center">
            <h2 className="mb-6">Share This Guide</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Help other families access these critical federal remediation pathways
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => handleShare('twitter')}
                aria-label="Share on Twitter"
               
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share on Twitter
              </Button>
              <Button 
                size="lg"
                onClick={() => handleShare('linkedin')}
                aria-label="Share on LinkedIn"
               
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share on LinkedIn
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={copyLink}
                aria-label="Copy link"
               
              >
                <LinkIcon className="mr-2 h-5 w-5" />
                Copy Link
              </Button>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
