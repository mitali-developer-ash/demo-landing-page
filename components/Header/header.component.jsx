import React from 'react'
import Image from 'next/image'

import styles from '../../styles/Home.module.css'
import { FaMobile, FaRocketchat } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { MdAccountCircle, MdOutlineShoppingBag } from "react-icons/md";

import {logo} from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='w-full bg-white h-32'>
     <div className='bg-slate-600 text-white paddingLeftRight'>
        <div className='flex justify-between items-center p-3'>
            <div className='font-semibold'>
                <p>FREE SHIPPING ON ORDERS $99+*</p>
            </div>
            <div className='flex space-x-4'>
                <p className='flex space-x-1 justify-center items-center'> 
                    <FaMobile className='text-rose-700'/>
                    <span>Call 880 1234 567 89</span>
                </p>
                <p className='flex space-x-2 justify-center items-center'>
                    <FaRocketchat className='text-rose-700'/>
                    <span>Chat</span>
                </p>
                <p className='flex space-x-1 justify-center items-center'>
                    <FiMessageSquare className='text-rose-700'/>
                    <span> Contacts</span>
                </p>
            </div>
        </div>
     </div>
       
     <div className='header-main paddingLeftRight h-3/4 flex justify-between items-center'>
        <div className='header-logo basis-1/5'>
            <div className='logo-box'>
                <img className='h-full' src='http://nexonleads.com/assets/img/logo.png' alt="logo"/>
            </div>
        </div>
        <nav className='header-nav basis-3/5'>
            <ul className='flex justify-around items-end font-semibold text-xl'>
                <li className='rounded px-4 py-2 hover:bg-rose-700 hover:text-white'>
                    <a href='#'>Home</a>
                </li>
                <li className='rounded px-4 py-2 hover:bg-rose-700 hover:text-white'>
                    <a href='#'>Shop</a>
                </li>
                <li className='rounded px-4 py-2 hover:bg-rose-700 hover:text-white'>
                    <a href='#'>About Us</a>
                </li>
                <li className='rounded px-4 py-2 hover:bg-rose-700 hover:text-white'>
                     <a href='#'>Contact Us</a>
                </li>
            </ul>
        </nav>
        <div className='header-search basis-2/5'>
        <div class="relative w-80">
            <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white" placeholder="Search" /   >
            <button class="absolute right-0 top-0 mt-3 mr-2">
                <svg class="w-4 h-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
            </button>
        </div>
        </div>
        <div className='header-account basis-1/5 flex justify-around'>
            <div className='text-4xl  hover:bg-rose-700 hover:text-white'>
                <MdAccountCircle />
            </div>
            <div className='text-4xl hover:text-rose-700'>
                <MdOutlineShoppingBag />
            </div>
        </div>
     </div>
    </div>
  )
}

export default Header