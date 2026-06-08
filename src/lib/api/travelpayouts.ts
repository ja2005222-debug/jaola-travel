// src/lib/api/travelpayouts.ts
const API_TOKEN = 'c652c6fbf371197efb329876fdf88d0d';
const AFFILIATE_LINK = 'https://aviasales.tp.st/SJXKYzdr';

export async function getFlightDeals(origin = 'JED', limit = 6) {
  const url = `https://api.travelpayouts.com/v2/prices/latest?currency=usd&origin=${origin}&limit=${limit}&show_to_affiliates=true&sorting=price&token=${API_TOKEN}`;
  
  const res = await fetch(url);
  const data = await res.json();
  
  if (data.success && data.data) {
    return data.data.map((deal: any) => ({
      from: deal.origin,
      to: deal.destination,
      price: Math.round(deal.value),
      airline: deal.gate || 'Various',
      departDate: deal.depart_date,
      link: `${AFFILIATE_LINK}?origin=${deal.origin}&destination=${deal.destination}&departure_date=${deal.depart_date}`,
      isDirect: deal.number_of_changes === 0
    }));
  }
  return [];
}
