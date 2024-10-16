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
      "In the Shark Tank event, teams of four pitch their ideas to judges, who will mentor them for the final round.",
    name: "",
    backgroundImage: "https://i.ibb.co/mHfr7sh/BrainGPT.jpg",
  },
  {
    title: "Code Clash",
    quote:
      "Compete in the Coding Round to solve the most DSA questions and win exciting prizes!",
    name: "",
    backgroundImage: "https://i.ibb.co/hVc6h7D/Tech-DSA.jpg",
    
  },
  {
    title: "Questival",
    quote: "Join the Treasure Hunt, where teams of four tackle challenges like the Memory Room and BASE round to claim victory!",
    name: "",
    backgroundImage: "https://i.ibb.co/WPmc5xp/Questival.png",
  },
  {
    title: "Wisdom War",
    quote:
      "Join the Non-Tech Quiz, where duos compete to answer a mix of tech, non-tech, entertainment, and GK questions for exciting prizes!",
    name: "",
    backgroundImage: "https://i.ibb.co/kQV0qdc/Non-Tech-Quiz.jpg",
  },
  {
    title: "Battle Bonanza",
    quote:
      "Join the ultimate E-gaming showdown with thrilling mobile games like BGMI and Freefire, where winning teams claim exciting prizes!",
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
];
