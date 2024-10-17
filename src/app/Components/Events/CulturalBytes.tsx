'use client';
import React from 'react';

const CulturalBytes = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://docs.google.com/forms/d/1eHEG3zSCm61nSn1WHxqc_dnaJyliddxzFF_FzU4pIeI/edit'; // Replace with your actual Google Form link
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl ">Cultural Bytes</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: SCB Block Auditorium<br /> Price: Rs. 60(Per Head) & Rs. 50(Audience)
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
        <div>Get ready for 2 hours of energy, creativity, and celebration! Cultural Bytes is the grand finale of Convergence 2k24, where we not only recognize the champions but also celebrate with performances that will leave you in awe and entertained.</div>
<br /><div>This isn &apos;t just an award ceremony—it &apos;s a celebration of talent, with a mix of incredible performances and appreciation for the winners of the event. Here&apos;s what you &apos;ll enjoy:</div>
<br /><div className='pl-5'><span className='text-xl font-bold'>Dance Performances :</span> Solo, Duo, Group</div>
<div className='pl-5'><span className='text-xl font-bold'>Singing Performances :</span> Solo, Duo</div> 
<div className='pl-5'><span className='text-xl font-bold'>Special Performances</span> (Example: Stand-up comedy, Beatboxing etc)</div><br />
<div>If you want to be in the audience and enjoy the show, you could register for that as well.</div>
<div>Register for an afternoon of fun, entertainment, and talent!</div> 
        </div>
      </div>
    </div>
    
  );
};

export default CulturalBytes;
