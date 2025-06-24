# LitLoop

LitLoop is a modern web application for book enthusiasts, allowing users to discover, search, and manage their favorite books. This is the frontend repository of the application, built with React and modern web technologies.

## Features

- 📚 Book search and discovery
- 🔍 Advanced filtering options
- 💫 Responsive and modern UI with Framer Motion animations
- 🌍 Internationalization support (i18n)
- 👤 User authentication and profiles
- ❤️ Favorite books management
- 🎨 Theme customization

## Technology Stack

- React 18
- React Router for navigation
- Zustand for state management
- Axios for API requests
- i18next for internationalization
- Framer Motion for animations
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/litloop__front.git
cd litloop__front
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Available Scripts

- `npm start`: Runs the development server
- `npm test`: Runs the test suite
- `npm run build`: Creates a production build

## Project Structure

```
src/
├── assets/          # Static assets like images
├── components/      # Reusable React components
├── contexts/        # React context providers
├── layouts/         # Layout components
├── middlewares/     # Authentication and other middlewares
├── pages/          # Main application pages
├── routes/         # Route configurations
├── services/       # API and other services
└── utils/          # Utility functions
```

## Key Components

- `BookCard`: Displays individual book information
- `BookFilter`: Implements book filtering functionality
- `BookSearch`: Handles book search functionality
- `FavoriteBooks`: Manages user's favorite books
- `ProfileBanner`: Displays user profile information
- `Navbar`: Main navigation component

## State Management

The application uses Zustand for state management, with separate stores for:
- Book details
- Book listings
- Filters
- Theme preferences
- Authentication state

## Authentication

Authentication is handled through JWT tokens with secure storage and automatic token refresh functionality. Protected routes are managed through the `AuthMiddleware`.

