'use client';
import React from 'react';

const CulturalBytes = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://forms.gle/aGyd1DtPckbcMSpg7'; // Replace with your actual Google Form link
  };
  const handleRegisterClick2 = () => {
    window.location.href = 'https://forms.gle/t98R2ZQbCtSYSdQA7'; // Replace with your actual Google Form link
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl  text-yellow-300">Cultural Bytes</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: SCB Block Auditorium<br /> Price: Rs. 60(Per Head) & Rs. 50(Audience)
        </p>
        <button onClick={handleRegisterClick} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
          REGISTER
        </button>
        <button onClick={handleRegisterClick2} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
          REGISTER for Audience
        </button>
      </div>

      {/* Register button for small devices */}
      <div className="block md:hidden mt-4">
        <button onClick={handleRegisterClick} className="text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center w-full">
          REGISTER
        </button>
        <button onClick={handleRegisterClick2} className="mt-4 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center w-full">
          REGISTER for Audience
        </button>
      </div>

      {/* Responsive paragraph content starts below the venue and button */}
      <div className="mt-10 flex flex-col items-center justify-center h-auto px-4 sm:px-8 text-left">
        <div style={{ fontFamily: 'JetBrains Mono, monospace' }} className="text-base md:text-lg lg:text-xl max-w-3xl overflow-wrap break-word leading-relaxed">
        <div>Get ready for 2 hours of energy, creativity, and celebration! Cultural Bytes is the grand finale of Convergence 2k24, where we not only recognize the champions but also celebrate with performances that will leave you in awe and entertained.</div>
<br /><div>This isn &apos;t just an award ceremony—it &apos;s a celebration of talent, with a mix of incredible performances and appreciation for the winners of the event. <br />If you want to show your brilliant talent, you can register for the following:</div>
<br /><div className='pl-5'><span className='text-xl font-bold text-orange-600'>Dance Performances :</span> Solo, Duo, Group</div>
<div className='pl-5'><span className='text-xl font-bold text-blue-800'>Singing Performances :</span> Solo, Duo</div> 
<div className='pl-5'><span className='text-xl font-bold text-yellow-700'>Special Performances</span> (Example: Stand-up comedy, Beatboxing etc)</div><br />
<div>If you want to be in the <span className='text-purple-500'>audience</span> and enjoy the show, you could register for that as well.</div>
<div>Register for an afternoon of fun, entertainment, and talent!</div> 
        </div>
      </div>
    </div>
    
  );
};

export default CulturalBytes;
