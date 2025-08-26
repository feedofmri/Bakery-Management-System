# CrumbCart - Bakery Marketplace Frontend

A modern React.js frontend application for CrumbCart, the ultimate bakery marketplace connecting customers with local bakeries and providing comprehensive business management tools for bakery owners.

## Project Overview

CrumbCart is a comprehensive bakery marketplace platform built with React.js and JavaScript. It serves dual purposes: providing customers with an intuitive shopping experience to discover and order from local bakeries, while offering bakery owners powerful management tools to run their businesses efficiently.

## Team Members

<div align="center">

| Member | Student ID | Role |
|--------|------------|------|
| **Arany Hasan** | 20220204053 | Product Catalog & Inventory UI |
| **Adel Mohammad Zahid** | 20220204057 | Project Setup & Marketplace Dashboard |
| **Rehnuma Tarannum** | 20220204063 | Expense Management & AI Interface |
| **Md. Rubayet Islam** | 20220204069 | Order Processing & Analytics UI |

</div>

### Design System
- **Colors**: Brand color palette
  - **Primary**: `#6639a6` (Deep Purple)
  - **Secondary**: `#7f4fc3` (Medium Purple) 
  - **Accent**: `#9b75d0` (Light Purple)
  - **Dark**: `#4f2c80` (Dark Purple)
  - **Light**: `#ffffff` (White)
  - **Neutral**: `#e6e6e6` (Light Gray)
- **Typography**: Friendly, approachable fonts optimized for both shopping and business use
- **Layout**: Multi-device responsive design supporting customer and vendor interfaces
- **Components**: Unified component library serving marketplace and management functions

## Features

### Customer Marketplace
- **Bakery Discovery**: Browse local bakeries with ratings and reviews
- **Product Catalog**: Visual product showcase with detailed descriptions
- **Smart Search**: Advanced filtering by location, category, dietary preferences
- **Shopping Cart**: Multi-bakery cart management
- **Order Tracking**: Real-time order status updates
- **User Profiles**: Order history, favorites, and preferences

### Bakery Owner Dashboard
- **Business Analytics**: Sales metrics, customer insights, and performance KPIs
- **Order Management**: Centralized order processing and fulfillment
- **Inventory Control**: Real-time stock management with low-stock alerts
- **Customer Relationship**: Review responses and customer communication
- **Revenue Tracking**: Detailed financial reporting and payout management

### Product Management
- **Digital Storefront**: Create and manage bakery product listings
- **Category Organization**: Organize products by type (breads, pastries, cakes, etc.)
- **Seasonal Offerings**: Promote special and limited-time products
- **Bulk Operations**: Efficient batch updates and inventory management
- **Image Gallery**: High-quality product photography showcase

### Advanced Shopping Features
- **Location-Based Discovery**: Find nearby bakeries with delivery options
- **Pre-Order System**: Schedule pickups and deliveries
- **Custom Orders**: Request special occasion cakes and custom bakes
- **Subscription Service**: Regular delivery of favorite items
- **Group Orders**: Coordinate office and event orders

### Marketplace Analytics
- **Customer Insights**: Shopping patterns and preference analysis
- **Vendor Performance**: Bakery rankings and success metrics
- **Market Trends**: Popular products and seasonal demand patterns
- **Geographic Analytics**: Area-wise performance and expansion opportunities

### AI Shopping Assistant
- **Product Recommendations**: Personalized suggestions based on preferences
- **Dietary Guidance**: Allergen alerts and dietary requirement matching
- **Order Assistance**: Natural language ordering and customer support
- **Business Intelligence**: Market insights and optimization recommendations

## Technology Stack

