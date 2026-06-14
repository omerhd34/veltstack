import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Veltstack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0A0A0F 0%, #6C63FF 100%)",
        color: "#ffffff",
        fontSize: 72,
        fontWeight: 700,
      }}
    >
      Veltstack
    </div>,
    { ...size },
  );
}
