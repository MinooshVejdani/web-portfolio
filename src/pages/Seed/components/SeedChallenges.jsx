
import limitedSpaceImg from "../assets/img_chall_1.jpg";
import costImg from "../assets/img_chall_2.jpg";
import pestControlImg from "../assets/img_chall_3.jpg";
import varietyImg from "../assets/img_chall_4.jpg";
import overpropagationImg from "../assets/img_chall_5.jpg";
import communityImg from "../assets/img_chall_6.jpg";

import ChallengeCard from "./ChallengeCard.jsx";

export default function SeedChallenges() {
  const challenges = [
    {
      title: "Limited Space",
      description:
        "Many urban gardeners struggle with limited space in their apartments or balconies, making it challenging to grow a diverse range of plants.",
      imageUrl: limitedSpaceImg,
    },
    {
      title: "Cost of Buying New Plants",
      description:
        "Constantly buying new plants can be costly. Many enthusiasts prefer swaps and trades to keep expenses low.",
      imageUrl: costImg,
    },
    {
      title: "Managing Plant Diseases",
      description:
        "Dealing with pests and diseases requires constant monitoring. Many share remedies and tips within communities.",
      imageUrl: pestControlImg,
    },
    {
      title: "Desire for Plant Variety",
      description:
        "Gardeners often want more diversity in their collections. Plant swaps help keep gardening exciting.",
      imageUrl: varietyImg,
    },
    {
      title: "Overpropagation",
      description:
        "With the ease of propagating plants, many enthusiasts find themselves overwhelmed with too many cuttings and seedlings.",
      imageUrl: overpropagationImg,
    },
    {
      title: "Community and Sharing",
      description:
        "Many gardeners seek community support, whether through local clubs or online forums, to share tips and experiences.",
      imageUrl: communityImg,
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 mb-16">
        Plant Enthusiast Challenges:
        <p>
          <strong>Based on an internet research</strong>
        </p>
      </h2>
      <div className=" mt-32 grid grid-cols-3 gap-6">
      {challenges.map((challenge, idx) => (
        <ChallengeCard
          key={idx}
          title={challenge.title}
          description={challenge.description}
          imageUrl={challenge.imageUrl}
        />
      ))}
      </div>
    </section>
  );
}

// export default function SeedChallenges() {
//   return (
//     <section>
//       <h2 className="text-2xl font-bold mb-4">
//         Plant Enthusiast Challenges:
//         <p>
//           <strong>Based on an internet research</strong>
//         </p>
//       </h2>

//       <div className="space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="p-4 bg-white rounded-xl shadow-md">
//             <img
//               src={limitedSpaceImg}
//               alt="Limited space"
//               className="w-full rounded-lg"
//             />
//             <p className="font-semibold mt-2">Limited Space</p>
//             <p className="text-gray-700 text-sm mt-1">
//               Many urban gardeners struggle with limited space in their
//               apartments or balconies, making it challenging to grow a diverse
//               range of plants.
//             </p>
//           </div>

//           <div className="p-4 bg-white rounded-xl shadow-md">
//             <img
//               src={costImg}
//               alt="Cost of buying plants"
//               className="w-full rounded-lg"
//             />
//             <p className="font-semibold mt-2">Cost of Buying New Plants</p>
//             <p className="text-gray-700 text-sm mt-1">
//               Constantly buying new plants can be costly. Many enthusiasts
//               prefer swaps and trades to keep expenses low.
//             </p>
//           </div>

//           <div className="p-4 bg-white rounded-xl shadow-md">
//             <img
//               src={pestControlImg}
//               alt="Managing diseases"
//               className="w-full rounded-lg"
//             />
//             <p className="font-semibold mt-2">Managing Plant Diseases</p>
//             <p className="text-gray-700 text-sm mt-1">
//               Dealing with pests and diseases requires constant monitoring. Many
//               share remedies and tips within communities.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="p-4 bg-white rounded-xl shadow-md">
//             <img
//               src={varietyImg}
//               alt="Variety"
//               className="w-full rounded-lg"
//             />
//             <p className="font-semibold mt-2">Desire for Plant Variety</p>
//             <p className="text-gray-700 text-sm mt-1">
//               Gardeners often want more diversity in their collections. Plant
//               swaps help keep gardening exciting.
//             </p>
//           </div>

//           <div className="p-4 bg-white rounded-xl shadow-md">
//             <img
//               src={overpropagationImg}
//               alt="Overpropagation"
//               className="w-full rounded-lg"
//             />
//             <p className="font-semibold mt-2">Propagation and Overproduction</p>
//             <p className="text-gray-700 text-sm mt-1">
//               Enthusiasts may end up with excess plants. Swapping is a way to
//               exchange surplus for new varieties.
//             </p>
//           </div>

//           <div className="p-4 bg-white rounded-xl shadow-md">
//             <img
//               src={communityImg}
//               alt="Community"
//               className="w-full rounded-lg"
//             />
//             <p className="font-semibold mt-2">Connecting with a Community</p>
//             <p className="text-gray-700 text-sm mt-1">
//               The social side of gardening is just as valuable as the plants.
//               Plant trading platforms help build connections.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
