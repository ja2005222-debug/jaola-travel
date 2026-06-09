"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FlightSearchForm() {
  const router = useRouter();

  const [origin, setOrigin] = useState("JED");
  const [destination, setDestination] = useState("DXB");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [tripType, setTripType] = useState("oneway");

  function handleSearch() {
    const params = new URLSearchParams({
      origin,
      destination,
      departureDate,
      adults: adults.toString(),
      tripType,
    });

    router.push(`/flights/search?${params.toString()}`);
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTripType("oneway")}
          className={`px-4 py-2 rounded-full ${
            tripType === "oneway"
              ? "bg-black text-white"
              : "bg-gray-100"
          }`}
        >
          ذهاب فقط
        </button>

        <button
          onClick={() => setTripType("roundtrip")}
          className={`px-4 py-2 rounded-full ${
            tripType === "roundtrip"
              ? "bg-black text-white"
              : "bg-gray-100"
          }`}
        >
          ذهاب وعودة
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <label className="block mb-2 text-sm font-medium">
            من
          </label>

          <input
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="JED"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            إلى
          </label>

          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="DXB"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            تاريخ المغادرة
          </label>

          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">
            المسافرون
          </label>

          <select
            value={adults}
            onChange={(e) =>
              setAdults(Number(e.target.value))
            }
            className="w-full border rounded-xl p-3"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} مسافر
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="mt-6 w-full bg-black text-white py-4 rounded-2xl font-semibold"
      >
        🔍 البحث عن الرحلات
      </button>
    </div>
  );
}
