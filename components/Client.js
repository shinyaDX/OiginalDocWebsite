import React from "react";
import Container from "./container";
import logo1 from "@/public/clientImg/1.svg";
import logo2 from "@/public/clientImg/2.svg";
import logo3 from "@/public/clientImg/3.svg";
import logo4 from "@/public/clientImg/4.svg";
import logo5 from "@/public/clientImg/5.svg";
import logo6 from "@/public/clientImg/6.svg";
import logo7 from "@/public/clientImg/7.svg";
import logo8 from "@/public/clientImg/8.svg";
import Image from "next/image";

const clients = [
  ["1", logo1],
  ["2", logo2],
  ["3", logo3],
  ["4", logo4],
  ["5", logo5],
  ["6", logo6],
  ["7", logo7],
  ["8", logo8],
];

function Client() {
  return (
    <div>
      <Container>
        <div>
          <h2>こちらの企業も導入しています</h2>
          <div></div>
          <ul>
            {clients.map(([clientNumber, logo]) => (
              <li key={clientNumber}>
                <Image src={logo} alt={`Client ${clientNumber}`} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Client;
