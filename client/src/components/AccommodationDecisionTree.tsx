/**
 * Editorial Minimalism Design: Interactive Decision Tree
 * "Choose Your Own Adventure" style pathway for accommodation analysis
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, RotateCcw, CheckCircle, AlertCircle } from "lucide-react";

interface TreeNode {
  id: string;
  question: string;
  context?: string;
  options: {
    text: string;
    nextId: string | null;
    outcome?: {
      type: "success" | "warning" | "error";
      title: string;
      description: string;
      legalBasis: string;
      nextSteps: string[];
    };
  }[];
}

const decisionTree: TreeNode[] = [
  {
    id: "start",
    question: "Has the party requested a specific accommodation?",
    context: "The ADA requires an individualized assessment. The process begins when someone requests modification.",
    options: [
      {
        text: "Yes, a specific accommodation was requested",
        nextId: "request-made",
      },
      {
        text: "No, but the party mentioned difficulty participating",
        nextId: "informal-request",
      },
      {
        text: "No request has been made",
        nextId: "no-request",
      },
    ],
  },
  {
    id: "request-made",
    question: "Did the court engage in an interactive process to understand the request?",
    context: "28 C.F.R. § 35.164 requires public entities to engage in good faith consultation about requested modifications.",
    options: [
      {
        text: "Yes, the court discussed the request with the party",
        nextId: "interactive-yes",
      },
      {
        text: "No, the court denied without discussion",
        nextId: "no-interactive",
      },
      {
        text: "The court asked for medical documentation first",
        nextId: "medical-gatekeeping",
      },
    ],
  },
  {
    id: "informal-request",
    question: "Did the court treat the statement as a request for accommodation?",
    context: "Under Title II, formal requests are not required. Statements like 'I'm having trouble hearing' or 'I need a break' trigger the duty to accommodate.",
    options: [
      {
        text: "Yes, the court addressed the concern",
        nextId: "informal-addressed",
      },
      {
        text: "No, the court ignored or dismissed the statement",
        nextId: "informal-ignored",
        outcome: {
          type: "error",
          title: "Potential ADA Violation",
          description: "Courts cannot ignore informal accommodation requests. The duty to provide reasonable modifications is triggered by notice of need, not formal paperwork.",
          legalBasis: "28 C.F.R. § 35.130(b)(7) prohibits imposing eligibility criteria that screen out individuals with disabilities. Requiring formal requests creates a procedural barrier.",
          nextSteps: [
            "Document the informal request and the court's response",
            "File a formal written accommodation request",
            "If denied again, file ADA complaint with DOJ Civil Rights Division",
            "Consider requesting findings of fact on the denial",
          ],
        },
      },
    ],
  },
  {
    id: "no-request",
    question: "Does the court have reason to know the party may need accommodation?",
    context: "Courts have constructive notice when disability or barriers are apparent, even without explicit request.",
    options: [
      {
        text: "Yes, the party has disclosed disability or shown difficulty",
        nextId: "constructive-notice",
        outcome: {
          type: "warning",
          title: "Constructive Notice Triggers Duty",
          description: "When courts have reason to know someone may need accommodation, they have an affirmative duty to inquire and offer modifications—even without a formal request.",
          legalBasis: "Gordon v. Massachusetts DCF (2015) establishes that agencies cannot wait for perfect requests when disability and barriers are apparent.",
          nextSteps: [
            "Party should make explicit request for specific accommodations",
            "Court should proactively offer common modifications (breaks, pacing, format adjustments)",
            "Document any observable barriers or difficulties",
            "If court fails to act, file formal complaint citing constructive notice",
          ],
        },
      },
      {
        text: "No, there's no indication of need",
        nextId: null,
        outcome: {
          type: "success",
          title: "No Accommodation Duty Yet",
          description: "Without notice of disability or barriers, courts are not required to proactively offer accommodations. However, procedures should be designed to be accessible by default.",
          legalBasis: "28 C.F.R. § 35.150 requires public entities to ensure programs are accessible. Universal design principles reduce the need for individual accommodations.",
          nextSteps: [
            "Party may request accommodation at any time if needs arise",
            "Court should maintain accessible procedures as baseline",
            "Consider whether standard procedures create unnecessary barriers",
          ],
        },
      },
    ],
  },
  {
    id: "interactive-yes",
    question: "Did the court grant the requested accommodation?",
    options: [
      {
        text: "Yes, the accommodation was granted",
        nextId: null,
        outcome: {
          type: "success",
          title: "Proper ADA Compliance",
          description: "The court followed the required interactive process and granted reasonable modification. This is the model for how accommodation requests should be handled.",
          legalBasis: "28 C.F.R. § 35.164 requires good faith consultation. Granting reasonable modifications ensures meaningful access under Title II.",
          nextSteps: [
            "Document the accommodation for future proceedings",
            "Monitor whether the modification provides effective access",
            "If the accommodation proves insufficient, request adjustment",
          ],
        },
      },
      {
        text: "No, the court denied based on undue burden",
        nextId: "undue-burden",
      },
      {
        text: "No, the court denied based on fundamental alteration",
        nextId: "fundamental-alteration",
      },
    ],
  },
  {
    id: "no-interactive",
    question: "What was the court's stated reason for denial?",
    options: [
      {
        text: "The court questioned whether the person is 'really' disabled",
        nextId: null,
        outcome: {
          type: "error",
          title: "Credibility-Based Denial (Prohibited)",
          description: "Courts cannot engage in credibility assessments about disability status. The proper inquiry is effect-based: 'Does the standard procedure risk denying meaningful access?'",
          legalBasis: "Gordon v. Massachusetts DCF (2015) and 28 C.F.R. § 35.130 establish that belief-based inquiries violate Title II. Courts must focus on procedural effects, not individual credibility.",
          nextSteps: [
            "File motion for reconsideration citing Gordon settlement",
            "Request findings of fact on the denial",
            "File ADA complaint with DOJ Civil Rights Division",
            "Document the exact language used by the court",
            "Consider mandamus if denial prevents meaningful participation",
          ],
        },
      },
      {
        text: "The court said 'we treat everyone equally here'",
        nextId: null,
        outcome: {
          type: "error",
          title: "Formal Equality Violation",
          description: "Equal treatment is not the same as equal access. The ADA requires reasonable modifications precisely because identical treatment can create barriers for people with disabilities.",
          legalBasis: "28 C.F.R. § 35.130(b)(7) prohibits policies that have the effect of discriminating, even if applied equally. Refusing modifications in the name of 'equality' violates Title II.",
          nextSteps: [
            "Cite 28 C.F.R. § 35.130(b)(7) in written objection",
            "Explain that ADA requires different treatment to achieve equal access",
            "Request specific findings on why modification would be unreasonable",
            "File ADA complaint if denial persists",
          ],
        },
      },
      {
        text: "The court said there wasn't enough time or it would delay proceedings",
        nextId: "efficiency-concern",
      },
    ],
  },
  {
    id: "medical-gatekeeping",
    question: "Did the court deny accommodation pending medical documentation?",
    options: [
      {
        text: "Yes, the court refused to consider the request without documentation",
        nextId: null,
        outcome: {
          type: "error",
          title: "Medical Gatekeeping (Prohibited)",
          description: "Courts cannot require medical documentation as a precondition to considering accommodation requests. The ADA prohibits unnecessary inquiries into disability.",
          legalBasis: "42 U.S.C. § 12102(1) defines disability broadly. 28 C.F.R. § 35.130(b)(6) prohibits unnecessary inquiries. Courts may request documentation only when disability is not apparent and the need for modification is not obvious.",
          nextSteps: [
            "Object on the record, citing 28 C.F.R. § 35.130(b)(6)",
            "Argue that the need for modification is apparent regardless of diagnosis",
            "Offer to provide documentation while requesting interim accommodation",
            "File ADA complaint if court refuses to proceed without documentation",
          ],
        },
      },
      {
        text: "No, the court considered the request but asked for documentation to evaluate it",
        nextId: null,
        outcome: {
          type: "warning",
          title: "Permissible Inquiry (With Limits)",
          description: "Courts may request documentation when disability is not apparent and the need for modification is not obvious. However, the request must be limited to what's necessary to evaluate the accommodation, and the court should provide interim modifications while documentation is gathered.",
          legalBasis: "28 C.F.R. § 35.130(b)(6) permits inquiries only when reasonably necessary. The inquiry must be narrowly tailored and not delay access.",
          nextSteps: [
            "Provide documentation limited to the specific accommodation requested",
            "Request interim accommodation while documentation is gathered",
            "Object if the court requests unnecessary medical details",
            "Document any delay caused by the documentation requirement",
          ],
        },
      },
    ],
  },
  {
    id: "informal-addressed",
    question: "Did the court provide effective accommodation?",
    options: [
      {
        text: "Yes, the court made adjustments that addressed the concern",
        nextId: null,
        outcome: {
          type: "success",
          title: "Responsive Court Practice",
          description: "The court properly recognized an informal request and provided accommodation. This demonstrates good ADA compliance and judicial flexibility.",
          legalBasis: "28 C.F.R. § 35.164 encourages informal resolution. Courts that respond to informal requests reduce barriers and promote access.",
          nextSteps: [
            "Thank the court on the record to reinforce positive practice",
            "Document the accommodation for future proceedings",
            "Monitor effectiveness and request adjustments if needed",
          ],
        },
      },
      {
        text: "The court acknowledged the concern but didn't make changes",
        nextId: null,
        outcome: {
          type: "warning",
          title: "Acknowledgment Without Action",
          description: "Acknowledging difficulty without providing accommodation may still violate the ADA if the barrier prevents meaningful access.",
          legalBasis: "28 C.F.R. § 35.130(b)(1) requires modifications to avoid discrimination. Awareness of barriers triggers the duty to act.",
          nextSteps: [
            "Make a specific, formal accommodation request",
            "Explain how the current procedure creates barriers",
            "Request findings if the court denies the modification",
            "Document the acknowledgment and subsequent inaction",
          ],
        },
      },
    ],
  },
  {
    id: "constructive-notice",
    question: "Has the party now made an explicit request?",
    options: [
      {
        text: "Yes, and the court is considering it",
        nextId: "interactive-yes",
      },
      {
        text: "No, the party hasn't formalized the request",
        nextId: null,
        outcome: {
          type: "warning",
          title: "Explicit Request Recommended",
          description: "While courts have a duty when disability is apparent, making an explicit request strengthens the record and triggers formal interactive process requirements.",
          legalBasis: "28 C.F.R. § 35.164 requires consultation when a request is made. Explicit requests create clearer documentation and procedural protections.",
          nextSteps: [
            "File written accommodation request with specific modifications",
            "Reference observable barriers or disclosed disability",
            "Request interactive process meeting if needed",
            "Document the court's response to the formal request",
          ],
        },
      },
    ],
  },
  {
    id: "undue-burden",
    question: "Did the court provide specific, individualized findings about the burden?",
    context: "Undue burden requires case-specific analysis, not generalized concerns about cost or inconvenience.",
    options: [
      {
        text: "Yes, the court made specific findings about this case",
        nextId: null,
        outcome: {
          type: "warning",
          title: "Potentially Valid Undue Burden Defense",
          description: "If the court made individualized findings about undue burden specific to this case, the denial may be defensible. However, the court must also consider alternative accommodations.",
          legalBasis: "28 C.F.R. § 35.164 requires individualized assessment. Undue burden must be determined on a case-by-case basis considering all resources available to the public entity.",
          nextSteps: [
            "Request findings on whether alternative accommodations were considered",
            "Challenge findings if they rely on generalized concerns rather than specific facts",
            "Propose less burdensome alternatives",
            "Consider whether 'burden' is really about judicial preference rather than actual hardship",
          ],
        },
      },
      {
        text: "No, the court made general statements about burden",
        nextId: null,
        outcome: {
          type: "error",
          title: "Insufficient Undue Burden Finding",
          description: "General statements about burden, cost, or inconvenience do not satisfy the ADA's undue burden standard. The court must make individualized findings specific to this case.",
          legalBasis: "28 C.F.R. § 35.164 requires case-specific analysis. Generalized concerns about efficiency or cost do not constitute undue burden.",
          nextSteps: [
            "Object and request specific findings about this case",
            "Ask what resources the court considered in making the determination",
            "Propose alternative accommodations that might reduce burden",
            "File ADA complaint if court refuses to make individualized findings",
            "Request mandamus if denial prevents meaningful participation",
          ],
        },
      },
    ],
  },
  {
    id: "fundamental-alteration",
    question: "Did the court explain how the modification would fundamentally alter the proceeding?",
    context: "Fundamental alteration requires showing that the modification would change the essential nature of the proceeding, not just make it different or less convenient.",
    options: [
      {
        text: "Yes, the court explained how it would alter the essential nature",
        nextId: null,
        outcome: {
          type: "warning",
          title: "Potentially Valid Fundamental Alteration Defense",
          description: "If the modification would truly change the essential nature of the proceeding (not just make it different), the denial may be defensible. However, courts must consider alternative modifications.",
          legalBasis: "28 C.F.R. § 35.130(b)(7) permits denial only when modification would fundamentally alter the nature of the service. This is a high bar—mere inconvenience or difference is not enough.",
          nextSteps: [
            "Challenge whether the identified change is truly 'fundamental' or just different",
            "Ask whether other courts have granted similar modifications without fundamental alteration",
            "Propose alternative accommodations that preserve the essential nature",
            "Request findings on whether the court considered alternatives",
          ],
        },
      },
      {
        text: "No, the court just said it would 'change how we do things'",
        nextId: null,
        outcome: {
          type: "error",
          title: "Insufficient Fundamental Alteration Finding",
          description: "The fact that a modification would change procedures does not make it a fundamental alteration. The ADA requires modifications precisely to change inaccessible procedures.",
          legalBasis: "28 C.F.R. § 35.130(b)(7) requires fundamental alteration, not mere procedural change. Courts must explain how the modification would alter the essential nature of the proceeding, not just make it different.",
          nextSteps: [
            "Object and request specific findings on what makes the change 'fundamental'",
            "Cite examples of similar modifications granted in other courts",
            "Argue that procedural flexibility is inherent in judicial discretion",
            "File ADA complaint if court refuses to make adequate findings",
            "Consider mandamus if denial prevents meaningful participation",
          ],
        },
      },
    ],
  },
  {
    id: "efficiency-concern",
    question: "Did the court consider whether the delay would be significant?",
    options: [
      {
        text: "Yes, the court explained the specific timing concerns",
        nextId: null,
        outcome: {
          type: "warning",
          title: "Efficiency Concerns Must Be Specific",
          description: "Courts may consider efficiency, but generalized concerns about time are not sufficient to deny accommodation. The court must show that the specific modification would cause significant delay.",
          legalBasis: "28 C.F.R. § 35.164 requires individualized assessment. Efficiency concerns must be case-specific and balanced against the right to meaningful access.",
          nextSteps: [
            "Propose modifications that minimize delay (e.g., brief breaks rather than continuances)",
            "Ask whether the court has granted similar accommodations in other cases",
            "Request findings on whether the delay would truly be 'significant'",
            "Consider whether efficiency concerns mask discomfort with disability",
          ],
        },
      },
      {
        text: "No, the court made general statements about time",
        nextId: null,
        outcome: {
          type: "error",
          title: "Generalized Efficiency Concerns Insufficient",
          description: "General statements about time, docket pressure, or efficiency do not justify denying accommodation. The ADA requires individualized analysis of whether this specific modification would cause significant delay.",
          legalBasis: "28 C.F.R. § 35.130(b)(1) prohibits policies that have the effect of discriminating. Blanket efficiency concerns applied without individualized assessment violate Title II.",
          nextSteps: [
            "Object and request specific findings about this case",
            "Propose time-limited modifications (e.g., 5-minute breaks every hour)",
            "Cite case law establishing that brief accommodations do not constitute undue burden",
            "File ADA complaint if court refuses individualized consideration",
            "Document exact time estimates to show minimal impact",
          ],
        },
      },
    ],
  },
];

export default function AccommodationDecisionTree() {
  const [currentNodeId, setCurrentNodeId] = useState<string>("start");
  const [history, setHistory] = useState<string[]>(["start"]);

  const currentNode = decisionTree.find((node) => node.id === currentNodeId);

  const handleChoice = (nextId: string | null) => {
    if (nextId) {
      setCurrentNodeId(nextId);
      setHistory([...history, nextId]);
    }
  };

  const handleReset = () => {
    setCurrentNodeId("start");
    setHistory(["start"]);
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentNodeId(newHistory[newHistory.length - 1]);
    }
  };

  if (!currentNode) return null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
          <span>Step {history.length}</span>
          {history.length > 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="h-auto py-1 px-2"
            >
              ← Back
            </Button>
          )}
        </div>
        <div className="h-2 bg-background rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(history.length / 10) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card className="mb-6">
        <CardContent className="p-8">
          <h3 className="text-2xl font-display font-bold mb-4">
            {currentNode.question}
          </h3>
          {currentNode.context && (
            <p className="text-sm text-foreground/60 mb-6 p-4 bg-primary/5 rounded-sm border-l-4 border-primary">
              {currentNode.context}
            </p>
          )}

          <div className="space-y-3">
            {currentNode.options.map((option, index) => (
              <div key={index}>
                <Button
                  variant="outline"
                  className="w-full justify-between text-left h-auto py-4 px-6"
                  onClick={() => {
                    handleChoice(option.nextId);
                  }}
                >
                  <span className="text-base">{option.text}</span>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 ml-4" />
                </Button>

                {/* Show outcome if this is a terminal node */}
                {option.nextId === null && option.outcome && (
                  <Card
                    className={`mt-4 ${
                      option.outcome.type === "success"
                        ? "border-green-500/50 bg-green-500/5"
                        : option.outcome.type === "warning"
                        ? "border-yellow-500/50 bg-yellow-500/5"
                        : "border-red-500/50 bg-red-500/5"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        {option.outcome.type === "success" ? (
                          <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
                        ) : (
                          <AlertCircle
                            className={`h-8 w-8 flex-shrink-0 ${
                              option.outcome.type === "warning"
                                ? "text-yellow-500"
                                : "text-red-500"
                            }`}
                          />
                        )}
                        <div>
                          <h4 className="text-xl font-bold mb-2">
                            {option.outcome.title}
                          </h4>
                          <p className="text-base leading-relaxed mb-4">
                            {option.outcome.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-background rounded-sm mb-4">
                        <p className="text-sm font-semibold text-primary mb-2">
                          LEGAL BASIS
                        </p>
                        <p className="text-sm leading-relaxed">
                          {option.outcome.legalBasis}
                        </p>
                      </div>

                      <div className="p-4 bg-background rounded-sm">
                        <p className="text-sm font-semibold text-primary mb-3">
                          NEXT STEPS
                        </p>
                        <ul className="space-y-2">
                          {option.outcome.nextSteps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-sm leading-relaxed">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex gap-4">
                        <Button onClick={handleReset} style={{ color: "#ffffff" }}>
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Start Over
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reset Button (shown when not at terminal node) */}
      {history.length > 1 && !currentNode.options.some((opt) => opt.nextId === null) && (
        <div className="text-center">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Start Over
          </Button>
        </div>
      )}
    </div>
  );
}
