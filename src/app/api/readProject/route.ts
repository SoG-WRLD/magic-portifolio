// app/api/readProject/route.ts
import { NextResponse } from "next/server";
import { readProject } from "@/utils/projectManager";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const folderName = searchParams.get("folder_name");

  if (!folderName) {
    return NextResponse.json({ error: "Missing folder_name" }, { status: 400 });
  }

  const project = await readProject(folderName);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
