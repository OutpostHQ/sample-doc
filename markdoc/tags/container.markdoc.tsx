import { Flex } from '@cube-dev/ui-kit'

function Container({ children }) {
  return (
    <Flex border radius="10px" paddingInline="1rem" gap="1rem" margin="20px 0">
      {children}
    </Flex>
  )
}
export default {
  render: Container,
}
