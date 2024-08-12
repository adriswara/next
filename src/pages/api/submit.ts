import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    // Process the data (e.g., save to database)
    res.status(200).json({ message: 'Form submitted successfully', data });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
