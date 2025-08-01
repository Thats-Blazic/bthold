"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, Users, Briefcase, Home, Building, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Wealth Management",
    description: "Comprehensive wealth planning and investment strategies tailored to your unique financial goals and risk tolerance.",
    features: [
      "Personalized investment portfolios",
      "Tax-efficient wealth strategies", 
      "Estate and succession planning",
      "Regular porBTolio reviews and rebalancing"
    ],
    pricing: "From €50,000 minimum investment"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Advanced risk assessment and mitigation strategies to protect your investments and ensure long-term financial security.",
    features: [
      "Comprehensive risk analysis",
      "Insurance and protection planning",
      "Regulatory compliance support",
      "Crisis management strategies"
    ],
    pricing: "Custom pricing based on porBTolio size"
  },
  {
    icon: Briefcase,
    title: "Financial Advisory",
    description: "Expert guidance on financial planning, investment decisions, and strategic business financial management.",
    features: [
      "Strategic financial planning",
      "Investment research and analysis",
      "Business financial consulting",
      "Retirement and pension planning"
    ],
    pricing: "From €2,500 per consultation"
  },
  {
    icon: Building,
    title: "Asset Management",
    description: "Professional management of investment porBTolios with focus on optimal returns and capital preservation.",
    features: [
      "Active porBTolio management",
      "Diversified investment strategies",
      "Performance monitoring and reporting",
      "Access to exclusive investment opportunities"
    ],
    pricing: "1.5% - 2.5% annual management fee"
  },
  {
    icon: Users,
    title: "Private Equity",
    description: "Direct investment opportunities in promising businesses and growth ventures for qualified investors.",
    features: [
      "Due diligence and deal sourcing",
      "Growth capital investments",
      "Strategic business partnerships",
      "Exit strategy planning"
    ],
    pricing: "From €500,000 minimum investment"
  },
  {
    icon: Home,
    title: "Real Estate Investment",
    description: "Strategic real estate investment opportunities in prime locations with strong growth potential.",
    features: [
      "Commercial property investments",
      "Residential development projects",
      "Real estate porBTolio management",
      "Market analysis and valuations"
    ],
    pricing: "From €100,000 minimum investment"
  }
]

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "url(/23.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-[#836b55]">Financial Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Comprehensive financial solutions designed to help you build, protect, and grow your wealth 
            through every stage of your financial journey.
          </p>
          <Button 
            className="bg-[#836b55] hover:bg-[#6d5a4a] text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Services
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Tailored Solutions for Every Financial Goal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're planning for retirement, growing your business, or preserving wealth for future generations, 
              we have the expertise and solutions to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose <span className="text-[#836b55]">BT Holding</span>?
              </h2>
              <div className="space-y-4">
                <FeatureItem text="Personalized approach tailored to your unique financial situation" />
                <FeatureItem text="Transparent fee structure with no hidden costs" />
                <FeatureItem text="Regular reporting and performance updates" />
                <FeatureItem text="Access to exclusive investment opportunities" />
                <FeatureItem text="Dedicated relationship manager for each client" />
                <FeatureItem text="Comprehensive risk management and compliance" />
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/LOGO.png" 
                alt="BT Holding Services" 
                width={500} 
                height={400} 
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#836b55] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Contact our team today for a complimentary consultation and discover how our services 
            can help you achieve your financial objectives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-white text-[#836b55] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.location.href = '/contact'}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#836b55] px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
              onClick={() => window.location.href = '/team'}
            >
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const IconComponent = service.icon
  
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2">
      <div className="bg-[#836b55]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#836b55] transition-colors">
        <IconComponent className="text-[#836b55] group-hover:text-white transition-colors" size={32} />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#836b55] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <p className="text-[#836b55] font-semibold mb-4">{service.pricing}</p>
        <Button 
          className="w-full bg-[#836b55] hover:bg-[#6d5a4a] text-white py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg"
          onClick={() => window.location.href = `/contact?service=${service.title}`}
        >
          Learn More
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
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