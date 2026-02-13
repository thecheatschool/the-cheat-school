import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API_BASE_URL } from './api'
import { z } from 'zod'

export const notifyMeSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
})

export const submitNotifyMe = async (payload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/notify-me`, payload, {
      timeout: 120000,
    })
    return response.data
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to submit'
    throw new Error(errorMessage)
  }
}

export const useSubmitNotifyMe = () => {
  return useMutation({
    mutationFn: submitNotifyMe,
    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}
