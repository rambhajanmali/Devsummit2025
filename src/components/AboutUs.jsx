import React from "react";
import { motion } from "framer-motion";
import bgDevSummit from "../assets/bgDevSummit.png";

const AboutUs = () => {
  const features = [
    {
      title: "Innovation Hub",
      description: "A space where creative minds come together to build groundbreaking solutions using cutting-edge technology.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Expert Mentorship",
      description: "Get guidance from industry leaders and experienced professionals who will help shape your ideas into reality.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Networking",
      description: "Connect with fellow developers, designers, and tech enthusiasts from around the globe.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { label: "Participants", value: "250+" },
    { label: "Projects", value: "70+" },
    { label: "Mentors", value: "20+" },
    { label: "Prize Pool", value: "1,50,000" },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${bgDevSummit})` }}
      />
      
      {/* Animated stars overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="stars-container">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white">
            About DevSummit
          </h2>
          <p className="text-gray-300 text-base xs:text-lg sm:text-xl max-w-2xl mx-auto">
            Join us for an extraordinary journey of innovation, learning, and collaboration
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300
                flex flex-col items-center text-center h-full"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-black p-2.5 sm:p-3 
                border border-[#A7FF40]/10 flex items-center justify-center mb-4 sm:mb-5"
              >
                <div className="w-full h-full flex items-center justify-center text-[#A7FF40]">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-xl p-4 sm:p-6 border border-[#A7FF40]/20 hover:border-[#A7FF40]/40 
                shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300
                text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A7FF40] mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 1s infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;