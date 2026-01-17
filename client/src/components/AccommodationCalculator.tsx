/**
 * Editorial Minimalism Design: Interactive accommodation calculator
 * Purpose: Generate personalized accommodation recommendations based on user inputs
 * Features: Proceeding type, disability categories, barriers, case law citations, template letters
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Download, FileText, Scale, AlertCircle } from "lucide-react";

interface Recommendation {
  title: string;
  description: string;
  legalBasis: string;
  caselaw: string;
  whyItWorks: string;
}

export default function AccommodationCalculator() {
  const [proceedingType, setProceedingType] = useState("");
  const [disabilities, setDisabilities] = useState<string[]>([]);
  const [barriers, setBarriers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const proceedingTypes = [
    { value: "custody", label: "Child Custody / Family Law" },
    { value: "civil", label: "Civil Litigation" },
    { value: "criminal", label: "Criminal Proceedings" },
    { value: "administrative", label: "Administrative Hearings" },
    { value: "dependency", label: "Dependency / Child Welfare" }
  ];

  const disabilityCategories = [
    { value: "hearing", label: "Hearing Loss / Deaf" },
    { value: "vision", label: "Vision Impairment / Blind" },
    { value: "mobility", label: "Mobility Impairment" },
    { value: "cognitive", label: "Cognitive / Intellectual Disability" },
    { value: "mental_health", label: "Mental Health Condition" },
    { value: "tbi", label: "Traumatic Brain Injury" },
    { value: "chronic_pain", label: "Chronic Pain / Fatigue" },
    { value: "speech", label: "Speech Impairment" },
    { value: "learning", label: "Learning Disability" }
  ];

  const barrierTypes = [
    { value: "fast_pacing", label: "Court proceedings move too quickly" },
    { value: "complex_language", label: "Legal jargon / complex language" },
    { value: "long_hearings", label: "Long hearings without breaks" },
    { value: "written_only", label: "Documents in written format only" },
    { value: "audio_only", label: "Verbal instructions without written backup" },
    { value: "physical_access", label: "Physical barriers (stairs, seating, etc.)" },
    { value: "sensory_overload", label: "Sensory overload (noise, lights, crowds)" },
    { value: "memory_issues", label: "Difficulty remembering instructions" },
    { value: "communication", label: "Difficulty expressing thoughts verbally" },
    { value: "time_pressure", label: "Pressure to respond immediately" }
  ];

  const toggleSelection = (array: string[], value: string, setter: (arr: string[]) => void) => {
    if (array.includes(value)) {
      setter(array.filter(item => item !== value));
    } else {
      setter([...array, value]);
    }
  };

  const generateRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    // CART / Real-time captioning
    if (disabilities.includes("hearing") || barriers.includes("audio_only") || barriers.includes("fast_pacing")) {
      recommendations.push({
        title: "Communication Access Realtime Translation (CART)",
        description: "Real-time captioning of all spoken words displayed on a screen, allowing you to read what is being said as it happens.",
        legalBasis: "28 C.F.R. § 35.160(b)(2) requires public entities to provide auxiliary aids and services to ensure effective communication. CART is explicitly listed as an acceptable auxiliary aid.",
        caselaw: "Gordon v. Massachusetts DCF (2015) DOJ/HHS Letter of Findings: Courts must provide communication supports that ensure meaningful access, not merely technical compliance.",
        whyItWorks: "CART eliminates the need for judges to assess whether you 'really need' accommodation. It provides a verbatim record that benefits everyone—including the court itself for accuracy."
      });
    }

    // Extended time / pacing modifications
    if (barriers.includes("fast_pacing") || barriers.includes("time_pressure") || disabilities.includes("cognitive") || disabilities.includes("tbi")) {
      recommendations.push({
        title: "Modified Pacing with Processing Time",
        description: "Request that the court slow the pace of proceedings, allow pauses between questions, and provide additional time to formulate responses without interruption.",
        legalBasis: "28 C.F.R. § 35.130(b)(7) prohibits methods of administration that have discriminatory effects. Rapid-fire questioning that doesn't account for processing delays violates this standard.",
        caselaw: "42 U.S.C. § 12102(2)(A): Disability is defined by substantial limitation in major life activities, including thinking and concentrating. Courts must modify procedures accordingly.",
        whyItWorks: "This shifts the analysis from 'Can you keep up?' to 'Does the standard pace create a barrier?' The Copeland Questions™ framework supports this: Does the standard procedure risk denying meaningful access?"
      });
    }

    // Scheduled breaks
    if (barriers.includes("long_hearings") || disabilities.includes("chronic_pain") || disabilities.includes("mental_health") || disabilities.includes("tbi")) {
      recommendations.push({
        title: "Scheduled Breaks Every 45-60 Minutes",
        description: "Request breaks at regular intervals (e.g., every 45-60 minutes) to manage pain, fatigue, medication needs, or cognitive overload.",
        legalBasis: "28 C.F.R. § 35.164 requires courts to make reasonable modifications in policies, practices, or procedures when necessary to avoid discrimination.",
        caselaw: "Tennessee v. Lane, 541 U.S. 509 (2004): Title II applies with full force to judicial proceedings. Courts must ensure disabled individuals can participate meaningfully.",
        whyItWorks: "Breaks don't fundamentally alter the proceeding—they simply ensure you can participate fully. This is a textbook reasonable modification."
      });
    }

    // Written summaries / plain language
    if (barriers.includes("complex_language") || barriers.includes("memory_issues") || disabilities.includes("cognitive") || disabilities.includes("learning")) {
      recommendations.push({
        title: "Written Summaries in Plain Language",
        description: "Request that the court provide written summaries of key rulings, deadlines, and next steps in plain language (not legalese), either at the end of each hearing or within 24 hours.",
        legalBasis: "28 C.F.R. § 35.160(a)(1): Courts must take appropriate steps to ensure communication with individuals with disabilities is as effective as communication with others.",
        caselaw: "DOJ ADA Title II Technical Assistance Manual II-7.1100: 'Effective communication' means communication that is actually understood, not merely technically provided.",
        whyItWorks: "This addresses the effect-based inquiry: Does relying solely on verbal instructions risk denying meaningful access? Yes, for individuals with cognitive disabilities."
      });
    }

    // Documents in accessible formats
    if (disabilities.includes("vision") || disabilities.includes("learning") || barriers.includes("written_only")) {
      recommendations.push({
        title: "Documents in Accessible Formats",
        description: "Request that all court documents be provided in accessible formats: large print, Braille, electronic text (for screen readers), or audio format.",
        legalBasis: "28 C.F.R. § 35.160(b)(1) requires auxiliary aids including qualified readers, taped texts, and other effective methods of making visually delivered materials available.",
        caselaw: "28 C.F.R. § 35.104 definition of 'auxiliary aids and services' explicitly includes these formats.",
        whyItWorks: "This is a clear-cut accommodation with established precedent. Courts cannot require you to bring your own reader or rely on family members."
      });
    }

    // Remote participation
    if (disabilities.includes("mobility") || barriers.includes("physical_access") || disabilities.includes("chronic_pain") || barriers.includes("sensory_overload")) {
      recommendations.push({
        title: "Remote Participation via Video Conference",
        description: "Request to participate remotely via Zoom or other video conferencing platform, especially for non-evidentiary hearings (status conferences, case management, etc.).",
        legalBasis: "28 C.F.R. § 35.130(b)(7): Courts must make reasonable modifications to avoid discrimination. Post-pandemic, remote access is technologically feasible and widely used.",
        caselaw: "DOJ COVID-19 Guidance (2020): Remote participation can be a reasonable modification for individuals with disabilities, even after pandemic emergency ends.",
        whyItWorks: "This eliminates physical barriers entirely. For non-evidentiary hearings, there's no fundamental alteration—just a change in location."
      });
    }

    // Support person
    if (disabilities.includes("cognitive") || disabilities.includes("mental_health") || barriers.includes("communication") || barriers.includes("memory_issues")) {
      recommendations.push({
        title: "Support Person Present",
        description: "Request permission for a support person (family member, advocate, or disability services professional) to sit with you during proceedings to provide emotional support and help you understand what's happening.",
        legalBasis: "28 C.F.R. § 35.164: Courts must permit individuals with disabilities to be accompanied by service animals and support persons when necessary for meaningful access.",
        caselaw: "Gordon v. Massachusetts DCF (2015): Agencies violated ADA by denying meaningful assistance from support persons during critical proceedings.",
        whyItWorks: "A support person doesn't speak for you or alter the proceeding—they simply help you participate more effectively. This is analogous to a service animal."
      });
    }

    // Quiet/sensory-friendly environment
    if (barriers.includes("sensory_overload") || disabilities.includes("mental_health") || disabilities.includes("tbi")) {
      recommendations.push({
        title: "Sensory-Friendly Environment",
        description: "Request accommodations like: smaller courtroom, reduced gallery attendance, dimmed lights, or scheduling during less crowded court hours.",
        legalBasis: "28 C.F.R. § 35.130(b)(7): Policies that have discriminatory effects must be modified. If standard courtroom environment prevents participation, modifications are required.",
        caselaw: "DOJ ADA Best Practices Tool Kit for State and Local Governments: Courts should consider sensory needs when ensuring equal access.",
        whyItWorks: "This addresses the environmental barrier, not your disability. The question is: Does the standard environment create a barrier to access?"
      });
    }

    // Advance notice of topics
    if (barriers.includes("time_pressure") || barriers.includes("memory_issues") || disabilities.includes("cognitive") || disabilities.includes("tbi")) {
      recommendations.push({
        title: "Advance Notice of Hearing Topics",
        description: "Request that the court provide advance notice (at least 48-72 hours) of specific topics to be addressed at each hearing, allowing time to prepare and organize thoughts.",
        legalBasis: "28 C.F.R. § 35.164: Reasonable modifications in policies include procedural adjustments that don't fundamentally alter the nature of the service.",
        caselaw: "DOJ Title II Regulation 28 C.F.R. Part 35, Appendix A: Modifications should enable individuals to meet the same essential eligibility requirements as others.",
        whyItWorks: "Advance notice doesn't change what's discussed—it simply allows you to prepare effectively, ensuring equal footing with non-disabled participants."
      });
    }

    return recommendations;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleReset = () => {
    setProceedingType("");
    setDisabilities([]);
    setBarriers([]);
    setShowResults(false);
  };

  const generateTemplateLetter = () => {
    const recs = generateRecommendations();
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    let letter = `[Your Name]\n[Your Address]\n[City, State ZIP]\n[Phone Number]\n[Email Address]\n\n${date}\n\n[Court Name]\n[Judge's Name]\n[Court Address]\n[City, State ZIP]\n\nRe: Request for Reasonable Modifications Under the ADA\n     Case No.: [Your Case Number]\n\nDear [Judge's Name / Court Administrator],\n\nI am writing to request reasonable modifications under Title II of the Americans with Disabilities Act, 42 U.S.C. § 12131 et seq., to ensure my meaningful access to court proceedings in the above-referenced matter.\n\nI have [describe disability in general terms, e.g., "a hearing impairment," "a cognitive disability," "a mobility impairment"]. As a result of this disability, I experience barriers when participating in standard court procedures, specifically:\n\n`;

    barriers.forEach((barrier, index) => {
      const barrierLabel = barrierTypes.find(b => b.value === barrier)?.label || barrier;
      letter += `${index + 1}. ${barrierLabel}\n`;
    });

    letter += `\nTo ensure my meaningful participation, I respectfully request the following reasonable modifications:\n\n`;

    recs.forEach((rec, index) => {
      letter += `${index + 1}. ${rec.title}\n   ${rec.description}\n   Legal Basis: ${rec.legalBasis}\n\n`;
    });

    letter += `These modifications are necessary to provide me with an equal opportunity to participate in court proceedings, as required by 28 C.F.R. § 35.130(b)(1). They do not fundamentally alter the nature of the proceedings or impose undue burden.\n\nI am available to discuss these accommodations and provide any additional information needed. Please confirm receipt of this request and advise of any additional steps required.\n\nThank you for your attention to this matter.\n\nSincerely,\n\n[Your Signature]\n[Your Printed Name]`;

    return letter;
  };

  const downloadTemplateLetter = () => {
    const letter = generateTemplateLetter();
    const blob = new Blob([letter], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ADA-Accommodation-Request-Letter.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const recommendations = showResults ? generateRecommendations() : [];

  return (
    <div className="space-y-8">
      {!showResults ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Proceeding Type */}
          <div>
            <label className="block text-lg font-display font-bold mb-4">
              1. What type of proceeding are you involved in?
            </label>
            <div className="space-y-3">
              {proceedingTypes.map(type => (
                <label key={type.value} className="flex items-center gap-3 p-4 bg-card rounded-sm cursor-pointer hover:bg-card/80 transition-colors">
                  <input
                    type="radio"
                    name="proceeding"
                    value={type.value}
                    checked={proceedingType === type.value}
                    onChange={(e) => setProceedingType(e.target.value)}
                    className="w-4 h-4"
                    required
                  />
                  <span className="text-base">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Disability Categories */}
          <div>
            <label className="block text-lg font-display font-bold mb-4">
              2. Which disability categories apply to you? (Select all that apply)
            </label>
            <div className="space-y-3">
              {disabilityCategories.map(category => (
                <label key={category.value} className="flex items-center gap-3 p-4 bg-card rounded-sm cursor-pointer hover:bg-card/80 transition-colors">
                  <input
                    type="checkbox"
                    value={category.value}
                    checked={disabilities.includes(category.value)}
                    onChange={() => toggleSelection(disabilities, category.value, setDisabilities)}
                    className="w-4 h-4"
                  />
                  <span className="text-base">{category.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Barriers */}
          <div>
            <label className="block text-lg font-display font-bold mb-4">
              3. What specific barriers do you experience? (Select all that apply)
            </label>
            <div className="space-y-3">
              {barrierTypes.map(barrier => (
                <label key={barrier.value} className="flex items-center gap-3 p-4 bg-card rounded-sm cursor-pointer hover:bg-card/80 transition-colors">
                  <input
                    type="checkbox"
                    value={barrier.value}
                    checked={barriers.includes(barrier.value)}
                    onChange={() => toggleSelection(barriers, barrier.value, setBarriers)}
                    className="w-4 h-4"
                  />
                  <span className="text-base">{barrier.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              type="submit" 
              size="lg"
              disabled={!proceedingType || disabilities.length === 0 || barriers.length === 0}
              style={{ color: '#ffffff' }}
            >
              Generate Recommendations
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="lg"
              onClick={handleReset}
              style={{ color: '#ffffff' }}
            >
              Reset
            </Button>
          </div>
        </form>
      ) : (
        <div className="space-y-8">
          {/* Results Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Your Personalized Recommendations</h2>
              <p className="text-lg text-muted-foreground">
                Based on your inputs, here are {recommendations.length} recommended accommodations with legal foundations and template language.
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleReset}
              style={{ color: '#ffffff' }}
            >
              Start Over
            </Button>
          </div>

          {/* Download Template Letter */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg mb-2">Download Template Request Letter</h3>
                  <p className="text-base text-foreground/70 mb-4">
                    We've generated a complete ADA accommodation request letter with all your selected modifications, legal citations, and proper formatting. Download it, fill in your personal information, and submit it to the court.
                  </p>
                  <Button onClick={downloadTemplateLetter} style={{ color: '#ffffff' }}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Letter Template
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl mb-2">{rec.title}</h3>
                      <p className="text-base text-foreground/80 leading-relaxed mb-4">
                        {rec.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pl-10">
                    <div className="p-4 bg-card rounded-sm">
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <Scale className="h-4 w-4" />
                        Legal Basis
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {rec.legalBasis}
                      </p>
                    </div>

                    <div className="p-4 bg-card rounded-sm">
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Case Law
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {rec.caselaw}
                      </p>
                    </div>

                    <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-sm">
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Why This Works
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {rec.whyItWorks}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Next Steps */}
          <Card className="bg-card border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-display font-bold text-lg mb-4">Next Steps</h3>
              <ol className="space-y-3 text-base text-foreground/80">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Download the template letter above and fill in your personal information</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>Submit the letter to the court clerk and the judge assigned to your case</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>Keep a copy for your records and follow up if you don't receive a response within 5-7 business days</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>If your request is denied, document the denial and consider filing an administrative complaint (see our Administrative Pathways guide)</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
