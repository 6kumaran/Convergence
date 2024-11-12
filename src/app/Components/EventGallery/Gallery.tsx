"use client";
import React from "react";
import CaseStudyCard from "../animata/card/case-study-card";

export default function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center antialiased">
      <div className="container mx-auto px-4 flex flex-wrap gap-4 justify-center">
        <CaseStudyCard
          category="GALLERY"
          image="https://images.unsplash.com/photo-1675285410608-ddd6bb430b19?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          link="https://drive.google.com/drive/folders/13sIOfgNlZ9lXZbewdT25lCZnksl80JHv?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Inaugural Ceremony"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        {/* <CaseStudyCard
          category="GALLERY"
          image="https://images.unsplash.com/photo-1675285410608-ddd6bb430b19?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          link="https://drive.google.com/drive/folders/13sIOfgNlZ9lXZbewdT25lCZnksl80JHv?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Inaugural Ceremony"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        <CaseStudyCard
          category="GALLERY"
          image="https://images.unsplash.com/photo-1675285410608-ddd6bb430b19?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          link="https://drive.google.com/drive/folders/13sIOfgNlZ9lXZbewdT25lCZnksl80JHv?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Inaugural Ceremony"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        <CaseStudyCard
          category="GALLERY"
          image="https://images.unsplash.com/photo-1675285410608-ddd6bb430b19?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          link="https://drive.google.com/drive/folders/13sIOfgNlZ9lXZbewdT25lCZnksl80JHv?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Inaugural Ceremony"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        /> */}
      </div>
    </div>
  );
}
