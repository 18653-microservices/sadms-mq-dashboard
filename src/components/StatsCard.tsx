"use client"
import React from "react"

interface StatsCardProps {
  title: string          
  count: string | number  
  bgColor?: string      
}

export function StatsCard({
  title,
  count,
  bgColor = "bg-indigo-50", 
}: StatsCardProps) {
  return (
    <div className={`rounded-lg p-4 ${bgColor}`}>
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
        {title}
      </h3>
      <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-50">
        {count}
      </p>
    </div>
  )
}