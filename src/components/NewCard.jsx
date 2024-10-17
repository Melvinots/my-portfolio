import React, { useState } from 'react';
import { projects } from '../constants';
import { ChevronLeft, ChevronRight, Link2 } from 'lucide-react';

const NewCard = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg w-full md:w-[350px] md:h-[500px]">
        <a href={projects[currentIndex].thumbnail} target="_blank" rel="noopener noreferrer">
          <img
            src={projects[currentIndex].thumbnail}
            alt={`Card ${projects[currentIndex].title}`}
            className="rounded-t-lg w-full h-40 sm:h-60 object-cover object-top"
          />
        </a>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">{projects[currentIndex].title}</h2>
          <p className="text-gray-700 mb-4">{projects[currentIndex].content}</p>
          <div className="flex justify-end space-x-2">
            <a href={projects[currentIndex].github} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-100 p-2 rounded-md text-sm text-gray-600 hover:text-black">
              <span className="mr-2">GitHub</span>
              <Link2 className="w-6 h-6" />
            </a>
            <a href={projects[currentIndex].youtube} target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-100 p-2 rounded-md text-sm text-red-400 hover:text-red-600 pointer-events-none">
              <span className="mr-2">YouTube</span>
              <Link2 className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-4">
        <button
          className="bg-[#202938] text-white px-3 py-2 rounded-full hover:bg-blue-400 focus:outline-none"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft />
        </button>
        <button
          className="bg-[#202938] text-white px-3 py-2 rounded-full hover:bg-blue-400 focus:outline-none"
          onClick={handleNext}
          disabled={currentIndex === projects.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default NewCard;
