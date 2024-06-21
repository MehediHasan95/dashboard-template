import { createSlice } from "@reduxjs/toolkit";

export type ModalInitialStateTypes = {
  open: boolean;
};

const initialState: ModalInitialStateTypes = {
  open: false,
};

const modalSlice = createSlice({
  name: "common-slice",
  initialState,
  reducers: {
    toggleModal: (state: ModalInitialStateTypes) => {
      state.open = !state.open;
    },
    closeModal: (state: ModalInitialStateTypes) => {
      state.open = false;
    },
  },
});

export const { toggleModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
