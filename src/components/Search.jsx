import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchComponent() {

  return (
    <div className="flex items-center space-x-2 w-full">
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <Search className="w-5 h-5"/>
        </span>
        <Input
          type="text"
          placeholder="Search..."
          value=''
          className="pl-10 w-full"
          onChange={()=>{}}
        />
      </div>
    </div>
  );
}
