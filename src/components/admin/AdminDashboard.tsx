import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/cards';
import { supabase } from '../../lib/supabase';
import Button from '../ui/button';

const AdminDashboard = () => {
    const [stats, setStats] = useState({ users: 0, games: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            // Count total users from profile table
            const { count: userCount } = await supabase
                .from('profile')
                .select('*', { count: 'exact', head: true });
            
            // Try to count games (Assuming you have a games table, if not it will gracefully fail to 0)
            const { count: gameCount } = await supabase
                .from('games')
                .select('*', { count: 'exact', head: true })
                .catch(() => ({ count: 0 }));
            
            setStats({ 
                users: userCount || 0, 
                games: gameCount || 0 
            });
            setIsLoading(false);
        };

        fetchStats();
    }, []);

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">Overview</h1>
                <p className="text-gray-400">Welcome back to your admin dashboard.</p>
            </header>

            {/* Stats Grid using your Reusable Cards! */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Users Stat Card */}
                <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-gray-400 text-sm font-medium uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                            Total Users
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            {isLoading ? "..." : stats.users}
                        </div>
                    </CardContent>
                </Card>

                {/* Games Stat Card */}
                <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-gray-400 text-sm font-medium uppercase tracking-wider group-hover:text-purple-400 transition-colors">
                            Active Games
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            {isLoading ? "..." : stats.games}
                        </div>
                    </CardContent>
                </Card>

                {/* System Status Card */}
                <Card className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-gray-400 text-sm font-medium uppercase tracking-wider group-hover:text-green-400 transition-colors">
                            System Status
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="relative flex h-4 w-4">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                            </span>
                            <div className="text-3xl font-bold text-green-400">
                                Online
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions using your Reusable Buttons! */}
            <div className="mt-16 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary" size="lg" className="shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        + Add New Game
                    </Button>
                    <Button variant="secondary" size="lg">
                        Manage Users
                    </Button>
                    <Button variant="secondary" size="lg">
                        View Reports
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
