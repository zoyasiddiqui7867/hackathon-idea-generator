import React, { useState } from 'react';

function IdeaGenerator() {
  //state for input 
  const[skills,setSkills] = useState("");
  const[interests, setInterests]=useState("");
  const[domains,setDomains]=useState("");

  //state for ideas

  const[loading,setLoading]=useState(false);
  const[ideas,setIdeas]=useState([]);
  const[error,setError]=useState(null);

  return (
   <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-950">
      <h1 className="text-4xl font-extrabold text-white mb-6">
        Generate a Hackathon Project Idea
      </h1>
      <p className="text-lg text-gray-400 text-center mb-10 max-w-2xl">
        Enter your skills and interests below to get unique, AI-powered project ideas.
      </p>
  
}

export default IdeaGenerator;