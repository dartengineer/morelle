import { useState, useEffect } from "react";
import { COLORS, FONTS } from "../../styles/theme";
import { SERVICES, ACHIEVEMENTS, TESTIMONIALS } from "../../data";
import { SectionLabel } from "../common/SectionLabel";
import { DividerLine } from "../common/DividerLine";

export function HomePage({ setActivePage }) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          background: `linear-gradient(150deg, ${COLORS.NAVY} 0%, ${COLORS.NAVY_LIGHT} 55%, ${COLORS.NAVY_MID} 100%)`,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "8%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: `1px solid rgba(200,169,110,0.15)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "12%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: `1px solid rgba(200,169,110,0.22)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "3%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: `1px solid rgba(255,255,255,0.06)`,
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: isMobile ? "100px 24px 80px" : "120px 32px 80px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: isMobile ? 56 : 48,
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left: Text Content */}
          <div
            style={{
              flex: isMobile ? "unset" : "0 0 50%",
              width: isMobile ? "100%" : undefined,
              maxWidth: isMobile ? "100%" : 560,
              animation: "fadeUp 0.9s ease both",
            }}
          >
            <SectionLabel>Est. 2026 · Ilorin, Nigeria</SectionLabel>
            <h1
              style={{
                fontFamily: FONTS.SERIF,
                fontSize: "clamp(52px, 7vw, 88px)",
                color: COLORS.WHITE,
                lineHeight: 1.05,
                fontWeight: 300,
                marginBottom: 24,
              }}
            >
              Where Art
              <br />
              <em style={{ color: COLORS.GOLD, fontStyle: "italic" }}>Meets</em> Beauty
            </h1>
            <p
              style={{
                fontFamily: FONTS.SANS,
                fontSize: 16,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                maxWidth: 440,
                marginBottom: 44,
                fontWeight: 300,
              }}
            >
              Award-winning makeup artistry for brides, editorial, and every woman who
              deserves to feel extraordinary. Led by Abolaji Morenikeji.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-gold" onClick={() => setActivePage("Booking")}>
                Book a Session
              </button>
              <button className="btn-outline" onClick={() => setActivePage("Services")}>
                View Services
              </button>
            </div>
            <div style={{ marginTop: 60, display: "flex", gap: 40, flexWrap: "wrap" }}>
              {ACHIEVEMENTS.slice(0, 3).map((a) => (
                <div key={a.label}>
                  <div
                    style={{
                      fontFamily: FONTS.SERIF,
                      fontSize: 32,
                      color: COLORS.GOLD,
                      fontWeight: 400,
                    }}
                  >
                    {a.number}
                  </div>
                  <div
                    style={{
                      fontFamily: FONTS.SANS,
                      fontSize: 11,
                      color: "rgba(255,255,255,0.55)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginTop: 4,
                    }}
                  >
                    {a.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div
            style={{
              flex: isMobile ? "unset" : "0 0 44%",
              width: isMobile ? "100%" : undefined,
              maxWidth: isMobile ? "100%" : 500,
              position: "relative",
              animation: "slideInRight 0.9s 0.2s ease both",
            }}
          >
            <div
              style={{
                width: "100%",
                paddingBottom: isMobile ? "110%" : "125%",
                background: `linear-gradient(135deg, rgba(200,169,110,0.12) 0%, rgba(44,79,140,0.2) 100%)`,
                border: `1px solid rgba(200,169,110,0.25)`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="/keji.jpeg"
                alt="Abolaji Morenikeji - Lead Director & MUA"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -20,
                padding: "20px 28px",
                background: COLORS.NAVY,
                border: `1px solid rgba(200,169,110,0.3)`,
              }}
            >
              <div style={{ fontFamily: FONTS.SERIF, fontSize: 18, color: COLORS.WHITE }}>
                Abolaji Morenikeji
              </div>
              <div
                style={{
                  fontFamily: FONTS.SANS,
                  fontSize: 11,
                  color: COLORS.GOLD,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                Lead Director & MUA
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: FONTS.SANS,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 48,
              background: "linear-gradient(to bottom, rgba(200,169,110,0.6), transparent)",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>
      </section>

      {/* Featured Services */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 32px", background: COLORS.OFF_WHITE }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <SectionLabel>What We Offer</SectionLabel>
            <h2
              style={{
                fontFamily: FONTS.SERIF,
                fontSize: "clamp(36px, 5vw, 54px)",
                color: COLORS.NAVY,
                fontWeight: 300,
              }}
            >
              Our Signature Services
            </h2>
            <DividerLine style={{ margin: "16px auto 0" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {SERVICES.slice(0, 3).map((s, i) => (
              <div
                key={s.id}
                style={{
                  background: COLORS.WHITE,
                  padding: "40px 36px",
                  border: `1px solid ${COLORS.GRAY_LIGHT}`,
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                  animation: `fadeUp 0.7s ${i * 0.12}s ease both`,
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(11,31,58,0.12)";
                  e.currentTarget.style.borderColor = COLORS.GOLD;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = COLORS.GRAY_LIGHT;
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                <h3
                  style={{
                    fontFamily: FONTS.SERIF,
                    fontSize: 26,
                    color: COLORS.NAVY,
                    marginBottom: 12,
                    fontWeight: 400,
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontFamily: FONTS.SANS,
                    fontSize: 14,
                    color: COLORS.GRAY_TEXT,
                    lineHeight: 1.75,
                    marginBottom: 20,
                  }}
                >
                  {s.description}
                </p>
                <div
                  style={{
                    fontFamily: FONTS.SERIF,
                    fontSize: 20,
                    color: COLORS.GOLD,
                  }}
                >
                  {s.price}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn-primary" onClick={() => setActivePage("Services")}>
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{
          padding: isMobile ? "60px 20px" : "100px 32px",
          background: COLORS.NAVY,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(200,169,110,0.04)",
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <SectionLabel>Client Love</SectionLabel>
            <h2
              style={{
                fontFamily: FONTS.SERIF,
                fontSize: "clamp(36px, 5vw, 54px)",
                color: COLORS.WHITE,
                fontWeight: 300,
              }}
            >
              What They Say
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  padding: "36px 32px",
                  border: "1px solid rgba(200,169,110,0.2)",
                  background: "rgba(255,255,255,0.03)",
                  animation: `fadeUp 0.7s ${i * 0.15}s ease both`,
                }}
              >
                <div
                  style={{
                    fontFamily: FONTS.SERIF,
                    fontSize: 40,
                    color: COLORS.GOLD,
                    lineHeight: 1,
                    marginBottom: 16,
                    opacity: 0.6,
                  }}
                >
                  "
                </div>
                <p
                  style={{
                    fontFamily: FONTS.SANS,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.8,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  {t.text}
                </p>
                <div style={{ borderTop: "1px solid rgba(200,169,110,0.2)", paddingTop: 20 }}>
                  <div
                    style={{
                      fontFamily: FONTS.SERIF,
                      fontSize: 18,
                      color: COLORS.WHITE,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: FONTS.SANS,
                      fontSize: 11,
                      color: COLORS.GOLD,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginTop: 4,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social / CTA */}
      <section
        style={{
          padding: isMobile ? "60px 20px" : "80px 32px",
          background: COLORS.WHITE,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <SectionLabel>Follow the Journey</SectionLabel>
          <h2
            style={{
              fontFamily: FONTS.SERIF,
              fontSize: 40,
              color: COLORS.NAVY,
              marginBottom: 16,
              fontWeight: 300,
            }}
          >
            @morellebeautyhub
          </h2>
          <p
            style={{
              fontFamily: FONTS.SANS,
              fontSize: 14,
              color: COLORS.GRAY_TEXT,
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Follow us on Instagram for daily beauty inspiration, behind-the-scenes, and client
            transformations.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Instagram", href: "https://www.instagram.com/morellebeautyhub", color: "#E1306C" },
              { label: "Facebook", href: "https://facebook.com/morellebeautyhub", color: "#1877F2" },
              { label: "TikTok", href: "https://tiktok.com/morellebeautyhub", color: "#000" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: FONTS.SANS,
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: COLORS.NAVY,
                  padding: "12px 28px",
                  border: `1px solid ${COLORS.GRAY_LIGHT}`,
                  textDecoration: "none",
                  transition: "background 0.25s, color 0.25s, border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = COLORS.NAVY;
                  e.currentTarget.style.color = COLORS.WHITE;
                  e.currentTarget.style.borderColor = COLORS.NAVY;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = COLORS.NAVY;
                  e.currentTarget.style.borderColor = COLORS.GRAY_LIGHT;
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
