export default function write(){
    return (
        <div>
            <form action="/api/posting" method="POST">
                <input type="text" name="title"/>
                <textarea name="content"/>
                <button type="submit">글 작성</button>
            </form>
        </div>
    )
}