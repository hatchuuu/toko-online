import Image from "next/image";
import { Button } from "./ui/button";
import { auth } from "@/auth";
import Dropdownmenu from "./dropdown-menu";
import Link from "next/link";


const Navbar = async () => {

  const session = await auth();
  return (
    <div className="py-5 px-8 w-full flex bg-gray-100 justify-between">
      <Button variant="ghost" className="hover:bg-gray-200 py-4 text-lg px-1">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Logo"
          priority
          className="h-12 w-12 p-2"
        />
        Mantuku
      </Button>

      <ul className="flex items-center justify-end gap-2">
        <li>
          <Link href="/">
            <Button variant="ghost" className="text-lg hover:bg-gray-200 py-4">
              Home
            </Button>
          </Link>
        </li>
        {session ? (
          <>
            <li>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-lg hover:bg-gray-200 py-4"
                >
                  Dashboard
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <Button
                  variant="ghost"
                  className="text-lg hover:bg-gray-200 py-4"
                >
                  Product
                </Button>
              </Link>
            </li>

            {session.user.role === "admin" ? (
              <li>
                <Link href="/user">
                  <Button
                    variant="ghost"
                    className="text-lg hover:bg-gray-200 py-4"
                  >
                    User
                  </Button>
                </Link>
              </li>
            ) : null}

            <li className=" flex flex-col mx-2">
              <h1 className="uppercase">{session?.user.name}</h1>
              <h2 className="text-xs text-gray-500">{session?.user.role}</h2>
            </li>
            <li>
              <Dropdownmenu session={session} />
            </li>
          </>
        ) : (
          <Link href="/login">
            <Button variant={"default"}>Sign In</Button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
