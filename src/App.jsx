import React, { useState } from 'react';
import home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import IdeaGenerator from './pages/IdeaGenerator.jsx' ;
import SavedIdeas from './pages/SavedIdeas.jsx';
import ExploreIdeas from './pages/ExploreIdeas.jsx';



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



