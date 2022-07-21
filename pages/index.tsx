import { Flex, Link } from '@cube-dev/ui-kit'

export default function TempHome() {
  return (
    <Flex justifyContent="space-evenly" alignItems="center" height="80vh">
      <Link to="/docs">Docs</Link>
      <Link to="/blog">Blog</Link>
    </Flex>
  )
}
