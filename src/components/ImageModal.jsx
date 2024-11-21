import React, { useRef, useEffect } from 'react';
import { SquareX } from 'lucide-react';

function ImageModal({ show, handleClose, imgSrc }) {
    const modalRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        }

        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show, handleClose]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div ref={modalRef} className="relative bg-white p-4 rounded shadow-lg max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <SquareX className="absolute top-2 right-2 cursor-pointer text-white bg-slate-500" onClick={handleClose}/>
                <img src={imgSrc} alt="Modal Content" className="max-w-full max-h-full" />
            </div>
        </div>
    );
}

export default ImageModal;
