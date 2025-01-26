import React from "react";

const RiskRow = ({ label, thresholds }) => {
  return (
    <div className="grid grid-cols-6 gap-x-1">
      <div className="col-start-1 col-span-1 flex items-center ml-1">
        {label}
      </div>
      {thresholds.map((threshold, index) => (
        <div
          key={index}
          className={`col-start-${
            index + 2
          } col-span-1 flex justify-center items-center`}
        >
          {threshold}
        </div>
      ))}
    </div>
  );
};

export const Benchmark = () => {
  const profitabilityRows = [
    {
      label: "Return on Assets",
      thresholds: ["greater than", 8.0, 4.0, 0.0, -5.0],
    },
    {
      label: "Return on Equity",
      thresholds: ["greater than", 15.0, 8.0, 0.0, -10.0],
    },
    {
      label: "Cost Recovery",
      thresholds: ["greater than", 1.5, 1.3, 1.0, 0.8],
    },
  ];

  const liquidityRows = [
    {
      label: "Current Ratio",
      thresholds: ["greater than", 2.0, 1.5, 1.3, 1.0],
    },
    { label: "Quick Ratio", thresholds: ["greater than", 1.2, 1.0, 0.8, 0.7] },
  ];

  const solvencyRows = [
    { label: "Debt to Assets", thresholds: ["less than", 0.3, 0.5, 0.8, 1.0] },
    { label: "Debt to Equity", thresholds: ["less than", 0.5, 1.0, 1.5, 2.0] },
    { label: "Debt to EBITDA", thresholds: ["less than", 1.5, 2.0, 3.0, 5.0] },
    {
      label: "Debt Coverage",
      thresholds: ["greater than", 0.5, 0.3, 0.2, 0.1],
    },
  ];

  const renderRows = (category, rows) => (
    <>
      <div className="grid grid-cols-6 gap-x-1">
        <div className="col-start-1 col-span-1">{category}</div>
      </div>
      {rows.map((row, index) => (
        <RiskRow key={index} label={row.label} thresholds={row.thresholds} />
      ))}
    </>
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="bg-white p-6 items-center justify-center text-custom-blue text-center h-fit font-bold text-xl">
        International Financial Performance Benchmark
      </label>
      <div className="bg-white p-2">
        <div className="grid grid-rows-auto gap-1 border-black border-t border-b text-[8px] tracking-tight">
          <div className="grid grid-cols-6 gap-x-1">
            <div className="col-start-2 col-span-5 flex justify-center border-black border-b">
              Thresholds
            </div>
          </div>

          <div className="grid grid-cols-6 gap-x-1">
            <div className="col-start-2 col-span-1 flex justify-center border-black border-b">
              Very Low Risk
            </div>
            <div className="col-start-3 col-span-1 flex justify-center border-black border-b">
              Low Risk
            </div>
            <div className="col-start-4 col-span-1 flex justify-center border-black border-b">
              Moderate Risk
            </div>
            <div className="col-start-5 col-span-1 flex justify-center border-black border-b">
              High Risk
            </div>
            <div className="col-start-6 col-span-1 flex justify-center border-black border-b">
              Very High Risk
            </div>
          </div>

          {renderRows("Profitability", profitabilityRows)}
          {renderRows("Liquidity", liquidityRows)}
          {renderRows("Solvency", solvencyRows)}
        </div>
      </div>
    </div>
  );
};
