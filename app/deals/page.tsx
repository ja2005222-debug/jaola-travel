// src/app/deals/page.tsx
import { getFlightDeals } from '@/lib/api/travelpayouts';

export default async function DealsPage() {
  const deals = await getFlightDeals('JED', 20);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">✈️ All Flight Deals</h1>
        <p className="text-gray-600 mb-8">Best offers from Jeddah to worldwide destinations</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((deal, idx) => (
            <a key={idx} href={deal.link} target="_blank" className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition block">
              <div className="flex justify-between items-start">
                <span className="font-bold text-blue-900">{deal.from} → {deal.to}</span>
                <span className="text-orange-500 font-bold text-xl">${deal.price}</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">✈️ {deal.airline}</p>
              <p className="text-gray-400 text-xs">📅 {deal.departDate}</p>
              {deal.isDirect && <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Direct flight</span>}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
