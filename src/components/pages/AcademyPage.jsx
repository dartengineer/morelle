import { useState } from "react";
import { COLORS, FONTS } from "../../styles/theme";
import { CONFIG } from "../../data/config";
import { TRAINING_TYPES } from "../../utils/constants";
import { SectionLabel } from "../common/SectionLabel";

export function AcademyPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", trainingType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

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
          <SectionLabel>Learn from the Best</SectionLabel>
          <h1
            style={{
              fontFamily: FONTS.SERIF,
              fontSize: "clamp(42px, 6vw, 72px)",
              color: COLORS.WHITE,
              fontWeight: 300,
            }}
          >
            Morelle <em style={{ color: COLORS.GOLD }}>Academy</em>
          </h1>
          <p
            style={{
              fontFamily: FONTS.SANS,
              fontSize: 15,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 520,
              margin: "16px auto 0",
              lineHeight: 1.8,
            }}
          >
            Master the art of makeup under the guidance of Abolaji Morenikeji and her expert team.
          </p>
        </div>
      </div>

      {/* Course Details */}
      <section style={{ padding: "80px 32px", background: COLORS.OFF_WHITE }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
              marginBottom: 72,
            }}
          >
            {[
              { icon: "🎓", title: "Hands-On Training", desc: "Learn through practical sessions with real models and professional-grade products." },
              { icon: "🏆", title: "Certified Courses", desc: "Receive internationally recognized certification upon completion of your program." },
              { icon: "📚", title: "Industry Curriculum", desc: "Curriculum designed with input from Ilorin Fashion Week and Nollywood productions." },
              { icon: "🌍", title: "Career Support", desc: "Graduate with a portfolio, mentorship, and access to our professional network." },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.WHITE,
                  padding: "32px 28px",
                  border: `1px solid ${COLORS.GRAY_LIGHT}`,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                <h3
                  style={{
                    fontFamily: FONTS.SERIF,
                    fontSize: 22,
                    color: COLORS.NAVY,
                    marginBottom: 10,
                    fontWeight: 400,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: FONTS.SANS,
                    fontSize: 13,
                    color: COLORS.GRAY_TEXT,
                    lineHeight: 1.75,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Academy Toggle Section */}
          {!CONFIG.isAcademyOpen ? (
            <div
              style={{
                background: COLORS.NAVY,
                padding: "64px 48px",
                textAlign: "center",
                border: `1px solid rgba(200,169,110,0.25)`,
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 20 }}>🔒</div>
              <h2
                style={{
                  fontFamily: FONTS.SERIF,
                  fontSize: 38,
                  color: COLORS.WHITE,
                  marginBottom: 16,
                  fontWeight: 300,
                }}
              >
                Registration Currently <em style={{ color: COLORS.GOLD }}>Closed</em>
              </h2>
              <p
                style={{
                  fontFamily: FONTS.SANS,
                  fontSize: 15,
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: 480,
                  margin: "0 auto 32px",
                  lineHeight: 1.8,
                }}
              >
                Academy registration is not currently open. Join our waitlist to be notified when
                the next intake begins.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  maxWidth: 400,
                  margin: "0 auto",
                }}
              >
                <input type="email" placeholder="Your email address" style={{ flex: 1 }} />
                <button className="btn-gold" style={{ whiteSpace: "nowrap" }}>
                  Join Waitlist
                </button>
              </div>
            </div>
          ) : submitted ? (
            <div
              style={{
                background: COLORS.NAVY,
                padding: "80px 48px",
                textAlign: "center",
                animation: "fadeUp 0.6s ease",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: `rgba(200,169,110,0.15)`,
                  border: `1px solid ${COLORS.GOLD}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: 32,
                }}
              >
                ✓
              </div>
              <h2
                style={{
                  fontFamily: FONTS.SERIF,
                  fontSize: 40,
                  color: COLORS.WHITE,
                  marginBottom: 16,
                  fontWeight: 300,
                }}
              >
                Registration <em style={{ color: COLORS.GOLD }}>Received!</em>
              </h2>
              <p
                style={{
                  fontFamily: FONTS.SANS,
                  fontSize: 15,
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: 460,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                Thank you, <strong style={{ color: COLORS.WHITE }}>{form.name}</strong>! We'll be in
                touch within 48 hours with your enrollment details and next steps.
              </p>
            </div>
          ) : (
            <div
              style={{
                background: COLORS.WHITE,
                padding: "60px",
                border: `1px solid ${COLORS.GRAY_LIGHT}`,
              }}
            >
              <div style={{ marginBottom: 48, textAlign: "center" }}>
                <SectionLabel>Enroll Now</SectionLabel>
                <h2
                  style={{
                    fontFamily: FONTS.SERIF,
                    fontSize: 40,
                    color: COLORS.NAVY,
                    fontWeight: 300,
                  }}
                >
                  Academy Registration
                </h2>
                <div
                  style={{
                    width: 48,
                    height: 1,
                    background: COLORS.GOLD,
                    margin: "16px auto 0",
                  }}
                />
              </div>

              <div
                style={{
                  maxWidth: 680,
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                  }}
                >
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
                      Full Name *
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        setErrors({ ...errors, name: "" });
                      }}
                      placeholder="Your full name"
                      style={errors.name ? { borderColor: "#dc2626" } : {}}
                    />
                    {errors.name && (
                      <span
                        style={{
                          fontFamily: FONTS.SANS,
                          fontSize: 12,
                          color: "#dc2626",
                          marginTop: 4,
                          display: "block",
                        }}
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>
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
                      Phone Number *
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="+234 800 000 0000"
                      type="tel"
                      style={errors.phone ? { borderColor: "#dc2626" } : {}}
                    />
                    {errors.phone && (
                      <span
                        style={{
                          fontFamily: FONTS.SANS,
                          fontSize: 12,
                          color: "#dc2626",
                          marginTop: 4,
                          display: "block",
                        }}
                      >
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

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
                    Email Address *
                  </label>
                  <input
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      setErrors({ ...errors, email: "" });
                    }}
                    placeholder="you@example.com"
                    type="email"
                    style={errors.email ? { borderColor: "#dc2626" } : {}}
                  />
                  {errors.email && (
                    <span
                      style={{
                        fontFamily: FONTS.SANS,
                        fontSize: 12,
                        color: "#dc2626",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      {errors.email}
                    </span>
                  )}
                </div>

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
                    Preferred Training Type
                  </label>
                  <select
                    value={form.trainingType}
                    onChange={(e) => setForm({ ...form, trainingType: e.target.value })}
                  >
                    <option value="">Select a course (optional)</option>
                    {TRAINING_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

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
                    Message / Questions
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Any questions or special requirements..."
                    rows={4}
                  />
                </div>

                <button
                  className="btn-primary"
                  style={{ marginTop: 8, padding: "16px" }}
                  onClick={handleSubmit}
                >
                  Submit Registration
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
