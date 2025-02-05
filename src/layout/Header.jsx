import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const subMenuRef = useRef(null);

  const toggleSubMenu = (subMenu) => {
    setActiveSubMenu(activeSubMenu === subMenu ? null : subMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        setActiveSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="h-full bg-gradient-to-r from-gradientVeryLightRed to-gradientLightRed flex flex-col justify-between rounded-bl-[100px] relative overflow-hidden">
      {/* Fondo SVG */}
      <img
        src="/assets/bg-pattern-intro-desktop.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover lg:object-right md:object-right object-center z-0"
        aria-hidden="true"
      />

      {/* Navbar */}
      <nav className="relative z-30 flex justify-between items-center px-6 py-4 mt-7">
        {/* Sección izquierda */}
        <div className="flex items-center gap-10">
          <figure>
            <img src="/assets/logo.svg" alt="Blogr Logo" className="h-8" />
          </figure>

          <ul className="hidden md:flex gap-6 font-medium text-white">
            {/* Product */}
            <li
              className="relative cursor-pointer flex items-center gap-2 px-4 py-2"
              onClick={() => toggleSubMenu("product")}
            >
              <span>Product</span>
              <img
                src="/assets/icon-arrow-light.svg"
                alt="Arrow icon"
                className={`transition-transform duration-300 ${
                  activeSubMenu === "product" ? "rotate-180" : ""
                }`}
              />
              {activeSubMenu === "product" && (
                <div
                  ref={subMenuRef}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 bg-white text-black/75 font-overpass p-4 rounded-lg shadow-xl z-50"
                >
                  <ul className="space-y-3">
                    {[
                      "Overview",
                      "Pricing",
                      "Marketplace",
                      "Features",
                      "Integrations",
                    ].map((item) => (
                      <li key={item} className="hover:font-bold cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Company */}
            <li
              className="relative cursor-pointer flex items-center gap-2 px-4 py-2"
              onClick={() => toggleSubMenu("company")}
            >
              <span>Company</span>
              <img
                src="/assets/icon-arrow-light.svg"
                alt="Arrow icon"
                className={`transition-transform duration-300 ${
                  activeSubMenu === "company" ? "rotate-180" : ""
                }`}
              />
              {activeSubMenu === "company" && (
                <div
                  ref={subMenuRef}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 bg-white text-black/75 font-overpass p-4 rounded-lg shadow-xl z-50"
                >
                  <ul className="space-y-3">
                    {["About", "Team", "Blog", "Careers"].map((item) => (
                      <li key={item} className="hover:font-bold cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Contact */}
            <li
              className="relative cursor-pointer flex items-center gap-2 px-4 py-2"
              onClick={() => toggleSubMenu("contact")}
            >
              <span>Contact</span>
              <img
                src="/assets/icon-arrow-light.svg"
                alt="Arrow icon"
                className={`transition-transform duration-300 ${
                  activeSubMenu === "contact" ? "rotate-180" : ""
                }`}
              />
              {activeSubMenu === "contact" && (
                <div
                  ref={subMenuRef}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 bg-white text-black/75 font-overpass p-4 rounded-lg shadow-xl z-50"
                >
                  <ul className="space-y-3">
                    {["Contact", "Newsletter", "LinkedIn"].map((item) => (
                      <li key={item} className="hover:font-bold cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Sección derecha */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <button className="text-white hover:font-bold hover:underline underline-offset-1">
              Login
            </button>
            <button className="bg-white text-gradientLightRed px-4 py-2 rounded-full font-bold hover:bg-gray-100">
              Sign Up
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          >
            <img
              src={
                toggleMobileMenu
                  ? "/assets/icon-close.svg"
                  : "/assets/icon-hamburger.svg"
              }
              alt={toggleMobileMenu ? "Cerrar menú" : "Abrir menú"}
              className="h-6"
            />
          </button>
        </div>
      </nav>

      {/* Menú Mobile */}
      {toggleMobileMenu && (
        <div className="relative z-40 bg-white text-center m-3 p-4 rounded-md font-overpass space-y-5 text-lg shadow-2xl">
          <ul className="space-y-4">
            {/* Product */}
            <li className="flex flex-col gap-2">
              <div
                className="flex justify-between items-center px-2 py-2"
                onClick={() => toggleSubMenu("product")}
              >
                <span>Product</span>
                <img
                  src="/assets/icon-arrow-dark.svg"
                  alt="Arrow icon"
                  className={`transform transition-transform ${
                    activeSubMenu === "product" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeSubMenu === "product" && (
                <ul className="bg-gray-100 text-gray-600 text-sm p-2 rounded-lg space-y-2">
                  {[
                    "Overview",
                    "Pricing",
                    "Marketplace",
                    "Features",
                    "Integrations",
                  ].map((item) => (
                    <li
                      key={item}
                      className="hover:text-gray-800 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Company */}
            <li className="flex flex-col gap-2">
              <div
                className="flex justify-between items-center px-2 py-2"
                onClick={() => toggleSubMenu("company")}
              >
                <span>Company</span>
                <img
                  src="/assets/icon-arrow-dark.svg"
                  alt="Arrow icon"
                  className={`transform transition-transform ${
                    activeSubMenu === "company" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeSubMenu === "company" && (
                <ul className="bg-gray-100 text-gray-600 text-sm p-2 rounded-lg space-y-2">
                  {["About", "Team", "Blog", "Careers"].map((item) => (
                    <li
                      key={item}
                      className="hover:text-gray-800 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Connect */}
            <li className="flex flex-col gap-2">
              <div
                className="flex justify-between items-center px-2 py-2"
                onClick={() => toggleSubMenu("connect")}
              >
                <span>Connect</span>
                <img
                  src="/assets/icon-arrow-dark.svg"
                  alt="Arrow icon"
                  className={`transform transition-transform ${
                    activeSubMenu === "connect" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeSubMenu === "connect" && (
                <ul className="bg-gray-100 text-gray-600 text-sm p-2 rounded-lg space-y-2">
                  {["Contact", "Newsletter", "LinkedIn"].map((item) => (
                    <li
                      key={item}
                      className="hover:text-gray-800 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <div className="border-t-2 border-gray-200 pt-4 space-y-4">
            <button className="w-full py-2 text-gray-800 hover:text-gray-900">
              Login
            </button>
            <button className="w-full py-2 bg-gradient-to-r from-gradientVeryLightRed to-gradientLightRed text-white rounded-full font-bold">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      {!toggleMobileMenu && (
        <section className="relative z-20 font-overpass text-center px-6 flex flex-col items-center justify-center text-white mt-16 mb-28">
          <h1 className="text-4xl md:text-6xl leading-tight">
            A modern publishing platform
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Grow your audience and build your online brand
          </p>
          <div className="mt-7 flex space-x-4">
            <button className="bg-white text-gradientLightRed px-6 py-2 rounded-full font-bold hover:bg-gray-100">
              Start for Free
            </button>
            <button className="bg-transparent border border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-gradientLightRed">
              Learn More
            </button>
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
