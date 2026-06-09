type SearchPageProps = {
  searchParams: Promise<{
    origin?: string;
    destination?: string;
    departureDate?: string;
    adults?: string;
  }>;
};

export default async function FlightResultsPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;

  const origin = params.origin || "";
  const destination = params.destination || "";
  const departureDate = params.departureDate || "";
  const adults = params.adults || "1";

  const query = new URLSearchParams({
    origin,
    destination,
    departureDate,
    adults,
  });

  const response = await fetch(
    `http://localhost:3000/api/flights/search?${query.toString()}`,
    {
      cache: "no-store",
    }
  );

  const result = await response.json();

  const flights = result.data || [];

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">
        نتائج الرحلات
      </h1>

      <p className="text-gray-500 mb-8">
        {origin} → {destination}
      </p>

      {flights.length === 0 ? (
        <div className="border rounded-xl p-6">
          لا توجد رحلات متاحة
        </div>
      ) : (
        <div className="space-y-4">
          {flights.map((flight: any) => (
            <div
              key={flight.id}
              className="border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    {flight.airline}
                  </h3>

                  <p className="text-gray-500">
                    {flight.origin} → {flight.destination}
                  </p>

                  <p className="text-sm text-gray-400">
                    {flight.departureAt}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-bold">
                    €{flight.price}
                  </div>

                  <a
                    href={flight.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-black text-white px-5 py-2 rounded-xl"
                  >
                    احجز الآن
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
