import { Link } from 'react-router-dom';

export default function ProjectCard({ title, skills, imageUrl, link }) {
    return (
        <section className="border rounded-lg overflow-hidden shadow-md">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{skills}</p>
                {link.startsWith('http') ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        See Project
                    </a>
                ) : (
                    <Link to={link}>See Project</Link>
                )}
            </div>
        </section>
    );
}
    