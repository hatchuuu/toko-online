import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDataUser } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

const Tableuser = async () => {
  const users = await getDataUser();

  if (!users?.length) return <div>No Users Found</div>;
  const userArray = Array.isArray(users) ? users : [users];

  return (
    <div className="p-4 bg-gray-200 rounded-md mt-6">
      <Table>
        {/* <TableCaption>Table User</TableCaption> */}

        <TableHeader className="bg-gray-700 ">
          <TableRow>
            <TableHead className="text-center text-white">No</TableHead>
            <TableHead className="text-center text-white">Username</TableHead>
            <TableHead className="text-center text-white">Email</TableHead>
            <TableHead className="text-center text-white">Role</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {userArray.map((items, index) => (
            <TableRow key={items.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{items?.username}</TableCell>
              <TableCell>{items?.email}</TableCell>
              <TableCell>{items?.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Tai</TableCell>
            <TableCell className="text-right">Hehehehe</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};

export default Tableuser;
