import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    // gap-5 p-8
    <div className="mx-auto grid min-h-screen w-full max-w-[1600] grid-rows-app">
      {children}
    </div>
  )
}
