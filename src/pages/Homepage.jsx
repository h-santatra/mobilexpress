import Header from "../components/section/Header";
import Herosection from "../components/section/Herosection";
import Featured from "../components/section/Featured";
import Summersales from "../components/section/Summersales";
import Weekdeals from "../components/section/Weekdeals";
import Whywithus from "../components/section/Whywithus";
import Highlights from "../components/section/Highlights";
import Footer from "../components/section/Footer";

export default function Homepage() {
  return (
    <div className="font-[work_sans] space-y-8">
      <Header />
      <Herosection />
      <div>
        <Featured />
      </div>
      {/* <Summersales /> */}
      <Weekdeals />
      <Whywithus />
      <Highlights />
      <Footer />
    </div>
  );
}
