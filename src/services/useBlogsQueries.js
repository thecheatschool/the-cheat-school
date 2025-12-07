import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_BASE_URL, sanityClient, USE_BACKEND } from './api';

const getAllBlogs = async () => {
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

const getBlogBySlug = async (slug) => {
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

//getting all blogs in /blogs
export const useGetAllBlogs = () => {
  return useQuery({
    queryKey: ['blogs', 'list'],
    queryFn: getAllBlogs,
    staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Cache persists for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when window focuses
    refetchOnMount: true, // Refetch when component mounts
    refetchOnReconnect: true, // Refetch when internet reconnects
    retry: 3, // Retry failed requests 3 times
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  });
};

//getting blogs by slug in /blogs/:slug
export const useGetBlogBySlug = (slug) => {
  return useQuery({
    queryKey: ['blogs', 'detail', slug],
    queryFn: () => getBlogBySlug(slug),
    enabled: !!slug, // Only run if slug exists
    staleTime: 10 * 60 * 1000, // Data stays fresh for 10 minutes
    gcTime: 30 * 60 * 1000, // Cache persists for 30 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};