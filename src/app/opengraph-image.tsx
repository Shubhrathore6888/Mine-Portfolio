import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Shubh Rathore | Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const imgPath = path.join(process.cwd(), "public", "profile.jpeg");
  const imgData = fs.readFileSync(imgPath);
  const base64 = `data:image/jpeg;base64,${imgData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        backgroundColor: "#0a0a0f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,255,136,0.04) 0px, rgba(0,255,136,0.04) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(0,255,136,0.04) 0px, rgba(0,255,136,0.04) 1px, transparent 1px, transparent 60px)",
          display: "flex",
        }}
      />

      {/* Main content row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "60px 80px",
          gap: "80px",
          position: "relative",
        }}
      >
        {/* Left: profile photo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* Gradient ring simulation via outer wrapper */}
          <div
            style={{
              width: "226px",
              height: "226px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00ff88",
              padding: "3px",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "9999px",
                overflow: "hidden",
                display: "flex",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={base64}
                width={220}
                height={220}
                alt="Shubh Rathore"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Right: text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            gap: "0px",
          }}
        >
          {/* Label */}
          <div
            style={{
              color: "#00ff88",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "16px",
              display: "flex",
            }}
          >
            BACKEND DEVELOPER
          </div>

          {/* Name */}
          <div
            style={{
              color: "#e4e4e7",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "20px",
              display: "flex",
            }}
          >
            Shubh Rathore
          </div>

          {/* Subtitle row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              fontSize: 22,
              fontFamily: "monospace",
              marginBottom: "28px",
            }}
          >
            <span style={{ color: "#00ff88", display: "flex" }}>&lt;</span>
            <span style={{ color: "#71717a", display: "flex" }}>
              Node.js · TypeScript · Blockchain
            </span>
            <span style={{ color: "#00ff88", display: "flex" }}>/&gt;</span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#1f1f2e",
              marginBottom: "28px",
              display: "flex",
            }}
          />

          {/* Tech pills */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
            }}
          >
            {["Node.js", "TypeScript", "MongoDB"].map((tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  color: "#00ff88",
                  borderRadius: "9999px",
                  padding: "8px 20px",
                  fontSize: 16,
                  display: "flex",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-right URL */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          right: "40px",
          color: "#71717a",
          fontSize: 14,
          display: "flex",
        }}
      >
        0xshubh.me
      </div>
    </div>,
    {
      ...size,
    },
  );
}
