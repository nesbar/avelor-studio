"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const links = [
  {
    name:"Главная",
    target:"hero",
  },
  {
    name:"Услуги",
    target:"services",
  },
  {
    name:"Проекты",
    target:"portfolio",
  },
   {
    name:"Как работаем",
    target:"process",
  },
  {
    name:"Студия",
    target:"/studio",
  },
];


export default function Header(){

  const [open,setOpen] = useState(false);



  const scrollToSection = (id:string)=>{


    if(id.startsWith("/")){

      window.location.href = id;

      setOpen(false);

      return;

    }



    if(window.location.pathname !== "/"){

      window.location.href = `/#${id}`;

      setOpen(false);

      return;

    }



    const element = document.getElementById(id);



    if(element){

      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        100;



      window.scrollTo({

        top:y,

        behavior:"smooth",

      });

    }


    setOpen(false);

  };



  return (

    <motion.header

      initial={{
        opacity:0,
        y:-20,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:1,
      }}

      className="
      fixed
      top-0
      left-0
      z-50
      w-full
      px-5
      pt-5

      md:px-12
      md:pt-8
      "

    >



      <div

        className="
        mx-auto
        flex
        items-center
        justify-between
        max-w-[1800px]
        rounded-full
        border
        border-white/[0.08]
        bg-black/[0.12]
        px-4
        py-3
        backdrop-blur-xl
        md:border-transparent
        md:bg-transparent
        md:px-0
        md:py-0
        "

      >



        <button

          onClick={()=>scrollToSection("hero")}

        >

          <h2

            className="
            text-lg
            font-light
            tracking-[0.35em]
            text-white

            md:text-2xl
            md:tracking-[0.5em]
            "

          >
            AVELOR
          </h2>


        </button>





        <nav

          className="
          hidden
          items-center
          gap-12

          rounded-full

          border
          border-white/10

          bg-white/[0.03]

          px-12
          py-4

          backdrop-blur-2xl

          lg:flex
          "

        >


          {links.map((link)=>(

            <button

              key={link.target}

              onClick={()=>scrollToSection(link.target)}

              className="
              text-[10px]
              tracking-[0.35em]
              text-white/50
              transition
              hover:text-white
              "

            >

              {link.name}

            </button>

          ))}


        </nav>





        <button

          onClick={()=>scrollToSection("contact")}

          className="
          hidden
          rounded-full
          border
          border-[#d6a85f]/40

          bg-white/[0.05]

          px-9
          py-4

          text-[10px]

          tracking-[0.35em]

          text-white

          transition

          hover:border-[#d6a85f]

          lg:block
          "

        >

          СВЯЗАТЬСЯ

        </button>





        <button

          onClick={()=>setOpen(!open)}

          className="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          border
          border-white/20

          bg-white/[0.04]

          lg:hidden
          "

        >

          <div className="space-y-1">

            <span className="block h-px w-4 bg-white"/>

            <span className="block h-px w-4 bg-white"/>

            <span className="block h-px w-4 bg-white"/>

          </div>


        </button>



      </div>





      <AnimatePresence>


        {open && (

          <motion.div

            initial={{
              opacity:0,
              y:-20,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            exit={{
              opacity:0,
              y:-20,
            }}

            className="
            absolute
            left-5
            right-5
            top-[80px]

            rounded-[35px]

            border
            border-white/10

            bg-[#08111f]/90

            p-8

            backdrop-blur-xl

            lg:hidden
            "

          >



            <div

              className="
              flex
              flex-col
              gap-6
              "

            >

              {links.map((link)=>(

                <button

                  key={link.target}

                  onClick={()=>scrollToSection(link.target)}

                  className="
                  text-left
                  text-[11px]
                  tracking-[0.4em]
                  text-white/70
                  "

                >

                  {link.name}

                </button>

              ))}



              <button

                onClick={()=>scrollToSection("contact")}

                className="
                rounded-full
                border
                border-[#d6a85f]/40
                py-4
                text-[10px]
                tracking-[0.4em]
                text-white
                "

              >

                СВЯЗАТЬСЯ

              </button>


            </div>


          </motion.div>

        )}


      </AnimatePresence>



    </motion.header>

  );

}