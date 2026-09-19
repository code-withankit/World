"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    return (
        <main className="relative min-h-screen overflow-hidden px-6 py-10">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/home-img.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Soft Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center text-center">

                {/* Top */}
                <div className="pt-4">
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-pink-300">
                        A little something about you ❤️
                    </p>

                    <h1 className="text-2xl font-bold tracking-tight text-white">
                        You are truly something special.
                    </h1>
                </div>

                {/* Middle Space */}
                <div className="flex-1" />

                {/* Bottom Content */}
                <div className="w-full max-w-2xl">

                    <p className="text-sm leading-7 text-white/85">
                        There are so many <span className="text-pink-400">beautiful</span> things about you that I
                        sometimes do not even know where to begin. You are 
                        <span className="text-pink-400"> loving</span> in a way that makes people around you feel
                        <span className="text-pink-400"> safe, caring</span> in the little moments that most people
                        would never notice, and <span className="text-pink-400"> thoughtful</span> in ways that make
                        even the smallest things feel incredibly special.
                        You are <span className="text-pink-400"> intelligent, curious, energetic, and full of
                        life.</span> Your beautiful heart, your kindness, your
                        strength, your little habits, your smile, and the way
                        you care about the people you love are just a few of
                        the countless reasons why you are so precious to me.
                        And yes, you are <span className="text-pink-400"> absolutely beautiful</span> — but what makes
                        you even more beautiful is the person you are on the
                        inside.
                    </p>

                    <p className="mt-8 text-sm italic text-pink-200/90">
                        You do not have to be perfect to be extraordinary.
                        You just have to be you. ❤️
                    </p>

                    <button
                        onClick={() => router.push("/sorry")}
                        className="mt-8 rounded-full border border-pink-400/30 bg-pink-500/10 px-7 py-3 text-sm font-medium text-pink-200 backdrop-blur-md transition hover:scale-105 hover:bg-pink-500/20"
                    >
                        One More Thing... ❤️
                    </button>

                </div>

            </div>
        </main>
    );
}