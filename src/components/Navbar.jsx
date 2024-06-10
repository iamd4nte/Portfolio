import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedin, git, instagram} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            >
            <img src={logo} alt='logo' className='w-12 h-12 object-contain  hover:text-violet-500' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex hover:text-violet-500'>
              Aniket Malsane
              {/* &nbsp;
              <span className='sm:block hidden'> | JavaScript Mastery</span> */}
            </p>
          </Link>

          <div className="flex items-center ml-9 gap-6">
            <a href="https://www.linkedin.com/in/aniket-malsane/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="ml-3 w-6 h-6 object-contain hover:scale-125" style={{ minWidth: '24px', minHeight: '24px' }}/>
            </a>
            <a href="https://github.com/iamd4nte/" target="_blank" rel="noopener noreferrer">
              <img src={git} alt="GitHub" className="w-8 h-8 object-contain hover:scale-125" style={{ minWidth: '24px', minHeight: '24px' }}/>
            </a>
            <a href="https://www.instagram.com/_4nik3t/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-6 h-6 object-contain hover:scale-125" style={{ minWidth: '24px', minHeight: '24px' }}/>
            </a>
          </div>

        </div>

        <div className='flex-3 ml-9'>
          <ul className='list-none hidden lg:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-violet-400" : "text-white"
                } hover:text-violet-500 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain hover:scale-125'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`hover:text-violet-500 font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-violet-400" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
