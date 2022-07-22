import { Select, Item } from '@cube-dev/ui-kit'
import { useState } from 'react'

const VERSIONS = ['V0.0.1', 'V0.0.2', 'V0.5.0', 'V0.5.1']

export default function VersionSelect() {
  const [selectedversion, setSelectedVersion] = useState<any>(VERSIONS[0])
  return (
    <Select
      selectedKey={selectedversion}
      radius="20px"
      size={'small'}
      onSelectionChange={(e) => setSelectedVersion(e)}
    >
      {VERSIONS.map((version) => (
        <Item key={version}>{version}</Item>
      ))}
    </Select>
  )
}
