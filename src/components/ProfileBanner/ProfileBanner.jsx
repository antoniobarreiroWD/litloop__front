import React from "react";
import EditPenIcon from "../EditPenIcon/EditPenIcon";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

const ProfileBanner = ({ avatar, username, email, handleUserEdit, handleUserDeletion }) => {
  return (
    <div className="flex justify-center px-4 sm:px-8">
      <div className="w-full max-w-[1280px] min-h-[350px] sm:min-h-[400px] md:min-h-[450px] p-8 sm:p-16 lg:p-20 flex flex-col sm:flex-row items-center rounded-3xl relative gap-10 sm:gap-20 shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
       
        <img
          className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[290px] md:h-[290px] rounded-full object-cover"
          src={avatar}
          alt="avatar"
        />
       
        <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Username: {username}
          </p>
          <p className="text-lg sm:text-2xl md:text-2xl font-bold text-gray-600 dark:text-gray-300">
            Email: {email}
          </p>
        </div>
       
        <div className="flex gap-4 absolute top-4 sm:top-6 right-4 sm:right-6">
          <div className="cursor-pointer" onClick={handleUserEdit}>
            <EditPenIcon />
          </div>
          <div className="cursor-pointer" onClick={handleUserDeletion}>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
