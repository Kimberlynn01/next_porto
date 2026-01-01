"use client";

import { Brain, Database, Server, Users, Code2, Coffee, Layers, Briefcase, GraduationCap, Calendar } from "lucide-react";

const CAREER_HISTORY = [
  {
    company: "Individu",
    role: "Freelance Developer",
    period: "Jul 2025 - Present",
    duration: "6 Months",
    points: [
      "Collaborating with the team to develop dynamic web applications using Next.js and TypeScript.",
      "Implementing responsive UI designs from Figma and integrating RESTful APIs for seamless data flow.",
      "Refactoring legacy codebases to improve maintainability and application performance.",
    ],
  },
  {
    company: "BIIS Corp",
    role: "Fullstack Developer",
    period: "Jun 2024 - Aug 2024",
    duration: "3 Months",
    points: [
      "Developed scalable full-stack applications integrating modern frontend frameworks with robust backend APIs.",
      "Implemented secure authentication and payment gateway integration for client e-commerce platforms.",
      "Optimized database queries and server-side logic to improve application response time by 30%.",
    ],
  },
  {
    company: "Digi Dreams",
    role: "Android Developer",
    period: "Feb 2024 - Apr 2024",
    duration: "3 Months",
    points: [
      "Built native Android applications using Kotlin, focusing on clean architecture and MVVM patterns.",
      "Collaborated with UI/UX designers to implement pixel-perfect, responsive mobile interfaces.",
      "Integrated RESTful APIs and handled local data storage (Room Database) for offline capabilities.",
    ],
  },
  {
    company: "Phicos Group",
    role: "Magang PKL SMK",
    period: "Aug 2023 - Nov 2023",
    duration: "3 Months",
    points: [
      "Developed the official campus website for Universitas Lampung (Unila) using Bootstrap and Laravel.",
      "Designed and implemented responsive frontend layouts ensuring cross-browser compatibility.",
      "Built backend CRUD modules to manage academic data, news portals, and faculty information.",
    ],
  },
  {
    company: "Tebar Digital",
    role: "UI/UX",
    period: "Feb 2023 - May 2023",
    duration: "3 Months",
    points: [
      "Designed high-fidelity user interfaces and interactive prototypes using Figma, focusing on user-centric design principles.",
      "Collaborated closely with the development team to ensure design feasibility and maintain visual consistency across responsive layouts.",
      "Conducted user research and usability testing to optimize information architecture and enhance overall user experience.",
    ],
  },
];

const EDUCATION_HISTORY = [
  {
    school: "Universitas Duta Bangsa",
    degree: "Informatics Engineering",
    period: "Sep 2024 - Present",
    type: "University",
  },
  {
    school: "SMK Muhammadiyah 1 Sukoharjo",
    degree: "Software Engineering (RPL)",
    period: "May 2021 - May 2024",
    type: "Vocational School",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full px-6 md:px-6 transition-colors duration-300 bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 pb-20">
      <div className="max-w-5xl mx-auto mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          More than code, <br />
          it's about <span className="text-indigo-600 dark:text-indigo-400">Logic & Architecture.</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-zinc-400 max-w-2xl">Getting to know the person behind the terminal.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-8 rounded-2xl border bg-gray-50 border-gray-200 dark:bg-zinc-900 dark:border-zinc-800 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-indigo-500" />
            Who am I?
          </h2>
          <p className="text-gray-600 dark:text-zinc-300 leading-relaxed mb-4">
            I'm <span className="font-semibold text-gray-900 dark:text-white">Danudiraja Soenoto</span>, a Fullstack Developer with experience in crafting digital solutions.
          </p>
          <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
            While I can handle the full stack, my true passion lies in the <span className="font-semibold text-indigo-600 dark:text-indigo-400">Back-End</span>. I thrive on solving complex algorithms, optimizing database queries, and
            building the "invisible engine" that powers robust applications.
          </p>
        </div>

        <div className="p-8 rounded-2xl border bg-white border-gray-200 dark:bg-zinc-950 dark:border-zinc-800 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Coffee className="w-24 h-24" />
          </div>
          <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">2+</span>
          <span className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-zinc-500 mt-2">Years Experience</span>
        </div>

        <div className="p-8 rounded-2xl border bg-indigo-600 text-white dark:bg-indigo-900 dark:border-indigo-800 flex flex-col justify-between relative overflow-hidden">
          <Brain className="w-12 h-12 mb-4 text-indigo-200" />
          <div>
            <h3 className="text-xl font-bold mb-2">Strong Logic & Algorithms</h3>
            <p className="text-indigo-100 text-sm">I don't just write code; I solve problems. I enjoy diving deep into data structures and optimizing logic flows for maximum efficiency.</p>
          </div>
        </div>

        <div className="md:col-span-2 p-8 rounded-2xl border bg-white border-gray-200 dark:bg-zinc-950 dark:border-zinc-800">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-gray-500" />
            Primary Tech Stack
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 transition-all hover:border-red-500/50">
              <div className="p-3 rounded-lg bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">Laravel</h4>
                <p className="text-xs text-gray-500 dark:text-zinc-500">Advanced Backend Framework</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 transition-all hover:border-blue-500/50">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">PostgreSQL</h4>
                <p className="text-xs text-gray-500 dark:text-zinc-500">Complex Data Relations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 p-8 rounded-2xl border bg-gray-50 border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-500" />
            Professional Career
          </h3>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-zinc-700">
            {CAREER_HISTORY.map((job, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 dark:bg-zinc-800 dark:border-zinc-700 z-10">
                  <div className={`w-3 h-3 rounded-full ${idx === 0 ? "bg-indigo-500 animate-pulse" : "bg-gray-400 dark:bg-zinc-600"}`}></div>
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-gray-200 bg-white dark:bg-zinc-950 dark:border-zinc-800 shadow-sm transition-all hover:border-indigo-500/50 hover:shadow-md">
                  <div className="flex flex-col mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <span className="font-bold text-lg text-gray-900 dark:text-zinc-100">{job.role}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300 rounded border border-indigo-100 dark:border-indigo-800">{job.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                      <span className="font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wide bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded">{job.company}</span>
                      <span className="hidden sm:inline text-gray-300 dark:text-zinc-600">•</span>
                      <span className="text-gray-500 dark:text-zinc-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {job.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 p-8 rounded-2xl border bg-white border-gray-200 dark:bg-zinc-950 dark:border-zinc-800 flex flex-col">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-500" />
            Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION_HISTORY.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">{edu.type}</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-zinc-100 text-lg mb-1">{edu.degree}</h4>
                <p className="text-sm text-gray-600 dark:text-zinc-400 font-medium mb-3">{edu.school}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 border-t border-gray-200 dark:border-zinc-800 pt-3">
                  <Calendar className="w-3 h-3" />
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 p-8 rounded-2xl border bg-gray-50 border-gray-200 dark:bg-zinc-900 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-500" />
              Collaboration & Independence
            </h3>
            <p className="text-gray-600 dark:text-zinc-400 text-sm max-w-xl">Adaptable workflow. I am comfortable working solo to drive features from concept to deployment, or collaborating within a team to build scalable architectures.</p>
          </div>

          <div className="flex gap-3">
            <span className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-300">Team Player</span>
            <span className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-300">Self Starter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
