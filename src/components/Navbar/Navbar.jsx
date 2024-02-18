import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { MdPhone as LuPhoneCall } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/infratech-logobg.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ handleOrderPopup, orderPopup }) => {

  const [active, setActive] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (itemName) => {
    setActive(itemName);
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    setActiveDropdown(itemName);
    setShowSecondDropdown(false);
  };

  const toggleSecondDropdown = (itemName) => {
    setActiveDropdown(itemName);
    setShowSecondDropdown((prevShowSecondDropdown) => !prevShowSecondDropdown);
  };

  const handleMouseEnter = (itemName) => {
    setActive(itemName);
    setShowDropdown(true);
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setShowSecondDropdown(false);
  };

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  // Handle click outside menu
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Construction", link: "/construction" },
    {
      id: 3,
      name: "Interior Design",
      dropdownLinks: [
        { id: 31, name: "Home Interior Designs", hasCaretRight: true, hasCaretLeft: true },
        { id: 32, name: "Commercial Interior Designs", link: "/commercial-interior-designs" },
      ],
    },
    {
      id: 4,
      name: "Other Services",
      dropdownLinks: [
        { id: 41, name: "Multi-Turf Construction", link: "/multi-turf-construction" },
        { id: 42, name: "Painting Services", link: "/painting-services" },
        { id: 43, name: "Renovation Services", link: "/renovation-services" },
      ],
    },
    { id: 5, name: "About", link: "/about-us" },
    { id: 6, name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <>
      {/* Navbar for laptop view */}
      <nav className={`hidden md:flex items-center justify-between px-20 py-4 bg-white shadow-md ${isNavbarFixed ? "fixed-navbar" : ""}`}>
        <style>
          {`
            .fixed-navbar {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              z-index: 9;
            }
          `}
        </style>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-30 h-16" />
        </Link>

        <ul className="flex space-x-6 items-center">
          {Menu.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer font-medium ${
                active === item.name ? "text-primary" : "text-gray-800"
              } flex items-center`}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdownLinks ? (
                <div className="group relative cursor-pointer">
                  <div
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-[2px] py-2"
                  >
                    {item.name}
                    <span>
                      <FaCaretDown className="transition-all duration-200" />
                    </span>
                  </div>
                  {showDropdown && activeDropdown === item.name && (
                    <div className="mt-0 absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                      <ul>
                        {item.dropdownLinks.map((dropdownData, index) => (
                          <li key={dropdownData.id}>
                            <Link
                              to={dropdownData.link}
                              onClick={() => toggleSecondDropdown(item.name)}
                              className="flex items-center w-full rounded-md p-2 hover:bg-primary/20"
                            >
                              {dropdownData.name}
                              {index === 0 && dropdownData.hasCaretRight && (
                                <span className="ml-2">
                                  <FaCaretRight className="transition-all duration-200" />
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {showSecondDropdown && activeDropdown === item.name && item.name === "Interior Design" && (
                        <div className="mt-[-130px] absolute left-full z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                          <ul>
                            <li>
                              <Link to="/overview-home-interiors" className="hover-primary" style={{ lineHeight: '3' }}>Overiew</Link>
                            </li>
                            <li>
                              <Link to="/modular-kitchen" className="hover-primary" style={{ lineHeight: '3' }}>Modular Kitchen</Link>
                            </li>
                            <li>
                              <Link to="/living-room-hall" className="hover-primary" style={{ lineHeight: '3' }}>Living Room Hall</Link>
                            </li>
                            <li>
                              <Link to="/false-ceiling" className="hover-primary" style={{ lineHeight: '3' }}>False Ceiling</Link>
                            </li>
                            <li>
                              <Link to="/cupboard-Wardrobes" className="hover-primary" style={{ lineHeight: '3' }}>Cupboards/Wardrobes</Link>
                            </li>
                            <li>
                              <Link to="/dining-room" className="hover-primary" style={{ lineHeight: '3' }}>Dining Room</Link>
                            </li>
                            <li>
                              <Link to="/toilet-bathroom" className="hover-primary" style={{ lineHeight: '3' }}>Toilet/Bathroom</Link>
                            </li>
                            <li>
                              <Link to="/tv-show-case" className="hover-primary" style={{ lineHeight: '3' }}>TV show case</Link>
                            </li>
                            <li>
                              <Link to="/study-room" className="hover-primary" style={{ lineHeight: '3' }}>Study Room</Link>
                            </li>
                            <li>
                              <Link to="/pooja-room" className="hover-primary" style={{ lineHeight: '3' }}>Pooja Room</Link>
                            </li>
                            <li>
                              <Link to="/bed-room" className="hover-primary" style={{ lineHeight: '3' }}>Bedroom</Link>
                            </li>

                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={item.link} className="flex items-center">
                  {item.name}
                  {item.dropdownLinks && item.dropdownLinks[0]?.hasCaretRight && (
                    <span className="ml-2">
                      <FaCaretRight className="transition-all duration-200" />
                    </span>
                  )}
                </Link>
              )}
            </li>
          ))}
          <li>
            {/* <OrderPopup setOrderPopup={handleOrderPopup} orderPopup={orderPopup} type={"Navigation Bar"} /> */}
            <button
              onClick={handleOrderPopup}
              className="xl:flex hover:scale-105 bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-full gap-3 text-sm md:hidden"
            >
              <LuPhoneCall className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <span>Call Now</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Responsive Navbar */}
      <div ref={menuRef} className={`md:hidden ${showMenu ? "" : ""}`}>
        <nav className="flex items-center justify-between px-6 py-4 gap-6 bg-white shadow-md">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-30 h-16" />
          </Link>

          <div className="flex items-center gap-4">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all text-black"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all text-black"
                size={30}
              />
            )}
          </div>
        </nav>
        <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} handleOrderPopup={handleOrderPopup} />
      </div>
    </>
  );
};

export default Navbar;
