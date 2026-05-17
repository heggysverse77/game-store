import React from 'react';
import Navbar from '../components/nav';
import Footer from '../components/footer';
import { useSettings } from '../context/settingsContext';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Input from '../components/ui/input';

export default function Contact() {
  const { settings } = useSettings();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#070709] text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-pink-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 uppercase tracking-wider">
              Get In Touch
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have a question about a game, an order, or just want to say hi? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl hover:border-purple-500/50 transition-colors duration-500">
              <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/50">
                    <MapPin className="text-pink-500 group-hover:text-white transition-colors" size={26} />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Our Location</h3>
                    <p className="text-lg font-medium">{settings.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50">
                    <Phone className="text-blue-500 group-hover:text-white transition-colors" size={26} />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Phone Number</h3>
                    <a href={`tel:${settings.phone}`} className="text-lg font-medium hover:text-blue-400 transition-colors" dir="ltr">
                      {settings.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center group-hover:bg-pink-600 group-hover:border-pink-500 transition-all duration-300 shadow-lg group-hover:shadow-pink-500/50">
                    <Mail className="text-pink-500 group-hover:text-white transition-colors" size={26} />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Email Address</h3>
                    <a href={`mailto:${settings.email}`} className="text-lg font-medium hover:text-pink-400 transition-colors">
                      {settings.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl relative hover:border-pink-500/50 transition-colors duration-500">
              <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">
                Send a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Your Name</label>
                    <Input type="text" variant="primary" className="w-full" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <Input type="email" variant="primary" className="w-full" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                  <Input type="text" variant="secondary" className="w-full" placeholder="How can we help?" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea rows={5} className="w-full input-gamic-secondary rounded-lg px-4 py-3 text-white focus:outline-none transition-all resize-none" placeholder="Write your message here..."></textarea>
                </div>
                
                <button type="button" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
