import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Car } from '@/lib/types';

interface CarCardProps {
  car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
  const { id, make, model, year, price, mileage, transmission, fuelType, images } = car;

  // Format price as currency
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  // Format mileage with commas
  const formattedMileage = new Intl.NumberFormat('en-US').format(mileage);

  // Use first image from array or generate a placeholder
  const imageUrl =
    images && images.length > 0
      ? images[0]
      : `https://placehold.co/400x300/1e293b/ffffff?text=${encodeURIComponent(
          `${year} ${make} ${model}`
        )}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Car Image */}
      <Link href={`/cars/${id}`} className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={`${year} ${make} ${model}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
      </Link>

      {/* Car Info */}
      <div className="flex flex-1 flex-col p-4">
        {/* Header: Title and Price */}
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              <Link
                href={`/cars/${id}`}
                className="transition-colors hover:text-blue-600"
              >
                {year} {make} {model}
              </Link>
            </h3>
          </div>
          <div className="text-lg font-bold text-blue-600 whitespace-nowrap">
            {formattedPrice}
          </div>
        </div>

        {/* Specifications Badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {formattedMileage} mi
          </Badge>
          <Badge variant="secondary" className="text-xs font-medium">
            {transmission}
          </Badge>
          <Badge variant="secondary" className="text-xs font-medium">
            {fuelType}
          </Badge>
        </div>

        {/* View Details Button - Push to bottom */}
        <div className="mt-auto">
          <Link href={`/cars/${id}`} className="block w-full">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
