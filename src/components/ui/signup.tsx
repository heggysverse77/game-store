import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import Input from "./input";
import { supabase } from '../../lib/supabase'

 const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const username = usernameRef.current?.value || "";
        const email = emailRef.current?.value || "";
        const password = passwordRef.current?.value || "";
        const confirmPassword = confirmPasswordRef.current?.value || "";

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!username || !email || !password) {
            setError("Please fill all fields");
            return;
        }

        // --- Password Strength Validation ---
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length <= 7 || !hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
            setError("Password must be at least 8 characters, and include an uppercase letter, a lowercase letter, a number, and a symbol (!@#$%^&*).");
            return;
        }

        setError(null);
        setIsLoading(true);

        try {
            // --- STEP 1: Register using Supabase Auth ---
            // This creates the user securely in Supabase's hidden `auth.users` table
            const { data: authData, error: signUpError } = await supabase.auth.signUp({
                email: email,
                password: password,
            });

            if (signUpError) throw signUpError;
            
            // If we succeed, Supabase gives us back the user's secure ID
            const newUserId = authData.user?.id;

            if (!newUserId) {
                throw new Error("Signup failed. No user ID returned.");
            }

            console.log("Step 1 Success! Secure Auth ID:", newUserId);

            // --- STEP 2: Save the public profile data to our new 'profile' table ---
            // We use the ID that Supabase Auth just gave us. This links them together!
            const { error: profileError } = await supabase.from('profile').insert([
                {
                    id: newUserId,     // This is the foreign key linking to auth.users.id
                    username: username,
                    role: 'user'       // Default role for new signups
                }
            ]);

            if (profileError) throw profileError;

            console.log("Step 2 Success! Profile created for:", username);
            alert("Signup successful!");
            
        } catch (err: any) {
            console.error("Signup error:", err);
            setError(err.message || "An error occurred during signup");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4 font-sans text-gray-100">
            <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl shadow-[0_0_40px_rgba(0,255,255,0.1)] p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                        Create Account
                    </h1>
                    <p className="text-gray-400 mt-2">Join the ultimate gaming experience</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="p-3 bg-red-900/50 border border-red-500 rounded text-red-200 text-sm text-center">
                            {error}
                        </div>
                    )}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="username">Username</label>
                        <Input 
                            id="username"
                            name="username"
                            type="text" 
                            variant="primary" 
                            size="md" 
                            className="w-full bg-gray-950 border-gray-800 text-white placeholder-gray-500" 
                            placeholder="Enter your username"
                            ref={usernameRef}
                            required
                        />
                    </div>

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
                            placeholder="Create a password"
                            ref={passwordRef}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300" htmlFor="confirmPassword">Confirm Password</label>
                        <Input 
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password" 
                            variant="primary" 
                            size="md" 
                            className="w-full bg-gray-950 border-gray-800 text-white placeholder-gray-500" 
                            placeholder="Confirm your password"
                            ref={confirmPasswordRef}
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
                        {isLoading ? "Signing up..." : "Sign Up Now"}
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                    Already have an account? <Link to="/login" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
