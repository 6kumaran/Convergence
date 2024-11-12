"use client";
import React from "react";
import CaseStudyCard from "../animata/card/case-study-card";

const BackgroundBeamsDemo: React.FC = () => {
  return (
    <div className="min-h-[80vh] w-full bg-black flex flex-col items-center justify-center antialiased">
      <div className="container mx-auto px-4 flex flex-wrap gap-4 justify-center">
        <CaseStudyCard
          category="GALLERY"
          image="https://i.ibb.co/72BJ7zJ/backgrounds-savage-vinyl-backgrounds-sa-v20-01.jpg"
          link="https://drive.google.com/drive/folders/13sIOfgNlZ9lXZbewdT25lCZnksl80JHv?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Inaugural Ceremony"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        {/* <CaseStudyCard
          category="GALLERY"
          image="https://i.ibb.co/72BJ7zJ/backgrounds-savage-vinyl-backgrounds-sa-v20-01.jpg"
          link="https://drive.google.com/drive/folders/13sIOfgNlZ9lXZbewdT25lCZnksl80JHv?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Inaugural Ceremony"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        <CaseStudyCard
          category="GALLERY"
          image="https://i.ibb.co/72BJ7zJ/backgrounds-savage-vinyl-backgrounds-sa-v20-01.jpg"
          link="https://drive.google.com/drive/folders/13sIOfgNlZ9lXZbewdT25lCZnksl80JHv?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Inaugural Ceremony"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        />
        <CaseStudyCard
          category="GALLERY"
          image="https://i.ibb.co/72BJ7zJ/backgrounds-savage-vinyl-backgrounds-sa-v20-01.jpg"
          link="https://drive.google.com/drive/folders/13sIOfgNlZ9lXZbewdT25lCZnksl80JHv?usp=sharing"
          logo="https://i.ibb.co/kHXdSrN/image.png"
          title="Inaugural Ceremony"
          type="content"
          className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)]"
        /> */}

      </div>
    </div>
  );
};

BackgroundBeamsDemo.displayName = "BackgroundBeamsDemo";
export default BackgroundBeamsDemo;
