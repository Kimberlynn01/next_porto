"use client";

import { useState, useEffect } from "react";
import { Github, Keyboard, Clock, User } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GithubStats {
  total: number;
  thisWeek: number;
  best: number;
  average: number;
}

interface PB {
  wpm: number;
  acc: number;
}

interface DashboardData {
  waka: {
    startDate: string;
    endDate: string;
    totalHours: string;
    dailyAverage: string;
    bestDay: { date: string; text: string };
    allTime: string;
    languages: { name: string; percent: number; color: string }[];
  };
  monkey: {
    name: string;
    joined: string;
    streak: number;
    testsStarted: number;
    testsCompleted: number;
    timeTyping: string;
    xp: number;
    level: number;
    levelProgress: number;
    time15: PB;
    time30: PB;
    time60: PB;
    time120: PB;
    words10: PB;
    words25: PB;
    words50: PB;
    words100: PB;
  };
}

const CARD_CONTAINER = "p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col dark:bg-[#09090b] dark:border-zinc-800/60";
const INNER_CARD = "p-5 rounded-2xl bg-gray-50 border border-gray-100 dark:bg-[#18181b] dark:border-zinc-800";
const TEXT_LABEL = "text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider dark:text-zinc-500";
const TEXT_VALUE = "text-xl font-bold text-gray-900 dark:text-zinc-100";
const TEXT_ACCENT = "text-indigo-600 dark:text-indigo-400";

