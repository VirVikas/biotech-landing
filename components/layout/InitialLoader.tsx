"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MINIMUM_DISPLAY_TIME = 700;

export function InitialLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const finishLoading = () => {
      const remainingTime = Math.max(
        0,
        MINIMUM_DISPLAY_TIME - (performance.now() - startedAt)
      );

      timeoutId = setTimeout(() => setVisible(false), remainingTime);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="initial-loader"
          role="status"
          aria-live="polite"
          aria-label="Loading Nexora Bio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#05131D]"
        >
          <div className="flex flex-col items-center">
            <div aria-hidden="true" className="nexora-loader relative h-24 w-24">
              <span className="nexora-loader__halo absolute inset-[22px] rounded-full bg-[#18E8CF]/15 blur-xl" />
              <span className="nexora-loader__orbit absolute inset-2 rounded-full border border-[#18E8CF]/15">
                <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#18E8CF]" />
              </span>
              <span className="nexora-loader__orbit nexora-loader__orbit--reverse absolute inset-[18px] rounded-full border border-[#6AA8FF]/15">
                <span className="absolute bottom-[-2px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#6AA8FF]" />
              </span>
              <span className="nexora-loader__core absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#18E8CF]/70 bg-[#18E8CF]/20" />
            </div>

            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.32em] text-white/70">
              Nexora Bio
            </p>
            <span aria-hidden="true" className="mt-3 h-px w-16 overflow-hidden bg-white/10">
              <span className="nexora-loader__signal block h-full w-1/2 bg-[#18E8CF]/80" />
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
