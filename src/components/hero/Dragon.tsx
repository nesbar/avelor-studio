"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function Dragon() {


  return (


    <motion.div


      initial={{

        opacity:0,
        scale:.9

      }}



      animate={{

        opacity:1,
        scale:1,
        y:[0,-12,0]

      }}



      transition={{


        opacity:{

          duration:1.5

        },


        scale:{

          duration:1.5

        },


        y:{

          duration:8,
          repeat:Infinity,
          ease:"easeInOut"

        }


      }}




      className="
      absolute
      left-[57%]
      top-[55%]
      z-10

      h-[700px]
      w-[700px]

      -translate-x-1/2
      -translate-y-1/2

      md:h-[1050px]
      md:w-[1050px]
      "

    >





      {/* свечение вокруг дракона */}


      <div

        className="
        absolute
        inset-[15%]
        rounded-full
        bg-gradient-to-r
        from-[#D4AE6A]/20
        via-[#E8E2D8]/10
        to-[#77858A]/20
        blur-[130px]
        "

      />






      <Image

        src="/images/hero/hero-dragon.png"

        alt="Фэнтези дракон Avelor"

        fill

        priority

        className="
        object-contain
        drop-shadow-[0_0_120px_rgba(212,174,106,0.35)]
        "

      />




    </motion.div>


  );

}