import React from 'react';
import {EmployeeForm} from "@/components/tabs/EmployeeForm.jsx";
import {Minus, Pencil} from "lucide-react";

import MokgethiMagapa from "@/assets/employees/MokgethiMagapa.jpg";
import BoitumeloPaya from "@/assets/employees/BoitumeloPaya.jpg";
import AndrewJohnson from "@/assets/employees/AndrewJohnson.jpg";
import BafanaMolomo from "@/assets/employees/BafanaMolomo.jpg";
import ItemogengBasadiPheto from "@/assets/employees/ItemogengBasadiPheto.jpg";
import ThatoKewakae from "@/assets/employees/ThatoKewakae.jpg";
import RodgerSolomon from "@/assets/employees/RodgerMSolomon.jpg";
import RanjithPriyalalDeSilva from "@/assets/employees/RanjithPriyalalDeSilva.jpg";
import AmantleKgosiemang from "@/assets/employees/AmantleKgosiemang.jpg";

const employees = [
  {
    name: "Mokgethi Magapa",
    position: "BOARD CHAIRPERSON",
    photo: MokgethiMagapa,
    details: "Detailed information about Mokgethi Magapa."
  },
  {
    name: "Boitumelo Paya",
    position: "CHIEF EXECUTIVE OFFICER",
    photo: BoitumeloPaya,
    details: "Detailed information about Boitumelo Paya."
  },
  {
    name: "Andrew Johnson",
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: AndrewJohnson,
    details: "Detailed information about Andrew Johnson."
  },
  {
    name: "Ranjith Priyalal De Silva",
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: RanjithPriyalalDeSilva,
    details: "Detailed information about Ranjith Priyalal De Silva."
  },
  {
    name: "Bafana Molomo",
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: BafanaMolomo,
    details: "Detailed information about Bafana Molomo."
  },
  {
    name: null,
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: null,
    details: null
  },
  {
    name: null,
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: null,
    details: null
  },
  {
    name: "Thato Kewakae",
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: ThatoKewakae,
    details: "Detailed information about Thato Kewakae."
  },
  {
    name: "Itemogeng Basadi Pheto",
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: ItemogengBasadiPheto,
    details: "Ms ltemogeng Basadi Pheto is a multidisciplinary Human Resources professional..."
  },
  {
    name: "Amantle Kgosiemang",
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: AmantleKgosiemang,
    details: "Ms Amantle Kgosiemang is a distinguished Fellow Chartered Accountant of..."
  },
  {
    name: "Rodger Solomon",
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: RodgerSolomon,
    details: "Mr Mcedisi Roger Solomon is a seasoned leader with a..."
  },
  {
    name: null,
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: null,
    details: null
  },
  {
    name: null,
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: null,
    details: null
  },
  {
    name: null,
    position: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    photo: null,
    details: null
  },
];

export function EmployeesList({readOnly = true}) {
  return (
      <div className="w-full flex justify-center bg-white">
        <div className="grid-cols-[repeat(auto-fill,165px)] grid w-full gap-2 gap-y-8 p-5 max-w-[200px] sm:max-w-[378px] lg:max-w-[730px] xl:max-w-[900px] 2xl:max-w-[1250px]">
          { employees.map((employee, index) => (
              employee.name ? (
                  <div key={ index }
                       className="relative w-[165px] group overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_2px_6px_-1px,_rgba(0,0,0,0.3)_0px_1px_3px_-1px] items-center justify-center flex"
                  >
                    {!readOnly && (
                        <div className="absolute top-0 flex justify-between w-full p-2">
                          <Minus
                              className="bg-red-500 rounded-full text-white cursor-pointer hover:bg-red-700 transition-colors"
                          />
                          <Pencil className="cursor-pointer hover:opacity-75 transition-opacity" />
                        </div>
                    )}
                    <img src={ employee.photo }
                         alt={ employee.name }
                         className="w-full h-[260px] object-cover cursor-pointer"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-4 px-3 h-[30%] group-hover:h-[70%]">
                      <p className="text-[12px] font-[sans-serif] mb-0.5 opacity-95">{ employee.name }</p>
                      <p className="text-[10px] font-[sans-serif] opacity-90">{ employee.position }</p>
                      <hr className="border-white my-2 hidden group-hover:flex opacity-[0.5]" />
                      <p className="text-[10px] hidden mt-2 opacity-0 group-hover:flex group-hover:opacity-90 transition-opacity duration-300">
                        { employee.details }
                      </p>
                    </div>
                  </div>
              ) : <EmployeeForm key={ index } position={ employee.position } readOnly={ readOnly }/>
          ))}
        </div>
      </div>
  );
}
