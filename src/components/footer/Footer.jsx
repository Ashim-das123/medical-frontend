import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineTwitter, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
    {
        path: "https://github.com/Ashim-das123",
        icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "https://github.com/Ashim-das123",
        icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "https://github.com/Ashim-das123",
        icon: <AiOutlineTwitter className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "https://github.com/Ashim-das123",
        icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
    },
]

const quicklinks01 = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/",
        display: "About Us",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/",
        display: "Blog",
    },
];

const quicklinks02 = [


    {
        path: "/find-a-doctor",
        display: "Find a Doctor",
    },

    {
        path: "/",
        display: "Request an Appointment",
    },

    {
        path: "/",
        display: "Find a Location",
    },

    {
        path: "/",
        display: "Get a Opinion",
    },
];

const quicklinks03 = [
    {
        path: "/",
        display: "Donate",
    },
    {
        path: "/contact",
        display: "Contact Us",
    },
];


const Footer = () => {

    const year = new Date().getFullYear();


    return (
        <footer className='pb-16 pt-10'>
            <div className='container'>
                <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
                    <div>
                        <img src={logo} alt="" />
                        <p className='text-[16px] leading-7 font-[400] text-textColor'>Copyright @ {year} developed by Ashim Das all right reserved.</p>

                        <div className='flex items-center gap-3 mt-4'>
                            {socialLinks.map((item, index) => <Link to={item.path} target="_blank" key={index} className='w-9 h-9 border
                            border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-[#64e5f1] hover:border-none'>{item.icon}</Link>)}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Quick Links
                        </h2>
                        <ul>
                            {quicklinks01.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Want to
                        </h2>
                        <ul>
                            {quicklinks02.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                            Support
                        </h2>
                        <ul>
                            {quicklinks03.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer