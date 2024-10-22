import ButtonGithub from "@/components/button-github";
import ButtonGoogle from "@/components/button-google";
import Formlogin from "@/components/form-login";
import Image from "next/image";
import React from "react";

const Login = ({ searchParams }: { searchParams?: { error?: string } }) => {
  const paramsError = searchParams?.error;

  return (
    <div className="p-12 space-y-4">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h1 className="font-bold text-3xl text-gray-900 mb-5">Login</h1>
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
          <div className="my-4 mb-4 items-center before:flex-1 before:border-t w-full before:border-gray-500 after:flex-1 after:border-t flex after:border-gray-500 ">
            <p className="mx-4 mb-0 text-center">Or</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ButtonGoogle />
            <ButtonGithub />
          </div>
        </div>
        <div className="bg-main bg-opacity-75 rounded-lg  flex items-center justify-center w-full">
          <Image
            src="/password-barurevisi.png"
            width={180}
            height={200}
            priority
            alt="login.png"
            className="my-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
