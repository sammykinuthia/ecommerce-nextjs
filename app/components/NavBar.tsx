import Image from "next/image"
import { HiLocationMarker, HiClock } from 'react-icons/hi'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { FaTruck, FaSearch, FaList } from 'react-icons/fa'
import User from "./User"
import Cart from "./Cart"
import NavLinkDropdown from "./NavLinkDropdown"

export default function NavBar() {
    return (
        <nav className="">
            <div className="top-nav w-full py-1 xl:px-36">
                <p className="welcome">Welcome to worldwide MegaMart</p>
                <div className="flex gap-2">
                    <p className="border-r-2 px-2 flex gap-1 items-center"><HiLocationMarker className="nav-icons" /> Deliver to 0790360980</p>
                    <p className="border-r-2 px-2 flex gap-1 items-center"> <FaTruck className="nav-icons" /> Track your order</p>
                    <p className="flex gap-1 items-center"> <HiClock className="nav-icons" />All Offers</p>
                </div>
            </div>
            <div className="main-nav w-full flex py-4 text-xl items-center justify-between xl:px-36">
                <div className="brand-section flex gap-4 items-center ">
                    <HiBars3BottomLeft className="nav-icons p-1 h-9 w-9 font-extrabold bg-blue-50 rounded-md" />
                    <h2 className="text-3xl brand font-semibold ">MegaMart</h2>
                </div>
                <div className="nav-side-section flex gap-8">
                    <label className="bg-blue-50 flex px-8 py-2 items-center rounded-md">
                        <FaSearch className="icon" />
                        <input type="text" className="w-96 text-lg search " placeholder="Search for Essential, grocery and more ..." />
                        <FaList className="icon" />
                    </label>
                    <User />
                    <Cart />
                </div>
            </div>
            <hr />
            <div className="nav-links-section flex justify-between items-center py-4 xl:px-36">
                <NavLinkDropdown />
                <NavLinkDropdown />
                <NavLinkDropdown />
                <NavLinkDropdown />
                <NavLinkDropdown />
                <NavLinkDropdown />
                <NavLinkDropdown />
                <NavLinkDropdown />
                <NavLinkDropdown />
                <NavLinkDropdown />
                
            </div>
            <hr />
        </nav>
    )
}

