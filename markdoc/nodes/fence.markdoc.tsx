import { CodeBlock } from '../../components'
import LiveEdit from '../../components/LiveEdit'

const ChooseCodeBlock = ({ content, language }) =>
  language == 'jsx' ? (
    <LiveEdit code={content} noInline={false}></LiveEdit>
  ) : (
    <CodeBlock language={language}>{content}</CodeBlock>
  )
export const fence = {
  render: ChooseCodeBlock,
  attributes: {
    content: { type: String },
    language: {
      type: String,
      description:
        'The programming language of the code block. Place it after the backticks.',
    },
  },
}

//cant apply prism theme on copysnippet
