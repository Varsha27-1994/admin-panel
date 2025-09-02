import { useState, useEffect, useCallback } from "react";
import api from "../services/api";

interface Company {
  id: number;
  name: string;
}

interface UseCompaniesReturn {
  companies: Company[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const useCompanies = (): UseCompaniesReturn => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCompanies = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
     
      const response = await api.get("/companies");
      setCompanies(response.data as Company[]);

      setCompanies(response.data);
    } catch (err) {
      console.error("Failed to fetch companies:", err);
      setError("Failed to fetch companies");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return { companies, loading, error, refetch: fetchCompanies };
};

export default useCompanies;
