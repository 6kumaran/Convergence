"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Convergence 2k24, by the branch of CSE (AI & ML), is a fest that blends technical and non-technical events, offering students a platform to showcase their skills across a wide range of disciplines. From Code Clash and BrainGPT, in the technical segment to Wisdom War, Game Over, and fun-filled games in the non-technical category, the fest promises fun, innovation, and talent for everyone. With multiple rounds for each event, participants can demonstrate their creativity, teamwork, and problem-solving abilities. Additionally, thrilling prizes and rewards await winners, making "Convergence 2k24" a must-attend fest for all!`;

export default function TextGenerateEffectDemo() {
  return (<div className="py-10">
    <h1 className="text-6xl font-bold mt-4 bg-black dark:bg-black text-white dark:text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-7">Overview</h1>
  <TextGenerateEffect words={words} />
  </div>);
}
