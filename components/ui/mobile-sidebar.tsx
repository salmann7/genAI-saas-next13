"use client";

import { Button } from "./button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar;