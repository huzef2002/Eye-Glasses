import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { GrTwitter } from "react-icons/gr";


function Footer() {
    return (
        <footer className="bg-green-200 text-black md:pt-20 pt-10 pb-6 rounded-t-2xl">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    {/* Left Column: Headline */}
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Roshni Opticals Jalgaon
                        </h3>
                        <div className='mt-5 md:mt-10 flex gap-8 md:text-4xl text-3xl'>
                           <a href='https://instagram.com/'><GrInstagram /></a> 
                            <a href='https://facebook.com/'><BiLogoFacebookCircle /></a> 
                            <a href='https://twitter.com/'><GrTwitter /></a> 
                        </div>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="md:text-right">
                        <p className="mb-5">
                            <span className='flex'><SlLocationPin className='text-xl' /> &nbsp; BJ Market Chock, Jalgaon 425001, Maharashtra</span>

                        </p>
                        <p>
                            <span className='flex'><MdOutlineMailOutline className='text-xl' /> &nbsp; support@rareblocks.xyz</span></p>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 my-8" />

                {/* Bottom Section: Links + Copyright */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    {/* Navigation Links */}
                    <nav className="mb-4 md:mb-0 flex space-x-6">
                        <a href="#about" className="hover:text-gray-300">
                            About
                        </a>
                        <a href="#features" className="hover:text-gray-300">
                            Features
                        </a>
                        <a href="#works" className="hover:text-gray-300">
                            Works
                        </a>
                        <a href="#support" className="hover:text-gray-300">
                            Support
                        </a>
                    </nav>

                    {/* Copyright */}
                    <p className="text-sm text-gray-400">
                        &copy; Copyright 2021,
                        <span className="ml-1">All Rights Reserved</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
