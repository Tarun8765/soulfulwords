import { Layout } from "../components/layout/Layout";
import { Feather, Heart, Sparkles, BookOpen } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container py-8 sm:py-12 md:py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 px-2">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 mb-4 sm:mb-6">
            <Feather className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6">
            About Soulful Words
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
            A digital sanctuary where meaningful words find their home. We
            believe in the transformative power of language.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-20 px-2">
          <div className="prose prose-lg">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
              In a world overflowing with content, we curate words that matter.
              Every quote we share and every article we write is chosen with
              intention—to inspire, to heal, to provoke thought, and to remind
              you of the beauty and complexity of the human experience.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Whether you're seeking motivation for a challenging journey,
              comfort during difficult times, or wisdom to navigate life's
              complexities, Soulful Words is here to walk alongside you.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border/50">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-category-healing/20 mb-3 sm:mb-4">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(200,70%,45%)]" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-medium mb-2 sm:mb-3">
              Authenticity
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              We share words that resonate with real human experiences, not
              empty platitudes.
            </p>
          </div>

          <div className="text-center p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border/50">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-category-wisdom/20 mb-3 sm:mb-4">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(260,50%,50%)]" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-medium mb-2 sm:mb-3">
              Intentionality
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Every piece of content is carefully selected to add value to your
              day.
            </p>
          </div>

          <div className="text-center p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border/50 sm:col-span-2 md:col-span-1">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-category-life/20 mb-3 sm:mb-4">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-[hsl(160,50%,40%)]" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-medium mb-2 sm:mb-3">
              Growth
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              We believe in continuous learning and the power of words to
              transform.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto mt-12 sm:mt-20 text-center px-2">
          <blockquote className="font-display text-xl sm:text-2xl md:text-3xl italic text-muted-foreground">
            "Words are, of course, the most powerful drug used by mankind."
          </blockquote>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
            — Rudyard Kipling
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
