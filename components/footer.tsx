"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import content from "./content";

export default function Footer() {
  return (
    <footer className="w-full bg-background/80 backdrop-blur-md border-t border-border py-6 px-4 z-40">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              {content.name}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex gap-4">
              <a
                href={content.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={content.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${content.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={`tel:${content.phone}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground/60">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-primary" /> using Next.js
            and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
