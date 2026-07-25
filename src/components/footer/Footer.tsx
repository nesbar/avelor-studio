"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden
      border-t
      border-white/10
      px-6
      py-14

      md:px-12
      md:py-16
      "
    >

      <div
        className="
        absolute
        left-1/2
        top-0
        h-[300px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-[#d6a85f]/10
        blur-[140px]
        "
      />

      <motion.div
        initial={{
          opacity:0
        }}
        whileInView={{
          opacity:1
        }}
        viewport={{
          once:true
        }}
        className="
        pointer-events-none
        absolute
        bottom-[-30px]
        left-1/2
        -translate-x-1/2
        text-[130px]
        font-light
        tracking-[0.25em]
        text-white/[0.03]

        md:text-[220px]
        "
      >
        AVELOR
      </motion.div>

      <div
        className="
        relative
        z-10
        mx-auto
        max-w-[1700px]
        "
      >

        <div
          className="
          mb-10
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#d6a85f]/40
          to-transparent
          "
        />

        <div
          className="
          flex
          flex-col
          gap-10

          md:flex-row
          md:items-center
          md:justify-between
          "
        >

          <div>
            <h3
              className="
              text-2xl
              font-light
              tracking-[0.45em]
              text-white

              md:text-3xl
              "
            >
              AVELOR
            </h3>

            <p
              className="
              mt-3
              text-[9px]
              tracking-[0.65em]
              text-white/40
              "
            >
              ЦИФРОВАЯ СТУДИЯ
            </p>
          </div>

          <div
            className="
            flex
            flex-wrap
            gap-6

            md:gap-10
            "
          >
            {[
              
              
            ].map((item)=>(

              <a
                key={item}
                href="#"
                className="
                text-[10px]
                tracking-[0.35em]
                text-white/50
                transition
                hover:text-[#d6a85f]
                "
              >
                {item}
              </a>

            ))}
          </div>

          <p
            className="
            text-[10px]
            tracking-[0.3em]
            text-white/30
            "
          >
            © 2026 AVELOR
          </p>

        </div>

      </div>

    </footer>
  );
}