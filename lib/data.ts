import { Car } from './types';

export const mockCars: Car[] = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 28500,
    mileage: 15000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    color: 'Silver',
    images: ['/images/car-placeholder.jpg'],
    description: 'Well-maintained Camry with excellent fuel economy.',
    features: ['Bluetooth', 'Backup Camera', 'Lane Assist'],
    vin: '1HGCM82633A123456',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2023,
    price: 24500,
    mileage: 8000,
    transmission: 'CVT',
    fuelType: 'Gasoline',
    color: 'Blue',
    images: ['/images/car-placeholder.jpg'],
    description: 'Like-new Civic with great reliability.',
    features: ['Bluetooth', 'Apple CarPlay', 'Android Auto'],
    vin: '2HGFC2F57KH543210',
  },
  {
    id: 3,
    make: 'Tesla',
    model: 'Model 3',
    year: 2022,
    price: 38000,
    mileage: 20000,
    transmission: 'Automatic',
    fuelType: 'Electric',
    color: 'White',
    images: ['/images/car-placeholder.jpg'],
    description: 'Electric performance with Autopilot capability.',
    features: ['Autopilot', 'Navigation', 'Premium Audio'],
    vin: '5YJ3E1EA1JF987654',
  },
  {
    id: 4,
    make: 'Ford',
    model: 'F-150',
    year: 2021,
    price: 42000,
    mileage: 35000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    color: 'Black',
    images: ['/images/car-placeholder.jpg'],
    description: 'Powerful truck ready for work or play.',
    features: ['Towing Package', '4WD', 'Bed Liner'],
    vin: '1FTEW1EP4MFA12345',
  },
  {
    id: 5,
    make: 'BMW',
    model: '3 Series',
    year: 2020,
    price: 35000,
    mileage: 28000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    color: 'Gray',
    images: ['/images/car-placeholder.jpg'],
    description: 'Luxury sedan with premium features.',
    features: ['Leather', 'Sunroof', 'Navigation'],
    vin: 'WBA8E9C55LGA54321',
  },
  {
    id: 6,
    make: 'Chevrolet',
    model: 'Equinox',
    year: 2023,
    price: 26500,
    mileage: 12000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    color: 'Red',
    images: ['/images/car-placeholder.jpg'],
    description: 'Spacious SUV perfect for families.',
    features: ['Rear Camera', 'Bluetooth', 'Remote Start'],
    vin: '2GNAXHEV2P6123456',
  },
];

export const getCarById = (id: string | number): Car | undefined => {
  return mockCars.find(car => car.id === id);
};

export const filterCars = (filters: Partial<Car>): Car[] => {
  return mockCars.filter(car => {
    let matches = true;
    if (filters.make && car.make !== filters.make) matches = false;
    if (filters.year && car.year !== filters.year) matches = false;
    if (filters.price && car.price > filters.price) matches = false;
    return matches;
  });
};