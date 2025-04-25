import { ImageResponse } from "next/og";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Portfolio";

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        background: "#151515",
        color: "white",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 60,
        fontFamily: "sans-serif",
        padding: "2rem",
      }}
    >
      {title}
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}

