import { signinFormSchema } from './lib/zod';
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from 'next-auth/providers/credentials'
import { compareSync } from "bcrypt-ts"

export const { handlers, auth, signIn, signOut } = NextAuth({
  
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },

      authorize: async (credentials) => {

        const validatedFields = signinFormSchema.safeParse(credentials)

        if (!validatedFields.success) { return null }

        const { email, password } = validatedFields.data

        const user = await prisma.user.findUnique({
          where: {
            email
          }
        })
        if (!user || !user.password) {
          throw new Error('No user found')
        }

        const isMatchPassword = compareSync(password, user.password)
        if (!isMatchPassword) {
          return null
        }
        return user

      }
    })
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggin = !!auth?.user

      const ProtectedRoutes = ['/dashboard', '/user', '/product']

      if (!isLoggin && ProtectedRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL('/login', nextUrl))
      }
      if (isLoggin && nextUrl.pathname.startsWith('/login')) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true
    },
    jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    session({ token, session }) {
      session.user.role = token.role
      session.user.id = token.sub
      return session
    }

  }
})