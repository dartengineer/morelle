import { COLORS, FONTS } from "../../styles/theme";

export function SectionLabel({ children }) {
  return (
    <span
      className="section-label"
      style={{
        fontFamily: FONTS.SANS,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: COLORS.GOLD,
        marginBottom: 12,
      }}
    >
      {children}
    </span>
  );
}
