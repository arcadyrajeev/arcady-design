"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BlackButton from "./ui/blackButton";
import MainCTA from "./ui/mainCTA";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const callRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    if (!headerRef.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      headerRef.current,
      { opacity: 1, pointerEvents: "auto" },
      { opacity: 0, pointerEvents: "none", duration: 0.4, ease: "power2.out" }
    );

    tl.fromTo(
      callRef.current,
      { opacity: 0, pointerEvents: "none" },
      { opacity: 1, pointerEvents: "auto", duration: 0.4, ease: "power2.out" },
      "<" // run at same time as previous
    );

    mm.add("(min-width: 1280px)", () => {
      gsap.fromTo(
        callRef.current,
        { opacity: 0, pointerEvents: "none" },
        { opacity: 1, pointerEvents: "auto", duration: 0.4, ease: "power2.out" }
      );
    });

    const trigger = ScrollTrigger.create({
      trigger: "#hero",
      start: "top+=300 top",
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });

    return () => {
      trigger.kill();
      tl.kill();
    };
  }, []);

  // desktop-only nav links
  const navOptions = [
    {
      label: "Brand Design",
      link: "/brand",
      desc: "Services for Fintech & SaaS",
    },
    { label: "SaaS Design", link: "/saas", desc: "UX/UI for SaaS Platforms" },
    {
      label: "Website Design",
      link: "/website",
      desc: "High-performance Business Websites",
    },
  ];

  // menu items (always inside stack menu)
  const menuOptions = [
    { label: "Our Works", link: "/works" },
    { label: "How We Work", link: "/how" },
    { label: "About", link: "/about" },
    { label: "Support", link: "/support" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full h-fit z-50 mix-blend-difference flex items-center justify-between px-6 sm:px-10 md:px-12 xl:px-15 py-3 bg-transparent">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image
            src="/images/logo-white.svg"
            alt="Arcady Logo"
            width={40}
            height={40}
            priority
            className="h-6 w-auto"
          />
        </Link>

        {/* Middle Nav (desktop only) */}
        <nav ref={headerRef} className="hidden lg:flex gap-8 ml-10">
          {navOptions.map((item) => (
            <div key={item.label} className="bg-gray-700 rounded-[100vw]">
              <BlackButton
                label={item.label}
                destination={item.link}
                desc={item.desc}
              />
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-5 relative z-99">
          {/* Stack / Menu Icon */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="group flex flex-col w-9 h-10 cursor-pointer p-2 justify-around"
          >
            <div
              className={`w-full h-[2px] bg-white rounded-lg transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-full h-[2px] bg-white rounded-lg transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-full h-[2px] bg-white rounded-lg transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2 " : ""
              }`}
            ></div>
          </button>
        </div>
      </header>

      {/* Menu Drawer */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-[70%] sm:w-[50%] md:w-[40%] xl:w-[25%] h-full bg-background-primary z-40 shadow-lg flex flex-col p-8 gap-6">
          {/* Mobile: include navOptions + menuOptions */}
          <ul className="flex flex-col gap-6 mt-10">
            <li>
              <Link href="/" className="text-foreground fontheading2 text-lg">
                Home
              </Link>
            </li>
            <hr className="opacity-20" />
            {/* Only show navOptions on mobile/tablet */}
            <div className="flex flex-col gap-4 lg:hidden">
              {navOptions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.link}
                    className="text-foreground fontheading2 text-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </div>
            <hr className="opacity-20" />
            {/* Shared menu items */}
            {menuOptions.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.link}
                  className="text-foreground fontheading2 text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Book a Call (desktop only) */}
      <div ref={callRef} className="flex fixed z-10 top-[85%]  right-[4%]">
        <MainCTA
          label="Book a Call"
          destination="/"
          size="w-40 h-14"
          fontSize="text-[0.9rem]"
          bullet="w-2 h-2"
          icon={20}
        />
      </div>
    </>
  );
};

export default Header;
