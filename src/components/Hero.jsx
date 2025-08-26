import DotGrid from "./DotGrid";

export default function Hero() {
  return (
    <section >
      <div className="relative flex items-center justify-center">
        <DotGrid />
        <div className="absolute flex flex-col items-center justify-center">
          <h2 className="md:text-3xl sm: text-xl dark:text-white mb-2">
            {"<MinooshVejdani />"}
          </h2>
          <p className="text-base leading-8 md:text-lg text-gray-800 dark:text-gray-200 
               max-w-lg sm:max-w-xl  mx-auto text-center">
            Front-End Developer | Web Designer | <span>UI/UX Designer</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span className="inline-block animate-bounceTwice text-2xl text-gray-600 dark:text-gray-300">
          ↓
        </span>
      </div>
    </section>
  );
}
