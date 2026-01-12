export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface Action {
  _type?: 'action'
  _id?: string
  label?: string
  url?: string
  style?: 'link' | 'button' | 'icon'
  icon?: string
  new_window?: boolean
  no_follow?: boolean
}

export interface Header {
  _type: 'header'
  title?: string
  logo_img?: SanityImage
  logo_img_alt?: string
  has_nav?: boolean
  nav_links?: Action[]
}

export interface Footer {
  _type: 'footer'
  content?: string
  links?: Action[]
  has_social?: boolean
  social_links?: Action[]
}

export interface Config {
  _id: string
  _type: 'config'
  title?: string
  domain?: string
  favicon?: SanityImage
  color_scheme?: 'light' | 'dark'
  accent_color?: 'pink' | 'green' | 'blue' | 'violet' | 'yellow'
  header?: Header
  footer?: Footer
}

export interface Section {
  _id: string
  _type: string
  section_id?: string
  title?: string
  subtitle?: string
  content?: string
  image?: SanityImage
  image_alt?: string
  actions?: Action[]
  items?: unknown[]
  grid_items?: unknown[]
  posts?: unknown[]
  projects?: unknown[]
  testimonials?: unknown[]
}

export interface Page {
  _id: string
  _type: 'page' | 'post' | 'project' | 'blog' | 'portfolio' | 'advanced'
  title?: string
  subtitle?: string
  image?: SanityImage
  image_alt?: string
  content?: string
  seo?: {
    title?: string
    description?: string
    robots?: string[]
    extra?: Array<{
      name?: string
      value?: string
      keyName?: string
      relativeUrl?: boolean
    }>
  }
  stackbit_url_path?: string
  sections?: Section[]
  hide_title?: boolean
}
