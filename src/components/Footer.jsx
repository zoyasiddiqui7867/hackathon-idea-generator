import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white mb-2">ThinkBot</h2>
            <p className="text-sm max-w-sm">
              Your  companion for generating innovative hackathon ideas.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Legal</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
          <p>&copy; 2025 ThinkBot. All rights reserved.</p>
        </div>
      </footer>
  );
}

export default Footer;