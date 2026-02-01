import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  className?: string;
};

export default function Buttton({
  label,
  onClick,
  type = "button",
  disabled,
  iconLeft,
  bgColor = "#01A982",
  textColor = "#ffffff",
  borderColor,
  className = "",
}: Props) {
  const style: React.CSSProperties = {
    width: "100%",
    height: 48,
    borderRadius: 12,
    background: bgColor,
    color: textColor,
    border: borderColor ? `1px solid ${borderColor}` : "none",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
      style={style}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
        {iconLeft}
        <span>{label}</span>
      </span>
    </button>
  );
}
