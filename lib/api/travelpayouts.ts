// استيرادات (Imports) إن وجدت
import { NextResponse } from 'next/server';

// الدوال المساعدة (Helper functions) إن وجدت

// الدالة الأولى
export async function getFlightDeals(origin: string, months: number = 6) {
  try {
    const response = await fetch(
      `https://api.travelpayouts.com/v1/prices/cheap?origin=${origin}&currency=USD`,
      {
        headers: {
          'X-Api-Key': process.env.TRAVELPAYOUTS_API_KEY || '',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch flight deals');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching flight deals:', error);
    return [];
  }
}

// الدالة الثانية (مرة واحدة فقط!)
export async function getPopularDestinations() {
  try {
    const response = await fetch(
      'https://api.travelpayouts.com/v1/city-directions?currency=USD',
      {
        headers: {
          'X-Api-Key': process.env.TRAVELPAYOUTS_API_KEY || '',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch popular destinations');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching popular destinations:', error);
    return [];
  }
}

// الدالة الثالثة (إن وجدت)
export async function getHotels(city: string, checkIn: string, checkOut: string) {
  try {
    const response = await fetch(
      `https://api.travelpayouts.com/v1/hotels/search?city=${city}&checkIn=${checkIn}&checkOut=${checkOut}`,
      {
        headers: {
          'X-Api-Key': process.env.TRAVELPAYOUTS_API_KEY || '',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch hotels');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return [];
  }
}
