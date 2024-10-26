'use client';
import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import Link from "next/link";

export default function TimelineDemo() {
  const data = [
    {
      title: "Nov 6th Morning",
      content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:-textsm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/">
          <div className="group relative card">
            <h1 className="text-white block md:hidden">Inaugral</h1>
            <Image
              src="https://i.ibb.co/2yyf1XF/Event-Cards-Website-page-0007.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">Inaugral</p>
              </div>
            </div>
            </Link>
            <Link href="/braingpt">
            <div className="group relative card">
            <h1 className="text-white block md:hidden">BrainGPT: Abstract Round</h1>
            <Image
              src="https://i.ibb.co/58dPpkb/Event-Cards-Website-page-0003.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">BrainGPT: Abstract Round</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 6th Afternoon",
      content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/braingpt">
          <div className="group relative card">
          <h1 className="text-white block md:hidden">BrainGPT: Guidance Round</h1>
          <Image
              src="https://i.ibb.co/58dPpkb/Event-Cards-Website-page-0003.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">BrainGPT: Guidance Round</p>
              </div>
            </div>
            </Link>
            <Link href="/wisdom-war">
            <div className="group relative card">
            <h1 className="text-white block md:hidden">Wisdom War</h1>
            <Image
              src="https://i.ibb.co/b3ymTkS/Event-Cards-Website-page-0006.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">Wisdom War</p>
              </div>
            </div>
            </Link>
            <Link href="/code-clash">
            <div className="group relative card">
            <h1 className="text-white block md:hidden">Code Clash</h1>
            <Image
              src="https://i.ibb.co/kD7mwg4/Event-Cards-Website-page-0001.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">Code Clash</p>
              </div>
            </div>
            </Link>
            <Link href="/questival">
            <div className="group relative card">
            <h1 className="text-white block md:hidden">Questival: Memory Room</h1>
            <Image
              src="https://i.ibb.co/BsXjcf6/Event-Cards-Website-page-0004.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">Questival: Memory Room</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 7th Morning",
      content: (
        <div>
          {/* <p className="text-stone-300 dark:text-stone-300 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-stone-300 dark:text-stone-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-stone-300 dark:text-stone-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-stone-300 dark:text-stone-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-stone-300 dark:text-stone-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-stone-300 dark:text-stone-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/braingpt">
          <div className="group relative card">
          <h1 className="text-white block md:hidden">BrainGPT: Final Presentation</h1>
          <Image
              src="https://i.ibb.co/58dPpkb/Event-Cards-Website-page-0003.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">BrainGPT: Final Presentation</p>
              </div>
            </div>
            </Link>
            
            <Link href="/battle-bonanza">
            <div className="group relative card">
            <h1 className="text-white block md:hidden">Game Over: BGMI & FreeFire</h1>
            <Image
              src="https://i.ibb.co/XJP3vtn/Event-Cards-Website-page-0002.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">Game Over: BGMI & FreeFire</p>
              </div>
            </div>
            </Link>
            <Link href="/content-crafters">
            <div className="group relative card">
            <h1 className="text-white block md:hidden">Content Crafters: PromptGen & Reel It In</h1>
            <Image
              src="https://i.ibb.co/wwkTjv0/Event-Cards-Website-page-0005.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">Content Crafters: PromptGen & Reel It In</p>
              </div>
            </div>
            </Link>
            <Link href="/questival">
            <div className="group relative card">
            <h1 className="text-white block md:hidden">Questival: BASE </h1>
            <Image
              src="https://i.ibb.co/BsXjcf6/Event-Cards-Website-page-0004.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">Questival: BASE </p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 7th Afternoon",
      content: (
        <div>
          {/* <p className="text-stone-300 dark:text-stone-300 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/questival">
          <div className="group relative card">
          <h1 className="text-white block md:hidden">Questival: Final Destination</h1>
          <Image
              src="https://i.ibb.co/BsXjcf6/Event-Cards-Website-page-0004.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">Questival: Final Destination</p>
              </div>
            </div>
            </Link>
            <Link href="/cultural-bytes">
            <div className="group relative card">
            <h1 className="text-white block md:hidden">Cultural Bytes & Closing Ceremony</h1>
            <Image
              src="https://i.ibb.co/6b9vDJ5/Event-Cards-Website-page-0008.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium p-4">Cultural Bytes & Closing Ceremony</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

