import { Collection, Db, MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Mongo URL not found");
}
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  maxPoolSize: 50,
  connectTimeoutMS: 5000,
});


async function getDB(dbName: string): Promise<Db | null> {
  try {
      await client.connect();
      console.log("MongoDB connected successfully");
    return client.db(dbName);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return null;
  }
}

export async function getCollection(
  collectionName: string,
): Promise<Collection | null> {
  const database = await getDB("19Homes");
  if (database) return database.collection(collectionName);
  return null;
}
