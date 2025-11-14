export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Logo + Text + Social Icons */}
        <div>
          {/* Logo Placeholder */}
          <div className="mb-4">
            <img 
              src="/src/assets/logo.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Munoz Ghezlan & Co. Ltd. Elite Financing for <br />
            Real Estate Investors.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-black text-xl cursor-pointer">f</div>
            <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-black text-xl cursor-pointer">◎</div>
            <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-black text-xl cursor-pointer">in</div>
          </div>
        </div>
        {/* Products */}
        <div>
          <h3 className="font-serif text-xl mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>DSCR Loans</li>
            <li>Working Capital</li>
            <li>Creative Financing</li>
            <li>Investment Strategies</li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h3 className="font-serif text-xl mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Resources Hub</li>
            <li>Courses</li>
            <li>Calculators</li>
            <li>Blogs</li>
            <li>FAQs</li>
            <li>Glossary</li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="font-serif text-xl mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About</li>
            <li>Our Team</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h3 className="font-serif text-xl mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>NMLS# [Number]</li>
            <li>Equal Housing Lender</li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-16 text-gray-400 text-sm">
        © 2025 Munoz Ghezlan & Co. Ltd. All rights reserved.
      </div>
    </footer>
  );
}