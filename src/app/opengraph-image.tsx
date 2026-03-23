import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FastCAC — Nigerian Business Registration Engine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#007a41",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <h1 style={{ color: "white", fontSize: 64, fontWeight: 700 }}>
          FastCAC
        </h1>
        <p style={{ color: "white", fontSize: 32, textAlign: "center" }}>
          Start Your Nigerian Business in 7 Days — ₦100k
        </p>
        <p style={{ color: "#90ffca", fontSize: 24, marginTop: 20 }}>
          CAC Registration · Logo · Website
        </p>
      </div>
    ),
    size
  );
}
