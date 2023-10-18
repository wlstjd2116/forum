import {connectDB} from '@/util/database.js'

export default async function GetList(request, response){
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection('post').find().toArray();

    return response.status(200).json(result);
}