import React from 'react'
import { auth } from '@/auth'

const Dashboard = async () => {
  const session = await auth()

  return (
    <div className="bg-main bg-opacity-30 min-h-screen w-full">

      <div className="max-w-screen-xl mx-auto py-6 p-4">
        <h1 className="text-2xl">Home Page</h1>
        <h2>{JSON.stringify(session)}</h2>

      </div>
    </div>
  )
}

export default Dashboard