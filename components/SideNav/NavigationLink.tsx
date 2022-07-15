import { Block, Text } from '@cube-dev/ui-kit'
import NextLink from 'next/link'
export default function NavigationLink({
  item,
}: {
  item: { name: string; pathname: string }
}) {
  return (
    <Block
      key={item.name}
      styles={{
        backgroundColor:
          typeof window != 'undefined' &&
          window.location.pathname.endsWith(item.pathname)
            ? '#primary.20'
            : 'initial',
        borderRadius: '10px',
      }}
    >
      <NextLink href={`/docs/${item.pathname}`}>
        <Block padding="8px auto 0 46px">
          <Text weight={400}>{item.name}</Text>
        </Block>
      </NextLink>
    </Block>
  )
}
// rewrite with AccordianItem
