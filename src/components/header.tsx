"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import BlackButton from "./ui/blackButton";
import MainCTA from "./ui/mainCTA";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const callRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    if (!headerRef.current) return;

    const tl = gsap.timeline({ paused: true });
    const tl2 = gsap.timeline({ paused: true });

    // Timeline animation
    tl.fromTo(
      headerRef.current,
      {
        opacity: 1,
        pointerEvents: "auto",
      },
      {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.out",
      }
    );

    mm.add("(min-width: 1280px)", () => {
      tl.fromTo(
        callRef.current,
        {
          opacity: 0,
          pointerEvents: "none",
        },
        {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.4,
          ease: "power2.out",
        }
      );
    });

    // Create scroll trigger instance
    const trigger = ScrollTrigger.create({
      trigger: "#hero",
      start: "top+=300 top",
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });

    // Cleanup
    return () => {
      trigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full h-fit z-99  flex w-full items-center justify-between px-15 py-3">
        {/* Logo */}
        <Link href={"/"} className=" flex items-center">
          <Image
            src="/images/logo-white.svg"
            alt="Arcady Logo"
            width={5}
            height={5}
            priority
            className="h-5 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav ref={headerRef} className="flex gap-10 ml-10 ">
          <div className="bg-gray-700 rounded-[100vw]">
            <BlackButton
              label="Brand Design"
              destination="/brand"
              desc="Services for Fintech & SaaS"
            />
          </div>
          <div className="bg-gray-700 rounded-[100vw]">
            <BlackButton
              label="SaaS Design"
              destination="/saas"
              desc="UX/UI for SaaS Platforms"
            />
          </div>

          <div className="bg-gray-700 rounded-[100vw]">
            <BlackButton
              label="Website Design"
              destination="/website"
              desc="High-performance Business Websites"
            />
          </div>
        </nav>

        <nav className="flex gap-10 hidden">
          <Link href="/" className="text-background-primary fontheading">
            Home
          </Link>
          <Link href="/" className="text-background-primary fontheading">
            Works
          </Link>
          <Link href="/" className="text-background-primary fontheading">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <div className="group flex flex-col w-9 h-8  cursor-pointer p-2 justify-between">
            <div className="w-full h-[2px] backdrop-invert rounded-lg group-hover:scale-x-70 w-0 transition-scale origin-center duration-300 ease-in-out"></div>
            <div className="w-full h-[2px] backdrop-invert rounded-lg group-hover:scale-x-70 w-0 transition-scale origin-center duration-300 ease-in-out"></div>
            <div className="w-full h-[2px] backdrop-invert rounded-lg group-hover:scale-x-70 w-0 transition-scale origin-center duration-300 ease-in-out"></div>
          </div>
        </div>
        <div
          ref={callRef}
          className="hidden md:flex absolute md:top-[120%] xl:top-[1100%] right-[4%]"
        >
          <MainCTA
            label="Book a Call"
            destination="/"
            size="w-40 h-14"
            fontSize="text-[0.9rem]"
            bullet="w-2 h-2"
            icon={20}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
