import { auth } from "auth"
import ClientExample from "@/components/client-example"
import { SessionProvider } from "next-auth/react"

export default async function ClientPage() {
  const session = await auth()
  if (session?.user) {
<<<<<<< HEAD
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
=======

>>>>>>> e1fb5b68ef663ba3c727449c342d1c375dac6245
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }

  return (
    <SessionProvider basePath={"/auth"} session={session}>
      <ClientExample />
    </SessionProvider>
  )
}
