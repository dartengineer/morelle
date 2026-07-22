import { useState } from "react";
import { COLORS, FONTS } from "../../styles/theme";
import { CONFIG } from "../../data/config";
import { SERVICES } from "../../data";
import { SectionLabel } from "../common/SectionLabel";

export function BookingPage() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", service: "", notes: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.date) e.date = "Please select a date";
    if (!form.service) e.service = "Please select a service";
    return e;
  };

  const handleBook = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    const msg = `Hello Morelle Beauty Hub! 🌟

I'd like to book a makeup session.

*Name:* ${form.name}
*Phone:* ${form.phone}
*Date:* ${form.date}
*Service:* ${form.service}
${form.notes ? `*Notes:* ${form.notes}` : ""}

Looking forward to hearing from you!`;

    const waUrl = `https://wa.me/${CONFIG.directorPhone}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  };

  const inputLabel = (text, required) => (
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
      {text} {required && <span style={{ color: COLORS.GOLD }}>*</span>}
    </label>
  );

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
          <SectionLabel>Reserve Your Date</SectionLabel>
          <h1
            style={{
              fontFamily: FONTS.SERIF,
              fontSize: "clamp(42px, 6vw, 72px)",
              color: COLORS.WHITE,
              fontWeight: 300,
            }}
          >
            Book a <em style={{ color: COLORS.GOLD }}>Session</em>
          </h1>
          <p
            style={{
              fontFamily: FONTS.SANS,
              fontSize: 15,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 500,
              margin: "16px auto 0",
              lineHeight: 1.8,
            }}
          >
            Fill the form below and you'll be redirected to WhatsApp to confirm with our
            director.
          </p>
        </div>
      </div>

      <section style={{ padding: "80px 32px", background: COLORS.OFF_WHITE }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* WhatsApp Info Banner */}
          <div
            style={{
              background: COLORS.WHITE,
              padding: "20px 28px",
              border: `1px solid rgba(37,211,102,0.3)`,
              marginBottom: 40,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: FONTS.SANS,
                  fontSize: 13,
                  fontWeight: 500,
                  color: COLORS.NAVY,
                }}
              >
                Booking via WhatsApp
              </div>
              <div
                style={{
                  fontFamily: FONTS.SANS,
                  fontSize: 12,
                  color: COLORS.GRAY_TEXT,
                  marginTop: 2,
                }}
              >
                After submitting, you'll be redirected to WhatsApp with your details
                pre-filled. No account needed.
              </div>
            </div>
          </div>

          <div
            style={{
              background: COLORS.WHITE,
              padding: "56px 60px",
              border: `1px solid ${COLORS.GRAY_LIGHT}`,
              animation: "fadeUp 0.7s ease",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 22,
                }}
              >

                <div>
                  {inputLabel("Full Name", true)}
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
                  {inputLabel("Phone Number", true)}
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

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 22,
                }}
              >

                <div>
                  {inputLabel("Preferred Date", true)}
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => {
                      setForm({ ...form, date: e.target.value });
                      setErrors({ ...errors, date: "" });
                    }}
                    min={new Date().toISOString().split("T")[0]}
                    style={errors.date ? { borderColor: "#dc2626" } : {}}
                  />
                  {errors.date && (
                    <span
                      style={{
                        fontFamily: FONTS.SANS,
                        fontSize: 12,
                        color: "#dc2626",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      {errors.date}
                    </span>
                  )}
                </div>
                <div>
                  {inputLabel("Type of Service", true)}
                  <select
                    value={form.service}
                    onChange={(e) => {
                      setForm({ ...form, service: e.target.value });
                      setErrors({ ...errors, service: "" });
                    }}
                    style={errors.service ? { borderColor: "#dc2626" } : {}}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <span
                      style={{
                        fontFamily: FONTS.SANS,
                        fontSize: 12,
                        color: "#dc2626",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      {errors.service}
                    </span>
                  )}
                </div>
              </div>

              <div>
                {inputLabel("Additional Notes")}
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={4}
                  placeholder="Any special requests, event details, inspiration photos link, or questions..."
                />
              </div>

              <button
                className="btn-gold"
                style={{ width: "100%", padding: "18px", fontSize: 13, marginTop: 8 }}
                onClick={handleBook}
              >
                <span>Continue to WhatsApp</span>
                <span>→</span>
              </button>

              <p
                style={{
                  fontFamily: FONTS.SANS,
                  fontSize: 12,
                  color: COLORS.GRAY_TEXT,
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                By submitting, you agree to our booking terms. A confirmation and deposit
                details will be shared via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
