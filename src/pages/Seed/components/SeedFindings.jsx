
export default function SeedFindings() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">
        What did I find?
        <p className="text-lg font-semibold text-gray-700">
          The biggest problems based on my interviews
        </p>
      </h2>

      <div className="space-y-6">
        <div>
          <p className="font-semibold">Affordability</p>
          <p className="text-gray-700 leading-7">
            Affordability is an issue for plant enthusiasts, as the cost of
            purchasing new plants, especially rare ones, can be prohibitive.
            Propagation and swaps help, but a trading app provides a
            cost-effective solution.
          </p>
        </div>

        <div>
          <p className="font-semibold">Connection with Community</p>
          <p className="text-gray-700 leading-7">
            Connecting with other plant lovers provides encouragement,
            inspiration, and practical assistance. A trading app makes it easier
            to foster connections and diversify plant collections.
          </p>
        </div>
      </div>
    </section>
  );
}
