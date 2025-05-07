
// Training data for Mosivant live chat assistant

export const mosivantChatbotData = {
  identity: {
    name: "Morgan",
    company: "Mosivant",
    role: "Customer Support Specialist"
  },
  
  companyInfo: {
    name: "Mosivant Consulting (OPC) Private Limited",
    address: "1153 Lantern Trail Ave, Unit 101, Columbus, OH 43228",
    phone: "+1 (818)-925-7116",
    email: "info@gomosivant.com",
    social: {
      linkedin: "https://www.linkedin.com/company/mosivant-consulting-opc-private-limited"
    },
    businessHours: "Monday through Friday from 9:00 AM to 6:00 PM Eastern Time"
  },
  
  services: [
    {
      title: "Website Development",
      description: "Creating powerful, responsive websites that drive business growth",
      features: [
        "Custom website design and development",
        "E-commerce solutions",
        "Content management systems",
        "Website maintenance and support",
        "SEO optimization",
        "Performance optimization"
      ],
      faq: [
        {
          question: "How long does website development take?",
          answer: "Typical website development can take 4-12 weeks depending on the complexity of the project. Simple informational websites may be completed in 4-6 weeks, while complex e-commerce sites can take 8-12 weeks or more."
        },
        {
          question: "Do you provide website hosting?",
          answer: "Yes, we offer reliable hosting solutions as part of our website development packages. We can also work with your existing hosting provider if preferred."
        }
      ]
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      features: [
        "Custom application development",
        "Enterprise software solutions",
        "API development and integration",
        "Mobile app development",
        "Cloud-native applications",
        "Legacy system modernization"
      ],
      faq: [
        {
          question: "What technologies do you use for software development?",
          answer: "We work with a wide range of technologies including JavaScript/TypeScript, React, Node.js, Python, Java, and .NET. Our technology choices are guided by your specific project requirements and business goals."
        },
        {
          question: "Do you provide ongoing maintenance for custom software?",
          answer: "Yes, we offer comprehensive maintenance and support packages to ensure your software remains secure, up-to-date, and functioning optimally."
        }
      ]
    },
    {
      title: "IT Support",
      description: "Reliable technical support to keep your business running smoothly",
      features: [
        "24/7 helpdesk support",
        "Network monitoring and management",
        "Security management",
        "Data backup and recovery",
        "Hardware and software troubleshooting",
        "IT infrastructure maintenance"
      ],
      faq: [
        {
          question: "What are your response times for IT support?",
          answer: "Our response times vary based on issue severity. Critical issues are addressed within 1 hour, high-priority issues within 4 hours, and standard requests within 24 hours."
        },
        {
          question: "Do you offer on-site IT support?",
          answer: "Yes, we provide both remote and on-site IT support services depending on your needs and support agreement."
        }
      ]
    },
    {
      title: "IT Consulting",
      description: "Strategic technology guidance to drive business transformation",
      features: [
        "IT strategy development",
        "Digital transformation planning",
        "Technology roadmap creation",
        "IT audit and assessment",
        "Vendor selection and management",
        "Project management and implementation"
      ],
      faq: [
        {
          question: "How do IT consulting services benefit my business?",
          answer: "Our IT consulting services help optimize your technology investments, reduce operational costs, improve efficiency, mitigate risks, and align your IT infrastructure with your business goals."
        },
        {
          question: "Can you provide consulting for specific industries?",
          answer: "Yes, we have experience working with various industries including banking, healthcare, manufacturing, retail, and technology sectors. We understand the unique challenges and requirements of these industries."
        }
      ]
    }
  ],
  
  differentiators: [
    {
      title: "Enterprise Experience",
      description: "Our team has extensive experience working with Fortune 500 companies, bringing enterprise-grade expertise to businesses of all sizes."
    },
    {
      title: "Innovation-First Approach",
      description: "We stay at the forefront of technology trends to deliver innovative solutions that give your business a competitive edge."
    },
    {
      title: "Industry Expertise",
      description: "Our specialists have deep knowledge across key sectors including finance, healthcare, manufacturing, retail, and technology."
    },
    {
      title: "Global Talent Network",
      description: "We leverage our worldwide network of technology experts to provide the best solutions for your specific needs."
    },
    {
      title: "Proven Methodologies",
      description: "Our structured approach to project delivery ensures consistent, high-quality results on time and within budget."
    },
    {
      title: "Strategic Partnerships",
      description: "We maintain partnerships with leading technology providers to offer you the best solutions in the industry."
    }
  ],
  
  conversationFlow: {
    greeting: "Hi there! I'm Morgan from Mosivant. How can I assist you with your IT needs today?",
    fallback: "Thank you for your question. I'd like to make sure you get the most accurate information. Could you please provide a bit more detail about what you're looking for?",
    closing: "Thank you for chatting with Mosivant today. If you have any other questions, feel free to reach out via phone at +1 (818)-925-7116 or email at info@gomosivant.com. Have a great day!"
  },
  
  commonQueries: [
    {
      pattern: ["pricing", "cost", "price", "rates", "fee", "how much"],
      response: "Our pricing varies based on project scope and requirements. We offer competitive rates and flexible payment options. Would you like to discuss your specific project so we can provide a customized quote?"
    },
    {
      pattern: ["schedule", "appointment", "consultation", "meeting", "call", "book"],
      response: "I'd be happy to help you schedule a consultation with our team. You can use our online booking system on our website, or I can guide you through the process. What would work best for you?"
    },
    {
      pattern: ["timeline", "how long", "duration", "time frame", "deadline"],
      response: "Project timelines depend on several factors including scope, complexity, and your specific requirements. Typically, smaller projects take 2-4 weeks, while larger projects may take several months. We'd be happy to provide a more accurate estimate after understanding your specific needs."
    }
  ],
  
  supportProcess: {
    initialContact: "When you reach out to us, we'll ask a few questions to understand your needs and connect you with the appropriate specialist.",
    discovery: "We conduct a thorough discovery process to understand your current systems, challenges, and objectives.",
    proposal: "Based on our findings, we'll present a detailed proposal outlining solutions, timelines, and costs.",
    implementation: "Our expert team will implement the solution according to the agreed-upon plan, with regular updates throughout.",
    followUp: "After implementation, we provide ongoing support and maintenance to ensure everything runs smoothly."
  }
};

export default mosivantChatbotData;
