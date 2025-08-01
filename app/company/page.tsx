"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Users, Globe, TrendingUp, Target, Shield, CheckCircle, ArrowRight } from "lucide-react"

export default function CompanyPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[#836b55]/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-[#836b55] mb-4 uppercase tracking-wider">
                  Our Story
                </h3>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  About <span className="text-[#836b55]">BT Holding</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Since 2012, BT Holding has been at the forefront of innovative financial services, 
                helping clients build, protect, and grow their wealth through strategic investment solutions 
                and personalized financial planning. We've built our reputation on trust, excellence, and results.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-[#836b55] hover:bg-[#6d5a4a] text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => window.location.href = '/services'}
                >
                  Our Services
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-[#836b55] text-[#836b55] hover:bg-[#836b55] hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                  onClick={() => window.location.href = '/team'}
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="/LOGO.png" 
                  alt="BT Holding" 
                  width={400} 
                  height={300} 
                  className="mx-auto drop-shadow-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#836b55]/20 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#836b55]/30 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-lg font-medium text-[#836b55] mb-4 uppercase tracking-wider">
              Our Purpose
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Mission & <span className="text-[#836b55]">Vision</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving financial excellence through innovative strategies and unwavering commitment to our clients' success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-[#836b55] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals and businesses to achieve their financial goals through innovative investment 
                strategies, personalized service, and unwavering commitment to excellence. We believe that everyone 
                deserves access to professional financial guidance and the opportunity to build lasting wealth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-[#836b55] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading financial services firm recognized for our innovative solutions, exceptional client 
                service, and positive impact on the communities we serve. We envision a future where financial 
                prosperity is accessible to all through sustainable and responsible investment practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-lg font-medium text-[#836b55] mb-4 uppercase tracking-wider">
              What Drives Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Core <span className="text-[#836b55]">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships with clients, 
              partners, and the broader community. They are the foundation of our success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Shield size={32} />}
              title="Integrity"
              description="We conduct business with the highest ethical standards, ensuring transparency and honesty in all our interactions."
            />
            <ValueCard
              icon={<Users size={32} />}
              title="Client-First"
              description="Our clients' success is our success. We prioritize their needs and work tirelessly to exceed their expectations."
            />
            <ValueCard
              icon={<Award size={32} />}
              title="Excellence"
              description="We strive for excellence in everything we do, continuously improving our services and expertise."
            />
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-br from-[#836b55] to-[#6d5a4a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-lg font-medium text-white/80 mb-4 uppercase tracking-wider">
              By The Numbers
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">€2.5B+</h3>
              <p className="text-white/80 uppercase tracking-wider text-sm">Assets Under Management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">98.7%</h3>
              <p className="text-white/80 uppercase tracking-wider text-sm">Client Retention Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">150+</h3>
              <p className="text-white/80 uppercase tracking-wider text-sm">Global Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">12</h3>
              <p className="text-white/80 uppercase tracking-wider text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-lg font-medium text-[#836b55] mb-4 uppercase tracking-wider">
              Why Choose Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-[#836b55]">BT Holding</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine deep industry expertise with innovative technology and personalized service 
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureItem text="Personalized investment strategies tailored to your goals" />
            <FeatureItem text="Experienced team with proven track record" />
            <FeatureItem text="Transparent fee structure with no hidden costs" />
            <FeatureItem text="Regular reporting and performance updates" />
            <FeatureItem text="Access to exclusive investment opportunities" />
            <FeatureItem text="Comprehensive risk management approach" />
            <FeatureItem text="Award-winning client service and support" />
            <FeatureItem text="Commitment to sustainable investing practices" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#836b55] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-medium text-white/80 mb-4 uppercase tracking-wider">
            Get Started Today
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/100 mb-8 max-w-2xl mx-auto">
            Discover how BT Holding can help you achieve your financial objectives with our 
            comprehensive range of services and expert guidance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-white text-[#836b55] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-[#836b55] hover:bg-white hover:text-[#836b55] px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
              onClick={() => window.location.href = '/services'}
            >
              View Our Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function ValueCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2 border border-gray-100">
      <div className="bg-[#836b55]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#836b55] transition-colors">
        <div className="text-[#836b55] group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <CheckCircle className="w-6 h-6 text-[#836b55] mr-3 flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </div>
  )
}