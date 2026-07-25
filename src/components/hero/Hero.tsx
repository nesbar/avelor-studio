"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroDecorations from "./HeroDecorations";


export default function Hero() {


  const { scrollY } = useScroll();


  const textY = useTransform(
    scrollY,
    [0,600],
    [0,-80]
  );


  const textOpacity = useTransform(
    scrollY,
    [0,500],
    [1,0]
  );



  return (

    <section

      id="hero"
      className="
      relative
      min-h-screen
      overflow-visible
      bg-transparent
      mb-[-1px]
      "

    >


      <HeroDecorations />



      <div

        className="
        relative
        z-20
        mx-auto
        min-h-[100svh]
        max-w-[1800px]
        "

      >



        {/* ТЕКСТ */}


        <motion.div


          initial={{
            opacity:0,
            x:-40
          }}


          animate={{
            opacity:1,
            x:0
          }}


          transition={{
            duration:1
          }}


          style={{
            y:textY,
            opacity:textOpacity
          }}


          className="
          absolute

          left-5
          top-[90px]

          z-30

          w-[280px]


          sm:w-[300px]


          md:left-10
          md:top-1/2
          md:w-[300px]
          md:-translate-y-1/2


          xl:left-16
          xl:w-[360px]

          "

        >


          <p

            className="
            text-[10px]
            tracking-[0.65em]
            text-[#D4AE6A]

            md:text-[11px]
            "

          >

            AVELOR STUDIO

          </p>




          <h1

            className="
            mt-8

            text-[34px]

            font-light

            leading-[0.92]

            tracking-tight

            text-[#E8E2D8]


            sm:text-[38px]


            md:text-[48px]


            xl:mt-10

            xl:text-[62px]

            "

          >

            СОЗДАЁМ

            <br />


            <span className="text-[#D8D2C7]">

              ЦИФРОВЫЕ

            </span>


            <br />


            МИРЫ


          </h1>




          <div

            className="
            mt-6

            max-w-[270px]

            rounded-xl

            bg-black/25

            px-4

            py-3

            backdrop-blur-sm


            md:max-w-[300px]


            xl:max-w-[330px]

            xl:mt-8

            "

          >


            <p

              className="
              text-[11px]

              leading-5

              text-[#F0ECE4]

              drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]


              xl:text-sm

              xl:leading-7

              "

            >

              Создаём цифровые пространства,
              сайты и игровые миры
              с уникальной атмосферой.

            </p>


          </div>





          <a

            href="#contact"

            className="
            group

            relative

            mt-5

            inline-flex

            overflow-hidden

            rounded-full

            border

            border-[#D4AE6A]/40

            bg-black/20

            px-9

            py-4

            text-[10px]

            tracking-[0.35em]

            text-[#E8E2D8]

            backdrop-blur-xl

            "

          >


            <span

              className="
              absolute

              inset-0

              translate-x-[-100%]

              bg-[#D4AE6A]/20

              transition

              group-hover:translate-x-0

              "

            />


            <span className="relative">

              НАЧАТЬ

            </span>


          </a>



        </motion.div>






        {/* ДРАКОН */}



        <div

className="
absolute

left-[12%]

top-[78%]

z-10

pointer-events-none


h-[270px]

w-[270px]


-translate-x-1/2

-translate-y-1/2



sm:left-[25%]

sm:top-[72%]

sm:h-[420px]

sm:w-[420px]



md:left-[55%]

md:top-[58%]

md:h-[700px]

md:w-[700px]



xl:top-[55%]

xl:h-[1050px]

xl:w-[1050px]

"

>



          <motion.div


            animate={{


              y:[
                0,
                -25,
                0
              ],


              scale:[
                1,
                1.015,
                1
              ]


            }}



            transition={{


              duration:8,

              repeat:Infinity,

              ease:"easeInOut"


            }}



            className="
            relative

            h-full

            w-full

            will-change-transform

            "

          >



            <div

              className="
              absolute

              inset-[15%]

              rounded-full


              bg-gradient-to-r


              from-[#D4AE6A]/20


              via-[#E8E2D8]/10


              to-[#77858A]/20


              blur-[100px]

              "

            />





            <Image


              src="/images/hero/hero-dragon1.webp"


              alt="Фэнтези дракон Avelor"


              fill


              loading="lazy"


              sizes="(max-width:768px) 300px, 900px"


              className="
              object-contain

              drop-shadow-[0_0_120px_rgba(212,174,106,0.35)]

              "

            />


          </motion.div>



        </div>






        {/* СТАТИСТИКА */}



        <motion.div


          initial={{

            opacity:0,

            x:40,

            y:40

          }}


          animate={{

            opacity:1,

            x:0,

            y:0

          }}


          transition={{

            duration:1,

            delay:.4

          }}



          className="

          absolute


          right-2

          top-[70%]


          z-30


          w-[115px]


          -translate-y-1/2


          rounded-[30px]


          border

          border-[#D4AE6A]/35



          bg-white/[0.08]


          p-4


          backdrop-blur-xl





          md:right-8

          md:top-[65%]

          md:w-[150px]


          md:p-6




          xl:right-16

          xl:top-1/2

          xl:w-[190px]

          xl:p-8


          "

        >


          {[

            ["50+","ИДЕЙ"],

            ["30+","РЕШЕНИЙ"],

            ["100%","КАЧЕСТВО"]

          ].map((item,index)=>(


            <div key={item[1]}>


              <p

                className="
                text-2xl

                font-light

                text-[#E8E2D8]


                md:text-4xl

                xl:text-5xl

                "

              >

                {item[0]}

              </p>


              <span

                className="
                text-[7px]

                tracking-[0.4em]

                text-[#D4AE6A]

                "

              >

                {item[1]}

              </span>


              {index !== 2 && (

                <div

                  className="
                  my-4

                  h-px

                  bg-gradient-to-r

                  from-transparent

                  via-[#D4AE6A]/40

                  to-transparent

                  "

                />

              )}


            </div>


          ))}



        </motion.div>



      </div>


    </section>


  );

}