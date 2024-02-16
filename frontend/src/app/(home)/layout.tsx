import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react';
 

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Analytics />
    </div>
  )
}
