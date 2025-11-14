import React, { useState, useEffect } from "react";
import { Radio, CalendarClock } from "lucide-react";

const WebinarStatus = ({ isLive = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 34,
    seconds: 15,
  });

  useEffect(() => {
    if (isLive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isLive]);

  return (
    <div
      className={`inline-flex items-center gap-4 px-5 py-3.5 rounded-lg border-2 backdrop-blur-md ${
        isLive
          ? "bg-primary/10 border-primary shadow-lg shadow-primary/20"
          : "bg-white/10 border-white/30 shadow-lg"
      }`}
    >
      <div className="flex items-center gap-2.5">
        {isLive ? (
          <>
            <Radio className="w-5 h-5 text-primary" />
            <span className="font-bold text-white">LIVE</span>
          </>
        ) : (
          <CalendarClock className="w-5 h-5 text-white" />
        )}
      </div>
      <div
        className={`h-6 w-px ${isLive ? "bg-primary/30" : "bg-white/30"}`}
      ></div>
      <div>
        {isLive ? (
          <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <span className="font-semibold text-white">
              Webinar Happening Now
            </span>

            <div
              className={`h-4 sm:h-6 w-px ${
                isLive ? "bg-primary/30" : "bg-white/30"
              }`}
            ></div>

            <a href="" className="text-white underline">
              Click to Join
            </a>
          </div>
        ) : (
          <span className="font-semibold text-white font-secondary">
            Next Webinar: {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </span>
        )}
      </div>
    </div>
  );
};

export default WebinarStatus;
