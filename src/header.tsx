import { Phone, Mail, Menu, Search, Gamepad2 } from "lucide-react"
import { useState } from "react"
import { useSettings } from "./context/settingsContext"
import { Link } from "react-router-dom"
export default function Header() {
  const { settings } = useSettings();

  return (
    <header className="w-full flex flex-col font-sans">
      {/* Top Header - RGB Gradient Glow */}
      <div className="w-full relative overflow-hidden bg-black text-gray-300 py-2 border-b border-gray-900">
        {/* RGB Glow Background Layer */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-rgb-bg bg-[length:200%_200%]"></div>
        
        <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm relative z-10">
          {/* Contact on the left */}
          <div className="flex gap-6 items-center">
            <a href={`tel:${settings.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-purple-400" />
              <span>contact: {settings.phone}</span>
            </a>
            <a href={`mailto:${settings.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-pink-400" />
              <span>email: {settings.email}</span>
            </a>
          </div>
          {/* Right side text */}
          <div className="hidden sm:flex gap-4">
             <span className="text-gray-300 font-medium">Welcome to Game Soft</span>
          </div>
        </div>
      </div>

      {/* Bottom Header - Black Background */}
      <div className="w-full bg- py-4 sticky top-0 z-50 shadow-[0_5px_20px_rgba(0,0,0,0.6)]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo on the left with RGB Loop Glow */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              {/* RGB Looping Glow behind logo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full blur-md opacity-30 animate-rgb-bg bg-[length:200%_200%]"></div>
              {/* Logo Icon */}
              <div className="relative bg-[#0a0a0a] rounded-full p-2.5 border border-gray-800">
                 <Gamepad2 className="w-7 h-7 text-white animate-rgb-text" />
              </div>
            </div>
            {/* Logo Text */}
            <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase">
              Game Soft
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center font-bold">
            <Link to="/" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all uppercase tracking-wide text-sm">Home</Link>
            <Link to="/games" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all uppercase tracking-wide text-sm">Games</Link>
            <Link to="/rent" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all uppercase tracking-wide text-sm">Rent Games</Link>
            <Link to="/about" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all uppercase tracking-wide text-sm">About Us</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all uppercase tracking-wide text-sm">Contact</Link>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex gap-5 items-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all uppercase tracking-wide text-sm shadow-lg hover:shadow-[0_0_15px_rgba(215,0,215,0.5)]">Login</button>
    
          </div>

        </div>
      </div>
    </header>
  )
}
