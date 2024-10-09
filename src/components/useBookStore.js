import {create} from 'zustand';

const useBookStore = create((set) => ({
  query: '',
  currentPage: 1,
  setSearchQuery: (query) => set({ query }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useBookStore;