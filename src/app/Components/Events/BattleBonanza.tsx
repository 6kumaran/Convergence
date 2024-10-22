'use client';
import React from 'react';

const BattleBonanza = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://forms.gle/pCAhKgrJctaY3jYS9'; // Replace with your actual Google Form link
  };
  const handleRegisterClick2 = () => {
    window.location.href = 'https://forms.gle/m7cQUqqsbGU97M2i7'; // Replace with your actual Google Form link
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl ">Game Over</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: SCB Block Auditorium<br /> Price: Rs. 70(Per Head) & Rs. 50(Per Head)
        </p>
        <button onClick={handleRegisterClick} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
          BGMI REGISTER
        </button>
        <button onClick={handleRegisterClick2} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
          FreeFire REGISTER
        </button>
      </div>

      {/* Register button for small devices */}
      <div className="block md:hidden mt-4">
        <button onClick={handleRegisterClick} className="text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center w-full">
          BGMI REGISTER
        </button>
        <button onClick={handleRegisterClick2} className="mt-4 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center w-full">
          FreeFire REGISTER
        </button>
      </div>
      {/* Responsive paragraph content starts below the venue and button */}
      <div className="mt-10 flex flex-col items-center justify-center h-auto px-4 sm:px-8 text-left">
        <div style={{ fontFamily: 'JetBrains Mono, monospace' }} className="text-base md:text-lg lg:text-xl max-w-3xl overflow-wrap break-word leading-relaxed">
        <div>Are you ready to prove you &apos;re the best in the battle royale arena? GAME OVER is your chance to dominate in BGMI and FreeFire! Bring your squad, strategize, and outlast your opponents in an intense competition filled with thrilling battles and high stakes.</div>
<br />
 <div className='font-bold text-xl text-orange-600'>Event Structure:</div>
<div className='pl-3'>- Teams will face off in multiple rounds.
<br />- Only the top teams from each round will qualify to the finals. The 2nd and 3rd winners will be having free entry to the next rounds.
<br />- The finalists will then battle it out to see who emerges as the ultimate top three winners!
<br />- If the team (other than the top 3) wishes to play in th</div>
<br />
 <div className='font-bold text-xl text-blue-800'>Why You Should Join:</div>
<div className='pl-3'>- Test your gaming skills in a competitive environment.
<br />- Compete against the best teams in college.
<br />- Win epic prizes and earn the title of champion!</div>

<br />Gather your squad, gear up, and register now for GAME OVER! Will your team be the last one standing?

        </div>
      </div>
    </div>
  );
};

export default BattleBonanza;
