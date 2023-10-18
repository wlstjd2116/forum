export default function write(){
    return (
        <div>
            <h4>글 목록 불러오기</h4>
            <form action="/api/list" method="POST">
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}