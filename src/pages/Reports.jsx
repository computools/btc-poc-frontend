import React from "react";
import { ReportsShort } from "@/components/report/ReportsShort.jsx";
import { ReportsAll } from "@/components/report/ReportsAll.jsx";

export const Reports = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-5 gap-2">
        <div className="w-full bg-custom-gradient p-6 rounded-md shadow-lg">
          <ReportsShort />
        </div>
        <div className="w-full bg-custom-gradient p-6 rounded-md shadow-lg">
          <ReportsAll />
        </div>
      </div>
    </div>
  );
};
