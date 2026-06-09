import { getFlightDeals } from '@/lib/api/travelpayouts';

interface Deal {
  from: string;
  to: string;
  link: string;
  price?: number;
  airline?: string;
  departure_time?: string;
  arrival_time?: string;
}

export default async function FlightsPage() {
  const deals = await getFlightDeals('JED', 6);
  
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">عروض الرحلات الجوية</h1>
        
        {/* Flight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal: Deal, idx: number) => (
            <a
              key={idx}
              href={deal.link}
              target="_blank"
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="font-bold text-blue-900">{deal.from} → {deal.to}</span>
                {deal.price && <span className="text-green-600 font-bold">{deal.price} USD</span>}
              </div>
              {deal.airline && (
                <p className="text-gray-600 text-sm">الخطوط الجوية: {deal.airline}</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
