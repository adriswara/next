'use client'
import { useState } from "react";
import { UserDataContext } from "../../UserDataContext";
import LoginComponent from "@/components/organisms/login.organisms";

const Login = () => {

 
  const [dataUser, setUser] = useState<string>("");
  return (
    <UserDataContext.Provider value ={{dataUser, setUser}}>
    
    <LoginComponent></LoginComponent>

    </UserDataContext.Provider>
  );
};

export default Login;
