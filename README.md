# VenueFlow: The Smart Stadium Experience

## Overview
VenueFlow is a high-end, mobile-first Next.js application designed to optimize the attendee experience at large-scale physical events. By integrating real-time data and Google AI, VenueFlow eliminates the chaos of modern sporting events.

### The Chosen Vertical
**Physical Event Management & Smart Stadiums.**
We chose this vertical because large-scale sporting and concert venues suffer from massive logistical inefficiencies: agonizing restroom queues, congested exits, and lack of real-time coordination. VenueFlow solves this by turning raw stadium data into actionable, seamless fan experiences.

### Approach and Logic
Our approach was to build a mobile-optimized dashboard, acting as a "digital concierge" in the palm of every attendee's hand. 
The logic is driven by three core pillars:
1. **Context-Aware Wayfinding:** Utilizing a "Live Venue Map" (Heatmap) framework that dynamically routes users away from heavy traffic zones.
2. **Zero-Wait Concessions:** Permitting users to order food from their seats with calculated preparation times, effectively eliminating physical queues.
3. **Intelligent Assistance:** Deeply integrating Google Gemini (`@google/genai`) to ingest the actual real-time state of the stadium. If a user asks a question, the AI intercepts their seating section and crowd data to provide safe, logical, and optimized routing decisions.

### How the Solution Works
1. **The Navigation Hub:** Attendees log into the dashboard upon arriving at their seat (mocked here as Section 114, Row G).
2. **Real-time Monitoring:** The UI connects to mock real-time data streams displaying which exits are congested and how long concession orders will take.
3. **VenueAI API Endpoint:** When a user queries the floating AI widget (e.g., "Where is the bathroom?"), a Next.js Serverless Route (`/api/chat`) compiles a strict system prompt containing the user's location and current stadium bottlenecks. This is securely sent to Google Gemini, which enforces logical routing and returns a context-perfect answer.

### Assumptions Made
- We assumed the stadium backend is already equipped with crowd-density sensors (IoT) and point-of-sale systems that can feed our Next.js frontend with live metadata.
- We assumed users will be accessing this predominantly on their cellular devices; therefore, the solution aggressively leverages Server-Side Rendering (Next.js App Router) and touch-friendly Tailwind v4 / Framer Motion elements for low-bandwidth, high-latency stadium environments.
- API requests assume a working and authenticated `GEMINI_API_KEY` defined in the application environment variables.

---

## 🚀 Getting Started

### Installation
1. Clone the repository.
2. Ensure you have Node.js installed.
3. Run `npm install` to install all dependencies (`framer-motion`, `lucide-react`, `@google/genai`, etc.).

### Environment Variables
For the VenueAI Smart Assistant to work, create a `.env.local` file in the root directory and add:
```
GEMINI_API_KEY=your_actual_google_gemini_key_here
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the mobile-optimized dashboard.

### Running Tests
The project includes a Vitest testing suite configured for React Component verification.
```bash
npm run test
```
