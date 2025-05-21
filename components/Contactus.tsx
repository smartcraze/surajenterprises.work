'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().min(1, { message: 'Phone number is required' }),
    message: z.string().min(1, { message: 'Message is required' }),
    companyName: z.string().min(1, { message: 'Company name is required' }),
    location: z.string().min(1, { message: 'Location is required' }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
            companyName: '',
            location: '',
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success('Mail successfully sent!');
                form.reset();
            } else {
                toast.error('Failed to send mail.');
                console.error('Server error:', response.statusText);
            }
        } catch (error) {
            toast.error('An error occurred while sending mail.');
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto m-8  " id="contact">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="bg-gray-200 dark:bg-gray-800 shadow-md rounded-lg p-8 border-2 border-dashed border-gray-300 dark:border-gray-600">
                <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Contact Us</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 dark:text-gray-200">Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your Name"
                                                className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 dark:text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 dark:text-gray-200">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="you@example.com"
                                                className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 dark:text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 dark:text-gray-200">Phone</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="123-456-7890"
                                                className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 dark:text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 dark:text-gray-200">Company Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Company Inc."
                                                className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 dark:text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 dark:text-gray-200">Location</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="City, Country"
                                                className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 dark:text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 dark:text-gray-200">Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Your message..."
                                                className="min-h-[120px] resize-none bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 dark:text-red-400" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold py-3 px-8 w-auto transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
