'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Skip static generation for this page
export const dynamic = 'force-dynamic'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to English locale
    router.push('/en')
  }, [router])

  return null
}
