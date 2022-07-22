import { Block, Button, Flex, Text } from '@cube-dev/ui-kit'
import { useScrollSpy } from '../hooks/use-scrollspy'

export function TableOfContents({ toc }) {
  const activeId = useScrollSpy(
    toc.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: '0% 0% -24% 0%',
    }
  )

  if (toc.length < 1) {
    return null
  }
  return (
    <>
      <Flex flow="column" alignItems="start" margin="50px 0">
        <Block padding="10px 30px" border="1bw left">
          <Text preset="h6">Contents</Text>
        </Block>
        {toc.map((id) => {
          return (
            <Button
              type="link"
              to={`#${id.id}`}
              outline="0"
              padding="10px 30px"
              fontWeight={activeId === id.id ? '600' : '400'}
              color={{
                hovered: activeId !== id.id ? '#primary' : '',
              }}
              border={(activeId === id.id ? '2bw' : '1bw') + ' left'}
            >
              {id.title}
            </Button>
          )
        })}
      </Flex>
    </>
  )
}
