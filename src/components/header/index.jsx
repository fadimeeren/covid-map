import { PiVirus } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-white/10 bg-linear-to-r from-blue-900 via-indigo-900  to-purple-900 text-white shadow-md backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="">
          <PiVirus className="text-4xl" />
          <span> Covid-19</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
