import { BiLogoWhatsapp } from 'react-icons/bi'
import { LuPhoneCall } from 'react-icons/lu'

export default function Footer() {
    return (
        <footer className="bg-accent w-full p-12 mb-0 text-white px-10 xl:px-36">
            <div className="top grid  md:grid-cols-3 justify-center ">
                <div className="contacts">
                    <h1 className="text-3xl mb-6 font-extrabold">MegaMart</h1>
                    <h3 className="font-bold">Contact Us</h3>
                    <div className="whatsapp my-4">
                        <div className='flex items-center gap-2'>
                            <BiLogoWhatsapp />
                            <span>Whats App</span>
                        </div>
                        <p>+254790360980</p>
                    </div>
                    <div className="call my-4">
                        <div className='flex items-center gap-2'>
                            <LuPhoneCall />
                            <span>Call Us</span>
                        </div>
                        <p>+254790360980</p>
                    </div>

                </div>
                <div className="categories">
                    <h1 className="text-xl font-bold border-b-4 w-fit">Most Popular Categories</h1>
                    <ul className='list-disc'>
                        <li>Staples</li>
                        <li>Beberages</li>
                        <li>Personal Care</li>
                        <li>Home Care</li>
                        <li>Baby Care</li>
                        <li>Vegetables & fruits</li>
                        <li>Snacks & Foods</li>
                        <li>Daily & Bakery</li>
                    </ul>
                </div>
                <div className="services">
                    <h1 className="text-xl font-bold border-b-4 w-fit">Customer Services</h1>
                    <ul className='list-disc'>
                        <li><a href="about">About Us</a></li>
                        <li><a href="about">Terms & Conditions</a></li>
                        <li><a href="about">FAQ</a></li>
                        <li><a href="about">Privacy Policy</a></li>
                        <li><a href="about">E-waste Policy</a></li>
                        <li><a href="about">Cancellation & Return Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom border-t">

                <p className="text-center ">&copy; 2023 All rights reserved. Samsy Lmt.</p>
            </div>
        </footer>
    )
}