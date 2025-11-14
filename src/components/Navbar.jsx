import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { label: "Home" },
    { label: "Transactions" },
    {
      label: "Services",
      dropdown: ["Service 1"],
    },
    {
      label: "Investment Strategies",
      dropdown: ["Strategy 1"],
    },
    {
      label: "Resources",
      dropdown: ["Courses"],
    },{
      label: "Locations",
      dropdown: ["Islamabad"],
    },
    { label: "Team" },
    { label: "Affiliate Program" },
    { label: "Contact" },
  ];

  return (
    <nav className="w-full bg-[#0c0c0c]/80 backdrop-blur-md text-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <img 
        src="/src/assets/logo.png" 
        alt="Logo" 
        className="h-10 w-auto object-contain"
      />

      {/* Menu */}
      <ul className="flex items-center gap-6 text-sm">
        {menuItems.map((item) => (
          <li key={item.label} className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === item.label ? null : item.label)
              }
              className="flex items-center gap-1 hover:text-[#c59a5f] transition"
            >
              {item.label}

              {item.dropdown && (
                <span className="text-xs">
                  {openDropdown === item.label ? "▲" : "▼"}
                </span>
              )}
            </button>

            {/* Dropdown */}
            {item.dropdown && openDropdown === item.label && (
              <div className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2 w-40">
                {item.dropdown.map((sub) => (
                  <a
                    key={sub}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Call Now Button */}
      <button className="px-6 py-2 text-white bg-gradient-to-r from-[#8E653A] to-[#BF9A68] rounded-md text-sm font-semibold hover:bg-[#b2864f] transition">
        CALL NOW
      </button>
    </nav>
  );
}