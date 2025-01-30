import { Info } from "lucide-react";
import { ChartShort } from "./chart/ChartShort";
import React from "react";
import {routes} from "@/lib/routes.js";
import {Link} from "react-router-dom";

export const ShortReportCard = ({
  label,
  total,
  revenue,
  sector,
  shortData
}) => {
  return (
    <Link
        to={routes.DASHBOARDS_INFO}
        className="flex w-full flex-col bg-white rounded-xl pt-2 pr-2 pb-2 cursor-pointer"
    >
      <div className="flex text-xs flex-wrap flex-1">
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-bold">{label}</h3>
          <div className="flex flex-col">
            <p className="font-bold flex gap-2">
              <span>BWP</span> <span>{total}</span>
            </p>
            <p className="font-[8px] opacity-80">Total assets</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">BWP {revenue}</p>
            <p className="font-[8px] opacity-80">Revenue</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">{sector}</p>
            <p className="font-[8px] opacity-80">Sector</p>
          </div>
        </div>
        <ChartShort data={shortData}/>
      </div>
      <div className="flex justify-end">
        <Info />
      </div>
    </Link>
  );
};
