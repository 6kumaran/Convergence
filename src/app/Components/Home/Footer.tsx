import React from 'react'

const Footer = () => {
  return (
    <div style={{ fontFamily: 'Nasalization, sans-serif' }}>
      <footer className="flex flex-col space-y-10 justify-center m-10">

<nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a className="hover:text-orange-700" href="/">Home</a>
    <a className="hover:text-orange-700" href="/event-timeline">Events</a>
    <a className="hover:text-orange-700" href="/members">Team</a>
    <a className="hover:text-orange-700" href="/contact">Contact</a>
    <a className="hover:text-orange-700" href="/gallery">Gallery</a>
</nav>

<div className="flex justify-center space-x-5">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=convergence2k24@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ibb.co/mNQLNvM/Mail2.png" className='h-7 w-7 rounded-full' />
    </a>
    <a href="https://www.instagram.com/convergence_2k24/" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ibb.co/2dCY8v9/instagram-new.png" />
    </a>
    <a href="https://chat.whatsapp.com/GCUgm2Swwl11tmC0KllnKF" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ibb.co/BNSB8xd/Whatsapp-removebg-preview-2-1.png" className='h-7 w-7' />
    </a>
    
</div>
<p className="text-center text-gray-700 font-medium">&copy; 2024 Convergence Ltd. All rights reservered.</p>
</footer>
    </div>
  )
}

export default Footer
