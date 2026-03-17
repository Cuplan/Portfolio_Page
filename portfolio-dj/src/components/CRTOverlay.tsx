export default function CRTOverlay() {
  return (
    <>
      {/* Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-[200]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.07) 1px, rgba(0,0,0,0.07) 2px)",
          animation: "crt-flicker 6s infinite",
        }}
      />
      {/* Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[200]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </>
  );
}
