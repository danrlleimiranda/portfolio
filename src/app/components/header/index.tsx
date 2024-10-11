'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from '../../images/d-high-resolution-logo-transparent.svg';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  setScrollY(window.scrollY);
}, [scrollY])

  return (
    <header className="w-full fixed top-0 flex justify-between items-center p-6">
      <Image src={logo} alt="logo" className="w-20"/>
      <nav className="self-end">
        <ul className="flex flex-row gap-6 items-center text-sm">
            <li  className="" >
              <a href="#Sobre" className={`before:content-['1.'] before:text-[#64ffda] before:mr-1.5`} >Sobre</a>
            </li>
            <li  className="" >
              <a href="#Experiencia" className={`before:content-['2.'] before:text-[#64ffda] before:mr-1.5`} >Experiência</a>
            </li>
            <li  className="" >
              <a href="#Trabalho" className={`before:content-['3.'] before:text-[#64ffda] before:mr-1.5`}>Trabalho</a>
            </li>
            <li  className="" >
              <a href="#Contato" className={`before:content-['4.'] before:text-[#64ffda] before:mr-1.5`}>Contato</a>
            </li>
        </ul>
</nav>
    </header>
  )
}
