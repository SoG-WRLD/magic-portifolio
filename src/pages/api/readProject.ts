import type { NextApiRequest, NextApiResponse } from 'next';
import { readProject } from '@/utils/projectManager';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder_name } = req.query;
  if (typeof folder_name !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid folder_name' });
  }
  const project = readProject(folder_name);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.status(200).json(project);
}
