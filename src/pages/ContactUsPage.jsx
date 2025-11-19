import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, Phone, Loader2, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../utils/google-form-redirect';

// Zod validation schema
const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  college: z.string().min(2, 'College/University is required'),
  yearOfStudy: z.string().min(1, 'Please select your year of study'),
  branch: z.string().min(1, 'Please select your branch'),
  hearAboutUs: z.string().min(1, 'Please tell us how you heard about us'),
  hearAboutUsOther: z.string().optional(),
});

const ContactUsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      college: '',
      yearOfStudy: '',
      branch: '',
      hearAboutUs: '',
      hearAboutUsOther: '',
    },
  });

  const hearAboutUsValue = watch('hearAboutUs');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(120000), // 2 minute timeout for cold start
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.', {
          duration: 5000,
          style: {
            background: '#10B981',
            color: '#fff',
            fontWeight: '600',
          },
        });
        reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to send message. Please try again.', {
          duration: 5000,
        });
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        toast.error('Request timeout. Please try again or contact us directly.', {
          duration: 6000,
        });
      } else {
        toast.error('Network error. Please check your connection and try again.', {
          duration: 5000,
        });
      }
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      
      <div className="max-w-6xl mx-auto p-6 mt-24 grid grid-cols-1 md:grid-cols-2 gap-[90px]">
        
        {/* LEFT – FORM */}
        <div>
          {/* Google Form Registration Button */}
          <div className="mb-8">
            <a
              href={`${GOOGLE_FORM_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border-2 border-black shadow-md hover:shadow-xl transition-all duration-300 rounded-sm p-4 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-primary text-secondary mb-1">
                    Register via Google Forms
                  </h3>
                  <p className="text-sm font-secondary text-gray-600">
                    Quick registration (opens in new tab)
                  </p>
                </div>
                <ExternalLink className="text-primary group-hover:translate-x-1 transition-transform" size={24} />
              </div>
            </a>
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-muted-foreground font-secondary font-semibold">OR</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/30 backdrop-blur-lg p-6 shadow-md rounded-sm border border-black"
          >
            <h2 className="text-center text-primary text-3xl font-primary mb-6">
              REGISTER HERE
            </h2>

            {/* Full Name */}
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name *"
                {...register('fullName')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1 font-secondary">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <input
                type="email"
                placeholder="Email ID *"
                {...register('email')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-secondary">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-5">
              <input
                type="tel"
                placeholder="Phone Number (WhatsApp Preferred) *"
                {...register('phoneNumber')}
                maxLength={10}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1 font-secondary">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* College/University */}
            <div className="mb-5">
              <input
                type="text"
                placeholder="College/University *"
                {...register('college')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.college && (
                <p className="text-red-500 text-sm mt-1 font-secondary">{errors.college.message}</p>
              )}
            </div>

            {/* Year of Study */}
            <div className="mb-5">
              <select
                {...register('yearOfStudy')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="">Year Of Study *</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
              {errors.yearOfStudy && (
                <p className="text-red-500 text-sm mt-1 font-secondary">{errors.yearOfStudy.message}</p>
              )}
            </div>

            {/* Branch */}
            <div className="mb-5">
              <select
                {...register('branch')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="">Branch *</option>
                <option value="Civil">Civil</option>
                <option value="Mechanical">Mechanical</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="AI ML/DS">AI ML/DS</option>
              </select>
              {errors.branch && (
                <p className="text-red-500 text-sm mt-1 font-secondary">{errors.branch.message}</p>
              )}
            </div>

            {/* How did you hear about us */}
            <div className="mb-5">
              <select
                {...register('hearAboutUs')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="">How did you hear about us? *</option>
                <option value="WhatsApp Group">WhatsApp Group</option>
                <option value="College">College</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend / Referral">Friend / Referral</option>
                <option value="Other">Other</option>
              </select>
              {errors.hearAboutUs && (
                <p className="text-red-500 text-sm mt-1 font-secondary">{errors.hearAboutUs.message}</p>
              )}
            </div>

            {/* Other (conditional) */}
            {hearAboutUsValue === 'Other' && (
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Please specify..."
                  {...register('hearAboutUsOther')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white border font-primary border-black px-5 py-3 rounded-xl hover:-translate-y-1 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending... (may take up to 60s)
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>

        {/* RIGHT – CONTACT INFO + MAP */}
        <div className="flex flex-col gap-6">
          
          {/* CONTACT INFO */}
          <div className="bg-white/30 backdrop-blur-lg p-6 rounded-sm border border-black shadow-md">
            <h3 className="font-primary text-primary text-2xl flex items-center gap-2 mb-3">
              <Phone size={24} /> Phone
            </h3>
            <p className="text-lg font-teritiary mb-6">+91 99895 20942</p>
            
            <h3 className="font-primary text-primary text-2xl flex items-center gap-2 mb-3">
              <Mail size={24} /> Email
            </h3>
            <p className="text-lg font-teritiary">team@thecheatschool.com</p>
          </div>

          {/* MAP */}
          <div className="w-full rounded-sm overflow-hidden border border-black shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6459481240995!2d78.43980667462785!3d17.428770701612788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97113de30677%3A0x3c947d8d02f0cad2!2sEmiratiyo%20Investments%20I%20Dubai%20property%20investments%20I%20Property%20asset%20management%20Dubai%20I%20Luxury%20property%20investment%20Dubai!5e0!3m2!1sen!2sin!4v1763150303208!5m2!1sen!2sin"
              width="100%"
              height="300"
              loading="lazy"
              className="block"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;