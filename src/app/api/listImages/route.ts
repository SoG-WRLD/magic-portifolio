import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");
  if (!folder) {
    return NextResponse.json({ error: "Missing folder" }, { status: 400 });
  }

  const imagesDir = path.join(
    process.cwd(),
    "public",
    "projects",
    folder,
    "images"
  );
  if (!fs.existsSync(imagesDir)) {
    return NextResponse.json([], { status: 200 });
  }
  const files = fs
    .readdirSync(imagesDir)
    .filter((file) => /\.(png|jpg|jpeg|svg)$/i.test(file));

  return NextResponse.json(files, { status: 200 });
}
