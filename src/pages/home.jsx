import React from 'react';

function Home({onButtonClick}) {
    return (
        <div className="min-h-screen flex items-center justify-center p-5">
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
                    Hack Smarter. Build Faster. Win Bigger<br className="hidden md:block" />with AI Ideas
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    From zero to idea in seconds. Let AI unlock hackathon projects you never thought possible.
                </p>
                <button 
                onClick={ () => onButtonClick('generator')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 
                        hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                    Generate Idea
                </button>

            </div>
        </div>
    );
}
export default Home;
