# Former Code Connect - Design Guidelines

## Design Approach

**Reference-Based Design**: Drawing inspiration from established marketplace platforms (Airbnb, Upwork, LinkedIn) while maintaining agricultural authenticity. Focus on trust, simplicity, and clear role differentiation for three distinct user types.

## Typography

**Font Families**: 
- Primary: Inter (headings, UI elements) - clean, professional
- Secondary: System UI (body text, forms) - optimal readability

**Hierarchy**:
- Hero Headlines: text-5xl to text-7xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Dashboard Titles: text-2xl, font-semibold
- Card Titles: text-lg to text-xl, font-medium
- Body Text: text-base, font-normal
- Helper Text: text-sm, text-gray-600

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, and 24 consistently (p-4, m-8, gap-6)

**Container Structure**:
- Max-width containers: max-w-7xl for main content
- Dashboard sidebars: w-64 fixed width
- Form containers: max-w-md centered
- Card grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Core Components

### Landing Page Layout

**Hero Section** (h-screen with large background image):
- Full-viewport hero with agricultural landscape image (tractor in field at sunrise/golden hour)
- Centered headline and three role-based CTA buttons (Farmer, Worker, Equipment Provider)
- Buttons with backdrop-blur-md bg-white/20 treatment
- Subtle gradient overlay on image for text readability

**Platform Overview** (py-20):
- Three-column feature grid showcasing platform benefits
- Icon + title + description cards with subtle shadows
- Each column represents one user type's value proposition

**How It Works** (py-24):
- Horizontal timeline or numbered step progression
- Alternating image/text blocks for visual interest
- Screenshots or illustrations of dashboard previews

**Trust Section** (py-16):
- Statistics grid (jobs posted, workers connected, equipment listed)
- Four-column layout with large numbers and labels
- Location-based trust indicators (geolocation feature highlight)

**Final CTA** (py-20):
- Split layout: compelling text left, registration nudge right
- Role-specific sign-up prompts

### Authentication Pages

**Layout**: Centered card design (max-w-md) with subtle shadow
**Structure**:
- Logo/branding at top
- Role selector tabs (Farmer | Coolie | Rental Provider) with active state underline
- Form fields with consistent spacing (space-y-4)
- Input fields: rounded-lg border with focus ring states
- Primary action button: w-full, py-3, rounded-lg
- Secondary links below (Login/Register toggle, Forgot Password)
- Trust badge footer (secured, privacy notice)

**Form Fields**:
- Full name, phone number, location (with geolocation icon button)
- Password with strength indicator
- Role-specific fields (farm size for farmers, vehicle type for rental providers)

### Dashboard Layouts

**Common Structure**:
- Fixed sidebar navigation (w-64) with role-specific menu items
- Main content area with dashboard header (greeting, quick stats)
- Action button in header (Post Job, Find Work, List Equipment)

**Farmer Dashboard**:
- Top stats cards: Active Jobs, Applications Received, Equipment Rentals
- Two-column layout: Posted Jobs (left 2/3) | Available Equipment (right 1/3)
- Job cards with edit/delete actions
- Quick post job floating action button

**Coolie Dashboard**:
- Filter sidebar (location radius, job type, wage range)
- Job listings grid with distance indicator
- Application status tracker section
- Map view toggle option

**Rental Provider Dashboard**:
- Equipment inventory grid with availability status
- Rental request notifications
- Add equipment form with image upload placeholder
- Pricing and availability calendar

### Marketplace Components

**Job Cards**:
- Compact design with farm name, location pin icon, wage highlight
- Quick view of job type, duration, distance
- Apply button with loading state
- Saved/bookmark icon

**Equipment Cards**:
- Image placeholder with equipment type
- Rental price per day/week
- Availability badge
- Request button with modal trigger

### Navigation

**Landing Page Header**:
- Logo left, navigation links center (How It Works, About, Contact)
- Login/Register buttons right
- Sticky on scroll with subtle shadow

**Dashboard Navigation**:
- Sidebar with icon + label menu items
- Active state with background accent
- Profile section at bottom with avatar and name
- Logout link

## Toast Notifications

Position: top-right, fixed
Design: rounded-lg shadow-lg with icon, message, dismiss button
Types: Success (checkmark), Error (alert), Info (bell)
Animation: slide-in from right with fade

## Images

**Hero Image**: Full-width agricultural landscape - golden hour lighting, tractor or workers in field, conveys scale and opportunity

**Feature Section Images**: 
- Dashboard screenshots (mockups showing actual interface)
- Happy farmer/worker photographs (authentic, diverse)
- Equipment photos (tractors, tools, vehicles)

**Trust Section**: Map visualization showing connection network or location pins

## Responsive Breakpoints

Mobile (base): Single column, stacked layout, collapsible sidebar menu
Tablet (md): Two-column grids, condensed dashboard
Desktop (lg+): Full three-column grids, fixed sidebar, optimized spacing

## Accessibility

- High contrast text ratios
- Clear focus states on all interactive elements
- Form labels always visible
- Icon buttons include aria-labels
- Keyboard navigation support throughout