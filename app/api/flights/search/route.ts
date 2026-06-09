// app/api/flights/search/route.ts

import { NextRequest, NextResponse } from "next/server";
import { searchFlights } from "@/lib/travelpayouts/flights";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const departureDate = searchParams.get("departureDate");
  const adults = parseInt(searchParams.get("adults") || "1");
  const currency = searchParams.get("currency") || "EUR";

  // التحقق من المعاملات المطلوبة
  if (!origin || !destination || !departureDate) {
    return NextResponse.json(
      { error: "Origin, destination, and departure date are required" },
      { status: 400 }
    );
  }

  try {
    const flights = await searchFlights(
      origin,
      destination,
      departureDate,
      adults,
      currency
    );

    return NextResponse.json({
      success: true,
      data: flights,
      count: flights.length,
    });
  } catch (error) {
    console.error("Flight search error:", error);
    return NextResponse.json(
      { error: "Failed to search flights" },
      { status: 500 }
    );
  }
}
