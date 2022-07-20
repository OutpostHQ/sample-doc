import { CopySnippet } from '@cube-dev/ui-kit'
import React from 'react'
import { BorderedCopySnippet } from './tasty'

export function CodeBlock({ children, language }) {
  return (
    <BorderedCopySnippet
      code={children}
      language={language}
      prefix={language === 'bash' && '$'}
    />
  )
}
