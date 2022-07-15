import { Flex, Text } from '@cube-dev/ui-kit'

export const SiteFooter = () => {
  return (
    <Flex
      justifyContent="space-between"
      padding="15px 30px"
      alignItems="center"
      height="100%"
    >
      <Text>
        Built by <Text weight={'bold'}>Outpost</Text>
      </Text>
      <Text>Copyright 2022 Outpost Innovations, Inc. / Trademark Policy</Text>
    </Flex>
  )
}
