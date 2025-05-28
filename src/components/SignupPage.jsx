import React from "react";
import SignupLeft from "./SignupLeft";
import SignupRight from "./SignupRight";

const SignupPage = () => {
  return (
    <div className="flex max-w-screen h-screen">
      <div className="w-[40%]"><SignupLeft /></div>
      <div className="w-[60%]"><SignupRight /></div>
      
      
    </div>
  );
};

export default SignupPage;
