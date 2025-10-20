# 🏆 SarafCard Admin Portal

<div align="center">

<img src="public/assets/images/admin/sarafcard-logo.png" alt="SarafCard Logo" width="200" height="auto">

**Enterprise-Grade Financial Card Management Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](LICENSE)

[Demo](#-demo) • [Features](#-features) • [Installation](#-installation) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 **Table of Contents**

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Architecture](#-architecture)
- [Security](#-security)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🚀 **Overview**

SarafCard Admin Portal is a comprehensive, enterprise-grade financial administration platform built for managing virtual and physical payment cards, customers, partners, and financial operations. Designed with modern web technologies and following industry best practices for security, performance, and user experience.

### **Key Highlights**

- 🔐 **Enterprise Security** - JWT authentication with OTP verification, RBAC, and route protection
- 💳 **Card Management** - Complete lifecycle management for virtual/physical cards
- 👥 **Customer Operations** - KYC management, transaction tracking, and customer analytics
- 🤝 **Partner Management** - Onboarding, commission tracking, and performance analytics
- 🎫 **Voucher System** - Creation, redemption, and batch processing capabilities
- 📊 **Advanced Analytics** - Real-time dashboards with interactive charts and reporting
- 🌐 **Multi-Provider Support** - Integration with Marqeta, Railsbank, and other card providers
- 📱 **PWA Ready** - Progressive Web App with offline capabilities and mobile optimization

---

## ✨ **Features**

### **🔐 Authentication & Security**

- [x] OTP-based authentication system
- [x] JWT token management with automatic refresh
- [x] Role-based access control (RBAC)
- [x] Session management and timeout handling
- [x] CSRF protection and XSS prevention
- [x] Failed login attempt tracking

### **📊 Dashboard & Analytics**

- [x] Real-time KPI metrics and charts
- [x] Revenue trends and transaction analytics
- [x] Customer growth and partner performance
- [x] Interactive data visualizations (Chart.js)
- [x] Customizable date range filtering
- [x] Export capabilities (PDF, Excel)

### **💳 Card Management**

- [x] Virtual and physical card support
- [x] Visa and Mastercard integration
- [x] Card lifecycle management (issue, block, activate)
- [x] Multi-provider support (Marqeta, Railsbank)
- [x] Transaction tracking and balance monitoring
- [x] Bulk operations and batch processing

### **👥 Customer Management**

- [x] Comprehensive customer search and filtering
- [x] KYC document management and approval workflow
- [x] Customer status management
- [x] Transaction history and analytics
- [x] Customer profile management
- [x] Bulk actions and operations

### **🤝 Partner Management**

- [x] Partner onboarding and approval process
- [x] Balance management and adjustments
- [x] Commission tracking and calculations
- [x] Performance analytics and reporting
- [x] Partner status and relationship management

### **🎫 Voucher System**

- [x] Voucher creation and management
- [x] PIN generation with security masking
- [x] SKU-based voucher categories
- [x] QR code generation and scanning
- [x] Batch processing capabilities
- [x] Redemption tracking and analytics

### **💰 Financial Management**

- [x] Dynamic fee structure configuration
- [x] Multi-tier pricing management
- [x] Transaction fee calculations
- [x] Multi-currency support
- [x] Commission and revenue tracking
- [x] Financial reporting and analytics

### **⚙️ System Configuration**

- [x] Comprehensive system settings
- [x] Notification preferences and alerts
- [x] API configuration and management
- [x] Security and backup settings
- [x] User preferences and customization

### **🌍 Geographic Management**

- [x] Country-specific configurations
- [x] Compliance rules management
- [x] Regional settings and preferences
- [x] Currency and localization support

### **🎨 UI/UX Features**

- [x] Modern glass morphism design
- [x] Dark/Light mode with smooth transitions
- [x] Responsive design (mobile-first approach)
- [x] Touch gestures and mobile optimization
- [x] Animated loading states and micro-interactions
- [x] Accessibility compliance (WCAG 2.1 AA)

---

## 🛠️ **Technology Stack**

### **Frontend Framework**

- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.1** - Component-based UI library
- **TypeScript 5.0** - Type-safe JavaScript

### **State Management**

- **Redux Toolkit (RTK)** - Predictable state container
- **RTK Query** - Data fetching and caching
- **Redux Persist** - State persistence

### **UI & Styling**

- **TailwindCSS 3.4.1** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icons

### **Forms & Validation**

- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation library resolvers

### **Data Visualization**

- **Chart.js** - Simple yet flexible charting
- **React Chart.js 2** - React wrapper for Chart.js
- **date-fns** - Modern JavaScript date utility library

### **HTTP & API**

- **Axios** - Promise-based HTTP client
- **JWT Decode** - JWT token decoder

### **Development Tools**

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS post-processing
- **TypeScript** - Static type checking

### **Utilities**

- **clsx** - Utility for constructing className strings
- **crypto-js** - Cryptographic functions
- **dompurify** - DOM-only XSS sanitizer
- **sonner** - Opinionated toast component
- **cookies-next** - Cookie management

---

## ⚡ **Quick Start**

```bash
# Clone the repository
git clone https://github.com/uzbekhan/sarafcard.io_Admin_Portal.git

# Navigate to project directory
cd sarafcard.io_Admin_Portal

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser and navigate to
# http://localhost:3000
```

---

## 📦 **Installation**

### **Prerequisites**

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher
- **Git** for version control

### **Step-by-Step Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/uzbekhan/sarafcard.io_Admin_Portal.git
   cd sarafcard.io_Admin_Portal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment setup**

   ```bash
   # Copy environment template
   cp .env.example .env.local

   # Edit environment variables
   nano .env.local
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## ⚙️ **Configuration**

### **Environment Variables**

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_BACKEND_API_URL=https://dev.sarafcard.io/api

# Authentication
JWT_SECRET=your_jwt_secret_here
JWT_REFRESH_SECRET=your_jwt_refresh_secret_here

# Third-party Services
MARQETA_API_KEY=your_marqeta_api_key
RAILSBANK_API_KEY=your_railsbank_api_key

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=your_ga_id
SENTRY_DSN=your_sentry_dsn

# Database (if applicable)
DATABASE_URL=your_database_connection_string

# Email Service
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

### **Next.js Configuration**

The `next.config.mjs` file includes:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Additional configurations
};

export default nextConfig;
```

---

## 🎯 **Usage**

### **Authentication**

1. **Login Process**

   ```typescript
   // Navigate to /login
   // Enter email address
   // Receive OTP via email
   // Verify OTP to access dashboard
   ```

2. **Dashboard Access**
   ```typescript
   // Main dashboard: /dashboard
   // Protected routes require authentication
   // Automatic token refresh handling
   ```

### **Core Operations**

#### **Card Management**

```typescript
// Navigate to /dashboard/cards
// View all cards with filtering options
// Create new virtual/physical cards
// Manage card status (block/unblock)
// View transaction history
```

#### **Customer Management**

```typescript
// Navigate to /dashboard/customers
// Search and filter customers
// Manage KYC approval process
// Update customer status
// View customer transaction history
```

#### **Partner Management**

```typescript
// Navigate to /dashboard/partners
// Add new partners
// Manage partner balances
// Track commission and performance
// Update partner status
```

---

## 📚 **API Documentation**

### **Authentication Endpoints**

```typescript
POST / api / auth / request - otp;
POST / api / auth / verify - otp;
POST / api / auth / refresh;
GET / api / auth / me;
```

### **Card Management Endpoints**

```typescript
GET    /api/cards
POST   /api/cards
GET    /api/cards/:id
PUT    /api/cards/:id
DELETE /api/cards/:id
```

### **Customer Management Endpoints**

```typescript
GET    /api/customers
POST   /api/customers
GET    /api/customers/:id
PUT    /api/customers/:id
DELETE /api/customers/:id
```

For complete API documentation, visit: [API Docs](docs/api.md)

---

## 🏗️ **Architecture**

### **Project Structure**

```
src/
├── app/                    # Next.js App Router
│   ├── (withAuthLayout)/   # Authentication routes
│   ├── (withDashboardLayout)/ # Protected dashboard routes
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── shared/           # Shared components
│   └── theme/            # Theme components
├── lib/                  # Utility libraries
├── hooks/                # Custom React hooks
├── redux/                # State management
│   ├── api/             # RTK Query APIs
│   ├── features/        # Redux slices
│   └── store.ts         # Store configuration
├── services/             # Business logic services
├── types/                # TypeScript type definitions
├── styles/               # Global styles
└── middleware.ts         # Route protection middleware
```

### **Component Architecture**

```typescript
// Example component structure
const Component = () => {
  // 1. State management
  const [state, setState] = useState();

  // 2. Redux hooks
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  // 3. API hooks
  const { data, isLoading } = useGetDataQuery();

  // 4. Effect hooks
  useEffect(() => {
    // Side effects
  }, []);

  // 5. Event handlers
  const handleAction = () => {
    // Handle user actions
  };

  // 6. Render
  return <div>Component JSX</div>;
};
```

---

## 🔒 **Security**

### **Authentication Security**

- JWT tokens with automatic refresh mechanism
- OTP verification for enhanced security
- Session timeout and management
- Failed login attempt tracking and blocking

### **API Security**

- Request/response interceptors for token management
- Automatic error handling and retry logic
- Rate limiting and request throttling
- Input validation and sanitization

### **Route Protection**

- Middleware-based route protection
- Role-based access control (RBAC)
- Automatic redirects for unauthorized access
- Protected API endpoints

### **Data Security**

- XSS protection with DOMPurify
- CSRF protection mechanisms
- Secure cookie handling
- Environment variable protection

---

## 🧪 **Testing**

### **Running Tests**

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

### **Testing Strategy**

- **Unit Tests** - Component and utility function testing
- **Integration Tests** - API and service integration testing
- **E2E Tests** - End-to-end user workflow testing
- **Manual QA** - Comprehensive manual testing procedures

---

## 🚀 **Deployment**

### **Build Process**

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

### **Deployment Options**

#### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### **Docker**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### **Static Export**

```bash
# For static hosting
npm run build
npm run export
```

### **Environment-Specific Configurations**

- **Development** - `.env.local`

---

## 🤝 **Contributing**

We welcome contributions! Please follow these guidelines:

### **Development Workflow**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Follow coding standards**
   ```bash
   npm run lint
   npm run format
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### **Coding Standards**

- Follow TypeScript best practices
- Use meaningful variable and function names
- Write clear, concise comments
- Follow the existing code style
- Include tests for new features
- Update documentation as needed

### **Pull Request Guidelines**

- Clear and descriptive title
- Detailed description of changes
- Link to related issues
- Include screenshots for UI changes
- Ensure all tests pass
- Request appropriate reviewers

---

## 📄 **License**

This project is proprietary and confidential. All rights reserved.

```
Copyright (c) 2025 SarafCard
All rights reserved.

This software and associated documentation files (the "Software") are
proprietary and confidential to SarafCard. Unauthorized copying,
distribution, or use of this Software is strictly prohibited.
```

---

## 📞 **Support**

### **Getting Help**

- 📧 **Email Support**: support@sarafcard.com

### **Team**

- **Technical Lead**: @uzbekhan
- **Frontend Developer**: Md Babul Akter
- **Backend Developer**: Tahuruzzoha Tuhin

---

## 🎯 **Roadmap**

### **Version 2.2.0 (Q3 2025)**

- [ ] Enhanced reporting capabilities
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Enhanced mobile experience

### **Version 2.3.0 (Q4 2025)**

- [ ] AI-powered fraud detection
- [ ] Advanced partner portal
- [ ] Real-time notifications
- [ ] Enhanced security features

---

<div align="center">

**Made with ❤️ by the SarafCard Team**

</div>
