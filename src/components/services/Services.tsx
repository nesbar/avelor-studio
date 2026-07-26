"use client";

import { motion } from "framer-motion";

import {
  Globe,
  Gamepad2,
  PenTool,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number:"01",
    title:"ВЕБ-РАЗРАБОТКА",
    text:"Современные, быстрые и адаптивные сайты на любых платформах.",
    icon:Globe,
    shape:"rounded-[65px_35px_65px_35px]",
  },
  {
    number:"02",
    title:"РАЗРАБОТКА ИГР",
    text:"2D, 3D, Unity, Unreal Engine — от идеи до готового проекта.",
    icon:Gamepad2,
    shape:"rounded-[35px_70px_35px_70px]",
  },
  {
    number:"03",
    title:"ДИЗАЙН",
    text:"Уникальный дизайн, который раскрывает ценность вашего бренда.",
    icon:PenTool,
    shape:"rounded-[70px_35px_70px_35px]",
  },
  {
    number:"04",
    title:"ПОДДЕРЖКА",
    text:"Техническая поддержка и развитие ваших проектов.",
    icon:Headphones,
    shape:"rounded-[35px_65px_35px_65px]",
  },
];

const dots = [
  {x:"10%",y:"15%"},
  {x:"25%",y:"80%"},
  {x:"55%",y:"20%"},
  {x:"85%",y:"30%"},
  {x:"90%",y:"75%"},
];

export default function Services(){

  return (

    <section
      id="services"
      className="
      relative
      z-10
      -mt-px
      overflow-hidden
      bg-transparent
      px-6
      py-24
      md:px-12
      "
    >
   

      {dots.map((dot,index)=>(

        <motion.span
          key={index}
          className="
          absolute
          h-1
          w-1
          rounded-full
          bg-[#D6A85F]
          shadow-[0_0_20px_#D6A85F]
          "
          style={{
            left:dot.x,
            top:dot.y,
          }}
          animate={{
            opacity:[0.3,1,0.3],
            scale:[1,1.8,1],
          }}
          transition={{
            duration:3+index,
            repeat:Infinity,
          }}
        />

      ))}


      <div
        className="
        relative
        z-10
        mx-auto
        max-w-[1500px]
        "
      >

        <div
          className="
          mb-14
          flex
          flex-col
          gap-8

          lg:mb-20
          lg:flex-row
          lg:items-end
          lg:justify-between
          "
        >

          <div>

            <p
              className="
              text-[10px]
              tracking-[0.55em]
              text-[#c49a5a]

              md:text-[11px]
              md:tracking-[0.6em]
              "
            >
              ЧТО МЫ ДЕЛАЕМ
            </p>


            <div
              className="
              mt-6
              h-px
              w-20
              bg-[#c49a5a]/50
              "
            />

          </div>


          <div
            className="
            text-left
            text-[10px]
            tracking-[0.4em]
            text-white/30

            lg:text-right
            "
          >
            AVELOR
            <br/>
            DIGITAL SYSTEM
          </div>

        </div>

                <div
          className="
          grid
          grid-cols-1
          gap-12
          items-start

          lg:grid-cols-[320px_1fr]
          "
        >

          <div>

            <p
              className="
              text-base
              leading-8
              text-white/60

              md:text-lg
              md:leading-9
              "
            >
              Создаём цифровые продукты,
              где дизайн встречается
              с технологиями.
            </p>


            <p
              className="
              mt-6
              text-sm
              leading-7
              text-white/40

              md:mt-8
              "
            >
              От первой идеи
              до готового решения.
            </p>


            <div
              className="
              mt-10
              text-[10px]
              tracking-[0.5em]
              text-[#c49a5a]

              md:mt-12
              "
            >
              2026 / DIGITAL LAB
            </div>

          </div>



          <div
            className="
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2
            md:gap-8
            "
          >

            {services.map((service,index)=>{

              const Icon = service.icon;

              return (

                <motion.div

                  key={service.title}

                  

                  whileHover={{
                    y:-10,
                    scale:1.03
                  }}

                  viewport={{
                    once:true,
                    amount:.2
                  }}

                  transition={{
                    duration:.7,
                    delay:index*.12,
                    ease:"easeOut"
                  }}

                  className={`
                  group
                  relative
                  h-[260px]
                  overflow-hidden

                  ${service.shape}
                  border
                  
                  border-[#c49a5a]/25
                  bg-gradient-to-br
                  from-white/[0.14]
                  via-white/[0.07]
                  to-transparent
                  backdrop-blur-2xl
                  transition-all
                  hover:border-[#c49a5a]/70
                  hover:shadow-[0_0_80px_rgba(196,154,90,0.2)]
                  `}

                >


                  <motion.div
                    animate={{
                      scale:[1,1.15,1]
                    }}

                    transition={{
                      duration:8,
                      repeat:Infinity,
                      ease:"easeInOut"
                    }}

                    className="
                    absolute
                    right-[-80px]
                    top-[-80px]
                    h-64
                    w-64
                    rounded-full
                    bg-[#D6A85F]/20
                    blur-[100px]

                    group-hover:bg-[#D6A85F]/40

                    transition
                    "
                  />


                  <div
                    className="
                    relative
                    z-10

                    flex
                    h-full
                    flex-col

                    p-7

                    md:p-8
                    "
                  >

                    <Icon
                      size={32}
                      strokeWidth={1}
                      className="
                      text-[#e2c38a]

                      md:h-9
                      md:w-9
                      "
                    />


                    <h3
                      className="
                      mt-8
                      text-xs
                      tracking-[0.25em]
                      text-white

                      md:mt-10
                      md:text-sm
                      md:tracking-[0.3em]
                      "
                    >
                      {service.title}
                    </h3>


                    <p
                      className="
                      mt-4
                      max-w-[260px]
                      text-xs
                      leading-6
                      text-white/50
                      "
                    >
                      {service.text}
                    </p>

                                        <div
                      className="
                      mt-auto
                      flex
                      justify-end
                      "
                    >

                      <div
                        className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-full

                        border

                        border-[#c49a5a]/40

                        text-[#c49a5a]

                        transition

                        group-hover:bg-[#c49a5a]

                        group-hover:text-[#071522]
                        "
                      >

                        <ArrowUpRight size={17}/>

                      </div>

                    </div>


                  </div>


                  <div
                    className="
                    absolute
                    bottom-2
                    left-8

                    text-[80px]

                    font-light

                    text-white/[0.05]


                    md:text-[100px]
                    "
                  >
                    {service.number}
                  </div>


                </motion.div>

              )

            })}

          </div>


        </div>


      </div>


    </section>

  );

}