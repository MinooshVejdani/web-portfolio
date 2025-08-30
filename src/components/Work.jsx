import ProjectCard from "./ProjectCard";

export default function Work() {
  const projects = [
    {
      title: "Pave",
      skills: "Web Design and Web Development, React,  Figma, UI/UX",
        imageUrl: "/images/pave.png",
    },
    {
      title: "Task Management App",
      skills: "Web Development, JavaScript, HTML, CSS",
      imageUrl: "/images/task-management.png",
    },
    {
      title: "My Pet Game",
      skills: "Web Development, JavaScript, HTML, CSS",
      imageUrl: "/images/my-pet-game.png",
    },
    {
      title: "Budget Tracker App",
      skills: "Web Development, JavaScript, HTML, CSS",
      imageUrl: "/images/budget-tracker.png",
    },
    { title: "Seed; A Mobile App", skills: "UI/UX Design,Figma" },
    { title: "Dilemathon", skills: "App Design,Figma, UI/UX" },
  ];

  return (
    <section className="bg-white z-10 relative grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 md:p-10 lg:p-20">
        {projects.map((project, idx) => (
          (<ProjectCard
            key={idx}
            title={project.title}
            skills={project.skills}
            imageUrl={project.imageUrl}
          />)))
          }
    </section>
  );
}


