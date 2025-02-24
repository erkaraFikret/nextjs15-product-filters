"use client";
import { Input } from "./ui/input";
import { parseAsInteger, useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductsFilterProps {
  refetchProducts: () => Promise<void>;
}

const ProductFilter = ({ refetchProducts }: ProductsFilterProps) => {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
  });
  const [perPage, setPerPage] = useQueryState(
    "perPage",
    parseAsInteger.withDefault(10)
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

  const handlePerPageChange = (value: string) => {
    setPerPage(Number(value));
    setTimeout(() => {
      refetchProducts();
    }, 300);
  };
  return (
    <div className="flex justify-between">
      <div>
        <Input
          placeholder="Search"
          className="w-full"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div>
        <Select
          value={perPage.toString()}
          onValueChange={(value) => handlePerPageChange(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Per Page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
            <SelectItem value="40">40</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductFilter;
