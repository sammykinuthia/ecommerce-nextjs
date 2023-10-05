'use client';
import { Button, Navbar } from 'flowbite-react';
import Image from "next/image"
import { HiLocationMarker, HiClock } from 'react-icons/hi'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { FaTruck, FaSearch, FaList, FaBars } from 'react-icons/fa'
import User from "./User"
import Cart from "./Cart"
import NavLinkDropdown from "./NavLinkDropdown"




export default function NavBar() {
    return (
        <nav className="">
            <div className="top-nav w-full py-1 px-10 xl:px-36">
                <p className="welcome text-xs">Welcome to worldwide MegaMart</p>
                <div className="flex gap-2">
                    <p className="border-r-2 px-2 flex gap-1 items-center text-xs"><HiLocationMarker className="nav-icons" /> Deliver to 0790360980</p>
                    <p className="border-r-2 px-2 flex gap-1 items-center text-xs"> <FaTruck className="nav-icons" /> Track your order</p>
                    <p className="flex gap-1 items-center text-xs"> <HiClock className="nav-icons" />All Offers</p>
                </div>
            </div>
            <div className="main-nav w-full flex py-4 text-xl items-center justify-between px-10 xl:px-36">

                <div className="brand-section flex gap-4 items-center ">
                    <HiBars3BottomLeft className="nav-icons p-1 h-9 w-9 font-extrabold bg-blue-50 rounded-md hidden md:block" />
                    <h2 className="text-3xl brand font-semibold ">MegaMart</h2>
                </div>
                <div className="nav-side-section gap-8 hidden md:flex">
                    <label className="bg-blue-50 flex px-8 py-2 items-center rounded-md">
                        <FaSearch className="icon" />
                        <input type="text" className="text-lg search " placeholder="Search for Essential, grocery and more ..." />
                        <FaList className="icon" />
                    </label>
                    <User />
                    <Cart />
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="border-none outline-none" >

                    <FaBars className="w-12 h-12  bg-blue-100 rounded-md p-2 icon md:hidden" />
                </button>

            </div>
            <hr />
            <div className="nav-links-section hidden w-full md:block md:w-auto" id="navbar-default" >
                <div className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <NavLinkDropdown />
                    <NavLinkDropdown />
                    <NavLinkDropdown />
                    <NavLinkDropdown />
                    <NavLinkDropdown />
                    <NavLinkDropdown />
                    <NavLinkDropdown />

                </div>
            </div>
            <hr />
        </nav>
    )
}


