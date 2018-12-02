import Link from 'next/link'

export default ({ posts }) => <div style={{margin: '0 auto'}}>
  <ul>
      {posts.map(post => (
        <li key={post.id} style={{marginBottom: '30px'}}>
            <Link href={`/${post.id}`}>
              <a className="postLink">{post.title}</a>
            </Link>
            <span className="postInfo">
              <span> — </span>
              {post.date}, <a href={post.fbLink}>обсуждение в Facebook</a>
            </span>
            <br />
            <span className="description">{post.description}</span>
        </li>
      ))}
  </ul>
  <style jsx>{`
    li {
      font-size: 20px;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: #d07070;
    }
    a:hover {
      color: #f08080;
    }
    a:visited {
      color: #bbb;
   }
    .postInfo {
        font-size: 14px;
    }
    .postInfo a {
      font-weight: normal;
    }
    .description {
        margin-top: 5px;
        font-size: 14px;
    }
  `}</style>
</div>
