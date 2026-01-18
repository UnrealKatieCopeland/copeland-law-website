/**
 * Interactive Case Law Quiz Component
 * Tests understanding of The Copeland Questions™ framework through real scenarios
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Share2, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface QuizQuestion {
  id: number;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  caseLaw: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    scenario: "Judge Martinez denies a parent's request for CART services, stating: \"I've reviewed the medical records and I don't believe you really need this accommodation. Your hearing test shows only moderate loss.\"",
    question: "What is the legal error?",
    options: [
      "The judge should have ordered a second medical opinion",
      "The judge engaged in a belief-based credibility inquiry instead of effect-based analysis",
      "The judge correctly exercised discretion based on medical evidence",
      "The parent should have appealed instead of requesting accommodation"
    ],
    correctAnswer: 1,
    explanation: "The judge's statement \"I don't believe you really need this\" demonstrates the exact reasoning error The Copeland Questions™ framework addresses. Under Title II regulations, courts cannot require proof of disability severity or engage in credibility assessments about \"really needing\" accommodations.",
    caseLaw: "Gordon v. Massachusetts DCF (2015) and 28 C.F.R. § 35.130 establish that the proper inquiry is effect-based: \"Does the standard procedure risk denying meaningful access?\" not \"Do I believe this person is disabled?\" | Read more: Illinois Bar Association article on the Gordon case (PDF) | Full DOJ/HHS Letter of Findings (PDF)"
  },
  {
    id: 2,
    scenario: "A parent with PTSD requests a 10-minute break every hour during a full-day custody hearing. The judge denies the request, explaining: \"We treat everyone equally here. If I give you breaks, I'd have to give breaks to everyone, and we'd never finish.\"",
    question: "What principle does this violate?",
    options: [
      "Equal treatment doctrine—the judge is correct",
      "The ADA's requirement for reasonable modifications to standard procedures",
      "Judicial efficiency standards",
      "The parent's right to a speedy trial"
    ],
    correctAnswer: 1,
    explanation: "\"Treating everyone the same\" is not equality when disability affects participation. The ADA requires reasonable modifications to policies, practices, or procedures when necessary to avoid discrimination. Scheduled breaks are a textbook reasonable modification.",
    caseLaw: "28 C.F.R. § 35.130(b)(7) requires public entities to make \"reasonable modifications in policies, practices, or procedures\" unless doing so would fundamentally alter the nature of the service. Brief breaks do not fundamentally alter adjudication."
  },
  {
    id: 3,
    scenario: "A court's intake form has no section for requesting accommodations. When a deaf parent appears without an interpreter, the judge states: \"You should have called ahead. We can't provide services without advance notice. We'll have to reschedule.\"",
    question: "What is the systemic problem?",
    options: [
      "The parent's failure to plan ahead",
      "The court's discriminatory \"method of administration\"",
      "Insufficient court funding for interpreters",
      "The judge's reasonable scheduling concern"
    ],
    correctAnswer: 1,
    explanation: "This is a classic \"methods of administration\" violation. When a court's intake procedures systematically fail to capture accommodation needs, the system itself creates barriers. The burden cannot be placed entirely on disabled litigants to navigate an inaccessible system.",
    caseLaw: "Under 28 C.F.R. § 35.130(b)(3), a public entity may not \"utilize criteria or methods of administration\" that have the effect of subjecting individuals with disabilities to discrimination. Intake forms that omit accommodation requests are discriminatory by design."
  },
  {
    id: 4,
    scenario: "A parent with an autoimmune condition requests a continuance due to a flare-up. The judge reviews the parent's attendance record and notes: \"You've requested three continuances this year. This pattern suggests you're not serious about your case. Request denied.\"",
    question: "What does the ADA Amendments Act say about this?",
    options: [
      "Judges can penalize patterns of absence",
      "Episodic disabilities are not protected under the ADA",
      "Conditions that are \"episodic or in remission\" are explicitly protected",
      "The parent should have provided more medical documentation"
    ],
    correctAnswer: 2,
    explanation: "The ADA Amendments Act of 2008 explicitly protects conditions that are \"episodic or in remission.\" Penalizing a parent for flare-ups of a chronic condition is discrimination based on the episodic nature of the disability itself.",
    caseLaw: "42 U.S.C. § 12102(4)(D) states that an impairment is a disability if it would substantially limit a major life activity when active. Courts must accommodate the episodic nature of conditions rather than treating episodes as evidence of lack of commitment."
  },
  {
    id: 5,
    scenario: "A parent with an intellectual disability is ordered to complete a parenting class that requires reading complex written materials and passing a written test. The parent requests hands-on instruction instead. The agency responds: \"This is our standard curriculum. We can't lower the bar for anyone.\"",
    question: "What is the correct legal analysis?",
    options: [
      "The agency is protecting program integrity",
      "Modifying the format would lower standards",
      "The agency must provide reasonable modifications without lowering substantive standards",
      "The parent should find a different program"
    ],
    correctAnswer: 2,
    explanation: "Providing hands-on instruction instead of written materials is a format modification, not a lowering of standards. The parent must still demonstrate the same parenting competencies—just through a different instructional method.",
    caseLaw: "The Gordon settlement (2015) established that child welfare agencies must provide reasonable modifications in reunification services. Changing instructional format does not alter the substantive requirement of demonstrating parenting skills."
  },
  {
    id: 6,
    scenario: "A judge observes a parent struggling to organize documents during a hearing and comments: \"If you can't even keep your papers in order, how can you manage a child's schedule?\" The parent has ADHD and requested a support person to help with organization, which was denied.",
    question: "What reasoning error is the judge making?",
    options: [
      "Valid inference about parenting capacity",
      "Conflating presentation style with substantive merit",
      "Appropriate credibility assessment",
      "Neutral observation of courtroom behavior"
    ],
    correctAnswer: 1,
    explanation: "This is the core dialectical error: confusing how information is presented with whether it is true. The parent's difficulty with document organization during a high-stress hearing does not predict their ability to parent with appropriate supports in place.",
    caseLaw: "The Copeland Questions™ framework addresses this exact error: \"Does this procedure, as applied, risk denying meaningful access or distorting participation because of disability?\" The denial of a support person created the barrier the judge then used as evidence against the parent."
  },
  {
    id: 7,
    scenario: "A court's standing order states: \"All custody evaluations will use the standardized XYZ Parenting Assessment.\" A parent with a visual impairment requests an alternative assessment format. The court responds: \"We use this assessment for consistency. Making exceptions would compromise our evaluation standards.\"",
    question: "What is the proper ADA analysis?",
    options: [
      "Consistency is a legitimate government interest that outweighs accommodation",
      "The court must determine if an alternative assessment can measure the same competencies",
      "Standardized assessments are exempt from ADA requirements",
      "The parent should accept the standard assessment"
    ],
    correctAnswer: 1,
    explanation: "The question is not whether to maintain standards, but whether the standard tool is the only way to measure parenting capacity. If an alternative assessment can measure the same competencies without visual requirements, it must be provided.",
    caseLaw: "Under 28 C.F.R. § 35.130(b)(7), modifications are required unless they would \"fundamentally alter\" the nature of the service. Measuring parenting capacity is the objective; the specific assessment tool is the method. Alternative methods that achieve the same objective do not fundamentally alter the service."
  },
  {
    id: 8,
    scenario: "A parent requests remote video participation due to mobility limitations that make courthouse access difficult. The judge denies the request, stating: \"Physical presence is important for me to assess demeanor and credibility. Allowing remote participation would give you an unfair advantage.\"",
    question: "What is wrong with this reasoning?",
    options: [
      "The judge is correct that physical presence is necessary",
      "Remote participation is not a reasonable accommodation",
      "The reasoning treats accessibility as an \"advantage\" rather than equal access",
      "Demeanor assessment requires in-person observation"
    ],
    correctAnswer: 2,
    explanation: "Framing accommodation as an \"unfair advantage\" reveals the belief that the standard procedure is neutral. In reality, the standard procedure (required physical presence) creates a barrier for the disabled parent. Remote participation levels the playing field—it doesn't tilt it.",
    caseLaw: "The COVID-19 pandemic proved that courts can effectively conduct proceedings remotely without compromising adjudication. Post-pandemic, denying remote access to disabled litigants while maintaining it as an option for others may constitute discrimination under Title II."
  },
  {
    id: 9,
    scenario: "A child welfare agency's policy states: \"Parents with a history of psychiatric hospitalization require supervised visitation until cleared by our agency psychologist.\" A parent with bipolar disorder, stable for three years, is automatically placed in supervised visitation based solely on past hospitalization.",
    question: "What legal principle does this violate?",
    options: [
      "Safety-first approach—the agency is being cautious",
      "The requirement for individualized assessment rather than categorical exclusion",
      "Reasonable agency discretion",
      "Protection of the child's best interests"
    ],
    correctAnswer: 1,
    explanation: "This is \"predictive neglect\"—using disability diagnosis or history to presume unfitness without individualized assessment of current functioning. The ADA prohibits categorical exclusions based on disability status.",
    caseLaw: "The Gordon settlement explicitly rejected policies that rely on \"discriminatory assumptions and stereotypes\" rather than individualized assessment. A blanket policy based on psychiatric history, without consideration of current stability, violates both Title II and Section 504."
  },
  {
    id: 10,
    scenario: "A judge states: \"I understand you have a disability, and I want to help. But I also have to think about the child's safety. If there's any risk, I have to err on the side of caution.\"",
    question: "What is the subtle error in this well-intentioned statement?",
    options: [
      "No error—the judge is balancing competing interests",
      "The judge is conflating disability with risk without evidence of actual risk",
      "Child safety always overrides ADA obligations",
      "The judge is showing appropriate judicial concern"
    ],
    correctAnswer: 1,
    explanation: "The phrase \"if there's any risk\" suggests that disability itself creates risk. The proper analysis requires evidence of actual risk, not speculation based on disability. The Gordon settlement explicitly rejected the argument that \"safety\" automatically overrides ADA obligations.",
    caseLaw: "Gordon settlement (2015): Safety requirements must be based on \"actual risks, not on mere speculation, stereotypes, or generalizations about individuals with disabilities.\" The ADA does not require courts to ignore safety—it requires them to base safety determinations on evidence, not assumptions about disability."
  }
];

export default function CopelandQuestionsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Prevent changing answer after submission
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let feedback = "";
    
    if (percentage >= 90) {
      feedback = "Outstanding! You have a strong grasp of The Copeland Questions™ framework and can identify reasoning errors with precision.";
    } else if (percentage >= 70) {
      feedback = "Well done! You understand the core principles. Review the explanations for the questions you missed to deepen your analysis.";
    } else if (percentage >= 50) {
      feedback = "Good start! You're beginning to recognize the patterns. Review the framework materials and retake the quiz to strengthen your understanding.";
    } else {
      feedback = "This framework requires a shift in thinking. Review the \"Not Either/Or, But Both/And\" essay and the Quick Reference Deck, then try again.";
    }

    return (
      <Card className="border-primary/30">
        <CardContent className="p-10 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-display font-bold mb-4">Quiz Complete!</h3>
            <p className="text-5xl font-bold text-primary mb-4">{score}/{quizQuestions.length}</p>
            <p className="text-xl text-foreground/70 mb-6">{percentage}% Correct</p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {feedback}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={handleRestartQuiz} style={{ color: '#ffffff' }}>
              <RotateCcw className="mr-2 h-5 w-5" />
              Retake Quiz
            </Button>
            <a href="/framework">
              <Button size="lg" variant="outline" style={{ color: '#ffffff' }}>
                Review Framework
              </Button>
            </a>
          </div>

          {/* Social Sharing Section */}
          <div className="mt-8 p-6 bg-primary/5 rounded-sm">
            <h4 className="text-lg font-display font-bold mb-4 flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5" aria-hidden="true" />
              Share Your Results
            </h4>
            <p className="text-sm text-foreground/70 mb-4">
              Challenge your colleagues and help spread awareness of disability access law!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const text = `I scored ${score}/${quizQuestions.length} (${percentage}%) on The Copeland Questions™ Quiz. Can you spot the ADA violations judges make? Test your knowledge:`;
                  const url = window.location.origin + '/quiz';
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                }}
                aria-label="Share quiz results on Twitter"
              >
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Share on X
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const text = `I scored ${score}/${quizQuestions.length} (${percentage}%) on The Copeland Questions™ Quiz—a framework for identifying ADA violations in courtrooms. Test your understanding of disability access law:`;
                  const url = window.location.origin + '/quiz';
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`, '_blank');
                }}
                aria-label="Share quiz results on LinkedIn"
              >
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share on LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = window.location.origin + '/quiz';
                  navigator.clipboard.writeText(url);
                  setLinkCopied(true);
                  toast.success('Link copied to clipboard!');
                  setTimeout(() => setLinkCopied(false), 2000);
                }}
                aria-label="Copy quiz link to clipboard"
              >
                {linkCopied ? (
                  <><Check className="h-4 w-4 mr-2" aria-hidden="true" />Copied!</>
                ) : (
                  <><Copy className="h-4 w-4 mr-2" aria-hidden="true" />Copy Link</>
                )}
              </Button>
            </div>
          </div>

          {/* Explore More Tools */}
          <div className="mt-12 pt-8 border-t border-border/40">
            <h4 className="text-2xl font-display font-bold mb-6">Explore More Tools</h4>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-background border border-border/40 rounded-sm hover:border-primary/40 transition-colors">
                <h5 className="font-display font-bold text-lg mb-2">Accommodation Calculator</h5>
                <p className="text-sm text-foreground/70 mb-4">
                  Get personalized accommodation recommendations with legal citations and a template request letter.
                </p>
                <a href="/accommodation-calculator">
                  <Button variant="outline" size="sm">
                    Try Calculator →
                  </Button>
                </a>
              </div>
              <div className="p-6 bg-background border border-border/40 rounded-sm hover:border-primary/40 transition-colors">
                <h5 className="font-display font-bold text-lg mb-2">Interactive Decision Tree</h5>
                <p className="text-sm text-foreground/70 mb-4">
                  Navigate the accommodation process with a guided decision tree tailored to your situation.
                </p>
                <a href="/decision-tree">
                  <Button variant="outline" size="sm">
                    Explore Tool →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="flex items-center gap-4">
        <div className="flex-1 bg-border/30 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-foreground/60 font-medium whitespace-nowrap">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </span>
      </div>

      {/* Question Card */}
      <Card className="border-primary/30">
        <CardContent className="p-8">
          {/* Scenario */}
          <div className="mb-6 p-6 bg-primary/5 rounded-sm border-l-4 border-primary">
            <p className="text-sm text-accent-font text-primary font-semibold mb-2">SCENARIO</p>
            <p className="text-base leading-relaxed">{question.scenario}</p>
          </div>

          {/* Question */}
          <h3 className="text-xl font-display font-bold mb-6">{question.question}</h3>

          {/* Answer Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectOption = index === question.correctAnswer;
              const showCorrect = showExplanation && isCorrectOption;
              const showIncorrect = showExplanation && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`
                    w-full text-left p-4 rounded-sm border-2 transition-all
                    ${isSelected && !showExplanation ? 'border-primary bg-primary/10' : 'border-border/40'}
                    ${showCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950' : ''}
                    ${showIncorrect ? 'border-red-500 bg-red-50 dark:bg-red-950' : ''}
                    ${!showExplanation ? 'hover:border-primary/60 cursor-pointer' : 'cursor-default'}
                  `}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-base leading-relaxed">{option}</span>
                    {showCorrect && <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-600" />}
                    {showIncorrect && <XCircle className="flex-shrink-0 h-6 w-6 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className={`p-6 rounded-sm border-l-4 ${isCorrect ? 'bg-green-50 dark:bg-green-950 border-green-500' : 'bg-red-50 dark:bg-red-950 border-red-500'}`}>
                <p className="text-sm font-bold mb-2 flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-700 dark:text-green-400">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-red-600" />
                      <span className="text-red-700 dark:text-red-400">Not quite.</span>
                    </>
                  )}
                </p>
                <p className="text-base leading-relaxed">{question.explanation}</p>
              </div>

              <div className="p-6 bg-card rounded-sm border border-border/40">
                <p className="text-sm text-accent-font text-primary font-semibold mb-2">LEGAL FOUNDATION</p>
                <div className="text-sm leading-relaxed text-foreground/70">
                  {question.caseLaw.split('|').map((part, index) => {
                    const pdfMatch = part.match(/(.*?)\s*\(PDF\)/);
                    if (pdfMatch) {
                      const linkText = pdfMatch[1].trim();
                      let pdfUrl = '';
                      if (linkText.includes('Illinois Bar')) {
                        pdfUrl = '/IllinoisArticle_June2015_18.pdf';
                      } else if (linkText.includes('DOJ/HHS')) {
                        pdfUrl = '/Gordonletter.pdf';
                      }
                      return (
                        <span key={index}>
                          {index > 0 && ' | '}
                          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {linkText} (PDF)
                          </a>
                        </span>
                      );
                    }
                    return <span key={index}>{index > 0 && ' | '}{part}</span>;
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            {!showExplanation ? (
              <Button 
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                style={{ color: '#ffffff' }}
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} style={{ color: '#ffffff' }}>
                {currentQuestion < quizQuestions.length - 1 ? (
                  <>
                    Next Question
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  'View Results'
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Current Score */}
      <div className="text-center text-sm text-foreground/60">
        Current Score: {score} / {currentQuestion + (showExplanation ? 1 : 0)}
      </div>
    </div>
  );
}
