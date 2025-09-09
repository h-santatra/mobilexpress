import TopNavbar from "../parts/TopNavbar";
import BottomNavbar from "../parts/BottomNavbar";

export default function Header() {
  return (
    <div className="space-y-4 mt-4 px-4">
      <TopNavbar />
      <hr className="h-0 border border-gray-500 shadow-lg" />
      <BottomNavbar />
    </div>
  );
}
