"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-[100px] justify-center">
      <Link
        className={`${pathname.startsWith("/about") ? "font-bold" : ""}`}
        href="/about"
      >
        ABOUT
      </Link>
      <Link
        className={`${pathname.startsWith("/films") ? "font-bold" : ""}`}
        href="/films"
      >
        FILMS
      </Link>
      <Link
        className={`${pathname.startsWith("/testFilms") ? "font-bold" : ""}`}
        href="/testFilms"
      >
        FILMS TEST
      </Link>
      <Link
        className={`${pathname.startsWith("/reservation") ? "font-bold" : ""}`}
        href="/reservation"
      >
        RESERVATION
      </Link>
      <Link
        className={`${pathname.startsWith("/qna") ? "font-bold" : ""}`}
        href="/qna"
      >
        QNA
      </Link>
      <div className="flex gap-[20px]">
        <Image
          alt="instagram_logo"
          src="/images/instagram_logo.png"
          width={0}
          height={0}
          className="w-[20px] h-[20px]"
        />
        <Image
          alt="facebook_logo"
          src="/images/facebook_logo.png"
          width={0}
          height={0}
          className="w-[20px] h-[20px]"
        />
      </div>
    </nav>
  );
}

export default NavBar;
