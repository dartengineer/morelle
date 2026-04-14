import { useState, useEffect } from "react";
import { COLORS, FONTS } from "../../styles/theme";
import { PAGES } from "../../utils/constants";

export function Nav({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: scrolled ? "rgba(11,31,58,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <button
          onClick={() => setActivePage("Home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <span
            style={{
              fontFamily: FONTS.SERIF,
              fontSize: 22,
              color: COLORS.WHITE,
              fontWeight: 400,
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            Morelle
          </span>
          <span
            style={{
              fontFamily: FONTS.SANS,
              fontSize: 10,
              color: COLORS.GOLD,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Beauty Hub
          </span>
        </button>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            gap: 36,
            alignItems: "center",
          }}
          className="hide-mobile"
        >
          {PAGES.map((p) => (
            <button
              key={p}
              onClick={() => setActivePage(p)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: FONTS.SANS,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: activePage === p ? COLORS.GOLD : "rgba(255,255,255,0.8)",
                transition: "color 0.25s",
                borderBottom:
                  activePage === p ? `1px solid ${COLORS.GOLD}` : "1px solid transparent",
                paddingBottom: 2,
              }}
            >
              {p}
            </button>
          ))}
          <button
            className="btn-gold"
            style={{ padding: "10px 24px", fontSize: 11 }}
            onClick={() => setActivePage("Booking")}
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: COLORS.WHITE,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: COLORS.NAVY,
            padding: "16px 32px 24px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {PAGES.map((p) => (
            <button
              key={p}
              onClick={() => {
                setActivePage(p);
                setMenuOpen(false);
              }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: FONTS.SANS,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: activePage === p ? COLORS.GOLD : COLORS.WHITE,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {p}
            </button>
          ))}
          <button
            className="btn-gold"
            style={{ marginTop: 20, width: "100%" }}
            onClick={() => {
              setActivePage("Booking");
              setMenuOpen(false);
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
