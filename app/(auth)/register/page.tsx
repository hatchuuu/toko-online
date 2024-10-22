import Formregister from "@/components/form-register";
import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="p-12 space-y-4">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h1 className=" mb-4 font-bold text-3xl text-gray-900">
            Create an Account
          </h1>
          <Formregister />
        </div>
        <div className="bg-main bg-opacity-75 rounded-lg  flex items-center justify-center w-full">
          <Image
            src="/password-revisi.png"
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

export default Register;
