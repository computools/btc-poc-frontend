import React, { useEffect, useRef } from 'react';
import SearchComponent from "@/components/Search.jsx";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useDispatch, useSelector } from "react-redux";
import { companiesData } from "@/store/store.js";
import { getCompanyById, updateCompanyById } from "@/store/companies/companiesAction.jsx";
import { Loader } from "@/components/Loader.jsx";
import SearchForm from "@/components/SearchForm.jsx";

export function CompanyForm({ readOnly = false }) {
  const dispatch = useDispatch();
  const { company, loading } = useSelector(companiesData);
  const formRef = useRef(null);

  const onSubmit = (data) => {
    if (!readOnly) {
      dispatch(updateCompanyById({ company: data, id: company?.id || 1 }));
    }
  };

  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit(onSubmit)();
    }
  };

  useEffect(() => {
    dispatch(getCompanyById('1'))
  }, []);


  return (
    <div className="w-full bg-custom-gradient p-6 rounded-md shadow-lg">
      <div className="flex w-full gap-6">
        <SearchComponent/>
        { !readOnly && (
          <div className="flex items-center space-x-4">
            <Pencil className="hover:opacity-75 transition-opacity cursor-pointer"/>
            <Button
              type="button"
              onClick={ handleFormSubmit }
              className="w-32 bg-green-600 hover:bg-green-800 text-[16px]"
            >
              Save
            </Button>
          </div>
        ) }
      </div>
      { loading ? (
          <div className="min-h-64 flex items-center justify-center">
            <Loader/>
          </div>
        ) :
        <SearchForm ref={ formRef } onSubmit={ onSubmit }/>
      }
    </div>
  );
};