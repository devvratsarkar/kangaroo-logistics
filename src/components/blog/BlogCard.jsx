import { Link } from 'react-router-dom'
import { ArrowRightLongIcon } from '../ui/AllSVG.jsx'

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Link to={post.to} className="blog-card-thumb block">
        <figure className="blog-card-figure">
          <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" />
        </figure>
        <span className="blog-card-tag">{post.category}</span>
      </Link>

      <div className="blog-card-content">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-muted">
          <time dateTime={post.dateISO}>{post.date}</time>
          <span aria-hidden="true" className="text-primary/20">
            |
          </span>
          <span>By {post.author}</span>
        </div>

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
