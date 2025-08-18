import React, { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import IdeaGenerator from './pages/IdeaGenerator' ;
import SavedIdeas from './pages/SavedIdeas';
import ExploreIdeas from './pages/ExploreIdeas';



function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage (page);
  };

  const renderPage = () =>
  {
    switch (currentPage) {
      case 'home': return < Home />;

      case 'generator' : return < IdeaGenerator />;

      case 'saved' : return < SavedIdeas />;

      case 'explore' : return < ExploreIdeas /> ;

      default:
      return < Home />;
    }
  };
  
  
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar  onPageChange ={handlePageChange} />
      
     {renderPage()}
     
    </div>);
}

export default App;



