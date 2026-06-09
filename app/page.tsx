import FlightSearchForm from "@/components/flights/FlightSearch";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2000')",
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-6xl font-bold text-white mb-4">
            اكتشف العالم مع Jaola
          </h1>

          <p className="text-xl text-white/90 mb-10">
            رحلات، فنادق، سيارات وتأجير وأنشطة سياحية
          </p>

          <FlightSearchForm />
        </div>
      </section>
    </main>
  );
}
