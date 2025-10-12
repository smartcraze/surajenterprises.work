import React from "react";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contactInfo } from "@/data/contact";

export const ContactSection = () => {
  return (
    <section id="contact">
      <Container size="xl" padding="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Get in touch with us for your next construction project or to discuss your manpower requirements.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="rounded-lg border bg-muted/20 p-6 shadow-sm">
                <h3 className="mb-6 text-xl font-medium">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Icon name={item.icon} className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">{item.label}</p>
                        {Array.isArray(item.value) ? (
                          <p className="text-muted-foreground leading-relaxed">
                            {item.value.map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                {i < item.value.length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </p>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-medium">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your Name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="Your Email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    placeholder="Subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className="h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};