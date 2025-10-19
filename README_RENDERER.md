Eclipse Market Trading - Renderer UI (Animated Eclipse Theme)

Files in this package are intended to be merged into your existing project's renderer folder.

Quick install:
1. Copy the 'renderer' folder into your project's root so Vite serves it (e.g. project-root/renderer/src/...)
2. Install dependencies:
   npm install recharts lucide-react @radix-ui/react-icons framer-motion
3. Start dev:
   npm run dev
4. For production, build as part of your Electron build process.

Recommendations & next enhancements:
- Replace src/assets/icon.png and splash.png with real images (256x256 for icon, 1280x720 for splash).
- Add accessibility labels and keyboard navigation for sidebar buttons.
- Add lazy-loading for charts and large components to improve startup performance.
- Add a settings toggle to reduce animation intensity for low-end machines.
- Connect MarketChart and LiveFeed to your real backend by replacing the mock generator in Dashboard.jsx.
- Add charts range selector (1h/24h/7d) and tooltips with percentage change.
- Add offline storage & state hydration for last known data in case of connectivity loss.
- Consider adding WebGL accelerated sparkline for high-frequency updates if needed.

