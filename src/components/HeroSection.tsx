"use client";
 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Button } from "./ui/moving-border";
 
export function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Welcome To CodeCrafters
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis corporis cum nam, saepe accusantium molestias deleniti magni eaque sint amet rem, dolorum explicabo dicta similique? Numquam obcaecati corrupti libero.
        </div>
        <Button >
          Join Now
        </Button>
      </motion.div>
    </AuroraBackground>
  );
}

export default HeroSection