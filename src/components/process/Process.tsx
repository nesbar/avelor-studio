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



const cardClass = `
group
relative
overflow-hidden

rounded-[40px]

border
border-white/20

bg-[#111923]/90

p-8

transform-gpu

transition-colors

md:hover:border-white/50
`;



export default function Studio(){


return (

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

h-[450px]

w-[450px]

-translate-x-1/2

rounded-full

bg-white/[0.05]

blur-[100px]

pointer-events-none

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


initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true,
amount:.2
}}

transition={{
duration:.5,
delay:index*.05
}}


className={cardClass}

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

