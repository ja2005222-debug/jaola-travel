'use client';
import { useState } from 'react';

export default function FixSitePage() {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [loading, setLoading] = useState(false);

  const askDeepSeek = async () => {
    if (!problem.trim()) return;
    setLoading(true);
    setSolution('');

    try {
      const res = await fetch('/api/deepseek-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: problem })
      });
      const data = await res.json();
      setSolution(data.reply || `خطأ: ${data.error || 'حاول مجددًا'}`);
    } catch (err: any) {
      setSolution(`فشل الاتصال: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🤖 مساعد إصلاح الموقع (DeepSeek)</h1>
      <textarea
        rows={8}
        className="w-full p-3 border rounded-lg"
        placeholder="اكتب هنا مشكلتك في الموقع، أو الصق الكود الخاطئ..."
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />
      <button
        onClick={askDeepSeek}
        disabled={loading}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {loading ? 'جاري المعالجة...' : 'اطلب الحل'}
      </button>
      {solution && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="font-semibold mb-2">🔧 الحل المقترح:</h2>
          <pre className="whitespace-pre-wrap font-mono text-sm">{solution}</pre>
        </div>
      )}
    </div>
  );
}
