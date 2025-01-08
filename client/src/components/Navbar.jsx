import React from 'react';
import { Menu, School, UserCircle } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import Darkmode from './Darkmode';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const user = true;
    return (
        <div className='h-16 bg-[#14213d] dark:bg-[#000000] fixed top-0 left-0 w-full z-50 duration-300 shadow-lg'>
            <div className="max-w-7xl mx-auto justify-between items-center h-full px-6 flex max-md:hidden">
                {/* Logo Section */}
                <div className="flex gap-2 items-center">
                    <School size={30} className="text-[#fca311]" />
                    <h1 className='text-[#ffffff] text-2xl font-extrabold'>LearnVault</h1>
                </div>

                <div className="flex gap-5">
                    {user ? (
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="cursor-pointer border-2 border-[#fca311]">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback className="bg-[#fca311]">CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 bg-[#ffffff] dark:bg-[#14213d] border-[#fca311]">
                                    <DropdownMenuLabel className="text-[#14213d] dark:text-[#ffffff]">My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-[#e5e5e5]" />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className="hover:bg-[#e5e5e5] dark:hover:bg-[#000000] cursor-pointer">
                                            My account
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-[#e5e5e5] dark:hover:bg-[#000000] cursor-pointer">
                                            My Learnings
                                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-[#e5e5e5] dark:hover:bg-[#000000] cursor-pointer">
                                            Edit Profile
                                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-[#e5e5e5] dark:hover:bg-[#000000] cursor-pointer">
                                            Logout
                                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="bg-[#e5e5e5]" />
                                        <DropdownMenuItem className="hover:bg-[#e5e5e5] dark:hover:bg-[#000000] cursor-pointer">
                                            Dashboard
                                            <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ) : (
                        <div className="flex gap-2 items-center">
                            <Button className="bg-[#fca311] hover:bg-[#e5e5e5] text-[#000000]">Login</Button>
                            <Button className="bg-transparent border-2 border-[#fca311] hover:bg-[#fca311] text-[#ffffff]">Signup</Button>
                        </div>
                    )}
                    <Darkmode />
                </div>
            </div>
            <div className="flex md:hidden items-center px-4 h-full justify-between">
                <h1 className='text-[#ffffff] text-2xl font-extrabold'>LearnVault</h1>
                <MobileNavbar />
            </div>
        </div>
    )
}

const MobileNavbar = () => {
    const role = "student";
    
    return (    
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size='icon' className="rounded-full bg-[#e5e5e5] hover:bg-[#fca311]">
                    <Menu className="text-[#14213d]" />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 w-[400px] sm:w-[400px] bg-[#ffffff] dark:bg-[#14213d] border-l-[#fca311]">
                <SheetHeader className="font-extrabold">
                    <SheetTitle className="flex items-center gap-4 text-[#14213d] dark:text-[#ffffff]">
                        LearnVault
                        <Darkmode/>
                    </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 text-[#14213d] dark:text-[#ffffff]">
                    <span className="hover:text-[#fca311] cursor-pointer">Account</span>
                    <span className="hover:text-[#fca311] cursor-pointer">Your Learnings</span>
                    <span className="hover:text-[#fca311] cursor-pointer">Logout</span>
                    <span className="hover:text-[#fca311] cursor-pointer">Account</span>
                </nav>
                {role === "instructor" && (
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button className="bg-[#fca311] hover:bg-[#14213d] text-[#000000] hover:text-[#ffffff]">
                                Dashboard
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    )
}

export default Navbar;

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
// Adding sheet For mobile devices ie hamburger menu


const MobileNavabr = () => {
        const role = "student";

    return (    
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size='icon' className="rounded-full bg-gray-200 hover:bg-gray-400">
                    {/* iCON */}
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 w-[400px] sm:w-[400px]">
                <SheetHeader className="font-extrabold">
                    <SheetTitle className="flex items-center gap-4">
                        LearnVault
                        <Darkmode/>
                    </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col">
                    <span>Account</span>
                    <span>Your Learnings</span>
                    <span>Logout</span>
                    <span>Account</span>
                </nav>
                {
                   role == "instructor" && (
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button>Dashboard</Button>
                            </SheetClose>
                        </SheetFooter>
                   )
                }
            </SheetContent>
        </Sheet>
    )
}
