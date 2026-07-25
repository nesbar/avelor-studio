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

      <div
        className="
        absolute

        left-[-80px]
        top-[15%]

        h-[420px]
        w-[420px]

        rounded-full

        bg-[#8b5cff]/20

        blur-[120px]

        transform-gpu

        md:left-[10%]
        md:h-[700px]
        md:w-[700px]
        md:blur-[180px]

        "
      />



      {/* ЗОЛОТОЕ СВЕЧЕНИЕ */}

      <div
        className="
        absolute

        right-[-120px]

        top-[30%]


        h-[350px]

        w-[350px]


        rounded-full


        bg-[#d6a85f]/20


        blur-[120px]


        transform-gpu



        md:right-[5%]

        md:h-[600px]

        md:w-[600px]

        md:blur-[170px]

        "
      />





      {/* НИЖНИЙ ТУМАН */}

      <div

        className="
        absolute


        left-[20%]


        bottom-[-180px]


        h-[450px]


        w-[450px]


        rounded-full


        bg-[#42c6d9]/15


        blur-[130px]


        transform-gpu


        md:h-[650px]

        md:w-[650px]


        "

      />






      {/* ОРБИТЫ ТОЛЬКО ПК */}

      <motion.div

        animate={{
          rotate:360
        }}

        transition={{
          duration:120,
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






      <motion.div

        animate={{
          rotate:-360
        }}

        transition={{
          duration:90,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
        hidden

        md:block


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







      {/* СФЕРА ТОЛЬКО ПК */}

      <motion.div

        animate={{
          y:[0,20,0]
        }}

        transition={{
          duration:12,
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






      {/* ЛЁГКИЕ ЧАСТИЦЫ */}

      {Array.from({length:6}).map((_,i)=>(

        <span

          key={i}

          className="
          absolute

          h-[3px]

          w-[3px]

          rounded-full

          bg-[#d6a85f]

          opacity-60

          "

          style={{

            left:`${(i*41)%100}%`,

            top:`${(i*37)%100}%`

          }}

        />

      ))}




    </div>

  );

}