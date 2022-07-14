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
          window.location.pathname.includes(item.pathname) //better than endsWith since path can have tabs or sections
            ? '#primary.20'
            : 'initial',
        borderRadius: '10px',
        padding: '5px 10px',
      }}
    >
      <NextLink href={`/docs/${item.pathname}`}>
        <Text>{item.name}</Text>
      </NextLink>
    </Block>
  )
}
// rewrite with AccordianItem
