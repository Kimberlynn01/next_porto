"use client";

import { useState } from "react";
import { FolderOpen, ExternalLink, Github, X, Code2, Layers, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: 0,
    title: "CRONCH.ID",
    shortDesc: "A e-commerce platform.",
    fullDesc:
      "School Share is a comprehensive application designed to bridge the gap between researchers. It facilitates real-time discussion, document sharing, and peer review processes. Built with a focus on scalability and security, allowing researchers to work remotely (WFH) seamlessly.",
    image: "images/cronch.jpeg",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Dart", "Flutter"],
    githubUrl: "",
    demoUrl: "https://cronch.danudiraja.space",
    role: "Back-End Developer",
    date: "Jun 2025",
  },
  {
    id: 1,
    title: "School Share",
    shortDesc: "A collaborative platform for researchers to share findings.",
    fullDesc:
      "School Share is a comprehensive application designed to bridge the gap between researchers. It facilitates real-time discussion, document sharing, and peer review processes. Built with a focus on scalability and security, allowing researchers to work remotely (WFH) seamlessly.",
    image: "https://i.ibb.co.com/fz6NPdRC/Gemini-Generated-Image-ki8humki8humki8h.png",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Dart", "Flutter"],
    githubUrl: "#",
    demoUrl: "https://schoolshare.id",
    role: "Back-End Developer",
    date: "Jun 2025",
  },
  {
    id: 2,
    title: "Galleris",
    shortDesc: "Vendor platform for sharing event galleries via QR & WhatsApp.",
    fullDesc:
      "Galleris is a SaaS solution helping event vendors distribute photo and video documentation to clients efficiently. Features include automatic QR Code generation, WhatsApp Bot integration for notifications, and a secure cloud gallery system.",
    image: "https://i.ibb.co.com/cX7RXN2j/Screenshot-2026-01-02-at-00-00-45.png",
    techStack: ["Php", "Laravel", "Tailwind", "Mysql"],
    githubUrl: "#",
    demoUrl: "https://galleris.cloud",
    role: "Fullstack Developer",
    date: "Des 2025",
  },
  {
    id: 3,
    title: "Web Desa",
    shortDesc: "Integrated village administration system for digitizing public services.",
    fullDesc:
      "Web Desa is a digital solution designed to modernize village administration. It streamlines the creation and management of essential civil documents such as ID Cards (KTP), Family Cards (KK), and Birth Certificates (Akte). The system enhances transparency and efficiency in public service delivery for local residents.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Php", "Laravel", "Bootstrap 5", "Mysql"],
    githubUrl: "https://github.com/Kimberlynn01/web_desa/tree/50e6779a97d656436e02716f9dc288a95b3d3442/web-desa",
    demoUrl: "#",
    role: "Fullstack Developer",
    date: "Jun 2024",
  },
  {
    id: 4,
    title: "Sikasi Vokasi",
    shortDesc: "Population administration platform for streamlined document processing.",
    fullDesc:
      "Sikasi is a dedicated platform designed to digitize and streamline the lifecycle of strategic partnerships. It acts as a central hub for managing cooperation agreements between business partners, tracking joint project milestones, and monitoring performance metrics. The system fosters transparency and efficiency in B2B collaborations.",
    image: "https://i.ibb.co.com/mfCzfb1/Screenshot-2026-01-02-at-00-27-15.png",
    techStack: ["Php", "Laravel", "Bootstrap 5", "Mysql"],
    githubUrl: "https://github.com/Kimberlynn01/sikasi",
    demoUrl: "#",
    role: "Fullstack Developer",
    date: "Aug 2024",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

  return (
    <div className="w-full px-6 md:px-6 transition-colors duration-300 bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 min-h-screen pb-20">
      <div className="max-w-5xl mx-auto mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Featured <br />
          <span className="text-indigo-600 dark:text-indigo-400">Projects.</span>
        </h1>
        {/* Updated Description with NDA Disclaimer */}
        <p className="text-lg text-gray-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          A collection of applications and systems I've engineered. Click on any project to see the details.
          <span className="block mt-2 text-sm italic opacity-80">* Please note that some commercial projects are not listed here due to Non-Disclosure Agreements (NDA) and confidentiality policies.</span>
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer flex flex-col h-full bg-white dark:bg-[#09090b] border border-gray-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors z-10" />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <FolderOpen className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
              </div>

              <p className="text-sm text-gray-600 dark:text-zinc-400 mb-6 flex-grow line-clamp-3">{project.shortDesc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-500 rounded border border-gray-200 dark:border-zinc-800">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && <span className="text-[10px] px-2 py-1 text-gray-400">+</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-3xl bg-white dark:bg-[#09090b] rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-200">
            <div className="relative h-56 sm:h-72 w-full">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md">
                <X className="w-5 h-5" />
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent opacity-90 z-10" />
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 sm:left-8 z-20">
                <h2 className="text-3xl font-extrabold text-white mb-2">{selectedProject.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <Layers className="w-4 h-4 text-indigo-400" /> {selectedProject.role}
                  </span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span>{selectedProject.date}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto">
              <div className="mb-8">
                <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">About Project</h4>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed text-base">{selectedProject.fullDesc}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg text-sm font-medium text-gray-700 dark:text-zinc-300">
                      <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white font-semibold transition-colors"
                  >
                    <Github className="w-5 h-5" /> View Code
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-500/20"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
