import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"; //PayloadAction

// Define a type for the slice state
export interface AirlineData {
  site: string,
  code: string,
  alliance: string,
  phone: string,
  name: string,
  usName: string,
  __clazz: string,
  defaultName: string,
  logoURL: string
}

export interface AirlineDataList extends Array<AirlineData> {}

// Define the initial state using that type
const initialState = {
  airlineDataList: <AirlineDataList>[],
};

export const airlineDataListSlice = createSlice({
  name: "airlineDataList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAirlineDataList: (state, action: PayloadAction<AirlineDataList>) => {
      state.airlineDataList = action.payload;
    },
  },
});

export const { setAirlineDataList } = airlineDataListSlice.actions;

export default airlineDataListSlice.reducer;
