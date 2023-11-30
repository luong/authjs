interface User {
  id: number
  name: string
  email: string
  password: string
  image?: string
}

export function findUser(email: string, password: string): User | null {
  for (const user of users) {
    if (user.email === email && user.password === password) {
      const newUser = { ...user }
      newUser.password = ''
      return user
    }
  }
  return null
}

const users: Array<User> = [
  {
    id: 1,
    name: 'Lev',
    email: 'luonglev@gmail.com',
    password: '12345678',
    image: 'https://avatars.githubusercontent.com/u/887066?v=4&w=256&q=75'
  },
  {
    id: 2,
    name: 'Fox',
    email: 'luongfox@gmail.com',
    password: '12345678',
    image: 'https://avatars.githubusercontent.com/u/887066?v=4&w=256&q=75'
  }
]