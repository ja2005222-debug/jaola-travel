import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();
  if (!message) {
    return NextResponse.json({ error: 'الرسالة مطلوبة' }, { status: 400 });
  }

  try {
    const prompt = `أنت خبير في إصلاح مشاكل المواقع (HTML, CSS, JS, PHP, React, Next.js). 
    قدم الحل بالعربية خطوة بخطوة مع الكود الصحيح. 
    سؤال المستخدم: ${message}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.5, maxOutputTokens: 3000 }
        })
      }
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'فشل الاتصال بـ Gemini');

    const reply = data.candidates[0].content.parts[0].text;
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