export default function DashboardPage() {
  const [contributionData, setContributionData] = useState<ContributionDay[]>([]);
  const [githubStats, setGithubStats] = useState<GithubStats>({ total: 0, thisWeek: 0, best: 0, average: 0 });
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);

  const [loadingGithub, setLoadingGithub] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch("https://github-contributions-api.jogruber.de/v4/Kimberlynn01?y=last");
        const data = await response.json();
        const contributions: ContributionDay[] = data.contributions || [];
        const total = data.total?.lastYear || 0;
        const best = Math.max(...contributions.map((d) => d.count));
        const average = Math.round(total / contributions.length) || 0;
        const last7Days = contributions.slice(-7);
        const thisWeek = last7Days.reduce((sum, day) => sum + day.count, 0);

        setContributionData(contributions);
        setGithubStats({ total, best, average, thisWeek });
        setLoadingGithub(false);
      } catch (error) {
        setLoadingGithub(false);
      }
    };
    fetchGithubData();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();
        if (data.waka && data.monkey) setDashboardData(data);
        setLoadingStats(false);
      } catch (error) {
        setLoadingStats(false);
      }
    };
    fetchStats();
  }, []);

  const getGithubColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-indigo-200 dark:bg-indigo-900/40";
      case 2:
        return "bg-indigo-400 dark:bg-indigo-700/60";
      case 3:
        return "bg-indigo-600 dark:bg-indigo-500";
      case 4:
        return "bg-indigo-800 dark:bg-indigo-400";
      default:
        return "bg-gray-100 dark:bg-zinc-800/50";
    }
  };

  return (
    <div className="w-full px-6 transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-zinc-950 dark:text-zinc-100 min-h-screen pb-20">
      <div className="max-w-5xl mx-auto mb-12 mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Metrics & <br />
          <span className="text-indigo-600 dark:text-indigo-500">Analytics.</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-zinc-400 max-w-2xl">Tracking my programming journey, coding habits, and typing performance.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 mb-10">
        <div className={CARD_CONTAINER}>
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
                <Github className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">GitHub Contributions</h2>
                <p className="text-sm text-gray-500 dark:text-zinc-500">Activity over the past year</p>
              </div>
            </div>
            <p className="text-sm font-mono text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 dark:text-zinc-500 dark:bg-zinc-900 dark:border-zinc-800">@Kimberlynn01</p>
          </div>

          {loadingGithub ? (
            <div className="animate-pulse space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-24">
                <div className="bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
                <div className="bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
                <div className="bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
                <div className="bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
              </div>
              <div className="h-32 bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Total", value: githubStats.total },
                  { label: "This Week", value: githubStats.thisWeek },
                  { label: "Best Day", value: githubStats.best },
                  { label: "Daily Avg", value: githubStats.average },
                ].map((stat, idx) => (
                  <div key={idx} className={`${INNER_CARD} flex flex-col items-center justify-center`}>
                    <span className={TEXT_LABEL}>{stat.label}</span>
                    <span className={`text-2xl font-bold ${TEXT_ACCENT}`}>{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="w-full">
                <div className="flex gap-1 justify-between">
                  <div className="grid grid-rows-7 gap-[3px] h-full py-[2px]">
                    <span className="text-[9px] text-gray-400 dark:text-zinc-600 h-[10px]"></span>
                    <span className="text-[9px] text-gray-400 dark:text-zinc-600 h-[10px] leading-3">Mon</span>
                    <span className="text-[9px] text-gray-400 dark:text-zinc-600 h-[10px]"></span>
                    <span className="text-[9px] text-gray-400 dark:text-zinc-600 h-[10px] leading-3">Wed</span>
                    <span className="text-[9px] text-gray-400 dark:text-zinc-600 h-[10px]"></span>
                    <span className="text-[9px] text-gray-400 dark:text-zinc-600 h-[10px] leading-3">Fri</span>
                    <span className="text-[9px] text-gray-400 dark:text-zinc-600 h-[10px]"></span>
                  </div>

                  <div className="flex-1 grid grid-rows-7 grid-flow-col gap-[3px] place-content-stretch">
                    {contributionData.map((day, idx) => (
                      <div key={idx} title={`${day.count} contributions on ${day.date}`} className={`rounded-sm ${getGithubColor(day.level)} hover:ring-1 hover:ring-gray-400 dark:hover:ring-white transition-all`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className={CARD_CONTAINER}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
              <Keyboard className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Monkeytype Stats</h2>
              <p className="text-sm text-gray-500 dark:text-zinc-500">Typing speed & consistency</p>
            </div>
          </div>

          {loadingStats ? (
            <div className="animate-pulse space-y-4">
              <div className="h-32 bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
              <div className="grid grid-cols-2 gap-4 h-40">
                <div className="bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
                <div className="bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className={`${INNER_CARD} flex flex-col md:flex-row items-center justify-between gap-6`}>
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-2xl bg-gray-200 border-2 border-gray-300 dark:bg-zinc-800 dark:border-zinc-700 overflow-hidden flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400 dark:text-zinc-500" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${TEXT_ACCENT}`}>{dashboardData?.monkey.name || "User"}</h3>
                    <p className="text-xs text-gray-500 mt-1 dark:text-zinc-500">Joined {dashboardData?.monkey.joined}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-bold text-indigo-700 px-1.5 py-0.5 bg-indigo-100 rounded dark:bg-indigo-500/20 dark:text-indigo-300">Lvl {dashboardData?.monkey.level}</span>
                      <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden border border-gray-300 dark:bg-zinc-800 dark:border-zinc-700">
                        <div className="h-full bg-indigo-600 rounded-full dark:bg-indigo-500" style={{ width: `${dashboardData?.monkey.levelProgress}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8 md:gap-12 text-center">
                  <div>
                    <p className={TEXT_LABEL}>Started</p>
                    <p className={TEXT_VALUE}>{dashboardData?.monkey.testsStarted}</p>
                  </div>
                  <div>
                    <p className={TEXT_LABEL}>Completed</p>
                    <p className={TEXT_VALUE}>{dashboardData?.monkey.testsCompleted}</p>
                  </div>
                  <div>
                    <p className={TEXT_LABEL}>Time</p>
                    <p className={TEXT_VALUE}>{dashboardData?.monkey.timeTyping}</p>
                  </div>
                </div>
              </div>

              <div className={`${INNER_CARD} flex flex-col md:flex-row items-center justify-between gap-4`}>
                <span className="text-sm font-medium text-gray-600 dark:text-zinc-400">Total Experience</span>
                <div className="flex gap-8">
                  <div className="text-right">
                    <p className={TEXT_LABEL}>Total XP</p>
                    <p className={`text-xl font-bold ${TEXT_ACCENT}`}>{dashboardData?.monkey.xp.toLocaleString()}</p>
                  </div>
                  <div className="text-left pl-6 border-l border-gray-200 dark:border-zinc-700">
                    <p className={TEXT_LABEL}>Streak</p>
                    <p className={`text-xl font-bold ${TEXT_ACCENT}`}>{dashboardData?.monkey.streak} days</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={INNER_CARD}>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-zinc-800">
                    <Clock className="w-4 h-4 text-gray-400 dark:text-zinc-500" />
                    <p className="text-sm font-bold text-gray-700 dark:text-zinc-300">Time Records</p>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { l: "15s", d: dashboardData?.monkey.time15 },
                      { l: "30s", d: dashboardData?.monkey.time30 },
                      { l: "60s", d: dashboardData?.monkey.time60 },
                      { l: "120s", d: dashboardData?.monkey.time120 },
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="text-[10px] text-gray-500 mb-1 dark:text-zinc-500">{item.l}</p>
                        <p className={`text-xl font-bold ${TEXT_ACCENT}`}>{item.d?.wpm || "-"}</p>
                        <p className="text-[10px] text-gray-600 dark:text-zinc-600">{item.d?.acc || "-"}%</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={INNER_CARD}>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-zinc-800">
                    <Keyboard className="w-4 h-4 text-gray-400 dark:text-zinc-500" />
                    <p className="text-sm font-bold text-gray-700 dark:text-zinc-300">Word Records</p>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { l: "10w", d: dashboardData?.monkey.words10 },
                      { l: "25w", d: dashboardData?.monkey.words25 },
                      { l: "50w", d: dashboardData?.monkey.words50 },
                      { l: "100w", d: dashboardData?.monkey.words100 },
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="text-[10px] text-gray-500 mb-1 dark:text-zinc-500">{item.l}</p>
                        <p className={`text-xl font-bold ${TEXT_ACCENT}`}>{item.d?.wpm || "-"}</p>
                        <p className="text-[10px] text-gray-600 dark:text-zinc-600">{item.d?.acc || "-"}%</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={CARD_CONTAINER}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
              <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">WakaTime Stats</h2>
              <p className="text-sm text-gray-500 dark:text-zinc-500">Last 7 Days + All Time</p>
            </div>
          </div>

          {loadingStats ? (
            <div className="animate-pulse space-y-4">
              <div className="grid grid-cols-2 gap-4 h-24">
                <div className="bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
                <div className="bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
              </div>
              <div className="h-40 bg-gray-200 rounded-2xl dark:bg-zinc-900"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`${INNER_CARD} flex flex-col justify-center`}>
                  <p className={TEXT_LABEL}>Start Date</p>
                  <p className={TEXT_VALUE}>{dashboardData?.waka.startDate}</p>
                </div>
                <div className={`${INNER_CARD} flex flex-col justify-center`}>
                  <p className={TEXT_LABEL}>End Date</p>
                  <p className={TEXT_VALUE}>{dashboardData?.waka.endDate}</p>
                </div>
                <div className={`${INNER_CARD} flex flex-col justify-center`}>
                  <p className={TEXT_LABEL}>Daily Average</p>
                  <p className={`text-2xl font-bold ${TEXT_ACCENT}`}>{dashboardData?.waka.dailyAverage}</p>
                </div>
                <div className={`${INNER_CARD} flex flex-col justify-center`}>
                  <p className={TEXT_LABEL}>Total This Week</p>
                  <p className={`text-2xl font-bold ${TEXT_ACCENT}`}>{dashboardData?.waka.totalHours}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`${INNER_CARD} flex flex-col justify-center`}>
                  <p className={TEXT_LABEL}>Best Day</p>
                  <p className={TEXT_VALUE}>{dashboardData?.waka.bestDay.date}</p>
                  <p className="text-xs text-gray-500 mt-1 dark:text-zinc-500">{dashboardData?.waka.bestDay.text}</p>
                </div>
                <div className={`${INNER_CARD} flex flex-col justify-center relative overflow-hidden group`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 blur-3xl rounded-full translate-x-10 -translate-y-10 dark:bg-indigo-500/5"></div>
                  <p className={TEXT_LABEL}>All-Time Coding</p>
                  <p className="text-3xl font-extrabold text-gray-900 dark:text-white">{dashboardData?.waka.allTime}</p>
                </div>
              </div>

              <div className={`${INNER_CARD} mt-2`}>
                <p className="text-sm font-medium text-gray-600 mb-6 dark:text-zinc-400">Top Languages</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {dashboardData?.waka.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between group">
                      <span className="text-gray-800 text-sm font-semibold w-28 truncate dark:text-zinc-200">{lang.name}</span>
                      <div className="flex-1 mx-4 h-2.5 bg-gray-200 rounded-full overflow-hidden border border-gray-300 dark:bg-zinc-900 dark:border-zinc-800">
                        <div className={`h-full rounded-full ${lang.color}`} style={{ width: `${lang.percent}%` }}></div>
                      </div>
                      <span className="text-gray-500 text-xs font-mono w-12 text-right dark:text-zinc-500">{lang.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
