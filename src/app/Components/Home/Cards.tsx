"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex text-white dark:text-white flex-col antialiased bg-black dark:bg-black dark:bg-black items-center mb-10 justify-center relative overflow-hidden">
      <h1 className="w-full mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left text-6xl ">Events</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "BrainGPT",
    quote:
      "Are you ready to bring your ideas to life and mix skill, innovation, and fun to solve real-world problems? Brain GPT is the platform for you!",
    name: "",
    backgroundImage: "https://i.ibb.co/mHfr7sh/BrainGPT.jpg",
  },
  {
    title: "Code Clash",
    quote:
      "Do you have what it takes to solve tricky Data Structures and Algorithms problems under pressure? Code Clash is designed for those who love pushing their coding limits.",
    name: "",
    backgroundImage: "https://i.ibb.co/hVc6h7D/Tech-DSA.jpg",
    
  },
  {
    title: "Questival",
    quote: "Come join us for this one-of-a-kind experience that blends mental sharpness, physical prowess, and adventurous fun. Questival is YOUR chance to shine!",
    name: "",
    backgroundImage: "https://i.ibb.co/WPmc5xp/Questival.png",
  },
  {
    title: "Wisdom War",
    quote:
      "Do you have what it takes to outsmart your peers and claim the title of quiz champion? Wisdom War is your chance to prove it! ",
    name: "",
    backgroundImage: "https://i.ibb.co/kQV0qdc/Non-Tech-Quiz.jpg",
  },
  {
    title: "Game Over",
    quote:
      "Are you ready to prove you’re the best in the battle royale arena? GAME OVER is your chance to dominate in BGMI and FreeFire!",
    name: "",
    backgroundImage: "https://i.ibb.co/sV0bdc3/Battle-Bonanza.jpg",
  },
  {
    title: "Content Crafters",
    quote:
      "Showcase your creativity in the AI-powered content creation and videography event, where top creators win exciting prizes!",
    name: "",
    backgroundImage: "https://i.ibb.co/HVVpYh6/Content-Crafters.png",
  },
  {
    title: "Cultural Bytes",
    quote:
      "Get ready for 2 hours of energy, creativity, and celebration! Cultural Bytes is the grand finale of Convergence 2k24!!!",
    name: "",
    backgroundImage: "https://i.ibb.co/BVBrLhv/Closing.png",
  },
];
