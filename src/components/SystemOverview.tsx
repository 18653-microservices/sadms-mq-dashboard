"use client"
import React from "react"
import { StatsCard } from "@/components/StatsCard"

interface SystemOverviewProps {
  stats: {
    title: string
    count: string | number
    bgColor?: string
  }[]
}

export function SystemOverview({ stats }: SystemOverviewProps) {
  return (
    <section aria-labelledby="system-overview" className="mt-4">
      <h2
        id="system-overview"
        className="text-xl font-bold text-gray-900 dark:text-gray-50"
      >
        System Overview
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {stats.map(({ title, count, bgColor }, index) => (
          <StatsCard
            key={`${title}-${index}`}
            title={title}
            count={count}
            bgColor={bgColor}
          />
        ))}
      </div>
    </section>
  )
}