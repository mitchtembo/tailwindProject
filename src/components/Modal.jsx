import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center border-b pb-4 text-white">
          <h2 className="text-xl font-semibold">Important Information</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 focus:outline-none">
            &times; {/* Close icon */}
          </button>
        </div>
        <div className="mt-4 text-white">
          {children}
        </div>
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
