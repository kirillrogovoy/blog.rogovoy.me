import { renderPost } from '../post'
import text from '../posts/3-knigi.md'

const id = '3-knigi'
export default function() {
  return renderPost(id, text)
}
