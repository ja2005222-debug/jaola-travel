export async function getFlightDeals(origin: string, months: number = 6) {
  const response = await fetch(
    `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&currency=USD&months=${months}`,
    {
      headers: {
        'X-Api-Key': process.env.TRAVELPAYOUTS_API_KEY || '',
      },
    }
  );
  return response.json();
}

export async function getHotelDeals(city: string) {
  const response = await fetch(
    `https://api.travelpayouts.com/v1/hotels/location?query=${city}`,
    {
      headers: {
        'X-Api-Key': process.env.TRAVELPAYOUTS_API_KEY || '',
      },
    }
  );
  return response.json();
}

