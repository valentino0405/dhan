'use client';

import { useState } from 'react';

export default function Home() {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);

  const platforms = [
    {
      id: 'dhan',
      name: 'Dhan',
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
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: platforms[hoveredPlatform]?.id === 'dhan' 
              ? 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 30%, transparent 70%)'
              : platforms[hoveredPlatform]?.id === 'options-trader'
              ? 'radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 30%, transparent 70%)'
              : platforms[hoveredPlatform]?.id === 'trading-view'
              ? 'radial-gradient(circle at center, rgba(100, 116, 139, 0.1) 0%, rgba(100, 116, 139, 0.05) 30%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 30%, transparent 70%)'
          }}
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
                className="flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-out"
                onMouseEnter={() => setHoveredPlatform(index)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                {/* Platform image container */}
                <div 
                  className={`
                    w-32 h-32 md:w-36 md:h-36 rounded-2xl flex items-center justify-center
                    transition-all duration-500 ease-out relative
                    ${hoveredPlatform === index 
                      ? `scale-105` 
                      : 'scale-100'
                    }
                  `}
                  style={{
                    background: hoveredPlatform === index 
                      ? platform.id === 'dhan' 
                        ? 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                        : platform.id === 'options-trader'
                        ? 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)'
                        : platform.id === 'trading-view'
                        ? 'linear-gradient(135deg, #475569 0%, #334155 100%)'
                        : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                      : platform.id === 'dhan' 
                        ? 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(4, 120, 87, 0.25) 100%)'
                        : platform.id === 'options-trader'
                        ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(109, 40, 217, 0.25) 100%)'
                        : platform.id === 'trading-view'
                        ? 'linear-gradient(135deg, rgba(71, 85, 105, 0.15) 0%, rgba(51, 65, 85, 0.25) 100%)'
                        : 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(29, 78, 216, 0.25) 100%)',
                    border: hoveredPlatform === index 
                      ? platform.id === 'dhan' 
                        ? '2px solid #10b981'
                        : platform.id === 'options-trader'
                        ? '2px solid #a855f7'
                        : platform.id === 'trading-view'
                        ? '2px solid #64748b'
                        : '2px solid #3b82f6'
                      : platform.id === 'dhan' 
                        ? '2px solid rgba(16, 185, 129, 0.3)'
                        : platform.id === 'options-trader'
                        ? '2px solid rgba(168, 85, 247, 0.3)'
                        : platform.id === 'trading-view'
                        ? '2px solid rgba(100, 116, 139, 0.3)'
                        : '2px solid rgba(59, 130, 246, 0.3)',
                    boxShadow: hoveredPlatform === index 
                      ? platform.id === 'dhan' 
                        ? '0 0 30px rgba(16, 185, 129, 0.5), 0 0 60px rgba(16, 185, 129, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                        : platform.id === 'options-trader'
                        ? '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(168, 85, 247, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                        : platform.id === 'trading-view'
                        ? '0 0 30px rgba(100, 116, 139, 0.5), 0 0 60px rgba(100, 116, 139, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                        : '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                      : platform.id === 'dhan' 
                        ? '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(16, 185, 129, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                        : platform.id === 'options-trader'
                        ? '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(168, 85, 247, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                        : platform.id === 'trading-view'
                        ? '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(100, 116, 139, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                        : '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(59, 130, 246, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className={`
                      w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-500
                      ${hoveredPlatform === index 
                        ? 'scale-110 brightness-110 filter drop-shadow-lg' 
                        : 'opacity-90 brightness-100'
                      }
                    `}
                    onError={(e) => {
                      console.log(`Error loading image: ${platform.image}`);
                      console.log('Image element:', e.target);
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded image: ${platform.image}`);
                    }}
                  />
                </div>

                {/* Platform name */}
                <span 
                  className={`
                    mt-4 text-white font-medium transition-all duration-500 text-center text-lg
                    ${hoveredPlatform === index 
                      ? 'text-white scale-105 opacity-100 font-semibold brightness-110' 
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
        <span 
          className="absolute bottom-8 right-8 text-sm font-light tracking-wider"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
            textStroke: '1px rgba(255, 255, 255, 0.4)',
            fontWeight: '300'
          }}
        >
          #MadeForTrade
        </span>
      </div>
    </div>
  );
}
