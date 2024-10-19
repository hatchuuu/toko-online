import { auth } from "@/auth";
import Dialogproduct from "@/components/dialog-product";
import Tableproduct from "@/components/table-product";
import React from "react";

const ProductPage = async() => {
  const session = await auth()
  const userId = session?.user.id ?? "" 
  return (
    <div className="bg-gray-300 min-h-screen w-full ">
      <div className="max-w-screen-md mx-auto py-10 text-center">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-900 p-2  w-max">
            Table of Products
          </h1>
          <Dialogproduct userId={userId}/>
        </div>
        <Tableproduct />
      </div>
    </div>
  );
};

export default ProductPage;
