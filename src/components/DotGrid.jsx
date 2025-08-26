export default function DotGrid({ spacing = 32, dotSize = 1.5, width = 1210, height = 650 }) {
  return (
      <div
        style={{
          width: "100%",
          height: `${height}px`,
          backgroundImage: `radial-gradient(lightgray ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${spacing}px ${spacing}px`,
        }}
      ></div>
  );
}
