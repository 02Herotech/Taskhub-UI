import React from "react";
import AuthLayout from "../../../components/authLayout/AuthLayout";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>TaskHub | Create Account</title>
      </Head>
      <div className={`bg-white my-auto flex items-center  justify-center`}>
        <AuthLayout />
      </div>
    </div>
  );
};

export default Index;
