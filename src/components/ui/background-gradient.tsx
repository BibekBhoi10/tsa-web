import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  borderSize = "4px",
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  borderSize?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative", className)}>
      {/* Gradient Border Top */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          width: `calc(100% + ${borderSize})`,
          height: borderSize,
          top: 0,
          left: `-${borderSize}`,
        }}
        className={cn(
          "absolute",
          "bg-gradient-to-r from-[#00ccb1] to-[#7b61ff]"
        )}
      />
      {/* Gradient Border Right */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          width: borderSize,
          height: `calc(100% + ${borderSize})`,
          top: `-${borderSize}`,
          right: 0,
        }}
        className={cn(
          "absolute",
          "bg-gradient-to-b from-[#7b61ff] to-[#ffc414]"
        )}
      />
      {/* Gradient Border Bottom */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          width: `calc(100% + ${borderSize})`,
          height: borderSize,
          bottom: 0,
          left: `-${borderSize}`,
        }}
        className={cn(
          "absolute",
          "bg-gradient-to-l from-[#ffc414] to-[#00ccb1]"
        )}
      />
      {/* Gradient Border Left */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
          width: borderSize,
          height: `calc(100% + ${borderSize})`,
          top: `-${borderSize}`,
          left: 0,
        }}
        className={cn(
          "absolute",
          "bg-gradient-to-t from-[#ffc414] to-[#7b61ff]"
        )}
      />
      {/* Children Container */}
      <div className={cn("relative z-10 p-[4px]", className)}>{children}</div>
    </div>
  );
};
