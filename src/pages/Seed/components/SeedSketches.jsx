import sketch from "../assets/sketch.png";

export default function SeedSketches() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Sketches and Low Fidelity</h2>

      <div className="space-y-6">
        <img
          src={sketch}
          alt="App sketches"
          className="rounded-lg shadow-md"
        />

        {/* Slider mockup */}
        <div className="relative flex items-center">
          <button className="absolute left-0 text-3xl">&#10094;</button>
          <div className="overflow-hidden w-full">
            <div className="flex gap-4">
              <img
                src="/images/seed-low-fidelity/0-SIGN IN.png"
                alt="Slide 1"
                className="w-48 rounded-lg shadow-md"
              />
              <img
                src="/images/seed-low-fidelity/1-SIGN UP-1.png"
                alt="Slide 2"
                className="w-48 rounded-lg shadow-md"
              />
            </div>
          </div>
          <button className="absolute right-0 text-3xl">&#10095;</button>
        </div>
      </div>
    </section>
  );
}
