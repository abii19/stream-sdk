// Actual component
export const ProgressRing = ({
  caps = "round",
  children,
  lineWidth = 30,
  percent = 0,
  progressColor = "#DBFBEC",
  size = 200,
  spin = false,
  trackColor = "#FAFAFA",
  transitionDuration = 3000,
  animation = "clockwise",
}) => {
  const halfSize = size / 2;
  const radius = halfSize - lineWidth / 2;
  const circleLength = radius * 2 * Math.PI;

  return (
    <div
      className={`flex place-content-center place-items-center relative mx-auto`}
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        height={size}
        width={size}
        className="absolute"
        style={{
          animation: spin ? "animation-rotate 9s linear infinite" : "",
        }}
        shapeRendering="geometricPrecision"
      >
        <g
          style={{
            transformOrigin: `${halfSize}px ${halfSize}px`,
            transform: "scaleX(-1) rotate(-90deg)",
          }}
        >
          <circle
            cx={halfSize}
            cy={halfSize}
            r={radius}
            stroke={trackColor}
            strokeWidth={lineWidth}
            fill="none"
          />
          <circle
            cx={halfSize}
            cy={halfSize}
            r={radius}
            style={{
              transition:
                transitionDuration > 0
                  ? `${transitionDuration}ms stroke-dashoffset`
                  : "",
              strokeDashoffset:
                animation === "clockwise"
                  ? circleLength * (1 + percent / 100)
                  : animation === "anti-clockwise"
                  ? circleLength * (1 - percent / 100)
                  : circleLength * (1 + percent / 100),
            }}
            fill="none"
            strokeDasharray={circleLength}
            strokeWidth={lineWidth}
            stroke={progressColor}
            strokeLinecap={caps}
          />
        </g>
      </svg>
      {children ? <div style={{ zIndex: 1 }}>{children}</div> : null}
    </div>
  );
};
