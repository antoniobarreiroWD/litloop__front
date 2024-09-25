import { create } from 'zustand';

const useBookDetailsStore = create((set) => ({
  book: null,
  error: null,
  loading: false,

  fetchBookDetails: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`http://localhost:3001/api/books/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener los detalles del libro');
      }
      const data = await response.json();
      set({ book: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  clearBookDetails: () => set({ book: null }),
}));

export default useBookDetailsStore;
