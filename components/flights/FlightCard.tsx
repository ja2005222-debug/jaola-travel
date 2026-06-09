// components/flights/FlightCard.tsx
import Link from "next/link";
import { FlightResult } from "@/types/flight";

interface FlightCardProps {
  flight: FlightResult;
}

export default function FlightCard({ flight }: FlightCardProps) {
  // تنسيق الوقت
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // نص التوقف
  const getTransfersText = (transfers: number) => {
    if (transfers === 0) return "مباشر ✈️";
    if (transfers === 1) return "توقف واحد";
    return `${transfers} توقفات`;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        {/* معلومات شركة الطيران */}
        <div className="min-w-[140px]">
          <h3 className="font-bold text-lg text-gray-800">{flight.airline}</h3>
          <p className="text-sm text-gray-500">{getTransfersText(flight.transfers)}</p>
        </div>

        {/* مواعيد الرحلات */}
        <div className="flex-1">
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-xl font-bold">{formatTime(flight.departureAt)}</p>
              <p className="text-sm text-gray-500">{flight.origin}</p>
            </div>

            <div className="flex-1 border-t border-gray-300 relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-100 px-2 py-0.5 rounded-full text-xs text-gray-500">
                {flight.duration > 0 ? `${flight.duration} دقيقة` : ""}
              </span>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold">
                {flight.returnAt ? formatTime(flight.returnAt) : "--:--"}
              </p>
              <p className="text-sm text-gray-500">{flight.destination}</p>
            </div>
          </div>
        </div>

        {/* السعر وزر الحجز */}
        <div className="text-center min-w-[140px]">
          <p className="text-2xl font-bold text-green-600">€{flight.price}</p>
          <Link
            href={flight.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            اختر الرحلة 🎟️
          </Link>
        </div>
      </div>
    </div>
  );
}
