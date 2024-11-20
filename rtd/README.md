project-root/
├── prisma/
│   ├── schema.prisma (green)
│   ├── migrations/ (green)
│   └── seed.ts (green)
├── public/
│   └── assets/ (green)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login.ts (green) done 
│   │   │   │   ├── signup.ts (green) done 
│   │   │   │   └── logout.ts (blue)
│   │   │   ├── teams/
│   │   │   │   ├── create.ts (green) 
│   │   │   │   ├── list.ts (green)
│   │   │   │   └── delete.ts (blue)
│   │   │   ├── tasks/
│   │   │   │   ├── create.ts (green)
│   │   │   │   ├── update.ts (blue)
│   │   │   │   └── delete.ts (blue)
│   │   │   ├── meetings/
│   │   │   │   ├── schedule.ts (blue)
│   │   │   │   ├── list.ts (blue)
│   │   │   │   └── cancel.ts (red)
│   │   │   └── chat/
│   │   │       ├── sendMessage.ts (red)
│   │   │       ├── getMessages.ts (red)
│   │   │       └── createRoom.ts (red)
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.tsx (green)
│   │   │   ├── signup/
│   │   │   │   └── page.tsx (green)
│   │   │   └── forgot-password/
│   │   │       └── page.tsx (red)
│   │   ├── dashboard/
│   │   │   ├── kanban/
│   │   │   │   ├── page.tsx (green)
│   │   │   │   ├── BoardColumn.tsx (green)
│   │   │   │   └── TaskCard.tsx (green)
│   │   │   ├── analytics/
│   │   │   │   └── page.tsx (red)
│   │   │   ├── meetings/
│   │   │   │   └── page.tsx (blue)
│   │   │   ├── chat/
│   │   │   │   ├── page.tsx (red)
│   │   │   │   └── ChatMessage.tsx (red)
│   │   │   ├── layout.tsx (blue)
│   │   │   └── page.tsx (blue)
│   │   ├── settings/
│   │   │   └── page.tsx (blue)
│   │   ├── search/
│   │   │   └── page.tsx (red)
│   │   └── layout.tsx (blue)
│   ├── components/
│   │   ├── Navbar.tsx (green)
│   │   ├── Sidebar.tsx (green)
│   │   ├── Card.tsx (green)
│   │   ├── Button.tsx (green)
│   │   ├── Modal.tsx (blue)
│   │   ├── NotificationBell.tsx (red)
│   │   ├── SearchBar.tsx (red)
│   │   └── UserAvatar.tsx (blue)
│   ├── hooks/
│   │   ├── useAuth.tsx (green)
│   │   ├── useKanban.tsx (green)
│   │   ├── useNotifications.tsx (red)
│   │   └── useChat.tsx (red)
│   ├── lib/
│   │   ├── prisma.ts (green)
│   │   ├── fetcher.ts (blue)
│   │   ├── notifications.ts (red)
│   │   ├── analytics.ts (red)
│   │   └── realTimeService.ts (red)
│   ├── providers/
│   │   ├── AuthProvider.tsx (green)
│   │   ├── KanbanProvider.tsx (green)
│   │   ├── NotificationProvider.tsx (red)
│   │   └── ChatProvider.tsx (red)
│   ├── state/
│   │   ├── store.ts (green)
│   │   └── slices/
│   │       ├── authSlice.ts (green)
│   │       ├── kanbanSlice.ts (green)
│   │       └── notificationSlice.ts (red)
│   ├── styles/
│   │   ├── globals.css (green)
│   │   └── shadcn.config.ts
│   ├── utils/                 # Utility/helper functions
│   │   ├── dateFormatter.ts   # Date formatting utility
│   │   ├── errorHandler.ts    # Global error handler
│   │   └── themeUtils.ts      # Theme-related utilities
└── tsconfig.json              # TypeScript config
