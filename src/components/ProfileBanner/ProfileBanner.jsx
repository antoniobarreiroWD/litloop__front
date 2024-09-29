import React from "react";

const ProfileBanner = ({ avatar, username, email, handleUserEdit, handleUserDeletion }) => {
  return (
    <div className="flex justify-center px-4 sm:px-8">
      <div className="w-full max-w-[1280px] min-h-[400px] p-8 sm:p-16 lg:p-20 flex flex-col sm:flex-row items-center rounded-3xl relative gap-10 sm:gap-20 bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
        
       
        <div className="relative">
          <img
            className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[290px] md:h-[290px] rounded-full object-cover shadow-md"
             src=""  //{avatar}
            alt=""
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 dark:border-blue-300"></div>
        </div>
        
       
        <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {username}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300">
            {email}
          </p>
        </div>

        
        {/* <div className="flex gap-4 absolute top-4 sm:top-6 right-4 sm:right-6">
          <button 
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            onClick={handleUserEdit}
          >
            Editar
          </button>
          <button 
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            onClick={handleUserDeletion}
          >
            Eliminar
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileBanner;

