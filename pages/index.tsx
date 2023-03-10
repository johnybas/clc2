import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import Invitation from "@components/Invitation";
import { Newsletter } from "@components/Newsletter";
import { Speakers } from "@components/Speakers";
import { Sponsors } from "@components/Sponsors";

export default function Home() {
  return (
    <div>
      {/* <h1 className='font-bold text-center text-7xl'>Hello CLC2</h1> */}
      <Header />
      <Hero />
      <Speakers />
      <Sponsors />
      <Invitation />
      <Newsletter />
      <Footer />
    </div>
  );
}
