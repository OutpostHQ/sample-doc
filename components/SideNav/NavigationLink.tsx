import { Block, Text } from '@cube-dev/ui-kit'
import NextLink from 'next/link'
export default function NavigationLink({ name }: { name: string }) {
  return (
    <Block padding="0">
      <NextLink href={`docs/${name}`}>
        <Text styles={{ padding: '5px 0 5px 0' }}>{name}</Text>
      </NextLink>
    </Block>
  )
}
