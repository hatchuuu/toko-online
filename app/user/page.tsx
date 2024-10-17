import Tableuser from "@/components/table-user";

const Userpage = () => {
  return (
    <div className="bg-gray-300 min-h-screen w-full ">
      <div className="max-w-screen-md mx-auto py-10 text-center">
        <h1 className ='text-3xl font-semibold text-gray-900 p-2  w-max'>Table of Users</h1>
        <Tableuser />
      </div>
    </div>
  );
};

export default Userpage;
