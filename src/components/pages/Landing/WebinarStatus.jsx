import React, { useState, useEffect } from "react";
import { Radio, CalendarClock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WebinarStatus = ({ isLive = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 34,
    seconds: 15,
  });
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {/* MOBILE ONLY: Circle Button (Calendar) or Close Button (X) */}
      <motion.button
        key={isOpen ? "close" : "open"}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-4 z-50 w-12 h-12 rounded-full bg-[#e83f25] shadow-lg flex items-center justify-center"
      >
        {isOpen ? (
          <X className="text-white" size={20} />
        ) : (
          <CalendarClock className="text-white" size={20} />
        )}
      </motion.button>

      {/* MOBILE ONLY: Expanded Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed bottom-6 right-16 z-40"
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 backdrop-blur-md ${
                isLive
                  ? "bg-primary/10 border-primary shadow-lg shadow-primary/20"
                  : "bg-white/10 border-white/30 shadow-lg"
              }`}
            >
              <div className="flex items-center gap-2">
                {isLive ? (
                  <>
                    <Radio className="w-4 h-4 text-primary" />
                    <span className="font-bold text-white text-xs">LIVE</span>
                  </>
                ) : (
                  <CalendarClock className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={`h-5 w-px ${
                  isLive ? "bg-primary/30" : "bg-white/30"
                }`}
              ></div>
              <div>
                {isLive ? (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-white">
                      Webinar Happening Now
                    </span>

                    <div
                      className={`h-4 w-px ${
                        isLive ? "bg-primary/30" : "bg-white/30"
                      }`}
                    ></div>

                    <a href="" className="text-white underline">
                      Click to Join
                    </a>
                  </div>
                ) : (
                  <span className="font-semibold text-white font-secondary text-xs">
                    Next Webinar: {timeLeft.hours}h {timeLeft.minutes}m{" "}
                    {timeLeft.seconds}s
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP ONLY: Original Component - UNTOUCHED */}
      <div className="hidden md:block">
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
      </div>
    </>
  );
};

export default WebinarStatus;