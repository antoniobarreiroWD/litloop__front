import { create } from 'zustand';

const useBookStore = create((set) => ({
  books: [],
  totalPages: 1,
  currentPage: 1,
  searchQuery: '',
  loading: false,
  error: null,
  setBooks: (books) => set({ books }),
  setTotalPages: (totalPages) => set({ totalPages }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default useBookStore;
