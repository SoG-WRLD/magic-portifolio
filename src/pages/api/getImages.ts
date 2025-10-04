import type { NextApiRequest, NextApiResponse } from 'next';
import { getImages } from '@/utils/projectManager';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder_name } = req.query;
  if (typeof folder_name !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid folder_name' });
  }
  const images = getImages(folder_name);
  res.status(200).json(images);
}
