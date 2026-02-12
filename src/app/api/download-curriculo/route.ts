import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const FILENAME = "curriculo.pdf";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", FILENAME);
    const file = await readFile(filePath);
    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${FILENAME}"`,
        "Content-Length": String(file.length),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Arquivo não encontrado. Coloque curriculo.pdf na pasta public." },
      { status: 404 }
    );
  }
}
