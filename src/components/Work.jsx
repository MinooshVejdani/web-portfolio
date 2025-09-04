import ProjectCard from "./ProjectCard";

export default function Work() {
  const projects = [
    {
      title: "Task Management App",
      skills: "Web Development, JavaScript, HTML, CSS",
      imageUrl: "/images/task-management.png",
      link: "https://github.com/MinooshVejdani/task-management.git",
    },
    {
      title: "Budget Tracker App",
      skills: "Web Development, JavaScript, HTML, CSS",
      imageUrl: "/images/budget-tracker.png",
      link: "https://github.com/MinooshVejdani/budget-tracker.git",
    },
    {
      title: "My Virtual Pet Game",
      skills: "Web Development, JavaScript, HTML, CSS",
      imageUrl: "/images/my-pet-game.png",
      link: "https://github.com/MinooshVejdani/Virtual-pet-project.git",
    },

    {
      title: "Seed; A Mobile App",
      skills: "UI/UX Design,Figma",
      imageUrl: "/images/seed.png",
      link: "/projects/Seed",
    },
    {
      title: "Pave",
      skills: "Web Design and Web Development, React,  Figma, UI/UX",
      imageUrl: "/images/pave.png",
      link: "/projects/Pave",
    },
    {
      title: "Dilemathon",
      skills: "App Design,Figma, UI/UX",
      imageUrl: "/images/dilemathon.png",
      link: "/projects/Dilemathon",
    },
  ];

  return (
    <section className="bg-white z-10 relative grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 md:p-10 lg:p-20">
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          title={project.title}
          skills={project.skills}
          imageUrl={project.imageUrl}
          link={project.link}
        />
      ))}
    </section>
  );
}
