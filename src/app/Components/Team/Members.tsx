'use client';
import React from "react";
import { useEffect } from "react";
// Define the type for product
interface Product {
  title: string;
  link: string;
  thumbnail: string;
  description?: string;
  subtitle?: string;  
}

// FlipCard component
import FlipCard from '../flip-card'; // Assuming FlipCard is in the same directory

export default function HeroParallaxDemo() {
  useEffect(() => {
    const images = document.querySelectorAll(".slide-in-left");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    images.forEach((image) => {
      observer.observe(image);
    });
  }, []);
  return (
    <div className="flex flex-col items-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>

<div className="text-white">
  <h1 className="text-5xl font-bold text-gray-600 my-10 text-center">Special Thanks To</h1>

  {/* Flex Container for Images and Descriptions */}
  <div className="flex flex-col md:flex-row md:justify-center space-y-8 md:space-y-0 md:space-x-8 mb-8">
    {/* First Image and Description */}
    <div className="flex flex-col items-center w-full md:w-2/3 lg:w-1/2">
      <img src="https://i.ibb.co/r3192zn/GD.jpg" className="rounded-xl slide-in-left w-full" />
      <div className="text-center mt-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <h3 className="text-2xl p-3">Board Of Director</h3>
        <h1 className="text-xl px-4">Dr. P.Santosh Kumar Patra</h1>
      </div>
    </div>

    {/* Second Image and Description */}
    <div className="flex flex-col items-center w-full md:w-2/3 lg:w-1/2">
      <img src="https://i.ibb.co/kJbcpxn/DSC-0217.jpg" alt="" className="slide-in-left rounded-xl w-full" />
      <div className="text-center mt-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <h3 className="text-2xl p-3">CSM - Head Of Department</h3>
        <h1 className="text-xl px-4">Dr. K.Srinivas</h1>
        <p className="px-4">
          {/* Add the description for Dr. K.Srinivas here */}
        </p>
      </div>
    </div>
  </div>
</div>


</div>

  );
}

// Sample data
export const products: Product[] = [
  {
    title: "Sufiyan",
    link: "https://gomoonbeam.com",
    thumbnail: "https://i.ibb.co/vq1n2h1/Sufi.jpg",
    subtitle: "Financial Committee",
    description: "",
  },
  {
    title: "Gahana",
    link: "https://cursor.so",
    thumbnail: "https://i.ibb.co/nmLc9W2/Gahana.jpg",
    subtitle: "Organizing Committee",
    description: "",
  },
  {
    title: "Tanusri",
    link: "https://userogue.com",
    thumbnail: "https://i.ibb.co/X8YbQnh/Tanu.jpg",
    subtitle: "Financial Committee",
    description: "",
  },
  {
    title: "Varsha",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/qCt0bZ8/Varsha.jpg",
    subtitle: "Organizing Committee",
    description: "Embracing my smile 😊 with essence of life✨",
  },
  {
    title: "Aditya",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/J2q9JZm/625.jpg",
    subtitle: "Financial Committee",
    description: "",
  },
  {
    title: "Kalyan",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/6Yqpw9v/DSC-0001-copy-1.jpg",
    subtitle: "Financial Committee",
    description: "",
  },
  {
    title: "Jatin",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/mJ7kvMq/Tito.jpg",
    subtitle: "Photography",
    description: "",
  },
  {
    title: "Kumaran",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/60B0b8t/Myself.jpg",
    subtitle: "Technical Committee",
    description: "",
  },
];
