import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <ul>
              <li><a href="tel:+1234567890" className="hover:underline">+91-899283283</a></li>
              <li><a href="mailto:example@example.com" className="hover:underline">skillupnow01@gmail.com</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p>&copy; 2025 SkillUpNow. All Rights Reserved.</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Built with <span className="text-red-500">&hearts;</span> by AVP-Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
