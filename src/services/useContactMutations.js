import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API_BASE_URL } from './api'
import { z } from 'zod'

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  college: z.string().min(2, 'College/University is required'),
  yearOfStudy: z.string().min(1, 'Please select your year of study'),
  branch: z.string().min(1, 'Please select your branch'),
  hearAboutUs: z.string().min(1, 'Please tell us how you heard about us'),
  hearAboutUsOther: z.string().optional(),
});

export const submitContact = async (payload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/contact`, payload, {
      timeout: 120000, // 2 minute timeout
    })
    return response.data
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to send message'
    throw new Error(errorMessage)
  }
}

export const useSubmitContact = () => {
  return useMutation({
    mutationFn: submitContact,
    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}
