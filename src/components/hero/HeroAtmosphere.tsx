"use client";

import { motion } from "framer-motion";


export default function HeroAtmosphere() {


  return (

    <div

      className="
      absolute
      inset-0
      overflow-hidden
      pointer-events-none
      "

    >





      {/* глубокий тёмно-синий фон */}


      <div

        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#03060D]
        via-[#07101C]
        to-[#0A1422]
        "

      />









      {/* глубокое фиолетовое свечение */}



      <motion.div

        animate={{

          x:[-40,40,-40],
          y:[0,30,0]

        }}


        transition={{

          duration:18,
          repeat:Infinity,
          ease:"easeInOut"

        }}



        className="
        absolute
        left-[15%]
        top-[15%]
        h-[700px]
        w-[700px]
        rounded-full
        bg-[#5145A8]/25
        blur-[200px]
        "

      />









      {/* холодное стальное свечение */}



      <div

        className="
        absolute
        left-[45%]
        top-[35%]
        h-[850px]
        w-[850px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#7FA6C9]/15
        blur-[200px]
        "

      />









      {/* золотое свечение */}



      <motion.div

        animate={{

          scale:[1,1.15,1]

        }}


        transition={{

          duration:10,
          repeat:Infinity,
          ease:"easeInOut"

        }}



        className="
        absolute
        right-[10%]
        top-[25%]
        h-[550px]
        w-[550px]
        rounded-full
        bg-[#D6A85F]/20
        blur-[170px]
        "

      />









      {/* нижний холодный свет */}



      <div

        className="
        absolute
        left-[25%]
        bottom-[-150px]
        h-[600px]
        w-[600px]
        rounded-full
        bg-[#2F7285]/15
        blur-[180px]
        "

      />









      {/* тёмный туман вокруг дракона */}



      <motion.div


        animate={{


          x:[-60,60,-60]


        }}


        transition={{


          duration:25,
          repeat:Infinity,
          ease:"easeInOut"


        }}



        className="
        absolute
        left-[45%]
        top-[45%]
        h-[500px]
        w-[900px]
        -translate-x-1/2
        rounded-full
        bg-[#101827]/50
        blur-[140px]
        "

      />









      {/* частицы */}



      {

        Array.from({length:35}).map((_,i)=>(


          <motion.span

            key={i}


            animate={{


              y:[0,-50,0],
              opacity:[0.15,0.8,0.15]


            }}



            transition={{


              duration:4+(i%5),
              repeat:Infinity,
              delay:i*0.2


            }}



            className="
            absolute
            rounded-full
            bg-white
            shadow-[0_0_20px_rgba(255,255,255,.8)]
            "



            style={{


              width:i%5===0?"4px":"2px",

              height:i%5===0?"4px":"2px",

              left:`${(i*31)%100}%`,

              top:`${(i*47)%100}%`


            }}


          />


        ))

      }





    </div>

  );

}