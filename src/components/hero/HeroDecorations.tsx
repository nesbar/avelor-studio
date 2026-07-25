"use client";

import { motion } from "framer-motion";


export default function HeroDecorations() {

  return (

    <div
      className="
      absolute
      inset-0
      z-0
      overflow-hidden
      pointer-events-none
      "
    >


      {/* ФИОЛЕТОВОЕ СВЕЧЕНИЕ */}

      <motion.div

        animate={{
          scale:[1,1.08,1]
        }}

        transition={{
          duration:14,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
        absolute

        left-[10%]
        top-[15%]

        h-[400px]
        w-[400px]

        md:h-[700px]
        md:w-[700px]

        rounded-full

        bg-[#8b5cff]/20

        blur-[100px]

        md:blur-[180px]

        "
      />



      {/* ЗОЛОТО */}

      <motion.div

        animate={{
          scale:[1,1.05,1]
        }}

        transition={{
          duration:12,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
        absolute

        right-[5%]
        top-[25%]

        h-[350px]
        w-[350px]

        md:h-[600px]
        md:w-[600px]

        rounded-full

        bg-[#d6a85f]/20

        blur-[100px]

        md:blur-[170px]

        "

      />




      {/* НИЖНИЙ ТУМАН */}

      <div

        className="
        absolute

        left-[25%]

        bottom-[-150px]

        h-[450px]

        w-[450px]

        md:h-[650px]

        md:w-[650px]

        rounded-full

        bg-[#42c6d9]/15

        blur-[120px]

        "

      />




      {/* ОРБИТА ТОЛЬКО ПК */}

      <motion.div

        animate={{
          rotate:360
        }}

        transition={{
          duration:100,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
        hidden
        md:block

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




      {/* СТЕКЛЯННАЯ СФЕРА */}

      <motion.div

        animate={{
          y:[0,20,0]
        }}

        transition={{
          duration:10,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
        hidden
        md:block

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




      {/* ЧАСТИЦЫ - меньше */}

      {Array.from({length:8}).map((_,i)=>(

        <motion.span

          key={i}

          animate={{

            y:[0,-50,0],

            opacity:[
              0.2,
              0.7,
              0.2
            ]

          }}

          transition={{

            duration:6,

            repeat:Infinity,

            delay:i*0.4

          }}

          className="
          absolute

          h-[3px]

          w-[3px]

          rounded-full

          bg-[#d6a85f]

          "

          style={{

            left:`${(i*37)%100}%`,

            top:`${(i*53)%100}%`

          }}

        />

      ))}



    </div>

  );

}