import React from 'react';
import { ProfitabilityChart } from "@/components/charts/ProfitabilityChart.jsx";
import { ReturnsChart } from "@/components/charts/ReturnsChart.jsx";
import { LiquidityChart } from "@/components/charts/LiquidityChart.jsx";
import { SolvencyChart } from "@/components/charts/SolvencyChart.jsx";
import { BTCLChart } from "@/components/charts/BTCLChart.jsx";

export function PerformanceCharts() {
  return (
    <div className='bg-white rounded-md p-5 grid grid-cols-1 lg:grid-cols-2 gap-8'>
      <div><ProfitabilityChart/></div>
      <div><BTCLChart/></div>
      <div><ReturnsChart/></div>
      <div><LiquidityChart/></div>
      <div><SolvencyChart/></div>
    </div>
  );
};