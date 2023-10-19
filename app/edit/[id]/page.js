import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
    const client = await connectDB;
    const db = client.db("forum");
    let pageId = new ObjectId(props.params.id);
    let result = await db.collection('post').findOne({ _id: pageId});

    return (
        <div>
            <h4>수정 페이지</h4>
            <form action="/api/list" method="POST">
                <button type="submit">버튼</button> 
            </form>

            <form action="/api/edit" method="POST">
                <input text="text" name="id" hidden="true" defaultValue={pageId}/>
                <input type="text" name="title" defaultValue={result.title}/><br/>
                <textarea name="content" defaultValue={result.content}/><br/>
                <button type="submit">글 수정</button>
            </form>
        </div>
    )
}