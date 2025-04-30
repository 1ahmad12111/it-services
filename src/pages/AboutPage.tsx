
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, Globe, Users, Briefcase, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Team members data
const teamMembers = [
  {
    name: "Alexander Mitchell",
    role: "CEO & Founder",
    bio: "20+ years of experience in enterprise technology and digital transformation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Jennifer Ramirez",
    role: "CTO",
    bio: "Former Google engineer with expertise in cloud architecture and software development.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Michael Chen",
    role: "Lead Solutions Architect",
    bio: "Specializes in building scalable enterprise applications and system integrations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Director of Client Services",
    bio: "Dedicated to ensuring client success through strategic IT implementations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
];

// Company milestones
const milestones = [
  {
    year: "2010",
    title: "Founded",
    description: "Mosivant was established with a vision to provide tailored technology solutions.",
    icon: <Briefcase className="w-6 h-6 text-consulting-500" />,
  },
  {
    year: "2015",
    title: "Major Expansion",
    description: "Expanded services to include cloud solutions and digital transformation consulting.",
    icon: <Globe className="w-6 h-6 text-consulting-500" />,
  },
  {
    year: "2018",
    title: "50+ Enterprise Clients",
    description: "Reached a milestone of serving over 50 enterprise clients across multiple industries.",
    icon: <Users className="w-6 h-6 text-consulting-500" />,
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Named as one of the top IT consulting firms by Industry Today magazine.",
    icon: <Award className="w-6 h-6 text-consulting-500" />,
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded operations to serve clients across North America, Europe, and Asia.",
    icon: <Globe className="w-6 h-6 text-consulting-500" />,
  },
];

// Core values
const coreValues = [
  {
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
  },
  {
    title: "Innovation",
    description: "We embrace cutting-edge technologies to solve complex business challenges.",
  },
  {
    title: "Integrity",
    description: "We build relationships based on trust, transparency, and ethical business practices.",
  },
  {
    title: "Client Focus",
    description: "We prioritize our clients' success and provide personalized, attentive service.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-consulting-800 to-consulting-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mosivant</h1>
              <p className="text-xl text-consulting-100 mb-8 leading-relaxed">
                We're a team of passionate technology experts dedicated to helping businesses thrive in the digital age through innovative IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-1 bg-consulting-500 rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  Founded in 2010, Mosivant began with a clear mission: to help businesses leverage technology for growth and innovation. Our founder, Alexander Mitchell, recognized that many companies were struggling to keep pace with rapidly evolving digital landscapes.
                </p>
                <p>
                  What started as a small team of dedicated consultants has grown into a comprehensive IT solutions provider trusted by businesses across multiple industries. Throughout our journey, we've maintained our commitment to delivering tailored, high-quality solutions that address our clients' unique challenges.
                </p>
                <p>
                  Today, Mosivant is recognized as a leader in digital transformation, helping organizations navigate complex technological environments and implement solutions that drive real business value. Our team of experts brings diverse skills and experiences, united by a shared passion for technology and client success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex mb-8 last:mb-0">
                  <div className="mr-6 relative">
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-consulting-500 flex items-center justify-center">
                      {milestone.icon}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="absolute top-12 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-consulting-200"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center mb-1">
                      <span className="text-consulting-600 font-semibold mr-3">{milestone.year}</span>
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-consulting-50 p-6 rounded-lg border-l-4 border-consulting-500">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-consulting-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-consulting-600 mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Certifications & Partnerships</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {["Microsoft Gold Partner", "AWS Advanced Consulting Partner", "Google Cloud Partner", "Cisco Premier Partner", "ISO 27001 Certified", "CMMI Level 5", "Apple Consultants Network", "CompTIA"].map((cert, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <CheckCircle className="w-8 h-8 text-consulting-500" />
                    </div>
                    <p className="text-center font-medium text-gray-800">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-consulting-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with Mosivant for innovative technology solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-consulting-800 hover:bg-gray-100"
                size="lg"
                asChild
              >
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-consulting-700"
                size="lg"
                asChild
              >
                <Link to="#consultation">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
