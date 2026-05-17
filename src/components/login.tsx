import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/button";
import Input from "./ui/input";
import { supabase } from '../lib/supabase';

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const email = emailRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        if (!email || !password) {
            setError("Please fill all fields");
            return;
        }

        setError(null);
        setIsLoading(true);

        try {
            // Log in using Supabase Auth
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (signInError) throw signInError;

            console.log("User logged in successfully!", data);
            alert("Login successful!");
            
            // Redirect to home page after successful login
            navigate("/home"); 
            
        } catch (err: any) {
            console.error("Login error:", err);
            setError(err.message || "Invalid email or password");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4 font-sans text-gray-100">
            <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl shadow-[0_0_40px_rgba(0,255,255,0.1)] p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400 mt-2">Log in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="p-3 bg-red-900/50 border border-red-500 rounded text-red-200 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                        <Input 
                            id="email"
                            name="email"
                            type="email" 
                            variant="primary" 
                            size="md" 
                            className="w-full bg-gray-950 border-gray-800 text-white placeholder-gray-500" 
                            placeholder="name@example.com"
                            ref={emailRef}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="password">Password</label>
                        <Input 
                            id="password"
                            name="password"
                            type="password" 
                            variant="primary" 
                            size="md" 
                            className="w-full bg-gray-950 border-gray-800 text-white placeholder-gray-500" 
                            placeholder="Enter your password"
                            ref={passwordRef}
                            required
                        />
                    </div>

                    <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg" 
                        className="w-full mt-8 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)]"
                        disabled={isLoading}
                        isLoading={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Log In"}
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                    Don't have an account? <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
