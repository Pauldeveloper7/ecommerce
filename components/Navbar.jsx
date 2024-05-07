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
    // padding-x py-8 absolute z-10 w-full
    <header className=''>
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
      {
        IsuserloggedIn && (
          <div className="w-full flex flex-col justify-center gap-8 bg-coral-red  p-9   absolute z-50 h-80 top-0 ">
            <CloseIcon className="relative top-0 left-0" onClick={()=>{setIsuserloggedIn(false)}}/>
         <ul className=" flex items-center flex-col">
            <li>Home</li>
            <li>Products</li>
            <li>Women</li>
            <li>Men</li>
            <li>Profile</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
            </ul> 

          </div>
        )
      }
      </header>
  );
};

export default Nav;