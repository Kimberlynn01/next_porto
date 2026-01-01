// services/wakatime.ts

const API_KEY = process.env.WAKATIME_API_KEY;
const BASE_URL = "https://wakatime.com/api/v1";

const formatDate = (dateString: string) => {
  if (!dateString) return "-";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getColorForLang = (lang: string) => {
  const l = lang.toLowerCase();
  if (l.includes("blade")) return "bg-[#f05340]";
  if (l.includes("php")) return "bg-[#777bb4]";
  if (l.includes("type") || l.includes("ts")) return "bg-[#3178c6]";
  if (l.includes("script") || l.includes("js")) return "bg-[#f7df1e]";
  if (l.includes("html")) return "bg-[#e34c26]";
  if (l.includes("css")) return "bg-[#563d7c]";
  if (l.includes("go")) return "bg-[#00add8]";
  return "bg-gray-500";
};

export const getWakatimeData = async () => {
  if (!API_KEY) throw new Error("WakaTime API Key is missing");

  try {
    const [statsRes, allTimeRes] = await Promise.all([
      fetch(`${BASE_URL}/users/current/stats/last_7_days?api_key=${API_KEY}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`${BASE_URL}/users/current/all_time_since_today?api_key=${API_KEY}`, {
        next: { revalidate: 3600 },
      }),
    ]);

    const statsData = await statsRes.json();
    const allTimeData = await allTimeRes.json();

    const data = {
      startDate: formatDate(statsData.data?.start),
      endDate: formatDate(statsData.data?.end),
      totalHours: statsData.data?.human_readable_total || "0 hrs",
      dailyAverage: statsData.data?.human_readable_daily_average || "0 mins",
      bestDay: {
        date: formatDate(statsData.data?.best_day?.date),
        text: statsData.data?.best_day?.text || "-",
      },
      allTime: allTimeData.data?.text || "0 hrs",
      languages:
        statsData.data?.languages?.slice(0, 6).map((lang: any) => ({
          name: lang.name,
          percent: lang.percent,
          color: getColorForLang(lang.name),
        })) || [],
    };

    return { data };
  } catch (error) {
    console.error("WakaTime Service Error:", error);
    throw error;
  }
};
