import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

//Initially, we are using the Sanity React SDK directly. As a fallback, we have a Spring Boot backend. 
//This setup will be used in `/blogs` and `/events`.
export const USE_BACKEND = import.meta.env.VITE_USE_BACKEND || 'springboot'
export const API_BASE_URL = import.meta.env.VITE_BACKEND_API || 'http://localhost:8080'

console.log('🔧 Backend Mode:', USE_BACKEND)
console.log('🌐 API URL:', API_BASE_URL)

export const sanityClient = createClient({
  projectId: '4x6wdy47',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

export const builder = imageUrlBuilder(sanityClient)

//image builder
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