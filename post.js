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
    id: 'chem-ukraina',
    date: '03.11.2018',
    title: 'Chem Ukraina',
    description: 'Chem i pochemu',
    tags: ['a', 'b'],
    fbLink: 'http://example.com',
  },
]

export function renderPost(id, content) {
  const meta = posts.find(a => a.id === id)
  return <Post meta={meta} content={content} />
}

export function getRandomPosts(number) {
  return shuffle(posts).slice(0, 3)
}

function shuffle(b) {
  const a = [...b]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
