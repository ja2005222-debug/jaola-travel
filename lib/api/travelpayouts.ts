// src/lib/api/travelpayouts.ts (أضف هذه الدالة)
export async function getPopularDestinations(origin = 'JED') {
  const url = `https://api.travelpayouts.com/v1/city-directions?origin=${origin}&currency=usd&token=${API_TOKEN}`;
  
  const res = await fetch(url);
  const data = await res.json();
  
  if (data.success && data.data) {
    return Object.entries(data.data).map(([code, info]: [string, any]) => ({
      code,
      name: getCityName(code),
      country: getCountryName(code),
      price: Math.round(info.price),
      flag: getFlag(code)
    })).sort((a, b) => a.price - b.price).slice(0, 20);
  }
  return [];
}

function getCityName(code: string): string {
  const cities: Record<string, string> = {
    'DXB': 'Dubai', 'LON': 'London', 'PAR': 'Paris', 'IST': 'Istanbul',
    'CAI': 'Cairo', 'JED': 'Jeddah', 'RUH': 'Riyadh', 'FCO': 'Rome',
    'BCN': 'Barcelona', 'JFK': 'New York', 'MUC': 'Munich', 'ZRH': 'Zurich'
  };
  return cities[code] || code;
}

function getCountryName(code: string): string {
  const countries: Record<string, string> = {
    'DXB': 'UAE', 'LON': 'UK', 'PAR': 'France', 'IST': 'Turkey',
    'CAI': 'Egypt', 'JED': 'Saudi Arabia', 'FCO': 'Italy', 'JFK': 'USA'
  };
  return countries[code] || '';
}

function getFlag(code: string): string {
  const flags: Record<string, string> = {
    'DXB': '🇦🇪', 'LON': '🇬🇧', 'PAR': '🇫🇷', 'IST': '🇹🇷',
    'CAI': '🇪🇬', 'JED': '🇸🇦', 'RUH': '🇸🇦', 'FCO': '🇮🇹',
    'BCN': '🇪🇸', 'JFK': '🇺🇸'
  };
  return flags[code] || '🌍';
}
