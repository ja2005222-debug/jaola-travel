// app/api/deepseek-chat/route.js
export async function POST(request) {
  const { message } = await request.json();

  if (!message) {
    return Response.json({ error: 'الرسالة مطلوبة' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: message }],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message);

    return Response.json({ reply: data.choices[0].message.content });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
