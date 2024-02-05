export default function Page({ params }: { params: { slug: string } }) {

    {/*
        TODO:
        - check if this user (slug) even exists
        - display all their stats
        - if the current user is logged in let them make changes to this page
    */}

    return <div>{params.slug}</div>
  }