
import NextAuth from "next-auth"
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({}) {
      return "/admin"
    },
    async jwt({ token, account }) {
      console.log("PROFILE:", account?.id_token)

      const response = await fetch(
        `${process.env.API_URL}/auth/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: account?.id_token,
          }),
        }
      )
      const data = await response.json()

      token.backendAccessToken = data.accessToken

      return token
    },
  },
})