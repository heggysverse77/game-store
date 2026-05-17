import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/cards'
import Button from './ui/button'

export const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export default function Games() {
  const [gamesList, setGamesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  
  // 1. حالة جديدة عشان نحدد هنعرض كل الألعاب ولا 3 بس
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchGames() {
      if (!API_KEY) {
        setErrorMsg("API Key is missing! Add VITE_RAWG_API_KEY to your .env file.");
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
        const data = await response.json();
        setGamesList(data.results || []);
      } catch (err) {
        console.error("Error fetching games:", err);
        setErrorMsg("Failed to fetch games.");
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  // 2. بنعمل فلتر أو قص للألعاب. لو showAll بـ true، اعرض الكل. لو false، اعرض أول 3 بس.
  const displayedGames = showAll ? gamesList : gamesList.slice(0, 3);

  return (
    <div className="w-full text-white p-8">
      <h2 className="text-3xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center">
        Trending Games
      </h2>
      
      {loading && <p className="text-gray-400 animate-pulse text-center">Loading games...</p>}
      {errorMsg && <p className="text-red-500 font-bold bg-red-900/20 p-4 rounded-lg border border-red-500 text-center">{errorMsg}</p>}
      
      {/* 3. التصميم الاحترافي للـ Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {displayedGames.map((game: any) => (
          <Card key={game.id} className="group relative border-gray-800 bg-gray-900 hover:border-purple-500 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 h-full flex flex-col">
             
             {/* قسم الصورة مع التأثيرات */}
             <div className="relative overflow-hidden h-56 w-full">
               <img 
                 src={game.background_image} 
                 alt={game.name} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
               
               {/* المنصات (Platforms) */}
               <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                 {game.platforms?.slice(0, 3).map((p: any) => (
                   <span key={p.platform.id} className="bg-black/60 backdrop-blur-md border border-gray-700 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold">
                     {p.platform.name}
                   </span>
                 ))}
               </div>

               {/* السعر (Price Estimate) */}
               <div className="absolute bottom-3 right-3 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-purple-500/50 shadow-lg flex items-center gap-2">
                 <span className="text-gray-400 line-through text-xs font-medium">$59.99</span>
                 <span className="text-green-400 font-black text-lg">$39.99</span>
               </div>
             </div>
             
             {/* الهيدر والعنوان */}
             <CardHeader className="pt-5 pb-2">
               <CardTitle className="truncate text-xl text-white group-hover:text-purple-400 transition-colors" title={game.name}>
                 {game.name}
               </CardTitle>
             </CardHeader>
             
             {/* المحتوى (التقييم والتاريخ) */}
             <CardContent className="flex-grow pt-0">
               <div className="flex justify-between items-center text-sm text-gray-400 font-medium">
                 <span className="flex items-center gap-1.5 bg-gray-800/80 px-2.5 py-1 rounded-md border border-gray-700">
                   <span className="text-yellow-500">⭐</span> {game.rating}
                 </span>
                 <span className="flex items-center gap-1.5 bg-gray-800/80 px-2.5 py-1 rounded-md border border-gray-700">
                   📅 {game.released || "TBA"}
                 </span>
               </div>
             </CardContent>

             {/* الفوتر (الزراير) */}
             <CardFooter className="flex justify-between gap-3 pt-4 border-t border-gray-800/50">
               <Link to={`/game/${game.id}`} className="w-full">
                 <Button variant="secondary" size="sm" className="w-full font-bold">Details</Button>
               </Link>
               <Button variant="primary" size="sm" className="w-full font-bold shadow-lg shadow-purple-500/30">Add to Cart</Button>
             </CardFooter>

          </Card>
        ))}
      </div>

      {/* 4. زرار إظهار الكل أو القليل */}
      {gamesList.length > 3 && (
        <div className="flex justify-center mt-12">
          <Button 
            variant={showAll ? "secondary" : "primary"} 
            size="lg" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show All Games"}
          </Button>
        </div>
      )}

    </div>
  )
}