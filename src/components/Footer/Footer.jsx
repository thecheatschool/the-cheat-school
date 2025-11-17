import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Instagram,Linkedin } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold font-primary text-primary mb-2">THE CHEAT SCHOOL</h1>
          <p className="text-sm md:text-base text-black font-teritiary leading-relaxed">
            The Cheat School is a 90-day bootcamp that turns students into certified, internship-ready professionals.
            No outdated theory — just practical skills, real projects, and guaranteed on-field experience. We help students
            cheat the system — the smart way.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-primary  text-primary mb-2">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-black font-primary text-sm">
            <li><NavLink to="/" className="hover:text-primary transition">Home</NavLink></li>
            <li><NavLink to="/gallery" className="hover:text-primary transition">Gallery</NavLink></li>
            <li><NavLink to="/events" className="hover:text-primary transition">Events</NavLink></li>
            <li><NavLink to="/blogs" className="hover:text-primary transition">Blogs</NavLink></li>
            <li><NavLink to="/contact us" className="hover:text-primary transition">Contact Us</NavLink></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-primary text-primary mb-2">Contact Us</h2>

          <div className="flex  items-center gap-3">
            <FaPhoneAlt className="min-w-[20px] text-sm" />
            <span className="text-sm font-teritiary">+91 99895 20942</span>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <IoIosMail className="min-w-[20px] text-xl" />
            <span className="text-sm font-teritiary">thecheatschool@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <a className="h-8 w-8 rounded-full flex items-center justify-center text-primary border-black hover:text-black  transition duration-300" >
              <Instagram />
            </a>
            <a className="h-8 w-8 rounded-full flex items-center justify-center text-primary hover:text-black transition duration-300" href="https://www.linkedin.com/company/the-cheat-school/">
              <Linkedin />
            </a>
          </div>
        </div>


        <div className="col-span-full mt-6 border-t pt-4 text-center">
          <p className="text-xl font-teritiary">
            &copy; {new Date().getFullYear()} Made by <span className="text-primary">Team Cheat School</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;