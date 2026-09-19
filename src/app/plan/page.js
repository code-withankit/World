"use client";

export default function Plan() {
    const plans = [
        {
            number: "01",
            title: "Vehicle + Career Growth",
            target: "By November",
            description:
                "Work towards buying a bike while continuing to grow professionally and pushing for a better salary hike.",
        },
        {
            number: "02",
            title: "Our Own House",
            target: "Within 3 Years",
            description:
                "Build enough financial stability to move into a comfortable place of our own without putting unnecessary pressure on our finances.",
        },
        {
            number: "04",
            title: "Travel Together",
            target: "Every Year",
            description:
                "Save intentionally for two beautiful national trips and one international trip every year.",
        },
        {
            number: "05",
            title: "Everything You Want",
            target: "Any time you want",
            description:
                "Work towards being able to buy the things you want without having to constantly worry about whether we can afford them.",
        },
    ];

    return (
        <main className="relative min-h-screen overflow-hidden px-6 py-10">

            {/* Background Image */}
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/planning-img.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="fixed inset-0 bg-black/65" />

            {/* Left Side Gradient */}
            <div className="fixed inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center">

                {/* Left Side Roadmap */}
                <div className="w-full max-w-2xl ml-2 md:ml-10 lg:ml-16">

                    {/* Header */}
                    <div className="text-left">

                        <p className="text-sm font-medium uppercase tracking-[0.3em] text-pink-300">
                            Our Little Roadmap ❤️
                        </p>

                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                            Not Just Promises.
                            <br />
                            <span className="text-pink-400">
                                A Plan.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
                            I do not want to tell you that everything will
                            magically become perfect. I want to work for it,
                            plan for it, and build it one step at a time.
                        </p>

                    </div>

                    {/* Roadmap */}
                    <div className="mt-10 space-y-4">

                        {plans.map((plan) => (
                            <div
                                key={plan.number}
                                className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md transition hover:bg-black/40"
                            >
                                <div className="flex items-start gap-4">

                                    {/* Number */}
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-pink-400/30 bg-pink-500/10 text-xs font-semibold text-pink-300">
                                        {plan.number}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1">

                                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">

                                            <h2 className="text-base font-semibold text-white">
                                                {plan.title}
                                            </h2>

                                            <span className="text-xs text-pink-300">
                                                {plan.target}
                                            </span>

                                        </div>

                                        <p className="mt-2 text-sm leading-6 text-white/65">
                                            {plan.description}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Final Message */}
                    <div className="mt-10 pb-8 text-left">

                        <p className="text-base leading-8 text-white/80">
                            The goal is not to have everything tomorrow.
                            <br />
                            The goal is to make sure that
                            <span className="text-pink-400">
                                {" "}every year we are better than the year before.
                            </span>
                        </p>

                        <p className="mt-5 text-sm italic leading-7 text-pink-200">
                            More stability.
                            <br />
                            More experiences.
                            <br />
                            More happiness.
                            <br />
                            More of the life we dream about.
                        </p>

                        <p className="mt-6 text-sm font-medium text-white">
                            And I will work for it. ❤️
                        </p>

                    </div>

                </div>
            </div>
        </main>
    );
}