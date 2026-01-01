"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderOpen, Mail, Linkedin, Sun, Moon, Github, Instagram, LayoutDashboard } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Contact Us", href: "/contact", icon: Mail },
];

const Sidebar = ({ isDarkMode, toggleTheme }) => {
  const pathname = usePathname();

  const profile = {
    name: "Danudiraja Soenoto",
    photoUrl: "images/me.png",
    githubUrl: "https://github.com/Kimberlynn01",
    linkedinUrl: "https://www.linkedin.com/in/Danudiraja Soenoto",
    instagramUrl: "https://instagram.com/inspirajoki",
  };

  return (
    <div className="flex flex-col h-full w-72 border-r transition-colors duration-300 bg-white border-gray-200 dark:bg-zinc-950 dark:border-zinc-800">
      <div className="p-6 flex flex-col items-start border-b border-gray-200 dark:border-zinc-800">
        <div className="mb-4 w-20 h-20 relative group">
          <div className="absolute inset-0 rounded-2xl rotate-3  transition-transform group-hover:rotate-6 bg-indigo-600 dark:bg-white dark:opacity-20"></div>
          <img src={profile.photoUrl} alt="Profile" className="relative object-cover w-full h-full rounded-2xl border shadow-sm transition-transform group-hover:-translate-y-1 border-gray-200 dark:border-zinc-700" />
        </div>

        <h2 className="text-xl font-bold tracking-tight mb-1 text-gray-900 dark:text-zinc-100">{profile.name}</h2>
        <p className="text-xs font-medium text-gray-500 dark:text-zinc-400">Back-End Developer</p>

        <div className="flex gap-2 mt-5">
          {[
            { url: profile.linkedinUrl, icon: Linkedin },
            { url: profile.githubUrl, icon: Github },
            { url: profile.instagramUrl, icon: Instagram },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl transition-all duration-300 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-black dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-white"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <nav className="flex-grow px-4 py-6 space-y-1 overflow-y-auto">
        <p className="px-2 mb-2 text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-zinc-500">Menu</p>

        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                group flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive ? "bg-gray-100 text-black dark:bg-zinc-800 dark:text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"}
              `}
            >
              <item.icon className={`w-4 h-4 mr-3 transition-colors ${isActive ? "opacity-100 text-indigo-600 dark:text-indigo-400" : "opacity-70 group-hover:opacity-100"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-600 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-700 dark:text-zinc-400"
        >
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-white shadow-sm dark:bg-zinc-800 dark:shadow-none">{isDarkMode ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-orange-500" />}</div>
            <span className="text-sm font-medium">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
          </div>
        </button>

        <p className="mt-4 text-[10px] text-center text-gray-400 dark:text-zinc-600">&copy; {new Date().getFullYear()} Danudiraja Soenoto.</p>
      </div>
    </div>
  );
};

export default Sidebar;
