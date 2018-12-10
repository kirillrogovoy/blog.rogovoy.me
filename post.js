import Post from './components/post'

export const posts = [
  {
    id: '3-knigi',
    date: '09.11.2018',
    title: '3 книги прочитать всем',
    description: 'Развивайся епта',
    tags: ['a', 'b'],
    fbLink: 'http://example.com',
  },
  {
    id: 'rabota-za-kompiuterom-stoya',
    date: '05.12.2018',
    title: 'Работать за компьютером стоя: зачем и как',
    description: 'Почему работать сидя – вредно и какие есть решения проблемы',
    tags: [],
    fbLink: '#',
    isDraft: true,
  },
]

export function renderPost(id, content) {
  const meta = posts.find(a => a.id === id)
  return <Post meta={meta} content={content} />
}

export function getAllPosts() {
  return posts.filter(post => !post.isDraft)
}

export function getRandomPosts(number) {
  return shuffle(getAllPosts()).slice(0, number)
}

function shuffle(b) {
  const a = [...b]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
