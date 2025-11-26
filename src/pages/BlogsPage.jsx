import React from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../services/api'
import { useGetAllBlogs } from '../services/useBlogsQueries'
import { ArrowRight } from 'lucide-react'
import Loader from '../components/global/Loader'
import ErrorDisplay from '../components/global/ErrorDisplay'

const BlogsPage = () => {
  const { data: blogs = [], isLoading, isError, error } = useGetAllBlogs()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <ErrorDisplay 
          heading="Failed to load blogs" 
          message={error?.message || 'Unable to fetch blogs. Please try again later.'}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl mt-19 font-primary font-bold text-foreground mb-4">
            Our Blogs
          </h1>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id || blog._id} 
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              {blog.mainImage && (
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={urlFor(blog.mainImage)} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-primary font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {blog.title}
                </h2>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-secondary mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{blog.author?.name || 'Anonymous'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Excerpt */}
                {blog.body && blog.body[0]?.children?.[0]?.text && (
                  <p className="text-muted-foreground font-secondary mb-6 line-clamp-3">
                    {blog.body[0].children[0].text}
                  </p>
                )}

                {/* Read More Button */}
                <Link 
                  to={`/blogs/${blog.slug.current || blog.slug}`}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-teritiary font-semibold px-6 py-3 rounded-md transition-all duration-300 group/btn"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-secondary text-lg">
              No blogs found. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogsPage