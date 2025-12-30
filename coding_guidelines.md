# Development Guidelines

## File Structure
/
├── app/
│   ├── api/
│   │   └── inquiry/
│   │       └── route.ts
│   ├── cars/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── car/
│   │   ├── CarCard.tsx
│   │   ├── FilterSidebar.tsx
│   │   └── ImageGallery.tsx
│   └── form/
│       └── InquiryForm.tsx
├── lib/
│   ├── data.ts (Mock data)
│   ├── types.ts (TypeScript interfaces)
│   └── utils.ts
├── public/
│   └── images/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json

## Naming Conventions
**Files:** PascalCase for components (e.g., `CarCard.tsx`), camelCase for utilities/lib files (e.g., `apiUtils.ts`), kebab-case for routes (handled by Next.js file system, usually lowercase).
**Components:** PascalCase (e.g., `function FilterSidebar() {}`).
**Variables/Functions:** camelCase (e.g., `const carList = []`, `function fetchCarData()`).
**Constants/Enums:** UPPER_SNAKE_CASE (e.g., `const API_BASE_URL`).
**Interfaces/Types:** PascalCase (e.g., `interface Car {}`).

## Coding Standards
1. **Strict TypeScript:** Enable strict mode in `tsconfig.json`.
2. **Functional Components:** Use functional components with Hooks exclusively.
3. **Props Destructuring:** Destructure props directly in the function signature for readability.
4. **Tailwind:** Use Tailwind classes for styling; avoid custom CSS unless absolutely necessary (use `@apply` sparingly).
5. **Error Boundaries:** Implement error boundaries for robust error handling in components.
6. **Code Formatting:** Use Prettier for consistent formatting and ESLint for linting.

## Testing Strategy
1. **Unit Testing:** Use Jest and React Testing Library to test individual components (e.g., checking if `CarCard` renders the correct price).
2. **Integration Testing:** Test the filtering logic to ensure that selecting specific criteria updates the displayed list correctly.
3. **E2E Testing:** Use Playwright or Cypress to simulate user flows (e.g., User visits home -> clicks a car -> submits inquiry form).
4. **Visual Regression:** Ensure components render correctly on different viewport sizes.

## Error Handling
1. **Try-Catch Blocks:** Wrap all `fetch` calls and asynchronous operations in try-catch blocks.
2. **Not Found Pages:** Utilize Next.js `not-found()` function for invalid car IDs.
3. **Error Boundaries:** Wrap sections of the app in React Error Boundaries to catch unexpected runtime errors without crashing the whole app.
4. **Form Errors:** Return validation errors from the server and display them inline next to the specific form fields.

## Dependencies
```bash
# Core
npm install next react react-dom typescript

# Styling
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Icons
npm install lucide-react

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers
```

## Configuration
1. **next.config.js:** Default configuration, potentially with `images.domains` configured if external images are used.
2. **tailwind.config.ts:** Configured to scan `./app/**/*.{ts,tsx}` and `./components/**/*.{ts,tsx}` for utility classes.
3. **tsconfig.json:** Configured with `strict: true`, path aliases (e.g., `@/components`).
4. **.eslintrc.json:** Configured with `next/core-web-vitals`.
