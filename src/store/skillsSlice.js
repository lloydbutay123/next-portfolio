import { supabase } from "@/lib/supabase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSkills = createAsyncThunk(
  "skills/fetchSkills",
  async (_, thunkApi) => {
    try {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) return thunkApi.rejectWithValue(error.message);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

const skillsSlice = createSlice({
  name: "skills",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default skillsSlice.reducer;
