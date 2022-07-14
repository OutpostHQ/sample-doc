import { Space } from '@cube-dev/ui-kit'
import NavigationLink from './NavigationLink'
export default function NavigationSection({
  sectionItems,
}: {
  sectionItems: string[]
}) {
  return (
    <Space flow="column" styles={{ paddingLeft: '20px', paddingTop: '10px' }}>
      {sectionItems.map((item) => (
        <NavigationLink name={item} />
      ))}
    </Space>
  )
}
