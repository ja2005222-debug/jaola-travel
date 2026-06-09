const TOKEN = process.env.TRAVELPAYOUTS_API_TOKEN;

export async function searchFlights(
  origin: string,
  destination: string,
  departureDate?: string
) {
  const url = new URL(
    "https://api.travelpayouts.com/aviasales/v3/prices_for_dates"
  );

  url.searchParams.set("origin", origin);
  url.searchParams.set("destination", destination);

  if (departureDate) {
    url.searchParams.set("departure_at", departureDate);
  }

  url.searchParams.set("currency", "USD");
  url.searchParams.set("sorting", "price");
  url.searchParams.set("limit", "30");
  url.searchParams.set("token", TOKEN || "");

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Travelpayouts request failed");
  }

  return response.json();
}
