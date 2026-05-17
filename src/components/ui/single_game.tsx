import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY } from "../games";
import Navbar from "../nav";
import Footer from "../footer";
import Button from "./button";
import { Star, Calendar, Monitor, Globe, ChevronLeft } from "lucide-react";

export default function SingleGame() {
  const { id } = useParams();
  const [game, setGame] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchGameDetails() {
      if (!API_KEY) {
        setErrorMsg("API Key is missing!");
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        if (!response.ok) throw new Error("Game not found");
        const data = await response.json();
        setGame(data);
      } catch (err) {
        console.error("Error fetching game:", err);
        setErrorMsg("Failed to fetch game details.");
      } finally {
        setLoading(false);
      }
    }

    fetchGameDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070709] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-purple-400 font-bold tracking-widest animate-pulse">LOADING DETAILS...</p>
      </div>
    );
  }

  if (errorMsg || !game) {
    return (
      <div className="min-h-screen bg-[#070709] flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h2 className="text-3xl text-red-500 font-bold">{errorMsg || "Game not found"}</h2>
          <Link to="/" className="text-purple-400 hover:text-pink-500 underline font-bold">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#070709] min-h-screen text-gray-300 font-sans">
      <Navbar />

      {/* Header / Hero Section of the Game */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent z-10"></div>
        <img 
          src={game.background_image} 
          alt={game.name} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 mb-6 transition-colors font-medium">
              <ChevronLeft size={20} /> Back to Games
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
              {game.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium mt-6">
              <span className="flex items-center gap-2 bg-purple-600/20 text-purple-400 border border-purple-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Star size={18} className="text-yellow-500" /> {game.rating} / 5
              </span>
              <span className="flex items-center gap-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Calendar size={18} /> {game.released || "TBA"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-gray-800 pb-4 inline-block">
                About The Game
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg whitespace-pre-line">
                {game.description_raw || "No description available for this game."}
              </p>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            
            {/* Price & Cart Card */}
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all"></div>
              
              <div className="flex justify-between items-center mb-8 relative z-10">
                <span className="text-gray-500 line-through font-bold">$59.99</span>
                <span className="text-5xl font-black text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]">$39.99</span>
              </div>
              <Button variant="primary" size="lg" className="w-full font-black uppercase tracking-widest relative z-10 py-4">
                Add to Cart
              </Button>
            </div>

            {/* Game Meta Details */}
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">
                Details
              </h3>
              
              <div className="space-y-6">
                <div>
                  <span className="block text-gray-500 text-xs uppercase tracking-wider mb-2 font-bold">Developer</span>
                  <span className="text-white font-medium text-sm">{game.developers?.map((d:any) => d.name).join(", ") || "Unknown"}</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs uppercase tracking-wider mb-2 font-bold">Publisher</span>
                  <span className="text-white font-medium text-sm">{game.publishers?.map((p:any) => p.name).join(", ") || "Unknown"}</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs uppercase tracking-wider mb-2 font-bold">Genres</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {game.genres?.map((g:any) => (
                      <span key={g.id} className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-md text-xs font-semibold">{g.name}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs uppercase tracking-wider mb-2 font-bold">Platforms</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {game.platforms?.map((p:any) => (
                      <span key={p.platform.id} className="bg-black/50 border border-purple-900/50 text-purple-300 px-3 py-1.5 rounded-md text-xs flex items-center gap-2 font-bold">
                        <Monitor size={14} className="text-purple-500" /> {p.platform.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                {game.website && (
                   <div className="pt-6 mt-6 border-t border-gray-800">
                     <Button 
                       variant="secondary" 
                       size="lg" 
                       className="w-full font-bold tracking-wider uppercase flex items-center justify-center gap-2 py-4"
                       onClick={() => window.open(game.website, "_blank")}
                     >
                       <Globe size={18} className="text-blue-400" /> Official Website
                     </Button>
                   </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
