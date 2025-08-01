"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Users, TrendingUp } from "lucide-react"

const teamMembers = [
  {
    name: "Edward Berggren",
    position: "Broker",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Stefan Follett",
    position: "Community Manager",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Michael Schmitt",
    position: "Consultant Broker",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Lithen Felix",
    position: "CEO",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Arthur Blanc",
    position: "Business Advisor",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Jimmy Becker",
    position: "Director General",
    image: "/placeholder-user.jpg"
  }
]

export default function TeamPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Meet Our <span className="text-[#836b55]">Expert Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our dedicated professionals bring decades of combined experience in financial services, 
            investment management, and client relations to help you achieve your financial goals.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#836b55] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">85+</h3>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-[#836b55] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="bg-[#836b55] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">€3.2B+</h3>
              <p className="text-gray-600">Assets Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#836b55] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Schedule a consultation with our professionals and discover how we can help you achieve your financial objectives.
          </p>
          <Button 
            className="bg-white text-[#836b55] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.location.href = '/contact'}
          >
            Schedule Consultation
          </Button>
        </div>
      </section>
    </main>
  )
}

function TeamMemberCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center group hover:-translate-y-2">
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#836b55]/20 group-hover:border-[#836b55] transition-colors">
          <Image
            src={member.image}
            alt={member.name}
            width={128}
            height={128}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#836b55] rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-[#836b55] font-medium">{member.position}</p>
    </div>
  )
}