"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";


export default function Background() {

  const purple = useRef<HTMLDivElement>(null);
  const gold = useRef<HTMLDivElement>(null);
  const blue = useRef<HTMLDivElement>(null);
  const center = useRef<HTMLDivElement>(null);


  useEffect(() => {

    const isMobile = window.innerWidth < 768;


    if (isMobile) return;


    const ctx = gsap.context(() => {


      gsap.to(purple.current, {

        x:40,
        y:30,

        duration:18,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

      });



      gsap.to(gold.current, {

        x:-60,
        y:40,

        duration:22,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

      });



      gsap.to(blue.current, {

        y:-50,

        duration:14,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

      });



      gsap.to(center.current, {

        scale:1.08,

        duration:12,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

      });


    });


    return () => ctx.revert();


  },[]);



  return (

    <div
      className="
      pointer-events-none
      fixed
      inset-0
      z-0
      overflow-hidden
      bg-[#03060D]
      "
    >


      {/* основной фон */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#02040A]
        via-[#07101C]
        to-[#030711]
        "
      />



      {/* тяжелые свечения только ПК */}

      <div
        ref={center}
        className="
        hidden
        md:block

        absolute

        left-[55%]
        top-[38%]

        h-[850px]
        w-[850px]

        -translate-x-1/2
        -translate-y-1/2

        rounded-full

        bg-gradient-to-r

        from-[#5145A8]/25

        via-[#7FA6C9]/20

        to-[#D6A85F]/15

        blur-[180px]
        "
      />



      <div
        ref={purple}
        className="
        hidden
        md:block

        absolute

        left-[-250px]

        top-[10%]

        h-[650px]

        w-[650px]

        rounded-full

        bg-[#5145A8]/20

        blur-[170px]

        "
      />



      <div
        ref={gold}
        className="
        hidden
        md:block

        absolute

        right-[-250px]

        top-[20%]

        h-[600px]

        w-[600px]

        rounded-full

        bg-[#D6A85F]/15

        blur-[170px]

        "
      />



      <div
        ref={blue}
        className="
        hidden
        md:block

        absolute

        left-[30%]

        bottom-[-200px]

        h-[650px]

        w-[700px]

        rounded-full

        bg-[#2F7285]/15

        blur-[170px]

        "
      />



      {/* затемнение */}

      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]

        "
      />



      {/* точки */}

      <div

        className="
        absolute
        inset-0
        opacity-[0.03]
        "

        style={{

          backgroundImage:
          "radial-gradient(circle, white 1px, transparent 1px)",

          backgroundSize:"8px 8px"

        }}

      />


    </div>

  );

}