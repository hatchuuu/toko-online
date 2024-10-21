import { type DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { AdapterUser as DefaultAdapterUser } from "@auth/core/adapters";

declare module "next-auth" {
    interface User {
        role: string
    }
    interface Session {
        user: User & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        sub: string
        role: string
    }
}

declare module "@auth/core/adapters" {
    interface AdapterUser extends DefaultAdapterUser {
        role: string; // Menambahkan properti role pada AdapterUser
    }
}