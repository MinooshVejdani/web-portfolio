import heroImg from "../assets/img_hero.jpg";

export default function SeedHero() {
  return (
    <header className="relative bg-green-50 py-12 text-center">
      <img
        src={heroImg}
        alt="Several plants in pots"
        className="mx-auto mb-6 h-64 w-full object-cover rounded-lg shadow"
      />
      <h1 className="text-3xl font-bold text-green-800">
        SEED, Connects Plant Enthusiasts
      </h1>
      <p className="text-lg text-gray-700 mt-2">A plant sharing app</p>
    </header>
  );
}
