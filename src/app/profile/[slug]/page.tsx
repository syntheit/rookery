"use client" 
import { useSession } from "next-auth/react"

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const { data: session } = useSession()
  
  var user_is_profile = (session && session.user.email) ? (session.user.email == params.slug) : false;

  return (
    <main>
      <h1>{params.slug}</h1>
      <p>about me</p> {user_is_profile &&
                        <button>
                          edit
                        </button>
                      } 
    </main>
  )
}
