export default function HotelsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">🏨 Find Best Hotels</h1>
        <p className="text-gray-600 mb-8">Compare hotel deals from Booking.com and other providers</p>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <form action="https://www.booking.com/index.html?aid=7953030" method="GET" target="_blank" className="flex flex-wrap gap-3">
            <input type="text" name="ss" placeholder="City or hotel name" className="flex-1 p-2 border rounded-full px-4" />
            <input type="date" name="checkin" className="flex-1 p-2 border rounded-full px-4" />
            <input type="date" name="checkout" className="flex-1 p-2 border rounded-full px-4" />
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition">
              Search Hotels
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
