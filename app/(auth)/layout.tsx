const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-main bg-opacity-30 ">
      <div className="flex flex-col justify-between items-center py-16 px-6 mx-auto h-screen">
        <div className="w-full bg-white rounded-xl mt-0 max-w-4xl border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
