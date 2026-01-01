// services/monkeytype.ts

const API_KEY = process.env.MONKEYTYPE_API_KEY;
const USERNAME = process.env.MONKEYTYPE_USERNAME || "Danudiraja";
const BASE_URL = "https://api.monkeytype.com";

// Helper: Format Seconds to HH:MM:SS
const formatDuration = (seconds: number) => {
  if (!seconds) return "00:00:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
};

// Helper: Extract PB
const getPB = (data: any, key: string) => {
  const record = data?.data?.[key]?.[0];
  return {
    wpm: record ? Math.round(record.wpm) : 0,
    acc: record ? Math.round(record.acc) : 0,
  };
};

export const getMonkeytypeData = async () => {
  if (!API_KEY) throw new Error("Monkeytype API Key is missing");

  try {
    // 1. Fetch Public Profile (Name, Join Date, XP, Streak)
    const profileRes = await fetch(`${BASE_URL}/users/${USERNAME}/profile`, {
      next: { revalidate: 3600 },
    });
    const profileData = await profileRes.json();

    // 2. Fetch Personal Bests (Time)
    const timeRes = await fetch(`${BASE_URL}/users/personalBests?mode=time`, {
      headers: { Authorization: `ApeKey ${API_KEY}` },
      next: { revalidate: 3600 },
    });
    const timeData = await timeRes.json();

    // 3. Fetch Personal Bests (Words)
    const wordsRes = await fetch(`${BASE_URL}/users/personalBests?mode=words`, {
      headers: { Authorization: `ApeKey ${API_KEY}` },
      next: { revalidate: 3600 },
    });
    const wordsData = await wordsRes.json();

    // Process Data
    const mData = profileData.data || {};
    const typingStats = mData.typingStats || {};
    const xp = mData.xp || 0;
    const level = Math.floor(xp / 1000) + 1;
    const currentLevelProgress = (xp % 1000) / 10;

    const data = {
      name: mData.name || USERNAME,
      joined: mData.addedAt
        ? new Date(mData.addedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "-",
      streak: mData.streak || 0,
      testsStarted: typingStats.startedTests || 0,
      testsCompleted: typingStats.completedTests || 0,
      timeTyping: formatDuration(typingStats.timeTyping || 0),
      xp: xp,
      level: level,
      levelProgress: currentLevelProgress,
      // PBs
      time15: getPB(timeData, "15"),
      time30: getPB(timeData, "30"),
      time60: getPB(timeData, "60"),
      time120: getPB(timeData, "120"),
      words10: getPB(wordsData, "10"),
      words25: getPB(wordsData, "25"),
      words50: getPB(wordsData, "50"),
      words100: getPB(wordsData, "100"),
    };

    return { data };
  } catch (error) {
    console.error("Monkeytype Service Error:", error);
    throw error;
  }
};
