
export default function SeedInterviews() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Interviews</h2>
      <p className="text-gray-700 leading-7 mb-6">
        Before starting the design, I conducted interviews with individuals of
        various ages, lifestyles, and economic backgrounds to better understand
        the issues plant lovers face.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-green-50 rounded-lg">
          <p>Interviewed</p>
          <strong className="text-2xl">5</strong>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p>Insights</p>
          <strong className="text-2xl">11+</strong>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p>Main Themes</p>
          <strong className="text-2xl">5</strong>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p>Data Points</p>
          <strong className="text-2xl">Multiple</strong>
        </div>
      </div>
    </section>
  );
}
