'use client';
import React from "react";

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
    </div>
  );
}

// Sample data
export const products: Product[] = [
  {
    title: "Sufiyan",
    link: "https://gomoonbeam.com",
    thumbnail: "https://i.ibb.co/1v6MShX/601.jpg",
    subtitle: "Financial Committee",
    description: "",
  },
  {
    title: "Gahana",
    link: "https://cursor.so",
    thumbnail: "https://i.ibb.co/B4YTj5M/602.jpg",
    subtitle: "Organizing Committee",
    description: "",
  },
  {
    title: "Tanusri",
    link: "https://userogue.com",
    thumbnail: "https://i.ibb.co/GtcSg6p/610.jpg",
    subtitle: "Financial Committee",
    description: "",
  },
  {
    title: "Varsha",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/h81BpHy/620.jpg",
    subtitle: "Organizing Committee",
    description: "",
  },
  {
    title: "Aditya",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/J2q9JZm/625.jpg",
    subtitle: "Technical Committee",
    description: "",
  },
  {
    title: "Kalyan",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/S5hkmwm/628.jpg",
    subtitle: "Financial Committee",
    description: "",
  },
  {
    title: "Jatin",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/TYg4fCW/633.jpg",
    subtitle: "Photography",
    description: "",
  },
  {
    title: "Kumaran",
    link: "https://editorially.org",
    thumbnail: "https://i.ibb.co/yn9VbNt/646.jpg",
    subtitle: "Technical Committee",
    description: "",
  },
];
