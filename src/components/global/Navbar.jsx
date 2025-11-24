import React, { useState } from "react";
import logo from "../../../public/the-cheat-school.png";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Bot, MessageCircle } from "lucide-react";

const Navbar = ({ isChatOpen, setIsChatOpen }) => {
  const [isOpen, setOpen] = useState(false);
  const activeClassName = "text-primary font-bold";
  const inactiveClassName = "text-black duration-300 hover:text-red-500";

  const navItems = [
    { to: "/", label: "ABOUT US" },
    { to: "blogs", label: "BLOGS" },
    { to: "/contact-us", label: "CONTACT US" },
  ];

  return (
    <div className="top-0 left-0 z-50 m-2 fixed w-[calc(100%-16px)] shadow-xl dark:bg-white/2 bg-white/30 backdrop-blur-lg rounded-xl">
      <div className="container p-0.5">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" className="object-contain h-[80px]" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex flex-row font-bold text-2xl space-x-10 font-primary cursor-pointer">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : inactiveClassName
                    }
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Header Section */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Chatbot Trigger for mobile - styled like ThemeToggle */}
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="p-2 rounded-lg transition-colors mr-2 duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label="Open AI Assistant"
            >
              <Bot className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <ThemeToggle />
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden rounded-2xl fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute rounded-2xl inset-0"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.nav
                className="relative z-50 bg-white/90 backdrop-blur-sm rounded-2xl w-full top-21 p-8 flex flex-col items-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ul className="flex flex-col font-primary text-xl items-center gap-6 w-full max-w-sm">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.to}
                      className="w-full"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <NavLink
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `${
                            isActive ? activeClassName : inactiveClassName
                          } block w-full text-center text-lg font-semibold`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
