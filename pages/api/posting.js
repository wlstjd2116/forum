import {connectDB} from '@/util/database.js'

export default async function Posting(request, response){
    if(request.method == "POST"){

        if(request.body.title == ''){
            return response.status(500).json('제목 써주세요');
        } else if (request.body.content == '') {
            return response.status(500).json('내용을 입력해주세요');
        }

        try {
            const client = await connectDB;
            const db = client.db("forum");
            const reqValue = {title: request.body.title, content: request.body.content};
        
            let result = await db.collection('post').insertOne(reqValue);
        
            return response.redirect(302, '/list');
        } catch(error) {
            return response.status(500).json("error : "+ error + "++++++ DB 에러 발생");
        }
        
    }

    return true;
}