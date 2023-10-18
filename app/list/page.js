import {connectDB} from '@/util/database.js'

export default async function List() {
    const client = await connectDB;
  //const client = await MongoClient.connect('mongodb+srv://admin:slsk2548@cluster0.wfu8qcf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray();
    return (
        <div className="list-bg">
            {result.map((a, i)=>{
                return (
                    <div className='list-item' key={i}>
                        <h4>{result[i].title}</h4>
                        <p>{result[i].content}</p>
                    </div>
                )
            })}
        </div>
    )
}