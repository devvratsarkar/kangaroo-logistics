import { latestBlogs } from '../../data/latestBlogs.js'
import SectionBadge from '../common/SectionBadge.jsx'
import BlogCard from '../blog/BlogCard.jsx'
import { TagIcon } from '../ui/AllSVG.jsx'

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
