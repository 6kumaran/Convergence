"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="pb-4 relative z-10 text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Gallery Coming Soon!
        </h1>
        <p></p>
        <div style={{ fontFamily: 'Nasalization, sans-serif' }} className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center relative z-10">
        Thank you for your excitement and support for Convergence! Our team is working hard to gather all the amazing moments captured during the event.

<br /><br /><div className="text-left">📸 Stay tuned for a collection of unforgettable memories from the fest, including:</div>
<div className="pl-9 text-left">
<br />- Exciting competition highlights
<br />- Behind-the-scenes glimpses
<br />- Award ceremonies and performances
<br />- Fun-filled crowd moments</div>
<br /><br />Check back here soon to relive the energy and excitement of Convergence!
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
