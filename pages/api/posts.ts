import { getAllPosts } from '@/lib/postsService';
import { HttpMethod } from '@/types/enums';
import { NextApiRequest, NextApiResponse } from 'next';




const getPosts = (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === HttpMethod.GET) {
        return res.status(200).json({ data: getAllPosts(), status: 200 });
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
};

export default getPosts;
