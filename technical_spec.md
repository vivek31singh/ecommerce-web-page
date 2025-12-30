# Technical Specification

## Architecture Patterns
1. **Server-Side Rendering (SSR):** Used for the listing and detail pages to ensure fast initial load and SEO.
2. **Component-Based Architecture:** UI is broken down into atomic, reusable components (atoms, molecules, organisms).
3. **Custom Hooks:** Business logic (like filtering data) is encapsulated in custom hooks to keep components clean.
4. **Layout Pattern:** Utilization of Next.js Layout components to persist the Header and Footer across routes.

## Component Hierarchy
App (Root Layout)
├── Navbar (Global)
├── Footer (Global)
├── Page (Home)
│   └── HeroSection
│   └── FeaturedCars (Carousel or Grid)
├── Page (Inventory / Search)
│   ├── SearchBar (Top)
│   ├── FilterSidebar (Aside)
│   └── CarGrid
│       └── CarCard
│           ├── CarImage
│           ├── CarInfo (Price, Title, Specs)
│           └── ViewDetailsButton
├── Page (Car Details / [id])
│   ├── Breadcrumbs
│   ├── DetailsHeader (Title, Price)
│   ├── ImageGallery
│   ├── SpecsGrid
│   └── ContactFormSection
│       └── InquiryForm
└── Page (API Routes - optional for form handling)
    └── submit-inquiry

## Data Models
interface Car {
  id: string | number;
  make: string; // e.g., "Toyota"
  model: string; // e.g., "Camry"
  year: number;
  price: number;
  mileage: number;
  transmission: "Automatic" | "Manual" | "CVT";
  fuelType: "Gasoline" | "Hybrid" | "Electric" | "Diesel";
  color: string;
  images: string[]; // Array of image URLs
  description: string;
  features: string[]; // e.g., ["Bluetooth", "Backup Camera"]
  vin?: string;
}

interface Inquiry {
  carId: string | number;
  name: string;
  email: string;
  phone: string;
  message: string;
}

## API Design
Since this is primarily a web page, external APIs may not be strictly necessary if using mock data. However, for a production-ready feel, we will design internal Next.js API routes.

**GET /api/cars**
- Returns a list of all cars.
- Query Params: `?make=Toyota&minPrice=20000`
- Response: `{ data: Car[], total: number }`

**GET /api/cars/[id]**
- Returns details for a specific car.
- Response: `{ data: Car }`

**POST /api/inquiry**
- Body: `Inquiry` object.
- Response: `{ success: boolean, message: string }`
- Description: Validates input and sends an email (mocked or via service like Resend/SendGrid).
