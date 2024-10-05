import ProjectCard, {ProjectCardProps} from "@/components/project-card";

const projects: ProjectCardProps[] = [
    {
        name: "EunhyunBot",
        description: "JDA로 제작한 기본 기능을 탑재한 디스코드 봇입니다.",
        github: "https://github.com/eunhyun05/EunhyunBot",
        tags: ["Discord", "Java", "JDA"]
    },
    {
        name: "Contact us",
        description: "Next.js 14를 사용한 프론트엔드와 백엔드, Prisma ORM과 MongoDB를 사용하는 풀스택 웹 애플리케이션입니다.",
        github: "https://github.com/eunhyun05/Contact-us",
        tags: ["Next.js", "Tailwind CSS", "MongoDB", "Prisma", "shadcn"]
    },
]

export default function ProjectPage() {
    return (
        <div className="container mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.name} data={project}/>
                ))}
            </div>
        </div>
    );
}