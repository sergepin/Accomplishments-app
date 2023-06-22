import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import { collections, connectToDatabase } from '../../utils/mongodb';
import Post from '../../models/post'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const db = await connectToDatabase();

  
  if (req.method === 'GET') {
    const posts = await (await collections?.post?.find({}).toArray()) as unknown as Post[] || [] as Post[];
    res.status(200).json(posts);

  } else if (req.method === 'POST') {
    const newPost = req.body as Post;

    const result = await collections?.post?.insertOne(newPost);

    result
        ? res.status(201).send(`Successfully created a new post with id ${result.insertedId}`)
        : res.status(500).send("Failed to create a new post.");
        
  } else if (req.method === 'PUT') {
    
    const id = req?.query?.id as unknown as ObjectId;
    
    try {
        const updatedPost: Post = req.body as Post;
        
        const query = { _id: new ObjectId(id) };
      
        const result = await collections?.post?.updateOne(query, { $set: updatedPost });

        result
            ? res.status(200).send(`Successfully updated post with id ${id}`)
            : res.status(304).send(`Post with id: ${id} not updated`);
    } catch (error:any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }

  } else if (req.method === 'DELETE') {
    const id = req?.query?.id as unknown as ObjectId;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections?.post?.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed post with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove post with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Post with id ${id} does not exist`);
        }
    } catch (error:any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
