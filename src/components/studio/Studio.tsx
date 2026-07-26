"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const values = [
  {
    title:"ИДЕИ",
    text:"Создаём не просто проекты, а цифровые миры с характером.",
  },
  {
    title:"ТЕХНОЛОГИИ",
    text:"Используем современные инструменты разработки и дизайна.",
  },
  {
    title:"КАЧЕСТВО",
    text:"Каждая деталь проходит этапы проверки и улучшения.",
  },
];

const technologies = [
  {
    name:"NEXT.JS",
    text:"Современная веб-разработка",
  },
  {
    name:"UNITY",
    text:"Разработка игровых проектов",
  },
  {
    name:"BLENDER",
    text:"3D модели и визуализация",
  },
  {
    name:"FIGMA",
    text:"UI / UX дизайн",
  },
];

const process = [
  {
    number:"01",
    title:"ИДЕЯ",
    text:"Изучаем задачу, цели проекта и создаём направление.",
  },
  {
    number:"02",
    title:"КОНЦЕПЦИЯ",
    text:"Разрабатываем структуру, стиль и визуальную систему.",
  },
  {
    number:"03",
    title:"РАЗРАБОТКА",
    text:"Превращаем концепцию в полноценный цифровой продукт.",
  },
  {
    number:"04",
    title:"ЗАПУСК",
    text:"Публикуем проект и продолжаем его развитие.",
  },
];


const cardStyle = `
group
relative
overflow-hidden
rounded-[40px]
border
border-white/20
bg-[#111923]/80
p-8
transform-gpu
transition-colors
md:hover:border-white/50
`;

const glowStyle = `

absolute

right-[-80px]

top-[-80px]

h-[220px]

w-[220px]

rounded-full

bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.08)_35%,rgba(255,255,255,0)_75%)]

pointer-events-none

`;

export default function Studio(){
return(
<section
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
left-1/2
top-0
h-[500px]
w-[500px]
-translate-x-1/2
rounded-full
bg-white/[0.06]
blur-[120px]
transform-gpu
"

 />

<div

className="
relative
z-10
mx-auto
max-w-[1200px]
"

>

{/* HERO */}

<motion.div
viewport={{
once:true
}}
transition={{
duration:.6
}}

>
<p

className="
text-[11px]
tracking-[0.6em]
text-[#D6A85F]
"
>

ABOUT AVELOR

</p>

<h1

className="
mt-8
text-5xl
font-light
leading-tight
text-white
md:text-7xl
"
>

СОЗДАЁМ

<br/>
<span className="text-[#D6A85F]">

ЦИФРОВЫЕ

</span>
<br/>

МИРЫ

</h1>

<p

className="
mt-10
max-w-[600px]
text-lg
leading-8
text-white/60
"

>

Avelor Studio — цифровая студия,
которая объединяет разработку,
дизайн и технологии для создания
современных продуктов.

</p>

</motion.div>

{/* VALUES */}

<div
className="
mt-24
grid
gap-8
md:grid-cols-3
"

>

{values.map((item,index)=>(

<motion.div
key={item.title}
viewport={{
once:true,
amount:.2
}}
transition={{
duration:.5,
delay:index*.05
}}
className={cardStyle}

>

<div className={glowStyle}/>

<div
className="
absolute
inset-0
rounded-[40px]
border
border-white/10
pointer-events-none
"

/>

<div

className="
relative
z-10
"
>

<h3

className="
text-sm
tracking-[0.35em]
text-[#D6A85F]
"

>

{item.title}
</h3>

<p

className="
mt-6
leading-7
text-white/60
"

>

{item.text}
</p>
</div>

</motion.div>

))}

</div>

{/* TECHNOLOGIES */}

<motion.div
viewport={{
once:true,
amount:.2
}}
transition={{
duration:.6
}}
className="
mt-32
"
>

<p

className="
text-[11px]
tracking-[0.6em]
text-[#D6A85F]

"

>

TECHNOLOGIES

</p>

<h2

className="
mt-6
text-4xl
font-light
text-white
md:text-5xl
"

>

НАШ

<br/>
<span className="text-[#D6A85F]">

СТЕК

</span>
</h2>

<div

className="
mt-12
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
>

{technologies.map((item,index)=>(
<motion.div
key={item.name}

viewport={{
once:true,
amount:.2
}}
transition={{
duration:.45,
delay:index*.05
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
right-[-70px]
top-[-70px]
h-[220px]
w-[220px]
rounded-full
bg-white/10
blur-[70px]
pointer-events-none
"

/>

<div

className="
relative
z-10
"
>

<h3

className="
text-lg
tracking-[0.25em]
text-white
"

>

{item.name}

</h3>




<p

className="

mt-4

text-sm

text-white/50

"

>

{item.text}

</p>


</div>



</motion.div>


))}



</div>


</motion.div>







{/* PROCESS */}



<motion.div



viewport={{
once:true,
amount:.2
}}

transition={{
duration:.6
}}


className="
mt-32
"

>


<p

className="
text-[11px]

tracking-[0.6em]

text-[#D6A85F]

"

>

PROCESS

</p>




<h2

className="
mt-6

text-4xl

font-light

text-white

md:text-5xl

"

>

КАК МЫ

<br/>

<span className="text-[#D6A85F]">

РАБОТАЕМ

</span>

</h2>





<div

className="
mt-12

grid

gap-6

md:grid-cols-2

"

>


{process.map((item,index)=>(


<motion.div


key={item.number}





viewport={{
once:true,
amount:.2
}}



transition={{
duration:.45,
delay:index*.05
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

right-[-80px]

top-[-80px]


h-[220px]


w-[220px]


rounded-full


bg-white/10


blur-[70px]


pointer-events-none

"

/>




<div

className="

absolute

right-5

top-[-10px]


text-[110px]


font-light


text-white/[0.04]

"

>

{item.number}

</div>





<div

className="
relative

z-10

"

>



<p

className="

text-[10px]

tracking-[0.5em]

text-[#D6A85F]

"

>

STEP {item.number}

</p>





<h3

className="

mt-6

text-2xl

font-light

text-white

"

>

{item.title}

</h3>





<p

className="

mt-5

leading-7

text-white/50

"

>

{item.text}

</p>



</div>



</motion.div>


))}


</div>



</motion.div>






{/* CONTACT BLOCK */}



<motion.div




viewport={{
once:true,
amount:.2
}}


transition={{
duration:.6
}}



className="
group
relative
min-h-[500px]
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

right-[-150px]

top-[-150px]


h-[350px]


w-[350px]


rounded-full


bg-[#D6A85F]/15


blur-[90px]


pointer-events-none

"

/>





<div

className="

absolute

left-[-120px]


bottom-[-120px]


h-[280px]


w-[280px]


rounded-full


bg-white/[0.05]


blur-[80px]


pointer-events-none

"

/>






<div

className="

relative

z-10


max-w-[700px]

"

>


<p

className="

text-[11px]


tracking-[0.6em]


text-[#D6A85F]

"

>

START PROJECT

</p>

<h2

className="
mt-8
text-4xl
font-light
leading-tight
text-white
md:text-6xl
"

>

ГОТОВЫ

<br/>

СОЗДАТЬ

<br/>
<span className="text-[#D6A85F]">

ЧТО-ТО ВЕЛИКОЕ?

</span>
</h2>

<p

className="
mt-8
max-w-[500px]
leading-7
text-white/60
"

>

Расскажите нам о вашей идее,
и мы поможем превратить её
в полноценный цифровой продукт.

</p>

<div className="mt-10">

<ContactForm />

</div>

</div>

</motion.div>

</div>

</section>

);

}