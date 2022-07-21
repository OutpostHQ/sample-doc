import { CopySnippet, Space, tasty, Link } from '@cube-dev/ui-kit'

const BorderedClearLink = tasty(Link, {
  type: 'clear',
  styles: {
    border: '1px solid #primary.20',
    borderRadius: '8px',
  },
})
const BorderedCopySnippet = tasty(CopySnippet, {
  margin: '20px 0',
  style: {
    border: '1px solid rgba(20, 20, 70, 0.1)',
    borderRadius: '8px',
  },
})
const BorderedSpace = tasty(Space, {
  padding: 0,
  styles: {
    borderBottom: '1px solid rgba(20, 20, 70, 0.1)',
  },
})
export { BorderedClearLink, BorderedCopySnippet, BorderedSpace }
