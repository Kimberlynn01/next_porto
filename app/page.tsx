"use client";

import Link from "next/link";
import { ArrowRight, Database, Server } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full md:px-10 transition-colors duration-300 bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between mt-10 lg:mt-20">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border bg-gray-50 border-gray-200 dark:bg-zinc-900 dark:border-zinc-800 text-gray-500 dark:text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Available for freelance & collaboration
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Building robust <br />
            <span className="text-indigo-600 dark:text-indigo-400">Back-End</span> systems.
          </h1>

          <p className="text-lg md:text-xl max-w-lg text-gray-500 dark:text-zinc-400">
            Hi, I'm <span className="font-semibold text-gray-900 dark:text-zinc-100">Danudiraja</span>. A passionate developer focusing on scalable server-side applications, database optimization, and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="px-6 py-3 rounded-xl font-medium transition-all transform hover:-translate-y-1 bg-gray-900 hover:bg-gray-800 text-white dark:bg-indigo-600 dark:hover:bg-indigo-500">
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-medium transition-all transform hover:-translate-y-1 flex items-center gap-2 border bg-white border-gray-200 hover:bg-gray-50 text-gray-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 dark:border-transparent"
            >
              Contact Me <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-500 dark:text-zinc-400">Core Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {["Laravel", "PHP", "MySQL", "Next.js", "Tailwind", "REST API", "PosgreSQL", "ReactJs", "CodeIgniter"].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-xl text-sm font-medium border bg-gray-50 border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-lg relative">
          <div className="relative z-10 p-6 rounded-2xl border shadow-2xl transition-transform hover:scale-[1.02] duration-500 bg-gray-50 border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-auto text-xs font-mono text-gray-400 dark:text-zinc-500">server.js</div>
            </div>

            <div className="font-mono text-sm space-y-2 text-indigo-700 dark:text-indigo-300">
              <div className="flex">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2">developer</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-yellow-500">{"{"}</span>
              </div>
              <div className="pl-4">
                name: <span className="text-green-600 dark:text-green-500">'Danudiraja Soenoto'</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-green-600 dark:text-green-500">'Backend Specialist'</span>,
              </div>
              <div className="pl-4">
                passion: [<span className="text-green-600 dark:text-green-500">'Code'</span>, <span className="text-green-600 dark:text-green-500">'Movie'</span>],
              </div>
              <div className="pl-4 flex items-center gap-2">
                status: <span className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-500 px-1 rounded text-xs">"Open Network!"</span>
              </div>
              <div className="text-yellow-500">{"}"};</div>

              <div className="mt-4 flex items-center gap-2 border-t pt-4 border-dashed border-gray-300 dark:border-gray-600/30">
                <span className="text-pink-500">$</span> <span className="text-gray-600 dark:text-gray-300">php artisan ser</span>
                <span className="w-2 h-4 bg-gray-400 animate-pulse"></span>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 p-4 rounded-2xl border shadow-lg animate-bounce duration-[3000ms] bg-white border-gray-100 dark:bg-zinc-800 dark:border-zinc-700">
            <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>

          <div className="absolute -bottom-8 -left-4 p-4 rounded-2xl border shadow-lg animate-pulse bg-white border-gray-100 dark:bg-zinc-800 dark:border-zinc-700">
            <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t flex flex-wrap justify-center md:justify-start gap-10 md:gap-20 border-gray-200 dark:border-zinc-800">
        {[
          { label: "Projects Completed", value: "30+" },
          { label: "Years Experience", value: "3+" },
          { label: "Lines of Code", value: "200k+" },
        ].map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100">{stat.value}</h3>
            <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
