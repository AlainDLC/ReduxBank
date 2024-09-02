import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import acountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: acountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
