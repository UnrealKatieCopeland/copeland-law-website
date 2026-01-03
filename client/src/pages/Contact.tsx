/* 
 * Editorial Minimalism Design: Contact page with form and information
 * Layout: Split layout with contact form and details
 */

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:Katie@CopelandLawTexas.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="container-reading">
          <p className="text-accent-font text-primary mb-6">Get In Touch</p>
          <h1 className="mb-8">Contact Katie</h1>
          <p className="text-xl text-foreground/70 leading-relaxed font-light">
            Whether you're seeking legal resources, have questions about accessibility 
            compliance, or want to discuss a potential matter, reach out to start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/40">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl mb-6">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-accent-font text-xs">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-accent-font text-xs">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-accent-font text-xs">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-accent-font text-xs">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can Katie help?"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-accent-font text-xs">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell Katie about your situation or question..."
                        className="min-h-[200px] resize-y"
                      />
                    </div>

                    <Card className="border-primary/20 bg-primary/5">
                      <CardContent className="p-4 flex gap-3">
                        <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-foreground/70 leading-relaxed">
                          Please note: Submitting this form does not create an attorney-client 
                          relationship. Do not include confidential or time-sensitive information 
                          in your message.
                        </p>
                      </CardContent>
                    </Card>

                    <Button type="submit" size="lg" className="w-full text-accent-font" style={{color: '#ffffff', color: '#ffffff'}}>
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border/40">
                <CardContent className="p-8">
                  <h3 className="font-display font-semibold text-xl mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-accent-font text-xs mb-1 text-muted-foreground">
                          Email
                        </p>
                        <a 
                          href="mailto:Katie@CopelandLawTexas.com"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          Katie@CopelandLawTexas.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-accent-font text-xs mb-1 text-muted-foreground">
                          Phone
                        </p>
                        <a 
                          href="tel:8177898498"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          (817) 789-8498
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-accent-font text-xs mb-1 text-muted-foreground">
                          Location
                        </p>
                        <p className="text-foreground">
                          Texas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-accent-font text-xs mb-1 text-muted-foreground">
                          Availability
                        </p>
                        <p className="text-foreground text-sm">
                          By appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-card">
                <CardContent className="p-8">
                  <h3 className="font-display font-semibold text-xl mb-4">
                    What to Expect
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                    Katie typically responds to inquiries within 1-2 business days. 
                    Please provide as much relevant information as possible in your 
                    initial message.
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    For urgent matters, please call directly and leave a detailed 
                    voicemail if necessary.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-card">
        <div className="container-reading text-center">
          <h2 className="mb-6">Looking for Resources?</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Before reaching out, you may find helpful information in our resource library 
            or articles section.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/resources"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-accent-font"
            >
              Browse Resources
            </a>
            <a 
              href="/articles"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-accent-font"
            >
              Read Articles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
