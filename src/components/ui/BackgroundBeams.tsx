"use client";

export default function BackgroundBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(74,124,89,0)" />
            <stop offset="50%" stopColor="rgba(74,124,89,0.4)" />
            <stop offset="100%" stopColor="rgba(74,124,89,0)" />
          </linearGradient>
          <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(134,239,172,0)" />
            <stop offset="50%" stopColor="rgba(134,239,172,0.25)" />
            <stop offset="100%" stopColor="rgba(134,239,172,0)" />
          </linearGradient>
          <linearGradient id="beam3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(74,124,89,0)" />
            <stop offset="50%" stopColor="rgba(74,124,89,0.2)" />
            <stop offset="100%" stopColor="rgba(74,124,89,0)" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Animated beams */}
        <line
          x1="-200" y1="200" x2="1640" y2="700"
          stroke="url(#beam1)" strokeWidth="1.5"
          className="animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <line
          x1="-200" y1="400" x2="1640" y2="100"
          stroke="url(#beam2)" strokeWidth="1"
          className="animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
        <line
          x1="400" y1="-100" x2="1040" y2="1000"
          stroke="url(#beam1)" strokeWidth="1"
          className="animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
        <line
          x1="800" y1="-100" x2="640" y2="1000"
          stroke="url(#beam3)" strokeWidth="0.8"
          className="animate-pulse"
          style={{ animationDuration: "7s", animationDelay: "0.5s" }}
        />
        <line
          x1="-200" y1="600" x2="1640" y2="300"
          stroke="url(#beam2)" strokeWidth="1.2"
          className="animate-pulse"
          style={{ animationDuration: "5.5s", animationDelay: "3s" }}
        />

        {/* Radial glow at center */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(74,124,89,0.15)" />
          <stop offset="100%" stopColor="rgba(74,124,89,0)" />
        </radialGradient>
        <rect width="1440" height="900" fill="url(#centerGlow)" />
      </svg>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial fade to black at edges */}
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, #0a0d0a 80%)"
        }}
      />
    </div>
  );
}
