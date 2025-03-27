"use client"
import React from "react"

interface QueueListProps {
  title?: string
  description?: string
  queues: string[]
}

export function QueueList({
  title = "Queue List",
  description = "Display all queue here",
  queues,
}: QueueListProps) {
  return (
    <section aria-labelledby="queue-list" className="mt-4 max-w-sm">
      <h2
        id="queue-list"
        className="text-xl font-bold text-gray-900 dark:text-gray-50"
      >
        {title}
      </h2>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>

      <ul className="mt-4 divide-y divide-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-200">
        {queues.map((item) => (
          <li key={item} className="py-2">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}