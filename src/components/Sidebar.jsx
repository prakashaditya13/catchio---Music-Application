import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri'
import {logo} from '../assets'
import {links} from '../assets/constants'
import { HiOutlineMenu } from "react-icons/hi";


const NavLinks = ({handleClick}) => {
   return (
    <div className="mt-10">
    {
      links.map((item) => {
        return <NavLink key={item.name} to={item.to} onClick={() => handleClick && handleClick()} className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'>
          <item.icon className="w-6 h-6 mr-2" />
          {
            item.name
          }
        </NavLink>
      })
    }
  </div>
   )
}


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false)

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <h1 className="text-amber-600 tracking-[5px] text-center font-bold text-[25px]">CATCHIO</h1>
        <NavLinks/>
      </div>
      {/* Mobile Menu */}

      <div className="absolute md:hidden block top-6 right-3">
          {
            mobileMenuOpen ? (
              <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenu(false)}/>
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenu(true)}/>
            )
          }
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <h1 className="text-amber-600 tracking-[5px] text-center font-bold text-[25px]">CATCHIO</h1>
        <NavLinks handleClick={() => setMobileMenu(false)} />
      </div>
    </>
  )
}

export default Sidebar;
