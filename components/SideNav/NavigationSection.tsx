import { Space } from '@cube-dev/ui-kit'
import NavigationLink from './NavigationLink'
export default function NavigationSection({
  sectionItems,
}: {
  sectionItems: { name: string; pathname: string }[]
}) {
  return (
    <Space flow="column" gap="0.5rem">
      {sectionItems.map((item) => (
        <NavigationLink item={item} key={item.name} />
      ))}
    </Space>
  )
}
//do with accordian
