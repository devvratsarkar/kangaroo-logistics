import { Link } from 'react-router-dom'
import { blogCategories, popularPosts } from '../../data/blogSidebar.js'
import { getBlogPageRoute } from '../../routes/routes.js'

export default function BlogSidebar({ activeCategory }) {
  return (
    <aside className="blog-sidebar space-y-6">
      <div className="blog-sidebar-card">
        <h2 className="blog-sidebar-title">Categories</h2>
        <ul className="mt-4 space-y-1">
          {blogCategories.map((category) => {
            const isActive = activeCategory === category.label
            return (
              <li key={category.slug}>
                <Link
                  to={`${getBlogPageRoute()}?category=${category.slug}`}
                  className={[
                    'blog-sidebar-category',
                    isActive ? 'is-active' : '',
                  ].join(' ')}
                >
                  <span>{category.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="blog-sidebar-card">
        <h2 className="blog-sidebar-title">Popular Post</h2>
        <ul className="mt-5 space-y-4">
          {popularPosts.map((post) => (
            <li key={post.slug}>
              <Link to={post.to} className="blog-popular-post group">
                <span className="blog-popular-post-thumb">
                  <img src={post.image} alt="" loading="lazy" decoding="async" />
                </span>
                <span className="min-w-0">
                  <span className="blog-popular-post-cat">{post.category}</span>
                  <span className="blog-popular-post-title">{post.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
