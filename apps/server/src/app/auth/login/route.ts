import { NextRequest } from 'next/server'

interface LoginBodyRequest {
  email: string
  password: string
}

export async function POST(request: NextRequest) {
  const body = await request.json() as LoginBodyRequest
  const user = {
    name: 'Luong',
    email: 'luonglev@gmail.com',
    picture: ''
  }
  const data = {
    statusCode: 200,
    data: user
  }
  return Response.json(data)
}