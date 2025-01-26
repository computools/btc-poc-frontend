import React from "react";
import { Navigate } from "react-router-dom";
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import { HeaderBar } from "@/components/header/HeaderBar";
import { routes } from "@/lib/routes";

export const ProtectedRoute = ({ children }) => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to={routes.SIGN_IN} replace />;
  }

  return (
    <div className="container mx-auto min-h-screen flex flex-col w-full h-full bg-main">
      <Header/>
      <HeaderBar/>
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-4 pt-0 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
