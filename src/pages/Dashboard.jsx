import React from "react";
import { TabsMenu } from "@/components/TabsMenu.jsx";
import { ReportsShort } from "@/components/report/ReportsShort.jsx";
import { ReportsAll } from "@/components/report/ReportsAll.jsx";

export const Dashboard = () => {
    return (
        <div>
            <TabsMenu
                tabs={[
                    { label: "SOE Landscape", value: "soe-landscape", content:
                            <>
                                <div className="w-full flex flex-col items-center gap-2">
                                    <ReportsShort />
                                    <ReportsAll />
                                </div>
                            </>
                    },
                    { label: "SOE Performance", value: "soe-performance", disabled: true },
                    { label: "Governance & Policies", value: "governance-and-policies", disabled: true },
                ]}
            />
        </div>
    )
}