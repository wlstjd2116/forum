import Image from 'next/image'
import styles from './page.module.css'
import { MongoClient } from 'mongodb'
import {connectDB} from '@/util/database.js'

export default async function Home() {
  const client = await connectDB;
  //const client = await MongoClient.connect('mongodb+srv://admin:slsk2548@cluster0.wfu8qcf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray();
  console.log(result);
  
  return (
   <div>
   </div>
  )
}
