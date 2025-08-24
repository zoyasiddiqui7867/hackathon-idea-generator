import React from 'react';
import image1 from '../assets/images3.jpeg';
import image2 from '../assets/image2.jpeg';

function Home({ onButtonClick }) {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                Unlock Your Hackathon Potential
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Generate innovative, winning ideas . Your next big project starts here.
              </p>
            </div>
        
            <div className="order-first md:order-last">
              <img src={image1} alt="AI Project Mockup" className="rounded-xl shadow-2xl w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Why Choose ThinkBot Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose ThinkBot?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                ThinkBot is your companion for hackathon ideas. It helps you quickly find projects that fit your skills and interests, giving you a competitive edge.
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="order-first md:order-last">
              <img src={image2} alt="AI Dashboard" className="rounded-xl shadow-2xl w-full h-auto" />
            </div>
          </div>
        </section>

        {/* How ThinkBot Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              How ThinkBot Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-gray-50 shadow-md">
                <h3 className="text-xl font-semibold mt-4 mb-2">Find Repositories</h3>
                <p className="text-gray-600">
                  Search GitHub for existing projects based on your skills and domains.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 shadow-md">
                <h3 className="text-xl font-semibold mt-4 mb-2">Explore Ideas</h3>
                <p className="text-gray-600">
                  Browse a curated list of inspiring project ideas to get your creativity flowing.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 shadow-md">
                <h3 className="text-xl font-semibold mt-4 mb-2">Build & Collaborate</h3>
                <p className="text-gray-600">
                  Find a project, start coding, and contribute to the open-source community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

