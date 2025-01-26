import React from 'react';
import MokgethiMagapa from "@/assets/employees/MokgethiMagapa.png";
import BoitumeloPaya from "@/assets/employees/BoitumeloPaya.png";
import AndrewJohnson from "@/assets/employees/AndrewJohnson.png";
import { EmployeeForm } from "@/components/tabs/EmployeeForm.jsx";
import { Minus, Pencil } from "lucide-react";

const employees = [
  {
    name: "Mokgethi Magapa",
    position: "Board Chairperson",
    photo: MokgethiMagapa,
    details: "Detailed information about Mokgethi Magapa."
  },
  {
    name: "Boitumelo Paya",
    position: "Chief Executive Officer",
    photo: BoitumeloPaya,
    details: "Detailed information about Boitumelo Paya."
  },
  {
    name: "Andrew Johnson",
    position: "Independent Non-Executive Director",
    photo: AndrewJohnson,
    details: "Detailed information about Andrew Johnson."
  },
  {
    name: "Mokgethi Magapa",
    position: "Board Chairperson",
    photo: MokgethiMagapa,
    details: "Detailed information about Mokgethi Magapa."
  },
  {
    name: null,
    position: "Chief Executive Officer",
    photo: null,
    details: null
  },
  {
    name: "Andrew Johnson",
    position: "Independent Non-Executive Director",
    photo: AndrewJohnson,
    details: "Detailed information about Andrew Johnson."
  },
  {
    name: "Mokgethi Magapa",
    position: "Board Chairperson",
    photo: MokgethiMagapa,
    details: "Detailed information about Mokgethi Magapa."
  },
  {
    name: "Boitumelo Paya",
    position: "Chief Executive Officer",
    photo: BoitumeloPaya,
    details: "Detailed information about Boitumelo Paya."
  },
  {
    name: "Andrew Johnson",
    position: "Independent Non-Executive Director",
    photo: AndrewJohnson,
    details: "Detailed information about Andrew Johnson."
  },
];

export function EmployeesList({ readOnly = true }) {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-white rounded-md p-5">
        {employees.map((employee, index) => (
            employee.name ? (
                <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg shadow-lg items-center justify-center flex"
                >
                  {!readOnly && (
                      <div className="absolute top-0 flex justify-between w-full p-2">
                        <Minus
                            className="bg-red-500 rounded-full text-white cursor-pointer hover:bg-red-700 transition-colors"
                        />
                        <Pencil className="cursor-pointer hover:opacity-75 transition-opacity" />
                      </div>
                  )}
                  <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 h-[35%] group-hover:h-[70%]">
                    <p className="font-semibold text-xs">{employee.name}</p>
                    <p className="text-xs">{employee.position}</p>
                    <hr className="border-white my-2 hidden group-hover:flex opacity-[0.5]" />
                    <p className="hidden text-xs mt-2 opacity-0 group-hover:flex group-hover:opacity-100 transition-opacity duration-300">
                      {employee.details}
                    </p>
                  </div>
                </div>
            ) : !readOnly ? <EmployeeForm position={ employee.position } /> : (
                <div className="relative group overflow-hidden rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-md text-red-600 mb-14">VACANT</span>
                  <div
                      className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 h-[35%]">
                    <p className="font-semibold text-xs">{ employee.position }</p>
                  </div>
                </div>
            )
        ))}
      </div>
  );
}
