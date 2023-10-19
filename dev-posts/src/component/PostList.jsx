import { initialPosts } from '../lib/category'
import Post from './Post'

function PostList() {
  const posts = initialPosts

  return (
    <section>
      <ul className="posts-list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
      <p style={{ opacity: '50%' }}>
        There are {posts.length} posts in the database. Add your own!
      </p>
    </section>
  )
}

export default PostList
