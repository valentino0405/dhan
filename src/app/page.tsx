"use client";

import { useState } from "react";

const platforms = [
  {
    name: "Dhan",
    logo: "https://login.dhan.co/assets/images/dhan_icon.svg",
    bg: "bg-gray-800/93",
    hoverBg: "bg-gray-700/93",
    mainBgHex: "#1A2B22",
    borderColor: "border-green-300",
    shadowColorHex: "#22c55e",
    link: "#",
  },
  {
    name: "Options Trader",
    logo: "https://login.dhan.co/assets/images/OTdhan_icon.svg",
    bg: "bg-gray-800/93",
    hoverBg: "bg-gray-700/93",
    mainBgHex: "#241E2C",
    borderColor: "border-purple-300",
    shadowColorHex: "#a855f7",
    link: "#",
  },
  {
    name: "TradingView",
    logo: "https://login.dhan.co/assets/images/TvWhiteIcon.svg",
    bg: "bg-gray-800/93",
    hoverBg: "bg-gray-700/93",
    mainBgHex: "#1C2730",
    borderColor: "border-blue-300",
    shadowColorHex: "#3b82f6",
    link: "#",
  },
  {
    name: "ScanX",
    logo: "https://login.dhan.co/assets/images/scanxDhan.svg",
    bg: "bg-gray-800/93",
    hoverBg: "bg-gray-700/93",
    mainBgHex: "#1C2A2E",
    borderColor: "border-cyan-300",
    shadowColorHex: "#06b6d4",
    link: "#",
  },
];

// Helper function to convert hex color to rgba
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};


export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);

  const getBackgroundStyle = () => {
    let color = '#0b0b0b';
    if (hovered) {
        const platform = platforms.find((p) => p.name === hovered);
        if (platform) {
            color = platform.mainBgHex;
        }
    }
    return { backgroundColor: hexToRgba(color, 0.85) };
  };

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url(https://login.dhan.co/UniverseChartBg.fcef6017ecf648c1.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay for the background */}
      <div 
        className="absolute inset-0 transition-colors duration-500" 
        style={getBackgroundStyle()}
      />
      
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <main className="flex flex-col items-center gap-8 p-8">
          <h1 className="text-2xl text-gray-400">
            Select your trading platform to start
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {platforms.map((platform) => (
              <a
                href={platform.link}
                key={platform.name}
                className="flex flex-col items-center gap-4 group"
                onMouseEnter={() => setHovered(platform.name)}
                onMouseLeave={() => setHovered(null)}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className={`relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-xl transition-all duration-300 border-2 bg-clip-padding ${platform.borderColor}
                    ${
                      hovered === platform.name
                        ? `scale-110`
                        : "scale-100"
                    } 
                    ${
                      hovered && hovered !== platform.name
                        ? "opacity-50"
                        : "opacity-100"
                    }
                    ${hovered === platform.name ? platform.hoverBg : platform.bg}`}
                    style={
                      hovered === platform.name
                        ? { boxShadow: `0 0 25px ${hexToRgba(platform.shadowColorHex, 0.5)}` }
                        : {}
                    }
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
              </a>
            ))}
          </div>
        </main>
        <footer className="absolute bottom-8 right-8">
          <img src="https://login.dhan.co/assets/images/UniverseMadeForTrade.svg" alt="Made for Trade" />
        </footer>
      </div>
    </div>
  );
}

