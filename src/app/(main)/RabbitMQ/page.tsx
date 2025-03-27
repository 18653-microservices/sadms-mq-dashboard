"use client"
import { AreaChart } from "@/components/AreaChart"
import { SystemOverview } from "@/components/SystemOverview"
import { QueueList } from "@/components/QueueList"
import { ChartCard } from "@/components/ui/overview/DashboardChartCard"
import { overviews } from "@/data/overview-data"
import { cx } from "@/lib/utils"
import { subDays, toDate } from "date-fns"
import React from "react"
import { DateRange } from "react-day-picker"

export type PeriodValue = "previous-period" | "last-year" | "no-comparison"

const chartdata = [
  { hour: "00", temperature: 12.8 },
  { hour: "01", temperature: 12.4 },
  { hour: "02", temperature: 12.2 },
  { hour: "03", temperature: 11.9 },
  { hour: "04", temperature: 11.7 },
  { hour: "05", temperature: 11.5 },
  { hour: "06", temperature: 11.3 },
  { hour: "07", temperature: 11.2 },
  { hour: "08", temperature: 11.5 },
  { hour: "09", temperature: 12.0 },
  { hour: "10", temperature: 13.0 },
  { hour: "11", temperature: 14.2 },
  { hour: "12", temperature: 15.5 },
  { hour: "13", temperature: 16.8 },
  { hour: "14", temperature: 17.5 },
  { hour: "15", temperature: 18.1 },
  { hour: "16", temperature: 18.2 },
  { hour: "17", temperature: 17.8 },
  { hour: "18", temperature: 17.2 },
  { hour: "19", temperature: 16.5 },
  { hour: "20", temperature: 15.8 },
  { hour: "21", temperature: 14.9 },
  { hour: "22", temperature: 14.2 },
  { hour: "23", temperature: 13.5 },
]

const statsData = [
  { title: "Queue Count", count: "7,265", bgColor: "bg-indigo-200 dark:bg-indigo-500" },
  { title: "Channel Count", count: "3,671", bgColor: "bg-blue-200 dark:bg-blue-500" },
  { title: "Exchange Count", count: "7,265", bgColor: "bg-indigo-200 dark:bg-indigo-500" },
  { title: "Consumer Count", count: "3,671", bgColor: "bg-blue-200 dark:bg-blue-500" },
]
const myQueues = ["Queue 1", "Queue 2", "Queue 3"]

const chartdata2 = [
  {
    date: "01",
    Publish_Rate: 0.28,
    Delivery_Rate: 0.2338,
  },
  {
    date: "02",
    Publish_Rate: 0.2756,
    Delivery_Rate: 0.2103,
  },
  {
    date: "03",
    Publish_Rate: 0.3322,
    Delivery_Rate: 0.2194,
  },
  {
    date: "04",
    Publish_Rate: 0.3470,
    Delivery_Rate: 0.2108,
  },
  {
    date: "05",
    Publish_Rate: 0.3475,
    Delivery_Rate: 0.1812,
  },
]


const overviewsDates = overviews.map((item) => toDate(item.date).getTime())
const maxDate = toDate(Math.max(...overviewsDates))

export default function Overview() {
  const [selectedDates, setSelectedDates] = React.useState<
    DateRange | undefined
  >({
    from: subDays(maxDate, 30),
    to: maxDate,
  })
  const [selectedPeriod, setSelectedPeriod] =
    React.useState<PeriodValue>("last-year")

  return (
    <>
      <section aria-labelledby="usage-overview">
        <h1
          id="usage-overview"
          className="mt-16 scroll-mt-8 text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50"
        >
          RabbitMQ Monitoring
        </h1>
        <dl
          className={cx(
            "mt-10 grid grid-cols-1 gap-14 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2",
          )}
        >
          <SystemOverview stats={statsData} />

          <div className="mt-8">
            <h2
              id="system-overview"
              className="text-xl font-bold text-gray-900 dark:text-gray-50"
            >
              Queue Status
            </h2>
            <AreaChart
              className="h-56 mt-6"
              data={chartdata}
              index="hour"
              categories={["temperature"]}
              yAxisWidth={40}
              startEndOnly
              connectNulls
              showLegend={false}
              showTooltip={false}
              xAxisLabel="Messages in queue"
            />
          </div>

          <QueueList
            title="Queue List"
            description="Display all queue here"
            queues={myQueues}
          />

          <div className="mt-8">
            <h2
              id="system-overview"
              className="text-xl font-bold text-gray-900 dark:text-gray-50"
            >
              Message Rates
            </h2>
            <AreaChart
              className="h-56 mt-6"
              data={chartdata2}
              index="date"
              categories={["Publish_Rate", "Delivery_Rate"]}
              onValueChange={(v) => console.log(v)}
            />
          </div>

        </dl>

      </section>
    </>
  )
}
