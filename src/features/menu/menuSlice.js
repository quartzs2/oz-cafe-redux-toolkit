import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data";

const initialState = data.menu;

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
