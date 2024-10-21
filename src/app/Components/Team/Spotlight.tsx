import React from "react";
import { Spotlight } from "../ui/Spotlight";

export default function SpotlightPreview() {
  return (
    <div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" style={{ fontFamily: 'Nasalization, sans-serif' }}>
          Meet the talented team.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-full text-center mx-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        Meet the dedicated team behind the fest, each bringing their unique skills to ensure its success. From coordinating events and marketing strategies to handling logistics and technical support, this team has worked tirelessly to create a memorable experience for all attendees. Their passion and commitment are the driving forces behind the event&apos;s success.
        </p>
      </div>
    </div>
  );
}
