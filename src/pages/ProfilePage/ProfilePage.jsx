import React, { useContext } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Title from "../../components/Title/Title";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import { AuthContext } from "../../contexts/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const { username, email, avatar } = user;

  const handleUserEdit = () => {};
  const handleUserDeletion = () => {};

  return (
    <PageWrapper>
      <div className="flex flex-col gap-11">
        <Title>Welcome {username}!</Title>
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
