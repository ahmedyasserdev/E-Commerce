import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create an async thunk to fetch data
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId) => {
    try {
      const response = await fetch(`http://localhost:8000/products/${productId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);




const initialState = {
  products: [],
  product: null,
  loading : false
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = false;

    },
   
   
    [fetchProductById.pending]: (state) => {
      state.loading = true;
    },
 
    [fetchProductById.fulfilled]: (state, { payload }) => {
      state.product = payload;
      state.loading = false;
    },
 
 
 
  },
});

export const selectProducts = (state) => state.product.products;
export const selectProduct = (state) => state.product.product;
export const isLoading = (state) => state.product.loading;

export default productSlice.reducer;