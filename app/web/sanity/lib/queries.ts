import { groq } from 'next-sanity'

// Get all pages for static paths
export const allPagesQuery = groq`*[_type in ["page", "post", "project", "blog", "portfolio", "advanced"] && defined(stackbit_url_path)]{
  "slug": stackbit_url_path
}`

// Get page by slug
export const pageBySlugQuery = groq`*[_type in ["page", "post", "project", "blog", "portfolio", "advanced"] && stackbit_url_path == $slug][0]{
  _id,
  _type,
  title,
  subtitle,
  image,
  image_alt,
  content,
  seo,
  stackbit_url_path,
  sections[]{
    _type == "reference" => @->,
    _type != "reference" => @
  }{
    _id,
    _type,
    section_id,
    title,
    subtitle,
    content,
    image,
    image_alt,
    actions[]{
      _type == "reference" => @->,
      _type != "reference" => @
    },
    items[]{
      _type == "reference" => @->,
      _type != "reference" => @
    },
    grid_items[]{
      _type == "reference" => @->,
      _type != "reference" => @
    },
    posts[]{
      _type == "reference" => @->,
      _type != "reference" => @
    },
    projects[]{
      _type == "reference" => @->,
      _type != "reference" => @
    },
    testimonials[]{
      _type == "reference" => @->,
      _type != "reference" => @
    }
  }
}`

// Get site config
export const configQuery = groq`*[_type == "config"][0]`

// Get all pages for navigation
export const allPagesForNavQuery = groq`*[_type in ["page", "post", "project", "blog", "portfolio", "advanced"] && defined(stackbit_url_path)]{
  _id,
  title,
  "url": stackbit_url_path
}`
