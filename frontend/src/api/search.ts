export interface PGItem {
  id: number;
  name: string;
  title: string;
  location: string;
  rating: number;
  price: number;
   beds: number;      // ✅ New field
  contact: string; 
}

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPGResults = async (query: string): Promise<PGItem[]> => {
  const response = await fetch(`${API_URL}/api/search?query=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error("Failed to fetch PG data");
  return await response.json();
};
