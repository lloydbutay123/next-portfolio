import { supabase } from "@/lib/supabase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWorkExperiences = createAsyncThunk(
  "workExperiences/fetchWorkExperiences",
  async (_, thunkApi) => {
    try {
      const { data, error } = await supabase
        .from("work_experiences")
        .select("*")
        .order("end_date", { ascending: false });

      if (error) return thunkApi.rejectWithValue(error.message);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

const workExperiencesSlice = createSlice({
  name: "workExperiences",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkExperiences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkExperiences.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchWorkExperiences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default workExperiencesSlice.reducer;
