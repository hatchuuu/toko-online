// store.ts
import { create } from 'zustand'

export type CreateUser = {
    name: string | null | undefined,
    setName: (name: string | null | undefined) => void,
}

export const getUser = create<CreateUser>((set) => ({
    name: null,
    setName: (newName) => set(() => ({ name: newName })),
}))
