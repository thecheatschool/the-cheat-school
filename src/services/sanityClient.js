import axios from 'axios'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

//Initially, we are using the Sanity React SDK directly. As a fallback, we have a Spring Boot backend. 
//This setup will be used in `/blogs`.

const USE_BACKEND = import.meta.env.VITE_USE_BACKEND || 'springboot'
const API_BASE_URL = import.meta.env.VITE_BACKEND_API || 'http://localhost:8080'

console.log('🔧 Backend Mode:', USE_BACKEND)
console.log('🌐 API URL:', API_BASE_URL)

const sanityClient = createClient({
  projectId: '4x6wdy47',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(sanityClient)

export const getAllBlogs = async () => {
  if (USE_BACKEND === 'sanity') {
    console.log('📡 Fetching all blogs from SANITY DIRECT API')
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author->{name},
      body
    }`
    const data = await sanityClient.fetch(query)
    console.log('✅ Sanity returned:', data.length, 'blogs')
    return data
  } else {
    console.log('📡 Fetching all blogs from SPRING BOOT API:', `${API_BASE_URL}/api/blogs`)
    const response = await axios.get(`${API_BASE_URL}/api/blogs`)
    console.log('✅ Spring Boot returned:', response.data.data.length, 'blogs')
    return response.data.data
  }
}

export const getBlogBySlug = async (slug) => {
  if (USE_BACKEND === 'sanity') {
    console.log('📡 Fetching blog by slug from SANITY DIRECT API:', slug)
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author->{name},
      body
    }`
    const data = await sanityClient.fetch(query, { slug })
    console.log('✅ Sanity returned blog:', data?.title)
    return data
  } else {
    console.log('📡 Fetching blog by slug from SPRING BOOT API:', `${API_BASE_URL}/api/blogs/${slug}`)
    const response = await axios.get(`${API_BASE_URL}/api/blogs/${slug}`)
    console.log('✅ Spring Boot returned blog:', response.data.data?.title)
    return response.data.data
  }
}

export const urlFor = (source) => {
  if (USE_BACKEND === 'sanity') {
    console.log('🖼️ Building image URL using SANITY image builder')
    return builder.image(source).url()
  } else {
    console.log('🖼️ Building image URL from SPRING BOOT data')
    if (!source?.asset?._ref) return ''
    const ref = source.asset._ref
    const [, id, dimensions, format] = ref.split('-')
    return `https://cdn.sanity.io/images/4x6wdy47/production/${id}-${dimensions}.${format}`
  }
}
export const client = sanityClient