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
        <h1 className="text-6xl md:text-4xl text-yellow-300">Game Over</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: JC Block 3rd Floor<br /> Price: Rs. 100(BGMI) & Rs. 70(FreeFire)
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

<div className='font-bold text-purple-300 text-2xl'>Only limited registrations available -
 <br />- BGMI (50 Squads only)
 <br />- FREE FIRE (48 Squads only)</div>
<br />
 <div className='font-bold text-xl text-orange-600'>Event Structure:</div>
<div className='pl-3'><span className='text-yellow-500'>BGMI-</span>
 <div className='pl-3'>* Two intense matches will run simultaneously, with <span className='text-2xl font-bold'>25</span> squads in each.
 <br />* Squads will battle it out in classic mode on the iconic <span className='text-2xl font-bold'>Erangel</span> map.
 <br />* The last squad standing in each match will take home a cash prize and a trophy.
 <br />* The runner-up squad will also receive a cash prize.</div>
</div><br />
<div className='pl-3'><span className='text-yellow-500'>FREEFIRE-</span>
<div className='pl-3'> * Four intense classic battles will run simultaneously, featuring <span className='text-2xl font-bold'>12</span> squads per match on the <span className='text-2xl font-bold'>Bermuda</span> map.
 <br />* The top 4 surviving squads from each battle will advance to the Clash Squad face-off (2 squads per match).
 <br />* Clash Squad victors will be crowned winners and awarded both a cash prize and a trophy.
 <br />* The runner-up squad will receive a cash prize as well.</div>
</div><br />
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
