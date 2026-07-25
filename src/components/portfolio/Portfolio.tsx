"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title:"ECLIPSE REALMS",
    category:"ВЕБ-САЙТ",
    image:"/images/portfolio/eclipse.jpg",
  },
  {
    title:"DAWN OF LEGENDS",
    category:"МОБИЛЬНАЯ ИГРА",
    image:"/images/portfolio/dawn.jpg",
  },
  {
    title:"DASHBOARD PRO",
    category:"ВЕБ-ПРИЛОЖЕНИЕ",
    image:"/images/portfolio/dashboard.jpg",
  },
  {
    title:"FARM TYCOON",
    category:"МОБИЛЬНАЯ ИГРА",
    image:"/images/portfolio/farm.jpg",
  },
];

export default function Portfolio(){

  return (
    <section
      id="portfolio"
      className="
      relative
      overflow-hidden
      bg-transparent
      px-6
      py-32

      md:px-12
      "
    >

      <div
        className="
        absolute
        left-[20%]
        top-[10%]
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#d6a85f]/0
        blur-[160px]
        "
      />

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        max-w-[1700px]
        flex-col
        gap-12

        lg:flex-row
        "
      >

        <motion.div
          initial={{
            opacity:0,
            x:-40
          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:.8
          }}
          className="
          w-full

          lg:w-[260px]

          lg:shrink-0
          "
        >

          <p
            className="
            text-[10px]
            tracking-[0.55em]
            text-[#d6a85f]

            md:text-[11px]
            "
          >
            ПОРТФОЛИО
          </p>

          <div
            className="
            mt-6
            h-px
            w-14
            bg-[#d6a85f]/50
            "
          />

          <p
            className="
            mt-8
            max-w-[300px]
            text-sm
            leading-7
            text-white/50
            "
          >
            Каждый проект —
            это история, которую
            мы рассказываем через
            код, дизайн и технологии.
          </p>

          <button
            className="
            mt-10
            rounded-full
            border
            border-white/20
            bg-white/[0.05]
            px-7
            py-4
            text-[10px]
            tracking-[0.3em]
            text-white
            backdrop-blur-xl
            transition

            hover:border-[#d6a85f]/50
            hover:text-[#d6a85f]
            "
          >
            СМОТРЕТЬ ВСЕ ПРОЕКТЫ
          </button>

        </motion.div>


        <div
          className="
          grid
          w-full
          grid-cols-1
          gap-5

          sm:grid-cols-2

          lg:grid-cols-4
          "
        >

          {projects.map((project,index)=>(

            <motion.div
              key={project.title}

              initial={{
                opacity:0,
               
                scale:.96
              }}

              whileInView={{
                opacity:1,
                
                scale:1
              }}

              viewport={{
                once:true,
                amount:.2
              }}

              transition={{
                duration:.7,
                delay:index*.15,
                ease:"easeOut"
              }}

              whileHover={{
                
                scale:1.02
              }}

              className="
              group
              relative
              h-[300px]

              overflow-hidden

              rounded-[35px]

              border
              border-white/30

              bg-white/[0.05]

              backdrop-blur-xl

              transition-all

              shadow-[0_0_50px_rgba(255,255,255,0.10)]

              hover:border-white/70

              hover:shadow-[0_0_100px_rgba(255,255,255,0.30)]

              md:h-[330px]
              "
            >

              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="
                (max-width:640px) 100vw,
                (max-width:1024px) 50vw,
                25vw
                "
                className="
                object-cover
                transition-all
                duration-1000
                group-hover:scale-110
                group-hover:rotate-1
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-[#d6a85f]/0
                transition
                duration-500
                group-hover:bg-[#d6a85f]/10
                "
              />

                            <motion.div
                initial={{
                  opacity:0,
                  y:20
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  duration:.6,
                  delay:index*.15+0.2
                }}

                className="
                absolute
                bottom-6
                left-6
                right-6
                "
              >

                <h3
                  className="
                  text-xs
                  tracking-[0.15em]
                  text-white

                  md:text-sm
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  mt-2
                  text-[10px]
                  tracking-[0.3em]
                  text-white/50
                  "
                >
                  {project.category}
                </p>

              </motion.div>


              <motion.button
                whileHover={{
                  rotate:90,
                  scale:1.15
                }}

                transition={{
                  duration:.3
                }}

                className="
                absolute
                bottom-5
                right-5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/30
                text-white
                backdrop-blur-xl
                transition

                group-hover:border-[#d6a85f]

                group-hover:text-[#d6a85f]
                "
              >
                +
              </motion.button>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}