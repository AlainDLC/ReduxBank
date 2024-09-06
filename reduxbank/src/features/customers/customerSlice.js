import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: { fullName, nationalId, createAt: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
/*
  createCustomer: {
      prepare(fullName, nationalId,createAt) {
        return {
          payload: { fullName, nationalId,createAt},
        };
      },
        reducer(state, action) {
 state.fullName = action.payload.fullName;
      state.nationalId = action.payload.nationalId;
      state.createAt = action.payload.createdAt;
      },
      
    },


export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "account/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}
 */
