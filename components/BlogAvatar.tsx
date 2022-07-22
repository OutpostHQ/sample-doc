import { Avatar, Flex } from '@cube-dev/ui-kit'
// export function SingleAvatar({ Writer }: { Writer: string }) {
//   return <Avatar>{Writer}</Avatar>
// }
export function UserAvatar({ Writers }: { Writers: string[] }) {
  const avatars = Writers.map((writer) => {
    const [firstName, lastName] = writer.split(' ')
    return (firstName[0] + lastName[0]).toUpperCase()
  }).map((shortName) => <Avatar>{shortName}</Avatar>)
  return (
    <Flex gap="-50px" justifyContent="flex-start" alignItems="center">
      {avatars}
    </Flex>
  )
}
