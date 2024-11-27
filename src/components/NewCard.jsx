import React, { useState, useEffect } from 'react';
import { projects } from '../constants';
import { ImageModal } from './index';
import { ChevronLeft, ChevronRight, Link2 } from 'lucide-react';

const NewCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const preloadImages = () => {
      if (currentIndex > 0) {
        const prevImg = new Image();
        prevImg.src = projects[currentIndex - 1]?.thumbnail;
      }
      if (currentIndex < projects.length - 1) {
        const nextImg = new Image();
        nextImg.src = projects[currentIndex + 1]?.thumbnail;
      }
    };
  
    preloadImages();
  }, [currentIndex]);

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

  const handleImageClick = (imgSrc) => { 
    setSelectedImage(imgSrc); 
    setShowModal(true); 
  }; 
  
  const handleCloseModal = () => { 
    setShowModal(false); 
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg w-full md:w-[350px] md:h-[500px]">
        <a>
          <img
            src={projects[currentIndex].thumbnail}
            alt={`Card ${projects[currentIndex].title}`}
            className="rounded-t-lg w-full h-40 sm:h-60 object-cover object-top cursor-pointer"
            onClick={() => handleImageClick(projects[currentIndex].thumbnail)}
          />
          <ImageModal 
            show={showModal} 
            handleClose={handleCloseModal} 
            imgSrc={selectedImage} 
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
            {projects[currentIndex].youtube && (
              <a
                href={projects[currentIndex].youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-red-100 p-2 rounded-md text-sm text-red-400 hover:text-red-600"
              >
                <span className="mr-2">YouTube</span>
                <Link2 className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-4">
        <button
          className={`text-white px-3 py-2 rounded-full ${
            currentIndex === 0 ? "bg-gray-400 text-gray-500" : "bg-[#202938]"
          }`}
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft />
        </button>
        <button
          className={`text-white px-3 py-2 rounded-full ${
            currentIndex === projects.length - 1 ? "bg-gray-400 text-gray-500" : "bg-[#202938]"
          }`}
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
