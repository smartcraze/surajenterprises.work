"use client"

import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { toast } from "react-hot-toast"

type FilterFormValues = {
  labourName: string
  startDate: Date | null
  endDate: Date | null
  month: string
  year: string
  page: number
}

type LedgerEntry = {
  id: number
  LabourName: string
  date: string
  amount: number
  type: string
  paymentMethod: string
  phoneNumber: string
}

export default function LedgerFilter() {
  const { register, handleSubmit, watch, setValue, reset } = useForm<FilterFormValues>({
    defaultValues: {
      labourName: "",
      startDate: null,
      endDate: null,
      month: "",
      year: "",
      page: 1,
    },
  })

  const [results, setResults] = useState<LedgerEntry[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: FilterFormValues) => {
    setLoading(true)

    // Build URL with search params
    const params = new URLSearchParams()
    if (data.labourName) params.append("labourName", data.labourName)
    if (data.startDate && data.endDate) {
      params.append("startDate", format(data.startDate, "yyyy-MM-dd"))
      params.append("endDate", format(data.endDate, "yyyy-MM-dd"))
    } else if (data.month && data.year) {
      params.append("month", data.month)
      params.append("year", data.year)
    }
    params.append("page", data.page.toString())
    params.append("limit", "20")

    try {
      const res = await fetch(`/api/ledger?${params.toString()}`)
      const json = await res.json()
      if (res.ok) {
        setResults(json.data)
        setTotalPages(json.pagination.totalPages)
      } else {
        toast.error(json.error || "Failed to fetch data")
      }
    } catch (error) {
      toast.error("Server error")
    } finally {
      setLoading(false)
    }
  }

  // Watch page changes for pagination
  const page = watch("page")

  // Refetch data on page change
  useEffect(() => {
    handleSubmit(onSubmit)()
  }, [page])

  // Helpers for months and years
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString())
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 10 }, (_, i) => (currentYear - i).toString())

  // Date picker helper for shadcn calendar + popover
  function DatePicker({ label, name }: { label: string; name: "startDate" | "endDate" }) {
    const value = watch(name)
    return (
      <div>
        <Label>{label}</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full text-left">
              {value ? format(value, "PPP") : `Select ${label}`}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={value || undefined}
              onSelect={(date) => {
                setValue(name, date || null)
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <Label>Labour Name</Label>
          <Input {...register("labourName")} placeholder="Enter labour name" />
        </div>

        <DatePicker label="Start Date" name="startDate" />
        <DatePicker label="End Date" name="endDate" />

        {/* Month */}
        <div>
          <Label>Month</Label>
          <Select {...register("month")} onValueChange={(val) => setValue("month", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m) => (
                <SelectItem key={m} value={m}>
                  {new Date(0, Number(m) - 1).toLocaleString("default", { month: "long" })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year */}
        <div>
          <Label>Year</Label>
          <Select {...register("year")} onValueChange={(val) => setValue("year", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end gap-2 col-span-full md:col-auto">
          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Apply Filters"}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              reset()
              setResults([])
            }}
          >
            Reset
          </Button>
        </div>
      </form>

      {/* Result table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Labour Name</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Payment Method</th>
              <th className="border border-gray-300 p-2">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {results.length === 0 ? (
              <tr>
                <td colSpan={2} className="p-4 text-center text-gray-500">
                  No entries found
                </td>
              </tr>
            ) : (
              results.map((entry) => (
                <tr key={entry.id}>
                  <td className="border border-gray-300 p-2">{entry.LabourName}</td>
                  <td className="border border-gray-300 p-2">{new Date(entry.date).toLocaleDateString()}</td>
                  <td className="border border-gray-300 p-2">{entry.amount}</td>
                  <td className="border border-gray-300 p-2">{entry.type}</td>
                  <td className="border border-gray-300 p-2">{entry.paymentMethod}</td>
                  <td className="border border-gray-300 p-2">{entry.phoneNumber}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <Button
            onClick={() => setValue("page", Math.max(1, page - 1))}
            disabled={page <= 1}
          >
            Prev
          </Button>
          <span className="flex items-center px-4">
            Page {page} of {totalPages}
          </span>
          <Button
            onClick={() => setValue("page", Math.min(totalPages, page + 1))}
            disabled={page >= totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
