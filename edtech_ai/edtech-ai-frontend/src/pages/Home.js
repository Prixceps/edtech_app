import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center p-8 max-w-2xl bg-white bg-opacity-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to EdTech AI</h1>
        <p className="text-lg mb-6">
          Transform your learning experience! Upload a video, and our AI will generate customized questions for you.
        </p>
        <Link to="/process">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
