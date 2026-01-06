import { useState } from "react";
import { Link, useLocation } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [location] = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Resources", path: "/resources" },
    { label: "Articles", path: "/articles" },
    { label: "Contact", path: "/contact" },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 bottom-0 w-64 bg-background border-l border-border z-50 md:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="text-accent-font text-sm font-medium">Menu</span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-accent rounded-sm transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <span
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-sm text-accent-font transition-colors cursor-pointer ${
                        location === item.path
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/70 hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Link href="/contact">
              <Button 
                className="w-full text-accent-font" 
                style={{color: '#ffffff'}}
                onClick={onClose}
              >
                Contact Katie
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
