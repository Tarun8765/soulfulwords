import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Quote } from 'lucide-react';
import { Button } from '../../components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center px-2">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in">
            <Quote className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>A sanctuary for meaningful words</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4 sm:mb-6 animate-slide-up text-balance">
            Words that{' '}
            <span className="text-primary">inspire</span>,{' '}
            <span className="text-primary">heal</span>, and{' '}
            <span className="text-primary">empower</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Discover curated quotes and thoughtful articles that speak to your soul. 
            Let wisdom guide your journey through life's beautiful complexity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="w-full sm:w-auto group">
              <Link to="/quotes">
                <Quote className="h-4 w-4 mr-2" />
                Explore Quotes
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/blogs">
                <BookOpen className="h-4 w-4 mr-2" />
                Read Blogs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
