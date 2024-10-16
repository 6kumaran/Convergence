'use client';
import Navbar from "@/app/Components/Navbar";
import Main from "@/app/Components/Home/Main";
import Overview from "@/app/Components/Home/Overview";
import Cards from "@/app/Components/Home/Cards";
import Footer from "@/app/Components/Home/Footer";
import FAQ from "@/app/Components/Home/FAQ";
export default function Home() {
  return (
    <div style={{ fontFamily: 'Nasalization, sans-serif' }}>
      <Navbar />
      <Main />
      <Overview/>
      <Cards/>
      <FAQ />
      <Footer />
    </div>
  );
}
