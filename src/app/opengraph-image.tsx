import { ImageResponse } from "next/og";
import { user } from "@/constants/user";

export const alt = `${user.name} | Full-Stack Developer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Decorative Background Blob */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(99, 102, 241, 0.15)",
          filter: "blur(100px)",
        }}
      />

      {/* Status Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "8px 16px",
          borderRadius: "9999px",
          color: "#6366f1",
          fontSize: "18px",
          fontWeight: 500,
          marginBottom: "32px",
        }}
      >
        ✨ Available for new opportunities
      </div>

      {/* Title Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <span style={{ color: "#94a3b8", fontSize: "32px", fontWeight: 300 }}>
          {"Hi, I'm"}
        </span>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            margin: 0,
            letterSpacing: "-0.04em",
          }}
        >
          {user.name}
        </h1>
      </div>

      {/* Paragraph Description */}
      <p
        style={{
          fontSize: "28px",
          color: "#94a3b8",
          maxWidth: "800px",
          lineHeight: 1.5,
          margin: "24px 0 0 0",
          fontWeight: 400,
        }}
      >
        {user.bio || user.description}
      </p>

      {/* Footer Updated to Full-Stack */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "80px",
          color: "#475569",
          fontSize: "18px",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        Full-Stack Developer Portfolio
      </div>
    </div>,
    { ...size },
  );
}
