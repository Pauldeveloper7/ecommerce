"use client";
import { SignUp, SignedIn, UserButton, useUser , SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { navLinks } from "../constants";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
const Nav = () => {
  const {  isSignedIn } = useUser();
  const [IsuserloggedIn, setIsuserloggedIn] = useState(false)
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
     <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <Image
            src={'/images/logo.svg'}
            alt='logo'
            width={199}
            height={39}
            className='m-0 w-[139px] h-[60px] rounded-full'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
         {

           isSignedIn?(
             <>
          <SignedIn>
          <UserButton/>
         </SignedIn>
         <SignedOut>
          <UserButton/>
         </SignedOut> 
          </>
         ):(
           <>
            <SignUp/>
            <UserButton/>
          </>
         )
         
}
        </div>
        <div className='hidden max-lg:block'>
        <MenuIcon onClick={()=>{setIsuserloggedIn(true)}} />    
        </div>

      </nav>
      {IsuserloggedIn && (
  <main className="w-full h-screen flex items-center justify-center bg-white fixed top-0 left-0 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <CloseIcon className="absolute top-3 right-3 cursor-pointer size-6" onClick={() => setIsuserloggedIn(false)} />
      <ul className="flex flex-col items-center gap-4 text-coral-red text-2xl">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  </main>
)}
      </header>
  );
};

export default Nav;