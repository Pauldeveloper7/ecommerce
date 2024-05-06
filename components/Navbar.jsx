import Image from "next/image";
import { navLinks } from "../constants";
import MenuIcon from '@mui/icons-material/Menu';
const Nav = () => {
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
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
        <MenuIcon />    
        </div>
      </nav>
    </header>
  );
};

export default Nav;