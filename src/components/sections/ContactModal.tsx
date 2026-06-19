"use client";

import { useState, useEffect, useCallback, useRef, cloneElement } from "react";
import { X, Mail, User, Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojzogzn";

type Status = "idle" | "submitting" | "success" | "error";

interface OpenContactModalDetail {
  companyName?: string;
}

/** Call this from anywhere (onClick handlers) to open the global contact modal. */
export function openContactModal(companyName?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<OpenContactModalDetail>("open-contact-modal", { detail: { companyName } })
  );
}

interface ContactModalProps {
  /** Default company name to tag submissions with, if the trigger doesn't specify one. */
  companyName?: string;
  accentColor?: string;
}

export function ContactModal({ companyName: defaultCompanyName, accentColor = "#C9A84C" }: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState(defaultCompanyName ?? "");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Listen globally for open requests (fired from CompanyNav, CompanyFooter, etc.)
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<OpenContactModalDetail>).detail;
      setCompany(detail?.companyName || defaultCompanyName || "");
      setStatus("idle");
      setErrorMsg("");
      setOpen(true);
    };
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, [defaultCompanyName]);

  // Lock body scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    // Focus first field shortly after mount for accessibility
    const t = setTimeout(() => firstFieldRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  const close = useCallback(() => {
    if (status === "submitting") return;
    setOpen(false);
  }, [status]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);

      setStatus("submitting");
      setErrorMsg("");

      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });

        if (res.ok) {
          setStatus("success");
          form.reset();
        } else {
          const payload = await res.json().catch(() => null);
          const msg =
            payload?.errors?.map((er: { message: string }) => er.message).join(", ") ||
            "Something went wrong submitting the form. Please try again.";
          setErrorMsg(msg);
          setStatus("error");
        }
      } catch {
        setErrorMsg("Network error — please check your connection and try again.");
        setStatus("error");
      }
    },
    []
  );

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "rgba(6,10,18,0.78)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "cm-fade-in 0.2s ease",
      }}
    >
      <div
        ref={dialogRef}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 460,
          maxHeight: "92vh",
          overflowY: "auto",
          backgroundColor: "#0E1A2B",
          border: `1px solid ${accentColor}33`,
          borderRadius: 10,
          boxShadow: `0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03)`,
          animation: "cm-pop-in 0.25s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            height: 4,
            width: "100%",
            backgroundImage: `linear-gradient(90deg, ${accentColor}, ${accentColor}55, ${accentColor})`,
            borderRadius: "10px 10px 0 0",
          }}
        />

        {/* Close button */}
        <button
          type="button"
          onClick={close}
          aria-label="Close contact form"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            backgroundColor: "rgba(255,255,255,0.04)",
            color: "rgba(255,255,255,0.65)",
            cursor: "pointer",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
            e.currentTarget.style.color = "rgba(255,255,255,0.65)";
          }}
        >
          <X size={16} />
        </button>

        <div style={{ padding: "40px 32px 32px" }}>
          {status === "success" ? (
            // ── Success state ──
            <div style={{ textAlign: "center", padding: "24px 4px" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: `${accentColor}1A`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 22px",
                }}
              >
                <CheckCircle2 size={30} color={accentColor} />
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: 10,
                }}
              >
                Message Sent
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.6, marginBottom: 28 }}>
                Thank you for reaching out{company ? ` to ${company}` : ""}. We&apos;ll get back to you as soon as
                possible.
              </p>
              <button
                type="button"
                onClick={close}
                style={{
                  backgroundColor: accentColor,
                  color: "#0A1628",
                  border: "none",
                  borderRadius: 4,
                  padding: "12px 32px",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            // ── Form state ──
            <>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: accentColor,
                  marginBottom: 12,
                }}
              >
                <span style={{ width: 20, height: 1, backgroundColor: accentColor, display: "block" }} />
                Get in Touch
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}
              >
                Send us a message
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, marginBottom: 26, lineHeight: 1.6 }}>
                {company ? `Reach out to ${company} directly` : "We'd love to hear from you"} — fill in the form
                below and we&apos;ll respond shortly.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {company && <input type="hidden" name="company" value={company} />}
                <input
                  type="hidden"
                  name="_subject"
                  value={company ? `New message from ${company} website` : "New website contact message"}
                />

                <Field label="Full Name" icon={<User size={14} />} accentColor={accentColor}>
                  <input
                    ref={firstFieldRef}
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    style={fieldInputStyle}
                  />
                </Field>

                <Field label="Email Address" icon={<Mail size={14} />} accentColor={accentColor}>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    style={fieldInputStyle}
                  />
                </Field>

                <Field label="Phone (optional)" icon={<Phone size={14} />} accentColor={accentColor}>
                  <input name="phone" type="tel" placeholder="+233 ..." style={fieldInputStyle} />
                </Field>

                <Field label="Message" icon={<MessageSquare size={14} />} accentColor={accentColor}>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help?"
                    style={{ ...fieldInputStyle, resize: "vertical", paddingTop: 12, fontFamily: "inherit" }}
                  />
                </Field>

                {status === "error" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      padding: "10px 12px",
                      borderRadius: 6,
                      backgroundColor: "rgba(220,60,60,0.1)",
                      border: "1px solid rgba(220,60,60,0.3)",
                      color: "#ff9b9b",
                      fontSize: 12.5,
                      lineHeight: 1.5,
                    }}
                  >
                    <AlertCircle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    marginTop: 6,
                    backgroundImage:
                      status === "submitting"
                        ? "none"
                        : `linear-gradient(135deg, ${accentColor}cc, ${accentColor})`,
                    backgroundColor: status === "submitting" ? "rgba(255,255,255,0.08)" : undefined,
                    color: status === "submitting" ? "rgba(255,255,255,0.5)" : "#0A1628",
                    border: "none",
                    borderRadius: 4,
                    padding: "15px 28px",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    boxShadow: status === "submitting" ? "none" : `0 8px 28px ${accentColor}45`,
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (status === "submitting") return;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {status === "submitting" ? (
                    <>
                      <span
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.25)",
                          borderTopColor: "rgba(255,255,255,0.8)",
                          display: "inline-block",
                          animation: "cm-spin 0.7s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes cm-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cm-pop-in {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cm-spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

const fieldInputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 6,
  padding: "12px 14px",
  fontSize: 13.5,
  color: "#fff",
  outline: "none",
  transition: "border-color 0.2s, background-color 0.2s",
};

function Field({
  label,
  icon,
  accentColor,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  accentColor: string;
  children: React.ReactElement<{
    style?: React.CSSProperties;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
  }>;
}) {
  const [focused, setFocused] = useState(false);
  const existingStyle = children.props.style || {};

  const styledChild = cloneElement(children, {
    style: {
      ...existingStyle,
      borderColor: focused ? accentColor : "rgba(255,255,255,0.12)",
      backgroundColor: focused ? "rgba(255,255,255,0.07)" : existingStyle.backgroundColor,
    },
    onFocus: (e: React.FocusEvent) => {
      setFocused(true);
      children.props.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      setFocused(false);
      children.props.onBlur?.(e);
    },
  });

  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: 10.5,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: focused ? accentColor : "rgba(255,255,255,0.45)",
          transition: "color 0.2s",
        }}
      >
        {icon} {label}
      </span>
      {styledChild}
    </label>
  );
}
