import React from 'react'
import { Link } from 'react-router'


function Footer() {
  return (
    <footer className="bg-white  mt-16">
      <div className="max-w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className=" font-semibold text-3xl mb-3">ESSENCE</h3>
          <p className="text-sm leading-relaxed">Timeless clothing for modern living. Quality essentials for every wardrobe.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>essence@gmail.com</li>
            <li>Sialkot, Pakistan</li>
          </ul>
        </div>

      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        © 2026 Essence. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer