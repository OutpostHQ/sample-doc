import React from 'react'
import { PrismTheme } from '../utils/prismTheme'
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
