"use client";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, MessageSquare, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import History from "@/components/history"; // Import the History component

// Font
const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Search",
        icon: Search,
        href: "/",
        color: "text-blue-500"
    },
    {
        label: "Chat",
        icon: MessageSquare,
        href: "/chat",
        color: "text-blue-500"
    }
];

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);
    const [historyOpen, setHistoryOpen] = useState(false);

    const wrapperClasses = classNames(
        "h-full pt-4 pb-4 bg-gray-50 flex justify-between flex-col transition-all duration-700 ease-in-out",
        {
            'w-64': !toggleCollapse,
            'w-0 overflow-hidden': toggleCollapse
        }
    );

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    const toggleHistory = () => {
        setHistoryOpen(!historyOpen);
    };

    {/* User zoom the explorer */}
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setToggleCollapse(true);
            } else {
                setToggleCollapse(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call on mount to set initial state

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex h-screen">
            <div
                className={wrapperClasses}
                onMouseEnter={onMouseOver}
                onMouseLeave={onMouseOver}
                style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
            >
                {!toggleCollapse && (
                    <>
                        {/* Logo & Collapsible button */}
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between relative py-6">
                                <Link href={"/"} className="flex items-center">
                                    <div className="relative ml-3 mr-2">
                                        <Image width={64} height={64} alt="Logo" src="/logo.png" />
                                    </div>
                                    <h1 className={cn("text-2xl font-bold text-blue-500", montserrat.className)}>
                                        Cactus.AI
                                    </h1>
                                </Link>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleSidebarToggle}
                                    className="absolute top-0 right-0 rounded-full transition-transform"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                    <span className="sr-only">Toggle Sidebar</span>
                                </Button>
                            </div>

                            {/* Routes */}
                            <nav className="flex-1 px-2 space-y-1">
                                {routes.map((route, idx) => (
                                    <Link key={idx} href={route.href} className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-200">
                                        <route.icon className={cn("mr-3 h-6 w-6", route.color)} />
                                        <span>{route.label}</span>
                                    </Link>
                                ))}
                                <div>
                                    <button onClick={toggleHistory} className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-200 w-full">
                                        <Clock className={cn("mr-3 h-6 w-6", "text-blue-500")} />
                                        <span>History</span>
                                        {historyOpen ? <ChevronUp className="ml-auto h-5 w-5" /> : <ChevronDown className="ml-auto h-5 w-5" />}
                                    </button>
                                    {historyOpen && <History />}
                                </div>
                            </nav>

                            {/* Login */}
                            <div className="flex flex-col justify-end flex-1 p-4">
                                <Button className="w-full bg-blue-500 text-white p-2 rounded">Login</Button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Collapsed Sidebar Toggle Button */}
            <Button
                variant="ghost"
                size="icon"
                onClick={handleSidebarToggle}
                className={cn("fixed top-4 left-4 z-30 rounded-full transition-transform", { hidden: !toggleCollapse })}
            >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Toggle Sidebar</span>
            </Button>
        </div>
    );
};

export default Sidebar;
