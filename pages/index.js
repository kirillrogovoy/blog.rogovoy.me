import Head from 'next/head'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { posts } from '../post'

export default () => <div>
  <Layout>
    <Head>
      <title>Кирилл Роговой – блог</title>
    </Head>
    <PostList posts={posts} />
  </Layout>
</div>
