import React from "react";
import { TabsMenu } from "@/components/TabsMenu.jsx";
import { EmployeesList } from "@/components/tabs/EmployeesList.jsx";
import { PerformanceCharts } from "@/components/tabs/PerformanceCharts.jsx";
import { CompanyForm } from "@/components/CompanyForm.jsx";
import { FinancialContent } from "../components/financial/FinancialContent";

export const DashboardInfo = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <CompanyForm readOnly/>

                <TabsMenu
                    tabs={[
                        { label: "Board", value: "board", content: <EmployeesList/> },
                        { label: "Performance", value: "performance", content: <PerformanceCharts/> },
                        { label: "Financial", value: "financial", content: <FinancialContent/> }
                    ]}
                />
            </div>
        </div>
    )
}
