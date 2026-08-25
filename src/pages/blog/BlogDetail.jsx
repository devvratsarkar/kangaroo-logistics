import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getBlogBySlug, blogs } from '../../data/blogs.js'
import { getBlogBody } from '../../data/blogBodies.js'
import { getBlogPageRoute, getHomePageRoute } from '../../routes/routes.js'
import SectionBadge from '../../components/common/SectionBadge.jsx'
import {
  ArrowLeftLongIcon,
  ArrowRightLongIcon,
  TagIcon,
} from '../../components/ui/AllSVG.jsx'
import BlogSidebar from '../../components/blog/BlogSidebar.jsx'
import BlogCommentForm from '../../components/blog/BlogCommentForm.jsx'

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = getBlogBySlug(slug)
  const body = getBlogBody(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return <Navigate to={getBlogPageRoute()} replace />
  }

  const currentIndex = blogs.findIndex((item) => item.slug === slug)
  const previousPost = currentIndex > 0 ? blogs[currentIndex - 1] : null
  const nextPost =
    currentIndex >= 0 && currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null

  return (
    <>
      <section className="services-page-hero relative overflow-hidden text-white">
        <img
          src={post.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="services-page-hero-overlay absolute inset-0" aria-hidden="true" />

        <div className="custom_container relative z-1 py-14 sm:py-16 lg:py-18">
          <nav aria-label="Breadcrumb" className="services-page-breadcrumb">
            <Link to={getHomePageRoute()}>Home</Link>
            <span aria-hidden="true">/</span>
            <Link to={getBlogPageRoute()}>Blogs</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Blog Details</span>
          </nav>

          <SectionBadge icon={TagIcon} tone="light">
            {post.category}
          </SectionBadge>

          <h1 className="mt-5 max-w-4xl font-display text-[28px] leading-[1.15] font-bold tracking-[-0.02em] sm:mt-6 sm:text-[38px] lg:text-[44px]">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-white/70 sm:text-[15px]">
            <span>By - {post.author}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={post.dateISO}>{post.date}</time>
            <span aria-hidden="true">•</span>
            <span>{post.category}</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="custom_container">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] xl:gap-10">
            <article>
              <div className="overflow-hidden rounded-[24px] border border-primary/10">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="aspect-16/9 w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <h2 className="mt-8 font-display text-[26px] leading-tight font-bold text-primary sm:text-[30px]">
                {post.title}
              </h2>

              <div className="blog-detail-content mt-6 space-y-5">
                {(body.length ? body : [post.excerpt]).map((paragraph) => (
                  <p key={paragraph.slice(0, 64)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 border-y border-primary/10 py-5 sm:flex-row sm:items-center sm:justify-between">
                {previousPost ? (
                  <Link
                    to={previousPost.to}
                    className="group inline-flex items-center gap-2 font-display text-[14px] font-medium text-primary"
                  >
                    <ArrowLeftLongIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
                    Previous Post
                  </Link>
                ) : (
                  <span />
                )}
                {nextPost ? (
                  <Link
                    to={nextPost.to}
                    className="group inline-flex items-center gap-2 font-display text-[14px] font-medium text-primary sm:ml-auto"
                  >
                    Next Post
                    <ArrowRightLongIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ) : null}
              </div>

              <BlogCommentForm postTitle={post.title} />
            </article>

            <BlogSidebar activeCategory={post.category} />
          </div>
        </div>
      </section>
    </>
  )
}
