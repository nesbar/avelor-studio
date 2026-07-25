"use client";

import { motion } from "framer-motion";


export default function HeroBottomFade() {


  return (

    <>





      {/* нижний атмосферный туман */}



      <motion.div


        animate={{


          opacity:[

            0.2,

            0.4,

            0.2

          ]


        }}



        transition={{


          duration:8,

          repeat:Infinity,

          ease:"easeInOut"


        }}



        className="
        absolute
        bottom-[-150px]
        left-1/2
        z-10
        h-[400px]
        w-[900px]
        -translate-x-1/2
        rounded-full
        bg-gradient-to-r
        from-[#77858A]/20
        via-[#D6A85F]/15
        to-[#5145A8]/20
        blur-[170px]
        "

      />









      {/* плавный переход к следующей секции */}



      <div


        className="
        absolute
        bottom-0
        left-0
        z-20
        h-[250px]
        w-full
        bg-gradient-to-t
        from-[#10161B]
        via-[#10161B]/60
        to-transparent
        "

      />









      {/* индикатор скролла */}



      <motion.div



        animate={{


          y:[

            0,

            12,

            0

          ]


        }}



        transition={{


          duration:2,

          repeat:Infinity,

          ease:"easeInOut"


        }}



        className="
        absolute
        bottom-10
        left-1/2
        z-30
        flex
        -translate-x-1/2
        flex-col
        items-center
        gap-3
        "

      >





        <span


          className="
          text-[9px]
          tracking-[0.5em]
          text-white/40
          "

        >

          SCROLL

        </span>






        <div


          className="
          h-10
          w-px
          bg-[#D6A85F]/40
          "

        />




      </motion.div>





    </>

  );

}