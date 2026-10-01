# Mouhamed Abbadi — Executive Virtual Assistant Portfolio

A modern, high-performance portfolio website built for **Mouhamed Abbadi**, Virtual Assistant specializing in Customer Support, E-commerce Operations, Order Management, and Lead Generation.

## 🚀 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Custom warm luxury editorial palette)
- **Icons:** Lucide React & Custom SVG brand logos
- **Deployment:** Vercel

## 📁 Project Structure

```
├── public/                     # Static public assets
│   ├── logos/                  # Client and brand logos
│   │   ├── baba-algeria.jpg
│   │   ├── dr-john-andrus.jpg
│   │   ├── go-forth-goods.jpg
│   │   ├── jnk-nutrition.png
│   │   └── world-express.jpg
│   └── mouhamed_abbadi.jpg     # Profile portrait image
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── AboutApproach.jsx   # Bio and 5 working principles
│   │   ├── CaseStudies.jsx     # Selected work & interactive case studies
│   │   ├── ClosingFooter.jsx   # Footer with Upwork links
│   │   ├── CredibilityBar.jsx  # Trust indicators & credentials
│   │   ├── DayInTheLife.jsx    # Daily capability workflow
│   │   ├── ExperienceTimeline.jsx # Career history & technical background
│   │   ├── Hero.jsx            # Editorial hero section
│   │   ├── HowIWork.jsx        # 5-step operational process
│   │   ├── MeasurableStats.jsx # Results at a glance & metrics
│   │   ├── Navbar.jsx          # Sticky header with scroll progress
│   │   ├── ServicesGrid.jsx    # Expandable core capabilities
│   │   ├── ToolsAndSystems.jsx # Professional toolkit with brand logos
│   │   └── WorkflowLibrary.jsx # Step-by-step operational workflows
│   ├── data/
│   │   └── portfolioData.js    # All portfolio content & data models
│   ├── App.jsx                 # Main application layout
│   ├── index.css               # Global styles & Tailwind directives
│   └── main.jsx                # Application root entry
├── index.html                  # HTML entry point with SEO metadata
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Tailwind theme configuration
├── vercel.json                 # Vercel deployment configuration
└── vite.config.js              # Vite configuration
```

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

## 🌐 Deploy to Vercel

### Method 1: Via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Mouhamed Abbadi Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New"** > **"Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically be detected as **Vite**.
5. Click **"Deploy"**.

### Method 2: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the CLI prompts and select default settings.
