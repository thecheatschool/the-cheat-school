import React, { useState } from 'react';
import tcs from '../../assets/images/The Cheat School.png';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const activeClassName = "text-primary font-bold";
  const inactiveClassName = "text-black duration-300 hover:text-red-500";

  return (
    <div className="top-0 left-0 z-50 m-2 bg-white/30 backdrop-blur-lg sticky shadow-xl  rounded-xl">
      <div className="container  p-0.5">
        <div className="flex items-center  justify-between">
          <img src={tcs} alt="logo" className="object-contain h-20" />

          <ul className="hidden md:flex flex-row font-bold text-2xl space-x-10 font-primary cursor-pointer">
            <li>
              <NavLink className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)} to="/">
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)} to="gallery">
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)} to="events">
                EVENTS
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)} to="blogs">
                BLOGS
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)} to="/contact us">
                CONTACT US
              </NavLink>
            </li>
          </ul>

          <div className="block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden rounded-2xl fixed  inset-0 z-40">
            <div className="absolute rounded-2xl  inset-0 " onClick={() => setOpen(false)} />

            <nav className="relative z-50 bg-white rounded-2xl w-full top-21  p-8 flex flex-col items-center ">
              <ul className="flex flex-col transition duration-500  font-primary text-xl items-center gap-6 w-full max-w-sm">
                {["/", "gallery", "events", "blogs", "/contact us"].map((to, i) => {
                  const labels = ["ABOUT US", "GALLERY", "EVENTS", "BLOGS", "CONTACT US"];
                  return (
                    <li key={to} className="w-full">
                      <NavLink
                        to={to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `${isActive ? activeClassName : inactiveClassName} block w-full text-center text-lg font-semibold`
                        }
                      >
                        {labels[i]}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
