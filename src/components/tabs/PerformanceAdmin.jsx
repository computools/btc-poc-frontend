import React from "react";
import { PerformanceForm } from "@/components/PerformanceForm";

export function PerformanceAdmin () {
    return (
        <div className="flex gap-[160px] p-[60px] pt-[80px] bg-white rounded-md">
            <PerformanceForm />
            <PerformanceForm />
        </div>
    );
}