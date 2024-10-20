'use client';
import React from 'react';

const ContentCrafters = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://docs.google.com/forms/d/1eHEG3zSCm61nSn1WHxqc_dnaJyliddxzFF_FzU4pIeI/edit'; // Replace with your actual Google Form link
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl ">Content Crafters</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: SCB Block Auditorium<br /> Price: Rs. 50(Per Head) 
        </p>
        <button onClick={handleRegisterClick} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-600 hover:bg-orange-700 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
          REGISTER
        </button>
      </div>

      {/* Register button for small devices */}
      <div className="block md:hidden mt-4">
        <button onClick={handleRegisterClick} className="text-white bg-orange-600 hover:bg-orange-700 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center w-full">
          REGISTER
        </button>
      </div>

      {/* Responsive paragraph content starts below the venue and button */}
      <div className="mt-10 flex flex-col items-center justify-center h-auto px-4 sm:px-8 text-left">
        <div style={{ fontFamily: 'JetBrains Mono, monospace' }} className="text-base md:text-lg lg:text-xl max-w-3xl overflow-wrap break-word leading-relaxed">
        Are you ready to show off your creative skills in a competition that&apos;s all about imagination and innovation? Content Crafters is the event for you! Whether you&apos;re a pro at crafting perfect prompts or a whiz at video editing, this is your chance to shine.

<br /><br />1. PromptGen (AI-Generated Images): 
<div className='pl-5'>   <br />- Got a way with words? Use your creativity to write prompts that generate stunning images using AI tools. Craft a prompt that brings your vision to life and see how it transforms into a masterpiece. The most creative and visually striking images win!</div>
   
<br /><br />2. Reel It In (Reel Creation): 
<div className='pl-5'> <br />- Love video editing? Create a 30-60 second reel showcasing your favorite spots on campus. Capture the essence of college life, edit your footage, and create a reel that promotes the college in a fun and engaging way. The best video wins!</div>

<br /><br />Why Participate?
<div className='pl-5'>
<br />- Showcase Your Creativity: Whether it&apos;s through AI-generated images or creating eye-catching reels, you&apos;ll have a platform to express your creativity.
<br />- Learn and Compete: You&apos;ll get the chance to learn and compete in a fun, creative environment alongside other talented students.
<br />- Amazing Prizes: Win exciting prizes and bragging rights as the best Content Crafter!
</div>
<br /><br />Don&apos;t miss out—register now and get ready to unleash your creative genius at Content Crafters!

        </div>
      </div>
    </div>
  );
};

export default ContentCrafters;
