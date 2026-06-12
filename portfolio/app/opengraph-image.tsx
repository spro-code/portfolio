import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sancharini Basak — Building Systems. Still Zooming Out.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBF8F2",
          padding: "72px",
          fontFamily: "serif",
        }}
      >
        {/* concentric zoom-out rings, top-right */}
        <div style={{ position: "absolute", top: -120, right: -120, display: "flex" }}>
          {[360, 280, 200, 120].map((d, i) => (
            <div
              key={d}
              style={{
                position: "absolute",
                top: 120 - d / 2 + 120,
                right: 120 - d / 2 + 120,
                width: d,
                height: d,
                borderRadius: d,
                border: `2px solid rgba(21,72,54,${0.28 - i * 0.05})`,
              }}
            />
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#154836",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#21B97B",
              fontSize: 30,
            }}
          >
            ↗
          </div>
          <div style={{ fontSize: 24, color: "#61594A", fontFamily: "sans-serif", letterSpacing: 2 }}>
            SANCHARINI BASAK
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, color: "#181611", lineHeight: 1.05, fontWeight: 500 }}>
            Building systems.
          </div>
          <div style={{ fontSize: 84, color: "#154836", fontStyle: "italic", lineHeight: 1.05 }}>
            Still zooming out.
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#61594A", fontFamily: "sans-serif" }}>
          Product Manager · Builder · Product Leader
        </div>
      </div>
    ),
    { ...size },
  );
}
