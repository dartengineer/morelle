import { COLORS, FONTS } from "../../styles/theme";
import { SERVICES } from "../../data";
import { SectionLabel } from "../common/SectionLabel";

export function ServicesPage({ setActivePage }) {
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
          <SectionLabel>What We Do</SectionLabel>
          <h1
            style={{
              fontFamily: FONTS.SERIF,
              fontSize: "clamp(42px, 6vw, 72px)",
              color: COLORS.WHITE,
              fontWeight: 300,
            }}
          >
            Our <em style={{ color: COLORS.GOLD }}>Services</em>
          </h1>
        </div>
      </div>

      <section style={{ padding: "80px 32px", background: COLORS.WHITE }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 32,
            }}
          >
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                style={{
                  border: `1px solid ${COLORS.GRAY_LIGHT}`,
                  padding: "44px 40px",
                  animation: `fadeUp 0.7s ${i * 0.1}s ease both`,
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                  e.currentTarget.style.borderColor = COLORS.GOLD;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = COLORS.GRAY_LIGHT;
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 24,
                  }}
                >
                  {s.icon.startsWith('/') ? (
                    <img
                      src={s.icon}
                      alt={s.name}
                      style={{ width: 48, height: 48, objectFit: 'contain' }}
                    />
                  ) : (
                    <span style={{ fontSize: 36 }}>{s.icon}</span>
                  )}
                  <span
                    style={{
                      fontFamily: FONTS.SERIF,
                      fontSize: 22,
                      color: COLORS.GOLD,
                      fontWeight: 400,
                    }}
                  >
                    {s.price}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: FONTS.SERIF,
                    fontSize: 28,
                    color: COLORS.NAVY,
                    marginBottom: 14,
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
                    lineHeight: 1.8,
                    marginBottom: 28,
                  }}
                >
                  {s.description}
                </p>
                <div
                  style={{
                    height: 1,
                    background: COLORS.GRAY_LIGHT,
                    marginBottom: 24,
                  }}
                />
                <button
                  className="btn-primary"
                  style={{ width: "100%", fontSize: 12 }}
                  onClick={() => setActivePage("Booking")}
                >
                  Book This Service
                </button>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 80,
              padding: "60px",
              background: COLORS.NAVY,
              textAlign: "center",
            }}
          >
            <SectionLabel>Not Sure?</SectionLabel>
            <h2
              style={{
                fontFamily: FONTS.SERIF,
                fontSize: 40,
                color: COLORS.WHITE,
                marginBottom: 16,
                fontWeight: 300,
              }}
            >
              Let's Create Your Perfect Look
            </h2>
            <p
              style={{
                fontFamily: FONTS.SANS,
                fontSize: 14,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 36,
                maxWidth: 500,
                margin: "0 auto 36px",
              }}
            >
              Not sure which service suits you? Book a consultation and let Morenikeji guide you
              to the perfect choice.
            </p>
            <button className="btn-gold" onClick={() => setActivePage("Contact")}>
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
