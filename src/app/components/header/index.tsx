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
      <nav className="self-end flex gap-6">
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
        <a href="/resume.pdf" target="_blank" className="rounded border border-[#64ffda] text-[#64ffda] p-2 transition-all hover:shadow-md hover:shadow-fine translate-x-1 translate-y-1" rel="noopener noreferrer">Currículo</a>
</nav>
    </header>
  )
}
