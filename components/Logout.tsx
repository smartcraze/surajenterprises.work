'use client';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Cookies from 'js-cookie';

export default function Logout() {

    const handleLogout = async () => {
        Cookies.remove('token');
    };

    return (
        <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut />
        </Button>
    );
}
