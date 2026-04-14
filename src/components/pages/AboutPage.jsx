import { useState, useEffect } from "react";
import { COLORS, FONTS } from "../../styles/theme";
import { ACHIEVEMENTS } from "../../data";
import { SectionLabel } from "../common/SectionLabel";

export function AboutPage() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Header */}
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
          <SectionLabel>Our Story</SectionLabel>
          <h1
            style={{
              fontFamily: FONTS.SERIF,
              fontSize: "clamp(42px, 6vw, 72px)",
              color: COLORS.WHITE,
              fontWeight: 300,
            }}
          >
            The Face Behind
            <br />
            <em style={{ color: COLORS.GOLD }}>Morelle</em>
          </h1>
        </div>
      </div>

      {/* Director Portrait Section */}
      <section style={{ padding: isMobile ? "40px 20px" : "80px 32px", background: COLORS.OFF_WHITE }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 40 : 80,
            alignItems: "flex-start",
          }}
        >
          {/* Image and Achievements */}
          <div
            style={{
              flex: isMobile ? "unset" : "0 0 45%",
              width: isMobile ? "100%" : undefined,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
            {/* Portrait */}
            <div style={{ width: "100%", position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  paddingBottom: isMobile ? "100%" : "120%",
                  background: `linear-gradient(135deg, ${COLORS.GRAY_LIGHT} 0%, rgba(200,169,110,0.12) 100%)`,
                  border: `1px solid ${COLORS.GRAY_LIGHT}`,
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
            </div>

            {/* Achievements Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, width: "100%" }}>
              {ACHIEVEMENTS.map((a) => (
                <div
                  key={a.label}
                  style={{ background: COLORS.NAVY, padding: "20px", textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: FONTS.SERIF,
                      fontSize: 28,
                      color: COLORS.GOLD,
                    }}
                  >
                    {a.number}
                  </div>
                  <div
                    style={{
                      fontFamily: FONTS.SANS,
                      fontSize: 10,
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginTop: 6,
                    }}
                  >
                    {a.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meet the Artist Text & Biography */}
          <div
            style={{
              flex: isMobile ? "unset" : "0 0 55%",
              width: isMobile ? "100%" : undefined,
              paddingTop: isMobile ? 0 : 20,
              maxHeight: isMobile ? "none" : "80vh",
              overflowY: isMobile ? "visible" : "auto",
              paddingRight: isMobile ? 0 : 20,
            }}
          >
            <SectionLabel>Meet the Artist</SectionLabel>
            <h2
              style={{
                fontFamily: FONTS.SERIF,
                fontSize: "clamp(36px, 4vw, 52px)",
                color: COLORS.NAVY,
                marginBottom: 8,
                fontWeight: 300,
              }}
            >
              Abolaji Morenikeji
            </h2>
            <div
              style={{
                fontFamily: FONTS.SANS,
                fontSize: 13,
                color: COLORS.GOLD,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 32,
              }}
            >
              Lead Director & Master Makeup Artist
            </div>

            {/* Biography Sections */}
            {[
              {
                heading: "A Passion Born in Ilorin",
                body: "Morenikeji's love affair with beauty began at age twelve, watching her mother prepare for evening events with effortless grace. What started as quiet admiration became a lifelong calling. By eighteen, she was crafting looks for family weddings; by twenty-two, she had built a portfolio spanning four states.",
              },
              {
                heading: "Training & Mastery",
                body: "Morenikeji pursued formal training at the House of Tara International, Ilorin, before refining her craft at the London Makeup School. She holds advanced certifications in airbrush artistry, special effects, and editorial color theory. Her techniques bridge African beauty traditions with contemporary international trends.",
              },
              {
                heading: "The Morelle Vision",
                body: "Founded in 2016, Morelle Beauty Hub was born from a singular belief: every woman deserves to feel extraordinary. The brand has since grown into Ilorin's most sought-after beauty house, known for its meticulous attention to skin health, longevity, and personalized service.",
              },
              {
                heading: "Recognition & Milestones",
                body: "Morenikeji has been featured in Genevieve Magazine, Vogue Africa, and BellaNaija Style. She has worked backstage at Ilorin Fashion Week, styled cast for Nollywood productions, and was named 'Best Makeup Artist — Ilorin' at the West African Beauty Awards 2022 and 2023.",
              },
            ].map((block, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 28,
                  paddingLeft: 20,
                  borderLeft: `2px solid ${i === 0 ? COLORS.GOLD : COLORS.GRAY_LIGHT}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: FONTS.SERIF,
                    fontSize: 18,
                    color: COLORS.NAVY,
                    marginBottom: 10,
                    fontWeight: 400,
                  }}
                >
                  {block.heading}
                </h3>
                <p
                  style={{
                    fontFamily: FONTS.SANS,
                    fontSize: 13,
                    color: COLORS.GRAY_TEXT,
                    lineHeight: 1.75,
                  }}
                >
                  {block.body}
                </p>
              </div>
            ))}

            {/* Signature Quote */}
            <div
              style={{
                marginTop: 32,
                padding: "24px 28px",
                background: COLORS.OFF_WHITE,
                borderLeft: `4px solid ${COLORS.GOLD}`,
              }}
            >
              <p
                style={{
                  fontFamily: FONTS.SERIF,
                  fontSize: 14,
                  color: COLORS.NAVY,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                }}
              >
                "Beauty is not about perfection. It is about amplifying what already exists — helping each woman step into the fullness of who she is."
              </p>
              <div
                style={{
                  fontFamily: FONTS.SERIF,
                  fontSize: 13,
                  color: COLORS.GOLD,
                  marginTop: 12,
                }}
              >
                — Abolaji Morenikeji
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section style={{ padding: isMobile ? "60px 20px" : "80px 32px", background: COLORS.NAVY }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2
              style={{
                fontFamily: FONTS.SERIF,
                fontSize: 44,
                color: COLORS.WHITE,
                fontWeight: 300,
              }}
            >
              What Drives Us
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 2,
            }}
          >
            {[
              {
                icon: "◈",
                title: "Skin First",
                desc: "Every look begins with skincare. We prepare, protect, and enhance your natural complexion.",
              },
              {
                icon: "◉",
                title: "Longevity",
                desc: "Our artistry is built to last — 12+ hours of flawless wear, from ceremony to dance floor.",
              },
              {
                icon: "◎",
                title: "Personalization",
                desc: "No two faces are the same. Every client receives a bespoke look crafted for their unique features.",
              },
              {
                icon: "◈",
                title: "Inclusivity",
                desc: "We celebrate all skin tones, textures, and identities. Beauty has no singular definition.",
              },
            ].map((v, i) => (
              <div
                key={i}
                style={{
                  padding: "40px 32px",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(200,169,110,0.06)",
                  border: "1px solid rgba(200,169,110,0.1)",
                }}
              >
                <div style={{ fontSize: 24, color: COLORS.GOLD, marginBottom: 16 }}>
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontFamily: FONTS.SERIF,
                    fontSize: 22,
                    color: COLORS.WHITE,
                    marginBottom: 12,
                    fontWeight: 400,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: FONTS.SANS,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.62)",
                    lineHeight: 1.75,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
