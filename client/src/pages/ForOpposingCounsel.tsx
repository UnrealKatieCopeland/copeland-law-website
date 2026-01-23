import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, AlertTriangle, BookOpen, Scale, FileText } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

export default function ForOpposingCounsel() {
  return (
    <>
      <SEOHead
        title="For Opposing Counsel - ADA Accommodation Guidance"
        description="Educational guide for opposing counsel on ADA Title II obligations, professional responses to accommodation requests, and legal risks of opposition."
        path="/for-opposing-counsel"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-card">
          <div className="container-reading">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Scale className="h-4 w-4" />
                Professional Guidance
              </div>
              <h1 className="mb-6">For Opposing Counsel</h1>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                A respectful guide to understanding ADA Title II obligations and responding professionally 
                to accommodation requests in judicial proceedings.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                When your opposing party requests an ADA accommodation, you may wonder what role you play 
                in the process. This guide clarifies the legal framework, explains what opposing counsel 
                can and cannot do, and provides practical guidance for responding professionally.
              </p>
              
              <p className="text-lg leading-relaxed mt-6">
                This resource assumes good faith on all sides. Most attorneys want to do the right thing 
                and ensure fair proceedings. Understanding the legal boundaries helps everyone fulfill 
                their professional obligations while protecting their clients' interests.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">The Legal Framework: ADA Title II</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Under the Americans with Disabilities Act (ADA) Title II, <strong>state courts are public entities 
                with a legal duty to provide reasonable accommodations</strong> to qualified individuals with 
                disabilities. This is not a discretionary matter—it is a federal civil rights obligation.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
                <p className="text-base font-medium mb-2">28 C.F.R. § 35.130(b)(7)</p>
                <p className="text-base leading-relaxed italic">
                  "A public entity shall make reasonable modifications in policies, practices, or procedures 
                  when the modifications are necessary to avoid discrimination on the basis of disability, 
                  unless the public entity can demonstrate that making the modifications would fundamentally 
                  alter the nature of the service, program, or activity."
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                The accommodation request is <strong>between the disabled party and the court</strong>. The court—not 
                opposing counsel—determines whether the requested accommodation is reasonable and necessary.
              </p>
            </div>
          </div>
        </section>

        {/* What You CAN Do */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              <h2 className="mb-0">What Opposing Counsel CAN Do</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Coordinate Scheduling
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80">
                    Work with the court and opposing party to find mutually agreeable hearing dates and times 
                    that accommodate everyone's schedules.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Request Clarification
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80">
                    Ask the court (not the opposing party) for clarification about how the accommodation 
                    will be implemented if it affects procedural logistics.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Suggest Alternatives
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80">
                    If the requested accommodation creates genuine logistical challenges, you may suggest 
                    alternative accommodations to the court that achieve the same access goal.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Proceed Professionally
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80">
                    Continue with case preparation and litigation as normal. The accommodation process 
                    should not delay substantive legal work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You CANNOT Do */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <div className="flex items-center gap-3 mb-8">
              <XCircle className="h-8 w-8 text-red-600" />
              <h2 className="mb-0">What Opposing Counsel Should Not Do</h2>
            </div>
            
            <p className="text-base leading-relaxed text-foreground/70 mb-8">
              While opposing counsel can procedurally file any response they choose, the following actions 
              create significant legal and ethical risks with little to no strategic benefit.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Oppose the Request
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80">
                    Filing a response opposing the accommodation request creates legal risk because the ADA does not give 
                    private parties standing to challenge another party's disability status or need for accommodation. 
                    Such opposition may expose your client to ADA Title II liability and raise ethical concerns under 
                    professional conduct rules.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Challenge Medical Necessity
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80">
                    Questioning whether the requesting party is "really" disabled or whether they "really need" 
                    the accommodation creates legal risk. The ADA prohibits disability-based inquiry by private parties. 
                    This determination is between the party and the court.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Require Additional Documentation
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80">
                    Demanding medical records, doctor's notes, or additional proof of disability may violate the ADA's 
                    prohibition on disability-based inquiry by private parties. The court—not opposing counsel—determines 
                    what documentation is sufficient.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Argue Your Client's Preferences
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80">
                    Arguing that your client prefers a different format, timing, or procedure is legally insufficient 
                    because private party convenience is not a defense to ADA discrimination claims. Such arguments may 
                    expose your client to liability without providing any strategic benefit.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-red-50 border-l-4 border-red-600 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-900 mb-2">Critical Point</p>
                  <p className="text-base leading-relaxed text-red-900">
                    While you can procedurally file any response you choose, opposing an ADA accommodation request 
                    creates significant legal risk for your client (potential ADA Title II liability) and ethical risk 
                    for you as counsel (professional conduct violations). The safer and more strategic course is to 
                    let the court handle the accommodation determination without opposition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Misconceptions */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">Common Misconceptions</h2>

            <div className="space-y-8">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Misconception #1: "The accommodation will delay the case."
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80 mb-4">
                    <strong>Reality:</strong> Most accommodations (extra breaks, written materials, assistive technology) 
                    do not delay proceedings. Even accommodations that require rescheduling are legally required 
                    and cannot be opposed on the basis of inconvenience.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/80">
                    Courts have a duty to provide accommodations in a timely manner. If there are genuine 
                    scheduling conflicts, work with the court to find the earliest feasible date—but do not 
                    oppose the accommodation itself.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Misconception #2: "I need to verify the disability is real."
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80 mb-4">
                    <strong>Reality:</strong> The ADA prohibits disability-based inquiry by private parties. 
                    The court—not opposing counsel—determines whether the requesting party has provided 
                    sufficient documentation of their disability and need for accommodation.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/80">
                    Demanding medical records or questioning the legitimacy of the disability may violate 
                    the ADA and create ethical concerns under your state's rules of professional conduct.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Misconception #3: "My client's rights are being violated."
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80 mb-4">
                    <strong>Reality:</strong> Providing ADA accommodations does not violate your client's rights. 
                    Your client is entitled to a fair proceeding—not to a proceeding conducted in a format 
                    that disadvantages the opposing party.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/80">
                    The ADA requires <em>equal access</em>, not preferential treatment. Accommodations level 
                    the playing field; they do not tilt it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Respond Professionally */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">How to Respond Professionally</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                When you receive notice of an accommodation request, the most professional response is 
                often <strong>no response at all</strong>. The request is directed to the court, not to you.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                If you feel you must respond (for example, to coordinate scheduling), here is suggested language:
              </p>

              <div className="bg-muted p-8 rounded-lg my-8 border border-border">
                <p className="text-base leading-relaxed italic mb-4">
                  "Counsel acknowledges receipt of [Opposing Party]'s Motion for ADA Accommodation. 
                  Counsel takes no position on the merits of the accommodation request, as this is a 
                  matter between [Opposing Party] and the Court pursuant to the Americans with Disabilities 
                  Act Title II.
                </p>
                <p className="text-base leading-relaxed italic mb-4">
                  Counsel is available to coordinate scheduling with the Court and opposing party to 
                  facilitate timely implementation of any accommodation the Court deems appropriate.
                </p>
                <p className="text-base leading-relaxed italic">
                  Respectfully submitted,<br />
                  [Your Name]"
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                This language acknowledges the request, clarifies that you are not opposing it, and 
                offers cooperation without taking a position on the substance of the accommodation.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Risks */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <h2 className="mb-8">Legal Risks of Opposing Accommodation Requests</h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed">
                Opposing an ADA accommodation request creates potential legal and ethical risks that 
                every attorney should understand before filing a response.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-amber-200 bg-amber-50/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Void Order Doctrine</h3>
                      <p className="text-base leading-relaxed text-foreground/80 mb-4">
                        Under Texas law, a trial court abuses its discretion as a matter of law when it refuses 
                        to vacate a void order. <em>In re Dickason</em>, 987 S.W.2d 570, 571 (Tex. 1998). A void 
                        order is a "nullity" from its inception and confers no rights. <em>Ex parte Shaffer</em>, 
                        649 S.W.2d 300, 301 (Tex. 1983).
                      </p>
                      <p className="text-base leading-relaxed text-foreground/80 mb-4">
                        <strong>Emerging argument currently in appellate litigation:</strong> Orders issued without 
                        required ADA accommodations may be void (not merely voidable) because the disabled party was 
                        denied the constitutional right to be "present" and "heard." If this argument prevails, any 
                        orders issued after an accommodation request was denied or opposed could be subject to collateral 
                        attack—even years later.
                      </p>
                      <p className="text-base leading-relaxed text-foreground/80">
                        <strong>Practical implication:</strong> Opposing an accommodation request may result in orders 
                        that are later vacated under the mandatory duty to vacate void orders, requiring re-litigation 
                        of the entire matter.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-4">State-Created Danger Doctrine</h3>
                      <p className="text-base leading-relaxed text-foreground/80 mb-4">
                        Under the Fourteenth Amendment's state-created danger doctrine, government actors 
                        (including courts) may be liable when they <strong>affirmatively place individuals 
                        in danger</strong> or render them more vulnerable to harm. <em>DeShaney v. Winnebago 
                        County</em>, 489 U.S. 189 (1989).
                      </p>
                      <p className="text-base leading-relaxed text-foreground/80 mb-4">
                        <strong>Emerging argument currently in civil rights litigation:</strong> When a court denies 
                        an accommodation and then enforces orders issued without that accommodation, it may create a 
                        "functional custody" situation where the disabled party is trapped in a harmful legal status 
                        they cannot escape without the very accommodations that were denied.
                      </p>
                      <p className="text-base leading-relaxed text-foreground/80">
                        <strong>Practical implication:</strong> If this theory is recognized by courts, and if opposing 
                        counsel's actions contribute to the denial of accommodations that leads to documented harm, there 
                        may be civil rights liability under 42 U.S.C. § 1983. This theory is being tested in active litigation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Ethical Concerns</h3>
                      <p className="text-base leading-relaxed text-foreground/80 mb-4">
                        Most state rules of professional conduct require attorneys to avoid conduct that 
                        is prejudicial to the administration of justice. Opposing an ADA accommodation 
                        request may raise questions about whether counsel is:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-foreground/80 mb-4">
                        <li>Interfering with the court's statutory duty to provide accommodations</li>
                        <li>Engaging in disability-based discrimination</li>
                        <li>Creating unnecessary delay or obstruction in the proceedings</li>
                        <li>Advocating for a position that lacks a good faith basis in law</li>
                      </ul>
                      <p className="text-base leading-relaxed text-foreground/80">
                        <strong>Practical implication:</strong> Before opposing an accommodation request, 
                        consult your state's ethics rules and consider whether there is a good faith legal 
                        basis for opposition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Law & Citations */}
        <section className="py-16 bg-card">
          <div className="container-reading">
            <h2 className="mb-8">Key Case Law & Statutory Citations</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">ADA Title II Regulations</h3>
                  <p className="text-sm text-foreground/70 mb-2">28 C.F.R. § 35.130(b)(7)</p>
                  <p className="text-base leading-relaxed">
                    Reasonable modifications required unless fundamental alteration
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Tennessee v. Lane</h3>
                  <p className="text-sm text-foreground/70 mb-2">541 U.S. 509 (2004)</p>
                  <p className="text-base leading-relaxed">
                    ADA Title II applies to judicial proceedings; access to courts is fundamental right
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Rehabilitation Act § 504</h3>
                  <p className="text-sm text-foreground/70 mb-2">29 U.S.C. § 794</p>
                  <p className="text-base leading-relaxed">
                    No exclusion from participation in programs receiving federal funds
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Bridgman v. Moore</h3>
                  <p className="text-sm text-foreground/70 mb-2">185 S.W.3d 1, 5 (Tex. App. 2005)</p>
                  <p className="text-base leading-relaxed">
                    Courts have duty to vacate void orders at any time
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Gordon v. Massachusetts DCF</h3>
                  <p className="text-sm text-foreground/70 mb-2">DOJ/HHS Letter of Findings (2014)</p>
                  <p className="text-base leading-relaxed">
                    Federal investigation finding ADA violations in family court proceedings
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">DeShaney v. Winnebago County</h3>
                  <p className="text-sm text-foreground/70 mb-2">489 U.S. 189 (1989)</p>
                  <p className="text-base leading-relaxed">
                    State-created danger doctrine: liability when state affirmatively places individual in harm
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Link href="/resources">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" />
                  View All Resources & Citations
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 bg-background">
          <div className="container-reading">
            <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
              <h2 className="mb-6">The Bottom Line</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  When your opposing party requests an ADA accommodation, the safest and most professional 
                  course is to <strong>let the court handle it</strong>. You have no legal standing to oppose 
                  the request, and doing so creates potential liability for your client and ethical concerns 
                  for you.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Focus on the substantive legal issues in your case. Coordinate scheduling if needed. 
                  Suggest alternative accommodations if there are genuine logistical concerns. But do not 
                  oppose the accommodation itself.
                </p>
                <p className="text-lg leading-relaxed">
                  The ADA is not your adversary—it's the law. Working within its framework protects 
                  everyone's rights and ensures fair proceedings for all parties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-card border-t border-border">
          <div className="container-reading">
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <p className="text-sm text-foreground/70 leading-relaxed">
                <strong>Disclaimer:</strong> This guide is for educational purposes only and does not constitute 
                legal advice. It is not intended to create an attorney-client relationship. For specific legal 
                guidance regarding ADA compliance in your jurisdiction, consult with an attorney experienced 
                in disability rights law. The legal theories discussed here (including void order doctrine and 
                state-created danger) are evolving areas of law and may not be recognized in all jurisdictions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container-reading text-center">
            <h2 className="mb-6">Learn More About ADA Compliance</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Explore The Copeland Questions framework and interactive tools to deepen your understanding 
              of ADA Title II obligations in judicial proceedings.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/framework">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Explore the Framework
                </Button>
              </Link>
              <Link href="/tools">
                <Button size="lg" variant="outline" className="gap-2">
                  <Scale className="h-5 w-5" />
                  Try Interactive Tools
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
