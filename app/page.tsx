"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Award, Phone, Mail, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/kk.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 -z-10" />
        
        <div className="container mx-auto px-4 text-center text-white animate-fade-in-up">
          <div className="mb-8">
            <h2 className="text-lg md:text-xl font-medium text-[#836b55] mb-4 uppercase tracking-wider">
              Welcome to BT Holding
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Financial <span className="text-[#836b55]">Excellence</span>
              <br />
              <span className="text-white">Redefined</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Innovative investment solutions and strategic business guidance that drive sustainable growth 
            for tomorrow's leaders. Your success is our mission.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mt-10">
            <Button 
              size="lg" 
              className="bg-[#836b55] hover:bg-[#6d5a4a] text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-[#836b55]/25 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group border-0"
              onClick={() => router.push('/services')}
            >
              <span className="relative z-10">Explore Services</span>
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={22} />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group"
              onClick={() => router.push('/contact')}
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4">Trusted by leading businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-16 h-8 bg-white/10 rounded"></div>
              <div className="w-16 h-8 bg-white/10 rounded"></div>
              <div className="w-16 h-8 bg-white/10 rounded"></div>
              <div className="w-16 h-8 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#836b55] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard number="€2.5B+" label="Assets Under Management" icon={<TrendingUp size={32} />} />
            <StatCard number="98.7%" label="Client Retention Rate" icon={<Star size={32} />} />
            <StatCard number="12" label="Years of Excellence" icon={<Award size={32} />} />
            <StatCard number="150+" label="Global Clients" icon={<Users size={32} />} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-[#836b55] mb-2 uppercase tracking-wider">
                  About BT Holding
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Creating <span className="text-[#836b55]">Opportunities</span> Through Innovation
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At BT Holding, we combine cutting-edge financial strategies with sustainable business practices. 
                Our commitment goes beyond profit - we create lasting value for our clients, partners, and communities 
                through innovative solutions and personalized service.
              </p>
              
              <div className="space-y-4 mb-8">
                <FeatureItem text="Tailored investment strategies for every client" />
                <FeatureItem text="Expert team with decades of combined experience" />
                <FeatureItem text="Transparent communication and regular reporting" />
                <FeatureItem text="Strict compliance and risk management protocols" />
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-[#836b55] hover:bg-[#6d5a4a] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-[#836b55]/30 transition-all duration-400 hover:-translate-y-1 hover:scale-105 group border-0"
                  onClick={() => router.push('/company')}
                >
                  <span className="relative z-10">Learn More About Us</span>
                  <ArrowRight className="ml-2" size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button 
                  className="bg-transparent border-2 border-[#c2c2c2] text-[#d6d6d6] hover:bg-[#836b55] hover:text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-[#836b55]/20 transition-all duration-400 hover:-translate-y-1 hover:scale-105 group"
                  onClick={() => router.push('/contact')}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#836b55]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="relative">
                <Image 
                  src="/LOGO.png" 
                  alt="BT Holding Logo" 
                  width={400} 
                  height={400} 
                  className="mx-auto drop-shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#836b55]/20 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#836b55]/30 rounded-full opacity-10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24">
        <Image
          src="/23.jpg"
          alt="Services Background"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80 -z-10" />
        
        <div className="container mx-auto px-4 text-white">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-lg font-medium text-[#836b55] mb-4 uppercase tracking-wider">
              Our Services
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Financial Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored financial services designed to help businesses and individuals thrive in today's dynamic marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Wealth Management"
              description="Personalized investment strategies focused on long-term growth and wealth preservation."
              icon="💰"
              onClick={() => router.push('/services#wealth')}
            />
            <ServiceCard
              title="Risk Management"
              description="Comprehensive risk assessment and mitigation strategies to protect your investments."
              icon="🛡️"
              onClick={() => router.push('/services#risk')}
            />
            <ServiceCard
              title="Financial Advisory"
              description="Expert guidance on financial planning, investment decisions, and business strategy."
              icon="📊"
              onClick={() => router.push('/services#advisory')}
            />
            <ServiceCard
              title="Asset Management"
              description="Professional management of investment portfolios with focus on optimal returns."
              icon="📈"
              onClick={() => router.push('/services#assets')}
            />
            <ServiceCard
              title="Private Equity"
              description="Direct investment opportunities in promising businesses and growth ventures."
              icon="🏢"
              onClick={() => router.push('/services#equity')}
            />
            <ServiceCard
              title="Insurance Solutions"
              description="Tailored insurance products to protect your business and personal assets."
              icon="🔒"
              onClick={() => router.push('/services#insurance')}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-[#836b55] hover:bg-[#6d5a4a] text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => router.push('/services')}
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h3 className="text-lg font-medium text-[#836b55] mb-4 uppercase tracking-wider">
              Client Success
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              What Our Clients Say
            </h2>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-[#836b55] fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-light text-gray-700 mb-8 italic leading-relaxed">
                "Working with BT Holding has been transformational for our business. Their strategic insights helped us increase our portfolio value by 340% over two years, while maintaining excellent risk management. Truly exceptional service."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-[#836b55] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  MR
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Maria Rodriguez</p>
                  <p className="text-gray-600">Founder & CEO, TechVentures International</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-600 mb-12 text-lg font-medium">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <Image src="/vodafone.png" alt="Vodafone" width={120} height={60} className="hover:scale-110 transition-transform duration-300" />
            <Image src="/petro.png" alt="Petro" width={120} height={60} className="hover:scale-110 transition-transform duration-300" />
            <Image src="/oppo.png" alt="Oppo" width={120} height={60} className="hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#836b55] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h3 className="text-lg font-medium text-white/80 mb-4 uppercase tracking-wider">
              Get Started Today
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have achieved their financial goals with BT Holding. 
              Your success story starts here.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#836b55] hover:bg-gray-100 px-12 py-5 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group border-0"
                onClick={() => router.push('/contact')}
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="ml-2" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#836b55]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                size="lg"
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-[#836b55] px-12 py-5 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-white/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group"
                onClick={() => router.push('/services')}
              >
                <span className="relative z-10">View All Services</span>
                <ArrowRight className="ml-2" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <ContactItem
              icon={<Phone size={24} />}
              title="Call Us"
              content="+44 20 7946 0958"
              onClick={() => window.open('tel:+442079460958')}
            />
            <ContactItem
              icon={<Mail size={24} />}
              title="Email Us"
              content="contact@BTholding.com"
              onClick={() => window.open('mailto:contact@BTholding.com')}
            />
            <ContactItem
              icon={<MapPin size={24} />}
              title="Visit Us"
              content="Canary Wharf, London EC2A 4DP"
              onClick={() => router.push('/contact')}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

// Component definitions
function StatCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="animate-fade-in-up group hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center mb-4 text-white/80 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-4xl md:text-5xl font-bold mb-2">{number}</h3>
      <p className="text-white/80 uppercase tracking-wider text-sm">{label}</p>
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

function ServiceCard({ title, description, icon, onClick }: { 
  title: string; 
  description: string; 
  icon: string;
  onClick: () => void;
}) {
  return (
    <div 
      className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#836b55] transition-colors">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <div className="flex items-center text-[#836b55] group-hover:text-[#6d5a4a] transition-colors">
        <span className="text-sm font-medium">Learn More</span>
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  )
}

function ContactItem({ icon, title, content, onClick }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  onClick: () => void;
}) {
  return (
    <div 
      className="cursor-pointer group hover:bg-gray-800 p-6 rounded-xl transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex justify-center mb-4 text-[#836b55] group-hover:text-[#6d5a4a] transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-900 transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-white transition-colors">{content}</p>
    </div>
  )
}