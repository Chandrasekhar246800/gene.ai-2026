# GENE.AI 2026 Conference Website

A premium, institutional, research-grade conference website for the GENE.AI 2026 Summit on Genome Engineering & Artificial Intelligence.

## 🎯 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Modular component architecture**
- **SEO optimized**
- **Fully responsive design**
- **Ready for Vercel deployment**

## 🎨 Design System

- **Theme**: BioTech + Artificial Intelligence Fusion
- **Color Palette**:
  - Deep Navy: #0B1E3D
  - Emerald Green: #00B894
  - Electric Blue: #1E90FF
- **Visual Style**: Academic, institutional, glassmorphism effects
- **Typography**: Inter font

## 📋 Sections

1. **Sticky Navbar** - Blurred navbar with scroll effects
2. **Hero Section** - Animated DNA background with event details
3. **About** - Conference overview and organizers
4. **Session Highlights** - AI and genomics topics
5. **Organizing Team** - Complete leadership structure
6. **Distinguished Speakers** - Full speaker lineup
7. **Registration** - Fees, deadlines, and participation info
8. **Contact & Footer** - Contact information and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory:
```bash
cd geneai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
geneai/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero section
│   ├── DNABackground.tsx   # Animated DNA SVG
│   ├── About.tsx           # About section
│   ├── Sessions.tsx        # Session highlights
│   ├── Organizers.tsx      # Organizing team
│   ├── Speakers.tsx        # Speaker cards
│   ├── Registration.tsx    # Registration details
│   └── Contact.tsx         # Contact & footer
├── data/
│   ├── config.ts           # Event configuration
│   ├── speakers.ts         # Speaker data
│   └── team.ts             # Organizing team data
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎯 Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

The project can also be deployed to:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Any platform supporting Node.js

## 📝 Configuration

Edit event details in `data/config.ts`:
- Event name, dates, venue
- Registration link
- Contact information
- Deadlines and fees

## 🎨 Customization

- **Colors**: Modify `tailwind.config.ts`
- **Content**: Update data files in `/data` folder
- **Components**: Edit components in `/components` folder
- **Styles**: Customize in `app/globals.css`

## 📧 Contact

**Email**: geneai.sist@gmail.com  
**Phone**: 9597377761, 9150581602

## 📄 License

© 2026 GENE.AI Conference. All Rights Reserved.

---

**DST-TIDE Sponsored Summit**  
Sathyabama Institute of Science & Technology  
Chennai, India
