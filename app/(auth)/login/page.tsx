"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const signInSchema = z.object({
    phone: z.string().min(10, "Phone must be 10 digits").max(10, "Phone must be 10 digits"),
    password: z.string().optional()
})

type SignInForm = z.infer<typeof signInSchema>

export default function SignInPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [userRole, setUserRole] = useState<"ADMIN" | "FOREMAN" | "HELPER" | "LABOR" | "FITTER" | null>(null)
    const [checkingRole, setCheckingRole] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue
    } = useForm<SignInForm>({
        resolver: zodResolver(signInSchema)
    })

    const handleCheckRole = async () => {
        const phone = getValues("phone")
        if (phone.length !== 10) {
            toast.error("Enter a valid 10-digit phone number")
            return
        }

        setCheckingRole(true)
        try {
            const res = await fetch(`/api/auth/role-check?phone=${phone}`)
            const data = await res.json()

            if (!res.ok) {
                toast.error(data.error || "User not found")
                setUserRole(null)
                return
            }

            setUserRole(data.role)
            toast.success(`Role: ${data.role}`)

        } catch (err) {
            toast.error("Could not check role")
        } finally {
            setCheckingRole(false)
        }
    }

    const onSubmit = async (data: SignInForm) => {
        if ((userRole === "ADMIN" || userRole === "FOREMAN") && !data.password) {
            toast.error("Password required for this role")
            return
        }

        setIsSubmitting(true)

        try {
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            const response = await res.json()

            if (!res.ok) {
                toast.error(response.error || "Something went wrong")
                return
            }
            toast.success("Logged in successfully!")

            
            router.push("/dashboard")
        } catch (err) {
            toast.error("Failed to log in")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 py-6">
            <Toaster position="top-center" />
            <Card className="w-full max-w-md p-6 border-2 border-dotted border-gray-300 dark:border-zinc-600 shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <Label htmlFor="phone" className="dark:text-white mb-2 block">Phone</Label>
                        <Input {...register("phone")} id="phone" className="dark:bg-zinc-800" />
                        <Button type="button" onClick={handleCheckRole} disabled={checkingRole} className="mt-2 w-full">
                            {checkingRole ? "Checking..." : "Check Role"}
                        </Button>
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    {(userRole === "ADMIN" || userRole === "FOREMAN") && (
                        <div>
                            <Label htmlFor="password" className="dark:text-white mb-2 block">Password</Label>
                            <Input {...register("password")} id="password" type="password" className="dark:bg-zinc-800" />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                    )}

                    {userRole && (
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Signing in..." : "Sign In as " + userRole}
                        </Button>
                    )}
                </form>
            </Card>
        </div>
    )
}
