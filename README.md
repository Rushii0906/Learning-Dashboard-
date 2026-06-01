# Next-Gen Learning Dashboard

A modern learning dashboard built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

The dashboard helps learners track course progress, monitor learning activity, and stay motivated through a clean and responsive user experience.

---
# Live Demo : https://learning-dashboard-indol.vercel.app/

## Features

### Dashboard Overview
- Personalized welcome section
- Learning streak indicators
- Active course summary
- Progress overview

### Course Management
- Dynamic course cards
- Progress tracking
- Course-specific icons
- Animated progress bars

### Learning Activity
- GitHub-inspired activity heatmap
- Learning statistics
- Study hour tracking
- Current streak tracking

### User Experience
- Dark modern UI
- Responsive design
- Hover interactions
- Smooth animations
- Loading states
- Error handling

### Accessibility
- Semantic HTML structure
- ARIA labels
- Accessible navigation
- Screen reader friendly components

---

## Tech Stack

### Frontend
- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS

### Animations
- Framer Motion

### Icons
- Lucide React

### Backend & Database
- Supabase

### Deployment
- Vercel

---

## Project Structure

```text
app/
│
├── components/
│   ├── Sidebar.tsx
│   ├── HeroTile.tsx
│   ├── CourseCard.tsx
│   ├── ActivityTile.tsx
│   └── AnimatedProgress.tsx
│
├── lib/
│   ├── getCourses.ts
│   └── supabase.ts
│
├── page.tsx
├── loading.tsx
└── error.tsx
```

---

## Getting Started

### Clone Repository

```bash
git clone <https://github.com/Rushii0906/Learning-Dashboard-.git>
cd next-gen-learning-dashboard
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Loading State

The application includes a custom loading skeleton that mimics the final dashboard layout while data is being fetched.

---

## Error Handling

A dedicated error boundary is implemented to handle unexpected runtime errors and provide users with a recovery option.

---

## Accessibility Features

- Semantic HTML elements
- Navigation landmarks
- ARIA labels
- Keyboard-friendly interactions
- Accessible visual hierarchy

---

## Design Decisions

### Dark Theme First
The interface uses a dark-first design system with subtle hover glows and minimal gradients to create a modern learning experience.

### Component-Based Architecture
The application is divided into reusable UI components to improve maintainability and scalability.

### Progressive Enhancement
Animations and visual effects enhance the experience without affecting functionality.

---

## Future Improvements

- User Authentication
- Course Detail Pages
- Real Learning Analytics
- Learning Goals
- Achievement System
- Notifications
- Calendar Integration
- Activity History
- User Profiles

---
## Challenges Faced
-Server vs Client Components
One challenge was deciding which components should remain server-rendered and which required client-side rendering.
Animations using Framer Motion required client components, while data fetching was kept on the server for better performance.

-Responsive Layout
Ensuring the dashboard remained visually consistent across desktop and mobile devices required multiple layout refinements.

## Author

Rushi Pawar

Built as part of a Frontend Developer assessment project using Next.js, TypeScript, Tailwind CSS, Framer Motion, and Supabase.
