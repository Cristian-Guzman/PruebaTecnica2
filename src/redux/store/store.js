import { createStore } from "redux";
import reducer from "../reducers/reducer";

const reducers = combineReducers({
    reducer: reducer
})

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;