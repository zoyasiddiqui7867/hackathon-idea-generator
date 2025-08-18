import React, { useState } from "react";

function IdeaGenerator() {
  // state for input 
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [domain, setDomain] = useState("");

  // state for ideas
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-950">
      <h1 className="text-4xl font-extrabold text-white mb-6">
        Generate a Hackathon Project Idea
      </h1>
      <p className="text-lg text-gray-400 text-center mb-10 max-w-2xl">
        Enter your skills and interests below to get unique, AI-powered project ideas.
      </p>

      {/* Input Form Section */}
      <div className="w-full max-w-4xl bg-gray-900 rounded-xl shadow-lg p-8 mb-12">
        <div className="space-y-6">
          {/* Skills Input */}
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-300 mb-2">
              Your Skills (e.g., React, Python, UI/UX)
            </label>
            <input
              type="text"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="React, Tailwind, Node.js"
            />
          </div>

          {/* Interests Input */}
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-300 mb-2">
              Interests (e.g., AI/ML, Fintech)
            </label>
            <input
              type="text"
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="AI, E-commerce, Social Media"
            />
          </div>

          {/* Domain Dropdown */}
          <div>
            <label htmlFor="domain" className="block text-sm font-medium text-gray-300 mb-2">
              Project Domain
            </label>
            <select
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a domain</option>
              <option value="web">Web Development</option>
              <option value="ai">AI / Machine Learning</option>
              <option value="fintech">Fintech</option>
              <option value="ecommerce">E-commerce</option>
              <option value="mobility">Mobility / Logistics</option>
            </select>
          </div>

          {/* Generate Button */}
          <div className="flex justify-center pt-4">
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Generate Ideas
            </button>
          </div>
        </div>
      </div>

      {/* AI-Generated Ideas Display Section (Static for now) */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-300 mb-4 text-center">
          Generated Ideas
        </h2>
        {/* Placeholder for future generated ideas */}
        <div className="bg-gray-800 rounded-xl p-8 text-center text-gray-500 italic">
          Your AI-powered hackathon ideas will appear here.
        </div>
      </div>
    </div>
  );
}

export default IdeaGenerator;