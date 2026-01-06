/* 
 * Editorial Minimalism Design: Magazine-quality header with clean navigation
 * Typography: Archivo Narrow for nav items, minimal styling
 * Color: Warm ivory background with teal accent on active/hover
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Resources", path: "/resources" },
    { label: "Articles", path: "/articles" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <img 
                src="/images/CopelandLawLetterheadLogo-transparent.png" 
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
            onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5 mr-2" />
              Menu
            </Button>
          </div>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
