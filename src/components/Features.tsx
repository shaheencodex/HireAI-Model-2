import React, { useState } from "react";
import jdIcon from "../assets/images/GenerateJD.svg";
import matchIcon from "../assets/images/ResumeMatch.svg";
import aiIcon from "../assets/images/AI-Interview.svg";
import reportIcon from "../assets/images/SummaryReport.svg";
import "../styles/Features.css";

export default function Features() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const items = [
    {
      icon: jdIcon,
      title: "Generate JD",
      desc: "Create precise, engaging job descriptions in seconds — tailored by AI to attract the right talent.",
    },
    {
      icon: matchIcon,
      title: "Resume Match",
      desc: "Instantly match resumes with your job requirements using smart AI filters that understand skills.",
    },
    {
      icon: aiIcon,
      title: "AI Interview",
      desc: "Let AI handle the first round — unbiased, consistent, and available 24/7 to assess every candidate.",
    },
    {
      icon: reportIcon,
      title: "Summary Report",
      desc: "Get clear, structured interview summaries and actionable insights to make hiring faster & smarter.",
    },
  ];

  return (
    <section style={{ width: "100%", marginTop: 28 }}>
      <div
        className="features-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {items.map((it, index) => (
          <div
            key={it.title}
            style={{
              ...cardStyle,
              background:
                hoverIndex === index
                  ? "linear-gradient(to bottom right, #292d3a 75%, #00c48c 100%)"
                  : "#292d3a",
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div style={iconWrapStyle}>
              <img
                src={it.icon}
                alt=""
                width={24}
                height={24}
                style={{
                  filter: "invert(1) brightness(2)",
                }}
              />
            </div>
            <div
              style={{
                fontWeight: 700,
                color: "#ffffff",
                marginTop: 12,
                fontSize: 16,
                fontFamily: "manrope",
              }}
            >
              {it.title}
            </div>
            <div
              style={{
                color: "#67686e",
                fontSize: 15,
                lineHeight: 1.7,
                marginTop: 10,
                fontFamily: "manrope",
                fontWeight: 400,
              }}
            >
              {it.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Placeholder for hover state logic
const cardStyle: React.CSSProperties = {
  background: "#292d3a",
  border: "2px solid #11435c1a",
  borderRadius: 18,
  padding: 26,
  boxShadow: "0 12px 28px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontFamily: "manrope",
  textAlign: "left",
};

const iconWrapStyle: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 12,
  background: "#01a982",
  border: "1px solid #292d3a",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};
