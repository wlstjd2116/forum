'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(){
    let router = useRouter() // 클라이언트 컴포넌트 안에서만 사용 가능
    return(
        <button onClick={()=>{ router.prefetch('/detail/test')}}>버튼</button>
    )
}