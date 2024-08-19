import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    // Process the form data here
    res.status(200).json({ message: 'Form submitted successfully', data: { name, email } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
