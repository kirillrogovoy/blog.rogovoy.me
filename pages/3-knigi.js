import { renderPost } from '../post'
import text from '../articles/3-knigi.md'

const id = '3-knigi'
export default function() {
  return renderPost(id, text)
}
