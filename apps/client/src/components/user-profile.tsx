import { Session } from 'next-auth/types'
import Image from 'next/image'

export default function UserProfile({ session }: { session: Session }) {
  const user = session.user
  const image = user.image ?? 'default-avatar.svg'
  return (
    <div className="overflow-auto text-left">
      <table className="table-auto border-separate border-spacing-3">
        <tbody>
          <tr>
            <td className="font-medium">Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td className="font-medium">Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
          <td className="font-medium">Picture</td>
            <td><Image src={image} width={100} height={100} alt="Profile image" className="rounded-lg"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}