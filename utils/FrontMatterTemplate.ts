export type GenericTemplate = {
  type: 'generic' | 'doc'
  title: string
  description: string
  editlink: string
  toc: any[]
}

export type ComponentBeforeTemplate = {
  type: 'doc-component'
  id: number
  scope: 'usage' | 'props' | 'design'
}
export type ComponentAfterTemplate = ComponentBeforeTemplate & {
  title: string
  description: string
  editlink: string
  pkg: string
  source: string
  toc: any[]
}
export type BlogTemplate = {
  type: 'blog'
  author: string
  date: string
  title: string
  description: string
  editlink: string
  toc: any[]
}
