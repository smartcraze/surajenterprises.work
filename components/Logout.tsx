'use client';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Logout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        toast.error(data?.error || 'Logout failed');
        return;
      }

      toast.success(data.message);
      localStorage.clear();
      sessionStorage.clear();
      router.push('/');
    } catch (err) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={loading}
      variant="outline"
      className="flex items-center gap-2 px-4 py-2 text-sm"
    >
      <LogOut className="w-4 h-4" />
      {loading ? 'Logging out...' : 'Log Out'}
    </Button>
  );
}
