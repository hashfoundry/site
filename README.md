# HashFoundry React Website

This is a React implementation of the HashFoundry website, converted from the original HTML/CSS/JS version. The React version maintains all the functionality and design of the original site while adding the benefits of component-based architecture.

## Features

- **Component-Based Architecture**: Modular and maintainable code structure
- **Theme Switching**: Toggle between light and dark modes with state persistence
- **Language Switching**: Switch between English and Russian with state persistence
- **Responsive Design**: Fully responsive layout for all device sizes
- **Interactive Elements**: Animations and interactive UI components

## Project Structure

```
hashfoundry-react/
├── public/                 # Public assets
├── src/                    # Source code
│   ├── assets/             # Assets (CSS, images, etc.)
│   │   └── css/            # CSS files
│   ├── components/         # React components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   ├── sections/       # Page section components
│   │   └── ui/             # UI components (ThemeToggle, LanguageSelector)
│   ├── context/            # React context providers
│   ├── hooks/              # Custom React hooks
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
└── package.json            # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd hashfoundry-react
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Development

To start the development server:

```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build:

```
npm run build
```

This will create an optimized build in the `build` folder, ready for deployment.

## Deployment

### Option 1: Static Hosting

The built React app can be deployed to any static hosting service:

1. Build the project:
   ```
   npm run build
   ```

2. Upload the contents of the `build` folder to your hosting provider.

### Option 2: Using Docker

A Dockerfile is included for containerized deployment:

1. Build the Docker image:
   ```
   docker build -t hashfoundry-react .
   ```

2. Run the container:
   ```
   docker run -p 80:80 hashfoundry-react
   ```

3. Access the website at http://localhost

### Option 3: Using Docker Compose

For a more complete setup with Docker Compose:

1. Run the following command:
   ```
   docker-compose up -d
   ```

2. Access the website at http://localhost

## Customization

### Changing Theme Colors

Theme colors are defined in `src/assets/css/GlobalStyles.js`. You can modify the color variables to customize the appearance.

### Adding New Sections

To add a new section:

1. Create a new component in the `src/components/sections` directory
2. Import and add the component to `App.js`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
