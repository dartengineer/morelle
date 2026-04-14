import { useState } from "react";
import { COLORS, FONTS } from "../../styles/theme";
import { CONFIG } from "../../data/config";
import { SectionLabel } from "../common/SectionLabel";
import { DividerLine } from "../common/DividerLine";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <div
        style={{
          background: COLORS.NAVY,
          padding: "80px 32px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "1px solid rgba(200,169,110,0.1)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <SectionLabel>Get in Touch</SectionLabel>
          <h1
            style={{
              fontFamily: FONTS.SERIF,
              fontSize: "clamp(42px, 6vw, 72px)",
              color: COLORS.WHITE,
              fontWeight: 300,
            }}
          >
            Say <em style={{ color: COLORS.GOLD }}>Hello</em>
          </h1>
        </div>
      </div>

      <section style={{ padding: "80px 32px", background: COLORS.WHITE }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Contact Info */}
          <div>
            <SectionLabel>Contact Details</SectionLabel>
            <h2
              style={{
                fontFamily: FONTS.SERIF,
                fontSize: 38,
                color: COLORS.NAVY,
                marginBottom: 8,
                fontWeight: 300,
              }}
            >
              We'd Love to Hear From You
            </h2>
            <DividerLine />

            {[
              {
                icon: "📞",
                label: "Phone",
                value: CONFIG.phone,
                href: `tel:${CONFIG.phone}`,
              },
              { icon: "✉️", label: "Email", value: CONFIG.email, href: `mailto:${CONFIG.email}` },
              { icon: "📍", label: "Studio Location", value: CONFIG.location, href: null },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: COLORS.OFF_WHITE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 20,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: FONTS.SANS,
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: COLORS.GOLD,
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{
                        fontFamily: FONTS.SANS,
                        fontSize: 15,
                        color: COLORS.NAVY,
                        textDecoration: "none",
                        fontWeight: 400,
                      }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div
                      style={{
                        fontFamily: FONTS.SANS,
                        fontSize: 15,
                        color: COLORS.NAVY,
                      }}
                    >
                      {c.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: 48,
                paddingTop: 40,
                borderTop: `1px solid ${COLORS.GRAY_LIGHT}`,
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.SANS,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: COLORS.NAVY,
                  marginBottom: 20,
                }}
              >
                Follow Us
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { name: "Instagram", href: CONFIG.instagram },
                  { name: "Facebook", href: CONFIG.facebook },
                  { name: "TikTok", href: CONFIG.tiktok },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: FONTS.SANS,
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: COLORS.NAVY,
                      padding: "10px 18px",
                      border: `1px solid ${COLORS.GRAY_LIGHT}`,
                      textDecoration: "none",
                      transition: "background 0.25s, color 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = COLORS.NAVY;
                      e.currentTarget.style.color = COLORS.WHITE;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = COLORS.NAVY;
                    }}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 40 }}>
              <a
                href={`https://wa.me/${CONFIG.directorPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 28px",
                  background: "#25D366",
                  color: COLORS.WHITE,
                  textDecoration: "none",
                  fontFamily: FONTS.SANS,
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  transition: "filter 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(1.08)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              background: COLORS.OFF_WHITE,
              padding: "52px 48px",
              animation: "fadeUp 0.7s ease",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: `rgba(200,169,110,0.15)`,
                    border: `1px solid ${COLORS.GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    fontSize: 28,
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: FONTS.SERIF,
                    fontSize: 32,
                    color: COLORS.NAVY,
                    marginBottom: 12,
                    fontWeight: 300,
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontFamily: FONTS.SANS,
                    fontSize: 14,
                    color: COLORS.GRAY_TEXT,
                    lineHeight: 1.8,
                  }}
                >
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 36 }}>
                  <SectionLabel>Send a Message</SectionLabel>
                  <h3
                    style={{
                      fontFamily: FONTS.SERIF,
                      fontSize: 32,
                      color: COLORS.NAVY,
                      fontWeight: 300,
                    }}
                  >
                    We'll Respond Within 24hrs
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    {
                      label: "Full Name",
                      key: "name",
                      placeholder: "Your name",
                      type: "text",
                    },
                    {
                      label: "Email Address",
                      key: "email",
                      placeholder: "you@example.com",
                      type: "email",
                    },
                    {
                      label: "Subject",
                      key: "subject",
                      placeholder: "How can we help?",
                      type: "text",
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          fontFamily: FONTS.SANS,
                          fontSize: 11,
                          fontWeight: 500,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: COLORS.NAVY,
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      style={{
                        fontFamily: FONTS.SANS,
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: COLORS.NAVY,
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <button
                    className="btn-primary"
                    style={{
                      width: "100%",
                      padding: "16px",
                      marginTop: 8,
                    }}
                    onClick={handleSubmit}
                  >
                    Send Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
