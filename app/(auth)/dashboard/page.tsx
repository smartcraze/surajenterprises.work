"use client";

import { useEffect, useState } from "react";
import jwt, { JwtPayload } from "jsonwebtoken";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
interface CustomJwtPayload extends JwtPayload {
    id?: string;
    role?: string;
    url?: string;
}

export default function DashboardPage() {
    const [role, setRole] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const decoded = jwt.decode(token) as CustomJwtPayload;

                setRole(decoded?.role ?? "");
                setId(decoded?.id ?? "");
                setUrl(decoded?.url ?? "");
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
    }, []);

    return (
        <div>
            {url && url.startsWith("http") && (
                <Image
                    src={url}
                    alt="profile"
                    width={100}
                    height={100}
                    unoptimized
                />
            )}
            <h1>Role: {role}</h1>
            <h1>ID: {id}</h1>
            <Button onClick={() => {
                localStorage.removeItem("token");
                router.push("/");
            }}>Logout</Button>
        </div>
    );
}
