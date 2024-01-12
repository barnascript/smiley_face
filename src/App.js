import * as d3 from "d3";

function App() {
  const width = 960;
  const height = 500;
  const strokeWidth = 10;
  const centerX = width / 2;
  const centerY = height / 2;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 50;

  const mouthArc = d3
    .arc()
    .innerRadius(90)
    .outerRadius(100)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <circle
            fill="yellow"
            r={centerY - strokeWidth / 2}
            stroke="black"
            strokeWidth={strokeWidth}
          ></circle>
          <circle
            r={eyeRadius}
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            stroke="black"
            strokeWidth={strokeWidth}
          />
          <circle
            r={eyeRadius}
            cx={+eyeOffsetX}
            cy={-eyeOffsetY}
            stroke="black"
            strokeWidth={strokeWidth}
          />
          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}

export default App;
