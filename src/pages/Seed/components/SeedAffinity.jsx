import imgAffinity1 from "../assets/img_affinity_1.jpg";
import imgAffinity2 from "../assets/img_affinity_2.jpg"; 
import imgAffinity3 from "../assets/img_affinity_3.jpg";

export default function SeedAffinity() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Affinity Mapping</h2>
      <div className="space-y-6">
        <p className="font-semibold">People’s Challenges</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src={imgAffinity1}
            alt="Affinity Mapping Challenges"
            className="rounded-lg shadow-md"
          />
          <img
            src={imgAffinity2}
            alt="Affinity Mapping Questions"
            className="rounded-lg shadow-md"
          />
          <img
            src={imgAffinity3}
            alt="Affinity Mapping Answers"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
