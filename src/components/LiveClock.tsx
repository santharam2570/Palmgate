"use client";

import { useSyncExternalStore } from "react";

const TICK_MS = 15_000;

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, TICK_MS);
  return () => clearInterval(id);
}

const getTick = () => Math.floor(Date.now() / TICK_MS);
const getServerTick = () => null;

export function LiveClock({ timeZone }: { timeZone: string }) {
  const tick = useSyncExternalStore(subscribe, getTick, getServerTick);

  if (tick === null) return <span className="tabular-nums">--:--</span>;

  const now = new Date(tick * TICK_MS);

  const time = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false }).format(now);
  const hour = Number(new Intl.DateTimeFormat("en-GB", { timeZone, hour: "numeric", hour12: false }).format(now));
  const day = new Intl.DateTimeFormat("en-GB", { timeZone, weekday: "short" }).format(now);
  // Office hours: 9:00–18:00 local time, Monday to Friday.
  const weekend = day === "Sat" || day === "Sun";
  const open = !weekend && hour >= 9 && hour < 18;

  return (
    <span className="inline-flex items-center gap-3">
      <span className="font-display tabular-nums">{time}</span>
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
          open ? "bg-emerald-500/10 text-emerald-600" : "bg-ink-100 text-ink-500"
        }`}
      >
        <span className={`size-1.5 rounded-full ${open ? "animate-pulse bg-emerald-500" : "bg-ink-400"}`} />
        {open ? "Open now" : "Closed"}
      </span>
    </span>
  );
}
