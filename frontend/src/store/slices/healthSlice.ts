import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HealthState {
  status: string;
  message: string;
  loading: boolean;
  error: string | null;
}

const initialState: HealthState = {
  status: '',
  message: '',
  loading: false,
  error: null,
};

export const healthSlice = createSlice({
  name: 'health',
  initialState,
  reducers: {
    fetchHealth: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchHealthSuccess: (state, action: PayloadAction<{ status: string; message: string }>) => {
      state.loading = false;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    fetchHealthFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchHealth, fetchHealthSuccess, fetchHealthFailure } = healthSlice.actions;

export default healthSlice.reducer;
