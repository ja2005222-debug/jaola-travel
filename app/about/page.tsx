// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">About JAOLA Travel</h1>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <p className="mb-4">JAOLA Travel is your trusted companion for finding the best flight deals, hotel accommodations, and travel inspiration worldwide.</p>
          <p className="mb-4">We compare hundreds of airlines and travel providers to bring you the most competitive prices, ensuring you get the best value for your journey.</p>
          <p>Our mission is to make travel accessible, affordable, and enjoyable for everyone.</p>
        </div>
      </div>
    </main>
  );
}
