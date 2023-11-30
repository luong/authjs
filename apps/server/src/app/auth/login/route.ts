import { findUser } from '@/config/db'
import { NextRequest } from 'next/server'

interface LoginBodyRequest {
  username: string
  password: string
}

export async function POST(request: NextRequest) {
  const body = await request.json() as LoginBodyRequest
  const user = findUser(body.username, body.password)
  const data = {
    statusCode: 200,
    data: user
  }
  return Response.json(data)
}