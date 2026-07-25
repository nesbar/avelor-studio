import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      contact,
      message,
    } = body;


    const text = `
🚀 Новый запрос Avelor Studio

👤 Имя:
${name}

📱 Контакт:
${contact}

💬 Проект:
${message}
    `;


    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          chat_id:process.env.TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );


    if(!response.ok){
      return NextResponse.json(
        {
          success:false
        },
        {
          status:500
        }
      );
    }


    return NextResponse.json({
      success:true
    });


  } catch(error){

    return NextResponse.json(
      {
        success:false
      },
      {
        status:500
      }
    );

  }
}