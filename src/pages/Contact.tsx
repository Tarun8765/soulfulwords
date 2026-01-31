import { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, MessageSquare, Send, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <div className="container py-8 sm:py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 px-2">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 mb-4 sm:mb-6">
              <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium mb-3 sm:mb-4">
              Get in Touch
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-lg mx-auto">
              Have a quote to share, a story to tell, or just want to say hello?
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-card text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="subject" className="text-sm sm:text-base">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-card text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Share your thoughts..."
                    rows={5}
                    required
                    className="bg-card resize-none text-sm sm:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-8">
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/50">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium mb-1 text-sm sm:text-base">
                      Email Us
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                      For general inquiries and collaborations
                    </p>
                    <a
                      href="mailto:hello@soulfulwords.com"
                      className="text-primary hover:underline text-sm sm:text-base"
                    >
                      hello@soulfulwords.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/50">
                <h3 className="font-display font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  Follow Along
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  Join our community for daily inspiration
                </p>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-muted/50 border border-border/50">
                <p className="font-display italic text-base sm:text-lg text-muted-foreground">
                  "The words you speak become the house you live in."
                </p>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  — Hafiz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
