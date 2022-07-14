import { Select, Item } from '@cube-dev/ui-kit'

const VERSIONS = ['V0.0.1', 'V0.0.2', 'V0.5.0', 'V0.5.1']

export default function VersionSelect() {
  return (
    <Select selectedKey="V0.5.1" radius="20px" size={'small'}>
      {VERSIONS.map((version) => (
        <Item key={version}>{version}</Item>
      ))}
    </Select>
  )
}
