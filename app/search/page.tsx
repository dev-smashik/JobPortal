// app/search/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import SearchBar from "@/components/search/SearchBar";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  // Add more job properties as needed
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate searching jobs
  const searchJobs = async (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    try {
      // In a real application, this would be an API call to your backend
      // For now, we'll simulate with a timeout
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock search results
      const mockResults: Job[] = [
        { id: "1", title: `${query} Developer`, company: "TechCorp", location: "Remote" },
        { id: "2", title: `Senior ${query} Engineer`, company: "InnovateInc", location: "San Francisco, CA" },
        { id: "3", title: `${query} Specialist`, company: "GlobalTech", location: "New York, NY" },
      ];
      
      setSearchResults(mockResults);
    } catch (error) {
      console.error("Error searching jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Search with initial query from URL
  useEffect(() => {
    if (initialQuery) {
      searchJobs(initialQuery);
    }
  }, [initialQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search Jobs</h1>
      
      <SearchBar 
        placeholder="Search for job titles, companies, or locations..." 
        className="mb-8 max-w-2xl"
        onSearch={searchJobs}
      />
      
      <div className="mt-4">
        {isLoading ? (
          <p>Loading results...</p>
        ) : searchResults.length > 0 ? (
          <div className="space-y-4">
            {searchResults.map((job) => (
              <div 
                key={job.id} 
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow dark:border-gray-700"
              >
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{job.company} • {job.location}</p>
              </div>
            ))}
          </div>
        ) : initialQuery ? (
          <p>No results found for "{initialQuery}"</p>
        ) : null}
      </div>
    </div>
  );
}