import { supabase } from "@/lib/supabase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPlayground = createAsyncThunk(
  "playground/fetchPlayground",
  async (_, thunkAPI) => {
    try {
      const { data, error } = await supabase
        .from("playground")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) return thunkAPI.rejectWithValue(error.message);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const playgroundSlice = createSlice({
  name: "playground",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayground.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetchPlayground.fulfilled, (state, action) => {
        ((state.items = action.payload), (state.loading = false));
      })
      .addCase(fetchPlayground.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.payload));
      });
  },
});

export default playgroundSlice.reducer;
