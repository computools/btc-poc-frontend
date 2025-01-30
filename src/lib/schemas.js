import { z } from "zod";

export const fieldNames = {
  email: "email",
  password: "password"
}

export const signInSchema = z.object({
  [fieldNames.email]: z.string().email("Email is invalid").min(1, "Email is invalid"),
  [fieldNames.password]: z.string().min(8, "Password must be at least 8 characters long.")
})

export const performanceFieldNames = {
  quarter: "quarter",
  year: "year",
  income: "income",
  totalWageBill: "totalWageBill",
  executiveWageBill: "executiveWageBill",
  totalStaff: "totalStaff",
  totalExecutive: "totalExecutive",
  totalAssets: "totalAssets",
  operationalExpenditure: "operationalExpenditure"
}

export const performanceSchema = z.object({
  [performanceFieldNames.quarter]: z.string().min(1, "Quarter is required"),
  [performanceFieldNames.year]: z.string().min(4, "Year is required").max(4, "Enter a valid year"),
  [performanceFieldNames.income]: z.string().min(1, "Income is required"),
  [performanceFieldNames.totalWageBill]: z.string().min(1, "Total Wage Bill is required"),
  [performanceFieldNames.executiveWageBill]: z.string().min(1, "Executive Wage Bill is required"),
  [performanceFieldNames.totalStaff]: z.string().min(1, "Total Staff is required"),
  [performanceFieldNames.totalExecutive]: z.string().min(1, "Total Executive is required"),
  [performanceFieldNames.totalAssets]: z.string().min(1, "Total Assets are required"),
  [performanceFieldNames.operationalExpenditure]: z.string().min(1, "Operational Expenditure is required"),
});

export const schemaEmployeeForm = z.object({
  lastName: z.string().min(1, "Last Name is required"),
  firstName: z.string().min(1, "First Name is required"),
  date: z.date(),
  email: z.string().email("Invalid email address"),
  address1: z.string().min(1, "Street Address is required"),
  address2: z.string().optional(),
});

export const schemaCompanyForm = z.object({
  name: z.string().min(1, "Name is required"),
  short_name: z.string().min(1, "Short Name is required"),
  public_id: z.string().min(1, "ID is required"),
  physical_address: z.string().min(1, "Physical address is required"),
  physical_city: z.string().min(1, "City is required"),
  physical_zip: z.string().regex(/^\d+$/, "Code must be numeric"),
  postal_address: z.string().min(1, "Postal address is required"),
  postal_city: z.string().min(1, "City is required"),
  postal_zip: z.string().regex(/^\d+$/, "Code must be numeric"),
});

export const reportFieldName = {
  name: "name",
  year: "year",
  company_id: "company_id",
  url: "url",
  preview_url: "preview_url",
}

export const reportSchema = z.object({
  name:z.string().min(1,"Name is required"),
  year:z.number().min(1,"Year is required"),
  company_id:z.number().min(1,"Company id is required"),
  url:z.string().min(1,"URL is required"),
  preview_url:z.string().min(1,"Preview URL is required")
})
