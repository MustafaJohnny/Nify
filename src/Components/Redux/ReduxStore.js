import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showMessage: true,
};

const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    toggleShowModal(state) {
      state.showModal = !state.showModal;
    },

    toggleShowMessage(state) {
      state.showMessage = !state.showMessage;
    },
  },
});

const store = configureStore({
  reducer: {
    controler: controlSlice.reducer,
  },
});

export const controlActions = controlSlice.actions;

export default store;
