/**
 * @typedef {Object} Product
 * @property {string} id - The unique identifier of the product.
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 */

/**
 * @typedef {Object} CartStore
 * @property {Product[]} items - An array of products in the cart.
 * @property {(data: Product) => void} addItem - Function to add a product to the cart.
 * @property {(id: string) => void} removeItem - Function to remove a product from the cart by ID.
 * @property {() => void} removeAll - Function to remove all products from the cart.
 */
// use-cart.js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * @type {CartStore}
 */
const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          // Item already in the cart
          return;
        }

        set({ items: [...get().items, data] });
      },
      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
