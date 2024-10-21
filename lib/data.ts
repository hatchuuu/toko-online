import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export const getDataUser = async () => {
    const session = await auth()

    if (!session || !session.user || session.user.role !== 'admin') {
        redirect('/dashboard')
    }
    if (session.user.role === 'admin') {
        try {
            const data = await prisma.user.findMany()
            return data
        } catch (error) {
            console.log({ message: error })
        }
    }
}
export const getDataProduct = async () => {
    const session = await auth()

    if (!session || !session.user) {
        redirect('/dashboard')
    }
    if (session.user.role === 'admin') {
        try {
            const data = await prisma.product.findMany({
                include: {
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            })
            return data
        } catch (error) {
            console.log({ message: error })
        }
    } else {
        try {
            const data = await prisma.product.findMany({
                where: {
                    userId: session.user.id
                },
                include: {
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            })
            return data
        } catch (error) {
            console.log({ message: error })
        }

    }
}