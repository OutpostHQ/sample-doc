import { HeartFilled } from '@ant-design/icons'
import { Button } from '@cube-dev/ui-kit'

export default function SponserBtn() {
  return (
    <Button
      icon={<HeartFilled style={{ color: 'rgba(172, 50, 60, 1)' }} />}
      gap="5px"
      type={'outline'}
      size="default"
    >
      Sponser
    </Button>
  )
}
