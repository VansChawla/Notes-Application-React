import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:p-10 text-white">
      
      <div className="lg:w-1/2 flex flex-col items-start gap-6 z-10 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
          Cook Like a <span className="text-pink-500">Pro</span>,<br /> 
          Eat Like a <span className="text-pink-500">King</span>.
        </h1>
        
        <p className="text-gray-400 text-base lg:text-xl font-medium max-w-lg">
          Discover thousands of delicious recipes, share your own culinary creations, and save your favorites all in one place. Let's get cooking!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link 
            to="/recipes" 
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-500/30 active:scale-95 text-center"
          >
            Explore Recipes
          </Link>
          <Link 
            to="/create-recipe" 
            className="border-2 border-gray-500 text-gray-300 px-6 py-3 rounded-full font-bold hover:border-white hover:text-white transition-all active:scale-95 text-center"
          >
            Share Recipe
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end w-full">
        <img 
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Healthy delicious food bowl" 
            className="w-full max-w-[500px] h-[400px] md:h-[600px] object-cover rounded-[2rem] lg:rounded-[3rem] shadow-2xl shadow-pink-500/10 rotate-2 hover:rotate-0 transition-all duration-500"
        />
      </div>

    </div>
  );
};

export default Home;