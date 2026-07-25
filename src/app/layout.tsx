import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";


const inter = Inter({

  subsets:[
    "latin",
    "cyrillic"
  ],

  variable:"--font-inter",

});


const manrope = Manrope({

  subsets:[
    "latin",
    "cyrillic"
  ],

  variable:"--font-manrope",

});



export const metadata: Metadata = {

  title:
  "Avelor Studio — Digital Products & Game Development",


  description:
  "Создаём сайты, игровые миры и цифровые продукты с уникальным дизайном и атмосферой.",


  keywords:[
    "разработка сайтов",
    "создание игр",
    "веб-разработка",
    "дизайн",
    "Avelor Studio"
  ],


  authors:[
    {
      name:"Avelor Studio"
    }
  ],


  robots:{
    index:true,
    follow:true,
  },


};



export default function RootLayout({

  children,

}: Readonly<{

  children:React.ReactNode;

}>) {


  return (

    <html lang="ru">

      <body

        className={`
        ${inter.variable}
        ${manrope.variable}
        antialiased
        `}

      >

        {children}

      </body>

    </html>

  );

}