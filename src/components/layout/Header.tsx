import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import { Spacer } from "@nextui-org/react";

function Header() {
  return (
    <div>
      <Spacer y={20} />
      <section className="flex justify-center">
        <button className="relative w-[300px] h-[100px]">
          <Image
            src="/images/logo.png"
            fill
            alt="logo"
            className="top-0"
            priority
          />
        </button>
      </section>
      <Spacer y={20} />
      <NavBar />
    </div>
  );
}

export default Header;
