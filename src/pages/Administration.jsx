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
          boardComponent={ <EmployeesList readOnly={ false }/> }
          perfomanceComponent={ <PerformanceAdmin/> }
          financialComponent={<FinancialContent readOnly={false}/>}
        />
      </div>
    </div>
  )
}