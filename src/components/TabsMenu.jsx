import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsMenu({ boardComponent, perfomanceComponent, financialComponent }) {
  return (
    <div className="w-full mx-auto mt-5">
      <Tabs defaultValue="board">
        <TabsList className="flex justify-start p-0 bg-main border-b-2 rounded-none">
          <TabsTrigger value="board"
                       className="active:border rounded-t-md px-8 active:bg-white shadow-none mb-[-5px]">BOARD</TabsTrigger>
          <TabsTrigger value="performance"
                       className="active:border rounded-t-md px-8 active:bg-white shadow-none mb-[-5px]">PERFORMANCE</TabsTrigger>
          <TabsTrigger value="financial"
                       className="active:border rounded-t-md px-8 active:bg-white shadow-none mb-[-5px]">FINANCIAL</TabsTrigger>
        </TabsList>

        <TabsContent value="board">
          { boardComponent }
        </TabsContent>

        <TabsContent value="performance">
          { perfomanceComponent }
        </TabsContent>

        <TabsContent value="financial">
          { financialComponent }
        </TabsContent>
      </Tabs>
    </div>
  );
};