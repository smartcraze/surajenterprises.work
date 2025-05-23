"use client";
import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchResults: any[];
  isLoading: boolean;
}

const SearchContext = createContext<SearchContextType | null>(null);

const fetchSearchResults = async (searchTerm: string) => {
  const response = await fetch(`/api/search?user=${searchTerm}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isPhone = /^\d+$/.test(searchTerm);
    const isTooShortPhone = isPhone && searchTerm.length < 5;

    if (!searchTerm.trim() || isTooShortPhone) {
      setSearchResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      setIsLoading(true);
      try {
        const results = await fetchSearchResults(searchTerm.trim());
        setSearchResults(results);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const value = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
      searchResults,
      isLoading,
    }),
    [searchTerm, searchResults, isLoading]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
