import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Phone, Mail, MapPin } from 'lucide-react';
import { useSettings } from '../context/settingsContext';

// --- SVG Icons for Social Media ---
const FacebookIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
);

const TwitterIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const InstagramIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  </svg>
);

export default function Footer() {
  // بنجيب كل البيانات من الـ Context اللي إنت عملته
  const { settings } = useSettings();

  return (
    <footer className="bg-[#070709] text-gray-300 border-t border-gray-800 pt-16 pb-8 font-sans mt-20 relative overflow-hidden">
      
      {/* تأثير إضاءة خفيف في الخلفية (Glow effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* القسم الأول: عن الموقع */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group w-fit">
              <div className="logo-border-spin w-12 h-12">
                <Gamepad2 className="text-purple-500 group-hover:text-pink-500 transition-colors duration-300 z-10" size={24} />
              </div>
              <span className="text-2xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {settings.siteName}
              </span>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              {settings.description}
            </p>
          </div>

          {/* القسم التاني: لينكات سريعة */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-b border-gray-800 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-purple-400 hover:pl-2 transition-all duration-300 flex items-center before:content-['▹'] before:mr-2 before:text-pink-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/games" className="hover:text-purple-400 hover:pl-2 transition-all duration-300 flex items-center before:content-['▹'] before:mr-2 before:text-pink-500">
                  Explore Games
                </Link>
              </li>
              <li>
                <Link to="/rent" className="hover:text-purple-400 hover:pl-2 transition-all duration-300 flex items-center before:content-['▹'] before:mr-2 before:text-pink-500">
                  Rent Games
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 hover:pl-2 transition-all duration-300 flex items-center before:content-['▹'] before:mr-2 before:text-pink-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* القسم التالت: تواصل معنا */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest border-b border-gray-800 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-pink-500 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                <span className="text-gray-400 group-hover:text-white transition-colors">{settings.address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-pink-500 group-hover:scale-110 transition-transform" size={18} />
                <a href={`tel:${settings.phone}`} className="text-gray-400 hover:text-purple-400 transition-colors" dir="ltr">
                  {settings.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-pink-500 group-hover:scale-110 transition-transform" size={18} />
                <a href={`mailto:${settings.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                  {settings.email}
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* القسم الأخير: حقوق الملكية والسوشيال ميديا */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-xs text-gray-500 uppercase tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-purple-500 font-bold">{settings.siteName}</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            {/* Social Icons */}
            <a href={settings.facebookUrl || '#'} className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 text-gray-400 hover:text-white transition-all shadow-lg hover:-translate-y-1">
              <FacebookIcon size={18} />
            </a>
            <a href={settings.twitterUrl || '#'} className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-sky-500 hover:border-sky-400 text-gray-400 hover:text-white transition-all shadow-lg hover:-translate-y-1">
              <TwitterIcon size={18} />
            </a>
            <a href={settings.instagramUrl || '#'} className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-pink-600 hover:border-pink-500 text-gray-400 hover:text-white transition-all shadow-lg hover:-translate-y-1">
              <InstagramIcon size={18} />
            </a>
            <a href={settings.linkedinUrl || '#'} className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-blue-700 hover:border-blue-600 text-gray-400 hover:text-white transition-all shadow-lg hover:-translate-y-1">
              <LinkedinIcon size={18} />
            </a>
          </div>

        </div>
        
      </div>
    </footer>
  );
}
