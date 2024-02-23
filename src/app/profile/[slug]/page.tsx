"use client" 
import { useSession } from "next-auth/react"

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const { data: session } = useSession()
  
  var user_is_profile = (session && session.user.email) ? (session.user.email == params.slug) : false;
  if (user_is_profile) {
    return (
      <div>
        write privileged user page
      </div>
    );
  }
  else {
    return (
      <div>
        read-only user page
      </div>
    );
  }
}
