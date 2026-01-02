import { NextResponse } from "next/server";
import { getMonkeytypeData } from "@/services/monkeytype";
import { getWakatimeData } from "@/services/wakatime";

export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    const [monkeyResponse, wakaResponse] = await Promise.all([getMonkeytypeData(), getWakatimeData()]);

    return NextResponse.json(
      {
        monkey: monkeyResponse.data,
        waka: wakaResponse.data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
