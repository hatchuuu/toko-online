// store.ts
import { create } from 'zustand'

export type CreateUser = {
    name: string | null | undefined,
    email: string | null | undefined,
    role: string,
    setName: (name: string | null | undefined) => void,
    setEmail: (email: string | null | undefined) => void,
    setRole: (role: string) => void,
}

export const getUser = create<CreateUser>((set) => ({
    name: null,
    email: null,
    role: "",
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setRole: (role) => set({ role }),
}))
