import React from "react";
import Container from "./container";
import { FooterList } from "../constants/FooterList";
import { FaFacebook, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import Link from "next/link"; // この行を追加

function Footer() {
  return (
    <div className="w-full bg-blueLight mt-10">
      <Container>
        <div className="text-sm flex flex-col md:flex-row md:items-center gap-2 justify-between mb-2">
          <p className="text-gray-700 mb-2">&copy; ORIGIN.Doc</p>
          <ul className="flex items-center gap-2 mb-2">
            {FooterList.map((item) => (
              <Link key={item.id} href={item.link}>
                <li className="flex items-center gap-2 text-gray-500 hover:text-primary duration-300 cursor-pointer">
                  {item.title}
                  {item.icon && <TbMinusVertical />}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-gray-7000">
            <a
              href=""
              target="_blank"
              className="text-xl hover:text-primary duration-300 cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href=""
              target="_blank"
              className="text-xl hover:text-primary duration-300 cursor-pointer"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              target="_blank"
              className="text-xl hover:text-primary duration-300 cursor-pointer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
