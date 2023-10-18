export default function handler(request, response) {
    if(response.method == 'POST') {
        return response.status(200).json('처리 완료')
    }
}