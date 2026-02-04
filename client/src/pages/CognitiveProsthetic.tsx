import { Link } from 'wouter';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShareResource } from '@/components/ShareResource';

export default function CognitiveProsthetic() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            AI as a Civil Right: The Cognitive Prosthetic
          </h1>
          <p className="text-lg text-slate-600">
            By Kathryn Copeland
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 max-w-3xl">
        <article className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-slate-700 mb-8">
            Imagine a courtroom where the judge orders a paraplegic lawyer to leave their wheelchair in the hallway. "It's an unfair advantage," the judge says. "You have to walk to the podium like everyone else."
          </p>

          <p>
            It sounds absurd. It sounds illegal. And yet, it happens every day in courtrooms across America.
          </p>

          <p>
            But the wheelchair isn't physical. It's digital.
          </p>

          <p>
            For millions of people with Traumatic Brain Injury (TBI), Autism, or neurological processing disorders, the "wheelchair" is Artificial Intelligence.
          </p>

          <h2 className="text-3xl font-serif text-slate-900 mt-12 mb-6">
            The Invisible Wall
          </h2>

          <p>
            The legal system is built on a specific cognitive assumption: that "intelligence" equals "speed." If you can retrieve a case citation in 0.5 seconds, you are competent. If it takes you 5 seconds because your brain has to route around a damaged neural pathway, you are "confused."
          </p>

          <p>
            This is not a lack of intelligence. It is a lack of bandwidth.
          </p>

          <h2 className="text-3xl font-serif text-slate-900 mt-12 mb-6">
            Enter the Cognitive Prosthetic
          </h2>

          <p>
            Medical AI—specifically Large Language Models (LLMs)—does for the brain what the wheelchair does for the legs. It bridges the gap between intent and action.
          </p>

          <p>
            It doesn't "think" for you.
          </p>

          <p>
            It processes for you.
          </p>

          <p>
            It handles the executive function—the sorting, the retrieving, the summarizing—so the human mind is free to do the actual work: <strong>Reasoning</strong>.
          </p>

          <h2 className="text-3xl font-serif text-slate-900 mt-12 mb-6">
            The New Civil Right
          </h2>

          <p>
            We are standing at the edge of a new civil rights frontier. The right to use AI is not just about convenience; it is about <strong>Cognitive Liberty</strong>. It is the right to augment one's own mind to meet the demands of a complex world.
          </p>

          <p>
            When a court bans AI, it is not banning a "cheat sheet." It is banning the very tool that allows a neurodivergent citizen to exist as a legal person.
          </p>

          <p>
            It is time to recognize the Cognitive Prosthetic. It is time to let the mind enter the room.
          </p>

          {/* Related Content */}
          <div className="mt-16 p-8 bg-teal-50 border border-teal-200 rounded-lg not-prose">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              About This Work
            </h3>
            <p className="text-slate-700 mb-4">
              This essay introduces the concept of the <strong>Cognitive Prosthetic</strong>—a framework for understanding AI as a disability accommodation under Title II of the Americans with Disabilities Act. A full law review article developing this framework is forthcoming.
            </p>
            <p className="text-slate-700">
              For more on disability rights and court access, see{' '}
              <Link href="/framework" className="text-teal-700 hover:text-teal-800 underline">
                The Copeland Questions™
              </Link>
              {' '}and{' '}
              <Link href="/access-before-evaluation" className="text-teal-700 hover:text-teal-800 underline">
                Access Before Evaluation
              </Link>.
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-slate-50 border border-slate-200 rounded-lg not-prose">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              About the Author
            </h3>
            <p className="text-slate-700">
              <strong>Kathryn "Katie" Copeland</strong> is a Texas attorney and disabled litigant working at the intersection of disability law, court access, and civil procedure. Her work examines how Title II obligations are implemented—or missed—in real-world litigation, and how access failures quietly shape legal outcomes.
            </p>
            <p className="text-slate-700 mt-4">
              Contact: <a href="mailto:katie@copelandlawtexas.com" className="text-teal-700 hover:text-teal-800 underline">katie@copelandlawtexas.com</a>
            </p>
          </div>
        </article>

        {/* Share Section */}
        <div className="mt-16">
          <ShareResource
            title="AI as a Civil Right: The Cognitive Prosthetic"
            description="Reframing AI as a disability accommodation under the ADA. Courts that ban AI without considering cognitive disabilities may be violating Title II."
            url="https://copelandlawtexas.com/cognitive-prosthetic"
          />
        </div>
      </main>
    </div>
  );
}
