/* 
 * Editorial Minimalism Design: Magazine-quality header with clean navigation
 * Typography: Archivo Narrow for nav items, minimal styling
 * Color: Warm ivory background with teal accent on active/hover
 */

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Practice Areas", path: "/practice-areas" },
    { label: "Resources", path: "/resources" },
    { label: "Articles", path: "/articles" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img 
                src="/images/CopelandLawLetterheadLogo.png" 
                alt="Copeland Law" 
                className="h-12 transition-opacity group-hover:opacity-80"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-accent-font text-xs transition-colors cursor-pointer ${
                    location === item.path
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-accent-font text-xs"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
