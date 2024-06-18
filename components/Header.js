"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { headerListitem } from "../constants";
import { usePathname } from "next/navigation";

function Header() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="w-full h-20 border-b-[1px] border-gray-500 bg-white ">
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
      </div>
    </div>
  );
}

export default Header;
