// lib/travelpayouts/flights.ts

const API_KEY = process.env.TRAVELPAYOUTS_API_KEY;
const MARKER = process.env.TRAVELPAYOUTS_MARKER;
const BASE_URL = "https://api.travelpayouts.com";

export async function searchFlights(
  origin: string,
  destination: string,
  departureDate: string,
  adults: number = 1,
  currency: string = "EUR"
) {
  // نقطة النهاية الصحيحة لـ Aviasales API
  const url = new URL(`${BASE_URL}/aviasales/v3/prices_for_dates`);
  
  url.searchParams.set("origin", origin.toUpperCase());
  url.searchParams.set("destination", destination.toUpperCase());
  url.searchParams.set("departure_at", departureDate);
  url.searchParams.set("currency", currency);
  url.searchParams.set("limit", "50");
  
  // إضافة الماركر إذا كان موجوداً
  if (MARKER) {
    url.searchParams.set("marker", MARKER);
  }

  console.log("Requesting URL:", url.toString());

  try {
    const response = await fetch(url.toString(), {
      headers: {
        "X-Api-Key": API_KEY || "",
        "Accept": "application/json",
      },
      next: {
        revalidate: 3600, // Cache لمدة ساعة
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`API error ${response.status}: ${errorText.substring(0, 200)}`);
    }

    const data = await response.json();
    console.log("API Response:", JSON.stringify(data).substring(0, 500));
    
    const results = [];
    
    if (data.data) {
      const flights = Array.isArray(data.data) ? data.data : Object.values(data.data);
      
      for (let i = 0; i < flights.length; i++) {
        const flight: any = flights[i];
        results.push({
          id: flight.flight_number || `flight_${i}`,
          airline: flight.airline || "شركة طيران",
          origin: origin.toUpperCase(),
          destination: destination.toUpperCase(),
          departureAt: flight.departure_at || departureDate,
          returnAt: flight.return_at,
          duration: flight.duration || 0,
          transfers: flight.transfers || 0,
          price: flight.price,
          link: generateAffiliateLink(origin, destination, departureDate),
        });
      }
    }
    
    return results;
  } catch (error) {
    console.error("Flight search error:", error);
    return [];
  }
}

function generateAffiliateLink(origin: string, destination: string, date: string) {
  const marker = process.env.TRAVELPAYOUTS_MARKER;
  return `https://www.aviasales.com/search/${destination}?origin=${origin}&departure_at=${date}&marker=${marker}`;
}
