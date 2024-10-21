import Members from "@/app/Components/Team/Members";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import TeamCard from "@/app/Components/Team/TeamCard"
import Spotlight from "@/app/Components/Team/Spotlight"

export default function MembersPage() {
  return (<div>
    <Navbar />
    <Spotlight />
    <TeamCard />
    <Members />
    <Footer />
  </div>);
}
