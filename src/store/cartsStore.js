import { create } from "zustand";

const useCartStore = create((set) => ({
  allCarts: [],
  addToCart: (product) =>
    set((state) => {
      const { id, title, price } = product;
      const existingItem = state.allCarts.find((item) => item.id === id);

      if (existingItem) {
        // If the product already exists, updating the quantity
        return {
          allCarts: state.allCarts.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // If the product does not exist, add it to the cart
        return {
          allCarts: [...state.allCarts, { id, title, price, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      allCarts: state.allCarts.filter((item) => item.id !== id),
    })),
  increaseQuantity: (id) =>
    set((state) => ({
      allCarts: state.allCarts.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      allCarts: state.allCarts.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    })),
}));

export default useCartStore;
