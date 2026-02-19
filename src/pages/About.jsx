import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:p-1 text-white gap-12 lg:gap-20">
      
      <div className="lg:w-1/2 flex flex-col items-start gap-6 z-10 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
          Bringing <span className="text-pink-500">Food Lovers</span> <br /> Together.
        </h1>
        
        <div className="flex flex-col gap-4 text-gray-400 text-base lg:text-lg font-medium max-w-lg">
          <p>
            Welcome to our culinary community! We built this platform because we believe that cooking shouldn't be a chore—it should be an adventure.
          </p>
          <p>
            Whether you are a seasoned chef or someone just learning how to boil water, our goal is to provide a space where you can discover mouth-watering recipes, share your own secret family dishes, and find endless inspiration for your next meal.
          </p>
          <p>
            Food tastes better when it's shared. Join us in making every meal a masterpiece.
          </p>
        </div>
        
        <div className="mt-4">
          <Link 
            to="/create-recipe" 
            className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-500/30 active:scale-95 inline-block text-center"
          >
            Share Your First Recipe
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center lg:justify-end w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pink-500/20 blur-[100px] rounded-full z-0"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="People cooking together in a modern kitchen" 
          className="w-full max-w-[550px] h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-[2rem] lg:rounded-[3rem] shadow-2xl z-10 relative"
        />
      </div>

    </div>
  );
};

export default About;