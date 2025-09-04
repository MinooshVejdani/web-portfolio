import flowchart1 from "../assets/flowchart-1.png";
import flowchart2 from "../assets/flowchart-2.png";

export default function SeedPersonas() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">
        User Personas Created by Research
      </h2>

      {/* Sara */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-semibold">Sara</h3>
          <p className="font-medium">A Plant Propagation Enthusiast</p>
          <div>
            <p><strong>Profile:</strong></p>
            <p>Age: 34</p>
            <p>Location: Los Angeles, CA</p>
            <p>Occupation: Graphic Designer</p>
            <p>Interests: Propagation, indoor gardening, sustainable living</p>
          </div>
          <div>
            <p className="font-semibold">Issue:</p>
            <p>Sara struggles with space in her apartment for propagating plants.</p>
          </div>
          <div>
            <p className="font-semibold">Solution:</p>
            <p>A trading app would let her share plants while keeping her hobby alive.</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-2">Flowchart: Sara (New User)</p>
          <img src={flowchart1} alt="Flowchart Sara" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Brian */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-semibold">Brian</h3>
          <p className="font-medium">A College Student</p>
          <div>
            <p><strong>Profile:</strong></p>
            <p>Age: 22</p>
            <p>Location: Boston, MA</p>
            <p>Occupation: College Student</p>
            <p>Interests: Houseplants, DIY, dorm gardening</p>
          </div>
          <div>
            <p className="font-semibold">Issue:</p>
            <p>Brian loves houseplants but has a limited budget.</p>
          </div>
          <div>
            <p className="font-semibold">Solution:</p>
            <p>A trading app helps Brian acquire new plants affordably through swaps.</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-2">Flowchart: Brian (User)</p>
          <img src={flowchart2} alt="Flowchart Brian" className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
}
