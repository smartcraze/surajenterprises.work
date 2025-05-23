'use client';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      toast.error('Logout failed');
      return;
    }
    const data = await response.json();
    if (data.error) {
      toast.error(data.error);
      return;
    }
    toast.success(data.message);


    localStorage.clear();
    sessionStorage.clear();

    router.push('/');
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleLogout}>
      <LogOut />
      LogOut
    </Button>
  );
}
