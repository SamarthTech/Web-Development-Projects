import { CATEGORIES } from '../lib/category'

function Post({ post }) {
  return (
    <li className="post">
      <p>
        {post.text}
        <a
          className="source"
          href={post.source}
          target={'_blank'}
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find(cat => cat.name === post.category)
            .color
        }}
      >
        {post.category}
      </span>
      <div className="vote-buttons" onClick={() => alert('Not implemented')}>
        <button>
          👍 <strong>{post.votesInteresting}</strong>
        </button>
        <button>
          🤯 <strong>{post.votesMindblowing}</strong>
        </button>
        <button>
          ⛔️ <strong>{post.votesFalse}</strong>
        </button>
      </div>
    </li>
  )
}

export default Post
