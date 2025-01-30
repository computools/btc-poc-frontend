import React, { forwardRef, useImperativeHandle } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { schemaCompanyForm } from "@/lib/schemas.js";
import { useSelector } from "react-redux";
import { companiesData } from "@/store/store.js";

const SearchForm = forwardRef(({ onSubmit }, ref) => {
  const { company } = useSelector(companiesData);
  useImperativeHandle(ref, () => ({ handleSubmit }));

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schemaCompanyForm),
    defaultValues: {
      name: company?.name || "Botswana Telecommunications Corporation Limited",
      short_name: company?.short_name || "BTCL",
      public_id: company?.public_id || "BW007489",
      physical_address: company?.physical_address || "Megaleng House, Khama Crescent, Plot 50350",
      physical_city: company?.physical_city || "Gaborone",
      physical_zip: company?.physical_zip || "097053",
      postal_address: company?.postal_address || "P O Box 700",
      postal_city: company?.postal_city || "Gaborone",
      postal_zip: company?.postal_zip || "097053",
    },
  });

  return (
      <form ref={ref} onSubmit={handleSubmit(onSubmit)} className="flex flex-col pt-4">
        <div className="flex w-full gap-4">
          <div className="flex flex-col w-3/5 text-sm">
            <div className='flex w-full items-center gap-2'>
              <label className="w-20 font-[sans-serif] text-gray-700 text-center">Name</label>
              <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                      <Input placeholder="Name" className="flex-1 h-fitmt-1 font-[sans-serif] font-medium text-gray-600" {...field} />
                  )}
              />
            </div>
            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col w-1/5 text-sm">
            <div className='flex w-full items-center gap-2'>
              <label className="w-12 font-[sans-serif] text-gray-700 text-center ">Short Name</label>
              <Controller
                  name="short_name"
                  control={control}
                  render={({ field }) => (
                      <Input placeholder="Short Name" className="flex-1 h-fitmt-1 text-center font-[sans-serif] font-medium text-gray-600" {...field} />
                  )}
              />
            </div>
            {errors.short_name && <span className="text-red-500 text-xs">{errors.short_name.message}</span>}
          </div>
          <div className="flex flex-col w-1/5 text-sm">
            <div className='flex w-full items-center gap-2'>
              <label className="w-12 font-[sans-serif] text-gray-700 text-center">ID</label>
              <Controller
                  name="public_id"
                  control={control}
                  render={({ field }) => (
                      <Input placeholder="ID" className="flex-1 h-fitmt-1 text-center font-[sans-serif] font-medium text-gray-600" {...field} />
                  )}
              />
            </div>
            {errors.public_id && <span className="text-red-500 text-xs">{errors.public_id.message}</span>}
          </div>
        </div>

        <span className="text-md font-bold text-gray-500 mt-4 font-[sans-serif]">Address</span>
        <hr className="border-gray-400 my-1"/>

        <div className="flex w-full gap-4">
          <div className="flex flex-col w-3/5 text-sm">
            <div className='flex w-full items-center gap-2'>
              <label className="w-20 font-[sans-serif] text-gray-700 text-center">Physical</label>
              <Controller
                  name="physical_address"
                  control={control}
                  render={({ field }) => (
                      <Input placeholder="Physical" className="flex-1 h-fitmt-1 font-[sans-serif] font-medium text-gray-600" {...field} />
                  )}
              />
            </div>
            {errors.physical_address && <span className="text-red-500 text-xs">{errors.physical_address.message}</span>}
          </div>
          <div className="flex flex-col w-1/5 text-sm">
            <div className='flex w-full items-center gap-2'>
              <label className="w-12 font-[sans-serif] text-gray-700 text-center">City</label>
              <Controller
                  name="physical_city"
                  control={control}
                  render={({ field }) => (
                      <Input placeholder="City" className="flex-1 h-fitmt-1 text-center font-[sans-serif] font-medium text-gray-600" {...field} />
                  )}
              />
            </div>
            {errors.physical_city && <span className="text-red-500 text-xs">{errors.physical_city.message}</span>}
          </div>
          <div className="flex flex-col w-1/5 text-sm">
            <div className='flex w-full items-center gap-2'>
              <label className="w-12 font-[sans-serif] text-gray-700 text-center">Code</label>
              <Controller
                  name="physical_zip"
                  control={control}
                  render={({ field }) => (
                      <Input placeholder="Code" className="flex-1 h-fitmt-1 text-center font-[sans-serif] font-medium text-gray-600" {...field} />
                  )}
              />
            </div>
            {errors.physical_zip && <span className="text-red-500 text-xs">{errors.physical_zip.message}</span>}
          </div>
        </div>

        <div className="flex w-full gap-4 mt-2">
          <div className="flex flex-col w-3/5 text-sm">
            <div className='flex w-full items-center gap-2'>
              <label className="w-20 font-[sans-serif] text-gray-700 text-center">Postal</label>
              <Controller
                  name="postal_address"
                  control={control}
                  render={({ field }) => (
                      <Input placeholder="Postal" className="flex-1 h-fitmt-1 font-[sans-serif] font-medium text-gray-600" {...field} />
                  )}
              />
            </div>
            {errors.postal_address && <span className="text-red-500 text-xs">{errors.postal_address.message}</span>}
          </div>
          <div className="flex flex-col w-1/5 text-sm">
            <div className='flex w-full items-center gap-2'>
              <label className="w-12 font-[sans-serif] text-gray-700 text-center">City</label>
              <Controller
                  name="postal_city"
                  control={control}
                  render={({ field }) => (
                      <Input placeholder="City" className="flex-1 h-fitmt-1 text-center font-[sans-serif] font-medium text-gray-600" {...field} />
                  )}
              />
            </div>
            {errors.postal_city && <span className="text-red-500 text-xs">{errors.postal_city.message}</span>}
          </div>
          <div className="flex flex-col w-1/5 text-sm">
            <div className='flex w-full items-center gap-2'>
              <label className="w-12 font-[sans-serif] text-gray-700 text-center">Code</label>
              <Controller
                  name="postal_zip"
                  control={control}
                  render={({ field }) => (
                      <Input placeholder="Code" className="flex-1 h-fit mt-1 text-center font-[sans-serif] font-medium text-gray-600" {...field} />
                  )}
              />
            </div>
            {errors.postal_zip && <span className="text-red-500 text-xs">{errors.postal_zip.message}</span>}
          </div>
        </div>
      </form>
  );
})
export default SearchForm;
