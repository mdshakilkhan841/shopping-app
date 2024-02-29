import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  setProducts: (items) => set({ products: items }),
}));

export default useProductsStore;
