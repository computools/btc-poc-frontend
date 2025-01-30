import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarFold } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns";
import { schemaEmployeeForm } from "@/lib/schemas.js";

export function EmployeeForm({ position, readOnly }) {
  const form = useForm({
    resolver: zodResolver(schemaEmployeeForm),
    defaultValues: {
      lastName: "",
      firstName: "",
      date: null,
      email: "",
      address1: "",
      address2: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative group overflow-hidden w-[166px] h-[260px] shadow-[rgba(50,50,93,0.25)_0px_2px_6px_-1px,_rgba(0,0,0,0.3)_0px_1px_3px_-1px] flex items-center justify-center cursor-pointer">
          { !readOnly &&
            <div className="absolute top-0 flex justify-center w-full p-2">
              <Plus
                className="bg-green-600 rounded-full text-white cursor-pointer hover:bg-green-700 transition-colors"/>
            </div>
          }
          <span className="text-md text-red-600 mb-14">VACANT</span>
          <div className="flex absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-4 px-3 h-[30%]">
            <p className="font-bold font-[sans-serif] text-[11px] self-end opacity-95">{ position }</p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="px-0">
        <DialogHeader>
          <DialogTitle className="border-b-2 border-gray-200 px-6 pb-8 pt-6">
            Board of Directors Applicant Form
          </DialogTitle>
        </DialogHeader>
        <div className="px-8 py-4">
          <span className="border-b-2 border-gray-100 w-full flex pb-2 text-sm pl-2 mb-6">
            Personal Information
          </span>

          <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) }>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Controller
                    name="lastName"
                    control={ form.control }
                    render={ ({ field }) => (
                      <Input id="lastName" placeholder="Last Name" { ...field } />
                    ) }
                  />
                  { form.formState.errors.lastName && (
                    <p className="text-red-500 text-sm">{ form.formState.errors.lastName.message }</p>
                  ) }
                </div>

                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Controller
                    name="firstName"
                    control={ form.control }
                    render={ ({ field }) => (
                      <Input id="firstName" placeholder="First Name" { ...field } />
                    ) }
                  />
                  { form.formState.errors.firstName && (
                    <p className="text-red-500 text-sm">{ form.formState.errors.firstName.message }</p>
                  ) }
                </div>

                <div>
                  <Label htmlFor="date">Date</Label>
                  <Controller
                    name="date"
                    control={ form.control }
                    render={ ({ field }) => (
                      <FormField
                        control={ form.control }
                        name="date"
                        {...field}
                        render={ ({ field }) => (
                          <FormItem className="flex flex-col">
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={ "outline" }
                                    className={ cn(
                                      "w-[240px] pl-3 text-left font-normal flex justify-between",
                                      !field.value && "text-muted-foreground"
                                    ) }
                                  >
                                    { field.value ? (
                                      format(field.value, "MM-dd-yyyy")
                                    ) : (
                                      <span>MM-DD-YYYY</span>
                                    ) }
                                    <CalendarFold className="flex text-gray-300"/>
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={ field.value }
                                  onSelect={ field.onChange }
                                  disabled={ (date) => date > new Date() || date < new Date("1900-01-01") }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage/>
                          </FormItem>
                        ) }
                      />
                    ) }
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Controller
                    name="email"
                    control={ form.control }
                    render={ ({ field }) => (
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                        { ...field }
                      />
                    ) }
                  />
                  { form.formState.errors.email && (
                    <p className="text-red-500 text-sm">{ form.formState.errors.email.message }</p>
                  ) }
                </div>

                <div>
                  <Label htmlFor="address1">Street Address</Label>
                  <Controller
                    name="address1"
                    control={ form.control }
                    render={ ({ field }) => (
                      <Input
                        id="address1"
                        placeholder="Street Address"
                        { ...field }
                      />
                    ) }
                  />
                  { form.formState.errors.address1 && (
                    <p className="text-red-500 text-sm">{ form.formState.errors.address1.message }</p>
                  ) }
                </div>
                <div>
                  <Label htmlFor="address2">Street Address Line 2</Label>
                  <Controller
                    name="address2"
                    control={ form.control }
                    render={ ({ field }) => (
                      <Input
                        id="address2"
                        placeholder="Street Address Line 2"
                        { ...field }
                      />
                    ) }
                  />
                </div>
              </div>
              { !readOnly &&
                  <DialogFooter>
                    <Button type="submit" className='mt-4 px-8'>Submit</Button>
                  </DialogFooter>
              }
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
