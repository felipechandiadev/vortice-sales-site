export function PresentationBackground() {
  return (
    <>
      <div className="territoryBg" aria-hidden="true" />
      <svg
        className="dataCanvas"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dataLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00D1FF" stopOpacity="0" />
            <stop offset="0.45" stopColor="#00D1FF" stopOpacity=".75" />
            <stop offset="1" stopColor="#7B2CF5" stopOpacity="0" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#softGlow)" opacity=".55">
          <path
            className="netLine l1"
            d="M80,310 C210,250 310,250 430,340 S650,510 790,390 S990,210 1120,300"
          />
          <path
            className="netLine l2"
            d="M160,610 C300,500 430,640 560,520 S780,300 1030,520"
          />
          <path
            className="netLine l3"
            d="M260,150 C390,260 500,180 640,260 S850,400 1040,210"
          />
          <path
            className="netLine l4"
            d="M110,430 C320,420 390,360 510,430 S760,650 1060,590"
          />
        </g>

        <g>
          <circle className="pulseDot d1" r="4" />
          <circle className="pulseDot d2" r="4" />
          <circle className="pulseDot d3" r="4" />
          <circle className="pulseDot d4" r="4" />
        </g>
      </svg>
      <div className="holoScan" aria-hidden="true" />
    </>
  );
}
