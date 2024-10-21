import ButtonGithub from "@/components/button-github";
import ButtonGoogle from "@/components/button-google";
import Formlogin from "@/components/form-login";
import React from "react";

const Login = ({ searchParams }: { searchParams?: { error?: string } }) => {
  const paramsError = searchParams?.error;

  return (
    <div className="p-6 space-y-4">
      <h1 className="font-bold text-2xl text-gray-900">
        Sign In to your account
      </h1>
      {paramsError === "OAuthAccountNotLinked" ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">
            Account already use by other provider
          </span>
        </div>
      ) : null}
      <Formlogin />
      <div className="my-4 items-center mb-0 before:flex-1 before:border-t w-full before:border-gray-500 after:flex-1 after:border-t flex after:border-gray-500 ">
        <p className="mx-4 mb-0 text-center">Or</p>
      </div>
      <ButtonGoogle />
      <ButtonGithub />
    </div>
  );
};

export default Login;
