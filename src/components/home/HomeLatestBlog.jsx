import { Link } from 'react-router-dom'
import { latestBlogs } from '../../data/latestBlogs.js'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon, TagIcon } from '../ui/AllSVG.jsx'

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Link to={post.to} className="blog-card-thumb block">
        <figure className="blog-card-figure">
          <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" />
        </figure>
        <span className="blog-card-tag">{post.category}</span>
      </Link>

      <div className="blog-card-content">
        <h3 className="blog-card-title">
          <Link to={post.to}>{post.title}</Link>
        </h3>
        <p className="blog-card-desc">{post.excerpt}</p>
        <div className="blog-card-btn">
          <Link to={post.to} className="blog-card-read">
            Read more
            <ArrowRightLongIcon className="size-4 shrink-0" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function HomeLatestBlog() {
  return (
    <section className="home-latest-blog-section" aria-label="Latest blog posts">
      <div className="custom_container relative">
        <div className="home-latest-blog-header">
          <SectionBadge icon={TagIcon} tone="soft">
            Latest Blog
          </SectionBadge>
          <h2 className="home-latest-blog-title">Read Our Latest Blogs</h2>
        </div>

        <ul className="home-latest-blog-grid">
          {latestBlogs.map((post) => (
            <li key={post.id}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
