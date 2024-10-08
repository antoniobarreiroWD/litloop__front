import React, { useContext } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Title from "../../components/Title/Title";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import { AuthContext } from "../../contexts/AuthContext";
import useThemeStore from "../../components/useThemeStore";


const ProfilePage = () => {
  const { user } = useContext(AuthContext); 
  const { username, email, avatar } = user || {}; 
  const { darkMode } = useThemeStore();

  const handleUserEdit = () => {};
  const handleUserDeletion = () => {};

  return (
    <PageWrapper title="Perfil">
      <div
        className={`flex flex-col gap-11 p-6 ${
          darkMode ? " text-white" : " text-gray-900"
        } transition-all duration-300`}
      >
      
        <Title className="text-2xl m-2 p-2 sm:text-2xl md:text-5xl">
          Bienvenid@ {username || 'Usuario'}!
        </Title>

        
        <ProfileBanner
          username={username}
          email={email}
          avatar={avatar}
          handleUserDeletion={handleUserDeletion}
          handleUserEdit={handleUserEdit}
        />

     
       

      </div>
    </PageWrapper>
  );
};

export default ProfilePage;
