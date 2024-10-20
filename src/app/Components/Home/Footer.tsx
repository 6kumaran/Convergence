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
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ibb.co/0jMPDdW/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ibb.co/2dCY8v9/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ibb.co/9hN8NYF/facebook-messenger-v2.png" />
    </a>
    
</div>
<p className="text-center text-gray-700 font-medium">&copy; 2024 Convergence Ltd. All rights reservered.</p>
</footer>
    </div>
  )
}

export default Footer
