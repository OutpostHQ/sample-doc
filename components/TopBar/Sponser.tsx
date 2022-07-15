import { HeartFilled } from '@ant-design/icons'
import { BreakpointsProvider, Button } from '@cube-dev/ui-kit'

export default function SponserBtn() {
  return (
    <BreakpointsProvider value={[768, 640]}>
      <Button
        icon={<HeartFilled style={{ color: 'rgba(172, 50, 60, 1)' }} />}
        type={'outline'}
        radius="0.5rem"
        paddingInline={['1rem', '0.5rem']}
      >
        Sponser
      </Button>
    </BreakpointsProvider>
  )
}
