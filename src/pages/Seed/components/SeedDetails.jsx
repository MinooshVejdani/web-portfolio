
export default function SeedDetails() {
  return (
    <section className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Project Type:</p>
          <p>Personal project</p>
        </div>
        <div>
          <p className="font-semibold">Sector:</p>
          <p>Lifestyle/community building app</p>
        </div>
        <div>
          <p className="font-semibold">My Role:</p>
          <p>Entire product design from research to testing</p>
        </div>
        <div>
          <p className="font-semibold">Project Time:</p>
          <p>3 weeks (May 6th - May 30th)</p>
        </div>
      </div>

      <p className="leading-7 text-gray-700">
        <strong>Seed</strong> is a mobile application that connects plant
        enthusiasts, offering numerous benefits. It fosters a vibrant community
        by enabling users to share information and insights. For those with
        limited space but a passion for propagating plants, Seed provides a
        platform to share plants with interested people. The app's user-friendly
        interface, with profile browsing and filtering options, makes connecting
        with like-minded individuals easy. Users can send trade requests,
        arrange pickups or shipping, and exchange plants seamlessly. Seed
        promotes plant diversity, supports sustainable practices, and
        strengthens the bond among plant lovers.
      </p>
    </section>
  );
}
