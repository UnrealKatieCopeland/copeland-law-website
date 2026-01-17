/**
 * Editorial Minimalism Design: Interactive Quiz Page
 * Features The Copeland Questions™ Case Law Quiz
 */

import { Scale, Brain, Award } from "lucide-react";
import CopelandQuestionsQuiz from "@/components/CopelandQuestionsQuiz";

export default function Quiz() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-8 w-8 text-primary" />
            <p className="text-accent-font text-primary">Interactive Learning</p>
          </div>
          
          <h1 className="mb-8">
            The Copeland Questions™ Quiz
          </h1>
          
          <p className="text-2xl text-foreground/70 leading-relaxed font-light mb-8">
            Test Your Understanding of Disability Access Law in Courtrooms
          </p>

          <p className="text-lg text-foreground/60 leading-relaxed mb-8">
            This interactive quiz presents real courtroom scenarios to test your ability to identify 
            reasoning errors, apply The Copeland Questions™ framework, and understand the legal 
            foundations of disability access analysis. Each question includes immediate feedback with 
            case law citations and explanations.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <Brain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold mb-2">10 Scenarios</h3>
                <p className="text-sm text-foreground/70">
                  Real courtroom situations testing your ability to spot reasoning errors
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Scale className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold mb-2">Case Law Citations</h3>
                <p className="text-sm text-foreground/70">
                  Every answer includes legal foundations and precedent
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold mb-2">Instant Feedback</h3>
                <p className="text-sm text-foreground/70">
                  Learn immediately with detailed explanations for each question
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <CopelandQuestionsQuiz />
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-card">
        <div className="container-reading text-center">
          <h2 className="mb-6">Want to Learn More?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Explore the complete framework and additional resources to deepen your understanding 
            of disability access law in judicial proceedings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/framework">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 text-white rounded hover:bg-teal-800 transition-colors">
                <Scale className="w-5 h-5" />
                View Full Framework
              </button>
            </a>
            <a href="/resources">
              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-700 text-teal-700 rounded hover:bg-teal-50 transition-colors">
                View All Resources
              </button>
            </a>
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
