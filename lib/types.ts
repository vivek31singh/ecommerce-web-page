export interface Car {
  id: string | number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: 'Automatic' | 'Manual' | 'CVT';
  fuelType: 'Gasoline' | 'Hybrid' | 'Electric' | 'Diesel';
  color: string;
  images: string[];
  description: string;
  features: string[];
  vin?: string;
}

export interface Inquiry {
  carId: string | number;
  name: string;
  email: string;
  phone: string;
  message: string;
}