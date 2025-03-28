// "use client"

// import { useEffect } from 'react';

// const GlowCard = ({ children , identifier}) => {
//   useEffect(() => {
//     const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
//     const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

//     const CONFIG = {
//       proximity: 40,
//       spread: 80,
//       blur: 12,
//       gap: 32,
//       vertical: false,
//       opacity: 0,
//     };

//     const UPDATE = (event) => {
//       for (const CARD of CARDS) {
//         const CARD_BOUNDS = CARD.getBoundingClientRect();

//         if (
//           event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
//           event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
//           event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
//           event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
//         ) {
//           CARD.style.setProperty('--active', 1);
//         } else {
//           CARD.style.setProperty('--active', CONFIG.opacity);
//         }

//         const CARD_CENTER = [
//           CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
//           CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
//         ];

//         let ANGLE =
//           (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
//             180) /
//           Math.PI;

//         ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

//         CARD.style.setProperty('--start', ANGLE + 90);
//       }
//     };

//     document.body.addEventListener('pointermove', UPDATE);

//     const RESTYLE = () => {
//       CONTAINER.style.setProperty('--gap', CONFIG.gap);
//       CONTAINER.style.setProperty('--blur', CONFIG.blur);
//       CONTAINER.style.setProperty('--spread', CONFIG.spread);
//       CONTAINER.style.setProperty(
//         '--direction',
//         CONFIG.vertical ? 'column' : 'row'
//       );
//     };

//     RESTYLE();
//     UPDATE();

//     // Cleanup event listener
//     return () => {
//       document.body.removeEventListener('pointermove', UPDATE);
//     };
//   }, [identifier]);

//   return (
//     <div className={`glow-container-${identifier} glow-container`}>
//       <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
//         <div className="glows"></div>
//         {children}
//       </article>
//     </div>
//   );
// };

// export default GlowCard;
'use client';

import { useEffect, useRef } from "react";

export default function GlowCard({ children, className }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".glow-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glow-card group relative cursor-pointer overflow-hidden rounded-xl border border-white/[0.1] bg-white/[0.05] p-4 shadow-lg backdrop-blur transition-all duration-200 ease-in-out hover:scale-[1.02] hover:border-white/30 ${className}`}
    >
      {children}
    </div>
  );
}
