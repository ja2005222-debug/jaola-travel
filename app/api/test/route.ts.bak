import { getFlightDeals } from '@/lib/api/travelpayouts';
import { NextResponse } from 'next/server';

export async function GET() {
  const deals = await getFlightDeals('JED', 3);
  return NextResponse.json(deals);
}
