import create from 'zustand';

const useFilterStore = create((set) => ({
  query: '',
  category: '',
  year: '',
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
  setYear: (year) => set({ year }),
  setFilters: ({ query, category, year }) => set({ query, category, year }),
}));

export default useFilterStore;
