import { CopySnippet } from '@cube-dev/ui-kit'
import React from 'react'

export function CodeBlock({ children, language }) {
  return (
    <CopySnippet
      code={children}
      language={language}
      prefix={language === 'bash' && '$'}
      margin="20px 0"
    />
  )
}
