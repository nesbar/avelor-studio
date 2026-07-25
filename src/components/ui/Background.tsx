"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


export default function Background() {

  const purple = useRef<HTMLDivElement>(null);
  const gold = useRef<HTMLDivElement>(null);
  const blue = useRef<HTMLDivElement>(null);
  const center = useRef<HTMLDivElement>(null);

  const [mobile,setMobile] = useState(false);


  useEffect(()=>{

    const checkMobile = () => {
      setMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );


    return()=>{

      window.removeEventListener(
        "resize",
        checkMobile
      );

    };


  },[]);



  useEffect(()=>{


    if(mobile) return;


    const ctx = gsap.context(()=>{


      gsap.to(purple.current,{
        x:40,
        y:30,
        duration:18,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
      });



      gsap.to(gold.current,{
        x:-60,
        y:40,
        duration:22,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
      });



      gsap.to(blue.current,{
        y:-50,
        duration:14,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
      });



      gsap.to(center.current,{
        scale:1.12,
        duration:12,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
      });


    });


    return()=>ctx.revert();


  },[mobile]);



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


      {mobile ? (

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#071522]
          via-[#03060D]
          to-[#02040A]
          "
        />

      ) : (

        <>


        <div
          ref={center}
          className="
          absolute
          left-[55%]
          top-[38%]
          h-[1000px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-[#5145A8]/30
          via-[#7FA6C9]/25
          to-[#D6A85F]/20
          blur-[240px]
          "
        />


        <div
          ref={purple}
          className="
          absolute
          left-[-250px]
          top-[10%]
          h-[850px]
          w-[850px]
          rounded-full
          bg-[#5145A8]/25
          blur-[230px]
          "
        />


        <div
          ref={gold}
          className="
          absolute
          right-[-250px]
          top-[20%]
          h-[750px]
          w-[750px]
          rounded-full
          bg-[#D6A85F]/20
          blur-[230px]
          "
        />


        <div
          ref={blue}
          className="
          absolute
          left-[30%]
          bottom-[-250px]
          h-[800px]
          w-[900px]
          rounded-full
          bg-[#2F7285]/20
          blur-[220px]
          "
        />


        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]
          "
        />


        </>

      )}



      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        "
        style={{
          backgroundImage:
          "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize:"6px 6px"
        }}
      />


    </div>

  );

}