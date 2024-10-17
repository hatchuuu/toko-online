import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDataProduct } from "@/lib/data";
import { Metadata } from "next";
import { Button } from "./ui/button";

export const metadata: Metadata = {
  title: "Products",
};

const Tableproduct = async () => {
  const product = await getDataProduct();

  if (!product?.length) return <div>No Product Found</div>;
  const productArray = Array.isArray(product) ? product : [product];

  return (
    <div className="p-4 bg-gray-200 rounded-md mt-6">
      <Table>
        <TableHeader className="bg-gray-700 ">
          <TableRow>
            <TableHead className="text-center text-white">No</TableHead>
            <TableHead className="text-center text-white">
              Product Name
            </TableHead>
            <TableHead className="text-center text-white">Price</TableHead>
            <TableHead className="text-center text-white">Created At</TableHead>
            <TableHead className="text-center text-white">Created By</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {productArray.map((items, index) => (
            <TableRow key={items.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{items.name}</TableCell>
              <TableCell>{items.price}</TableCell>
              <TableCell>{items.createdAt.toDateString()}</TableCell>
              <TableCell>{items.user.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tableproduct;
