import React from 'react';


const exploreIdeas = [
  {
    id: 1,
    title: "AI-Powered Mental Wellness Coach",
    description: "A mobile application that uses AI to provide personalized mental wellness.",
    category: "AI & Health",
  },
  {
    id: 2,
    title: "Decentralized Carbon Credit",
    description: "A blockchain-based platform for transparent and secure trading of carbon credits.",
    category: "Blockchain & Environment",
  },
  {
    id: 3,
    title: "Smart Home Energy Optimizer",
    description: "An IoT device integrated with AI that optimizes household energy consumption.",
    category: "IoT & Sustainability",
  },
  {
    id: 4,
    title: "Gamified Learning Platform for Coding",
    description: "An interactive web platform that uses game mechanics and competitive challenges to teach coding.",
    category: "EdTech & Gaming",
  },
  {
    id: 5,
    title: "Augmented Reality Museum Guide",
    description: "An AR application that provides interactive information and 3D models of exhibits.",
    category: "AR & Culture",
  },
  {
    id: 6,
    title: "Predictive Analytics for Urban Traffic",
    description: "A data-driven solution that uses machine learning to predict traffic congestion.",
    category: "Data Science & Smart Cities",
  },
  {
    id: 7,
    title: "Voice-Controlled Recipe Assistant",
    description: "A hands-free digital assistant for the kitchen that guides users through recipes.",
    category: "AI & Lifestyle",
  },
  {
    id: 8,
    title: "Collaborative Storytelling AI",
    description: "A web platform where multiple users can co-write stories with the help of an AI.",
    category: "AI & Creativity",
  },
];

function ExploreIdeas() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Inspiring Ideas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {exploreIdeas.map((idea) => (
          <div key={idea.id} className="bg-white p-6 rounded-lg shadow-xl flex flex-col">
            <h2 className="text-xl font-bold mb-2">{idea.title}</h2>
            <p className="text-gray-600 text-sm flex-grow mb-4">{idea.description}</p>
            
            <div className="mt-auto pt-4 border-t border-gray-200">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {idea.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreIdeas;