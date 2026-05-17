import React, { useState } from 'react'
import Button from './button'
import Input from './input'
import DropdownMenu from './menue'
import { categories, types, location } from '../../data/menue data'
import image from '../../assets/hero.jpg'
import { Link } from 'react-router-dom'

export default function Hero_section() {
  // States لحفظ اختيارات اليوزر في البحث والفلتر
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  return (
    // شلت 'overflow-hidden' عشان الـ Menu تفتح براحتها ومتبقاش مقطوعة
    <div className="relative min-h-[600px] w-full flex items-center justify-center mb-12">
      
      {/* 1. Background Image */}
      <img 
        src={image}
        alt="GameStore Background" 
        // حطيت object-cover هنا عشان الصورة تفضل جوه المقاس
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      
      {/* 2. Gradient Overlay (عشان الكلام يبقى واضح ومركز في النص) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30"></div>

      {/* 3. Main Content (Centered) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center mt-12 space-y-8">
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl animate-fade-in">
          WELCOME TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            GAMESTORE
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          Your ultimate destination to explore, buy, and rent the best games. 
          Find what you're looking for and start your next adventure today!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" variant="primary">
            Explore Games
          </Button>
          <Link to="/contact">
          <Button size="lg" variant="secondary">
            Contact Us
          </Button>
          </Link>
        </div>

        {/* 4. Search & Filter Bar (شريط البحث والفلترة) */}
        <div className="mt-10 bg-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700 shadow-2xl flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl">
          
          {/* Input Search */}
          <div className="w-full md:w-1/3">
            <Input 
              type="text" 
              variant='secondary'
              placeholder="Search by game name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border-gray-600 focus:border-purple-500"
            />
          </div>

          {/* Category Menu */}
          <div className="w-full md:w-1/4">
            <DropdownMenu 
              options={categories} 
              value={selectedCategory} 
              onChange={setSelectedCategory} 
              placeholder="Category" 
            />
          </div>

          {/* Type Menu (Rent/Buy) */}
          <div className="w-full md:w-1/4">
            <DropdownMenu 
              options={types} 
              value={selectedType} 
              onChange={setSelectedType} 
              placeholder="Rent or Buy" 
            />
          </div>

          {/* Location Menu */}
          <div className="w-full md:w-1/4">
            <DropdownMenu 
              options={location} 
              value={selectedLocation} 
              onChange={setSelectedLocation} 
              placeholder="Location" 
            />
          </div>

        </div>

      </div>
    </div>
  )
}