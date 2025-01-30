import React from "react";
import { TabsMenu } from "@/components/TabsMenu.jsx";
import { PerformanceAdmin } from "@/components/tabs/PerformanceAdmin.jsx";
import { EmployeesList } from "@/components/tabs/EmployeesList.jsx";
import { CompanyForm } from "@/components/CompanyForm.jsx";
import { FinancialContent } from "../components/financial/FinancialContent";

export const Administration = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <CompanyForm/>

        <TabsMenu
            tabs={[
                { label: "BOARD", value: "board", content: <EmployeesList readOnly={ false } /> },
                { label: "PERFORMANCE", value: "performance", content: <PerformanceAdmin/> },
                { label: "FINANCIAL", value: "financial", content: <FinancialContent readOnly={false}/> }
            ]}
        />
      </div>
    </div>
  )
}