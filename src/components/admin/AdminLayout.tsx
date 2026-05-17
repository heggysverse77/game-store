import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const AdminLayout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    return (
        <div className="flex h-screen bg-gray-950 text-gray-100 font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col shadow-2xl relative z-10">
                <div className="p-6 border-b border-gray-800">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                        Admin Panel
                    </h2>
                </div>
                
                <nav className="flex-1 p-4 space-y-2 mt-4">
                    <Link to="/admin" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all">
                        Dashboard
                    </Link>
                    <Link to="/admin/users" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all">
                        Users Management
                    </Link>
                    <Link to="/admin/games" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all">
                        Games Management
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <button 
                        onClick={handleLogout}
                        className="w-full px-4 py-3 text-left text-red-400 hover:bg-red-950 hover:text-red-300 rounded-lg transition-colors font-bold"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto bg-[#0a0a0c] p-8 relative">
                {/* Background glow effect for premium feel */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none -z-10"></div>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
