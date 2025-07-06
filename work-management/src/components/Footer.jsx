"use client";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 py-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Social Links */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">About Company</h2>
          <p className="text-gray-300 leading-relaxed">
            We provide efficient task management solutions that help individuals
            and teams stay organized, productive, and in control. Our tools are
            built with simplicity and performance in mind.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Work Manager. All rights reserved.
      </div>
    </footer>
  );
}
