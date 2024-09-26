import React from "react";
import EditPenIcon from "../EditPenIcon/EditPenIcon";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

const ProfileBanner = ({ avatar, username, email, handleUserEdit, handleUserDeletion }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1280px] min-h-[450px] p-20 flex items-center rounded-3xl relative gap-20 shadow-md">
        <img className="w-[290px] h-[290px] rounded-full object-cover" src={avatar} alt="avatar" />
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold">Username: {username}</p>
          <p className="text-2xl font-bold">Email: {email}</p>
        </div>
        <div className="flex gap-4 absolute top-6 right-6">
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
