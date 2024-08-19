import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, age, salary } = req.body;
    // Process the form data here
    res.status(200).json({ message: 'Form submitted successfully', data: { name, age, salary } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
