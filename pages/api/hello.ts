// pages/api/hello.ts
import { HttpMethod } from '@/types/enums';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === HttpMethod.POST) res.status(405).json({ message: 'Method Not Allowed' });

    res.status(200).json({ message: 'Hello from API!' });
};

export default handler;
