import FlightSearchForm from "@/components/flights/FlightSearch";

export default function FlightsPage() {
  return (
    <main className="max-w-7xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        البحث عن الرحلات
      </h1>

      <FlightSearchForm />
    </main>
  );
}
