'use client';

import { useState } from 'react';

export default function Home() {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);

  const platforms = [
    {
      id: 'diamond-rock',
      name: 'Diamond Rock',
      image: '/dr.png',
      bgColor: 'from-emerald-500 to-emerald-700',
      glowColor: 'from-emerald-400 via-emerald-500 to-emerald-600'
    },
    {
      id: 'options-trader', 
      name: 'Options Trader',
      image: '/dr.png', // Using dr.png for now since candle.png should be background
      bgColor: 'from-purple-500 to-purple-700',
      glowColor: 'from-purple-400 via-purple-500 to-purple-600'
    },
    {
      id: 'trading-view',
      name: 'TradingView',
      image: '/tv.png',
      bgColor: 'from-slate-600 to-slate-800',
      glowColor: 'from-slate-400 via-slate-500 to-slate-600'
    },
    {
      id: 'scanx',
      name: 'ScanX',
      image: '/x.png',
      bgColor: 'from-blue-500 to-blue-700',
      glowColor: 'from-blue-400 via-blue-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background with candlestick chart */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(257deg, rgba(0, 0, 0, 0.9), rgba(18, 17, 17, 0.9), rgba(0, 0, 0, 0.9)),
            url(/candle.png)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Full page glow effect when hovering */}
      {hoveredPlatform !== null && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${platforms[hoveredPlatform]?.glowColor} opacity-20 transition-all duration-700 ease-out`}
        />
      )}

      {/* Main container */}
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center">
        
        {/* Platform main container */}
        <div className="flex flex-col items-center">
          
          {/* Title */}
          <div className="flex justify-center mb-16">
            <h1 className="text-white text-3xl md:text-4xl font-light text-center tracking-wide opacity-90">
              Select your trading platform to start
            </h1>
          </div>

          {/* Platform container */}
          <div className="flex justify-center items-center gap-8 md:gap-12">
            {platforms.map((platform, index) => (
              <div
                key={platform.id}
                className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredPlatform(index)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                {/* Platform image container */}
                <div 
                  className={`
                    w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center
                    transition-all duration-300 ease-out border
                    ${hoveredPlatform === index 
                      ? `bg-gradient-to-br ${platform.bgColor} shadow-2xl scale-110 border-white/30 shadow-${platform.glowColor.split('-')[1]}-500/50` 
                      : 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20'
                    }
                  `}
                >
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className={`
                      w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-300
                      ${hoveredPlatform === index 
                        ? 'filter brightness-0 invert scale-110' 
                        : 'filter brightness-0 invert opacity-70'
                      }
                    `}
                    onError={(e) => {
                      console.log(`Error loading image: ${platform.image}`);
                      // Don't hide the image, just log the error
                    }}
                  />
                </div>

                {/* Platform name */}
                <span 
                  className={`
                    mt-5 text-white font-medium transition-all duration-300 text-center
                    ${hoveredPlatform === index 
                      ? 'text-white scale-105 opacity-100 font-semibold' 
                      : 'opacity-80'
                    }
                  `}
                >
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Made for Trade watermark */}
        <span className="absolute bottom-8 right-8 text-white/30 text-sm font-light tracking-wider">
          #MadeForTrade
        </span>
      </div>
    </div>
  );
}
