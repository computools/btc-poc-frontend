import React from "react";
import { ShortReportCard } from "./ShortReportCard";
import { ChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import shortData from "./data/short-data.json";
import { DropDown } from "@/components/DropDown.jsx";

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
    color: "#578bae",
  },
  mobile: {
    label: "Mobile",
    color: "#bcbcff",
  },
};

export const ReportsShort = () => {
  return (
    <div className="w-full bg-custom-gradient p-6 rounded-md shadow-lg">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_280px))] gap-2 items-center">
          <div className="flex gap-2 items-center">
          <span className="flex text-gray-500 font-[sans-serif] font-bold text-lg self-start">
            Dashboard
          </span>
            <DropDown placeholder={ "Sort By SOE Assets" } values={ ['BPC', 'WUC', 'MDCB', 'BDC'] }/>
          </div>
          <div className="flex gap-2 items-center">
            <label>Financial</label>
            <DropDown placeholder={ 'FY2022' } values={ ['2022', '2023', '2024'] }/>
          </div>
          <div className="flex gap-2 items-center">
            <label>Category</label>
            <DropDown placeholder='All' values={ ['2022', '2023', '2024'] }/>
          </div>
        </div>
        <div className="flex">
          <ScrollArea className="max-[1536px]:pb-4">
            <div className="grid grid-cols-[repeat(4,280px)] gap-2 overflow-x-auto">
              <ShortReportCard
                  label={ "BPS" }
                  total={ 23000000000.0 }
                  revenue={ 3500000000.0 }
                  sector={ "Utilities" }
                  chartConfig={ chartConfig }
                  chartData={ chartData }
                  dataKeyFirst={ "desktop" }
                  dataKeySecond={ "mobile" }
                  shortData={ shortData }
              />
              <ShortReportCard
                  label={ "WUC" }
                  total={ 10000000000.0 }
                  revenue={ 1800000000.0 }
                  sector={ "Utilities" }
                  chartConfig={ chartConfig }
                  chartData={ chartData }
                  dataKeyFirst={ "desktop" }
                  dataKeySecond={ "mobile" }
                  shortData={ shortData }
              />
              <ShortReportCard
                  label={ "MCDB" }
                  total={ 8000000000.0 }
                  revenue={ 1000000000.0 }
                  sector={ "Mining" }
                  chartConfig={ chartConfig }
                  chartData={ chartData }
                  dataKeyFirst={ "desktop" }
                  dataKeySecond={ "mobile" }
                  shortData={ shortData }
              />
              <ShortReportCard
                  label={ "BDC" }
                  total={ 5000000000.0 }
                  revenue={ 300000000.0 }
                  sector={ "Financial" }
                  chartConfig={ chartConfig }
                  chartData={ chartData }
                  dataKeyFirst={ "desktop" }
                  dataKeySecond={ "mobile" }
                  shortData={ shortData }
              />
            </div>
            <ScrollBar orientation="horizontal"/>
          </ScrollArea>
          <button className="flex items-center">
            <ChevronRight/>
          </button>
        </div>
      </div>
    </div>
  );
};
