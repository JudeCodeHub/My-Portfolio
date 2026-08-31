import { Mail, MapPin, Phone, Send } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaBehance,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Shuffle from "./ui/Shuffle";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500&display=swap";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

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
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61563287920654",
    label: "Facebook",
    color: "text-[#1877F2] group-hover:text-white",
    hoverBg: "group-hover:bg-[#1877F2]",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/judejochimson_judechihan",
    label: "Instagram",
    color: "text-[#E1306C] group-hover:text-white",
    hoverBg: "group-hover:bg-[#E1306C]",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/94710321696",
    label: "WhatsApp",
    color: "text-[#25D366] group-hover:text-white",
    hoverBg: "group-hover:bg-[#25D366]",
  },
  {
    icon: FaEnvelope,
    href: "mailto:judechihan727@gmail.com",
    label: "Email",
    color: "text-[#EA4335] group-hover:text-white",
    hoverBg: "group-hover:bg-[#EA4335]",
  },
];

// ─── Contact info pill ───────────────────────────────────────────────────────
function ContactInfoItem({ icon: Icon, label, value }) {
  const inner = (
    <div className="flex items-center gap-3 group py-1.5">
      <div
        className="p-2 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{
          background: "rgba(249, 115, 22, 0.15)",
          boxShadow: "0 0 12px rgba(249, 115, 22, 0.2)",
        }}
      >
        <Icon className="h-3.5 w-3.5 text-orange-500" />
      </div>
      <div className="min-w-0 text-left">
        <p
          className="text-[9px] font-semibold text-orange-500/70 uppercase tracking-[0.18em] leading-none mb-0.5"
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
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
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
        className="py-12 md:pt-24 md:pb-40 lg:pt-8 lg:pb-28 xl:pt-24 xl:pb-48 px-4 relative overflow-hidden flex flex-col justify-center min-h-[85vh] md:min-h-0"
        style={{ background: "transparent" }}
      >
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* ── Heading ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={fadeUp(0.1)}
            className="w-full max-w-5xl mb-10 lg:mb-6 xl:mb-10 z-20 text-center flex flex-col items-center justify-center mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-slate-800 dark:text-white tracking-tight flex justify-center items-center whitespace-nowrap mb-4">
              <span className="text-orange-500 shrink-0 mr-3">~$</span>
              <span className="shrink-0 inline-block">
                <Shuffle text="contact" loop={true} loopDelay={3} />
              </span>
            </h2>
            <p
              className="text-center text-muted-foreground max-w-xl mx-auto text-base leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Have a project in mind or want to collaborate? I'm always open to
              discussing new opportunities and exciting ideas.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden"
            style={{
              background: "hsl(var(--background) / 0.4)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow:
                "0 8px 48px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="flex flex-col justify-between lg:col-span-2 p-6 md:p-10 lg:p-6 xl:p-10 space-y-8 lg:space-y-5 xl:space-y-8">
              <div className="space-y-3">
                <h3
                  className="text-2xl md:text-3xl font-bold leading-snug"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Open to Opportunities,{" "}
                  <span className="text-orange-500">Collabs & Ideas</span>
                </h3>
                <p
                  className="text-muted-foreground text-sm max-w-md leading-relaxed ml-3 md:ml-10"
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
                style={{ borderTop: "1px solid rgba(249, 115, 22, 0.15)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5 text-center"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Find me on
                </p>

                <div className="flex items-center justify-center gap-5 mt-2">
                  {SOCIALS.map(
                    ({ icon: Icon, href, label, color, hoverBg }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                        className="flex flex-col items-center gap-2 group"
                      >
                        <span
                          className={`w-11 h-11 bg-white backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:-translate-y-1 ${hoverBg}`}
                        >
                          <Icon
                            size={21}
                            className={`transition-colors duration-300 ${color}`}
                          />
                        </span>
                        <span
                          className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {label}
                        </span>
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ── Right / form panel ── */}
            <div
              className="flex items-center h-full w-full md:col-span-1 p-6 md:p-8 lg:p-6 xl:p-8"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
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
                    className="text-[10px] font-semibold text-orange-500/80 uppercase tracking-widest"
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
                      borderColor: "rgba(249, 115, 22, 0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.6)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(249, 115, 22, 0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-semibold text-orange-500/80 uppercase tracking-widest"
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
                      borderColor: "rgba(249, 115, 22, 0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.6)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(249, 115, 22, 0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-semibold text-orange-500/80 uppercase tracking-widest"
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
                      borderColor: "rgba(249, 115, 22, 0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.6)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(249, 115, 22, 0.12)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-6 py-2.5 mt-2 rounded-full border border-orange-500/50 bg-orange-500/10 text-orange-500 font-bold transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-95 flex items-center justify-center gap-2 group",
                    isSubmitting &&
                      "opacity-70 cursor-not-allowed hover:shadow-none hover:bg-transparent hover:border-orange-500/50 hover:text-orange-500 hover:scale-100",
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" />
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
