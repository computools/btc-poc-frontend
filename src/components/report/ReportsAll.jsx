import { Chart as ChartJS, defaults } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ChartDataLabels);
import assets from "./data/assets.json";
import revenue from "./data/revenue.json";
import totalPercent from "./data/total-percent.json";
import liquidAssets from "./data/liquid-assets.json";
import liabilities from "./data/liabilities.json";
import { CustomChart } from "./chart/CustomChart";
import { CustomPieChart } from "./chart/CustomPieChart";
import { VerticalBarChart } from "./chart/VerticalBarChart";
import { Benchmark } from "./Benchmark";
import { DropDown } from "@/components/DropDown.jsx";
import React from "react";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const colorPrimary = "#578bae";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = colorPrimary;

export const ReportsAll = () => {
  return (
    <div className="w-full bg-custom-gradient p-6 rounded-md shadow-lg">
        <div className="flex flex-col gap-2">
            <div>
                <DropDown placeholder={ "All" } values={ ['BPC', 'WUC', 'MDCB', 'BDC'] }/>
            </div>
            <div className="flex gap-2 max-[1550px]:flex-col flex-1">
                <div className="bg-white p-2 flex gap-4 max-lg:flex-col">
                    <CustomChart
                        data={assets}
                        title={"SOE Assets"}
                        subtitle={"(Millions of Pula)"}
                        colorPrimary={colorPrimary}
                        fontSizeSubtitle={16}
                        fontSizeTick={8}
                    />
                    <CustomChart
                        data={revenue}
                        title={"SOE Revenue: Income from Trading Activities"}
                        subtitle={"(Millions of Pula)"}
                        colorPrimary={colorPrimary}
                        fontSizeSubtitle={16}
                        fontSizeTick={8}
                    />
                </div>
                <div className="bg-white w-full flex p-2 justify-center">
                    <CustomPieChart
                        data={totalPercent}
                        title={"(Percent of total financial and non-financial assets)"}
                        colorPrimary={colorPrimary}
                    />
                </div>
            </div>
            <div className="flex gap-2 max-[1550px]:flex-col flex-1">
                <div className="bg-white p-2 flex gap-4 max-lg:flex-col">
                    <VerticalBarChart
                        data={liquidAssets}
                        title={"SOE Liquid Assets and Liabilities, 2022"}
                        subtitle={"(Percent of GDP)"}
                        colorPrimary={colorPrimary}
                        fontSizeSubtitle={16}
                        fontSizeTick={8}
                    />
                    <VerticalBarChart
                        data={liabilities}
                        title={"SOE Liabilities and EBITDA, 2022"}
                        subtitle={"(Percent of GDP)"}
                        colorPrimary={colorPrimary}
                        fontSizeSubtitle={16}
                        fontSizeTick={8}
                    />
                </div>
                <Benchmark />
            </div>
        </div>
    </div>
  );
};
