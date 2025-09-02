interface ApiResponse<T = any> {
  data: T;
  status: number;
}

interface Api {
  get: <T = any>(url: string) => Promise<ApiResponse<T>>;
  post: <T = any>(url: string, data?: any) => Promise<ApiResponse<T>>;
}

const api: Api = {
  get: async <T = any>(url: string): Promise<ApiResponse<T>> => {
    // Placeholder for API call
    return { data: [] as unknown as T, status: 200 };
  },
  post: async <T = any>(url: string, data?: any): Promise<ApiResponse<T>> => {
    // Placeholder for API call
    return { data: { success: true } as unknown as T, status: 201 };
  },
};

export default api;