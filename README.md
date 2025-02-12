# Adetimmy's Modern React/Next.js Monorepo

A high-performance monorepo template featuring:
- ⚛️ React 19 + Next.js 15
- 🎨 shadcn UI components with Tailwind CSS
- 🔄 TanStack React-Query v5 + Axios data layer
- 🚀 Optimized data fetching patterns
- 🔄 Hybrid client/server data management

## ✨ Features
- **UI System**: Pre-configured shadcn UI components with Tailwind V4 theming
- **Data Layer**: Unified data fetching with React-Query + Axios
- **Param Handling**: Flexible URL parameter management (query params, IDs, custom endpoints)
- **Server Integration**: Seamless server-side fetching with client hydration
- **Type Safety**: Full TypeScript support
- **Monorepo Structure**: Scalable project organization

## 🛠️ Tech Stack
- **Frontend**: React 19, Next.js 15
- **Styling**: shadcn UI, Tailwind V4 CSS
- **State Management**: TanStack React-Query
- **HTTP Client/Server**: Axios
- **Build Tool**: Turborepo (recommended)
- **Package Manager**: pnpm

## 🚀 Getting Started

### 1. Installation
```sh
# Clone repository
git clone https://github.com/Adetimmy/Mono-Repo.git
cd your-monorepo

# Install dependencies
pnpm install
```

### 2. Add new ShadCn UI component
```sh
pnpm dlx shadcn@canary add [component-name]
```

### 3. Folder Structure
```
/
├── action/                # server actions
├── apps/                  # Next.js application
│── components/            # shadcn UI components
|── hooks/                 # Custom hooks
|── lib/
        └── Axios Config
        └── Query Client
        └── Toast Notification Handler
        └── Axios Error Handler
        └── Type Guards
├── packages/              # Shared code (optional)
└── next.config.ts         # Remote Images Config
```