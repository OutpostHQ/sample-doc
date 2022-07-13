import styled from 'styled-components'
import { Card } from '@cube-dev/ui-kit'
export const StyledCard = styled(Card)`
  color: ${(p) => p.theme.primaryText};
  background-color: ${(p) => p.theme.secondaryBg};
  border-color: ${(p) => p.theme.borderColor};
`
