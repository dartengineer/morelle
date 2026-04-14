import { COLORS } from "../../styles/theme";

export function DividerLine({ className = "divider-line", ...props }) {
  return (
    <span
      className={className}
      style={{
        display: "block",
        width: 48,
        height: 1,
        background: COLORS.GOLD,
        margin: "16px 0 28px",
        ...props.style,
      }}
    />
  );
}
