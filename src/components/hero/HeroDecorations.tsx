"use client";

import { motion } from "framer-motion";

export default function HeroDecorations() {
  return (
    <div
      className="
        absolute
        inset-0
        z-0
        overflow-visible
        pointer-events-none
        "
    >

      {/* большое фиолетовое свечение */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        left-[25%]
        top-[10%]
        h-[700px]
        w-[700px]
        rounded-full
        bg-[#8b5cff]/25
        blur-[180px]
        "
      />


      {/* золотой свет */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        right-[5%]
        top-[30%]
        h-[600px]
        w-[600px]
        rounded-full
        bg-[#d6a85f]/25
        blur-[170px]
        "
      />


      {/* бирюзовый туман снизу */}

      <motion.div
        animate={{
          y: [0, -30, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        left-[35%]
        bottom-[-200px]
        h-[650px]
        w-[650px]
        rounded-full
        bg-[#42c6d9]/20
        blur-[180px]
        "
      />


      {/* красно-оранжевый оттенок */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        right-[25%]
        bottom-[15%]
        h-[350px]
        w-[350px]
        rounded-full
        bg-[#ff795b]/20
        blur-[140px]
        "
      />


      {/* большая орбита */}

      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear"
        }}
        className="
        absolute
        left-[55%]
        top-[50%]
        h-[900px]
        w-[900px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-white/[0.08]
        "
      />


      {/* золотая орбита */}

      <motion.div
        animate={{
          rotate: -360
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        className="
        absolute
        left-[55%]
        top-[50%]
        h-[650px]
        w-[650px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-[#d6a85f]/20
        "
      />


      {/* кристалл */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [45, 55, 45]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        left-[18%]
        bottom-[18%]
        h-[180px]
        w-[180px]
        rounded-[35px]
        border
        border-[#d6a85f]/20
        bg-white/[0.03]
        backdrop-blur-xl
        "
      />


      {/* стеклянная сфера */}

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
        absolute
        right-[18%]
        top-[18%]
        h-[230px]
        w-[230px]
        rounded-full
        border
        border-white/10
        bg-white/[0.02]
        backdrop-blur-xl
        "
      />


      {/* магические частицы */}

      {Array.from({ length: 25 }).map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -80, 0],
            opacity: [0.1, 0.8, 0.1]
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="
          absolute
          rounded-full
          bg-[#d6a85f]
          shadow-[0_0_25px_#d6a85f]
          "
          style={{
            width: i % 5 === 0 ? "5px" : "2px",
            height: i % 5 === 0 ? "5px" : "2px",
            left: `${(i * 29) % 100}%`,
            top: `${(i * 47) % 100}%`
          }}
        />
      ))}

    </div>
  );
}