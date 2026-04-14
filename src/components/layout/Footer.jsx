import { CONFIG } from "../../data/config";
import { COLORS, FONTS } from "../../styles/theme";
import { SOCIAL_LINKS } from "../../utils/constants";

export function Footer({ setActivePage }) {
  const navigablePages = ["Home", "About", "Services", "Academy", "Booking", "Contact"];

  return (
    <footer
      style={{
        background: COLORS.NAVY,
        color: COLORS.WHITE,
        padding: "64px 32px 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <div style={{ fontFamily: FONTS.SERIF, fontSize: 26, marginBottom: 6 }}>
              Morelle
            </div>
            <div
              style={{
                fontFamily: FONTS.SANS,
                fontSize: 10,
                color: COLORS.GOLD,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Beauty Hub
            </div>
            <p
              style={{
                fontFamily: FONTS.SANS,
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                maxWidth: 280,
              }}
            >
              Award-winning makeup artistry redefining beauty standards across Nigeria and
              beyond.
            </p>
          </div>

          {/* All columns in single row */}
          {[
            { heading: "Navigate", links: navigablePages },
            {
              heading: "Connect",
              links: [CONFIG.phone, CONFIG.email, CONFIG.location],
            },
          ].map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontFamily: FONTS.SANS,
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: COLORS.GOLD,
                  marginBottom: 20,
                }}
              >
                {col.heading}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <button
                    key={l}
                    onClick={() => (navigablePages.includes(l) ? setActivePage(l) : null)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: navigablePages.includes(l) ? "pointer" : "default",
                      fontFamily: FONTS.SANS,
                      fontSize: 13,
                      color: "rgba(255,255,255,0.55)",
                      textAlign: "left",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (navigablePages.includes(l)) {
                        e.currentTarget.style.color = COLORS.WHITE;
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: FONTS.SANS,
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            © 2026 Morelle Beauty Hub. All rights reserved.
          </div>
          <div
            style={{
              fontFamily: FONTS.SANS,
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Crafted with ♥ in Ilorin
          </div>
        </div>
      </div>
    </footer>
  );
}
