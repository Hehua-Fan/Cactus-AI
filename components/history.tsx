"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const History = () => {
    const historyItems = [
        "Search item 1",
        "Search item 2",
        "Search item 3"
    ];

    return (
        <div className="px-4 py-2 space-y-2">
            {historyItems.map((item, idx) => (
                <div key={idx} className="flex items-center bg-gray-100 p-2 rounded-md">
                    <Search className="h-4 w-4 text-gray-500" />
                    <span className="ml-2">{item}</span>
                </div>
            ))}
        </div>
    );
};

export default History;
