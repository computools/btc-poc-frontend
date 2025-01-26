import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { performanceFieldNames, performanceSchema } from "@/lib/schemas.js";

export const PerformanceForm = () => {
    const form = useForm({
        resolver: zodResolver(performanceSchema),
        defaultValues: {
            [performanceFieldNames.quarter]: "1",
            [performanceFieldNames.year]: "2024",
            [performanceFieldNames.income]: "1600000000.00",
            [performanceFieldNames.totalWageBill]: "45827839.00",
            [performanceFieldNames.executiveWageBill]: "45827839.00",
            [performanceFieldNames.totalStaff]: "800",
            [performanceFieldNames.totalExecutive]: "12",
            [performanceFieldNames.totalAssets]: "27000000000.00",
            [performanceFieldNames.operationalExpenditure]: "900000000.00"
        }
    });

    const fields = [
        "quarter",
        "year",
        "income",
        "totalWageBill",
        "executiveWageBill",
        "totalStaff",
        "totalExecutive",
        "totalAssets",
        "operationalExpenditure",
    ];

    return (
        <Form {...form}>
            <form className="flex flex-col">
                {
                    fields.map((field) => (
                    <FormField
                        key={field}
                        control={form.control}
                        name={field}
                        render={({ field }) => (
                            <FormItem className="flex items-center w-[370px] justify-between">
                                <label>{field.name
                                        .replace(/([A-Z])/g, " $1")
                                        .replace(/^./, (char) => char.toUpperCase())}
                                </label>
                                <FormControl>
                                    <Input className="w-[170px] text-end" placeholder={`Enter ${field.name}`}{...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
            </form>
        </Form>
    );
};
