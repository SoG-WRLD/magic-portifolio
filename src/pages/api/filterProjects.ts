import { filterProjects, readProject } from '@/utils/projectManager';
import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder_names } = req.body;
  if (!Array.isArray(folder_names)) {
    return res.status(400).json({ error: 'Missing or invalid folder_names' });
  }
  const projects = folder_names.map((name: string) => readProject(name));
  const filtered = filterProjects(projects);
  res.status(200).json(filtered);
}
