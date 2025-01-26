import React from "react";
import { ShortReportCard } from "./ShortReportCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import shortData from "./data/short-data.json";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};

const SelectSort = () => (
  <Select>
    <SelectTrigger className="w-[160px]">
      <SelectValue placeholder="Sort By SOE Assets" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="bpc">BPC</SelectItem>
      <SelectItem value="wuc">WUC</SelectItem>
      <SelectItem value="mdcb">MDCB</SelectItem>
      <SelectItem value="bdc">BDC</SelectItem>
    </SelectContent>
  </Select>
);

const SelectFinancial = () => (
  <Select>
    <SelectTrigger className="w-[160px]">
      <SelectValue placeholder="FY2022" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="2022">2022</SelectItem>
      <SelectItem value="2023">2023</SelectItem>
      <SelectItem value="2024">2024</SelectItem>
    </SelectContent>
  </Select>
);

const SelectCategory = () => (
  <Select>
    <SelectTrigger className="w-[160px]">
      <SelectValue placeholder="All" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="2022">2022</SelectItem>
      <SelectItem value="2023">2023</SelectItem>
      <SelectItem value="2024">2024</SelectItem>
    </SelectContent>
  </Select>
);

export const ReportsShort = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_280px))] gap-2 items-center">
        <div className="flex gap-2 items-center">
          <h2 className="text-gray-400 font-bold text-xl self-start">
            Dashboard
          </h2>
          <SelectSort />
        </div>
        <div className="flex gap-2 items-center">
          <label>Financial</label>
          <SelectFinancial />
        </div>
        <div className="flex gap-2 items-center">
          <label>Category</label>
          <SelectCategory />
        </div>
      </div>
      <div className="flex">
        <ScrollArea className="max-[1536px]:pb-4">
          <div className="grid grid-cols-[repeat(4,280px)] gap-2 overflow-x-auto">
            <ShortReportCard
              label={"BPS"}
              total={23000000000.0}
              revenue={3500000000.0}
              sector={"Utilities"}
              chartConfig={chartConfig}
              chartData={chartData}
              dataKeyFirst={"desktop"}
              dataKeySecond={"mobile"}
              shortData={shortData}
            />
            <ShortReportCard
              label={"WUC"}
              total={10000000000.0}
              revenue={1800000000.0}
              sector={"Utilities"}
              chartConfig={chartConfig}
              chartData={chartData}
              dataKeyFirst={"desktop"}
              dataKeySecond={"mobile"}
              shortData={shortData}
            />
            <ShortReportCard
              label={"MCDB"}
              total={8000000000.0}
              revenue={1000000000.0}
              sector={"Mining"}
              chartConfig={chartConfig}
              chartData={chartData}
              dataKeyFirst={"desktop"}
              dataKeySecond={"mobile"}
              shortData={shortData}
            />
            <ShortReportCard
              label={"BDC"}
              total={5000000000.0}
              revenue={300000000.0}
              sector={"Financial"}
              chartConfig={chartConfig}
              chartData={chartData}
              dataKeyFirst={"desktop"}
              dataKeySecond={"mobile"}
              shortData={shortData}
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <button className="flex items-center">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
