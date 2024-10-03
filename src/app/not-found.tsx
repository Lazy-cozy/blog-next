"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const performanceEntries = performance.getEntriesByType("navigation");

        if (
            performanceEntries.length > 0 &&
            (performanceEntries[0] as PerformanceNavigationTiming).type === "reload"
        ) {
            router.push("/");
        }
    }, [router]);

    return (
        <div className="max-w-screen-md mx-auto text-center pt-20">
            <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
                404: Page Not Found
            </h1>
            <p className="mx-auto leading-relaxed text-base mb-4">
                Sorry, the page you are looking for does not exist.
            </p>
            <button
                onClick={() => router.push("/")}
                className="px-4 py-2 bg-green-600 text-white font-bold rounded"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default NotFound;
