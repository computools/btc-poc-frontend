import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";

export function DropDown({ placeholder, values }) {
  return (
    <Select>
      <SelectTrigger className="w-[160px] text-left">
        <SelectValue placeholder={ placeholder }/>
      </SelectTrigger>
      <SelectContent>
        { values.map((item, i) => <SelectItem key={ i } value={ item }>{ item }</SelectItem>) }
      </SelectContent>
    </Select>
  );
};