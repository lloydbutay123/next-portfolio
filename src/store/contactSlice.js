import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendContactMessage = createAsyncThunk(
  "contact/sendMessage",
  async ({ name, subject, company, email, message }, thunkApi) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ name, subject, company, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        return thunkApi.rejectWithValue(data.error);
      }
      return data;
    } catch {
      return thunkApi.rejectWithValue("Server error");
    }
  },
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactMessage.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendContactMessage.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendContactMessage.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = contactSlice.actions;
export default contactSlice.reducer;
