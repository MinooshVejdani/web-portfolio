import SeedHero from "./components/SeedHero.jsx";
import SeedDetails from "./components/SeedDetails.jsx";
import SeedTrends from "./components/SeedTrends.jsx";
import SeedAffinity from "./components/SeedAffinity.jsx";
import SeedChallenges from "./components/SeedChallenges.jsx";
import SeedResearch from "./components/SeedResearch.jsx";
import SeedPersonas from "./components/SeedPersonas.jsx";
import SeedFindings from "./components/SeedFindings.jsx";
import SeedPrototype from "./components/SeedProtorype.jsx";
import SeedInterviews from "./components/SeedInterviews.jsx";
import SeedSketches from "./components/SeedSketches.jsx";

export default function Seed() {
  return (
    <div>
      <h1>Seed</h1>
      <p>This is the Seed project page.</p>
      <SeedHero />
      <SeedDetails />
      <SeedTrends />
      <SeedChallenges />
      <SeedResearch />
      <SeedInterviews />
      <SeedAffinity />
      <SeedFindings />
      <SeedPersonas />
      <SeedSketches />
      <SeedPrototype />
    </div>
  );
}
