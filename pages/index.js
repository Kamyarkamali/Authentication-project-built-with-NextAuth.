import HomePage from "@/components/templates/HomePage/HomePage"
import { getSession } from "next-auth/react"

export default function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  )
}


export async function getServerSideProps({req}){
  const session=await getSession({req})

  if(!session){
    return{
      redirect:{
        destination:"/singin",
        permanent:false
      }
    }
  }

  return {
    props:{}
  }
}
