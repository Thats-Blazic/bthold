"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Shield, FileText, Scale } from "lucide-react"

export default function ImpressumPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Legal <span className="text-[#836b55]">Information</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Important legal information, terms of service, and regulatory compliance details 
            for BT Holding financial services.
          </p>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Company Information */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 p-8 rounded-2xl mb-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#836b55] p-3 rounded-2xl mr-4">
                      <FileText className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Company Information</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Company Name:</h3>
                      <p className="text-gray-700">BT Holding Limited</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Registration Number:</h3>
                      <p className="text-gray-700">12345678</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Registered Address:</h3>
                      <p className="text-gray-700">
                        Canary Wharf<br />
                        London EC2A 4DP<br />
                        United Kingdom
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">VAT Number:</h3>
                      <p className="text-gray-700">GB 123 456 789</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#836b55]/5 p-8 rounded-2xl mb-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#836b55] p-3 rounded-2xl mr-4">
                      <Scale className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Regulatory Information</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Authorized and Regulated by:</h3>
                      <p className="text-gray-700">Financial Conduct Authority (FCA)</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">FCA Registration Number:</h3>
                      <p className="text-gray-700">987654321</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Permissions:</h3>
                      <ul className="text-gray-700 list-disc list-inside space-y-1">
                        <li>Investment Management</li>
                        <li>Financial Advisory Services</li>
                        <li>Portfolio Management</li>
                        <li>Wealth Management Services</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service</h2>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        By accessing and using our website and services, you agree to be bound by these terms and conditions. 
                        BT Holding provides financial services subject to applicable laws and regulations.
                      </p>
                      <p>
                        All investment services are provided based on individual client needs and risk profiles. 
                        Past performance does not guarantee future results. All investments carry risk of loss.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        BT Holding is committed to protecting your privacy and personal information. We collect and process 
                        personal data in accordance with GDPR and UK data protection laws.
                      </p>
                      <p>
                        Your personal information is used solely for providing our services, regulatory compliance, 
                        and improving our client experience. We do not share your information with third parties 
                        without your explicit consent, except as required by law.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk Warnings</h2>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        <strong>Investment Risk:</strong> The value of investments and the income from them can go down as well as up, 
                        and you may not recover the amount of your original investment.
                      </p>
                      <p>
                        <strong>Market Risk:</strong> Financial markets can be volatile and unpredictable. Economic, political, 
                        and market conditions can significantly affect investment performance.
                      </p>
                      <p>
                        <strong>Currency Risk:</strong> Investments in foreign currencies are subject to exchange rate fluctuations 
                        which may affect the value of your investment.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaints Procedure</h2>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        If you have a complaint about our services, please contact us in writing at the address below. 
                        We will acknowledge your complaint within 3 business days and provide a full response within 8 weeks.
                      </p>
                      <p>
                        If you are not satisfied with our response, you may refer your complaint to the 
                        Financial Ombudsman Service (FOS).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Sidebar */}
            <div>
              <div className="bg-[#836b55] text-white p-8 rounded-2xl sticky top-32">
                <div className="flex items-center mb-6">
                  <Shield className="mr-3" size={24} />
                  <h3 className="text-xl font-bold">Legal Contact</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Mail className="mr-2" size={16} />
                      <span className="font-medium">Email</span>
                    </div>
                    <a 
                      href="mailto:legal@BTholding.com"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      legal@BTholding.com
                    </a>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Phone className="mr-2" size={16} />
                      <span className="font-medium">Phone</span>
                    </div>
                    <a 
                      href="tel:+442079460958"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      +44 20 7946 0958
                    </a>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="mr-2" size={16} />
                      <span className="font-medium">Address</span>
                    </div>
                    <p className="text-white/80">
                      Canary Wharf<br />
                      London EC2A 4DP<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/60 mb-4">
                    For general inquiries, please use our main contact form.
                  </p>
                  <Button 
                    className="w-full bg-white text-[#836b55] hover:bg-gray-100 py-3 rounded-xl font-semibold transition-all duration-300"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <div className="flex items-start">
              <Shield className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700 text-sm">
                  This website is intended for UK residents only. The information provided does not constitute 
                  investment advice and should not be relied upon as such. Please seek professional advice 
                  before making any investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}