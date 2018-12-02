import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import Separator from './separator'
import { getRandomPosts } from '../post'

export default function ({ meta, content }) {
  return <Layout>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.tags.join(',')} />
    </Head>
    <Link href="/">
      <a style={{color: '#777'}}>Назад</a>
    </Link>
    <h1 style={{color: '#d07070'}}>
      {meta.title}
    </h1>

    <div className="markdown" dangerouslySetInnerHTML={{__html: content}}></div>

    <Separator />

    <div>
      <h3>Другие статьи:</h3>
      <PostList posts={getRandomPosts(3).filter(post => post.id !== meta.id)} />
    </div>

    <style jsx global>{`
      .markdown {
      }
    `}</style>
  </Layout>
}
