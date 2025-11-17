import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllBlogs, urlFor } from '../services/sanityClient'

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllBlogs()
      .then((data) => {
        setBlogs(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err)
        setError('Failed to load blogs')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading blogs...</div>
  }

  if (error) {
    return <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>{error}</div>
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Our Blogs</h1>
      
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {blogs.map((blog) => (
          <article key={blog.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            {blog.mainImage && (
              <img 
                src={urlFor(blog.mainImage)} 
                alt={blog.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '1rem' }}>
              <h2>{blog.title}</h2>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                By {blog.author?.name || 'Anonymous'} • {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
              {blog.body && blog.body[0]?.children?.[0]?.text && (
                <p style={{ marginTop: '1rem' }}>
                  {blog.body[0].children[0].text.slice(0, 150)}...
                </p>
              )}
              
              <Link 
                to={`/blogs/${blog.slug.current}`}
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  padding: '0.5rem 1.5rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontWeight: 'bold'
                }}
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogsPage