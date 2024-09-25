import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-iron-session';

interface NextApiRequestWithSession extends NextApiRequest {
  session: Session;
}
