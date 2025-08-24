import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import IdeaGenerator from './pages/IdeaGenerator';
import ExploreIdeas from './pages/ExploreIdeas';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onButtonClick={handlePageChange} />;
      case 'generator':
        return <IdeaGenerator />;
      case 'explore':
        return <ExploreIdeas />;
      case 'about':
        return <AboutUs />;
      default:
        return <Home onButtonClick={handlePageChange} />;
    }
  };
  
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <Navbar onPageChange={handlePageChange} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;

