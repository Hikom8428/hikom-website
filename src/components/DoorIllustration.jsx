// Lightweight static stand-in for ThreeScene on mobile - a flat SVG echoing the
// same door design (frame, vision window, kickplate, LED accent, handle) at a
// fraction of the cost, so mobile never has to load the three.js bundle.
// Plain CSS animation instead of Framer Motion - this renders on every mobile
// page load, so it shouldn't need any per-frame JS for a purely decorative bob.
const DoorIllustration = () => (
  <div className="animate-float-bob w-full h-full flex items-center justify-center">
    <svg
      viewBox="0 0 200 320"
      className="h-full max-h-full w-auto drop-shadow-2xl"
      role="img"
      aria-label="Modular OT door"
    >
      {/* Outer Frame */}
      <rect x="10" y="10" width="180" height="300" rx="6" fill="#2d3748" />
      {/* Main Panel */}
      <rect x="22" y="20" width="156" height="280" rx="4" fill="#f8fafc" />
      {/* Kickplate */}
      <rect x="22" y="230" width="156" height="50" fill="#e2e8f0" />
      {/* Window Bezel */}
      <rect x="58" y="55" width="84" height="84" rx="4" fill="#2d3748" />
      {/* Vision Window Glass */}
      <rect x="66" y="63" width="68" height="68" rx="2" fill="#0F2942" opacity="0.9" />
      {/* LED Accent Strip */}
      <rect x="26" y="40" width="6" height="220" rx="3" fill="#00B4D8" />
      {/* Handle */}
      <rect x="156" y="130" width="6" height="60" rx="3" fill="#ffffff" />
    </svg>
  </div>
);

export default DoorIllustration;
