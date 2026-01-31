import { Link } from 'react-router-dom';
import { Feather, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 mt-auto">
      <div className="container py-8 sm:py-12 md:py-16">
        {/* Mobile Layout - Centered stacked sections */}
        <div className="md:hidden text-center space-y-6">
          {/* Brand tagline */}
          <p className="text-xs text-muted-foreground italic">
            — Designed to Match Your Routine and Mindset.
          </p>

          {/* Useful Links */}
          <div>
            <h4 className="font-display font-medium text-sm mb-3">Useful Links</h4>
            <div className="flex flex-wrap justify-center gap-x-1 text-xs text-muted-foreground">
              <Link to="/quotes" className="hover:text-primary transition-colors">Quotes</Link>
              <span>|</span>
              <Link to="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
              <span>|</span>
              <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
              <span>|</span>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            </div>
          </div>

          {/* Our Categories */}
          <div>
            <h4 className="font-display font-medium text-sm mb-3">Our Categories</h4>
            <div className="flex flex-wrap justify-center gap-x-1 text-xs text-muted-foreground">
              <Link to="/quotes?category=motivation" className="hover:text-primary transition-colors">Motivation</Link>
              <span>|</span>
              <Link to="/quotes?category=love" className="hover:text-primary transition-colors">Love</Link>
              <span>|</span>
              <Link to="/quotes?category=life" className="hover:text-primary transition-colors">Life</Link>
              <span>|</span>
              <Link to="/quotes?category=wisdom" className="hover:text-primary transition-colors">Wisdom</Link>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-display font-medium text-sm mb-3">Get in Touch</h4>
            <p className="text-xs text-muted-foreground mb-2">Have a question or need guidance?</p>
            <p className="text-xs text-muted-foreground mb-4">Our team is here to help you every step of the way.</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="mailto:hello@soulfulwords.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground pt-4 border-t border-border/40">
            © {new Date().getFullYear()} Soulful Words. Crafted with intention.
          </p>
        </div>

        {/* Desktop Layout - Original grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-12">
            {/* Brand */}
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <Feather className="h-5 w-5 text-primary" />
                <span className="font-display text-lg font-semibold">Soulful Words</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                A digital sanctuary for meaningful words. We curate quotes and write articles 
                that inspire, heal, and guide you on your journey through life.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-medium mb-4 text-base">Explore</h4>
              <ul className="space-y-2">
                {['Quotes', 'Blogs', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-display font-medium mb-4 text-base">Categories</h4>
              <ul className="space-y-2">
                {['Motivation', 'Love', 'Life', 'Healing', 'Success', 'Wisdom'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/quotes?category=${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/40 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Soulful Words. Crafted with intention.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@soulfulwords.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
