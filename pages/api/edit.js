import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){

    if (req.method == "POST"){
        const userData = {title : req.body.title, content :req.body.content};
        try {
            const client = await connectDB;
            const db = client.db("forum");
            await db.collection('post').updateOne({_id : new ObjectId(req.body.id)}, 
                {$set : userData}
            )

            return res.redirect(302, '/list');
        }catch (error){
            return res.status(500).json("뭔가가 잘못됨: "+error);
        }
    }
    
    return res.status(500).json("이 반응이 아닌데");
}