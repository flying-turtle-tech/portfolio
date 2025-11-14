import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const runtime = "edge";
export const alt = "Portfolio | Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              background: "linear-gradient(to right, #8b5cf6, #a855f7, #d946ef)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 20,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#a1a1aa",
              textAlign: "center",
            }}
          >
            Software Engineer — iOS, AI, and Product Builder
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
