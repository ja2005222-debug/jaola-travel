// app/destinations/page.tsx
import { getPopularDestinations } from '@/lib/api/travelpayouts';

// دالة مساعدة للحصول على صورة الوجهة
function getDestinationImage(code: string): string {
  const images: Record<string, string> = {
    'DXB': 'https://images.pexels.com/photos/1390358/pexels-photo-1390358.jpeg?w=400',
    'LON': 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?w=400',
    'PAR': 'https://images.pexels.com/photos/161079/paris-eiffel-tower-france-sunset-161079.jpeg?w=400',
    'IST': 'https://images.pexels.com/photos/1394474/pexels-photo-1394474.jpeg?w=400',
    'CAI': 'https://images.pexels.com/photos/395894/pexels-photo-395894.jpeg?w=400',
    'JED': 'https://images.pexels.com/photos/1390358/pexels-photo-1390358.jpeg?w=400',
  };
  return images[code] || 'https://images.pexels.com/photos/1390358/pexels-photo-1390358.jpeg?w=400';
}

export default async function DestinationsPage() {
  const destinations = await getPopularDestinations('JED');

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">🌍 Popular Destinations</h1>
        <p className="text-gray-600 mb-8">Discover amazing places and find the best flight deals from Jeddah</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.slice(0, 12).map((dest) => (
            <a
              key={dest.code}
              href={`https://aviasales.tp.st/SJXKYzdr?origin=JED&destination=${dest.code}`}
              target="_blank"
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
            >
              {/* Destination Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={getDestinationImage(dest.code)}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-3 right-3 text-2xl">{dest.flag}</div>
              </div>

              {/* Destination Info */}
              <div className="p-4">
                <h3 className="font-bold text-xl text-blue-900 mb-1">{dest.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{dest.country}</p>

                {/* Price */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">from</span>
                  <span className="text-2xl font-bold text-orange-500">${dest.price}</span>
                </div>

                {/* Button */}
                <div className="mt-3 text-center text-orange-500 font-medium group-hover:text-orange-600 transition">
                  Find Flights →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
