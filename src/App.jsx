import React, { useState } from 'react';
import Home from "./pages/Home";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/*navbar*/}
      { }
      {currentPage === 'home' && <Home />}
    </div>);
}

export default App;



