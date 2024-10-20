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
    <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-bold text-gray-600 mb-4">Meet The Iconic Team</h1>
        <p className="text-gray-600 text-lg">
          Meet the dedicated team behind Convergence! Each member played a crucial role in organizing and bringing this event to life. Their hard work and unique contributions made the fest a success.
        </p>
      </div>

      {/* Map over the products array and pass each product to FlipCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product, index: number) => (
          <FlipCard
            key={index}
            image={product.thumbnail}
            title={product.title}
            description={product.description || "No description available"}
            subtitle={product.subtitle || "Core Team"}
          />
        ))}
      </div>
      <div className="text-white">
      <h1 className="text-3xl font-bold text-gray-600 my-4">Special Thanks To</h1>
      <img src="https://i.ibb.co/F82H5wt/GD.png" className="slide-in-left"></img>
      <div style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      <h3 className="text-2xl p-3">Board Of Director</h3>
      <h1 className="text-xl px-4">Dr. P.Santosh Kumar Patra</h1>
      <p className="text-base px-4">Dr. P.Santosh Kumar Patra, Group Director of St.Martin&apos;s Engineering College is holding B.E. in Computer Science & Engineering, MTech in Computer Science & Engineering and Ph.D in Computer Science & Engineering degrees. His area of interests are Airtificial Intelligence, Software Engineering, Data mining and warehousing & Wireless Networks.</p>
      <br />
      <img src="https://i.ibb.co/vqyjdMw/DSC-0217.jpg" alt="" className="slide-in-left rounded-xl w-full md:w-1/2 lg:w-1/3"/>
      <h3 className="text-2xl p-3">CSM - Head Of Department</h3>
      <h1 className="text-xl px-4">Dr. K.Srinivas</h1>
      <p className="px-4"></p>
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
