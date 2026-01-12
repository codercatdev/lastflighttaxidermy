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
  grid_items?: GridItem[]
  posts?: Post[]
  projects?: Project[]
  testimonials?: Testimonial[]
  col_number?: 'two' | 'three'
  posts_number?: number
  projects_number?: number
  layout_style?: 'mosaic' | 'tiles'
  view_all_label?: string
  view_all_url?: string
  is_numbered?: boolean
  form_id?: string
  form_action?: string
  form_fields?: FormField[]
  submit_label?: string
}

export interface Project {
  _id: string
  _type: 'project'
  title?: string
  date?: string
  thumb_image?: SanityImage
  thumb_image_alt?: string
  stackbit_url_path?: string
}

export interface Post {
  _id: string
  _type: 'post'
  title?: string
  subtitle?: string
  date?: string
  thumb_image?: SanityImage
  thumb_image_alt?: string
  image?: SanityImage
  image_alt?: string
  excerpt?: string
  content?: string
  stackbit_url_path?: string
}

export interface Testimonial {
  _id?: string
  _type?: 'testimonial'
  content?: string
  author?: string
  avatar?: SanityImage
  avatar_alt?: string
}

export interface GridItem {
  _id?: string
  title?: string
  content?: string
  image?: SanityImage
  image_alt?: string
  actions?: Action[]
}

export interface FormField {
  _id?: string
  name?: string
  label?: string
  input_type?: 'text' | 'email' | 'tel' | 'number' | 'search' | 'url' | 'password' | 'textarea' | 'select' | 'checkbox'
  is_required?: boolean
  default_value?: string
  options?: string[]
}

export interface Page {
  _id: string
  _type: 'page' | 'post' | 'project' | 'blog' | 'portfolio' | 'advanced'
  title?: string
  subtitle?: string
  image?: SanityImage
  image_alt?: string
  content?: string
  date?: string
  layout_style?: 'mosaic' | 'tiles'
  col_number?: 'two' | 'three'
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
