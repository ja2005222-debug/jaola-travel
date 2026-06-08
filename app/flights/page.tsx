import { getFlightDeals } from '@/lib/api/travelpayouts';

export default async function FlightsPage() {
  const deals = await getFlightDeals('JED', 12);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">✈️ Flight Search</h1>
        <p className="text-gray-600 mb-8">Compare cheap flights from Jeddah to worldwide destinations</p>

        <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
          <form action="https://aviasales.tp.st/SJXKYzdr" method="GET" target="_blank" className="flex flex-wrap gap-3">
            <input type="text" name="origin" placeholder="From" defaultValue="JED" className="flex-1 p-2 border rounded-full px-4" />
            <input type="text" name="destination" placeholder="To" defaultValue="DXB" className="flex-1 p-2 border rounded-full px-4" />
            <input type="date" name="departure_date" className="flex-1 p-2 border rounded-full px-4" />
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition">
              Search Flights
            </button>
          </form>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mb-4">🔥 Best Flight Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((deal, idx) => (
            <a key={idx} href={deal.link} target="_blank" className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition block">
              <div className="flex justify-between">
                <span className="font-bold">{deal.from} → {deal.to}</span>
                <span className="text-orange-500 font-bold">${deal.price}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">✈️ {deal.airline}</p>
              <p className="text-xs text-gray-400">📅 {deal.departDate}</p>
              {deal.isDirect && <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Direct flight</span>}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
