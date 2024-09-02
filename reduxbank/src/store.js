import { combineReducers, legacy_createStore as createStore } from "redux";
import acountReducer from "./features/accounts/accountSlice";
import cutomerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: acountReducer,
  customer: cutomerReducer,
});

const store = createStore(rootReducer);
