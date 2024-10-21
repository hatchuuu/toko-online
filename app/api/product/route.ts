import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

const getUser = async () => {
    const session = await auth()
    const userId = session?.user.id ?? ""
    return { userId }
}

export async function POST(request: Request) {
    const { userId } = await getUser()
    const body = await request.json()
    const { name, price } = body
    const product = await prisma.product.create({
        data: {
            name,
            price,
            userId: userId
        }
    })
    if (product) return Response.json({ isCreated: true, status: 200 })
    return Response.json({ isCreated: false, status: 400 })
}


