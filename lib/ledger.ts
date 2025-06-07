import prisma from "@/lib/db"
import { TransactionType } from "@/generated/prisma"

export async function getTotalAmountByType(
  type: TransactionType,
  month?: number,
  year?: number
): Promise<{ total: number; month?: number; year?: number }> {

  const whereClause: any = { type }

  if (typeof month === "number" && typeof year === "number") {
    // Filter by given month and year
    whereClause.date = {
      gte: new Date(year, month, 1),
      lte: new Date(year, month + 1, 0), // Last day of month
    }
  }
  // If month or year missing, no date filtering = all time

  const aggregateResult = await prisma.ledgerBook.aggregate({
    where: whereClause,
    _sum: {
      amount: true,
    },
  })

  return {
    total: aggregateResult._sum.amount ?? 0,
    month,
    year,
  }
}





export async function getAvailableYearsMonths() {
  // Query DB for all dates in ledgerBook
  const entries = await prisma.ledgerBook.findMany({
    select: { date: true },
    orderBy: { date: "desc" },
  })

  const yearMonths = new Set<string>()
  entries.forEach(({ date }) => {
    const d = new Date(date)
    yearMonths.add(`${d.getFullYear()}-${d.getMonth()}`)
  })

  const yearsMap = new Map<number, Set<number>>()
  yearMonths.forEach((ym) => {
    const [year, month] = ym.split("-").map(Number)
    if (!yearsMap.has(year)) yearsMap.set(year, new Set())
    yearsMap.get(year)!.add(month)
  })

  return Array.from(yearsMap.entries()).map(([year, monthsSet]) => ({
    year,
    months: Array.from(monthsSet).sort(),
  }))
}
