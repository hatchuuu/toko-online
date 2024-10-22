import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Session } from "next-auth";
import { signOut } from "@/auth";

const Dropdownmenu = ({ session }: { session: Session | null }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="px-1 flex justify-center items-center rounded-full"
        >
          <Image
            src={
              session?.user.image || "https://avatar.iran.liara.run/public/boy"
            }
            width={200}
            height={200}
            priority
            alt="Avatar"
            className=" p-[2px] h-10 w-10 rounded-full border border-gray-400 "
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 me-10">
        <DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="https://www.github.com/">Github</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="https://www.linkedin.com/">Linkedin</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <form
            className="w-full "
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button type="submit" className="w-full text-start">
              Log Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdownmenu;
