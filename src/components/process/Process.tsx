"use client";

import { motion } from "framer-motion";

import {
  Lightbulb,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";



const steps = [

  {
    number:"01",
    title:"ИДЕЯ",
    tag:"DISCOVERY",
    text:"Изучаем задачу, аудиторию и формируем направление проекта.",
    icon:Lightbulb,
  },

  {
    number:"02",
    title:"КОНЦЕПЦИЯ",
    tag:"CONCEPT",
    text:"Создаём структуру, стиль и визуальную систему продукта.",
    icon:Palette,
  },

  {
    number:"03",
    title:"РАЗРАБОТКА",
    tag:"CREATION",
    text:"Превращаем идею в полноценный цифровой продукт.",
    icon:Code2,
  },

  {
    number:"04",
    title:"ЗАПУСК",
    tag:"LAUNCH",
    text:"Запускаем проект и продолжаем его развитие.",
    icon:Rocket,
  },

];





export default function Process(){


return (

<section

id="process"

className="
relative
overflow-hidden
bg-transparent
px-6
py-8
md:px-12
"

>



<div

className="
relative
z-10
mx-auto
max-w-[1400px]
"

>







{/* заголовок */}



<div

className="
mb-16
"

>


<p

className="
text-[11px]
tracking-[0.7em]
text-[#b08a52]
"

>

КАК МЫ РАБОТАЕМ

</p>





<h2

className="
mt-6
max-w-[700px]
text-4xl
font-light
leading-tight
text-white

md:text-5xl
"

>

От идеи до готового
цифрового продукта

</h2>



</div>









{/* этапы */}



<div

className="
grid
grid-cols-1
gap-8

md:grid-cols-2
"

>


{

steps.map((step,index)=>{


const Icon = step.icon;



return (


<motion.div




key={step.number}



initial={{

opacity:0,
y:50

}}



whileInView={{

opacity:1,
y:0

}}



viewport={{

once:true

}}



transition={{

duration:.7,
delay:index*.1

}}



whileHover={{

y:-12

}}



className="
group
relative
min-h-[260px]

overflow-hidden

rounded-[45px]

border
border-[#c49a5a]/25

bg-gradient-to-br
from-white/[0.14]
via-white/[0.07]
to-transparent

p-10

backdrop-blur-2xl

transition-all

hover:border-[#c49a5a]/70

hover:shadow-[0_0_80px_rgba(196,154,90,0.2)]
"

>



<div

className="
absolute
inset-0

rounded-[inherit]

border
border-white/20

shadow-[inset_0_0_40px_rgba(255,255,255,0.12)]

pointer-events-none

"

/>



{/* внутреннее свечение */}



<div

className="
absolute
right-[-80px]
top-[-80px]
h-[250px]
w-[250px]
rounded-full

bg-[#b08a52]/20

blur-[90px]

opacity-0

transition
duration-500

group-hover:opacity-100

"

/>









<div

className="
relative
z-10
flex
justify-between
"

>





<div>






<div

className="
flex
h-14
w-14
items-center
justify-center

rounded-2xl

bg-[#b08a52]/10

border

border-[#b08a52]/30

"

>


<Icon

size={28}

strokeWidth={1}

className="
text-[#b08a52]
"

/>


</div>







<p

className="
mt-8
text-[10px]

tracking-[0.6em]

text-[#b08a52]

"

>

{step.tag}

</p>







<h3

className="
mt-4

text-3xl

font-light

text-white

"

>

{step.title}

</h3>







<p

className="
mt-5

max-w-[400px]

text-sm

leading-7

text-white/50

"

>

{step.text}

</p>






</div>








<div

className="
text-[120px]
font-light
leading-none

text-white/[0.04]

"

>

{step.number}

</div>






</div>









{/* линия */}



<div

className="
absolute
bottom-0
left-0

h-[3px]

w-0

bg-[#b08a52]

transition-all

duration-700

group-hover:w-full

"

/>







</motion.div>


)


})


}



</div>







</div>






</section>

);

}