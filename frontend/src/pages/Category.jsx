import { useState } from 'react';
import Login from '../components/auth_cards/Login';

const Category = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const openLoginModal = (type) => {
    setSelectedType(type); // Set the selected type (Client/Freelancer)
    setShowLoginModal(true); // Open the login modal
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false); // Close the login modal
  };

  return (
    <div className="flex items-center justify-center align-middle text-center justify-items-center h-screen">
      <div className="flex-1 border-r border-purple-400">
        <button onClick={() => openLoginModal('Client')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            Client
          </span>
        </button>
      </div>
      <div className="flex-1 border-l border-purple-400">
        <button onClick={() => openLoginModal('Freelancer')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            Freelancer
          </span>
        </button>
      </div>
      {showLoginModal && <Login onClose={handleCloseLoginModal} userType={selectedType} />}
    </div>
  );
};

export default Category;
