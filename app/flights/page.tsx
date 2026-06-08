import { getFlightDeals } from '@/lib/api/travelpayouts';

export default async function FlightsPage() {
  const deals = await getFlightDeals('JED', 12);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">✈️ Flight Search</h1>
        <p className="text-gray-600 mb-8">Compare cheap flights from Jeddah to worldwide destinations</p>

        {/* Search Form */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
          <form action="https://aviasales.tp.st/SJXKYzdr" method="GET" target="_blank" className="flex flex-wrap gap-3">
            <input type="text" name="origin" placeholder="From" defaultValue="JED" className="flex-1 p-3 border border-gray-200 rounded-full px-5 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <input type="text" name="destination" placeholder="To" defaultValue="DXB" className="flex-1 p-3 border border-gray-200 rounded-full px-5 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <input type="date" name="departure_date" className="flex-1 p-3 border border-gray-200 rounded-full px-5 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition transform hover:scale-105">
              ✈️ Search Flights
            </button>
          </form>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-900">🔥 Best Flight Deals</h2>
          <span className="text-sm text-gray-500">{deals.length} deals found</span>
        </div>

        {/* Flight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, idx) => (
            <a
              key={idx}
              href={deal.link}
              target="_blank"
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
            >
              {/* Card Header with Airline */}
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 px-4 py-3 border-b">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">✈️ {deal.airline}</span>
                  {deal.isDirect && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Direct</span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4">
                {/* Route */}
                <div className="flex justify-between items-center mb-3">
                  <div className="text-center">
                    <div className="font-bold text-lg text-blue-900">{deal.from}</div>
                    <div className="text-xs text-gray-400">Departure</div>
                  </div>
                  <div className="text-orange-400 text-xl">→</div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-blue-900">{deal.to}</div>
                    <div className="text-xs text-gray-400">Arrival</div>
                  </div>
                </div>

                {/* Date */}
                <div className="text-center text-sm text-gray-500 mb-3">
                  📅 {deal.departDate}
                </div>

                {/* Price */}
                <div className="text-center">
                  <span className="text-3xl font-bold text-orange-500">${deal.price}</span>
                  <span className="text-sm text-gray-400"> / person</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-gray-50 px-4 py-3 border-t">
                <div className="text-center text-orange-500 font-medium group-hover:text-orange-600 transition">
                  View Deal →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
