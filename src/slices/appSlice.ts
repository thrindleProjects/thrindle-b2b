import { createSlice } from '@reduxjs/toolkit';

const initialState: { isPaymentModalOpen: boolean } = {
  isPaymentModalOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    togglePaymentModal(state) {
      state.isPaymentModalOpen = !state.isPaymentModalOpen;
    },
  },
});

export const { togglePaymentModal } = appSlice.actions;
export default appSlice.reducer;
