import { FocusCards } from "@/app/Components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Gahana",
      desc: "Head Coordinator & Creative Head",
      src: "https://i.ibb.co/6DzNx9j/gwebcon.jpg",
    },
    {
      title: "Aditya",
      desc: "Finance Head",
      src: "https://i.ibb.co/QMgSjYP/Adi1-1.jpg",
    },
    {
      title: "Kumaran",
      desc: "Technical Head",
      src: "https://i.ibb.co/60B0b8t/Myself.jpg",
    },
    {
      title: "Sufiyan",
      desc: "Logistics Head",
      src: "https://i.ibb.co/my54dc2/Sufi.jpg",
    },
    {
      title: "Kalyan",
      desc: "Operations Head",
      src: "https://i.ibb.co/87GKb1c/Kalyan-Web.jpg",
    },
    {
      title: "Varsha",
      desc: "Cultural Head",
      src: "https://i.ibb.co/qCt0bZ8/Varsha.jpg",
    },
    {
      title: "Tanusri",
      desc: "Marketing Head",
      src: "https://i.ibb.co/X8YbQnh/Tanu.jpg",
    },
    {
      title: "Jatin",
      desc: "Photography Head ",
      src: "https://i.ibb.co/bQqqSTT/Jatin.jpg",
    },
    {
      title: "Sahasra",
      desc: "Design",
      src: "https://i.ibb.co/XS0PLPM/Sahasra3-1.jpg",
    },    
    {
        title: "Kruthi",
        desc: "Design",
        src: "https://i.ibb.co/1d8388b/Kruti.jpg",
      },
      {
        title: "Harsh",
        desc: "Marketing",
        src: "https://i.ibb.co/r6XJkwy/Harsh.jpg",
      },
    {
      title: "Navyatha",
      desc: "Cultural",
      src: "https://i.ibb.co/vZ2G5Kc/Navya.jpg",
    },
    {
      title: "Nimrah",
      desc: "Marketing",
      src: "https://i.ibb.co/VpKkRkX/Nimrah1.jpg",
    },
  ];

  return (<div>
    <div className="text-white text-3xl mb-6 dark:text-white max-w-5xl mx-auto  w-full px-3 md:px-0" style={{ fontFamily: 'Nasalization, sans-serif' }}><h1>CORE COMMITTEE</h1></div>
    <FocusCards cards={cards} /></div>);
}
