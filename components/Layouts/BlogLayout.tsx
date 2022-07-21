import { TopBar } from '../TopBar'

const BlogLayout = ({ children, frontmatter }) => {
  return (
    <>
      {/* still need to make blog page layout*/}
      <TopBar
        setSideNavOpen={() => {}}
        sideNavOpen={false}
        versionSelector={false}
      />
      {children}
    </>
  )
}
export default BlogLayout
