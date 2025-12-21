import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface State {
  openedWindowKeys: string[];
}

const initialState: State = {
  openedWindowKeys: [],
};

export const windowsSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    openWindow: (state, action: PayloadAction<string>) => {
      state.openedWindowKeys.push(action.payload);
    },
    closeWindow: (state, action: PayloadAction<string>) => {
      state.openedWindowKeys = state.openedWindowKeys.filter(key => key !== action.payload);
    },
  },
});

export const { openWindow, closeWindow } = windowsSlice.actions;
export default windowsSlice.reducer;