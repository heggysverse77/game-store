import React from 'react'
import { Phone, Mail, UserPlus, Gamepad2, Heart, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Signup from './ui/signup'

export default function Navbar() {
  return (
    // ضفت أنيميشن للناف بار كلها عشان تنزل بنعومة أول ما الصفحة تفتح
    <header className="w-full flex flex-col font-sans animate-nav-slide">
      
      {/* Upper Nav */}
      <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-sm py-2 px-4 sm:px-8 flex justify-between items-center shadow-md relative overflow-hidden">
        
        {/* Contact Info (Phone & Email) */}
        <div className="flex items-center gap-6 z-10">
          <a href="tel:+20123456789" className="flex items-center gap-2 hover:text-gray-200 transition-all duration-300">
            <Phone size={14} />
            <span className="font-medium">+20 123 456 789</span>
          </a>
          <a href="mailto:info@game-store.com" className="flex items-center gap-2 hover:text-gray-200 transition-all duration-300">
            <Mail size={14} />
            <span className="font-medium">info@game-store.com</span>
          </a>
        </div>

        {/* Signup */}
        <div className="z-10">
          <Link to="/signup" className="flex items-center gap-2 hover:text-gray-200 font-bold transition-all duration-300">
            <UserPlus size={16} />
            <span>Sign Up</span>
          </Link>
        </div>
      </div>

      {/* Lower Nav */}
      <nav className="w-full bg-black text-white py-4 px-4 sm:px-8 flex justify-between items-center shadow-xl z-50 sticky top-0 border-b border-gray-800">
        
        {/* 1. Logo (Left) */}
        <Link to="/" className="flex items-center gap-4 group">
          {/* الدايرة اللي بتلف حوالين اللوجو */}
          <div className="logo-border-spin w-12 h-12">
            <Gamepad2 className="text-purple-500 group-hover:text-pink-500 transition-colors duration-300 z-10" size={24} />
          </div>
          <span className="text-2xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            GameStore
          </span>
        </Link>

        {/* 2. Navigation Links (Center) - Removed BG from Contact Us */}
        <ul className="flex items-center gap-8 font-semibold text-sm uppercase tracking-wider">
          <li>
            <Link to="/" className="hover:text-purple-400 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/games" className="hover:text-purple-400 transition-colors duration-300">Games</Link>
          </li>
          <li>
            <Link to="/rent" className="hover:text-purple-400 transition-colors duration-300">Rent Games</Link>
          </li>
          <li>
            <Link to="/buy" className="hover:text-purple-400 transition-colors duration-300">Buy Games</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* 3. Icons (Right) - Cart and Heart */}
        <div className="flex items-center gap-6">
          <Link to="/favorites" className="hover:text-pink-500 transition-colors duration-300">
            <Heart size={24} />
          </Link>
          
          <Link to="/cart" className="hover:text-purple-500 transition-colors duration-300 relative">
            <ShoppingCart size={24} />
            {/* Added a cool notification badge for the cart! */}
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              
            </span>
          </Link>
        </div>

      </nav>
    </header>
  )
}