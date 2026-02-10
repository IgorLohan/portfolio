"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const numberStyle = {
  color: "#c08080",
  textShadow: "0 0 10px rgba(168, 85, 85, 0.5), 0 0 20px rgba(139, 64, 64, 0.3)",
};

function TimeSegment({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex flex-col items-center gap-2 rounded-2xl border border-[#8b4040]/50 bg-[#0f0a0a]/95 px-5 py-4 sm:px-6 sm:py-5"
      style={{ boxShadow: "0 0 24px rgba(139, 64, 64, 0.3), inset 0 0 0 1px rgba(139, 64, 64, 0.1)" }}
    >
      <div className="flex h-16 w-24 items-center justify-center sm:h-20 sm:w-28">
        <span
          className="text-4xl font-bold tabular-nums sm:text-5xl"
          style={numberStyle}
        >
          {value}
        </span>
      </div>
      <span className="text-sm font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </span>
    </div>
  );
}

interface CountdownProps {
  className?: string;
}

export function Countdown({ className = "" }: CountdownProps) {
  const t = useTranslations("countdown");
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const update = () => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`.trim()}>
        {["HH", "MM", "SS"].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 rounded-2xl border border-[#8b4040]/50 bg-[#0f0a0a]/95 px-5 py-4 sm:px-6 sm:py-5"
            style={{ boxShadow: "0 0 24px rgba(139, 64, 64, 0.3)" }}
          >
            <div className="flex h-16 w-24 items-center justify-center sm:h-20 sm:w-28">
              <span className="text-4xl font-bold tabular-nums text-[#a85555] sm:text-5xl">
                00
              </span>
            </div>
            <span className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const segments = [
    { value: pad(time.hours), label: t("hours") },
    { value: pad(time.minutes), label: t("minutes") },
    { value: pad(time.seconds), label: t("seconds") },
  ];

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`.trim()}>
      {segments.map((seg, i) => (
        <div key={seg.label} className="flex items-center gap-3 sm:gap-4">
          <TimeSegment value={seg.value} label={seg.label} />
          {i < segments.length - 1 && (
            <span
              className="text-4xl font-bold sm:text-5xl"
              style={{
                color: "#a85555",
                textShadow: "0 0 10px rgba(168, 85, 85, 0.5)",
              }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
