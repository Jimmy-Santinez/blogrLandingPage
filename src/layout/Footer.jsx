// import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradientVeryDarkGrayBlue text-white py-12 rounded-tr-[150px]">
      <div className="container mx-auto px-4 md:flex justify-between justify-items-center text-center  space-y-10">
        {/* Logo */}
        <figure className="mb-8 md:mb-0">
          <img src="/assets/logo.svg" alt="Blogr Logo" className="h-8" />
        </figure>

        {/* Product Links */}
        <ul className="space-y-4">
          <h2 className="text-lg font-semibold">Product</h2>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Overview
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Marketplace
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Integrations
            </a>
          </li>
        </ul>

        {/* Company Links */}
        <ul className="space-y-4">
          <h2 className="text-lg font-semibold">Company</h2>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Team
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Careers
            </a>
          </li>
        </ul>

        {/* Connect Links */}
        <ul className="space-y-4">
          <h2 className="text-lg font-semibold">Connect</h2>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Newsletter
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
