"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, Send, User, MessageSquare } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('QrSy12PDyoDWMlYDj')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Using EmailJS
      const result = await emailjs.send(
        'service_555qm9b', // Your EmailJS service ID
        'template_aphgo0e', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message,
          to_email: 'edwardberrgan@proton.me', // Your Proton Mail address
        },
        'QrSy12PDyoDWMlYDj' // Your EmailJS public key
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error: any) {
      console.error('Error submitting form:', error)
      console.error('Error details:', {
        message: error?.message || 'Unknown error',
        code: error?.code || 'No code',
        stack: error?.stack || 'No stack'
      })
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Get in <span className="text-[#836b55]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Ready to take the next step in your financial journey? Our expert team is here to help you 
            achieve your goals. Contact us today for a complimentary consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#836b55] focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#836b55] focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#836b55] focus:border-transparent transition-colors"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#836b55] focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="wealth-management">Wealth Management</option>
                      <option value="risk-management">Risk Management</option>
                      <option value="financial-advisory">Financial Advisory</option>
                      <option value="asset-management">Asset Management</option>
                      <option value="private-equity">Private Equity</option>
                      <option value="real-estate">Real Estate Investment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#836b55] focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your financial goals and how we can help you..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#836b55] hover:bg-[#6d5a4a] text-white py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="text-sm">We will get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                    <p className="font-medium">Something went wrong.</p>
                    <p className="text-sm">Please try again or contact us directly via email.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <ContactInfoItem
                  icon={<Mail size={24} />}
                  title="Email"
                  content="contact@BTholding.com"
                  description="We typically respond within 24 hours"
                  action={() => window.open('mailto:contact@BTholding.com')}
                />
                
                <ContactInfoItem
                  icon={<MapPin size={24} />}
                  title="Address"
                  content="Canary Wharf, London EC2A 4DP"
                  description="United Kingdom"
                  action={() => window.open('https://maps.google.com')}
                />
                
                <ContactInfoItem
                  icon={<Clock size={24} />}
                  title="Business Hours"
                  content="Monday - Friday: 9:00 AM - 6:00 PM"
                  description="Saturday: 10:00 AM - 2:00 PM (By appointment)"
                />
              </div>

              {/* Quick Stats */}
              <div className="bg-[#836b55]/5 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-[#836b55] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <User className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">150+ satisfied clients worldwide</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#836b55] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <MessageSquare className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">24-hour response guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#836b55] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <Clock className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">Free initial consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#836b55] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards achieving your financial goals. Schedule a complimentary consultation 
            with one of our expert advisors today.
          </p>
          <Button 
            className="bg-white text-[#836b55] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open('mailto:contact@BTholding.com')}
          >
            Send Email
          </Button>
        </div>
      </section>
    </main>
  )
}

function ContactInfoItem({ 
  icon, 
  title, 
  content, 
  description, 
  action 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  description?: string;
  action?: () => void;
}) {
  return (
    <div 
      className={`flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-[#836b55]/5 transition-colors ${action ? 'cursor-pointer' : ''}`}
      onClick={action}
    >
      <div className="bg-[#836b55] p-3 rounded-2xl mr-4 flex-shrink-0">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-[#836b55] font-medium mb-1">{content}</p>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  )
}