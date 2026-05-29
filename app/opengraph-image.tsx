import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Saving Arrows — Restoring direction. Rebuilding futures. An anti-trafficking nonprofit healing program in Castle Rock, Colorado.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1B3A5C 0%, #2E6DA4 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 88px",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            width: 64,
            height: 6,
            background: "#F0A500",
            borderRadius: 3,
            marginBottom: 36,
            display: "flex",
          }}
        />

        {/* Program label */}
        <div
          style={{
            color: "#F0A500",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 20,
            display: "flex",
          }}
        >
          Saving Arrows
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 54,
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 32,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>Restoring direction.</div>
          <div>Rebuilding futures.</div>
        </div>

        {/* Description */}
        <div
          style={{
            color: "#C8DCF0",
            fontSize: 21,
            lineHeight: 1.5,
            marginBottom: 48,
            maxWidth: 760,
            display: "flex",
          }}
        >
          Trauma-informed healing for child survivors of trafficking — Castle Rock, Colorado
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              color: "#8DB4D6",
              fontSize: 16,
              display: "flex",
            }}
          >
            A Liberators Alliance Program
          </div>
          <div style={{ color: "#4A7EA8", fontSize: 16, display: "flex" }}>•</div>
          <div style={{ color: "#8DB4D6", fontSize: 16, display: "flex" }}>
            conus.liberators-alliance.org
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
