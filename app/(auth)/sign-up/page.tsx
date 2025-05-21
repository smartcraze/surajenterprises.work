"use client"

import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Role } from "@/generated/prisma"
import { Toaster } from "react-hot-toast"
import toast from "react-hot-toast"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const signupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    address: z.string().min(1, "Address is required"),
    phone: z.string().min(10).max(10, "Phone must be 10 digits"),
    password: z.string().min(8).optional(),
    role: z.nativeEnum(Role),
    rate: z.coerce.number().min(0),
    bankName: z.string().min(1),
    bankAccountNumber: z.string().min(1),
    bankIFSC: z.string().min(1),
    picture: z.any().optional()
})

type SignUpForm = z.infer<typeof signupSchema>

export default function SignUpPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [preview, setPreview] = useState<string | null>(null)
    const [mobileExists, setMobileExists] = useState(false)
    const [checkingPhone, setCheckingPhone] = useState(false)
    const [toastShown, setToastShown] = useState(false)

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<SignUpForm>({
        resolver: zodResolver(signupSchema)
    })

    const phone = useWatch({ control, name: "phone" })

    useEffect(() => {
        const delayDebounce = setTimeout(async () => {
            if (phone && phone.length === 10) {
                setCheckingPhone(true)
                try {
                    const res = await fetch('/api/auth/mobile-exist', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ phone }),
                    })
                    const data = await res.json()
                    setMobileExists(data.exists)
                    if (data.exists && !toastShown) {
                        toast.error("Phone number already exists in database")
                        setToastShown(true)
                    } else if (!data.exists) {
                        setToastShown(false)
                    }
                } catch (error) {
                    console.error("Error checking phone:", error)
                } finally {
                    setCheckingPhone(false)
                }
            } else {
                setMobileExists(false)
                setToastShown(false)
            }
        }, 500)

        return () => clearTimeout(delayDebounce)
    }, [phone])

    const onSubmit = async (data: SignUpForm) => {
        if (mobileExists) {
            toast.error("Phone number already exists.")
            return
        }

        setIsSubmitting(true)
        try {
            const formData = new FormData()
            Object.entries(data).forEach(([key, value]) => {
                if (key === "picture" && value instanceof FileList) {
                    formData.append("file", value[0])
                } else {
                    formData.append(key, String(value))
                }
            })

            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                const error = await response.json()
                throw new Error(error.message || 'Something went wrong')
            }

            toast.success('Account created successfully!')
            router.push('/login')
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to create account')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => setPreview(reader.result as string)
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="min-h-screen mt-15 bg-white dark:bg-black px-4 py-6 flex items-center justify-center">
            <Toaster position="top-center" />
            <Card className="w-full max-w-4xl p-6 border-dotted border-2 border-gray-300 dark:border-zinc-600 shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">Sign Up</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2">
                    {/* Left column */}
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="name" className="dark:text-white mb-2 block">Name</Label>
                            <Input {...register("name")} id="name" className="dark:bg-zinc-800" />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        <div>
                            <Label htmlFor="address" className="dark:text-white mb-2 block">Address</Label>
                            <Input {...register("address")} id="address" className="dark:bg-zinc-800" />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                        </div>

                        <div>
                            <Label htmlFor="phone" className="dark:text-white mb-2 block">Phone</Label>
                            <Input {...register("phone")} id="phone" className="dark:bg-zinc-800" />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                            {mobileExists && <p className="text-red-500 text-sm">Phone number already exists</p>}
                        </div>

                        <div>
                            <Label htmlFor="password" className="dark:text-white mb-2 block">Password</Label>
                            <Input {...register("password")} id="password" type="password" className="dark:bg-zinc-800" />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <div>
                            <Label htmlFor="role" className="dark:text-white mb-2 block">Role</Label>
                            <select
                                id="role"
                                {...register("role")}
                                className="w-full border px-3 py-2 rounded-md dark:bg-zinc-800 dark:text-white border-dotted"
                            >
                                <option value="">Select role</option>
                                {Object.values(Role).map(role => (
                                    <option key={role} value={role}>{role}</option>
                                ))}
                            </select>
                            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="rate" className="dark:text-white mb-2 block">Rate</Label>
                            <Input {...register("rate")} id="rate" type="number" className="dark:bg-zinc-800" />
                            {errors.rate && <p className="text-red-500 text-sm">{errors.rate.message}</p>}
                        </div>

                        <div>
                            <Label htmlFor="bankName" className="dark:text-white mb-2 block">Bank Name</Label>
                            <Input {...register("bankName")} id="bankName" className="dark:bg-zinc-800" />
                            {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName.message}</p>}
                        </div>

                        <div>
                            <Label htmlFor="bankAccountNumber" className="dark:text-white mb-2 block">Account Number</Label>
                            <Input {...register("bankAccountNumber")} id="bankAccountNumber" className="dark:bg-zinc-800" />
                            {errors.bankAccountNumber && <p className="text-red-500 text-sm">{errors.bankAccountNumber.message}</p>}
                        </div>

                        <div>
                            <Label htmlFor="bankIFSC" className="dark:text-white mb-2 block">IFSC Code</Label>
                            <Input {...register("bankIFSC")} id="bankIFSC" className="dark:bg-zinc-800" />
                            {errors.bankIFSC && <p className="text-red-500 text-sm">{errors.bankIFSC.message}</p>}
                        </div>

                        <div>
                            <Label htmlFor="picture" className="dark:text-white mb-2 block">Upload Picture</Label>
                            <Input
                                {...register("picture")}
                                type="file"
                                accept="image/*"
                                id="picture"
                                onChange={handleImagePreview}
                                className="dark:bg-zinc-800"
                            />
                            {preview && (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="mt-2 w-24 h-24 rounded-full object-cover border border-dotted"
                                />
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-center">
                        <Button
                            type="submit"
                            className="w-48"
                            disabled={isSubmitting || mobileExists || checkingPhone || phone?.length !== 10}
                        >
                            {isSubmitting ? "Signing up..." : "Sign Up"}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}
