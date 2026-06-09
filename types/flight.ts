// types/flight.ts

export interface FlightResult {
  id: string;
  airline: string;
  origin: string;
  destination: string;
  departureAt: string;
  returnAt?: string;
  duration: number;
  transfers: number;
  price: number;
  link: string;
  currency?: string;
}

export interface SearchParams {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  adults?: number;
  currency?: string;
}

export interface PriceAlert {
  id: string;
  email: string;
  origin: string;
  destination: string;
  departureDate: string;
  currentPrice: number;
  targetPrice: number;
  lastChecked: string;
  createdAt: string;
  isActive: boolean;
  notificationSent: boolean;
}
