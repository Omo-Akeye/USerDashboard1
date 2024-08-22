import logo from '../assets/logo.svg';

import user from '../assets/Ellipse 775.svg';
import carouseldown from '../assets/CaretDown.svg';
import menubar from '../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import { SearchBar} from './ui/NavItem';
import SideNav from './ui/SideNav';
import { useState } from 'react';


export default function Navbar() {

  const [isOpen,setIsOpen] = useState(false)

  
  return (
    <>
   
    <nav className='bg-white shadow py-4 z-30'>
    <div className='flex items-center justify-between w-[95%] mx-auto'>
    <div className='flex items-center md:w-[50%] w-[80%]'>
        <img src={logo} alt="Logo" className='mr-3' width={48}/>
        <SearchBar />
      </div>
    
       <div className='flex gap-x-2 max-md:hidden'>
          <img src={user} alt="User" />
          <img src={carouseldown} alt="" width={14} />
        </div>
      <div className='md:hidden'>
        <img src={menubar} alt="menu" className='cursor-pointer' onClick={()=>setIsOpen(!isOpen) }/>
      </div>
    </div>
    </nav>
  <SideNav isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
}
