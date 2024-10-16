'use client';
import React from 'react';

const BattleBonanza = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://docs.google.com/forms/d/1eHEG3zSCm61nSn1WHxqc_dnaJyliddxzFF_FzU4pIeI/edit'; // Replace with your actual Google Form link
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
        <div>Are you ready to prove you &apos;re the best in the battle royale arena? GAME OVER is your chance to dominate in BGMI and FreeFire! Bring your squad, strategize, and outlast your opponents in an intense competition filled with thrilling battles and high stakes.</div>
<br />
 <div className='font-bold text-xl'>Event Structure:</div>
<div className='pl-3'>- Teams will face off in multiple rounds.
<br />- Only the top teams from each round will qualify to the finals. The 2nd and 3rd winners will be having free entry to the next rounds.
<br />- The finalists will then battle it out to see who emerges as the ultimate top three winners!
<br />- If the team (other than the top 3) wishes to play in th</div>
<br />
 <div className='font-bold text-xl'>Why You Should Join:</div>
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
