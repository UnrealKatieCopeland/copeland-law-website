/* 
 * Editorial Minimalism Design: Blog/articles listing page
 * Layout: Magazine-style article grid with featured content
 */

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Articles() {
  const featuredArticle = {
    title: "The Copeland Questions: A New Framework for Legal Accountability",
    excerpt: "Introducing a systematic approach to identifying institutional failures and demanding reform in the legal system. Drawing inspiration from transformative legal figures, this framework provides a roadmap for advocates seeking meaningful change.",
    date: "January 2026",
    readTime: "18 min read",
    image: "/images/legal-research.png",
    category: "Legal Reform"
  };

  const articles = [
    {
      title: "Understanding ADA Title II Compliance in Texas Courtrooms",
      excerpt: "A deep dive into the specific requirements for courtroom accessibility and how to enforce them when institutions fail to comply.",
      date: "December 2025",
      readTime: "12 min read",
      category: "Disability Rights"
    },
    {
      title: "Navigating Custody Disputes: Protecting Children's Best Interests",
      excerpt: "Essential strategies for parents facing custody proceedings, with a focus on evidence-based advocacy and trauma-informed approaches.",
      date: "November 2025",
      readTime: "15 min read",
      category: "Family Law"
    },
    {
      title: "When Courts Fail: Documenting Accessibility Barriers",
      excerpt: "A practical guide to identifying, documenting, and challenging accessibility violations in judicial proceedings.",
      date: "November 2025",
      readTime: "10 min read",
      category: "Disability Rights"
    },
    {
      title: "The Intersection of Disability and Family Law",
      excerpt: "How disability status impacts custody proceedings and what parents need to know to protect their rights.",
      date: "October 2025",
      readTime: "14 min read",
      category: "Family Law"
    },
    {
      title: "Pro Se Representation: When and How to Represent Yourself",
      excerpt: "Guidance for individuals considering self-representation, including when it's appropriate and how to prepare effectively.",
      date: "October 2025",
      readTime: "11 min read",
      category: "Legal Resources"
    },
    {
      title: "Reasonable Accommodations: Your Rights in Legal Proceedings",
      excerpt: "Understanding what accommodations you're entitled to and how to request them effectively in court settings.",
      date: "September 2025",
      readTime: "9 min read",
      category: "Disability Rights"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">Insights & Analysis</p>
          <h1 className="mb-8">Articles</h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-light">
            In-depth analysis, practical guidance, and thought leadership on family law, 
            disability rights, and access to justice.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container">
          <p className="text-accent-font text-primary mb-8">Featured Article</p>
          <Card className="border-border/40 overflow-hidden hover:border-primary/40 transition-all group cursor-pointer">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs text-accent-font text-primary">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {featuredArticle.date}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-3xl mb-4 group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-card">
        <div className="container">
          <p className="text-accent-font text-foreground mb-8">All Articles</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card 
                key={article.title} 
                className="border-border/40 hover:border-primary/40 transition-all group cursor-pointer flex flex-col"
              >
                <CardContent className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4 text-xs">
                    <span className="text-accent-font text-primary">
                      {article.category}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                    <div className="flex items-center gap-2 text-primary text-sm group-hover:gap-3 transition-all">
                      Read
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-background">
        <div className="container-reading">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-12 text-center">
              <h2 className="mb-4">Stay Informed</h2>
              <p className="text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
                New articles are added regularly. Check back often for the latest insights 
                on family law, disability rights, and legal advocacy.
              </p>
              <a 
                href="mailto:Katie@CopelandLawTexas.com?subject=Article Notifications"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-accent-font"
              >
                Get Notified
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
