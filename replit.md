# ServerEd - Server-Side Engineering Learning Platform

## Overview

ServerEd is a comprehensive educational platform designed to teach server-side engineering fundamentals. The application is a full-stack web application that provides interactive learning content covering essential backend development topics from Git to microservices. It features a modern React frontend with detailed topic exploration and a Node.js/Express backend prepared for data management and user interactions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth transitions and interactions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in memory storage with extensible interface
- **Development**: Hot reloading with tsx

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle migrations in `/migrations` directory
- **Current Implementation**: In-memory storage for development with database-ready interface
- **Connection**: Neon Database serverless connection via `@neondatabase/serverless`

## Key Components

### Frontend Components
1. **Landing Page**: Hero section, course outline, and topics grid
2. **Topic Pages**: Detailed topic exploration with subtopics and examples
3. **Navigation System**: Responsive navigation with smooth scrolling
4. **Modal System**: Interactive topic detail modals
5. **UI Library**: Complete set of reusable components (buttons, cards, forms, etc.)

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
3. **Route Handler**: Centralized route registration system
4. **Development Tools**: Vite integration for development mode

### Shared Components
1. **Database Schema**: User management schema with Zod validation
2. **Type Definitions**: Shared TypeScript interfaces and types

## Data Flow

### Current Architecture
1. **Static Content**: Educational content served from `/client/src/lib/topic-data.ts`
2. **User Interface**: React components fetch and display topic information
3. **Navigation**: Client-side routing handles page transitions
4. **Backend Ready**: API endpoints prepared for user management and progress tracking

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Extensible Design**: Schema prepared for additional features like progress tracking, course enrollment

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Framework**: Radix UI primitives for accessibility
- **Animation**: Framer Motion for enhanced user experience
- **Development**: Vite with hot module replacement

### Authentication & Security
- **Session Management**: Express sessions with PostgreSQL store ready
- **Input Validation**: Zod schemas for runtime type checking
- **Password Security**: Ready for bcrypt or similar hashing

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `/dist/public`
- **Backend**: ESBuild bundles Node.js server to `/dist/index.js`
- **Database**: Drizzle migrations deploy schema changes
- **Environment**: Production configuration via environment variables

### Development Environment
- **Replit Integration**: Configured for Replit development environment
- **Hot Reloading**: Both frontend and backend support hot reloading
- **Database**: PostgreSQL 16 module in Replit environment
- **Port Configuration**: Frontend dev server on 5000, proxied to port 80

### Environment Configuration
- **Development**: `npm run dev` starts both frontend and backend
- **Production**: `npm run build && npm run start`
- **Database**: `npm run db:push` deploys schema changes

## Recent Changes
- June 21, 2025: Major dark theme implementation with topic-specific backgrounds
- Enhanced topic data with comprehensive content for all 14 server-side engineering topics
- Added topic-specific gradient backgrounds and improved visual hierarchy
- Updated all components (navigation, footer, modals, pages) for consistent dark styling
- Expanded educational content with detailed subtopics, mnemonics, and code examples

## Changelog
- June 21, 2025. Initial setup
- June 21, 2025. Dark theme implementation and content enhancement

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Dark theme with topic-specific visual backgrounds for enhanced learning experience.