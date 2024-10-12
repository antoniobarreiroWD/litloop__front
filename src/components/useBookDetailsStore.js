import { create } from 'zustand';
import AxiosConfig from '../services/axios'; 

const axiosInstance = new AxiosConfig('books').axios; 

const useBookDetailsStore = create((set) => ({
  book: null,
  error: null,
  loading: false,

  fetchBookDetails: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/${id}`);
      set({ book: response.data, loading: false });
    } catch (error) {
     
      set({ error: error.response?.data?.message || error.message, loading: false });
    }
  },

  clearBookDetails: () => set({ book: null }),
}));

export default useBookDetailsStore;
