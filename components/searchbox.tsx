"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from "@/lib/utils";

const SearchBox = () => {
    return (
            <div className="flex justify-center items-center border border-gray-500 rounded-lg w-full max-w-xl transition-all duration-500 ease-in-out mx-4">
                <input
                    type="text"
                    placeholder="type your question..."
                    className="p-4 flex-grow border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex items-center px-2">
                    <button 
                        className="flex items-center justify-center p-2 text-blue-500 hover:text-blue-600 focus:outline-none"
                        >
                        <Search className="h-6 w-6" />
                    </button>
                </div>
            </div>
    );
};

export default SearchBox;
