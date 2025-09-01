"use client";

import { useState } from "react";

const platforms = [
  {
    name: "Dhan",
    logo: "https://login.dhan.co/assets/images/dhan_icon.svg",
    bg: "bg-gray-800/30",
    hoverBg: "bg-gray-700/40",
    mainBg: "bg-[#1A2B22]",
    borderColor: "border-green-500",
    shadowColor: "shadow-green-500/50",
  },
  {
    name: "Options Trader",
    logo: "https://login.dhan.co/assets/images/OTdhan_icon.svg",
    bg: "bg-gray-800/30",
    hoverBg: "bg-gray-700/40",
    mainBg: "bg-[#241E2C]",
    borderColor: "border-purple-500",
    shadowColor: "shadow-purple-500/50",
  },
  {
    name: "TradingView",
    logo: "https://login.dhan.co/assets/images/TvWhiteIcon.svg",
    bg: "bg-gray-800/30",
    hoverBg: "bg-gray-700/40",
    mainBg: "bg-[#1C2730]",
    borderColor: "border-blue-500",
    shadowColor: "shadow-blue-500/50",
  },
  {
    name: "ScanX",
    logo: "https://login.dhan.co/assets/images/scanxDhan.svg",
    bg: "bg-gray-800/30",
    hoverBg: "bg-gray-700/40",
    mainBg: "bg-[#1C2A2E]",
    borderColor: "border-cyan-500",
    shadowColor: "shadow-cyan-500/50",
  },
];

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);

  const getBackgroundClass = () => {
    if (!hovered) return "bg-[#0b0b0b]";
    const platform = platforms.find((p) => p.name === hovered);
    return platform ? platform.mainBg : "bg-[#0b0b0b]";
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-white transition-colors duration-500 ${getBackgroundClass()}`}
      style={{
        backgroundImage: "url(https://login.dhan.co/UniverseChartBg.fcef6017ecf648c1.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <main className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-2xl text-gray-400">
          Select your trading platform to start
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col items-center gap-4 group"
              onMouseEnter={() => setHovered(platform.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-xl transition-all duration-300 border-2 bg-clip-padding border-gray-600
                  ${
                    hovered === platform.name
                      ? `${platform.borderColor} ${platform.shadowColor} scale-110`
                      : "scale-100"
                  } 
                  ${
                    hovered && hovered !== platform.name
                      ? "opacity-50"
                      : "opacity-100"
                  }
                  ${hovered === platform.name ? platform.hoverBg : platform.bg}`}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="text-gray-300">{platform.name}</span>
            </div>
          ))}
        </div>
      </main>
      <footer className="absolute bottom-8 right-8">
        <img src="https://login.dhan.co/assets/images/UniverseMadeForTrade.svg" alt="Made for Trade" />
      </footer>
    </div>
  );
}

