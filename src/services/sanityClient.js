import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_BACKEND_API || 'http://localhost:8080'

export const client = {
  fetch: async (query) => {
    // Not used anymore, but keeping for compatibility
    throw new Error('Use API calls instead')
  }
}

// API calls to Spring Boot backend
export const getAllBlogs = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/blogs`)
  return response.data.data // Extract data from ApiResponse wrapper
}

export const getBlogBySlug = async (slug) => {
  const response = await axios.get(`${API_BASE_URL}/api/blogs/${slug}`)
  return response.data.data
}

// Helper for images (Sanity image URLs)
export const urlFor = (source) => {
  if (!source?.asset?._ref) return ''
  
  const ref = source.asset._ref
  const [, id, dimensions, format] = ref.split('-')
  
  return `https://cdn.sanity.io/images/4x6wdy47/production/${id}-${dimensions}.${format}`
}