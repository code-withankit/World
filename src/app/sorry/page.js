"use client";

import { useRouter } from "next/navigation";

export default function Sorry() {
    const router = useRouter();
    return (
        <main className="relative min-h-[100svh] overflow-x-hidden px-6 py-10">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/sorry-img.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Soft Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center">

                {/* Left Side Content */}
                <div className="w-full max-w-xl text-left ml-2 md:ml-10 lg:ml-16">

                    {/* Heading */}
                    <div>
                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-pink-300">
                            From My Heart ❤️
                        </p>

                        <h1 className="text-2xl font-bold tracking-tight text-white">
                            I Am Truly Sorry.
                        </h1>
                    </div>

                    {/* Apology */}
                    <div className="mt-8">

                        <p className="text-sm leading-7 text-white/85">
                            I know I have made
                            <span className="text-pink-400"> mistakes</span>.
                            More than I should have. I know there have been moments where my
                            words, my actions, or the way I behaved may have
                            <span className="text-pink-400"> hurt you</span>,
                            disappointed you, or made you feel like you were not being understood.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-white/85">
                            I am not here to make excuses for any of it. I take
                            <span className="text-pink-400"> responsibility </span>
                            for the things I did wrong, and I am genuinely
                            <span className="text-pink-400"> sorry </span>
                            for every moment where I could have been better but was not.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-white/85">
                            I cannot change what has already happened, but I can
                            <span className="text-pink-400"> change the person I choose to become </span>
                            from this moment forward. I want to learn from my mistakes,
                            <span className="text-pink-400"> understand you better</span>,
                            communicate better, care better, and become the person you
                            <span className="text-pink-400"> deserve to have beside you</span>.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-white/85">
                            I do not want my promise to be just words. I want to prove it through my
                            <span className="text-pink-400"> actions</span>,
                            little by little, every single day. I want to
                            <span className="text-pink-400"> rectify what I can</span>,
                            fix what I have broken, and
                            <span className="text-pink-400"> never stop working on myself</span>.
                        </p>

                    </div>

                    {/* Commitment */}
                    <div className="mt-8 max-w-lg">

                        <p className="text-sm italic leading-7 text-pink-200">
                            I cannot promise that I will never make a mistake again,
                            but I can promise that I will
                            <span className="text-pink-400">
                                {" "}never stop learning, changing, and becoming better for you.
                            </span>
                        </p>

                        <p className="mt-5 text-sm font-medium text-white/90">
                            I am
                            <span className="text-pink-400"> sorry</span>. ❤️
                        </p>

                        <button
                            onClick={() => router.push("/plan")}
                            className="mt-8 rounded-full border border-pink-400/30 bg-pink-500/10 px-7 py-3 text-sm font-medium text-pink-200 backdrop-blur-md transition hover:scale-105 hover:bg-pink-500/20"
                        >
                            One Last Thing... ❤️
                        </button>

                    </div>

                </div>
            </div>
        </main>
    );
}