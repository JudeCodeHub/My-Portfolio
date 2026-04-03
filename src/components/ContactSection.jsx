import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500&display=swap";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "judechihan727@gmail.com",
    href: "mailto:judechihan727@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 776 345 280",
    href: "tel:+94776345280",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
    href: null,
  },
];

const SOCIALS = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/judechihan",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    href: "https://github.com/JudeCodeHub",
    label: "GitHub",
    color: "#6e40c9",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/judejochimson_judechihan",
    label: "Instagram",
    color: "#E1306C",
  },
];

// ─── Contact info pill ───────────────────────────────────────────────────────
function ContactInfoItem({ icon: Icon, label, value }) {
  const inner = (
    <div className="flex items-center gap-3 group py-1.5">
      <div
        className="p-2 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{
          background: "hsl(var(--primary) / 0.15)",
          boxShadow: "0 0 12px hsl(var(--primary) / 0.2)",
        }}
      >
        <Icon className="h-3.5 w-3.5 text-primary" />
      </div>
      <div className="min-w-0 text-left">
        <p
          className="text-[9px] font-semibold text-primary/70 uppercase tracking-[0.18em] leading-none mb-0.5"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {label}
        </p>
        <p
          className="text-xs text-foreground/75 truncate"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {value}
        </p>
      </div>
    </div>
  );

  return <div className="px-2 -mx-2">{inner}</div>;
}

// ─── Main section ─────────────────────────────────────────────────────────────
export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(); // Create a reference to the form

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_sgh759a", "template_oy58rk4", formRef.current, {
        publicKey: "cG_LHqHLUqjeQzrhU",
      })
      .then(
        () => {
          toast({
            title: "Message sent! ✨",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          console.log("EmailJS Error:", error.text || error);
          toast({
            title: "Failed to send message 😔",
            description:
              "An error occurred. Please try me on social media instead.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        },
      );
  };

  return (
    <>
      {/* Inject Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link href={FONT_LINK} rel="stylesheet" />

      <section
        id="contact"
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* ── Heading ── */}
          <div className="text-center mb-7">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Let's{" "}
              <span
                className="text-primary"
                style={{ textShadow: "0 0 20px hsl(var(--primary)/0.35)" }}
              >
                Connect
              </span>
            </h2>
            <div className="mt-2 mb-2 mx-auto w-16 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
            <p
              className="text-center text-muted-foreground max-w-xl mx-auto text-base leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Have a project in mind or want to collaborate? I'm always open to
              discussing new opportunities and exciting ideas.
            </p>
          </div>

          {/* ── Glass Card ── */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid hsl(var(--primary) / 0.18)",
              boxShadow:
                "0 8px 48px hsl(var(--primary) / 0.08), 0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex flex-col justify-between lg:col-span-2 p-6 md:p-10 space-y-8">
              <div className="space-y-3">
                <h3
                  className="text-2xl md:text-3xl font-bold leading-snug"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Open to Opportunities,{" "}
                  <span className="text-primary">Collabs & Ideas</span>
                </h3>
                <p
                  className="text-muted-foreground text-sm max-w-md leading-relaxed text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Got a project or idea? Drop me a message - I'll reply within
                  24 hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-5 md:gap-8">
                {CONTACT_INFO.map((info) => (
                  <ContactInfoItem key={info.label} {...info} />
                ))}
              </div>

              <div
                className="pt-6"
                style={{ borderTop: "1px solid hsl(var(--primary) / 0.15)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5 text-center"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Find me on
                </p>

                <div className="flex items-center justify-center gap-5">
                  {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="group flex flex-col items-center gap-1.5"
                    >
                      <span
                        className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                        style={{
                          background: `${color}18`,
                          border: `1px solid ${color}40`,
                          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${color}30`;
                          e.currentTarget.style.boxShadow = `0 4px 20px ${color}50`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `${color}18`;
                          e.currentTarget.style.boxShadow =
                            "0 2px 10px rgba(0,0,0,0.08)";
                        }}
                      >
                        <Icon size={20} style={{ color }} />
                      </span>
                      <span
                        className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right / form panel ── */}
            <div
              className="flex items-center h-full w-full md:col-span-1 p-6 md:p-8"
              style={{
                background: "hsl(var(--primary) / 0.04)",
                borderLeft: "1px solid hsl(var(--primary) / 0.12)",
                borderTop: "1px solid hsl(var(--primary) / 0.12)",
              }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full space-y-4"
              >
                <h4
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Send a Message
                </h4>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-semibold text-primary/80 uppercase tracking-widest"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      background: "hsl(var(--background) / 0.5)",
                      borderColor: "hsl(var(--primary) / 0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "hsl(var(--primary) / 0.6)";
                      e.target.style.boxShadow =
                        "0 0 0 3px hsl(var(--primary) / 0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "hsl(var(--primary) / 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-semibold text-primary/80 uppercase tracking-widest"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all duration-200"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      background: "hsl(var(--background) / 0.5)",
                      borderColor: "hsl(var(--primary) / 0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "hsl(var(--primary) / 0.6)";
                      e.target.style.boxShadow =
                        "0 0 0 3px hsl(var(--primary) / 0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "hsl(var(--primary) / 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-semibold text-primary/80 uppercase tracking-widest"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hey Jude, I'd love to collaborate on..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all duration-200 resize-none"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      background: "hsl(var(--background) / 0.5)",
                      borderColor: "hsl(var(--primary) / 0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "hsl(var(--primary) / 0.6)";
                      e.target.style.boxShadow =
                        "0 0 0 3px hsl(var(--primary) / 0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "hsl(var(--primary) / 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-6 py-2.5 mt-2 rounded-full border border-sky-400/50 bg-transparent text-sky-400 font-medium transition-all duration-300 hover:border-sky-300 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 flex items-center justify-center gap-2 group",
                    isSubmitting &&
                      "opacity-70 cursor-not-allowed hover:shadow-none hover:bg-transparent hover:border-sky-400/50 hover:scale-100",
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>
                        Sending…
                      </span>
                    </>
                  ) : (
                    <>
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>
                        Send Message
                      </span>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