- **Framework**: React 18 with JavaScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit with RTK Query
- **Routing**: React Router v6 with protected routes
- **HTTP Client**: Axios with interceptors
- **UI Framework**: Tailwind CSS with custom components
- **Maps Integration**: Google Maps API for location services
- **Payment Processing**: Stripe integration
- **Real-time Updates**: Socket.io for live order tracking
- **Charts**: Chart.js for analytics visualization
- **Form Handling**: React Hook Form with Yup validation
- **Image Handling**: Cloudinary integration
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- CrumbCart Backend API server
- Google Maps API key
- Stripe publishable key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/crumbcart/marketplace-frontend.git
   cd marketplace-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```env
   VITE_API_URL=http://localhost:8000/api
   VITE_APP_NAME="CrumbCart - Bakery Marketplace"
   VITE_GOOGLE_MAPS_API_KEY=your-google-maps-key
   VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-key
   VITE_OPENAI_API_KEY=your-openai-key
   VITE_SOCKET_URL=http://localhost:8000
   VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
   VITE_APP_VERSION=1.0.0
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components
│   ├── customer/       # Customer-facing components
│   ├── vendor/         # Bakery owner components
│   ├── forms/          # Form components
│   └── layout/         # Layout components
├── pages/              # Page components
│   ├── marketplace/    # Customer marketplace pages
│   ├── vendor/         # Bakery management pages
│   ├── auth/           # Authentication pages
│   └── shared/         # Shared pages
├── hooks/              # Custom React hooks
├── services/           # API service functions
├── store/              # Redux store configuration
├── utils/              # Utility functions
├── constants/          # App constants
└── styles/             # Global styles and themes
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests

## UI/UX Design

### Design Philosophy
- **Customer-First**: Intuitive shopping experience with minimal friction
- **Vendor-Friendly**: Comprehensive tools without overwhelming complexity
- **Mobile-Optimized**: Seamless experience across all devices
- **Accessibility**: WCAG 2.1 compliant design

### Figma Design
➡️ [View Complete Design System](https://www.figma.com/proto/crumbcart-marketplace-design)

## API Integration

### Microservices Architecture
- **User Service**: Authentication and profile management
- **Marketplace Service**: Product catalog and search
- **Order Service**: Order processing and tracking
- **Payment Service**: Stripe integration and transactions
- **Notification Service**: Real-time updates and messaging
- **Analytics Service**: Business intelligence and reporting

### Authentication Flow
- JWT-based authentication with refresh tokens
- Role-based access control (Customer, Vendor, Admin)
- Social login integration (Google, Facebook)
- Multi-factor authentication support

## Testing Strategy

### Testing Stack
- **Unit Tests**: Vitest + React Testing Library
- **Integration Tests**: Cypress
- **E2E Tests**: Playwright
- **API Testing**: MSW (Mock Service Worker)

### Quality Assurance
```bash
npm run test:unit      # Unit tests
npm run test:integration # Integration tests
npm run test:e2e       # End-to-end tests
npm run test:coverage  # Coverage report
```

## Performance & Optimization

### Performance Features
- **Code Splitting**: Route and component-based lazy loading
- **Image Optimization**: Responsive images with lazy loading
- **Caching Strategy**: Redis-backed API response caching
- **CDN Integration**: Static asset delivery optimization
- **Bundle Analysis**: Webpack bundle analyzer integration

### Monitoring
- **Core Web Vitals**: Performance monitoring
- **Error Tracking**: Sentry integration
- **Analytics**: Google Analytics 4 with enhanced ecommerce

## Deployment & DevOps

### Deployment Pipeline
```bash
npm run build          # Production build
npm run docker:build   # Docker containerization
npm run deploy:staging # Staging deployment
npm run deploy:prod    # Production deployment
```

### Recommended Infrastructure
- **Frontend**: Vercel/Netlify with CDN
- **Container**: Docker + Kubernetes
- **Monitoring**: New Relic/DataDog
- **CI/CD**: GitHub Actions

## Security & Compliance

### Security Measures
- **Content Security Policy**: XSS protection
- **Input Validation**: Comprehensive sanitization
- **Rate Limiting**: API abuse prevention
- **HTTPS Enforcement**: SSL/TLS everywhere
- **PCI Compliance**: Secure payment processing

### Data Privacy
- **GDPR Compliance**: User data protection
- **Cookie Management**: Consent management
- **Data Encryption**: At-rest and in-transit encryption

## Multi-Platform Support

### Responsive Breakpoints
- **Mobile**: 320px - 768px (Touch-optimized)
- **Tablet**: 768px - 1024px (Hybrid interface)
- **Desktop**: 1024px+ (Full feature set)

### Progressive Web App (PWA)
- **Offline Support**: Cached product browsing
- **Push Notifications**: Order updates and promotions
- **App-like Experience**: Native app functionality

## Roadmap & Development Phases

### Phase 1: Marketplace Foundation ✅
- [ ] Customer marketplace interface
- [ ] Bakery registration and onboarding
- [ ] Basic product catalog and search
- [ ] Order processing system

### Phase 2: Enhanced Shopping Experience 🔄
- [ ] Advanced filtering and personalization
- [ ] Real-time inventory updates
- [ ] Multi-payment options integration
- [ ] Mobile app development

### Phase 3: Business Intelligence ⏳
- [ ] Advanced analytics dashboard
- [ ] AI-powered recommendations
- [ ] Marketing automation tools
- [ ] API marketplace for third-party integrations

### Phase 4: Scale & Expansion 📋
- [ ] Multi-city expansion tools
- [ ] White-label solutions
- [ ] Enterprise bakery chains support
- [ ] International market preparation

## Contributing

We welcome contributions to CrumbCart! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and development process.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

## License

This project is developed for **CSE 3104 Database Lab** at Ahsanullah University of Science and Technology. The CrumbCart marketplace concept is intended for academic purposes and educational demonstration.

## Business Model

### Revenue Streams
- **Commission**: Percentage fee on each transaction
- **Subscription**: Premium features for bakery owners
- **Advertising**: Promoted listings and featured placements
- **Analytics**: Business intelligence services

### Market Positioning
CrumbCart bridges the gap between traditional local bakeries and modern e-commerce expectations, empowering small businesses while providing customers with convenient access to artisanal baked goods.

---

**Project**: CrumbCart - Bakery Marketplace  
**Course**: CSE 3104 Database Lab  
**Institution**: Ahsanullah University of Science and Technology  
**Semester**: Fall 2024  
**Vision**: Connecting communities through the love of freshly baked goods
