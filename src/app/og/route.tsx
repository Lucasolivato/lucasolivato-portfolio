import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

// Imagem de compartilhamento (LinkedIn, WhatsApp etc.) no visual do site: fundo escuro,
// marca "L▪" do favicon e o verde de destaque.
const loadFont = (file: string) => readFile(join(process.cwd(), "public", "fonts", file));

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || person.name;

  const [semiBold, regular, mono] = await Promise.all([
    loadFont("Geist-SemiBold.ttf"),
    loadFont("Geist-Regular.ttf"),
    loadFont("GeistMono-Regular.ttf"),
  ]);

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "64px 72px",
        background: "#0C0E0F",
        backgroundImage: "radial-gradient(circle at 50% -20%, rgba(52, 211, 153, 0.22), rgba(12, 14, 15, 0) 60%)",
        color: "#E8ECEA",
        fontFamily: "Geist",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 56,
            height: 56,
            borderRadius: 13,
            background: "#0C0E0F",
            border: "2px solid #262D30",
          }}
        >
          <div style={{ position: "absolute", left: 13, top: 11, width: 8, height: 34, borderRadius: 2, background: "#E8ECEA" }} />
          <div style={{ position: "absolute", left: 13, top: 37, width: 19, height: 8, borderRadius: 2, background: "#E8ECEA" }} />
          <div style={{ position: "absolute", left: 34, top: 32, width: 11, height: 13, borderRadius: 3, background: "#34D399" }} />
        </div>
        <span style={{ fontFamily: "Geist Mono", fontSize: 26, color: "#E8ECEA" }}>lucas.olivato</span>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 68,
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          fontWeight: 600,
          maxWidth: 1000,
        }}
      >
        {title}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src={`https://${baseURL}${person.avatar}`}
            width={72}
            height={72}
            alt=""
            style={{ borderRadius: 999, objectFit: "cover", border: "2px solid #262D30" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 30, fontWeight: 600 }}>{person.name}</span>
            <span style={{ fontSize: 22, fontWeight: 400, color: "#A8B1AE" }}>{person.role}</span>
          </div>
        </div>
        <span style={{ fontFamily: "Geist Mono", fontSize: 24, color: "#34D399" }}>{baseURL}</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Geist", data: semiBold, style: "normal", weight: 600 },
        { name: "Geist", data: regular, style: "normal", weight: 400 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
