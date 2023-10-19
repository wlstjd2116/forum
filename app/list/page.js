import {connectDB} from '@/util/database.js'
import Link from 'next/link';
import DetailLink from '../detail/[subfolder]/DetailLink';

export default async function List() {
    const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray();
    return (
        <div className="list-bg">
            {result.map((a, i)=>{
                return (
                    // 글의 id 정의
                    <div className='list-item' key={i}>
                        <Link href={"/detail/"+result[i]._id}><h4>{result[i].title}</h4></Link>
                        <Link href={'/edit/' + result[i]._id}>🪄</Link>
                        <p>{result[i].content}</p>
                    </div>
                )
            })}
        </div>
    )
}