export default function ChallengeCard({ title, description, imageUrl }) {
  return (
    <section>
          <div className=" flex flex-col w-56 p-4 bg-white rounded-xl shadow-md">
            <img
              src={imageUrl}
              alt={title}
              className="w-48 rounded-lg"
            />
            <p className="font-semibold mt-2">{title}</p>
            <p className="text-gray-700 text-sm mt-1">{description}</p>
          </div>
    </section>
  );
}
