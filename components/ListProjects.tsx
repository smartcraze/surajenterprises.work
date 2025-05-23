import { Card } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

export default async function ListProjects() {
  const res = await fetch(`http://localhost:3000/api/projects`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch projects")
  }

  const data = await res.json()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.map((project: any) => (
        <Card
          key={project.id}
          className="p-5 rounded-2xl shadow-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex flex-col justify-between min-h-[240px]"
        >
          <div>
            <h2 className="text-xl font-bold mb-2 text-zinc-800 dark:text-white">{project.name}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{project.address}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-4 flex justify-between gap-2">
            <Link href={`/project-site/${project.id}/labours`}>
              <Button variant="outline" className="w-full">View Labours</Button>
            </Link>

            <Link href={`/projects/${project.id}/edit`}>
              <Button className="w-full">Edit Project</Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  )
}
