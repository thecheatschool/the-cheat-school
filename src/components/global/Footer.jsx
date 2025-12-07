import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  RectangleGogglesIcon,
  Quote,
  MessageCircle,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 pb-30 bg-black text-white px-6 py-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <div>
          <h1 className="text-3xl font-primary font-bold text-primary mb-3">
            THE CHEAT SCHOOL
          </h1>
          <p className="text-gray-300 font-teritiary text-[15px] leading-relaxed">
            Empowering students with the right resources and a community that
            grows together. Learn smarter, collaborate better, and achieve more
            with The Cheat School.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/thecheatschool/"
              className="text-white hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/the-cheat-school/posts/?feedView=all"
              className="text-white hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-primary transition-colors"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-primary text-primary text-2xl mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 font-primary">
            {[
              { name: "Home", path: "/" },
              { name: "Blogs", path: "/blogs" },
              { name: "Contact Us", path: "/contact-us" },
              { name: "Events", path: "/events"}
            ].map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="hover:text-primary transition duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-primary text-primary text-2xl mb-3">
            Contact Us
          </h2>

          <div className="flex items-center gap-2 mb-2">
            <Phone className="text-primary w-5 h-5" />
            <p className="text-gray-300 text-[15px] font-teritiary">
              +91 99895 20942
            </p>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Mail className="text-primary w-5 h-5" />
            <p className="text-gray-300 text-[15px] font-teritiary">
              thecheatschool@gmail.com
            </p>
          </div>

          <p className="text-gray-400 text-sm font-teritiary">
            © {new Date().getFullYear()} The Cheat School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
