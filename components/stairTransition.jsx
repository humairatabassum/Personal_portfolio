'use client';

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stair from "./stair";

const StairTransition = () => {

    const pathname = usePathname();

  return (
      <>
          <AnimatePresence mode="wait">
              <div key={pathname}>
                  <div className="h-screen w-screen fixed top-0 right-0 left-0 pointer-events-none z-40 flex">
                      <Stair/>
                  </div>
              </div>
          </AnimatePresence>
      </>
  )
}

export default StairTransition