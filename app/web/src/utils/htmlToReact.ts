import parse from 'html-react-parser'

export function htmlToReact(html: string | null | undefined) {
  if (!html) {
    return null
  }
  return parse(html)
}
