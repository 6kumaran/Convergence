import { FocusCards } from "@/app/Components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Sufiyan",
      desc: "Financial Committee",
      src: "https://i.ibb.co/my54dc2/Sufi.jpg",
    },
    {
      title: "Gahana",
      desc: "Organising Committee",
      src: "https://i.ibb.co/6DzNx9j/gwebcon.jpg",
    },
    {
      title: "Tanusri",
      desc: "Marketing Committee",
      src: "https://i.ibb.co/X8YbQnh/Tanu.jpg",
    },
    {
      title: "Varsha",
      desc: "Organising Committee",
      src: "https://i.ibb.co/qCt0bZ8/Varsha.jpg",
    },
    {
      title: "Aditya",
      desc: "Financial Committee",
      src: "https://i.ibb.co/92KPj69/Aditya.jpg",
    },
    {
      title: "Kalyan",
      desc: "Financial Committee",
      src: "https://i.ibb.co/87GKb1c/Kalyan-Web.jpg",
    },
    {
      title: "Jatin",
      desc: "Photography Committee",
      src: "https://i.ibb.co/mJ7kvMq/Tito.jpg",
    },
    {
      title: "Kumaran",
      desc: "Technical Committee",
      src: "https://i.ibb.co/60B0b8t/Myself.jpg",
    },
    {
      title: "Navyatha",
      desc: "Technical Committee",
      src: "https://i.ibb.co/vZ2G5Kc/Navya.jpg",
    },
    {
      title: "Nimrah",
      desc: "Marketing Committee",
      src: "https://i.ibb.co/VpKkRkX/Nimrah1.jpg",
    },    
    {
        title: "Kruti",
        desc: "Technical Committee",
        src: "https://i.ibb.co/1d8388b/Kruti.jpg",
      },
      {
        title: "Sahasra",
        desc: "Technical Committee",
        src: "https://i.ibb.co/XS0PLPM/Sahasra3-1.jpg",
      },
      {
        title: "Harsh",
        desc: "Marketing Committee",
        src: "https://i.ibb.co/r6XJkwy/Harsh.jpg",
      },
  ];

  return (<div>
    <div className="text-white text-3xl mb-6 dark:text-white max-w-5xl mx-auto md:px-8 w-full px-3 md:px-0" style={{ fontFamily: 'Nasalization, sans-serif' }}><h1>CORE COMMITTEE</h1></div>
    <FocusCards cards={cards} /></div>);
}
