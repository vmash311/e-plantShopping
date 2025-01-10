import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add item to the cart, or increment the quantity if it already exists
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;  // Increment quantity if item already exists
        } else {
          state.items.push({ name, image, cost, quantity: 1 });  // Add new item if not in cart
        }
      },
  
      // Remove item from the cart
      removeItem: (state, action) => {
        const nameToRemove = action.payload.name;
        // Filter out the item to remove it by name
        state.items = state.items.filter(item => item.name !== nameToRemove);
      },
  
      // Update quantity for a specific item in the cart
      updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;  // Update the quantity of the item
        }
      },
    },
  });



export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
