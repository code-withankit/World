"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.trim().toLowerCase() === "khadoos") {
            router.push("/home");
        } else {
            setError("Hmm... that's not the password 😏");
        }
    };

    return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">

        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/hero-img.jpg')",
            }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Page Content */}
        <div className="relative z-10 w-full max-w-md text-center">
            <div className="mb-8">
                <p className="text-sm text-pink-400 mb-3">
                    A tiny secret awaits you...
                </p>

                <h1 className="text-4xl font-bold text-white">
                    Hey You ❤️
                </h1>

                <p className="mt-3 text-gray-300">
                    Before entering, you need to prove that
                    you are the person this website was made for.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                    placeholder="Enter the secret password..."
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-center text-white outline-none placeholder:text-gray-400 backdrop-blur-sm focus:border-pink-500"
                />

                <button
                    type="submit"
                    className="w-full rounded-xl bg-pink-600 px-5 py-4 font-semibold text-white transition hover:bg-pink-500"
                >
                    Enter My Little World ❤️
                </button>
            </form>

            {error && (
                <p className="mt-4 text-sm text-red-400">
                    {error}
                </p>
            )}

            <p className="mt-8 text-xs text-gray-400">
                Hint: You already know what you call me. 👀
            </p>
        </div>
    </main>
);
}