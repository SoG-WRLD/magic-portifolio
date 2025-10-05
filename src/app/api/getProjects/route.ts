import { Project } from "@/modules/project";
import { filterProjects, readProject } from "@/utils/projectManager";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { folder_names } = await req.json();

  if (!folder_names) {
    return NextResponse.json({ error: "Missing folder_name" }, { status: 400 });
  }

  const projects: (Project | null)[] = await Promise.all(
    folder_names.map(async (name: string) => {
      const project = await readProject(name);
      return project;
    })
  );
  if (!projects) {
    return NextResponse.json({ error: "Projects not found" }, { status: 404 });
  }

  const filtered = filterProjects(projects);
  return NextResponse.json(filtered);
}
