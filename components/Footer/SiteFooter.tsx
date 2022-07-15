import { CopyrightCircleOutlined } from '@ant-design/icons'
import { BreakpointsProvider, Flex, Text } from '@cube-dev/ui-kit'

export const SiteFooter = () => {
  return (
    <BreakpointsProvider value={[1200, 900]}>
      <Flex
        justifyContent="space-between"
        margin="auto"
        padding="25px 5%"
        alignItems="center"
        height="144px"
        flow={['row', , 'column']}
      >
        <Text weight={'500'}>
          Built by <Text weight={'700'}>Outpost</Text>
        </Text>
        <Text display={['initial', , 'none']} weight="500">
          Copyright <CopyrightCircleOutlined /> 2022 Outpost Innovations, Inc. /
          <Text> Trademark Policy</Text>
        </Text>
        <Text display={['none', , 'initial']}>
          Copyright <CopyrightCircleOutlined /> 2022 Outpost. All rights
          reserved.
        </Text>
        <Text display={['none', , 'initial']} weight="500">
          Trademark Policy
        </Text>
      </Flex>
    </BreakpointsProvider>
  )
}
