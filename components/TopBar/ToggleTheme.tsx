import { Button } from '@cube-dev/ui-kit'
import DarkModeIcon from '../icons/DarkModeIcon'

export default function ToggleTheme() {
  return (
    <Button type="clear" aria-label="Change theme" size={'small'}>
      <DarkModeIcon />
    </Button>
  )
}
