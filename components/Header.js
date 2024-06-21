"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { headerListitem } from "../constants";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Header() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="w-full h-20 border-b-[1px] border-gray-500 bg-white p-2">
      <div className="h-full max-w-screen-2x mx-auto flex items-center justify-between ">
        {/*logo*/}
        <Link href="/" className="relative group overflow-hidden">
          <p className="text-2xl font-bold">ORIGIN.Doc</p>
          <span className="absolute bottom-0 w-full h-[2px] inline-block bg-primary -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700 "></span>
        </Link>
        {/*headerListitem*/}
        <div className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold tracking-wide">
          <ul className="flex gap-8">
            {headerListitem.map((item) => (
              <Link key={item._id} href={item.link}>
                <li
                  className={`text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer group relative ${
                    active === item.link ? "text-primary" : ""
                  }`}
                >
                  {item.title}
                  <span
                    className={`absolute w-full h-[2px] -bottom-[1px] left-0 inline-block bg-primary scale-0 group-hover:scale-100  duration-500 ${
                      active === item.link ? "scale-100" : ""
                    }`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
          <button className="w-36 h-10 bg-darkBlue rounded-md text-white hover:bg-primary duration-300">
            連絡する
          </button>
        </div>
        {/*smollLogo*/}
        <div
          className="lg:hidden w-7 h-5 group flex flex-col justify-between cursor-pointer overflow-hidden"
          onClick={() => setShowMenu(true)}
        >
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primary inline-flex -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primary inline-flex -translate-x-3 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primary "></span>
        </div>
        {/*smoll screen Menu*/}
        {showMenu && (
          <div className="lg:hidden w-full h-screen fixed top-0 left-0 bg-darkBlue bg-opacity-90 z-50">
            <motion.div
              className="w-[70%] h-full bg-darkBlue p-4 relative"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="absolute right-2 top-8 text-3xl text-red-200 hover:text-red-600 cursor-pointer duration-300"
                onClick={() => setShowMenu(false)}
              >
                <IoCloseSharp />
              </span>
              <Link href="/" onClick={() => setShowMenu(false)}>
                <p className="text-2xl font-bold text-white mb-4">ORIGIN.DOC</p>
              </Link>
              <ul className="flex flex-col text-gray-300 text-sm gap-3 font-semibold">
                {headerListitem.map((item) => (
                  <Link key={item._id} href={item.link}>
                    <li
                      className="hover:text-white cursor-pointer duration-300"
                      onClick={() => setShowMenu(false)}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
