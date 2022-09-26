import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ContactState {
  addContactDialog: boolean;
}

const initState: ContactState = {
  addContactDialog: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: initState,
  reducers: {
    showContactDialog: (state) => {
      state.addContactDialog = true;
    },
    hideContactDialog: (state) => {
      state.addContactDialog = false;
    },
  },
});

export const { showContactDialog, hideContactDialog } = contactSlice.actions;

export default contactSlice.reducer;
