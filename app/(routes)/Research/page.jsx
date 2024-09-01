import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabItems = ["Vision", "Mission", "Members", "Research Policy Objectives", "Code Of Ethics For Research", "Promotion Of Research", "Consultancy", "Extension Services", "List Of Candidates For Ph.D"];

function Page() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen gap-20 py-14">
            {/* <Tabs defaultValue="Vision">
                <TabsList>
                    {tabItems.map((data) => (
                        <TabsTrigger key={data} value={data}>
                            {data}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabItems.map((data) => (
                    <TabsContent key={data} value={data}>
                        Content for {data}
                    </TabsContent>
                ))}
            </Tabs> */}
        </div>
    );
}

export default Page;