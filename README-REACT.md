# LTIMindtree Evolution - React Application

A modern React application showcasing the major milestones in the evolution of LTIMindtree, from two pioneering companies to India's leading digital transformation partner.

## 🚀 Features

- **Interactive Timeline Navigation**: Switch between L&T Infotech, Mindtree, and merger timelines
- **Responsive Design**: Optimized for all device sizes
- **Modern React Architecture**: Component-based structure with TypeScript
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Company Statistics**: Real-time display of key metrics and achievements

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **CSS3** with modern features (Grid, Flexbox, Custom Properties)
- **Font Awesome** for icons
- **Inter Font** for typography

## 📦 Project Structure

```
src/
├── components/
│   ├── BackgroundAnimation.tsx    # Animated background
│   ├── HeroSection.tsx           # Header with company stats
│   ├── TimelineNavigation.tsx    # Tab navigation
│   ├── TimelineContainer.tsx     # Timeline content manager
│   ├── Milestone.tsx             # Individual milestone cards
│   ├── CapabilitiesSection.tsx   # Company strengths
│   ├── Footer.tsx               # Footer with links
│   └── milestoneData.ts         # Timeline data
├── App.tsx                      # Main application component
├── App.css                     # Application styles
├── index.css                   # Global styles
└── main.tsx                    # Application entry point
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd milestones-page
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🎨 Key Components

### TimelineNavigation
Provides tabbed navigation between three main timelines:
- L&T Infotech Journey (1996-2021)
- Mindtree Journey (1999-2019)
- The Merger Story (2019-Present)

### Milestone
Reusable component for displaying individual timeline events with:
- Year indicator
- Title and description
- Relevant tags
- FontAwesome icons
- Hover animations

### CapabilitiesSection
Showcases the complementary strengths of both companies:
- LTI's BFSI and enterprise expertise
- Mindtree's TMT and experience design
- Combined digital transformation capabilities

## 🎯 Educational Purpose

This project is created for educational purposes to demonstrate:
- React component architecture
- TypeScript integration
- Modern CSS techniques
- Responsive web design
- Interactive timeline interfaces

## 📊 Company Milestones Covered

### L&T Infotech Timeline
- Foundation (1996)
- Quality certifications and rebranding
- IPO and public listing (2016)
- Strategic acquisitions (2017-2021)

### Mindtree Timeline
- Startup founding (1999)
- Public debut (2007)
- Global expansion
- $1B revenue milestone (2019)

### Merger Timeline
- L&T acquisition of Mindtree (2019)
- Merger announcement and completion (2022)
- Synergy realization and current status

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is for educational purposes. All company information is sourced from publicly available data.

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment with the code to learn React and modern web development techniques.

---

*Created with React + TypeScript + Vite for modern web development practices*
