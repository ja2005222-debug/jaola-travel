import { getFlightDeals } from '@/lib/api/travelpayouts';

export default async function Home() {
  const deals = await getFlightDeals('JED', 6);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">✈️ JAOLA Travel</h1>
          <p className="text-lg opacity-90">Search and compare cheap flights from Jeddah to destinations worldwide</p>
        </div>
      </section>

      {/* Search Form */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg max-w-4xl mx-auto">
          <form action="https://aviasales.tp.st/SJXKYzdr" method="GET" target="_blank" className="flex flex-wrap gap-3">
            <input type="text" name="origin" placeholder="From" defaultValue="JED" className="flex-1 p-2 border rounded-full px-4" />
            <input type="text" name="destination" placeholder="To" defaultValue="DXB" className="flex-1 p-2 border rounded-full px-4" />
            <input type="date" name="departure_date" defaultValue={new Date(Date.now() + 30 * 86400000).toISOString().slice(0,10)} className="flex-1 p-2 border rounded-full px-4" />
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition">
              Search Flights
            </button>
          </form>
        </div>
      </div>

      {/* Flight Deals */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">🔥 Best Flight Deals</h2>
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

      {/* Features */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4"><div className="text-3xl mb-2">🏆</div><h3 className="font-bold">Best Price Guarantee</h3></div>
            <div className="p-4"><div className="text-3xl mb-2">🕐</div><h3 className="font-bold">24/7 Support</h3></div>
            <div className="p-4"><div className="text-3xl mb-2">🔒</div><h3 className="font-bold">Secure Booking</h3></div>
            <div className="p-4"><div className="text-3xl mb-2">📚</div><h3 className="font-bold">Expert Guides</h3></div>
          </div>
        </div>
      </div>
    </main>
  );
}
