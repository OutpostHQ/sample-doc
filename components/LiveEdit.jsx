import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import { Button, CopySnippet, Flex, Space } from '@cube-dev/ui-kit'
import { BorderedBlock, SecondaryBlock } from './tasty'
import { PrismTheme } from '../utils/prismTheme'
import * as Library from '@cube-dev/ui-kit'
const scope = { ...Library }
const LiveEdit = ({ noInline = false, code, isEditable = false }) => {
  if (isEditable) return <CopySnippet language="javascript" code={code} />
  return (
    <LiveProvider code={code.trim()} noInline={noInline} scope={scope}>
      <Flex flow="column">
        <BorderedBlock padding={['30px 20px', '20px 15px', '10px']}>
          <LivePreview />
        </BorderedBlock>
        <LiveError
          style={{
            padding: '1em',
            overflowX: 'auto',
            color: 'white',
            backgroundColor: '#f66',
            borderRadius: '10px',
          }}
        />
        <BorderedBlock>
          <LiveEditor
            style={{
              fontFamily: 'Inter',
              background: '#primary',
              borderRadius: '10px',
            }}
            //error in tsx
            theme={PrismTheme}
          >
            Hello
          </LiveEditor>
        </BorderedBlock>
      </Flex>
    </LiveProvider>
  )
}

export default LiveEdit

//change theme in utils/PrismTheme.js
