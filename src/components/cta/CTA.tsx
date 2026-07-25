"use client";

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";


export default function CTA() {

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name:"",
    contact:"",
    message:"",
  });


  async function sendForm(){

    await fetch("/api/telegram",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(form),
    });


    setForm({
      name:"",
      contact:"",
      message:"",
    });

    setOpen(false);

  }



  return (
    <section

      id="contact"
      className="
      relative
      min-h-[650px]
      overflow-hidden
      bg-transparent

      md:min-h-[680px]
      xl:min-h-[720px]
      "
    >

      <div
        className="
        absolute
        top-0
        left-0
        z-0
        h-[220px]
        w-full

        bg-gradient-to-b

        from-transparent
        via-[#071426]/40
        to-transparent
        "
      />



      <div
        className="
        absolute
            bottom-[-120px]
            left-0
            z-10
            h-[300px]
            w-full
            bg-gradient-to-b
            from-transparent
            via-white/20
            to-[#03060D]
            blur-2xl
        "
      />


      <div
        className="
        relative

        z-20

        mx-auto

        min-h-[650px]

        max-w-[1300px]

        px-6

        pt-16


        md:min-h-[680px]

        md:px-12

        md:pt-20


        xl:min-h-[720px]

        xl:pt-[180px]


        2xl:pt-[200px]
        "
      >

        <div
          className="
          flex

          flex-col

          items-center

          gap-10


          md:flex-row

          md:items-start

          md:justify-between

          md:gap-6
          "
        >

          {/* ЛЕВЫЙ БЛОК */}

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

            style={{
            y: -20
            }}

            className="
            relative

            z-40

            w-full

            max-w-[300px]

            text-center


            md:text-left


            md:max-[1100px]:rounded-[30px]

            md:max-[1100px]:border

            md:max-[1100px]:border-white/20

            md:max-[1100px]:bg-[#071522]/40

            md:max-[1100px]:p-8

            md:max-[1100px]:backdrop-blur-xl


            lg:max-[1100px]:rounded-[30px]

            lg:max-[1100px]:border

            lg:max-[1100px]:border-white/20

            lg:max-[1100px]:bg-[#071522]/40

            lg:max-[1100px]:p-8

            lg:max-[1100px]:backdrop-blur-xl


            xl:max-[1400px]:rounded-[30px]

            xl:max-[1400px]:border

            xl:max-[1400px]:border-white/20

            xl:max-[1400px]:bg-[#071522]/40

            xl:max-[1400px]:p-8

            xl:max-[1400px]:backdrop-blur-xl


            2xl:rounded-[30px]

            2xl:border

            2xl:border-white/20

            2xl:bg-[#071522]/45

            2xl:p-8

            2xl:backdrop-blur-xl
            "
          >

        

            <p
              className="
              text-[10px]

              tracking-[0.65em]

              text-[#D6A85F]
              "
            >
              AVELOR STUDIO
            </p>


            <h2
              className="
              mt-7

              text-4xl

              font-light

              leading-[0.95]

              text-white


              sm:text-[42px]


              md:text-[44px]


              xl:text-[48px]
              "
            >

              ГОТОВЫ

              <br />

              СОЗДАТЬ

              <br />

              <span className="text-[#D6A85F]">
                ЧТО-ТО
              </span>

              <br />

              ВЕЛИКОЕ?

            </h2>



            <p
              className="
              mt-7

              max-w-[300px]

              mx-auto

              text-sm

              leading-6

              text-white/80


              md:mx-0
              "
            >
              Расскажите нам о вашем проекте,
              а мы превратим идею
              в реальность.
            </p>



            <button
            onClick={() => setOpen(true)}
            className="
            mt-8
            rounded-full
            bg-[#18202a]
            px-9
            py-4
            text-[10px]
            tracking-[0.35em]
            text-white
            bg-[#D6A85F]/90
            transition
            hover:bg-white
            hover:text-[#071522]
            "
            >
            ОБСУДИТЬ ПРОЕКТ
            </button>


          </motion.div>



          {/* СФЕРА */}



          <motion.div
            initial={{
              opacity:0,
              scale:.8
            }}

            whileInView={{
              opacity:1,
              scale:1
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:1
            }}

            animate={{
              y:[0,-12,0]
            }}

            className="
            relative

            order-2

            z-50


            md:absolute

            md:left-1/2

            md:bottom-[50px]

            md:-translate-x-1/2
            "
          >


            <div
              className="
              relative

              flex

              h-[220px]

              w-[220px]

              items-center

              justify-center


              rounded-full


              border

              border-white/80


              bg-white/30


              shadow-[0_0_120px_rgba(255,255,255,0.7)]


              backdrop-blur-xl



              sm:h-[300px]

              sm:w-[300px]



              md:h-[340px]

              md:w-[340px]



              xl:h-[430px]

              xl:w-[430px]
              "
            >


              <div
                className="
                absolute

                inset-8

                rounded-full

                border

                border-white/50
                "
              />



              <Image
                src="/images/logo/logo.webp"
                alt="Avelor"
                width={700}
                height={700}
                sizes="300px"

                className="
                relative
                z-20
                opacity-80
                "
              />


            </div>


          </motion.div>

                    {/* ПРАВЫЙ БЛОК */}


          <motion.div

            initial={{
              opacity:0,
              x:40
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
            relative

            z-30

            order-3

            w-full

            max-w-[280px]

            rounded-[30px]

            border

            border-white/20

            bg-[#071522]/40

            p-8

            text-white

            backdrop-blur-xl


            md:mt-10


            xl:max-w-[280px]
            "
          >

            <h3
              className="
              text-2xl

              font-light

              text-white
              "
            >
              Avelor Studio
            </h3>


            <p
              className="
              mt-5

              text-sm

              leading-6

              text-white/70
              "
            >
              Мы создаём цифровые продукты,
              которые вдохновляют
              и приносят результат.
            </p>


            <div
              className="
              mt-7

              flex

              gap-3
              "
            >

              {["➤","VK","Bē","◎"].map((item)=>(

                <div
                  key={item}

                  className="
                  flex

                  h-9

                  w-9

                  items-center

                  justify-center

                  rounded-full

                  border

                  border-white/20

                  text-xs
                  "
                >
                  {item}
                </div>

              ))}

            </div>


          </motion.div>


        </div>


      </div>



      {/* FOOTER */}


      <div
        className="
        relative

        z-30

        mx-6

        mt-8

        border-t

        border-white/20

        pt-4


        md:absolute

        md:bottom-6

        md:left-12

        md:right-12
        "
      >

        <div
          className="
          flex

          flex-col

          gap-3

          text-[10px]

          text-white/50


          md:flex-row

          md:justify-between
          "
        >

          <span>
            © 2024 Avelor Studio
          </span>


          <span>
            Политика конфиденциальности
          </span>


          <span>
            Условия использования
          </span>


        </div>


      </div>

{open && (

<div
className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black/60
backdrop-blur-xl
px-6
"
>

<div
className="
relative

w-full
max-w-[520px]

rounded-[40px]

border
border-white/20

bg-gradient-to-br

from-white/[0.14]

via-white/[0.07]

to-transparent

p-8

backdrop-blur-2xl

shadow-[0_0_120px_rgba(255,255,255,0.18)]
"
>

    <div
className="
absolute

right-[-120px]

top-[-120px]

h-[300px]

w-[300px]

rounded-full

bg-[#D6A85F]/20

blur-[120px]

"
/>

<h3
className="
text-2xl
font-light
text-white
"
>
Обсудить проект
</h3>


<input
placeholder="Ваше имя"
value={form.name}
onChange={(e)=>setForm({
...form,
name:e.target.value
})}
className="
mt-6
w-full
rounded-xl
border
border-white/20

bg-white/[0.06]

backdrop-blur-xl
p-4
text-white
outline-none
"
/>


<input
placeholder="Telegram / Email"
value={form.contact}
onChange={(e)=>setForm({
...form,
contact:e.target.value
})}
className="
mt-4
w-full
rounded-xl
border
border-white/20

bg-white/[0.06]

backdrop-blur-xl
p-4
text-white
outline-none
"
/>


<textarea
placeholder="Расскажите о проекте"
value={form.message}
onChange={(e)=>setForm({
...form,
message:e.target.value
})}
className="
mt-4
h-32
w-full
rounded-xl
border
border-white/20

bg-white/[0.06]

backdrop-blur-xl
p-4
text-white
outline-none
"
/>


<button
onClick={sendForm}
className="
mt-6
w-full
rounded-full
bg-[#d6a85f]
py-4
text-xs
tracking-[0.3em]
text-[#071522]
"
>
ОТПРАВИТЬ
</button>


<button
onClick={()=>setOpen(false)}
className="
mt-4
w-full
text-xs
text-white/50
"
>
ЗАКРЫТЬ
</button>


</div>

</div>

)}

    </section>
  );
}