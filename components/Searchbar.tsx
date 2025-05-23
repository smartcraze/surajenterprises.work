"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useSearch } from "@/hooks/useSearch";

export const SearchInput = () => {
  const { searchTerm, setSearchTerm, searchResults, isLoading } = useSearch();
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleClick = (userId: string) => {
    setSearchTerm("");
    setShowDropdown(false);
    router.push(`/dashboard/${userId}`);
  };

  useEffect(() => {
    setShowDropdown(searchResults.length > 0 && searchTerm.trim().length > 0);
  }, [searchResults, searchTerm]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or phone..."
        className="p-2 w-full border rounded"
      />
      {isLoading && (
        <p className="absolute top-full mt-1 text-sm text-gray-500">Loading...</p>
      )}
      {showDropdown && (
        <ul className="absolute top-full mt-2 w-full bg-white shadow-lg border rounded z-50 max-h-64 overflow-y-auto">
          {searchResults.map((user) => (
            <li
              key={user.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleClick(user.id)}
            >
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-500">{user.phone}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
