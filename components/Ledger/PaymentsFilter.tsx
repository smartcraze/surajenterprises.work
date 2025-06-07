'use client'

import { useState, useEffect } from "react"
import { format } from "date-fns"
import {
  CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { TransactionType } from "@/generated/prisma"

type Result = {
  total: number
  month?: number
  year?: number
  type: string
}

type AvailableDate = {
  year: number
  months: number[]
}

const transactionTypes = [TransactionType.PAYMENT, TransactionType.ADVANCE, TransactionType.KHARCHI, TransactionType.OTHER] as const

export default function LedgerDashboard() {
  const [type, setType] = useState<typeof transactionTypes[number]>("PAYMENT")
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([])
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [monthsForYear, setMonthsForYear] = useState<number[]>([])
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const [data, setData] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchAvailableDates() {
      try {
        const res = await fetch("/api/ledger/available-dates")
        if (!res.ok) throw new Error("Failed to fetch dates")
        const json: AvailableDate[] = await res.json()
        setAvailableDates(json)
      } catch (err) {
        console.error(err)
      }
    }
    fetchAvailableDates()
  }, [])

  useEffect(() => {
    if (selectedYear === null) {
      setMonthsForYear([])
      setSelectedMonth(null)
    } else {
      const yearObj = availableDates.find((d) => d.year === selectedYear)
      if (yearObj) {
        setMonthsForYear(yearObj.months)
        if (!yearObj.months.includes(selectedMonth ?? -1)) {
          setSelectedMonth(null)
        }
      } else {
        setMonthsForYear([])
        setSelectedMonth(null)
      }
    }
  }, [selectedYear, availableDates])

  useEffect(() => {
    async function fetchLedgerData() {
      setLoading(true)
      try {
        const body: any = { type }
        if (selectedYear !== null && selectedMonth !== null) {
          body.year = selectedYear
          body.month = selectedMonth
        } else if (selectedYear !== null && selectedMonth === null) {
          body.year = selectedYear
        }
        const res = await fetch("/api/ledger/pay", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        if (!res.ok) throw new Error("Failed to fetch ledger data")
        const json: Result = await res.json()
        setData(json)
      } catch (err) {
        console.error(err)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    fetchLedgerData()
  }, [type, selectedYear, selectedMonth])

  return (
    <div className=" ">
      <CardContent className="flex flex-col md:flex-row md:items-center md:gap-3 gap-4">
        {/* Type */}
        <div className="flex flex-col min-w-[100px] w-full md:w-auto">
          <Label className="text-xs mb-0.5">Type</Label>
          <Select
            value={type}
            onValueChange={(v) => setType(v as typeof transactionTypes[number])}
          >
            <SelectTrigger className="text-sm min-w-[100px] w-full" />
            <SelectValue placeholder="Select type" />
            <SelectContent>
              {transactionTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year */}
        <div className="flex flex-col min-w-[90px] w-full md:w-auto">
          <Label className="text-xs mb-0.5">Year</Label>
          <Select
            value={selectedYear === null ? "all" : selectedYear.toString()}
            onValueChange={(v) => setSelectedYear(v === "all" ? null : parseInt(v))}
          >
            <SelectTrigger className="text-sm min-w-[90px] w-full" />
            <SelectValue placeholder="Select year" />
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {availableDates.map(({ year }) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Month */}
        {selectedYear !== null && (
          <div className="flex flex-col min-w-[110px] w-full md:w-auto">
            <Label className="text-xs mb-0.5">Month</Label>
            <Select
              value={selectedMonth !== null ? selectedMonth.toString() : ""}
              onValueChange={(v) => setSelectedMonth(parseInt(v))}
              disabled={monthsForYear.length === 0}
            >
              <SelectTrigger className="text-sm min-w-[110px] w-full" />
              <SelectValue placeholder="Select month" />
              <SelectContent>
                {monthsForYear.map((m) => (
                  <SelectItem key={m} value={m.toString()}>
                    {format(new Date(0, m), "MMMM")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Result */}
        <div className="w-full md:w-auto  text-center ">
          {loading ? (
            <p className="text-muted-foreground text-sm animate-pulse">Loading...</p>
          ) : data ? (
            <p className="text-2xl font-bold text-green-600">
              ₹ {data.total?.toLocaleString() ?? 0}
            </p>
          ) : (
            <p className="text-sm text-destructive">No data</p>
          )}
        </div>
      </CardContent>
    </div>
  )
}
