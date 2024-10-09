import React, { useState } from "react";
import FormPageLayout from "../../components/FormPageLayout/FormPageLayout";
import CustomForm from "../../components/CustomForm/CustomForm";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(userData);
      alert("Account created. We've created your account for you.");
      navigate("/login");
    } catch (error) {
      console.log("Error ==>", error);
    }
  };

  return (
    <FormPageLayout>
    <CustomForm
      marginBottom={"80px"}
      title={"Signup"}
      subtitle={"Let’s start cooking!"}
      onChange={onChange}
      onSubmit={onSubmit}
      options={["username", "email", "password"]}
    />
  </FormPageLayout>
  );
};

export default SignupPage;
