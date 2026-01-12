import { marked } from 'marked'
import { htmlToReact } from './htmlToReact'

export async function markdownify(markdown: string) {
  if (!markdown) {
    return null
  }
  return htmlToReact(await marked(markdown))
}
