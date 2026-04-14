# Morelle Beauty Hub Website

A modern, responsive React website for Morelle Beauty Hub - a premium makeup artistry business in Ilorin, Nigeria.

## 📁 Project Structure

```
beauty-website/
├── src/
│   ├── components/
│   │   ├── layout/               # Navigation, Footer, WhatsApp button
│   │   │   ├── Nav.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── WhatsAppBtn.jsx
│   │   │   └── index.js
│   │   ├── common/               # Reusable UI components
│   │   │   ├── SectionLabel.jsx
│   │   │   ├── DividerLine.jsx
│   │   │   └── common components
│   │   └── pages/                # Page components
│   │       ├── HomePage.jsx
│   │       ├── AboutPage.jsx
│   │       ├── ServicesPage.jsx
│   │       ├── AcademyPage.jsx
│   │       ├── BookingPage.jsx
│   │       ├── ContactPage.jsx
│   │       └── index.js
│   ├── data/                     # Static data and constants
│   │   ├── config.js             # Configuration and settings
│   │   ├── services.js           # Services data
│   │   ├── testimonials.js       # Client testimonials
│   │   ├── achievements.js       # Statistics
│   │   └── index.js              # Data exports
│   ├── styles/
│   │   ├── theme.js              # Color palette and typefaces
│   │   └── global.css            # Global styles and animations
│   ├── utils/
│   │   └── constants.js          # App-wide constants
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # Entry point
├── public/                       # Static assets
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Modern UI**: Premium design with smooth animations
- **Service Showcase**: Detailed service listings with pricing
- **Booking System**: Integrated WhatsApp booking integration
- **Academy Registration**: Course enrollment form
- **Contact Module**: Multi-channel contact options
- **SEO Optimized**: Semantic HTML and optimized structure
- **Performance**: Fast load times with Vite bundler

## 📄 Pages

1. **Home** - Hero showcase with featured services and testimonials
2. **About** - Director bio, brand values, and company story
3. **Services** - Complete service catalog with descriptions and pricing
4. **Academy** - Training programs and enrollment form
5. **Booking** - Session booking with WhatsApp integration
6. **Contact** - Contact form and detailed contact information

## 🛠️ Technologies Used

- **React** 18.3+ - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables and animations
- **HTML5** - Semantic markup

## 🎯 Customization

### Update Configuration
Edit `src/data/config.js` to update:
- Brand name and tagline
- Contact information
- Social media links
- Academy settings

### Update Styles
Modify `src/styles/theme.js` to change:
- Color palette
- Typography
- Global design tokens

### Update Content
Update respective files in `src/data/`:
- Services list
- Testimonials
- Achievements
- Training types

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

All rights reserved © 2026 Morelle Beauty Hub

## 👤 Author

Morelle Beauty Hub - Ilorin, Nigeria
