
import React from "react";


export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="text-black relative">
      <div className="px-4 py-4 flex justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl text-gray-600 font-bold">MV</h1>

        {/* Navigation */}
        <nav>
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <ul
            className={`md:flex md:gap-6 md:static absolute top-12 right-0 md:bg-transparent bg-transparent transition-all ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="py-1 px-4 text-gray-600 font-normal hover:text-black cursor-pointer">
              Home
            </li>
            <li className="py-1 px-4 text-gray-600 font-normal hover:text-black cursor-pointer">
              About
            </li>
            <li className="py-1 px-4 text-gray-600 font-normal hover:text-black cursor-pointer">
              Skills
            </li>
            <li className="py-1 px-4 text-gray-600 font-normal hover:text-black cursor-pointer">
              Work
            </li>
            <li className="py-1 px-4 text-gray-600 font-normal hover:text-black cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
