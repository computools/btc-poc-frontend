import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsMenu({ tabs }) {
  return (
    <div className="w-full mx-auto">
      <Tabs defaultValue={ tabs[0].value }>
        <TabsList className="flex justify-start p-0 bg-main border-b-2 rounded-none">
          { tabs.map(({ label, value, disabled = false }) => (
              <TabsTrigger
                  key={ value }
                  value={ value }
                  disabled={ disabled }
                  className="active:border rounded-t-md px-8 active:bg-white mb-[-5px]"
              >
                { label }
              </TabsTrigger>
          ))}
        </TabsList>

        { tabs.map(({ value, content }) => (
            <TabsContent key={ value } value={ value }>
              { content }
            </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};