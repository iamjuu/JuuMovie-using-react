import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-2">Company Name</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-400 mt-4">
              Address: 123 Street, City, Country<br />
              Phone: +1234567890<br />
              Email: info@example.com
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold text-white mb-2">Follow Us</h3>
            <div className="flex">
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-4"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-4"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
        {/* Additional Content */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates.</p>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-700 text-white p-2 rounded-md w-full md:w-auto"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md mt-2 md:ml-2">
              Subscribe
            </button>
          </form>
      
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
