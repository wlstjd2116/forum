export default async function Posting(request, response){
    const date = new Date();
    const hours = date.getHours()
    const minutes = date.getHours()
    const second = date.getHours()

    const msg = "현재 시간은 " + "hours" + "시 " + hours + "분 " + second + "초 입니다."

    return response.status(200).json(msg);
}