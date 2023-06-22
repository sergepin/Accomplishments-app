import { MongoClient, Db, Collection } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let cachedClient: MongoClient;
let cachedDb: Db;

// Replace the following with your Atlas connection string                                                                                                                                        
const url =  process.env.DB_URI || '';
const dbName = 'posts'
const collectionName = 'postDetails'

export const collections: { post?: Collection } = {}

export async function connectToDatabase2(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  if (!cachedClient) {
    cachedClient = await MongoClient.connect(url);
    console.log("Successfully connected to Atlas");
  }

  cachedDb = cachedClient.db();
  return cachedDb;
}

export async function connectToDatabase () {
  //dotenv.config();

  const client: MongoClient = new MongoClient(url);
          
  await client.connect();
      
  const db: Db = client.db(dbName);
 
  const postCollection: Collection = db.collection(collectionName);

  collections.post = postCollection;
     
       console.log(`Successfully connected to database: ${db.databaseName} and collection: ${postCollection.collectionName}`);
}