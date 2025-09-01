"use client";
import Image from 'next/image';
import styles from './platforms.module.css';

const platforms = [
  {
    name: 'Dhan',
    icon: '/icons/dhan_icon.svg',
    color: 'rgba(31, 164, 99, 0.18)',
    hoverColor: 'rgba(31, 164, 99, 0.12)',
  },
  {
    name: 'Options',
    icon: '/icons/OTdhan_icon.svg',
    color: 'rgba(124, 58, 237, 0.18)',
    hoverColor: 'rgba(124, 58, 237, 0.12)',
  },
  {
    name: 'TradingView',
    icon: '/icons/TvWhiteIcon.svg',
    color: 'rgba(10, 25, 80, 0.18)', // dark blue
    hoverColor: 'rgba(10, 25, 80, 0.12)', // dark blue hover
  },
  {
    name: 'ScanX',
    icon: '/icons/scanxDhan.svg',
    color: 'rgba(33, 150, 243, 0.18)',
    hoverColor: 'rgba(33, 150, 243, 0.12)',
  },
];

import { useState } from 'react';

export default function PlatformsPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  // Find color for illuminated background
  const illuminatedColor = platforms.find(p => p.name === hovered)?.color || '';

  return (
    <div
      className={styles.bg}
      style={hovered ? { '--illuminate': illuminatedColor } as React.CSSProperties : {}}
    >
      <div className={styles.centered}>
        <h1 className={styles.title}>Select your trading platform to start</h1>
        <div className={styles.grid}>
          {platforms.map((p) => {
            const isHovered = hovered === p.name;
            return (
              <div key={p.name} className={styles.cardColumn}>
                <div
                  className={styles.card}
                  style={{ '--card-color': isHovered ? p.hoverColor : p.color } as React.CSSProperties}
                  onMouseEnter={() => setHovered(p.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={styles.iconWrapper}>
                    <Image src={p.icon} alt={p.name} width={76} height={76} />
                  </div>
                </div>
                <span className={styles.label}>{p.name}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.madeForTrade}>#MadeForTrade</div>
      </div>
    </div>
  );
}
