import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className=" bg-[#EBEBEB]/90 backdrop-blur-md border-b border-gray-200">

      <div className="container-width h-[90px] flex items-center justify-between px-8">

        {/* Logo */}

        <div className="flex items-center">

          <h1 className="text-[30px] font-light tracking-wide">

            GLAMLINQ{" "}

            <span className="script text-[28px] normal-case">
              by Lindsay
            </span>

          </h1>

        </div>

        {/* Navigation */}

        <ul className="hidden lg:flex gap-14 uppercase text-[15px] tracking-wide">

          <li>
            <a href="#about" className="hover:opacity-60">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:opacity-60">
              Services
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:opacity-60">
              Gallery
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:opacity-60">
              FAQ
            </a>
          </li>

        </ul>

        {/* Button */}

        <Link
  to="/booking"
  className="
    hidden
    lg:block
    border
    border-black
    rounded-full
    px-10
    py-3
    uppercase
    tracking-wide
    hover:bg-black
    hover:text-white
    transition
  "
>
  Book Now
</Link>

      </div>

    </nav>
  );
}