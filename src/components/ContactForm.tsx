"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm(){

  const [sent,setSent] = useState(false);

  async function sendForm(e:any){

    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      contact: form.contact.value,
      message: form.message.value,
    };


    await fetch("/api/telegram",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data),
    });


    setSent(true);

    form.reset();

  }


return (

<motion.form

onSubmit={sendForm}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
w-full
max-w-[600px]

rounded-[40px]

border
border-white/20

bg-white/[0.06]

p-8

backdrop-blur-2xl

shadow-[0_0_80px_rgba(255,255,255,0.15)]
"

>


{sent ? (

<div
className="
py-10
text-center
text-white
"
>

Спасибо! 
<br/>
Мы свяжемся с вами.

</div>

) : (

<>

<input

name="name"

placeholder="Ваше имя"

required

className="
w-full

rounded-full

border
border-white/20

bg-white/5

px-6
py-4

text-sm

text-white

outline-none

placeholder:text-white/40
"

/>



<input

name="contact"

placeholder="Telegram или Email"

required

className="
mt-4

w-full

rounded-full

border
border-white/20

bg-white/5

px-6
py-4

text-sm

text-white

outline-none

placeholder:text-white/40
"

/>



<textarea

name="message"

placeholder="Расскажите о проекте"

required

rows={5}

className="
mt-4

w-full

rounded-[30px]

border
border-white/20

bg-white/5

px-6
py-4

text-sm

text-white

outline-none

placeholder:text-white/40

resize-none
"

/>



<button

type="submit"

className="
mt-6

rounded-full

bg-[#D6A85F]

px-10

py-4

text-[10px]

tracking-[0.35em]

text-[#071522]

transition

hover:bg-white
"

>

ОТПРАВИТЬ

</button>


</>

)}


</motion.form>

);

}