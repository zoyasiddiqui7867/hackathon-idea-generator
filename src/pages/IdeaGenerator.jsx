
import React, { useState } from "react";

function IdeaGenerator() {
  const [query, setQuery] = useState("");
  const [ideas, setIdeas] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateIdeas = async () => {
    if (!query) {
      setIdeas("");
      setError("⚠️ Please enter a query first.");
      return;
    }

    setLoading(true);
    setIdeas("");
    setError(null);

    // Construct a search query for the GitHub API
    // We'll search for repositories matching the user's query
    const apiUrl = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`GitHub API call failed with status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.items && result.items.length > 0) {
        // Format the results into a readable list
        const formattedIdeas = result.items
          .slice(0, 5) // Get the top 5 results
          .map(item => `- ${item.name}: ${item.description || "No description available."}`)
          .join('\n');
        
        setIdeas(formattedIdeas);
      } else {
        setError("⚠️ No projects found for your query. Please try a different topic.");
      }
    } catch (err) {
      console.error("GitHub API Error:", err);
      setError("❌ An error occurred while fetching projects. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto text-center bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6-gray-900">
        Hackathon Project Finder
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Enter keywords like 'AI ,ML, Robotics' to find existing projects on GitHub.
      </p>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="e.g. AI, ML, Robotics"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={generateIdeas}
          disabled={loading}
          className="bg-gray-900 hover:bg-black text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search GitHub"}
        </button>
      </div>

      {loading && (
        <div className="mt-6">
          <p className="text-lg text-gray-600 animate-pulse">
            Searching for projects...
          </p>
        </div>
      )}
      
      {ideas && (
        <div className="mt-6 p-6 bg-white border rounded-lg text-left shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Found Projects:
          </h2>
          <pre className="text-gray-700 whitespace-pre-line">{ideas}</pre>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg shadow-md text-left">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default IdeaGenerator;