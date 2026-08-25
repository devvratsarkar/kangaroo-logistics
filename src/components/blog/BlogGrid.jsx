import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { blogs } from '../../data/blogs.js'
import { blogCategories } from '../../data/blogSidebar.js'
import { getBlogPageRoute } from '../../routes/routes.js'
import BlogCard from './BlogCard.jsx'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '../ui/AllSVG.jsx'

const PAGE_SIZE = 9

export default function BlogGrid() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categorySlug = searchParams.get('category') || ''
  const [page, setPage] = useState(1)

  const activeCategory = blogCategories.find((item) => item.slug === categorySlug)

  const filteredBlogs = useMemo(() => {
    if (!activeCategory) return blogs
    return blogs.filter(
      (post) => post.category.toLowerCase() === activeCategory.label.toLowerCase(),
    )
  }, [activeCategory])

  useEffect(() => {
    setPage(1)
  }, [categorySlug])

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / PAGE_SIZE))

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return filteredBlogs.slice(start, start + PAGE_SIZE)
  }, [filteredBlogs, page])

  function goToPage(nextPage) {
    const clamped = Math.min(Math.max(nextPage, 1), totalPages)
    setPage(clamped)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function clearFilter() {
    setSearchParams({})
    setPage(1)
  }

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="custom_container">
        {activeCategory ? (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/10 bg-[#f7f9fa] px-4 py-3.5 sm:px-5">
            <p className="font-display text-[15px] text-muted">
              Showing posts in{' '}
              <span className="font-semibold text-primary">{activeCategory.label}</span>
            </p>
            <button
              type="button"
              onClick={clearFilter}
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 font-display text-[13px] font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <CloseIcon className="size-3.5" />
              Clear filter
            </button>
          </div>
        ) : null}

        {pageItems.length ? (
          <ul className="home-latest-blog-grid">
            {pageItems.map((post) => (
              <li key={post.id}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-[22px] border border-primary/10 bg-[#f7f9fa] px-6 py-12 text-center">
            <p className="font-display text-[18px] font-semibold text-primary">
              No posts in this category yet
            </p>
            <p className="mt-2 text-[15px] text-muted">
              Browse all blogs or choose another category from a post sidebar.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={clearFilter}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-[14px] font-medium text-white transition-colors hover:bg-primary/90"
              >
                <CloseIcon className="size-3.5" />
                Clear filter
              </button>
              <Link
                to={getBlogPageRoute()}
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-5 py-2.5 font-display text-[14px] font-medium text-primary transition-colors hover:border-primary"
              >
                View all blogs
              </Link>
            </div>
          </div>
        )}

        {totalPages > 1 ? (
          <nav
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
            aria-label="Blog pagination"
          >
            <button
              type="button"
              className="blog-page-nav-btn"
              aria-label="Previous page"
              disabled={page === 1}
              onClick={() => goToPage(page - 1)}
            >
              <ChevronLeftIcon className="size-4" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1
              const isActive = pageNumber === page
              return (
                <button
                  key={pageNumber}
                  type="button"
                  className={['blog-page-number-btn', isActive ? 'is-active' : ''].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => goToPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            })}

            <button
              type="button"
              className="blog-page-nav-btn"
              aria-label="Next page"
              disabled={page === totalPages}
              onClick={() => goToPage(page + 1)}
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </nav>
        ) : null}
      </div>
    </section>
  )
}
