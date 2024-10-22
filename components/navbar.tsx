import Image from "next/image";
import { Button } from "./ui/button";
import { auth } from "@/auth";
import Dropdownmenu from "./dropdown-menu";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="py-6 px-8 w-full flex bg-white justify-between border-b-4 border-black">
      <Button variant="ghost" className="py-4 text-2xl font-bold px-1">
        <Image
          src="/logo.png"
          width={260}
          height={200}
          alt="Logo"
          priority
          className="h-12 w-12 p-2"
        />
        MANTUKU
      </Button>

      <ul className="flex items-center justify-end gap-3">
        <li>
          <Link href="/">
            <Button variant="ghost" className="text-lg py-4">
              Home
            </Button>
          </Link>
        </li>
        {session ? (
          <>
            <li>
              <Link href="/dashboard">
                <Button variant="ghost" className="text-lg py-4">
                  Dashboard
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <Button variant="ghost" className="text-lg py-4">
                  Product
                </Button>
              </Link>
            </li>

            {session.user.role === "admin" ? (
              <li>
                <Link href="/user">
                  <Button variant="ghost" className="text-lg py-4">
                    User
                  </Button>
                </Link>
              </li>
            ) : null}

            {/* <li className=" flex flex-col mx-2">
              <h1 className="uppercase">{session?.user.name}</h1>
              <h2 className="text-xs text-gray-500">{session?.user.role}</h2>
            </li> */}
            <li>
              <Dropdownmenu session={session} />
            </li>
          </>
        ) : (
          <Link href="/login">
            <Button variant={"default"} className="py-5">
              GET STARTED
              <IoArrowForwardOutline className="ms-2" />
            </Button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
