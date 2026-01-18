/* 
 * Editorial Minimalism Design: Clean footer with organized sections
 * Typography: Archivo Narrow for labels, Source Sans 3 for content
 * Layout: Multi-column editorial layout with clear hierarchy
 */

import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <img 
              src="/images/CopelandLawLetterheadLogo.png" 
              alt="Copeland Law" 
              className="h-10 mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Legal advocacy focused on family law, disability rights, and ADA Title II compliance. 
              Providing resources and expertise for those navigating complex legal challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent-font text-xs mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-3">
              {["About", "Practice Areas", "Resources", "Articles", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent-font text-xs mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:Katie@CopelandLawTexas.com" className="hover:text-primary transition-colors">
                  Katie@CopelandLawTexas.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:8177898498" className="hover:text-primary transition-colors">
                  (817) 789-8498
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Legal Disclaimer:</strong> This website provides educational resources and information only. Nothing on this site constitutes legal advice or creates an attorney-client relationship. Laws and court procedures vary by jurisdiction. For case-specific guidance, consult an attorney experienced in ADA litigation and disability rights law in your area.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Copeland Law. All rights reserved.
            </p>
            <div className="text-xs text-muted-foreground text-center md:text-right">
              <p>Kathryn "Katie" Copeland, Attorney at Law</p>
              <p className="mt-1">The Copeland Questions is a trademark of Kathryn Copeland</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
