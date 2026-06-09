import { getFlightDeals } from '@/lib/api/travelpayouts';

interface Deal {
  from: string;
  to: string;
  link: string;
  price?: number;
}

export default async function DealsPage() {
  const deals = await getFlightDeals('JED', 6);
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">عروض الرحلات</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {deals.map((deal: Deal, idx: number) => (
          <a key={idx} href={deal.link} target="_blank" className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition">
            <div className="flex justify-between items-start">
              <span className="font-bold text-blue-900">{deal.from} → {deal.to}</span>
              {deal.price && <span className="text-green-600 font-bold">{deal.price} USD</span>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
